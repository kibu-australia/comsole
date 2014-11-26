// Compiled by ClojureScript 0.0-2322
goog.provide('comsole.repl');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('ajax.core');
goog.require('ajax.core');
ajax.core.GET.call(null,"http://localhost:8080",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){eval(response);
return console.log("Connected to Austin nREPL");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (e){return console.log(("Unable to connect to nREPL"));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.raw_format.call(null)], null));

//# sourceMappingURL=repl.js.map