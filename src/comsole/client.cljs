(ns comsole.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [om.core :as om]
   [bidi.bidi :as bidi]
   [pushy.core :as pushy]
   [om-tools.core :refer-macros [defcomponentk]]
   [sablono.core :as html :refer-macros [html]]
   [cljs.core.async :as async :refer [chan <! put!]]
   [ajax.core :as ajax]
   [cljs-http.client :as http]
   [comsole.views :as views]
   [comsole.routes :as routes]))

(enable-console-print!)
(def event-bus (chan))

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

(defmulti controller
  (fn [[event & opts] state] event))

;; Act on route changes
(defmethod controller :route
  [[_ match] state]
  (assoc state :page (:handler match)))

;; Make a query
(defmethod controller :query/run
  [_ state]
  (go
    (let [query {:find (vec (get-in state [:query :find]))
                 :where (mapv (fn [row] [(:entity row)
                                         (:attr row)
                                         (:value row)])
                              (get-in state [:query :where]))}
          res (:body (<! (http/post "http://localhost:3000/query"
                                    {:headers {"accept" "application/edn"}
                                     :edn-params {:query query}})))]
      (assoc state :data res))))

;; Fetch the docs
(defmethod controller :docs/fetch
  [_ state]
  (go
    (assoc state
      :docs
      (:body (<! (http/get "http://localhost:3000/idents"
                           {:headers {"accept" "application/edn"}}))))))


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
             (cljs.reader.read-string find)))

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

(go-loop []
  (let [event (<! event-bus)]
    (println (pr-str event))
    (swap! state assoc :loading? true)
    (swap! state (partial controller event))
    (swap! state assoc :loading? false)
    (recur)))

(om/root views/widget
         state
         {:target (.getElementById js/document "app")
          :shared {:control event-bus}})

(put! event-bus [:docs/fetch])
