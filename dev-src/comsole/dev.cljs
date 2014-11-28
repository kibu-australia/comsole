(ns comsole.dev
  (:require [figwheel.client :as fw]
            [weasel.repl :as ws-repl]
            [comsole.client :as client]))

(fw/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback client/main)

(ws-repl/connect "ws://localhost:9001")
