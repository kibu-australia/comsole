// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__44149__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__44149 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__44149__delegate.call(this,m,k,f,x1,x2,xs);};
G__44149.cljs$lang$maxFixedArity = 5;
G__44149.cljs$lang$applyTo = (function (arglist__44150){
var m = cljs.core.first(arglist__44150);
arglist__44150 = cljs.core.next(arglist__44150);
var k = cljs.core.first(arglist__44150);
arglist__44150 = cljs.core.next(arglist__44150);
var f = cljs.core.first(arglist__44150);
arglist__44150 = cljs.core.next(arglist__44150);
var x1 = cljs.core.first(arglist__44150);
arglist__44150 = cljs.core.next(arglist__44150);
var x2 = cljs.core.first(arglist__44150);
var xs = cljs.core.rest(arglist__44150);
return G__44149__delegate(m,k,f,x1,x2,xs);
});
G__44149.cljs$core$IFn$_invoke$arity$variadic = G__44149__delegate;
return G__44149;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8705__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__44159_44165 = cljs.core.seq.call(null,m);var chunk__44160_44166 = null;var count__44161_44167 = (0);var i__44162_44168 = (0);while(true){
if((i__44162_44168 < count__44161_44167))
{var vec__44163_44169 = cljs.core._nth.call(null,chunk__44160_44166,i__44162_44168);var k_44170 = cljs.core.nth.call(null,vec__44163_44169,(0),null);var v_44171 = cljs.core.nth.call(null,vec__44163_44169,(1),null);var m44158_44172 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44158_44172,k_44170,f.call(null,v_44171)));
{
var G__44173 = seq__44159_44165;
var G__44174 = chunk__44160_44166;
var G__44175 = count__44161_44167;
var G__44176 = (i__44162_44168 + (1));
seq__44159_44165 = G__44173;
chunk__44160_44166 = G__44174;
count__44161_44167 = G__44175;
i__44162_44168 = G__44176;
continue;
}
} else
{var temp__4219__auto___44177 = cljs.core.seq.call(null,seq__44159_44165);if(temp__4219__auto___44177)
{var seq__44159_44178__$1 = temp__4219__auto___44177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44159_44178__$1))
{var c__4316__auto___44179 = cljs.core.chunk_first.call(null,seq__44159_44178__$1);{
var G__44180 = cljs.core.chunk_rest.call(null,seq__44159_44178__$1);
var G__44181 = c__4316__auto___44179;
var G__44182 = cljs.core.count.call(null,c__4316__auto___44179);
var G__44183 = (0);
seq__44159_44165 = G__44180;
chunk__44160_44166 = G__44181;
count__44161_44167 = G__44182;
i__44162_44168 = G__44183;
continue;
}
} else
{var vec__44164_44184 = cljs.core.first.call(null,seq__44159_44178__$1);var k_44185 = cljs.core.nth.call(null,vec__44164_44184,(0),null);var v_44186 = cljs.core.nth.call(null,vec__44164_44184,(1),null);var m44158_44187 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44158_44187,k_44185,f.call(null,v_44186)));
{
var G__44188 = cljs.core.next.call(null,seq__44159_44178__$1);
var G__44189 = null;
var G__44190 = (0);
var G__44191 = (0);
seq__44159_44165 = G__44188;
chunk__44160_44166 = G__44189;
count__44161_44167 = G__44190;
i__44162_44168 = G__44191;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8705__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8705__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__44200_44206 = cljs.core.seq.call(null,m);var chunk__44201_44207 = null;var count__44202_44208 = (0);var i__44203_44209 = (0);while(true){
if((i__44203_44209 < count__44202_44208))
{var vec__44204_44210 = cljs.core._nth.call(null,chunk__44201_44207,i__44203_44209);var k_44211 = cljs.core.nth.call(null,vec__44204_44210,(0),null);var v_44212 = cljs.core.nth.call(null,vec__44204_44210,(1),null);var m44199_44213 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44199_44213,f.call(null,k_44211),v_44212));
{
var G__44214 = seq__44200_44206;
var G__44215 = chunk__44201_44207;
var G__44216 = count__44202_44208;
var G__44217 = (i__44203_44209 + (1));
seq__44200_44206 = G__44214;
chunk__44201_44207 = G__44215;
count__44202_44208 = G__44216;
i__44203_44209 = G__44217;
continue;
}
} else
{var temp__4219__auto___44218 = cljs.core.seq.call(null,seq__44200_44206);if(temp__4219__auto___44218)
{var seq__44200_44219__$1 = temp__4219__auto___44218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44200_44219__$1))
{var c__4316__auto___44220 = cljs.core.chunk_first.call(null,seq__44200_44219__$1);{
var G__44221 = cljs.core.chunk_rest.call(null,seq__44200_44219__$1);
var G__44222 = c__4316__auto___44220;
var G__44223 = cljs.core.count.call(null,c__4316__auto___44220);
var G__44224 = (0);
seq__44200_44206 = G__44221;
chunk__44201_44207 = G__44222;
count__44202_44208 = G__44223;
i__44203_44209 = G__44224;
continue;
}
} else
{var vec__44205_44225 = cljs.core.first.call(null,seq__44200_44219__$1);var k_44226 = cljs.core.nth.call(null,vec__44205_44225,(0),null);var v_44227 = cljs.core.nth.call(null,vec__44205_44225,(1),null);var m44199_44228 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44199_44228,f.call(null,k_44226),v_44227));
{
var G__44229 = cljs.core.next.call(null,seq__44200_44219__$1);
var G__44230 = null;
var G__44231 = (0);
var G__44232 = (0);
seq__44200_44206 = G__44229;
chunk__44201_44207 = G__44230;
count__44202_44208 = G__44231;
i__44203_44209 = G__44232;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8705__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__8705__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__44239_44243 = cljs.core.seq.call(null,ks);var chunk__44240_44244 = null;var count__44241_44245 = (0);var i__44242_44246 = (0);while(true){
if((i__44242_44246 < count__44241_44245))
{var k_44247 = cljs.core._nth.call(null,chunk__44240_44244,i__44242_44246);var m44238_44248 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44238_44248,k_44247,f.call(null,k_44247)));
{
var G__44249 = seq__44239_44243;
var G__44250 = chunk__44240_44244;
var G__44251 = count__44241_44245;
var G__44252 = (i__44242_44246 + (1));
seq__44239_44243 = G__44249;
chunk__44240_44244 = G__44250;
count__44241_44245 = G__44251;
i__44242_44246 = G__44252;
continue;
}
} else
{var temp__4219__auto___44253 = cljs.core.seq.call(null,seq__44239_44243);if(temp__4219__auto___44253)
{var seq__44239_44254__$1 = temp__4219__auto___44253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44239_44254__$1))
{var c__4316__auto___44255 = cljs.core.chunk_first.call(null,seq__44239_44254__$1);{
var G__44256 = cljs.core.chunk_rest.call(null,seq__44239_44254__$1);
var G__44257 = c__4316__auto___44255;
var G__44258 = cljs.core.count.call(null,c__4316__auto___44255);
var G__44259 = (0);
seq__44239_44243 = G__44256;
chunk__44240_44244 = G__44257;
count__44241_44245 = G__44258;
i__44242_44246 = G__44259;
continue;
}
} else
{var k_44260 = cljs.core.first.call(null,seq__44239_44254__$1);var m44238_44261 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44238_44261,k_44260,f.call(null,k_44260)));
{
var G__44262 = cljs.core.next.call(null,seq__44239_44254__$1);
var G__44263 = null;
var G__44264 = (0);
var G__44265 = (0);
seq__44239_44243 = G__44262;
chunk__44240_44244 = G__44263;
count__44241_44245 = G__44264;
i__44242_44246 = G__44265;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8705__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__8705__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__44272_44276 = cljs.core.seq.call(null,vs);var chunk__44273_44277 = null;var count__44274_44278 = (0);var i__44275_44279 = (0);while(true){
if((i__44275_44279 < count__44274_44278))
{var v_44280 = cljs.core._nth.call(null,chunk__44273_44277,i__44275_44279);var m44271_44281 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44271_44281,f.call(null,v_44280),v_44280));
{
var G__44282 = seq__44272_44276;
var G__44283 = chunk__44273_44277;
var G__44284 = count__44274_44278;
var G__44285 = (i__44275_44279 + (1));
seq__44272_44276 = G__44282;
chunk__44273_44277 = G__44283;
count__44274_44278 = G__44284;
i__44275_44279 = G__44285;
continue;
}
} else
{var temp__4219__auto___44286 = cljs.core.seq.call(null,seq__44272_44276);if(temp__4219__auto___44286)
{var seq__44272_44287__$1 = temp__4219__auto___44286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44272_44287__$1))
{var c__4316__auto___44288 = cljs.core.chunk_first.call(null,seq__44272_44287__$1);{
var G__44289 = cljs.core.chunk_rest.call(null,seq__44272_44287__$1);
var G__44290 = c__4316__auto___44288;
var G__44291 = cljs.core.count.call(null,c__4316__auto___44288);
var G__44292 = (0);
seq__44272_44276 = G__44289;
chunk__44273_44277 = G__44290;
count__44274_44278 = G__44291;
i__44275_44279 = G__44292;
continue;
}
} else
{var v_44293 = cljs.core.first.call(null,seq__44272_44287__$1);var m44271_44294 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44271_44294,f.call(null,v_44293),v_44293));
{
var G__44295 = cljs.core.next.call(null,seq__44272_44287__$1);
var G__44296 = null;
var G__44297 = (0);
var G__44298 = (0);
seq__44272_44276 = G__44295;
chunk__44273_44277 = G__44296;
count__44274_44278 = G__44297;
i__44275_44279 = G__44298;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8705__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__44299){var vec__44301 = p__44299;var k = cljs.core.nth.call(null,vec__44301,(0),null);var ks = cljs.core.nthnext.call(null,vec__44301,(1));if(cljs.core.truth_(m))
{var temp__4217__auto__ = (function (){var and__3548__auto__ = ks;if(and__3548__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3548__auto__;
}
})();if(cljs.core.truth_(temp__4217__auto__))
{var res = temp__4217__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__8705__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__44310_44316 = cljs.core.seq.call(null,x);var chunk__44311_44317 = null;var count__44312_44318 = (0);var i__44313_44319 = (0);while(true){
if((i__44313_44319 < count__44312_44318))
{var vec__44314_44320 = cljs.core._nth.call(null,chunk__44311_44317,i__44313_44319);var k_44321 = cljs.core.nth.call(null,vec__44314_44320,(0),null);var v_44322 = cljs.core.nth.call(null,vec__44314_44320,(1),null);var m44309_44323 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44309_44323,((typeof k_44321 === 'string')?cljs.core.keyword.call(null,k_44321):k_44321),keywordize_map.call(null,v_44322)));
{
var G__44324 = seq__44310_44316;
var G__44325 = chunk__44311_44317;
var G__44326 = count__44312_44318;
var G__44327 = (i__44313_44319 + (1));
seq__44310_44316 = G__44324;
chunk__44311_44317 = G__44325;
count__44312_44318 = G__44326;
i__44313_44319 = G__44327;
continue;
}
} else
{var temp__4219__auto___44328 = cljs.core.seq.call(null,seq__44310_44316);if(temp__4219__auto___44328)
{var seq__44310_44329__$1 = temp__4219__auto___44328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44310_44329__$1))
{var c__4316__auto___44330 = cljs.core.chunk_first.call(null,seq__44310_44329__$1);{
var G__44331 = cljs.core.chunk_rest.call(null,seq__44310_44329__$1);
var G__44332 = c__4316__auto___44330;
var G__44333 = cljs.core.count.call(null,c__4316__auto___44330);
var G__44334 = (0);
seq__44310_44316 = G__44331;
chunk__44311_44317 = G__44332;
count__44312_44318 = G__44333;
i__44313_44319 = G__44334;
continue;
}
} else
{var vec__44315_44335 = cljs.core.first.call(null,seq__44310_44329__$1);var k_44336 = cljs.core.nth.call(null,vec__44315_44335,(0),null);var v_44337 = cljs.core.nth.call(null,vec__44315_44335,(1),null);var m44309_44338 = cljs.core.deref.call(null,m_atom__8705__auto__);cljs.core.reset_BANG_.call(null,m_atom__8705__auto__,cljs.core.assoc_BANG_.call(null,m44309_44338,((typeof k_44336 === 'string')?cljs.core.keyword.call(null,k_44336):k_44336),keywordize_map.call(null,v_44337)));
{
var G__44339 = cljs.core.next.call(null,seq__44310_44329__$1);
var G__44340 = null;
var G__44341 = (0);
var G__44342 = (0);
seq__44310_44316 = G__44339;
chunk__44311_44317 = G__44340;
count__44312_44318 = G__44341;
i__44313_44319 = G__44342;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8705__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4217__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4217__auto__))
{var pair__8774__auto__ = temp__4217__auto__;return cljs.core.val.call(null,pair__8774__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__44343 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__44344 = cljs.core.next.call(null,ks);
m = G__44343;
ks = G__44344;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3560__auto__ = m;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4285__auto__ = (function iter__44353(s__44354){return (new cljs.core.LazySeq(null,(function (){var s__44354__$1 = s__44354;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__44354__$1);if(temp__4219__auto__)
{var s__44354__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44354__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__44354__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__44356 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__44355 = (0);while(true){
if((i__44355 < size__4284__auto__))
{var vec__44359 = cljs.core._nth.call(null,c__4283__auto__,i__44355);var k = cljs.core.nth.call(null,vec__44359,(0),null);var v = cljs.core.nth.call(null,vec__44359,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__44356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__44361 = (i__44355 + (1));
i__44355 = G__44361;
continue;
}
} else
{{
var G__44362 = (i__44355 + (1));
i__44355 = G__44362;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44356),iter__44353.call(null,cljs.core.chunk_rest.call(null,s__44354__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44356),null);
}
} else
{var vec__44360 = cljs.core.first.call(null,s__44354__$2);var k = cljs.core.nth.call(null,vec__44360,(0),null);var v = cljs.core.nth.call(null,vec__44360,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__44353.call(null,cljs.core.rest.call(null,s__44354__$2)));
} else
{{
var G__44363 = cljs.core.rest.call(null,s__44354__$2);
s__44354__$1 = G__44363;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__44364){
var m = cljs.core.first(arglist__44364);
var kvs = cljs.core.rest(arglist__44364);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__44365){
var m = cljs.core.first(arglist__44365);
arglist__44365 = cljs.core.next(arglist__44365);
var key_seq = cljs.core.first(arglist__44365);
arglist__44365 = cljs.core.next(arglist__44365);
var f = cljs.core.first(arglist__44365);
var args = cljs.core.rest(arglist__44365);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4219__auto__ = cljs.core.next.call(null,s);if(temp__4219__auto__)
{var n = temp__4219__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4219__auto__ = cljs.core.seq.call(null,xs);if(temp__4219__auto__)
{var xs__$1 = temp__4219__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4285__auto__ = ((function (s){
return (function iter__44370(s__44371){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__44371__$1 = s__44371;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__44371__$1);if(temp__4219__auto__)
{var s__44371__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44371__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__44371__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__44373 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__44372 = (0);while(true){
if((i__44372 < size__4284__auto__))
{var x = cljs.core._nth.call(null,c__4283__auto__,i__44372);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__44373,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__44374 = (i__44372 + (1));
i__44372 = G__44374;
continue;
}
} else
{{
var G__44375 = (i__44372 + (1));
i__44372 = G__44375;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44373),iter__44370.call(null,cljs.core.chunk_rest.call(null,s__44371__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44373),null);
}
} else
{var x = cljs.core.first.call(null,s__44371__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__44370.call(null,cljs.core.rest.call(null,s__44371__$2)));
} else
{{
var G__44376 = cljs.core.rest.call(null,s__44371__$2);
s__44371__$1 = G__44376;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4285__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__44377){
var colls = cljs.core.seq(arglist__44377);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__44378__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__44379 = conj_when.call(null,coll,x);
var G__44380 = cljs.core.first.call(null,xs);
var G__44381 = cljs.core.next.call(null,xs);
coll = G__44379;
x = G__44380;
xs = G__44381;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__44378 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44378__delegate.call(this,coll,x,xs);};
G__44378.cljs$lang$maxFixedArity = 2;
G__44378.cljs$lang$applyTo = (function (arglist__44382){
var coll = cljs.core.first(arglist__44382);
arglist__44382 = cljs.core.next(arglist__44382);
var x = cljs.core.first(arglist__44382);
var xs = cljs.core.rest(arglist__44382);
return G__44378__delegate(coll,x,xs);
});
G__44378.cljs$core$IFn$_invoke$arity$variadic = G__44378__delegate;
return G__44378;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__44384__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__44383_SHARP_){return cljs.core.apply.call(null,f,p1__44383_SHARP_,args);
}));
};
var G__44384 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44384__delegate.call(this,a,f,args);};
G__44384.cljs$lang$maxFixedArity = 2;
G__44384.cljs$lang$applyTo = (function (arglist__44385){
var a = cljs.core.first(arglist__44385);
arglist__44385 = cljs.core.next(arglist__44385);
var f = cljs.core.first(arglist__44385);
var args = cljs.core.rest(arglist__44385);
return G__44384__delegate(a,f,args);
});
G__44384.cljs$core$IFn$_invoke$arity$variadic = G__44384__delegate;
return G__44384;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__44386__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__44386 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44386__delegate.call(this,f,arg,args);};
G__44386.cljs$lang$maxFixedArity = 2;
G__44386.cljs$lang$applyTo = (function (arglist__44387){
var f = cljs.core.first(arglist__44387);
arglist__44387 = cljs.core.next(arglist__44387);
var arg = cljs.core.first(arglist__44387);
var args = cljs.core.rest(arglist__44387);
return G__44386__delegate(f,arg,args);
});
G__44386.cljs$core$IFn$_invoke$arity$variadic = G__44386__delegate;
return G__44386;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map