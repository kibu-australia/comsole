// Compiled by ClojureScript 0.0-2322
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__43237_43241 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__43238_43242 = null;var count__43239_43243 = (0);var i__43240_43244 = (0);while(true){
if((i__43240_43244 < count__43239_43243))
{var k_43245 = cljs.core._nth.call(null,chunk__43238_43242,i__43240_43244);var v_43246 = (b[k_43245]);(a[k_43245] = v_43246);
{
var G__43247 = seq__43237_43241;
var G__43248 = chunk__43238_43242;
var G__43249 = count__43239_43243;
var G__43250 = (i__43240_43244 + (1));
seq__43237_43241 = G__43247;
chunk__43238_43242 = G__43248;
count__43239_43243 = G__43249;
i__43240_43244 = G__43250;
continue;
}
} else
{var temp__4219__auto___43251 = cljs.core.seq.call(null,seq__43237_43241);if(temp__4219__auto___43251)
{var seq__43237_43252__$1 = temp__4219__auto___43251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43237_43252__$1))
{var c__4316__auto___43253 = cljs.core.chunk_first.call(null,seq__43237_43252__$1);{
var G__43254 = cljs.core.chunk_rest.call(null,seq__43237_43252__$1);
var G__43255 = c__4316__auto___43253;
var G__43256 = cljs.core.count.call(null,c__4316__auto___43253);
var G__43257 = (0);
seq__43237_43241 = G__43254;
chunk__43238_43242 = G__43255;
count__43239_43243 = G__43256;
i__43240_43244 = G__43257;
continue;
}
} else
{var k_43258 = cljs.core.first.call(null,seq__43237_43252__$1);var v_43259 = (b[k_43258]);(a[k_43258] = v_43259);
{
var G__43260 = cljs.core.next.call(null,seq__43237_43252__$1);
var G__43261 = null;
var G__43262 = (0);
var G__43263 = (0);
seq__43237_43241 = G__43260;
chunk__43238_43242 = G__43261;
count__43239_43243 = G__43262;
i__43240_43244 = G__43263;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__43264 = (i + (2));
var G__43265 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__43264;
ret = G__43265;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__43266_43270 = cljs.core.seq.call(null,v);var chunk__43267_43271 = null;var count__43268_43272 = (0);var i__43269_43273 = (0);while(true){
if((i__43269_43273 < count__43268_43272))
{var x_43274 = cljs.core._nth.call(null,chunk__43267_43271,i__43269_43273);ret.push(x_43274);
{
var G__43275 = seq__43266_43270;
var G__43276 = chunk__43267_43271;
var G__43277 = count__43268_43272;
var G__43278 = (i__43269_43273 + (1));
seq__43266_43270 = G__43275;
chunk__43267_43271 = G__43276;
count__43268_43272 = G__43277;
i__43269_43273 = G__43278;
continue;
}
} else
{var temp__4219__auto___43279 = cljs.core.seq.call(null,seq__43266_43270);if(temp__4219__auto___43279)
{var seq__43266_43280__$1 = temp__4219__auto___43279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43266_43280__$1))
{var c__4316__auto___43281 = cljs.core.chunk_first.call(null,seq__43266_43280__$1);{
var G__43282 = cljs.core.chunk_rest.call(null,seq__43266_43280__$1);
var G__43283 = c__4316__auto___43281;
var G__43284 = cljs.core.count.call(null,c__4316__auto___43281);
var G__43285 = (0);
seq__43266_43270 = G__43282;
chunk__43267_43271 = G__43283;
count__43268_43272 = G__43284;
i__43269_43273 = G__43285;
continue;
}
} else
{var x_43286 = cljs.core.first.call(null,seq__43266_43280__$1);ret.push(x_43286);
{
var G__43287 = cljs.core.next.call(null,seq__43266_43280__$1);
var G__43288 = null;
var G__43289 = (0);
var G__43290 = (0);
seq__43266_43270 = G__43287;
chunk__43267_43271 = G__43288;
count__43268_43272 = G__43289;
i__43269_43273 = G__43290;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__43291_43295 = cljs.core.seq.call(null,v);var chunk__43292_43296 = null;var count__43293_43297 = (0);var i__43294_43298 = (0);while(true){
if((i__43294_43298 < count__43293_43297))
{var x_43299 = cljs.core._nth.call(null,chunk__43292_43296,i__43294_43298);ret.push(x_43299);
{
var G__43300 = seq__43291_43295;
var G__43301 = chunk__43292_43296;
var G__43302 = count__43293_43297;
var G__43303 = (i__43294_43298 + (1));
seq__43291_43295 = G__43300;
chunk__43292_43296 = G__43301;
count__43293_43297 = G__43302;
i__43294_43298 = G__43303;
continue;
}
} else
{var temp__4219__auto___43304 = cljs.core.seq.call(null,seq__43291_43295);if(temp__4219__auto___43304)
{var seq__43291_43305__$1 = temp__4219__auto___43304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43291_43305__$1))
{var c__4316__auto___43306 = cljs.core.chunk_first.call(null,seq__43291_43305__$1);{
var G__43307 = cljs.core.chunk_rest.call(null,seq__43291_43305__$1);
var G__43308 = c__4316__auto___43306;
var G__43309 = cljs.core.count.call(null,c__4316__auto___43306);
var G__43310 = (0);
seq__43291_43295 = G__43307;
chunk__43292_43296 = G__43308;
count__43293_43297 = G__43309;
i__43294_43298 = G__43310;
continue;
}
} else
{var x_43311 = cljs.core.first.call(null,seq__43291_43305__$1);ret.push(x_43311);
{
var G__43312 = cljs.core.next.call(null,seq__43291_43305__$1);
var G__43313 = null;
var G__43314 = (0);
var G__43315 = (0);
seq__43291_43295 = G__43312;
chunk__43292_43296 = G__43313;
count__43293_43297 = G__43314;
i__43294_43298 = G__43315;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__43316_43320 = cljs.core.seq.call(null,v);var chunk__43317_43321 = null;var count__43318_43322 = (0);var i__43319_43323 = (0);while(true){
if((i__43319_43323 < count__43318_43322))
{var x_43324 = cljs.core._nth.call(null,chunk__43317_43321,i__43319_43323);ret.push(x_43324);
{
var G__43325 = seq__43316_43320;
var G__43326 = chunk__43317_43321;
var G__43327 = count__43318_43322;
var G__43328 = (i__43319_43323 + (1));
seq__43316_43320 = G__43325;
chunk__43317_43321 = G__43326;
count__43318_43322 = G__43327;
i__43319_43323 = G__43328;
continue;
}
} else
{var temp__4219__auto___43329 = cljs.core.seq.call(null,seq__43316_43320);if(temp__4219__auto___43329)
{var seq__43316_43330__$1 = temp__4219__auto___43329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43316_43330__$1))
{var c__4316__auto___43331 = cljs.core.chunk_first.call(null,seq__43316_43330__$1);{
var G__43332 = cljs.core.chunk_rest.call(null,seq__43316_43330__$1);
var G__43333 = c__4316__auto___43331;
var G__43334 = cljs.core.count.call(null,c__4316__auto___43331);
var G__43335 = (0);
seq__43316_43320 = G__43332;
chunk__43317_43321 = G__43333;
count__43318_43322 = G__43334;
i__43319_43323 = G__43335;
continue;
}
} else
{var x_43336 = cljs.core.first.call(null,seq__43316_43330__$1);ret.push(x_43336);
{
var G__43337 = cljs.core.next.call(null,seq__43316_43330__$1);
var G__43338 = null;
var G__43339 = (0);
var G__43340 = (0);
seq__43316_43320 = G__43337;
chunk__43317_43321 = G__43338;
count__43318_43322 = G__43339;
i__43319_43323 = G__43340;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x43350 = cljs.core.clone.call(null,handlers);x43350.forEach = ((function (x43350,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__43351 = cljs.core.seq.call(null,coll);var chunk__43352 = null;var count__43353 = (0);var i__43354 = (0);while(true){
if((i__43354 < count__43353))
{var vec__43355 = cljs.core._nth.call(null,chunk__43352,i__43354);var k = cljs.core.nth.call(null,vec__43355,(0),null);var v = cljs.core.nth.call(null,vec__43355,(1),null);f.call(null,v,k);
{
var G__43357 = seq__43351;
var G__43358 = chunk__43352;
var G__43359 = count__43353;
var G__43360 = (i__43354 + (1));
seq__43351 = G__43357;
chunk__43352 = G__43358;
count__43353 = G__43359;
i__43354 = G__43360;
continue;
}
} else
{var temp__4219__auto__ = cljs.core.seq.call(null,seq__43351);if(temp__4219__auto__)
{var seq__43351__$1 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43351__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__43351__$1);{
var G__43361 = cljs.core.chunk_rest.call(null,seq__43351__$1);
var G__43362 = c__4316__auto__;
var G__43363 = cljs.core.count.call(null,c__4316__auto__);
var G__43364 = (0);
seq__43351 = G__43361;
chunk__43352 = G__43362;
count__43353 = G__43363;
i__43354 = G__43364;
continue;
}
} else
{var vec__43356 = cljs.core.first.call(null,seq__43351__$1);var k = cljs.core.nth.call(null,vec__43356,(0),null);var v = cljs.core.nth.call(null,vec__43356,(1),null);f.call(null,v,k);
{
var G__43365 = cljs.core.next.call(null,seq__43351__$1);
var G__43366 = null;
var G__43367 = (0);
var G__43368 = (0);
seq__43351 = G__43365;
chunk__43352 = G__43366;
count__43353 = G__43367;
i__43354 = G__43368;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x43350,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x43350;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__43349 = obj;G__43349.push(kfn.call(null,k),vfn.call(null,v));
return G__43349;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t43372 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t43372 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta43373){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta43373 = meta43373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t43372.cljs$lang$type = true;
cognitect.transit.t43372.cljs$lang$ctorStr = "cognitect.transit/t43372";
cognitect.transit.t43372.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cognitect.transit/t43372");
});
cognitect.transit.t43372.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t43372.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t43372.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t43372.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t43372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43374){var self__ = this;
var _43374__$1 = this;return self__.meta43373;
});
cognitect.transit.t43372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43374,meta43373__$1){var self__ = this;
var _43374__$1 = this;return (new cognitect.transit.t43372(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta43373__$1));
});
cognitect.transit.__GT_t43372 = (function __GT_t43372(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta43373){return (new cognitect.transit.t43372(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta43373));
});
}
return (new cognitect.transit.t43372(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map