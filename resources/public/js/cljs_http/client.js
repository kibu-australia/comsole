// Compiled by ClojureScript 0.0-2322
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3548__auto__ = v;if(cljs.core.truth_(and__3548__auto__))
{return (v > (0));
} else
{return and__3548__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__44389_SHARP_,p2__44388_SHARP_){var vec__44391 = clojure.string.split.call(null,p2__44388_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__44391,(0),null);var v = cljs.core.nth.call(null,vec__44391,(1),null);return cljs.core.assoc.call(null,p1__44389_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__44392_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__44392_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__44393){var vec__44395 = p__44393;var k = cljs.core.nth.call(null,vec__44395,(0),null);var v = cljs.core.nth.call(null,vec__44395,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__44396_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44396_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3548__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__3548__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4217__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4217__auto__))
{var params = temp__4217__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__10238__auto___44433 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___44433,channel){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___44433,channel){
return (function (state_44423){var state_val_44424 = (state_44423[(1)]);if((state_val_44424 === (2)))
{var inst_44417 = (state_44423[(2)]);var inst_44418 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_44419 = cljs_http.client.decode_body.call(null,inst_44417,cljs.reader.read_string,"application/edn",inst_44418);var inst_44420 = cljs.core.async.put_BANG_.call(null,channel,inst_44419);var inst_44421 = cljs.core.async.close_BANG_.call(null,channel);var state_44423__$1 = (function (){var statearr_44425 = state_44423;(statearr_44425[(7)] = inst_44420);
return statearr_44425;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44423__$1,inst_44421);
} else
{if((state_val_44424 === (1)))
{var inst_44415 = client.call(null,request);var state_44423__$1 = state_44423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44423__$1,(2),inst_44415);
} else
{return null;
}
}
});})(c__10238__auto___44433,channel))
;return ((function (switch__10223__auto__,c__10238__auto___44433,channel){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_44429 = [null,null,null,null,null,null,null,null];(statearr_44429[(0)] = state_machine__10224__auto__);
(statearr_44429[(1)] = (1));
return statearr_44429;
});
var state_machine__10224__auto____1 = (function (state_44423){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_44423);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e44430){if((e44430 instanceof Object))
{var ex__10227__auto__ = e44430;var statearr_44431_44434 = state_44423;(statearr_44431_44434[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44423);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44430;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44435 = state_44423;
state_44423 = G__44435;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_44423){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_44423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___44433,channel))
})();var state__10240__auto__ = (function (){var statearr_44432 = f__10239__auto__.call(null);(statearr_44432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___44433);
return statearr_44432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___44433,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__44436){var vec__44438 = p__44436;var accept = cljs.core.nth.call(null,vec__44438,(0),null);return ((function (vec__44438,accept){
return (function (request){var temp__4217__auto__ = (function (){var or__3560__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4217__auto__))
{var accept__$1 = temp__4217__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__44438,accept))
};
var wrap_accept = function (client,var_args){
var p__44436 = null;if (arguments.length > 1) {
  p__44436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__44436);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__44439){
var client = cljs.core.first(arglist__44439);
var p__44436 = cljs.core.rest(arglist__44439);
return wrap_accept__delegate(client,p__44436);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__44440){var vec__44442 = p__44440;var content_type = cljs.core.nth.call(null,vec__44442,(0),null);return ((function (vec__44442,content_type){
return (function (request){var temp__4217__auto__ = (function (){var or__3560__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4217__auto__))
{var content_type__$1 = temp__4217__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__44442,content_type))
};
var wrap_content_type = function (client,var_args){
var p__44440 = null;if (arguments.length > 1) {
  p__44440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__44440);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__44443){
var client = cljs.core.first(arglist__44443);
var p__44440 = cljs.core.rest(arglist__44443);
return wrap_content_type__delegate(client,p__44440);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4217__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4217__auto__))
{var params = temp__4217__auto__;var map__44445 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__44445__$1 = ((cljs.core.seq_QMARK_.call(null,map__44445))?cljs.core.apply.call(null,cljs.core.hash_map,map__44445):map__44445);var encoding_opts = cljs.core.get.call(null,map__44445__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__44445__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__44467 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__44467__$1 = ((cljs.core.seq_QMARK_.call(null,map__44467))?cljs.core.apply.call(null,cljs.core.hash_map,map__44467):map__44467);var decoding_opts = cljs.core.get.call(null,map__44467__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__44467__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__10238__auto___44487 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___44487,channel,map__44467,map__44467__$1,decoding_opts,decoding){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___44487,channel,map__44467,map__44467__$1,decoding_opts,decoding){
return (function (state_44477){var state_val_44478 = (state_44477[(1)]);if((state_val_44478 === (2)))
{var inst_44470 = (state_44477[(2)]);var inst_44471 = (function (){var response = inst_44470;return ((function (response,inst_44470,state_val_44478,c__10238__auto___44487,channel,map__44467,map__44467__$1,decoding_opts,decoding){
return (function (p1__44446_SHARP_){return cljs_http.util.transit_decode.call(null,p1__44446_SHARP_,decoding,decoding_opts);
});
;})(response,inst_44470,state_val_44478,c__10238__auto___44487,channel,map__44467,map__44467__$1,decoding_opts,decoding))
})();var inst_44472 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_44473 = cljs_http.client.decode_body.call(null,inst_44470,inst_44471,"application/transit+json",inst_44472);var inst_44474 = cljs.core.async.put_BANG_.call(null,channel,inst_44473);var inst_44475 = cljs.core.async.close_BANG_.call(null,channel);var state_44477__$1 = (function (){var statearr_44479 = state_44477;(statearr_44479[(7)] = inst_44474);
return statearr_44479;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44477__$1,inst_44475);
} else
{if((state_val_44478 === (1)))
{var inst_44468 = client.call(null,request);var state_44477__$1 = state_44477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44477__$1,(2),inst_44468);
} else
{return null;
}
}
});})(c__10238__auto___44487,channel,map__44467,map__44467__$1,decoding_opts,decoding))
;return ((function (switch__10223__auto__,c__10238__auto___44487,channel,map__44467,map__44467__$1,decoding_opts,decoding){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_44483 = [null,null,null,null,null,null,null,null];(statearr_44483[(0)] = state_machine__10224__auto__);
(statearr_44483[(1)] = (1));
return statearr_44483;
});
var state_machine__10224__auto____1 = (function (state_44477){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_44477);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e44484){if((e44484 instanceof Object))
{var ex__10227__auto__ = e44484;var statearr_44485_44488 = state_44477;(statearr_44485_44488[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44477);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44484;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44489 = state_44477;
state_44477 = G__44489;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_44477){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_44477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___44487,channel,map__44467,map__44467__$1,decoding_opts,decoding))
})();var state__10240__auto__ = (function (){var statearr_44486 = f__10239__auto__.call(null);(statearr_44486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___44487);
return statearr_44486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___44487,channel,map__44467,map__44467__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4217__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4217__auto__))
{var params = temp__4217__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__10238__auto___44526 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___44526,channel){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___44526,channel){
return (function (state_44516){var state_val_44517 = (state_44516[(1)]);if((state_val_44517 === (2)))
{var inst_44510 = (state_44516[(2)]);var inst_44511 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_44512 = cljs_http.client.decode_body.call(null,inst_44510,cljs_http.util.json_decode,"application/json",inst_44511);var inst_44513 = cljs.core.async.put_BANG_.call(null,channel,inst_44512);var inst_44514 = cljs.core.async.close_BANG_.call(null,channel);var state_44516__$1 = (function (){var statearr_44518 = state_44516;(statearr_44518[(7)] = inst_44513);
return statearr_44518;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44516__$1,inst_44514);
} else
{if((state_val_44517 === (1)))
{var inst_44508 = client.call(null,request);var state_44516__$1 = state_44516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44516__$1,(2),inst_44508);
} else
{return null;
}
}
});})(c__10238__auto___44526,channel))
;return ((function (switch__10223__auto__,c__10238__auto___44526,channel){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_44522 = [null,null,null,null,null,null,null,null];(statearr_44522[(0)] = state_machine__10224__auto__);
(statearr_44522[(1)] = (1));
return statearr_44522;
});
var state_machine__10224__auto____1 = (function (state_44516){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_44516);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e44523){if((e44523 instanceof Object))
{var ex__10227__auto__ = e44523;var statearr_44524_44527 = state_44516;(statearr_44524_44527[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44528 = state_44516;
state_44516 = G__44528;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_44516){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_44516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___44526,channel))
})();var state__10240__auto__ = (function (){var statearr_44525 = f__10239__auto__.call(null);(statearr_44525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___44526);
return statearr_44525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___44526,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__44531){var map__44532 = p__44531;var map__44532__$1 = ((cljs.core.seq_QMARK_.call(null,map__44532))?cljs.core.apply.call(null,cljs.core.hash_map,map__44532):map__44532);var req = map__44532__$1;var query_params = cljs.core.get.call(null,map__44532__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__44535){var map__44536 = p__44535;var map__44536__$1 = ((cljs.core.seq_QMARK_.call(null,map__44536))?cljs.core.apply.call(null,cljs.core.hash_map,map__44536):map__44536);var request = map__44536__$1;var request_method = cljs.core.get.call(null,map__44536__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__44536__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__3548__auto__ = form_params;if(cljs.core.truth_(and__3548__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__3548__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4217__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4217__auto__))
{var m = temp__4217__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__44537_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__44537_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__44541){var map__44542 = p__44541;var map__44542__$1 = ((cljs.core.seq_QMARK_.call(null,map__44542))?cljs.core.apply.call(null,cljs.core.hash_map,map__44542):map__44542);var req = map__44542__$1;var query_params = cljs.core.get.call(null,map__44542__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4217__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4217__auto__))
{var spec = temp__4217__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4217__auto__,map__44542,map__44542__$1,req,query_params){
return (function (p1__44538_SHARP_){return cljs.core.merge.call(null,p1__44538_SHARP_,query_params);
});})(spec,temp__4217__auto__,map__44542,map__44542__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__44543){var vec__44545 = p__44543;var credentials = cljs.core.nth.call(null,vec__44545,(0),null);return ((function (vec__44545,credentials){
return (function (req){var credentials__$1 = (function (){var or__3560__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__44545,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__44543 = null;if (arguments.length > 1) {
  p__44543 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__44543);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__44546){
var client = cljs.core.first(arglist__44546);
var p__44543 = cljs.core.rest(arglist__44546);
return wrap_basic_auth__delegate(client,p__44543);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4217__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4217__auto__))
{var oauth_token = temp__4217__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__44547){var vec__44549 = p__44547;var req = cljs.core.nth.call(null,vec__44549,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__44547 = null;if (arguments.length > 1) {
  p__44547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__44547);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__44550){
var url = cljs.core.first(arglist__44550);
var p__44547 = cljs.core.rest(arglist__44550);
return delete$__delegate(url,p__44547);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__44551){var vec__44553 = p__44551;var req = cljs.core.nth.call(null,vec__44553,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__44551 = null;if (arguments.length > 1) {
  p__44551 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__44551);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__44554){
var url = cljs.core.first(arglist__44554);
var p__44551 = cljs.core.rest(arglist__44554);
return get__delegate(url,p__44551);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__44555){var vec__44557 = p__44555;var req = cljs.core.nth.call(null,vec__44557,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__44555 = null;if (arguments.length > 1) {
  p__44555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__44555);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__44558){
var url = cljs.core.first(arglist__44558);
var p__44555 = cljs.core.rest(arglist__44558);
return head__delegate(url,p__44555);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__44559){var vec__44561 = p__44559;var req = cljs.core.nth.call(null,vec__44561,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__44559 = null;if (arguments.length > 1) {
  p__44559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__44559);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__44562){
var url = cljs.core.first(arglist__44562);
var p__44559 = cljs.core.rest(arglist__44562);
return move__delegate(url,p__44559);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__44563){var vec__44565 = p__44563;var req = cljs.core.nth.call(null,vec__44565,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__44563 = null;if (arguments.length > 1) {
  p__44563 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__44563);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__44566){
var url = cljs.core.first(arglist__44566);
var p__44563 = cljs.core.rest(arglist__44566);
return options__delegate(url,p__44563);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__44567){var vec__44569 = p__44567;var req = cljs.core.nth.call(null,vec__44569,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__44567 = null;if (arguments.length > 1) {
  p__44567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__44567);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__44570){
var url = cljs.core.first(arglist__44570);
var p__44567 = cljs.core.rest(arglist__44570);
return patch__delegate(url,p__44567);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__44571){var vec__44573 = p__44571;var req = cljs.core.nth.call(null,vec__44573,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__44571 = null;if (arguments.length > 1) {
  p__44571 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__44571);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__44574){
var url = cljs.core.first(arglist__44574);
var p__44571 = cljs.core.rest(arglist__44574);
return post__delegate(url,p__44571);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__44575){var vec__44577 = p__44575;var req = cljs.core.nth.call(null,vec__44577,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__44575 = null;if (arguments.length > 1) {
  p__44575 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__44575);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__44578){
var url = cljs.core.first(arglist__44578);
var p__44575 = cljs.core.rest(arglist__44578);
return put__delegate(url,p__44575);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map