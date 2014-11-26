// Compiled by ClojureScript 0.0-2322
goog.provide('bidi.bidi');
goog.require('cljs.core');
goog.require('cemerick.url');
goog.require('clojure.walk');
goog.require('cljs.core.match');
goog.require('cemerick.url');
goog.require('cemerick.url');
goog.require('clojure.walk');
goog.require('clojure.walk');
bidi.bidi.ParameterEncoding = (function (){var obj43404 = {};return obj43404;
})();
bidi.bidi.encode_parameter = (function encode_parameter(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$ParameterEncoding$encode_parameter$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.encode_parameter[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.encode_parameter["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ParameterEncoding.encode-parameter",_);
}
}
})().call(null,_);
}
});
cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$ = true;
cljs.core.Keyword.prototype.bidi$bidi$ParameterEncoding$encode_parameter$arity$1 = (function (k){var k__$1 = this;return cemerick.url.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,k__$1))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.namespace.call(null,k__$1))?"/":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k__$1))));
});
(bidi.bidi.ParameterEncoding["number"] = true);
(bidi.bidi.encode_parameter["number"] = (function (s){return s;
}));
(bidi.bidi.ParameterEncoding["string"] = true);
(bidi.bidi.encode_parameter["string"] = (function (s){return s;
}));
bidi.bidi.PatternSegment = (function (){var obj43406 = {};return obj43406;
})();
bidi.bidi.segment_regex_group = (function segment_regex_group(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$segment_regex_group$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.segment_regex_group[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.segment_regex_group["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.segment-regex-group",_);
}
}
})().call(null,_);
}
});
bidi.bidi.param_key = (function param_key(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$PatternSegment$param_key$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$param_key$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.param_key[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.param_key["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.param-key",_);
}
}
})().call(null,_);
}
});
bidi.bidi.transform_param = (function transform_param(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$PatternSegment$transform_param$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$transform_param$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.transform_param[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.transform_param["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.transform-param",_);
}
}
})().call(null,_);
}
});
bidi.bidi.unmatch_segment = (function unmatch_segment(_,params){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$unmatch_segment$arity$2(_,params);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.unmatch_segment[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.unmatch_segment["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.unmatch-segment",_);
}
}
})().call(null,_,params);
}
});
bidi.bidi.matches_QMARK_ = (function matches_QMARK_(_,s){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$PatternSegment$matches_QMARK_$arity$2(_,s);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.matches_QMARK_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.matches_QMARK_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PatternSegment.matches?",_);
}
}
})().call(null,_,s);
}
});
(bidi.bidi.PatternSegment["function"] = true);
(bidi.bidi.segment_regex_group["function"] = (function (this$){var pred__43408 = cljs.core._EQ_;var expr__43409 = this$;if(cljs.core.truth_(pred__43408.call(null,cljs.core.keyword,expr__43409)))
{return "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?";
} else
{if(cljs.core.truth_(pred__43408.call(null,cljs.core.long$,expr__43409)))
{return "-?\\d{1,19}";
} else
{if(cljs.core.truth_(pred__43408.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),expr__43409)))
{throw cljs.core.ex_info.call(null,("Unidentified function qualifier to pattern segment: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.PersistentArrayMap.EMPTY);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43409))));
}
}
}
}));
(bidi.bidi.transform_param["function"] = (function (this$){var pred__43411 = cljs.core._EQ_;var expr__43412 = this$;if(cljs.core.truth_(pred__43411.call(null,cljs.core.keyword,expr__43412)))
{return cljs.core.comp.call(null,cljs.core.keyword,cemerick.url.url_decode);
} else
{if(cljs.core.truth_(pred__43411.call(null,cljs.core.long$,expr__43412)))
{return ((function (pred__43411,expr__43412){
return (function (p1__43407_SHARP_){return Number(p1__43407_SHARP_);
});
;})(pred__43411,expr__43412))
} else
{throw cljs.core.ex_info.call(null,("Unrecognized function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.PersistentArrayMap.EMPTY);
}
}
}));
(bidi.bidi.matches_QMARK_["function"] = (function (this$,s){var pred__43414 = cljs.core._EQ_;var expr__43415 = this$;if(cljs.core.truth_(pred__43414.call(null,cljs.core.keyword,expr__43415)))
{return (s instanceof cljs.core.Keyword);
} else
{if(cljs.core.truth_(pred__43414.call(null,cljs.core.long$,expr__43415)))
{return cljs.core.not.call(null,isNaN(s));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43415))));
}
}
}));
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$ = true;
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (_){var ___$1 = this;return "[A-Za-z0-9\\-\\_\\.]+";
});
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){var ___$1 = this;return cljs.core.identity;
});
cljs.core.Keyword.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,((function (this$__$1){
return (function (){var temp__4217__auto__ = this$__$1.call(null,params);if(cljs.core.truth_(temp__4217__auto__))
{var v = temp__4217__auto__;return bidi.bidi.encode_parameter.call(null,v);
} else
{throw cljs.core.ex_info.call(null,("Cannot form URI without a value given for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)+" parameter"),cljs.core.PersistentArrayMap.EMPTY);
}
});})(this$__$1))
], null)], null)], null);
});
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$ = true;
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){var this$__$1 = this;return bidi.bidi.segment_regex_group.call(null,cljs.core.first.call(null,this$__$1));
});
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (this$){var this$__$1 = this;var k = cljs.core.second.call(null,this$__$1);if((k instanceof cljs.core.Keyword))
{return k;
} else
{throw cljs.core.ex_info.call(null,("If a PatternSegment is represented by a vector, the second\n                              element must be the keyword associated with the pattern: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (this$){var this$__$1 = this;return bidi.bidi.transform_param.call(null,cljs.core.first.call(null,this$__$1));
});
cljs.core.PersistentVector.prototype.bidi$bidi$PatternSegment$unmatch_segment$arity$2 = (function (this$,params){var this$__$1 = this;var k = cljs.core.second.call(null,this$__$1);if(!((k instanceof cljs.core.Keyword)))
{throw cljs.core.ex_info.call(null,("If a PatternSegment is represented by a vector, the second element\n                              must be the key associated with the pattern: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)),cljs.core.PersistentArrayMap.EMPTY);
} else
{}
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((function (k,this$__$1){
return (function (){var temp__4217__auto__ = cljs.core.get.call(null,params,k);if(cljs.core.truth_(temp__4217__auto__))
{var v = temp__4217__auto__;if(cljs.core.truth_(bidi.bidi.matches_QMARK_.call(null,cljs.core.first.call(null,this$__$1),v)))
{return bidi.bidi.encode_parameter.call(null,v);
} else
{throw cljs.core.ex_info.call(null,("Parameter value of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" (key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+") is not compatible with the route pattern "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)),cljs.core.PersistentArrayMap.EMPTY);
}
} else
{throw cljs.core.ex_info.call(null,("No parameter found in params for key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.PersistentArrayMap.EMPTY);
}
});})(k,this$__$1))
], null)], null)], null);
});
RegExp.prototype.bidi$bidi$PatternSegment$ = true;
RegExp.prototype.bidi$bidi$PatternSegment$segment_regex_group$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1["source"]);
});
RegExp.prototype.bidi$bidi$PatternSegment$param_key$arity$1 = (function (_){var ___$1 = this;return null;
});
RegExp.prototype.bidi$bidi$PatternSegment$transform_param$arity$1 = (function (_){var ___$1 = this;return cljs.core.identity;
});
RegExp.prototype.bidi$bidi$PatternSegment$matches_QMARK_$arity$2 = (function (this$,s){var this$__$1 = this;return cljs.core.re_matches.call(null,this$__$1,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
(bidi.bidi.PatternSegment["string"] = true);
(bidi.bidi.segment_regex_group["string"] = (function (this$){return this$;
}));
(bidi.bidi.param_key["string"] = (function (_){return null;
}));
(bidi.bidi.transform_param["string"] = (function (_){return cljs.core.identity;
}));
(bidi.bidi.unmatch_segment["string"] = (function (this$,_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)], null);
}));
bidi.bidi.Pattern = (function (){var obj43418 = {};return obj43418;
})();
bidi.bidi.match_pattern = (function match_pattern(_,path){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$Pattern$match_pattern$arity$2;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$Pattern$match_pattern$arity$2(_,path);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.match_pattern[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.match_pattern["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pattern.match-pattern",_);
}
}
})().call(null,_,path);
}
});
bidi.bidi.unmatch_pattern = (function unmatch_pattern(_,m){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$Pattern$unmatch_pattern$arity$2;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$Pattern$unmatch_pattern$arity$2(_,m);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.unmatch_pattern[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.unmatch_pattern["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pattern.unmatch-pattern",_);
}
}
})().call(null,_,m);
}
});
bidi.bidi.Matched = (function (){var obj43420 = {};return obj43420;
})();
bidi.bidi.resolve_handler = (function resolve_handler(_,m){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$Matched$resolve_handler$arity$2;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$Matched$resolve_handler$arity$2(_,m);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.resolve_handler[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.resolve_handler["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Matched.resolve-handler",_);
}
}
})().call(null,_,m);
}
});
bidi.bidi.unresolve_handler = (function unresolve_handler(_,m){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.bidi$bidi$Matched$unresolve_handler$arity$2;
} else
{return and__3548__auto__;
}
})())
{return _.bidi$bidi$Matched$unresolve_handler$arity$2(_,m);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (bidi.bidi.unresolve_handler[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.unresolve_handler["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Matched.unresolve-handler",_);
}
}
})().call(null,_,m);
}
});
/**
* A pair contains a pattern to match (either fully or partially) and an
* expression yielding a handler. The second parameter is a map
* containing state, including the remaining path.
*/
bidi.bidi.match_pair = (function match_pair(p__43421,env){var vec__43423 = p__43421;var pattern = cljs.core.nth.call(null,vec__43423,(0),null);var matched = cljs.core.nth.call(null,vec__43423,(1),null);var temp__4219__auto__ = bidi.bidi.match_pattern.call(null,pattern,env);if(cljs.core.truth_(temp__4219__auto__))
{var match_result = temp__4219__auto__;return bidi.bidi.resolve_handler.call(null,matched,cljs.core.merge.call(null,env,match_result));
} else
{return null;
}
});
/**
* Match the beginning of the :remainder value in m. If matched, update
* the :remainder value in m with the path that remains after matching.
*/
bidi.bidi.match_beginning = (function match_beginning(regex_pattern,env){var temp__4219__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex_pattern)+"(.*)")),new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));if(cljs.core.truth_(temp__4219__auto__))
{var path = temp__4219__auto__;return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else
{return null;
}
});
bidi.bidi.succeed = (function succeed(handler,m){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(m),""))
{return cljs.core.merge.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"remainder","remainder",1046186872)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$ = true;
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var this$__$1 = this;if(cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p__43425){var vec__43426 = p__43425;var k = cljs.core.nth.call(null,vec__43426,(0),null);var v = cljs.core.nth.call(null,vec__43426,(1),null);if((cljs.core.fn_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)))
{return v.call(null,cljs.core.get.call(null,env,k));
} else
{return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,env,k));

}
});})(this$__$1))
,cljs.core.seq.call(null,this$__$1)))
{return env;
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (_,___$1){var ___$2 = this;return null;
});
cljs.core.Keyword.prototype.bidi$bidi$Pattern$ = true;
cljs.core.Keyword.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var this$__$1 = this;if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(env)))
{return env;
} else
{return null;
}
});
cljs.core.Keyword.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,_){var this$__$1 = this;return null;
});
cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$ = true;
cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var this$__$1 = this;var temp__4219__auto__ = (function (){var _PERCENT_ = this$__$1;var _PERCENT___$1 = cljs.core.map.call(null,bidi.bidi.segment_regex_group,_PERCENT_);var _PERCENT___$2 = cljs.core.map.call(null,((function (_PERCENT_,_PERCENT___$1,this$__$1){
return (function (x){return ("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+")");
});})(_PERCENT_,_PERCENT___$1,this$__$1))
,_PERCENT___$1);var _PERCENT___$3 = cljs.core.reduce.call(null,cljs.core.str,_PERCENT___$2);var _PERCENT___$4 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_PERCENT___$3)+"(.*)");var _PERCENT___$5 = cljs.core.re_pattern.call(null,_PERCENT___$4);var _PERCENT___$6 = cljs.core.re_matches.call(null,_PERCENT___$5,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env));var _PERCENT___$7 = cljs.core.next.call(null,_PERCENT___$6);return _PERCENT___$7;
})();if(temp__4219__auto__)
{var groups = temp__4219__auto__;var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,bidi.bidi.param_key,this$__$1),cljs.core.map.call(null,cljs.core.apply,cljs.core.map.call(null,bidi.bidi.transform_param,this$__$1),cljs.core.map.call(null,cljs.core.list,cljs.core.butlast.call(null,groups))))));return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remainder","remainder",1046186872)], null),cljs.core.last.call(null,groups)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.merge,params);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__43424_SHARP_){return bidi.bidi.unmatch_segment.call(null,p1__43424_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(m));
});})(this$__$1))
,this$__$1));
});
(bidi.bidi.Pattern["boolean"] = true);
(bidi.bidi.match_pattern["boolean"] = (function (this$,env){if(cljs.core.truth_(this$))
{return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),"");
} else
{return null;
}
}));
RegExp.prototype.bidi$bidi$Pattern$ = true;
RegExp.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var this$__$1 = this;return bidi.bidi.match_beginning.call(null,("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$__$1))+")"),env);
});
(bidi.bidi.Pattern["string"] = true);
(bidi.bidi.match_pattern["string"] = (function (this$,env){return bidi.bidi.match_beginning.call(null,("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi.bidi.segment_regex_group.call(null,this$))+")"),env);
}));
(bidi.bidi.unmatch_pattern["string"] = (function (this$,_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)], null);
}));
bidi.bidi.unmatch_pair = (function unmatch_pair(v,m){var temp__4219__auto__ = bidi.bidi.unresolve_handler.call(null,cljs.core.second.call(null,v),m);if(cljs.core.truth_(temp__4219__auto__))
{var r = temp__4219__auto__;return cljs.core.merge_with.call(null,cljs.core.concat,bidi.bidi.unmatch_pattern.call(null,cljs.core.first.call(null,v),m),r);
} else
{return null;
}
});
(bidi.bidi.Matched["function"] = true);
(bidi.bidi.resolve_handler["function"] = (function (this$,m){return bidi.bidi.succeed.call(null,this$,m);
}));
(bidi.bidi.unresolve_handler["function"] = (function (this$,m){if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))
{return "";
} else
{return null;
}
}));
cljs.core.Keyword.prototype.bidi$bidi$Matched$ = true;
cljs.core.Keyword.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return bidi.bidi.succeed.call(null,this$__$1,m);
});
cljs.core.Keyword.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))
{return "";
} else
{return null;
}
});
cljs.core.Symbol.prototype.bidi$bidi$Matched$ = true;
cljs.core.Symbol.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return bidi.bidi.succeed.call(null,this$__$1,m);
});
cljs.core.Symbol.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;if(cljs.core._EQ_.call(null,this$__$1,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(m)))
{return "";
} else
{return null;
}
});
cljs.core.LazySeq.prototype.bidi$bidi$Matched$ = true;
cljs.core.LazySeq.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43433_SHARP_){return bidi.bidi.match_pair.call(null,p1__43433_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.LazySeq.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43434_SHARP_){return bidi.bidi.unmatch_pair.call(null,p1__43434_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$ = true;
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43431_SHARP_){return bidi.bidi.match_pair.call(null,p1__43431_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43432_SHARP_){return bidi.bidi.unmatch_pair.call(null,p1__43432_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.List.prototype.bidi$bidi$Matched$ = true;
cljs.core.List.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43429_SHARP_){return bidi.bidi.match_pair.call(null,p1__43429_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.List.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43430_SHARP_){return bidi.bidi.unmatch_pair.call(null,p1__43430_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.PersistentVector.prototype.bidi$bidi$Matched$ = true;
cljs.core.PersistentVector.prototype.bidi$bidi$Matched$resolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43427_SHARP_){return bidi.bidi.match_pair.call(null,p1__43427_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
cljs.core.PersistentVector.prototype.bidi$bidi$Matched$unresolve_handler$arity$2 = (function (this$,m){var this$__$1 = this;return cljs.core.some.call(null,((function (this$__$1){
return (function (p1__43428_SHARP_){return bidi.bidi.unmatch_pair.call(null,p1__43428_SHARP_,m);
});})(this$__$1))
,this$__$1);
});
(bidi.bidi.Matched["string"] = true);
(bidi.bidi.unresolve_handler["string"] = (function (_,___$1){return null;
}));
/**
* Given a route definition data structure and a path, return the
* handler, if any, that matches the path.
* @param {...*} var_args
*/
bidi.bidi.match_route = (function() { 
var match_route__delegate = function (route,path,p__43435){var map__43437 = p__43435;var map__43437__$1 = ((cljs.core.seq_QMARK_.call(null,map__43437))?cljs.core.apply.call(null,cljs.core.hash_map,map__43437):map__43437);var options = map__43437__$1;return cljs.core.dissoc.call(null,bidi.bidi.match_pair.call(null,route,cljs.core.merge.call(null,options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remainder","remainder",1046186872),path,new cljs.core.Keyword(null,"route","route",329891309),route], null))),new cljs.core.Keyword(null,"route","route",329891309));
};
var match_route = function (route,path,var_args){
var p__43435 = null;if (arguments.length > 2) {
  p__43435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return match_route__delegate.call(this,route,path,p__43435);};
match_route.cljs$lang$maxFixedArity = 2;
match_route.cljs$lang$applyTo = (function (arglist__43438){
var route = cljs.core.first(arglist__43438);
arglist__43438 = cljs.core.next(arglist__43438);
var path = cljs.core.first(arglist__43438);
var p__43435 = cljs.core.rest(arglist__43438);
return match_route__delegate(route,path,p__43435);
});
match_route.cljs$core$IFn$_invoke$arity$variadic = match_route__delegate;
return match_route;
})()
;
bidi.bidi.query_string__GT_params = (function query_string__GT_params(q){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__43442){var vec__43443 = p__43442;var k = cljs.core.nth.call(null,vec__43443,(0),null);var v = cljs.core.nth.call(null,vec__43443,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.map.call(null,(function (p1__43439_SHARP_){return clojure.string.split.call(null,p1__43439_SHARP_,/=/);
}),clojure.string.split.call(null,q,/&/))));
});
/**
* Like match-route, but doesn't ignore query params.
* @param {...*} var_args
*/
bidi.bidi.match_route_with_query = (function() { 
var match_route_with_query__delegate = function (route,path,p__43444){var map__43447 = p__43444;var map__43447__$1 = ((cljs.core.seq_QMARK_.call(null,map__43447))?cljs.core.apply.call(null,cljs.core.hash_map,map__43447):map__43447);var options = map__43447__$1;var vec__43448 = clojure.string.split.call(null,path,/\?/);var path__$1 = cljs.core.nth.call(null,vec__43448,(0),null);var query = cljs.core.nth.call(null,vec__43448,(1),null);var query_params = bidi.bidi.query_string__GT_params.call(null,query);return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,bidi.bidi.match_pair.call(null,route,cljs.core.merge.call(null,options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remainder","remainder",1046186872),path__$1,new cljs.core.Keyword(null,"route","route",329891309),route], null))),new cljs.core.Keyword(null,"route","route",329891309)),new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params);
};
var match_route_with_query = function (route,path,var_args){
var p__43444 = null;if (arguments.length > 2) {
  p__43444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return match_route_with_query__delegate.call(this,route,path,p__43444);};
match_route_with_query.cljs$lang$maxFixedArity = 2;
match_route_with_query.cljs$lang$applyTo = (function (arglist__43449){
var route = cljs.core.first(arglist__43449);
arglist__43449 = cljs.core.next(arglist__43449);
var path = cljs.core.first(arglist__43449);
var p__43444 = cljs.core.rest(arglist__43449);
return match_route_with_query__delegate(route,path,p__43444);
});
match_route_with_query.cljs$core$IFn$_invoke$arity$variadic = match_route_with_query__delegate;
return match_route_with_query;
})()
;
bidi.bidi.path_and_params = (function path_and_params(route,handler,params){if((handler == null))
{throw cljs.core.ex_info.call(null,"Cannot form URI from a nil handler",cljs.core.PersistentArrayMap.EMPTY);
} else
{}
var map__43451 = bidi.bidi.unmatch_pair.call(null,route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params], null));var map__43451__$1 = ((cljs.core.seq_QMARK_.call(null,map__43451))?cljs.core.apply.call(null,cljs.core.hash_map,map__43451):map__43451);var params__$1 = cljs.core.get.call(null,map__43451__$1,new cljs.core.Keyword(null,"params","params",710516235));var path = cljs.core.get.call(null,map__43451__$1,new cljs.core.Keyword(null,"path","path",-188191168));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,params__$1)], null);
});
/**
* Given a route definition data structure and a handler returns a set of the params which
* must be satisfied in order to construct the path to that handler
*/
bidi.bidi.route_params = (function route_params(route,handler){return cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(bidi.bidi.path_and_params.call(null,route,handler,cljs.core.PersistentArrayMap.EMPTY))));
});
/**
* Given a route definition data structure, a handler and an option map, return a
* path that would route to the handler. The map must contain the values to any
* parameters required to create the path, and extra values are silently ignored.
* @param {...*} var_args
*/
bidi.bidi.path_for = (function() { 
var path_for__delegate = function (route,handler,p__43452){var map__43455 = p__43452;var map__43455__$1 = ((cljs.core.seq_QMARK_.call(null,map__43455))?cljs.core.apply.call(null,cljs.core.hash_map,map__43455):map__43455);var params = map__43455__$1;var map__43456 = bidi.bidi.path_and_params.call(null,route,handler,params);var map__43456__$1 = ((cljs.core.seq_QMARK_.call(null,map__43456))?cljs.core.apply.call(null,cljs.core.hash_map,map__43456):map__43456);var params__$1 = cljs.core.get.call(null,map__43456__$1,new cljs.core.Keyword(null,"params","params",710516235));var path = cljs.core.get.call(null,map__43456__$1,new cljs.core.Keyword(null,"path","path",-188191168));return cljs.core.reduce.call(null,((function (map__43456,map__43456__$1,params__$1,path,map__43455,map__43455__$1,params){
return (function (url,token){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4217__auto__ = cljs.core.get.call(null,params__$1,token);if(cljs.core.truth_(temp__4217__auto__))
{var f = temp__4217__auto__;return f.call(null);
} else
{return token;
}
})()));
});})(map__43456,map__43456__$1,params__$1,path,map__43455,map__43455__$1,params))
,path);
};
var path_for = function (route,handler,var_args){
var p__43452 = null;if (arguments.length > 2) {
  p__43452 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return path_for__delegate.call(this,route,handler,p__43452);};
path_for.cljs$lang$maxFixedArity = 2;
path_for.cljs$lang$applyTo = (function (arglist__43457){
var route = cljs.core.first(arglist__43457);
arglist__43457 = cljs.core.next(arglist__43457);
var handler = cljs.core.first(arglist__43457);
var p__43452 = cljs.core.rest(arglist__43457);
return path_for__delegate(route,handler,p__43452);
});
path_for.cljs$core$IFn$_invoke$arity$variadic = path_for__delegate;
return path_for;
})()
;
bidi.bidi.FormEncodeable = (function (){var obj43459 = {};return obj43459;
})();
bidi.bidi.form_encode = (function form_encode(x){if((function (){var and__3548__auto__ = x;if(and__3548__auto__)
{return x.bidi$bidi$FormEncodeable$form_encode$arity$1;
} else
{return and__3548__auto__;
}
})())
{return x.bidi$bidi$FormEncodeable$form_encode$arity$1(x);
} else
{var x__4187__auto__ = (((x == null))?null:x);return (function (){var or__3560__auto__ = (bidi.bidi.form_encode[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (bidi.bidi.form_encode["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"FormEncodeable.form-encode",x);
}
}
})().call(null,x);
}
});
(bidi.bidi.FormEncodeable["_"] = true);
(bidi.bidi.form_encode["_"] = (function (x){return bidi.bidi.form_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
}));
cljs.core.PersistentTreeMap.prototype.bidi$bidi$FormEncodeable$ = true;
cljs.core.PersistentTreeMap.prototype.bidi$bidi$FormEncodeable$form_encode$arity$1 = (function (params){var params__$1 = this;var encode = ((function (params__$1){
return (function encode(x){return bidi.bidi.form_encode.call(null,x);
});})(params__$1))
;
var encode_param = ((function (params__$1){
return (function encode_param(p__43464){var vec__43466 = p__43464;var k = cljs.core.nth.call(null,vec__43466,(0),null);var v = cljs.core.nth.call(null,vec__43466,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encode.call(null,v)));
});})(params__$1))
;
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,((function (params__$1){
return (function (p__43467){var vec__43468 = p__43467;var k = cljs.core.nth.call(null,vec__43468,(0),null);var v = cljs.core.nth.call(null,vec__43468,(1),null);if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v)))
{return cljs.core.map.call(null,((function (vec__43468,k,v,params__$1){
return (function (p1__43460_SHARP_){return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__43460_SHARP_], null));
});})(vec__43468,k,v,params__$1))
,v);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null);
}
});})(params__$1))
,params__$1));
});
(bidi.bidi.FormEncodeable["string"] = true);
(bidi.bidi.form_encode["string"] = (function (unencoded){return cemerick.url.url_encode.call(null,unencoded);
}));
/**
* Like path-for, but extra parameters will be appended to the url as query parameters
* rather than silently ignored
* @param {...*} var_args
*/
bidi.bidi.path_with_query_for = (function() { 
var path_with_query_for__delegate = function (route,handler,p__43469){var map__43472 = p__43469;var map__43472__$1 = ((cljs.core.seq_QMARK_.call(null,map__43472))?cljs.core.apply.call(null,cljs.core.hash_map,map__43472):map__43472);var all_params = map__43472__$1;var map__43473 = bidi.bidi.path_and_params.call(null,route,handler,all_params);var map__43473__$1 = ((cljs.core.seq_QMARK_.call(null,map__43473))?cljs.core.apply.call(null,cljs.core.hash_map,map__43473):map__43473);var params = cljs.core.get.call(null,map__43473__$1,new cljs.core.Keyword(null,"params","params",710516235));var path = cljs.core.get.call(null,map__43473__$1,new cljs.core.Keyword(null,"path","path",-188191168));var path__$1 = cljs.core.reduce.call(null,((function (map__43473,map__43473__$1,params,path,map__43472,map__43472__$1,all_params){
return (function (url,token){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4217__auto__ = cljs.core.get.call(null,params,token);if(cljs.core.truth_(temp__4217__auto__))
{var f = temp__4217__auto__;return f.call(null);
} else
{return token;
}
})()));
});})(map__43473,map__43473__$1,params,path,map__43472,map__43472__$1,all_params))
,path);var query_params = cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.apply.call(null,cljs.core.dissoc,all_params,cljs.core.keys.call(null,params))));return cljs.core.apply.call(null,cljs.core.str,path__$1,(cljs.core.truth_(query_params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",bidi.bidi.form_encode.call(null,query_params)], null):null));
};
var path_with_query_for = function (route,handler,var_args){
var p__43469 = null;if (arguments.length > 2) {
  p__43469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return path_with_query_for__delegate.call(this,route,handler,p__43469);};
path_with_query_for.cljs$lang$maxFixedArity = 2;
path_with_query_for.cljs$lang$applyTo = (function (arglist__43474){
var route = cljs.core.first(arglist__43474);
arglist__43474 = cljs.core.next(arglist__43474);
var handler = cljs.core.first(arglist__43474);
var p__43469 = cljs.core.rest(arglist__43474);
return path_with_query_for__delegate(route,handler,p__43469);
});
path_with_query_for.cljs$core$IFn$_invoke$arity$variadic = path_with_query_for__delegate;
return path_with_query_for;
})()
;

/**
* @constructor
* @param {*} prefix
* @param {*} regex
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
bidi.bidi.CompiledPrefix = (function (prefix,regex,__meta,__extmap){
this.prefix = prefix;
this.regex = regex;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
bidi.bidi.CompiledPrefix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4146__auto__,k__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;return cljs.core._lookup.call(null,this__4146__auto____$1,k__4147__auto__,null);
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4148__auto__,k43476,else__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;var G__43478 = (((k43476 instanceof cljs.core.Keyword))?k43476.fqn:null);switch (G__43478) {
case "regex":
return self__.regex;

break;
case "prefix":
return self__.prefix;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43476,else__4149__auto__);

}
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4160__auto__,writer__4161__auto__,opts__4162__auto__){var self__ = this;
var this__4160__auto____$1 = this;var pr_pair__4163__auto__ = ((function (this__4160__auto____$1){
return (function (keyval__4164__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4161__auto__,cljs.core.pr_writer,""," ","",opts__4162__auto__,keyval__4164__auto__);
});})(this__4160__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4161__auto__,pr_pair__4163__auto__,"#bidi.bidi.CompiledPrefix{",", ","}",opts__4162__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null))], null),self__.__extmap));
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4144__auto__){var self__ = this;
var this__4144__auto____$1 = this;return self__.__meta;
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4140__auto__){var self__ = this;
var this__4140__auto____$1 = this;return (new bidi.bidi.CompiledPrefix(self__.prefix,self__.regex,self__.__meta,self__.__extmap,self__.__hash));
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4150__auto__){var self__ = this;
var this__4150__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;var h__3971__auto__ = self__.__hash;if(!((h__3971__auto__ == null)))
{return h__3971__auto__;
} else
{var h__3971__auto____$1 = cljs.core.hash_imap.call(null,this__4141__auto____$1);self__.__hash = h__3971__auto____$1;
return h__3971__auto____$1;
}
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4142__auto__,other__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;if(cljs.core.truth_((function (){var and__3548__auto__ = other__4143__auto__;if(cljs.core.truth_(and__3548__auto__))
{return ((this__4142__auto____$1.constructor === other__4143__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4142__auto____$1,other__4143__auto__));
} else
{return and__3548__auto__;
}
})()))
{return true;
} else
{return false;
}
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4155__auto__,k__4156__auto__){var self__ = this;
var this__4155__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"regex","regex",939488856),null], null), null),k__4156__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4155__auto____$1),self__.__meta),k__4156__auto__);
} else
{return (new bidi.bidi.CompiledPrefix(self__.prefix,self__.regex,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4156__auto__)),null));
}
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4153__auto__,k__4154__auto__,G__43475){var self__ = this;
var this__4153__auto____$1 = this;var pred__43479 = cljs.core.keyword_identical_QMARK_;var expr__43480 = k__4154__auto__;if(cljs.core.truth_(pred__43479.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__43480)))
{return (new bidi.bidi.CompiledPrefix(G__43475,self__.regex,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__43479.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__43480)))
{return (new bidi.bidi.CompiledPrefix(self__.prefix,G__43475,self__.__meta,self__.__extmap,null));
} else
{return (new bidi.bidi.CompiledPrefix(self__.prefix,self__.regex,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4154__auto__,G__43475),null));
}
}
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4158__auto__){var self__ = this;
var this__4158__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null))], null),self__.__extmap));
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4145__auto__,G__43475){var self__ = this;
var this__4145__auto____$1 = this;return (new bidi.bidi.CompiledPrefix(self__.prefix,self__.regex,G__43475,self__.__extmap,self__.__hash));
});
bidi.bidi.CompiledPrefix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4151__auto__,entry__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4152__auto__))
{return cljs.core._assoc.call(null,this__4151__auto____$1,cljs.core._nth.call(null,entry__4152__auto__,(0)),cljs.core._nth.call(null,entry__4152__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4151__auto____$1,entry__4152__auto__);
}
});
bidi.bidi.CompiledPrefix.prototype.bidi$bidi$Pattern$ = true;
bidi.bidi.CompiledPrefix.prototype.bidi$bidi$Pattern$match_pattern$arity$2 = (function (this$,env){var self__ = this;
var this$__$1 = this;var temp__4219__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,self__.regex,new cljs.core.Keyword(null,"remainder","remainder",1046186872).cljs$core$IFn$_invoke$arity$1(env)));if(cljs.core.truth_(temp__4219__auto__))
{var path = temp__4219__auto__;return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"remainder","remainder",1046186872),path);
} else
{return null;
}
});
bidi.bidi.CompiledPrefix.prototype.bidi$bidi$Pattern$unmatch_pattern$arity$2 = (function (this$,env){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.prefix], null)], null);
});
bidi.bidi.CompiledPrefix.cljs$lang$type = true;
bidi.bidi.CompiledPrefix.cljs$lang$ctorPrSeq = (function (this__4180__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi.bidi/CompiledPrefix");
});
bidi.bidi.CompiledPrefix.cljs$lang$ctorPrWriter = (function (this__4180__auto__,writer__4181__auto__){return cljs.core._write.call(null,writer__4181__auto__,"bidi.bidi/CompiledPrefix");
});
bidi.bidi.__GT_CompiledPrefix = (function __GT_CompiledPrefix(prefix,regex){return (new bidi.bidi.CompiledPrefix(prefix,regex));
});
bidi.bidi.map__GT_CompiledPrefix = (function map__GT_CompiledPrefix(G__43477){return (new bidi.bidi.CompiledPrefix(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__43477),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__43477),null,cljs.core.dissoc.call(null,G__43477,new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"regex","regex",939488856))));
});
/**
* Improve performance by composing the regex pattern ahead of time.
*/
bidi.bidi.compile_prefix = (function compile_prefix(s){return bidi.bidi.__GT_CompiledPrefix.call(null,s,cljs.core.re_pattern.call(null,s.replace(/\/(\W)\/g/,"\\$1")));
});
bidi.bidi.compile_route = (function compile_route(route){return clojure.walk.postwalk.call(null,(function (p1__43483_SHARP_){try{if((cljs.core.vector_QMARK_.call(null,p1__43483_SHARP_)) && ((cljs.core.count.call(null,p1__43483_SHARP_) === 2)))
{try{var p1__43483_SHARP__0__43490 = cljs.core.nth.call(null,p1__43483_SHARP_,(0));if(typeof p1__43483_SHARP__0__43490 === 'string')
{var s = cljs.core.nth.call(null,p1__43483_SHARP_,(0));var h = cljs.core.nth.call(null,p1__43483_SHARP_,(1));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi.bidi.compile_prefix.call(null,s),h], null);
} else
{throw cljs.core.match.backtrack;

}
}catch (e43493){if((e43493 instanceof Error))
{var e__10811__auto__ = e43493;if((e__10811__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__10811__auto__;
}
} else
{throw e43493;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e43492){if((e43492 instanceof Error))
{var e__10811__auto__ = e43492;if((e__10811__auto__ === cljs.core.match.backtrack))
{return p1__43483_SHARP_;
} else
{throw e__10811__auto__;
}
} else
{throw e43492;

}
}}),route);
});

//# sourceMappingURL=bidi.js.map