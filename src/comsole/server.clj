(ns comsole.server
  (:require [ring.util.response :refer [file-response]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [datomic.api :as d :refer [db q history]]
            [comsole.routes :refer [routes]]
            [comsole.config :refer [read-config]]
            [bidi.ring :refer [make-handler]]
            [com.stuartsierra.component :as component]
            [comsole.components :as components]
            [prone.middleware :as prone]
            [ring.middleware.edn :refer [wrap-edn-params]])
  (:gen-class))

(def schema-tx (read-string (slurp "db-resources/schema.edn")))

(defn get-fields [conn]
  (q '[:find ?ident ?doc
       :where [?e :db/ident ?ident]
              [?e :db/doc ?doc]]
     (db (:db conn))))

(defn index [_]
  (file-response "index.html" {:root "resources/public"}))

(defn query [{:keys [conn]}]
  (fn [req]
      {:headers {"Content-Type" "application/edn"}
       :body (let [{:keys [query input]} (:edn-params req)]
               (if input
                 (pr-str (apply q (concat [query (history (db (:db conn)))] input)))
                 (pr-str (apply q (concat [query (history (db (:db conn)))])))))}))

(defn idents [{:keys [conn]}]
  (fn [_]
    {:headers {"Content-Type" "application/edn"}
     :body (pr-str (get-fields conn))}))

(def resources
  {:api/idents idents
   :api/query query})

(defn handler-lookup [deps handler-id]
  (if (= "app" (namespace handler-id))
    index
    ((handler-id resources) deps)))

(defn handler [deps]
  (-> (make-handler routes (partial handler-lookup deps))
      (wrap-resource "public")
      (wrap-file-info)
      (wrap-edn-params)
      (prone/wrap-exceptions)))

(def system
  (-> (component/system-map
       :db (components/new-datomic-db (:datomic-uri (read-config)))
       :server (components/new-web-server 3000 handler))
      (component/system-using
       {:server {:conn :db}})))

(defn -main []
  (alter-var-root #'system component/start))

(alter-var-root #'system component/start)


(-main)
