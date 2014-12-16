(ns comsole.client
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [om.core :as om]
   [bidi.bidi :as bidi]
   [pushy.core :as pushy]
   [cljs.core.async :as async :refer [<!]]
   [comsole.views :as views]
   [comsole.routes :as routes]
   [comsole.controller :as cont]
   [comsole.event-bus :as event]
   [com.stuartsierra.component :as component]))

(enable-console-print!)

(defrecord Router [routes]
  component/Lifecycle
  (start [com]
    (println "Starting Router...")
    (pushy/push-state! (partial event/fire! (:event-bus com) :route)
                       (partial bidi/match-route routes)
                       identity))
  
  (stop [com]
    (println "Stopping Router...")))

(defrecord State [config init]
  component/Lifecycle
  (start [com]
    (println "Starting State...")
    (assoc com :state (atom init)))
  
  (stop [com]
    (println "Stopping State...")
    (assoc com :state nil))
  
  ISwap 
  (-swap! [com f]
    (update-in com [:state] #(swap! % f))))

(defrecord OmRoot [config widget]
  component/Lifecycle
  (start [com]
    (println "Starting Om Root...")
    (om/root widget
             (:state (:state com))
           {:target (.getElementById js/document "app")
            :shared {:control (:event-bus com)}})
    (assoc com :root :mounted))
  
  (stop [com]
    (println "Stopping Om Root...")
    (assoc com :root nil)))

(defrecord Controller [config controller]
  component/Lifecycle
  (start [com]
    (println "Starting Controller...")
    (go-loop []
      (let [event (<! (get-in com [:event-bus :bus]))]
        (println (pr-str event))
        (cont/post-controller! event event-bus state)
        (swap! (:state com) (partial controller event))
        (recur))))
  
  (stop [com]
    (println "Stopping Controller...")))

(defn new-router     [opts] (map->Router opts))
(defn new-state      [opts] (map->State opts))
(defn new-om-root    [opts] (map->OmRoot opts))
(defn new-controller [opts] (map->Controller opts))

(def init-state
  {:queries []
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
   :page :app/docs
   :hover-binding nil})

(defn new-system []
  (-> (component/system-map
       :state      (new-state {:init init-state})
       :event-bus  (event/new-event-bus)
       :router     (new-router {:routes routes/routes})
       :om-root    (new-om-root {:widget views/widget})
       :controller (new-controller {:controller cont/controller}))
      (component/system-using
       {:router     {:event-bus :event-bus}
        :controller {:event-bus :event-bus
                     :state     :state}
        :om-root    {:state  :state
                     :event-bus :event-bus}})))

(def ^:dynamic system (new-system))

;; We use set! instead of altar-var-root because cljs doesnt have vars
(set! system (component/start system))
