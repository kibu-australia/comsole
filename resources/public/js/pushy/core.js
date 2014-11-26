// Compiled by ClojureScript 0.0-2322
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.history.EventType');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.Html5History');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.events');
pushy.core.on_click = (function on_click(funk){return goog.events.listen(document,"click",funk);
});
/**
* Recursively find a href value
* 
* This hack is because a user might click on a <span> nested in an <a> element
*/
pushy.core.recur_href = (function recur_href(target){if(cljs.core.truth_(target.href))
{return target.href;
} else
{if(cljs.core.truth_(target.parentNode))
{return recur_href.call(null,target.parentNode);
} else
{return null;
}
}
});
pushy.core.update_history_BANG_ = (function update_history_BANG_(h){h.setUseFragment(false);
h.setPathPrefix("");
h.setEnabled(true);
return h;
});
pushy.core.set_retrieve_token_BANG_ = (function set_retrieve_token_BANG_(t){t.retrieveToken = (function (path_prefix,location){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search));
});
return t;
});
pushy.core.set_create_url_BANG_ = (function set_create_url_BANG_(t){t.createUrl = (function (token,path_prefix,location){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token));
});
return t;
});
pushy.core.transformer = pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer())));
pushy.core.history = pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,pushy.core.transformer)));
/**
* Sets the history state
*/
pushy.core.set_token_BANG_ = (function() {
var set_token_BANG_ = null;
var set_token_BANG___1 = (function (token){return pushy.core.history.setToken(token);
});
var set_token_BANG___2 = (function (token,title){return pushy.core.history.setToken(token,title);
});
set_token_BANG_ = function(token,title){
switch(arguments.length){
case 1:
return set_token_BANG___1.call(this,token);
case 2:
return set_token_BANG___2.call(this,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_token_BANG_.cljs$core$IFn$_invoke$arity$1 = set_token_BANG___1;
set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = set_token_BANG___2;
return set_token_BANG_;
})()
;
/**
* Replaces the current history state without affecting the rest of the history stack
*/
pushy.core.replace_token_BANG_ = (function() {
var replace_token_BANG_ = null;
var replace_token_BANG___1 = (function (token){return pushy.core.history.replaceToken(token);
});
var replace_token_BANG___2 = (function (token,title){return pushy.core.history.replaceToken(token,title);
});
replace_token_BANG_ = function(token,title){
switch(arguments.length){
case 1:
return replace_token_BANG___1.call(this,token);
case 2:
return replace_token_BANG___2.call(this,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_token_BANG_.cljs$core$IFn$_invoke$arity$1 = replace_token_BANG___1;
replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = replace_token_BANG___2;
return replace_token_BANG_;
})()
;
/**
* Returns the current token
*/
pushy.core.get_token = (function get_token(){return pushy.core.history.getToken();
});
/**
* Returns whether Html5History is supported
*/
pushy.core.supported_QMARK_ = (function supported_QMARK_(window){return goog.history.Html5History.isSupported(window);
});
/**
* Initializes push state using goog.history.Html5History
* 
* Adds an event listener to all click events and dispatches `dispatch-fn`
* when the target element contains a href attribute that matches
* any of the routes returned by `match-fn`
* 
* Takes in three functions:
* * dispatch-fn: the function that dispatches when a match is found
* * match-fn: the function used to check if a particular route exists
* * identity-fn: (optional) extract the route from value returned by match-fn
*/
pushy.core.push_state_BANG_ = (function() {
var push_state_BANG_ = null;
var push_state_BANG___2 = (function (dispatch_fn,match_fn){return push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});
var push_state_BANG___3 = (function (dispatch_fn,match_fn,identity_fn){goog.events.listen(pushy.core.history,goog.history.EventType.NAVIGATE,(function (e){var temp__4217__auto__ = identity_fn.call(null,match_fn.call(null,e.token));if(cljs.core.truth_(temp__4217__auto__))
{var match = temp__4217__auto__;return dispatch_fn.call(null,match);
} else
{return null;
}
}));
var temp__4219__auto___48336 = identity_fn.call(null,match_fn.call(null,pushy.core.get_token.call(null)));if(cljs.core.truth_(temp__4219__auto___48336))
{var match_48337 = temp__4219__auto___48336;dispatch_fn.call(null,match_48337);
} else
{}
return pushy.core.on_click.call(null,(function (e){var temp__4219__auto__ = pushy.core.recur_href.call(null,e.target);if(cljs.core.truth_(temp__4219__auto__))
{var href = temp__4219__auto__;var path = goog.Uri.parse(href).getPath();if(cljs.core.truth_((function (){var and__3548__auto__ = identity_fn.call(null,match_fn.call(null,path));if(cljs.core.truth_(and__3548__auto__))
{return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else
{return and__3548__auto__;
}
})()))
{pushy.core.set_token_BANG_.call(null,path,e.target.title);
return e.preventDefault();
} else
{return null;
}
} else
{return null;
}
}));
});
push_state_BANG_ = function(dispatch_fn,match_fn,identity_fn){
switch(arguments.length){
case 2:
return push_state_BANG___2.call(this,dispatch_fn,match_fn);
case 3:
return push_state_BANG___3.call(this,dispatch_fn,match_fn,identity_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = push_state_BANG___2;
push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = push_state_BANG___3;
return push_state_BANG_;
})()
;

//# sourceMappingURL=core.js.map