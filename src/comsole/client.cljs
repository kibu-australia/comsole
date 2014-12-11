(ns comsole.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [om.core :as om]
   [bidi.bidi :as bidi]
   [pushy.core :as pushy]
   [om-tools.core :refer-macros [defcomponentk]]
   [sablono.core :as html :refer-macros [html]]
   [cljs.core.async :as async :refer [chan <! put! close!]]
   [cljs-http.client :as http]
   [comsole.views :as views]
   [comsole.routes :as routes]
   [com.stuartsierra.component :as component]))

;; Architecture
;;
;;             
;;  Event Bus   App State 
;;  |      |       |
;;  |      |       
;; Router  +------------+
;;  |      |            |
;;  |     Cont A      Cont B 


(enable-console-print!)

(def event-bus (chan))

(defrecord EventBus []
  component/Lifecycle
  (start [com]
    (println "Starting EventBus...")
    (assoc com :bus (chan)))
  
  (stop [com]
    (println "Stopping EventBus...")
    (close! (:bus com))
    (assoc com :bus nil)))

(defn new-event-bus [] (map->EventBus {}))

;; The router depends on routes which is static (config) defined by bidi.
;; It requires the event bus to communicate on.
;; Internally our router will rely on Pushy.
;; When it receives events it will publish these events to the event bus.
(defrecord Router [routes event-bus]
  component/Lifecycle
  (start [com]
    (println "Starting Router...")
    (assoc com :routes routes))
  
  (stop [com]
    (println "Stopping Router...")
    (assoc com :router nil)))

(defn new-router [] (map->Router {}))

(defn new-system []
  (-> (component/system-map
       :event-bus (new-event-bus)
       :router (new-router {:routes routes/routes}))
      (component/system-using
       {:router {:event-bus :event-bus}})))

(def ^:dynamic system (new-system))

;; We use set! instead of altar-var-root because cljs doesnt have vars
(set! system (component/start (new-system)))
(set! system (component/stop (new-system)))

(defonce state
  (atom {:queries []
         :query {:find ['?type '(count ?ident) '?doc]
                 :where [{:entity '?x :attr :db/valueType :value '?t}
                         {:entity '?x :attr :db/ident :value '?ident}
                         {:entity '?t :attr :db/ident :value '?type}
                         {:entity '?t :attr :db/doc :value '?doc}]}
         :data []
         :nav {}
         :docs {}
         :loading? false
         :time-machine? false
         :page :app/docs}))

(defn dispatch [match]
  (put! event-bus [:route match]))

(pushy/push-state! dispatch
                   (partial bidi/match-route routes/routes)
                   identity)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Event controller

(defmulti controller
  (fn [[event & opts] state] event))

;; Act on route changes
(defmethod controller :route
  [[_ match] state]
  (assoc state :page (:handler match)))

;; Make a query
(defmethod controller :query/run
  [_ state]
  (assoc state :loading? true))

(defmethod controller :query/ran
  [[_ data] state]
  (assoc state :data data :loading? false))

;; Fetch the docs
(defmethod controller :docs/fetch
  [_ state]
  (assoc state :loading? true))

(defmethod controller :docs/fetched
  [[_ data] state]
  (assoc state :docs data :loading? false))

(defmethod controller :builder/add-row
  [_ state]
  (update-in state [:query :where] conj {:entity nil :attr nil :value nil}))

(defmethod controller :builder/del-row
  [[_ row] state]
  (update-in state [:query :where]
             (fn [x] (remove (fn [[i m]] (= row i))
                            (map-indexed vector (get-in state [:query :where]))))))

(defmethod controller :builder/edit-cell
  [[_ i j v] state]
  (assoc-in state [:query :where i j]
            (if (nil? v) nil (cljs.reader/read-string v))))

(defmethod controller :builder/find-add
  [[_ find] state]
  (update-in state [:query :find] conj
             (cljs.reader/read-string find)))

(defmethod controller :builder/find-remove
  [[_ find] state]
  (update-in state [:query :find]
             (fn [x] (reduce (fn [c w] (if (not= w find)
                                       (conj c w)
                                       c))
                            []
                            x))))

;; Expand/collapse the doc menu items
(defmethod controller :nav/toggle
  [[_ nav] state]
  (update-in state [:nav nav] not))

(defmethod controller :default
  [[event & _] state]
  (.log js/console (pr-str "No method found for event " event))
  state)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Post controller: for side effects etc

(defmulti post-controller!
  (fn [[event & args] previous-state current-state] event))

(defmethod post-controller! :default [_ _ _] nil)

(defmethod post-controller! :docs/fetch [_ _ _]
  (go
    (let [docs (<! (http/get "http://localhost:3000/idents"
                             {:headers {"accept" "application/edn"}}))]
      (>! event-bus [:docs/fetched (:body docs)]))))

(defmethod post-controller! :query/run [_ _ current-state]
  (go
    (let [query {:find (vec (get-in current-state [:query :find]))
                 :where (mapv (fn [row] [(:entity row)
                                        (:attr row)
                                        (:value row)])
                              (get-in current-state [:query :where]))}
          res (:body (<! (http/post "http://localhost:3000/query"
                                    {:headers {"accept" "application/edn"}
                                     :edn-params {:query query}})))]
      (>! event-bus [:query/ran res]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Main event loop

(go-loop []
  (let [event (<! event-bus)
        previous-state @state]
    (.log js/console (pr-str "Event for " (first event)))
    (swap! state (partial controller event))
    (post-controller! event previous-state @state)
    (recur)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Root OM component

(defn main []
  (om/root views/widget
           state
           {:target (.getElementById js/document "app")
            :shared {:control event-bus}}))

(main)

(put! event-bus [:docs/fetch])
 
