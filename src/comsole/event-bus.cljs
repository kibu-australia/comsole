(ns comsole.event-bus
  (:require
   [om.core :as om]
   [cljs.core.async :as async :refer [chan <! put! close! take!]]
   [com.stuartsierra.component :as component]))

(defprotocol IEventBus
  (fire! [com type data]
    "Creates a new event and puts it on the bus.
    
     Event anatomy:
     {:type :some/event
      :data {:possible :payload}
      :uuid uuid
      :date #inst}")

  (respond! [com]
    "Get an event from the channel"))

(defrecord EventBus []
  component/Lifecycle
  (start [com]
    (println "Starting EventBus...")
    (assoc com :bus (chan)))
  
  (stop [com]
    (println "Stopping EventBus...")
    (close! (:bus com))
    (assoc com :bus nil))

  IEventBus
  (fire! [com type]
    (fire! com type nil))
  (fire! [com type data]
    (when-let [chan (:bus com)]
      (put! chan {:type type
                  :data data
                  :uuid nil
                  :time (js/Date.)})))
  (respond! [com]
    (take! (:bus com))))

  

(defn new-event-bus  []     (map->EventBus {}))
