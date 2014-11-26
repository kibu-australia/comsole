(ns comsole.server
  (:require [ring.middleware.cors :as cors]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :refer [file-response]]
            [compojure.response :as response]
            [datomic.api :as d :refer [db q history]]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [comsole.config :refer [read-config]]
            [ring.middleware.edn :refer [wrap-edn-params]])
  (:gen-class))

(def routes
  ["/" {""         :app/home 
        "/docs"    :app/docs
        "/browse"  :app/browse
        "/queries" :app/queries}])

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

(defn index []
  (file-response "index.html" {:root "web-resources/pages"}))

(defroutes routes
  (GET "/" [] (index))
  (GET "/docs" [] (index))
  (GET "/browse" [] (index))
  (GET "/queries" [] (index))
  (GET "/builder" [] (index))
  (GET  "/idents" [] {:headers {"Content-Type" "application/edn"}
                      :body (pr-str (get-fields))})
  (POST "/query"  [] (fn [req]
                       (println req)
                       {:headers {"Content-Type" "application/edn"}
                        :body (let [{:keys [query input]} (:edn-params req)]
                                (println query input)
                                (if input
                                  (pr-str (apply q (concat [query (history (db @conn))] input)))
                                  (pr-str (apply q (concat [query (history (db @conn))])))))}))
   
  (route/resources "/"))

(def app
  (-> routes
      (handler/api)
      (wrap-edn-params)))

(defn -main [& [port]]
  (init-conn)
  (let [port (Integer. (or port (:port (read-config)) (System/getenv "PORT") 3000))]
    (jetty/run-jetty app {:port port :join? false})
    (println "Started server on port" port)))
