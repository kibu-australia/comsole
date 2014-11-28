(ns comsole.components
  (:require [com.stuartsierra.component :as component]
            [datomic.api :as d]
            [org.httpkit.server :refer [run-server]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Datomic

(defrecord Datomic [uri conn]
  component/Lifecycle
  (start [component]
    (println "Starting datomic")
    (let [db (d/create-database uri)
          conn (d/connect uri)]
      (assoc component :db conn)))
  (stop [component]
    (println "Stopping datomic")
    (assoc component :db nil)))

(defn new-datomic-db [uri]
  (map->Datomic {:uri uri}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; HTTP-Kit

(defrecord WebServer [port server handler]
  component/Lifecycle
  (start [component]
    (println "Starting http-kit")
    (let [server (run-server (handler component) {:port port})]
      (assoc component :server server)))
  (stop [component]
    (println "Stopping http-kit")
    (when server
      (server)
      component)))

(defn new-web-server
  [port handler]
  (map->WebServer {:port port :handler handler}))
