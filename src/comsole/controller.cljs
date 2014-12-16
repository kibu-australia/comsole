(ns comsole.controller
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [chan <! >! put! close!]]
            [cljs-http.client :as http]))



;; Controllers can be defined as two types, those which are pure and
;; those which have side-effects.

;; Controllers which are impure and wish to affect app state can fire a new
;; event which is pure to handle the side effect.
;;
;; In other words we have controllers which have the form:
;;
;; (State, Data) -> State' (pure)
;;
;; (State, Data) -> Nil, Optionally Fire off a new event, with recieved data.

(defmulti controller
  (fn [{:keys [type] :as event} state]
    type))

;; Act on route changes
(defmethod controller :route
  [{:keys [data]} state]
  (assoc state :page (:handler data)))

;; Make a query
(defmethod controller :query/run
  [_ state]
  (assoc state :loading? true))

(defmethod controller :binding/hover
  [{:keys [data]} state]
  (assoc state :hover-binding data))

(defmethod controller :binding/unhover
  [_ state]
  (assoc state :hover-binding nil))

(defmethod controller :query/ran
  [[_ data] state]
  (assoc state :data data :loading? false))

;; Fetch the docs
(defmethod controller :docs/fetch
  [_ state]
  (assoc state :loading? true))

(defmethod controller :docs/fetched
  [_ state]
  (assoc state :docs data :loading? false))

(defmethod controller :builder/add-row
  [_ state]
  (update-in state [:query :where] conj {:entity nil :attr nil :value nil}))

(defmethod controller :builder/del-row
  [_ state]
  (update-in state
             (fn [x] (remove (fn [[i m]] (= row i))
                            (map-indexed vector (get-in state [:query :where]))))))

(defmethod controller :builder/edit-cell
  [[_ i j v] state]
  (assoc-in state [:query :where i j]
            (if (nil? v) nil (cljs.reader/read-string v))))

(defmethod controller :builder/find-add
  [[_ find] state]
  (update-in state [:query :find] conj
             (cljs.reader/read-string find)))

(defmethod controller :builder/find-remove
  [{:keys [data]} state]
  (update-in state [:query :find]
             (fn [x] (reduce (fn [c w] (if (not= w data)
                                       (conj c w)
                                       c))
                            []
                            x))))

;; Expand/collapse the doc menu items
(defmethod controller :nav/toggle
  [[_ nav] state]
  (update-in state [:nav nav] not))

(defmethod controller :default
  [[event & _] state]
  (.log js/console (pr-str "No method found for event " event))
  state)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Post controller: for side effects etc

(defmulti post-controller!
  (fn [{:keys [type] :as event} event-bus state] type))

(defmethod post-controller! :default [event event-bus state] nil)

(defmethod post-controller! :docs/fetch [_ event-bus state]
  (go
    (let [docs (<! (http/get "http://localhost:3000/idents"))]
      (fire! event-bus :docs/fetched (:body docs)))))

(defmethod post-controller! :query/run [event event-bus state]
  (go
    (let [query {:find (vec (get-in current-state [:query :find]))
                 :where (mapv (fn [row] [(:entity row)
                                        (:attr row)
                                        (:value row)])
                              (get-in current-state [:query :where]))}
          res (:body (<! (http/post "http://localhost:3000/query"
                                    {:headers {"accept" "application/edn"}
                                     :edn-params {:query query}})))])))
