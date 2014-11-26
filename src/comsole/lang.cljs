(ns comsole.lang)

(def ^:dynamic lang :en)

(def dict
  {:en {:app/queries {:default "Queries"}
        :app/docs    {:default "Documentation"}
        :app/browse  {:default "Browse"}
        :app/builder {:default "Builder"}}})

(defn std [x]
  (get-in dict [lang x :default]))
