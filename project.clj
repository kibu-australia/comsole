;   Copyright (c) 2014 Kevin Bell. All rights reserved.
;   See the file license.txt for copying permission.

(defproject comsole "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha1"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [com.stuartsierra/component "0.2.2"]
                 [ring "1.2.1"]
                 [ring/ring-defaults "0.1.2"]
                 [fogus/ring-edn "0.2.0"]
                 [http-kit "2.1.18"]
                 [om "0.7.3"]
                 [sablono "0.2.22"]
                 [cljs-http "0.1.16"]
                 [prismatic/om-tools "0.3.2"]
                 [bidi "1.12.0"]
                 [kibu/pushy "0.2.1"]
                 [prone "0.6.0"]
                 [com.facebook/react "0.11.2"]
                 [com.datomic/datomic-free "0.9.4815.10"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-resource "0.3.1"]
            [com.keminglabs/cljx "0.4.0" :exclusions [org.clojure/clojure]]]
  :source-paths ["src"]
  :target-path "target/"
  :uberjar-exclusions [#".*\.cljs"]
  :cljx {:builds [{:source-paths ["src/comsole"]
                   :output-path "target/classes"
                   :rules :clj}
                  {:source-paths ["src/comsole"]
                   :output-path "target/classes"
                   :rules :cljs}]}
  :cljsbuild {:builds {:dev {:source-paths ["target/classes" "src"]
                             :compiler {:output-to "resources/public/js/main.js"
                                        :output-dir "resources/public/js"
                                        :optimizations :none
                                        :pretty-print true
                                        :source-map true}}
                       :prod {:source-paths ["src"]
                              :compiler {:output-to "dist/static/js/main.js"
                                         :optimizations :advanced
                                         :pretty-print false
                                         :preamble ["react/react.min.js"]
                                         :externs ["react/externs/react.js"]}}}})
