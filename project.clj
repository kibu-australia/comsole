;   Copyright (c) 2014 Kevin Bell. All rights reserved.
;   See the file license.txt for copying permission.

(defproject comsole "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha1"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [ring "1.2.1"]
                 [ring-cors "0.1.0"]
                 [ring-middleware-format "0.4.0"]
                 [compojure "1.1.6"]
                 [cljs-ajax "0.3.0"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [om "0.7.3"]
                 [sablono "0.2.22"]
                 [cljs-http "0.1.16"]
                 [prismatic/om-tools "0.3.2"]
                 [fogus/ring-edn "0.2.0"]
                 [kibu/bidi "1.13"]
                 [kibu/pushy "0.2.1"]
                 [com.datomic/datomic-free "0.9.4815.10"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.8"]
            [lein-resource "0.3.1"]
            [lein-httpd "1.0.0"]
            [lein-shell "0.3.0"]
            [com.keminglabs/cljx "0.4.0" :exclusions [org.clojure/clojure]]
            [fsrun "0.1.2"]]
  :source-paths ["src"]
  :target-path "target/"
  :uberjar-exclusions [#".*\.cljs"]
  :cljx {:builds [{:source-paths ["src/comsole"]
                   :output-path "target/classes"
                   :rules :clj}
                  {:source-paths ["src/comsole"]
                   :output-path "target/classes"
                   :rules :cljs}]}
  :cljsbuild {:builds {:dev {:source-paths ["target/classes" "utils/src" "src"]
                             :compiler {:output-to "resources/public/js/main.js"
                                        :output-dir "resources/public/js"
                                        :optimizations :none
                                        :pretty-print true
                                        :source-map true}}
                       :prod {:source-paths ["src"]
                              :compiler {:output-to "dist/static/js/main.js"
                                         :optimizations :advanced
                                         :pretty-print false
                                         ;; From Om jar
                                         :preamble ["react/react.min.js"]
                                         :externs ["react/externs/react.js"]}}}}
  :ring {:init comsole.server/init-conn
         :handler comsole.server/app}
  :profiles {:dev {;; This needs to be here because of https://github.com/cemerick/austin/issues/23
                    :plugins [[com.cemerick/austin "0.1.4-SNAPSHOT"]]
                    :source-paths ["utils/src"]
                    :repl-options {:init-ns comsole.repl}
                    :resource {:resource-paths ["web-resources/pages"]
                               :target-path "resources/public"
                               :extra-values {:scripts [{:src "../bower_components/react/react.js"}
                                                        {:src "js/goog/base.js"}
                                                        {:src "js/main.js"}
                                                        {:body "goog.require('comsole.client')"}
                                                        {:body "goog.require('comsole.repl')"}]}}}
             :db [:dev {:main comsole.db}]
             :prod {:main comsole.server
                    :target-path "dist/server/"
                    :resource {:resource-paths ["web-resources/pages"]
                               :target-path "dist/static"
                               :extra-values {:scripts [{:src "js/main.js"}]}}}
             :uberjar {:omit-source true
                       :aot :all}}
  :aliases {"bower" ["shell" "bower" "install"]
            "less-debug" ["shell" "lessc" "resources/stylesheets/style.less" "resources/public/css/style.css"
                          "--include-path=bower_components/bootstrap/less/" "--source-map"]
            "less-prod" ["shell" "lessc" "resources/stylesheets/style.less" "dist/static/css/style.css"
                         "--include-path=bower_components/bootstrap/less/" "--compress"]
            "watch-less" ["fschange" "resources/stylesheets/*" "less-debug"]
            "install-db" ["with-profile" "db" "run"]
            "run-client" ["do" "bower," "cljsbuild" "auto" "dev," "less-debug," "resource," "httpd" "8000"]
            "run-server" ["ring" "server-headless"]
            "dist" ["with-profile" "prod" "do" "bower," "uberjar," "cljsbuild" "once" "prod," "less-prod,"
                    "resource"]}
  :clean-targets [:target-path :compile-path "static" "dist"])
