(ns comsole.views
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [om.core :as om]
   [bidi.bidi :as bidi]
   [pushy.core :as pushy]
   [om-tools.core :refer-macros [defcomponentk]]
   [sablono.core :as html :refer-macros [html]]
   [cljs.core.async :as async :refer [chan <! put!]]
   [cljs-http.client :as http]
   [comsole.util :as u]
   [comsole.event-bus :as event]))

(defn bindings [query]
  (let [for-bindings   (filter symbol? (:find query))
        input-bindings (filter symbol? (:input query))
        with-bindings  (filter symbol?
                               (flatten (:where query)))]
    (distinct (concat for-bindings with-bindings))))

(defn add-symbol [v state path]
  (swap! state assoc-in path
         (when-let [binding-str (-> v
                                    (clojure.string/split #" ")
                                    (first))]
           (symbol binding-str))))

(defcomponentk sidebar [[:data docs nav :as app] [:shared control]]
  (render [_]
    (html
     [:div.col-xs-2.sidebar
      [:div.sidebar-content
       [:ul.nav.nav-pills.nav-stacked
        (for [[nspace vs] (group-by (comp namespace first) docs)]
          [:li [:a {:on-click #(put! control [:nav/toggle nspace])}
                [:span
                 (if (get-in nav [nspace])
                   [:span.glyphicon.glyphicon-chevron-down]
                   [:span.glyphicon.glyphicon-chevron-right])
                 (str " " nspace "/")]]
           (when (get-in nav [nspace])
             [:ul.nav.nav-pills.nav-stacked.nested
              (for [v vs]
                [:li [:a {:href (str "/docs")} (name (first v))]])])])]]])))

(defcomponentk docs [[:data docs :as app] [:shared control]]
  (render [_]
    (html
     [:div.col-xs-12
      [:div.page-header [:h1 "Documentation"]]
      (for [[namespace docs] (group-by (comp namespace first) docs)]
        [:div.namespace
         [:h2 (str namespace)]
         (for [[doc desc] docs]
           [:div.doc
            [:h3 (pr-str doc)]
            [:p (str desc)]])])])))

(defcomponentk results [[:data find data loading? :as app] [:shared control]]
  (render [_]
   (html
    [:div
     (if loading?
       [:div.page-header [:h2 "Loading"]]
       [:div.page-header [:h2 "Results " [:small (count data)]]])
     [:div.results
      [:div.time-machine {:style {:position "relative"}}
       [:div.panel.panel-default.time.time-0
        [:table.table.table-striped
         [:thead
          [:tr
           (for [b find]
             [:th (pr-str b)])]]
         [:tbody
          (for [r data]
            [:tr
             (for [d r]
               [:td (pr-str d)])])]]]]]])))

(defcomponentk navbar [[:data page :as app]]
  (render [_]
    (html
     [:div.navbar.navbar-inverse.navbar-fixed-top {:role "navigation"}
      [:div.container-fluid
       [:div.navbar-header
        [:a.navbar-brand {:href "/"} "comsole"]]
       [:div.collapse.navbar-collapse
        [:span (str page)]
        [:ul.nav.navbar-nav
         (for [route [:app/queries
                      :app/builder
                      :app/docs]]
           [:li {:class (when (= page route) "active")}
            (u/link-for route)])]]]])))

(defcomponentk where-row [[:data hover-binding drop-down fields index where] [:shared control]]
  (render [_]
    (html
     [:tr
      (for [j [:entity :attr :value]]
        [:td
         (if-let [r (get where j)]
           [:div.input-blocks
            [:span.binding.input-block 
             {:on-mouse-over  #(event/fire! control :binding/hover r)
              :on-mouse-leave #(event/fire! control :binding/unhover nil)
              :class (if (= r hover-binding) "hover")}
             (str r)
             [:a
              [:span.glyphicon.glyphicon-remove
               {:on-click #(event/fire! control :builder/edit-cell {:row index :val j :new nil})}]]]]

           [:input.form-control
            {:placeholder (str "Please enter a " j)
             :on-key-down #(when (= 13 (.-which %))
                             (put! control [:builder/edit-cell index j (-> % .-target .-value)])
                             (set! (-> % .-target .-value) ""))}])])
      [:td.control [:a.btn.btn-warning
            {:on-click #(put! control [:builder/del-row index])}
            [:span.glyphicon.glyphicon-remove]]]])))

(defcomponentk builder [[:data data query docs loading? hover-binding :as app] [:shared control]]
  (render [_]
    (let [bindings  (bindings query)
          bindings (map (fn [x] [(symbol x) "Binding"])
                         bindings)
          drop-down bindings]
      (html
       [:div
        [:div.page-header [:h3 "Builder"]]
        [:form
         [:div.form-group
          [:label "Name"]
          [:input.form-control
           {:value (:name query)}]]
         [:div.form-group
          [:label "Find"]
          [:div.input-container
           [:div.input-blocks
            (for [find (get-in query [:find])]
              [:span.binding.input-block 
               {:on-mouse-over  #(event/fire! control :binding/hover find)
                :on-mouse-leave #(event/fire! control :binding/unhover nil)
                :class (if (= find hover-binding) "hover")} (str find)
               [:a
                [:span.glyphicon.glyphicon-remove
                 {:on-click #(event/fire! control :builder/find-remove find)}]]])]
           [:input.form-control
            {:on-key-down #(when (= 13 (.-which %))
                             (put! control [:builder/find-add (-> % .-target .-value)])
                             (set!  (-> % .-target .-value) ""))}]]]
         [:div.form-group
          [:label "Inputs"]
          [:input.form-control
           {:value (get-in query [:input])}]]
         [:table.where
          [:thead
           [:tr
            [:th.e "Entity"]
            [:th.a "Attribute"]
            [:th.v "Value"]
            [:th.control ""]]]
          [:tbody
           (for [[i m] (map-indexed vector (get-in query [:where]))]
             (->where-row {:hover-binding hover-binding :fields m :index i :drop-down drop-down :where m}))]]
         [:div.pull-right
          [:a.btn.btn-success
           {:on-click #(put! control [:builder/add-row])}
           [:span.glyphicon.glyphicon-plus]]]]
        [:a.btn.btn-primary {:on-click #(event/fire! control :query/run)}
         "Test"]
        [:a.btn.btn-primary
         "Save"]
        [:hr]
        (->results {:find (:find query) :data data :loading? loading?})]))))

(defcomponentk queries [[:data queries :as app]]
  (render [_]
   (html
    [:div [:div.page-header [:h3 "Queries"]]
     [:ul
      (for [q queries]
        [:li (:name q)])]])))

(defcomponentk widget [[:data hover-binding page queries docs nav data query loading? :as app] [:shared control]]
  (render [_]
    (html
     [:div
      [:div
       (->navbar {:page page})]
      [:div.container-fluid
       [:div.row
        (->sidebar {:docs docs :nav nav})
        [:div.col-xs-10.col-xs-offset-2.main
         (case page
           :app/builder (->builder {:hover-binding hover-binding :query query :docs docs :data data :loading? loading?})
           :app/queries (->queries {:queries queries})
           :app/docs (->docs {:docs docs})
           [:div "404"])]]]])))
