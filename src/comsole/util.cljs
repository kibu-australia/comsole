(ns comsole.util
  (:require [comsole.routes :as routes]
            [bidi.bidi :as bidi]
            [comsole.lang :as lang]))

(defn link-for [route]
  [:a {:href (bidi/path-for routes/routes route)} 
   (lang/std route)])
