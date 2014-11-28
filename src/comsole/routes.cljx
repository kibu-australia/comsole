(ns comsole.routes)

(def routes
  ["/" {""        :app/home
        "docs"    :app/docs
        "browse"  :app/browse
        "queries" :app/queries
        "builder" :app/builder
        "idents"  :api/idents
        "query"   :api/query}])
