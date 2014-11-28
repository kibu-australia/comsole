(ns comsole.server
  (:require [ring.middleware.cors :as cors]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :refer [file-response]]
            [datomic.api :as d :refer [db q history]]
            [comsole.routes :refer routes]
            [comsole.config :refer [read-config]]
            [bidi.ring :refer [make-handler]]
            [ring.middleware.edn :refer [wrap-edn-params]])
  (:gen-class))

(defonce conn (atom nil))

(defn init-conn []
  (reset! conn (d/connect (:datomic-uri (read-config)))))

(defn get-datomic-message []
  (ffirst (q '[:find ?m :where [?e :demo/message ?m]] (db @conn))))

(init-conn)

(def schema-tx (read-string (slurp "db-resources/schema.edn")))

(d/transact @conn (first (get-in schema-tx [:comsole/all :txes])))

(d/transact @conn [{:demo/message "danger"
                    :demo/severity 9
                    :db/id #db/id[:db.part/user -1000]}])

(d/transact @conn [[:db/add 17592186045633 :community/name "Gay life Maple"]])

(defn get-fields []
  (q '[:find ?ident ?doc
       :where [?e :db/ident ?ident]
              [?e :db/doc ?doc]]
     (db @conn)))

(defn index [_]
  (file-response "index.html" {:root "web-resources/pages"}))

(defn query [req]
  {:headers {"Content-Type" "application/edn"}
   :body (let [{:keys [query input]} (:edn-params req)]
           (if input
             (pr-str (apply q (concat [query (history (db @conn))] input)))
             (pr-str (apply q (concat [query (history (db @conn))])))))})

(defn idents [_]
  {:headers {"Content-Type" "application/edn"}
   :body (pr-str (get-fields))})

(def resources
  {:api/idents idents
   :api/query query})

(defn handler-lookup [handler-id]
  (if (= "app" (namespace handler-id))
    index
    (handler-id resources)))

(def app
  (-> (make-handler routes handler-lookup)
      (wrap-edn-params)))

(defn -main [& [port]]
  (init-conn)
  (let [port (Integer. (or port (:port (read-config)) (System/getenv "PORT") 3000))]
    (jetty/run-jetty app {:port port :join? false})
    (println "Started server on port" port)))
