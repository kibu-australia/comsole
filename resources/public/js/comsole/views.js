// Compiled by ClojureScript 0.0-2322
goog.provide('comsole.views');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('bidi.bidi');
goog.require('comsole.util');
goog.require('sablono.core');
goog.require('bidi.bidi');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('comsole.util');
goog.require('ajax.core');
goog.require('om.core');
goog.require('om.core');
goog.require('pushy.core');
goog.require('pushy.core');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
comsole.views.bindings = (function bindings(query){var for_bindings = cljs.core.filter.call(null,cljs.core.symbol_QMARK_,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query));var input_bindings = cljs.core.filter.call(null,cljs.core.symbol_QMARK_,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(query));var with_bindings = cljs.core.filter.call(null,cljs.core.symbol_QMARK_,cljs.core.flatten.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(query)));return cljs.core.distinct.call(null,cljs.core.concat.call(null,for_bindings,with_bindings));
});
comsole.views.add_symbol = (function add_symbol(v,state,path){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,(function (){var temp__4219__auto__ = cljs.core.first.call(null,clojure.string.split.call(null,v,/ /));if(cljs.core.truth_(temp__4219__auto__))
{var binding_str = temp__4219__auto__;return cljs.core.symbol.call(null,binding_str);
} else
{return null;
}
})());
});
/**
* @param {...*} var_args
*/
comsole.views.sidebar = (function() { 
var sidebar__delegate = function (data__9003__auto__,owner28572,p__28574){var vec__28640 = p__28574;var opts__9004__auto__ = cljs.core.nth.call(null,vec__28640,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28644 = schema.core.Any;var input_schema28645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"control","control",1892578036),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav","nav",719540477),schema.core.Any,new cljs.core.Keyword(null,"docs","docs",-1974280502),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28641","map28641",-1046745400,null))], null);var input_checker28646 = schema.core.checker.call(null,input_schema28645);var output_checker28647 = schema.core.checker.call(null,output_schema28644);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function fnk28643(G__28648){var validate__7204__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___28705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28648], null);var temp__4219__auto___28706 = input_checker28646.call(null,args__7205__auto___28705);if(cljs.core.truth_(temp__4219__auto___28706))
{var error__7206__auto___28707 = temp__4219__auto___28706;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk28643","fnk28643",426792528,null),cljs.core.pr_str.call(null,error__7206__auto___28707)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28645,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___28705,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___28707], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var map28641 = G__28648;while(true){
if(cljs.core.map_QMARK_.call(null,map28641))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28641)));
}
var app = plumbing.fnk.schema.safe_get.call(null,map28641,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var docs = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var nav = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28642 = plumbing.fnk.schema.safe_get.call(null,map28641,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var control = plumbing.fnk.schema.safe_get.call(null,map28642,new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));if(typeof comsole.views.t28677 !== 'undefined')
{} else
{
/**
* @constructor
*/
comsole.views.t28677 = (function (data__9003__auto__,nav,map28641,G__28648,validate__7204__auto__,output_checker28647,fnk28643,owner28572,docs,sidebar,vec__28640,opts__9004__auto__,p__28574,map28642,input_checker28646,input_schema28645,control,app,ufv__,output_schema28644,meta28678){
this.data__9003__auto__ = data__9003__auto__;
this.nav = nav;
this.map28641 = map28641;
this.G__28648 = G__28648;
this.validate__7204__auto__ = validate__7204__auto__;
this.output_checker28647 = output_checker28647;
this.fnk28643 = fnk28643;
this.owner28572 = owner28572;
this.docs = docs;
this.sidebar = sidebar;
this.vec__28640 = vec__28640;
this.opts__9004__auto__ = opts__9004__auto__;
this.p__28574 = p__28574;
this.map28642 = map28642;
this.input_checker28646 = input_checker28646;
this.input_schema28645 = input_schema28645;
this.control = control;
this.app = app;
this.ufv__ = ufv__;
this.output_schema28644 = output_schema28644;
this.meta28678 = meta28678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comsole.views.t28677.cljs$lang$type = true;
comsole.views.t28677.cljs$lang$ctorStr = "comsole.views/t28677";
comsole.views.t28677.cljs$lang$ctorPrWriter = ((function (control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"comsole.views/t28677");
});})(control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
;
comsole.views.t28677.prototype.om$core$IRender$ = true;
comsole.views.t28677.prototype.om$core$IRender$render$arity$1 = ((function (control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-xs-2 sidebar"},React.DOM.div({"className": "sidebar-content"},React.DOM.ul({"className": "nav nav-pills nav-stacked"},cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function iter__28681(s__28682){return (new cljs.core.LazySeq(null,((function (___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (){var s__28682__$1 = s__28682;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__28682__$1);if(temp__4219__auto__)
{var s__28682__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28682__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__28682__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__28684 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__28683 = (0);while(true){
if((i__28683 < size__4284__auto__))
{var vec__28695 = cljs.core._nth.call(null,c__4283__auto__,i__28683);var nspace = cljs.core.nth.call(null,vec__28695,(0),null);var vs = cljs.core.nth.call(null,vec__28695,(1),null);cljs.core.chunk_append.call(null,b__28684,React.DOM.li(null,React.DOM.a({"onClick": ((function (i__28683,vec__28695,nspace,vs,c__4283__auto__,size__4284__auto__,b__28684,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","toggle","nav/toggle",1291734225),nspace], null));
});})(i__28683,vec__28695,nspace,vs,c__4283__auto__,size__4284__auto__,b__28684,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
},(function (){var attrs28680 = (cljs.core.truth_(cljs.core.get_in.call(null,self__.nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nspace], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-right","span.glyphicon.glyphicon-chevron-right",-701366114)], null));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28680))?sablono.interpreter.attributes.call(null,attrs28680):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28680))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nspace)+"/"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28680),sablono.interpreter.interpret.call(null,(" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nspace)+"/"))], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.get_in.call(null,self__.nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nspace], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills.nav-stacked.nested","ul.nav.nav-pills.nav-stacked.nested",-1911887988),(function (){var iter__4285__auto__ = ((function (i__28683,vec__28695,nspace,vs,c__4283__auto__,size__4284__auto__,b__28684,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function iter__28696(s__28697){return (new cljs.core.LazySeq(null,((function (i__28683,vec__28695,nspace,vs,c__4283__auto__,size__4284__auto__,b__28684,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (){var s__28697__$1 = s__28697;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__28697__$1);if(temp__4219__auto____$1)
{var s__28697__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28697__$2))
{var c__4283__auto____$1 = cljs.core.chunk_first.call(null,s__28697__$2);var size__4284__auto____$1 = cljs.core.count.call(null,c__4283__auto____$1);var b__28699 = cljs.core.chunk_buffer.call(null,size__4284__auto____$1);if((function (){var i__28698 = (0);while(true){
if((i__28698 < size__4284__auto____$1))
{var v = cljs.core._nth.call(null,c__4283__auto____$1,i__28698);cljs.core.chunk_append.call(null,b__28699,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("/docs")], null),cljs.core.name.call(null,cljs.core.first.call(null,v))], null)], null));
{
var G__28708 = (i__28698 + (1));
i__28698 = G__28708;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28699),iter__28696.call(null,cljs.core.chunk_rest.call(null,s__28697__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28699),null);
}
} else
{var v = cljs.core.first.call(null,s__28697__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("/docs")], null),cljs.core.name.call(null,cljs.core.first.call(null,v))], null)], null),iter__28696.call(null,cljs.core.rest.call(null,s__28697__$2)));
}
} else
{return null;
}
break;
}
});})(i__28683,vec__28695,nspace,vs,c__4283__auto__,size__4284__auto__,b__28684,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
,null,null));
});})(i__28683,vec__28695,nspace,vs,c__4283__auto__,size__4284__auto__,b__28684,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
;return iter__4285__auto__.call(null,vs);
})()], null):null))));
{
var G__28709 = (i__28683 + (1));
i__28683 = G__28709;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28684),iter__28681.call(null,cljs.core.chunk_rest.call(null,s__28682__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28684),null);
}
} else
{var vec__28700 = cljs.core.first.call(null,s__28682__$2);var nspace = cljs.core.nth.call(null,vec__28700,(0),null);var vs = cljs.core.nth.call(null,vec__28700,(1),null);return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.a({"onClick": ((function (vec__28700,nspace,vs,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","toggle","nav/toggle",1291734225),nspace], null));
});})(vec__28700,nspace,vs,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
},(function (){var attrs28680 = (cljs.core.truth_(cljs.core.get_in.call(null,self__.nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nspace], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-right","span.glyphicon.glyphicon-chevron-right",-701366114)], null));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28680))?sablono.interpreter.attributes.call(null,attrs28680):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28680))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nspace)+"/"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28680),sablono.interpreter.interpret.call(null,(" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nspace)+"/"))], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.get_in.call(null,self__.nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nspace], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills.nav-stacked.nested","ul.nav.nav-pills.nav-stacked.nested",-1911887988),(function (){var iter__4285__auto__ = ((function (vec__28700,nspace,vs,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function iter__28701(s__28702){return (new cljs.core.LazySeq(null,((function (vec__28700,nspace,vs,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (){var s__28702__$1 = s__28702;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__28702__$1);if(temp__4219__auto____$1)
{var s__28702__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28702__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__28702__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__28704 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__28703 = (0);while(true){
if((i__28703 < size__4284__auto__))
{var v = cljs.core._nth.call(null,c__4283__auto__,i__28703);cljs.core.chunk_append.call(null,b__28704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("/docs")], null),cljs.core.name.call(null,cljs.core.first.call(null,v))], null)], null));
{
var G__28710 = (i__28703 + (1));
i__28703 = G__28710;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28704),iter__28701.call(null,cljs.core.chunk_rest.call(null,s__28702__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28704),null);
}
} else
{var v = cljs.core.first.call(null,s__28702__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("/docs")], null),cljs.core.name.call(null,cljs.core.first.call(null,v))], null)], null),iter__28701.call(null,cljs.core.rest.call(null,s__28702__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28700,nspace,vs,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
,null,null));
});})(vec__28700,nspace,vs,s__28682__$2,temp__4219__auto__,___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
;return iter__4285__auto__.call(null,vs);
})()], null):null))),iter__28681.call(null,cljs.core.rest.call(null,s__28682__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
,null,null));
});})(___$1,control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
;return iter__4285__auto__.call(null,cljs.core.group_by.call(null,cljs.core.comp.call(null,cljs.core.namespace,cljs.core.first),self__.docs));
})()))));
});})(control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
;
comsole.views.t28677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (_28679){var self__ = this;
var _28679__$1 = this;return self__.meta28678;
});})(control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
;
comsole.views.t28677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function (_28679,meta28678__$1){var self__ = this;
var _28679__$1 = this;return (new comsole.views.t28677(self__.data__9003__auto__,self__.nav,self__.map28641,self__.G__28648,self__.validate__7204__auto__,self__.output_checker28647,self__.fnk28643,self__.owner28572,self__.docs,self__.sidebar,self__.vec__28640,self__.opts__9004__auto__,self__.p__28574,self__.map28642,self__.input_checker28646,self__.input_schema28645,self__.control,self__.app,self__.ufv__,self__.output_schema28644,meta28678__$1));
});})(control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
;
comsole.views.__GT_t28677 = ((function (control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__){
return (function __GT_t28677(data__9003__auto____$1,nav__$1,map28641__$1,G__28648__$1,validate__7204__auto____$1,output_checker28647__$1,fnk28643__$1,owner28572__$1,docs__$1,sidebar__$1,vec__28640__$1,opts__9004__auto____$1,p__28574__$1,map28642__$1,input_checker28646__$1,input_schema28645__$1,control__$1,app__$1,ufv____$1,output_schema28644__$1,meta28678){return (new comsole.views.t28677(data__9003__auto____$1,nav__$1,map28641__$1,G__28648__$1,validate__7204__auto____$1,output_checker28647__$1,fnk28643__$1,owner28572__$1,docs__$1,sidebar__$1,vec__28640__$1,opts__9004__auto____$1,p__28574__$1,map28642__$1,input_checker28646__$1,input_schema28645__$1,control__$1,app__$1,ufv____$1,output_schema28644__$1,meta28678));
});})(control,map28642,nav,docs,app,validate__7204__auto__,ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
;
}
return (new comsole.views.t28677(data__9003__auto__,nav,map28641,G__28648,validate__7204__auto__,output_checker28647,fnk28643,owner28572,docs,sidebar,vec__28640,opts__9004__auto__,p__28574,map28642,input_checker28646,input_schema28645,control,app,ufv__,output_schema28644,null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___28711 = output_checker28647.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___28711))
{var error__7206__auto___28712 = temp__4219__auto___28711;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk28643","fnk28643",426792528,null),cljs.core.pr_str.call(null,error__7206__auto___28712)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28644,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___28712], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv__,output_schema28644,input_schema28645,input_checker28646,output_checker28647,vec__28640,opts__9004__auto__))
,schema.core.make_fn_schema.call(null,output_schema28644,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28645], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9004__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28572),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28572,new cljs.core.Keyword(null,"data","data",-232669377),data__9003__auto__], null));
};
var sidebar = function (data__9003__auto__,owner28572,var_args){
var p__28574 = null;if (arguments.length > 2) {
  p__28574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return sidebar__delegate.call(this,data__9003__auto__,owner28572,p__28574);};
sidebar.cljs$lang$maxFixedArity = 2;
sidebar.cljs$lang$applyTo = (function (arglist__28713){
var data__9003__auto__ = cljs.core.first(arglist__28713);
arglist__28713 = cljs.core.next(arglist__28713);
var owner28572 = cljs.core.first(arglist__28713);
var p__28574 = cljs.core.rest(arglist__28713);
return sidebar__delegate(data__9003__auto__,owner28572,p__28574);
});
sidebar.cljs$core$IFn$_invoke$arity$variadic = sidebar__delegate;
return sidebar;
})()
;
comsole.views.__GT_sidebar = (function() {
var __GT_sidebar = null;
var __GT_sidebar__1 = (function (cursor__8972__auto__){return om.core.build.call(null,comsole.views.sidebar,cursor__8972__auto__);
});
var __GT_sidebar__2 = (function (cursor__8972__auto__,m28573){return om.core.build.call(null,comsole.views.sidebar,cursor__8972__auto__,m28573);
});
__GT_sidebar = function(cursor__8972__auto__,m28573){
switch(arguments.length){
case 1:
return __GT_sidebar__1.call(this,cursor__8972__auto__);
case 2:
return __GT_sidebar__2.call(this,cursor__8972__auto__,m28573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sidebar.cljs$core$IFn$_invoke$arity$1 = __GT_sidebar__1;
__GT_sidebar.cljs$core$IFn$_invoke$arity$2 = __GT_sidebar__2;
return __GT_sidebar;
})()
;
/**
* @param {...*} var_args
*/
comsole.views.docs = (function() { 
var docs__delegate = function (data__9003__auto__,owner28714,p__28716){var vec__28822 = p__28716;var opts__9004__auto__ = cljs.core.nth.call(null,vec__28822,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28826 = schema.core.Any;var input_schema28827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"control","control",1892578036),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"docs","docs",-1974280502),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28823","map28823",633724523,null))], null);var input_checker28828 = schema.core.checker.call(null,input_schema28827);var output_checker28829 = schema.core.checker.call(null,output_schema28826);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function fnk28825(G__28830){var validate__7204__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___28927 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28830], null);var temp__4219__auto___28928 = input_checker28828.call(null,args__7205__auto___28927);if(cljs.core.truth_(temp__4219__auto___28928))
{var error__7206__auto___28929 = temp__4219__auto___28928;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk28825","fnk28825",1043393035,null),cljs.core.pr_str.call(null,error__7206__auto___28929)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28827,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___28927,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___28929], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var map28823 = G__28830;while(true){
if(cljs.core.map_QMARK_.call(null,map28823))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28823)));
}
var app = plumbing.fnk.schema.safe_get.call(null,map28823,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var docs__$1 = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28824 = plumbing.fnk.schema.safe_get.call(null,map28823,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var control = plumbing.fnk.schema.safe_get.call(null,map28824,new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));if(typeof comsole.views.t28879 !== 'undefined')
{} else
{
/**
* @constructor
*/
comsole.views.t28879 = (function (input_checker28828,data__9003__auto__,owner28714,map28824,G__28830,vec__28822,fnk28825,map28823,validate__7204__auto__,output_schema28826,input_schema28827,docs,p__28716,output_checker28829,opts__9004__auto__,control,app,ufv__,meta28880){
this.input_checker28828 = input_checker28828;
this.data__9003__auto__ = data__9003__auto__;
this.owner28714 = owner28714;
this.map28824 = map28824;
this.G__28830 = G__28830;
this.vec__28822 = vec__28822;
this.fnk28825 = fnk28825;
this.map28823 = map28823;
this.validate__7204__auto__ = validate__7204__auto__;
this.output_schema28826 = output_schema28826;
this.input_schema28827 = input_schema28827;
this.docs = docs;
this.p__28716 = p__28716;
this.output_checker28829 = output_checker28829;
this.opts__9004__auto__ = opts__9004__auto__;
this.control = control;
this.app = app;
this.ufv__ = ufv__;
this.meta28880 = meta28880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comsole.views.t28879.cljs$lang$type = true;
comsole.views.t28879.cljs$lang$ctorStr = "comsole.views/t28879";
comsole.views.t28879.cljs$lang$ctorPrWriter = ((function (control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"comsole.views/t28879");
});})(control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;
comsole.views.t28879.prototype.om$core$IRender$ = true;
comsole.views.t28879.prototype.om$core$IRender$render$arity$1 = ((function (control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "page-header"},React.DOM.h1(null,"Documentation")),cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function iter__28887(s__28888){return (new cljs.core.LazySeq(null,((function (___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (){var s__28888__$1 = s__28888;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__28888__$1);if(temp__4219__auto__)
{var s__28888__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28888__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__28888__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__28890 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__28889 = (0);while(true){
if((i__28889 < size__4284__auto__))
{var vec__28909 = cljs.core._nth.call(null,c__4283__auto__,i__28889);var namespace = cljs.core.nth.call(null,vec__28909,(0),null);var docs__$3 = cljs.core.nth.call(null,vec__28909,(1),null);cljs.core.chunk_append.call(null,b__28890,React.DOM.div({"className": "namespace"},(function (){var attrs28884 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace));return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs28884))?sablono.interpreter.attributes.call(null,attrs28884):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28884))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28884)], null))));
})(),cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (i__28889,vec__28909,namespace,docs__$3,c__4283__auto__,size__4284__auto__,b__28890,s__28888__$2,temp__4219__auto__,___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function iter__28910(s__28911){return (new cljs.core.LazySeq(null,((function (i__28889,vec__28909,namespace,docs__$3,c__4283__auto__,size__4284__auto__,b__28890,s__28888__$2,temp__4219__auto__,___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (){var s__28911__$1 = s__28911;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__28911__$1);if(temp__4219__auto____$1)
{var s__28911__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28911__$2))
{var c__4283__auto____$1 = cljs.core.chunk_first.call(null,s__28911__$2);var size__4284__auto____$1 = cljs.core.count.call(null,c__4283__auto____$1);var b__28913 = cljs.core.chunk_buffer.call(null,size__4284__auto____$1);if((function (){var i__28912 = (0);while(true){
if((i__28912 < size__4284__auto____$1))
{var vec__28916 = cljs.core._nth.call(null,c__4283__auto____$1,i__28912);var doc = cljs.core.nth.call(null,vec__28916,(0),null);var desc = cljs.core.nth.call(null,vec__28916,(1),null);cljs.core.chunk_append.call(null,b__28913,React.DOM.div({"className": "doc"},(function (){var attrs28885 = cljs.core.pr_str.call(null,doc);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs28885))?sablono.interpreter.attributes.call(null,attrs28885):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28885))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28885)], null))));
})(),(function (){var attrs28886 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(desc));return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs28886))?sablono.interpreter.attributes.call(null,attrs28886):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28886))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28886)], null))));
})()));
{
var G__28930 = (i__28912 + (1));
i__28912 = G__28930;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28913),iter__28910.call(null,cljs.core.chunk_rest.call(null,s__28911__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28913),null);
}
} else
{var vec__28917 = cljs.core.first.call(null,s__28911__$2);var doc = cljs.core.nth.call(null,vec__28917,(0),null);var desc = cljs.core.nth.call(null,vec__28917,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "doc"},(function (){var attrs28885 = cljs.core.pr_str.call(null,doc);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs28885))?sablono.interpreter.attributes.call(null,attrs28885):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28885))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28885)], null))));
})(),(function (){var attrs28886 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(desc));return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs28886))?sablono.interpreter.attributes.call(null,attrs28886):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28886))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28886)], null))));
})()),iter__28910.call(null,cljs.core.rest.call(null,s__28911__$2)));
}
} else
{return null;
}
break;
}
});})(i__28889,vec__28909,namespace,docs__$3,c__4283__auto__,size__4284__auto__,b__28890,s__28888__$2,temp__4219__auto__,___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
,null,null));
});})(i__28889,vec__28909,namespace,docs__$3,c__4283__auto__,size__4284__auto__,b__28890,s__28888__$2,temp__4219__auto__,___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;return iter__4285__auto__.call(null,docs__$3);
})())));
{
var G__28931 = (i__28889 + (1));
i__28889 = G__28931;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28890),iter__28887.call(null,cljs.core.chunk_rest.call(null,s__28888__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28890),null);
}
} else
{var vec__28918 = cljs.core.first.call(null,s__28888__$2);var namespace = cljs.core.nth.call(null,vec__28918,(0),null);var docs__$3 = cljs.core.nth.call(null,vec__28918,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "namespace"},(function (){var attrs28884 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace));return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs28884))?sablono.interpreter.attributes.call(null,attrs28884):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28884))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28884)], null))));
})(),cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (vec__28918,namespace,docs__$3,s__28888__$2,temp__4219__auto__,___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function iter__28919(s__28920){return (new cljs.core.LazySeq(null,((function (vec__28918,namespace,docs__$3,s__28888__$2,temp__4219__auto__,___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (){var s__28920__$1 = s__28920;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__28920__$1);if(temp__4219__auto____$1)
{var s__28920__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28920__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__28920__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__28922 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__28921 = (0);while(true){
if((i__28921 < size__4284__auto__))
{var vec__28925 = cljs.core._nth.call(null,c__4283__auto__,i__28921);var doc = cljs.core.nth.call(null,vec__28925,(0),null);var desc = cljs.core.nth.call(null,vec__28925,(1),null);cljs.core.chunk_append.call(null,b__28922,React.DOM.div({"className": "doc"},(function (){var attrs28885 = cljs.core.pr_str.call(null,doc);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs28885))?sablono.interpreter.attributes.call(null,attrs28885):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28885))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28885)], null))));
})(),(function (){var attrs28886 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(desc));return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs28886))?sablono.interpreter.attributes.call(null,attrs28886):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28886))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28886)], null))));
})()));
{
var G__28932 = (i__28921 + (1));
i__28921 = G__28932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28922),iter__28919.call(null,cljs.core.chunk_rest.call(null,s__28920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28922),null);
}
} else
{var vec__28926 = cljs.core.first.call(null,s__28920__$2);var doc = cljs.core.nth.call(null,vec__28926,(0),null);var desc = cljs.core.nth.call(null,vec__28926,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "doc"},(function (){var attrs28885 = cljs.core.pr_str.call(null,doc);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs28885))?sablono.interpreter.attributes.call(null,attrs28885):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28885))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28885)], null))));
})(),(function (){var attrs28886 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(desc));return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs28886))?sablono.interpreter.attributes.call(null,attrs28886):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28886))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28886)], null))));
})()),iter__28919.call(null,cljs.core.rest.call(null,s__28920__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28918,namespace,docs__$3,s__28888__$2,temp__4219__auto__,___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
,null,null));
});})(vec__28918,namespace,docs__$3,s__28888__$2,temp__4219__auto__,___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;return iter__4285__auto__.call(null,docs__$3);
})())),iter__28887.call(null,cljs.core.rest.call(null,s__28888__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
,null,null));
});})(___$1,control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;return iter__4285__auto__.call(null,cljs.core.group_by.call(null,cljs.core.comp.call(null,cljs.core.namespace,cljs.core.first),self__.docs));
})()));
});})(control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;
comsole.views.t28879.prototype.om$core$IDidUpdate$ = true;
comsole.views.t28879.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return cljs.core.println.call(null,"docs updated...");
});})(control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;
comsole.views.t28879.prototype.om$core$IWillReceiveProps$ = true;
comsole.views.t28879.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return cljs.core.println.call(null,"docs received...");
});})(control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;
comsole.views.t28879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (_28881){var self__ = this;
var _28881__$1 = this;return self__.meta28880;
});})(control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;
comsole.views.t28879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function (_28881,meta28880__$1){var self__ = this;
var _28881__$1 = this;return (new comsole.views.t28879(self__.input_checker28828,self__.data__9003__auto__,self__.owner28714,self__.map28824,self__.G__28830,self__.vec__28822,self__.fnk28825,self__.map28823,self__.validate__7204__auto__,self__.output_schema28826,self__.input_schema28827,self__.docs,self__.p__28716,self__.output_checker28829,self__.opts__9004__auto__,self__.control,self__.app,self__.ufv__,meta28880__$1));
});})(control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;
comsole.views.__GT_t28879 = ((function (control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__){
return (function __GT_t28879(input_checker28828__$1,data__9003__auto____$1,owner28714__$1,map28824__$1,G__28830__$1,vec__28822__$1,fnk28825__$1,map28823__$1,validate__7204__auto____$1,output_schema28826__$1,input_schema28827__$1,docs__$2,p__28716__$1,output_checker28829__$1,opts__9004__auto____$1,control__$1,app__$1,ufv____$1,meta28880){return (new comsole.views.t28879(input_checker28828__$1,data__9003__auto____$1,owner28714__$1,map28824__$1,G__28830__$1,vec__28822__$1,fnk28825__$1,map28823__$1,validate__7204__auto____$1,output_schema28826__$1,input_schema28827__$1,docs__$2,p__28716__$1,output_checker28829__$1,opts__9004__auto____$1,control__$1,app__$1,ufv____$1,meta28880));
});})(control,map28824,docs__$1,app,validate__7204__auto__,ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
;
}
return (new comsole.views.t28879(input_checker28828,data__9003__auto__,owner28714,map28824,G__28830,vec__28822,fnk28825,map28823,validate__7204__auto__,output_schema28826,input_schema28827,docs__$1,p__28716,output_checker28829,opts__9004__auto__,control,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___28933 = output_checker28829.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___28933))
{var error__7206__auto___28934 = temp__4219__auto___28933;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk28825","fnk28825",1043393035,null),cljs.core.pr_str.call(null,error__7206__auto___28934)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28826,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___28934], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv__,output_schema28826,input_schema28827,input_checker28828,output_checker28829,vec__28822,opts__9004__auto__))
,schema.core.make_fn_schema.call(null,output_schema28826,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28827], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9004__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28714),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28714,new cljs.core.Keyword(null,"data","data",-232669377),data__9003__auto__], null));
};
var docs = function (data__9003__auto__,owner28714,var_args){
var p__28716 = null;if (arguments.length > 2) {
  p__28716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return docs__delegate.call(this,data__9003__auto__,owner28714,p__28716);};
docs.cljs$lang$maxFixedArity = 2;
docs.cljs$lang$applyTo = (function (arglist__28935){
var data__9003__auto__ = cljs.core.first(arglist__28935);
arglist__28935 = cljs.core.next(arglist__28935);
var owner28714 = cljs.core.first(arglist__28935);
var p__28716 = cljs.core.rest(arglist__28935);
return docs__delegate(data__9003__auto__,owner28714,p__28716);
});
docs.cljs$core$IFn$_invoke$arity$variadic = docs__delegate;
return docs;
})()
;
comsole.views.__GT_docs = (function() {
var __GT_docs = null;
var __GT_docs__1 = (function (cursor__8972__auto__){return om.core.build.call(null,comsole.views.docs,cursor__8972__auto__);
});
var __GT_docs__2 = (function (cursor__8972__auto__,m28715){return om.core.build.call(null,comsole.views.docs,cursor__8972__auto__,m28715);
});
__GT_docs = function(cursor__8972__auto__,m28715){
switch(arguments.length){
case 1:
return __GT_docs__1.call(this,cursor__8972__auto__);
case 2:
return __GT_docs__2.call(this,cursor__8972__auto__,m28715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_docs.cljs$core$IFn$_invoke$arity$1 = __GT_docs__1;
__GT_docs.cljs$core$IFn$_invoke$arity$2 = __GT_docs__2;
return __GT_docs;
})()
;
/**
* @param {...*} var_args
*/
comsole.views.results = (function() { 
var results__delegate = function (data__9003__auto__,owner28936,p__28938){var vec__29060 = p__28938;var opts__9004__auto__ = cljs.core.nth.call(null,vec__29060,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29064 = schema.core.Any;var input_schema29065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"control","control",1892578036),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"loading?","loading?",1905707049),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any,new cljs.core.Keyword(null,"find","find",496279456),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29061","map29061",2083064928,null))], null);var input_checker29066 = schema.core.checker.call(null,input_schema29065);var output_checker29067 = schema.core.checker.call(null,output_schema29064);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function fnk29063(G__29068){var validate__7204__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___29181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29068], null);var temp__4219__auto___29182 = input_checker29066.call(null,args__7205__auto___29181);if(cljs.core.truth_(temp__4219__auto___29182))
{var error__7206__auto___29183 = temp__4219__auto___29182;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29063","fnk29063",950385928,null),cljs.core.pr_str.call(null,error__7206__auto___29183)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29065,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___29181,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29183], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var map29061 = G__29068;while(true){
if(cljs.core.map_QMARK_.call(null,map29061))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29061)));
}
var app = plumbing.fnk.schema.safe_get.call(null,map29061,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var find = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var loading_QMARK_ = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29062 = plumbing.fnk.schema.safe_get.call(null,map29061,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var control = plumbing.fnk.schema.safe_get.call(null,map29062,new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));if(typeof comsole.views.t29125 !== 'undefined')
{} else
{
/**
* @constructor
*/
comsole.views.t29125 = (function (map29061,data__9003__auto__,G__29068,map29062,owner28936,p__28938,output_schema29064,data,results,find,fnk29063,vec__29060,output_checker29067,validate__7204__auto__,input_schema29065,input_checker29066,loading_QMARK_,opts__9004__auto__,control,app,ufv__,meta29126){
this.map29061 = map29061;
this.data__9003__auto__ = data__9003__auto__;
this.G__29068 = G__29068;
this.map29062 = map29062;
this.owner28936 = owner28936;
this.p__28938 = p__28938;
this.output_schema29064 = output_schema29064;
this.data = data;
this.results = results;
this.find = find;
this.fnk29063 = fnk29063;
this.vec__29060 = vec__29060;
this.output_checker29067 = output_checker29067;
this.validate__7204__auto__ = validate__7204__auto__;
this.input_schema29065 = input_schema29065;
this.input_checker29066 = input_checker29066;
this.loading_QMARK_ = loading_QMARK_;
this.opts__9004__auto__ = opts__9004__auto__;
this.control = control;
this.app = app;
this.ufv__ = ufv__;
this.meta29126 = meta29126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comsole.views.t29125.cljs$lang$type = true;
comsole.views.t29125.cljs$lang$ctorStr = "comsole.views/t29125";
comsole.views.t29125.cljs$lang$ctorPrWriter = ((function (control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"comsole.views/t29125");
});})(control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;
comsole.views.t29125.prototype.om$core$IRender$ = true;
comsole.views.t29125.prototype.om$core$IRender$render$arity$1 = ((function (control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs29128 = (cljs.core.truth_(self__.loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Loading"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Results ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),cljs.core.count.call(null,self__.data)], null)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29128))?sablono.interpreter.attributes.call(null,attrs29128):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29128))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "results"},React.DOM.div({"className": "time-machine", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default time time-0"},React.DOM.table({"className": "table table-striped"},React.DOM.thead(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function iter__29133(s__29134){return (new cljs.core.LazySeq(null,((function (attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (){var s__29134__$1 = s__29134;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29134__$1);if(temp__4219__auto__)
{var s__29134__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29134__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29134__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29136 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29135 = (0);while(true){
if((i__29135 < size__4284__auto__))
{var b = cljs.core._nth.call(null,c__4283__auto__,i__29135);cljs.core.chunk_append.call(null,b__29136,(function (){var attrs29129 = cljs.core.pr_str.call(null,b);return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29129))?sablono.interpreter.attributes.call(null,attrs29129):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29129))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29129)], null))));
})());
{
var G__29184 = (i__29135 + (1));
i__29135 = G__29184;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29136),iter__29133.call(null,cljs.core.chunk_rest.call(null,s__29134__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29136),null);
}
} else
{var b = cljs.core.first.call(null,s__29134__$2);return cljs.core.cons.call(null,(function (){var attrs29129 = cljs.core.pr_str.call(null,b);return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29129))?sablono.interpreter.attributes.call(null,attrs29129):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29129))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29129)], null))));
})(),iter__29133.call(null,cljs.core.rest.call(null,s__29134__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,null,null));
});})(attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;return iter__4285__auto__.call(null,self__.find);
})()))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function iter__29137(s__29138){return (new cljs.core.LazySeq(null,((function (attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (){var s__29138__$1 = s__29138;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29138__$1);if(temp__4219__auto__)
{var s__29138__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29138__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29138__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29140 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29139 = (0);while(true){
if((i__29139 < size__4284__auto__))
{var r = cljs.core._nth.call(null,c__4283__auto__,i__29139);cljs.core.chunk_append.call(null,b__29140,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (i__29139,r,c__4283__auto__,size__4284__auto__,b__29140,s__29138__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function iter__29149(s__29150){return (new cljs.core.LazySeq(null,((function (i__29139,r,c__4283__auto__,size__4284__auto__,b__29140,s__29138__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (){var s__29150__$1 = s__29150;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__29150__$1);if(temp__4219__auto____$1)
{var s__29150__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29150__$2))
{var c__4283__auto____$1 = cljs.core.chunk_first.call(null,s__29150__$2);var size__4284__auto____$1 = cljs.core.count.call(null,c__4283__auto____$1);var b__29152 = cljs.core.chunk_buffer.call(null,size__4284__auto____$1);if((function (){var i__29151 = (0);while(true){
if((i__29151 < size__4284__auto____$1))
{var d = cljs.core._nth.call(null,c__4283__auto____$1,i__29151);cljs.core.chunk_append.call(null,b__29152,(function (){var attrs29130 = cljs.core.pr_str.call(null,d);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29130))?sablono.interpreter.attributes.call(null,attrs29130):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29130))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29130)], null))));
})());
{
var G__29185 = (i__29151 + (1));
i__29151 = G__29185;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29152),iter__29149.call(null,cljs.core.chunk_rest.call(null,s__29150__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29152),null);
}
} else
{var d = cljs.core.first.call(null,s__29150__$2);return cljs.core.cons.call(null,(function (){var attrs29130 = cljs.core.pr_str.call(null,d);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29130))?sablono.interpreter.attributes.call(null,attrs29130):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29130))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29130)], null))));
})(),iter__29149.call(null,cljs.core.rest.call(null,s__29150__$2)));
}
} else
{return null;
}
break;
}
});})(i__29139,r,c__4283__auto__,size__4284__auto__,b__29140,s__29138__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,null,null));
});})(i__29139,r,c__4283__auto__,size__4284__auto__,b__29140,s__29138__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;return iter__4285__auto__.call(null,r);
})())));
{
var G__29186 = (i__29139 + (1));
i__29139 = G__29186;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29140),iter__29137.call(null,cljs.core.chunk_rest.call(null,s__29138__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29140),null);
}
} else
{var r = cljs.core.first.call(null,s__29138__$2);return cljs.core.cons.call(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (r,s__29138__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function iter__29153(s__29154){return (new cljs.core.LazySeq(null,((function (r,s__29138__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (){var s__29154__$1 = s__29154;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__29154__$1);if(temp__4219__auto____$1)
{var s__29154__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29154__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29154__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29156 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29155 = (0);while(true){
if((i__29155 < size__4284__auto__))
{var d = cljs.core._nth.call(null,c__4283__auto__,i__29155);cljs.core.chunk_append.call(null,b__29156,(function (){var attrs29130 = cljs.core.pr_str.call(null,d);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29130))?sablono.interpreter.attributes.call(null,attrs29130):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29130))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29130)], null))));
})());
{
var G__29187 = (i__29155 + (1));
i__29155 = G__29187;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29156),iter__29153.call(null,cljs.core.chunk_rest.call(null,s__29154__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29156),null);
}
} else
{var d = cljs.core.first.call(null,s__29154__$2);return cljs.core.cons.call(null,(function (){var attrs29130 = cljs.core.pr_str.call(null,d);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29130))?sablono.interpreter.attributes.call(null,attrs29130):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29130))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29130)], null))));
})(),iter__29153.call(null,cljs.core.rest.call(null,s__29154__$2)));
}
} else
{return null;
}
break;
}
});})(r,s__29138__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,null,null));
});})(r,s__29138__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;return iter__4285__auto__.call(null,r);
})())),iter__29137.call(null,cljs.core.rest.call(null,s__29138__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,null,null));
});})(attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;return iter__4285__auto__.call(null,self__.data);
})()))))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29128),React.DOM.div({"className": "results"},React.DOM.div({"className": "time-machine", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default time time-0"},React.DOM.table({"className": "table table-striped"},React.DOM.thead(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function iter__29157(s__29158){return (new cljs.core.LazySeq(null,((function (attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (){var s__29158__$1 = s__29158;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29158__$1);if(temp__4219__auto__)
{var s__29158__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29158__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29158__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29160 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29159 = (0);while(true){
if((i__29159 < size__4284__auto__))
{var b = cljs.core._nth.call(null,c__4283__auto__,i__29159);cljs.core.chunk_append.call(null,b__29160,(function (){var attrs29131 = cljs.core.pr_str.call(null,b);return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29131))?sablono.interpreter.attributes.call(null,attrs29131):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29131))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29131)], null))));
})());
{
var G__29188 = (i__29159 + (1));
i__29159 = G__29188;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29160),iter__29157.call(null,cljs.core.chunk_rest.call(null,s__29158__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29160),null);
}
} else
{var b = cljs.core.first.call(null,s__29158__$2);return cljs.core.cons.call(null,(function (){var attrs29131 = cljs.core.pr_str.call(null,b);return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29131))?sablono.interpreter.attributes.call(null,attrs29131):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29131))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29131)], null))));
})(),iter__29157.call(null,cljs.core.rest.call(null,s__29158__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,null,null));
});})(attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;return iter__4285__auto__.call(null,self__.find);
})()))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function iter__29161(s__29162){return (new cljs.core.LazySeq(null,((function (attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (){var s__29162__$1 = s__29162;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29162__$1);if(temp__4219__auto__)
{var s__29162__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29162__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29162__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29164 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29163 = (0);while(true){
if((i__29163 < size__4284__auto__))
{var r = cljs.core._nth.call(null,c__4283__auto__,i__29163);cljs.core.chunk_append.call(null,b__29164,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (i__29163,r,c__4283__auto__,size__4284__auto__,b__29164,s__29162__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function iter__29173(s__29174){return (new cljs.core.LazySeq(null,((function (i__29163,r,c__4283__auto__,size__4284__auto__,b__29164,s__29162__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (){var s__29174__$1 = s__29174;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__29174__$1);if(temp__4219__auto____$1)
{var s__29174__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29174__$2))
{var c__4283__auto____$1 = cljs.core.chunk_first.call(null,s__29174__$2);var size__4284__auto____$1 = cljs.core.count.call(null,c__4283__auto____$1);var b__29176 = cljs.core.chunk_buffer.call(null,size__4284__auto____$1);if((function (){var i__29175 = (0);while(true){
if((i__29175 < size__4284__auto____$1))
{var d = cljs.core._nth.call(null,c__4283__auto____$1,i__29175);cljs.core.chunk_append.call(null,b__29176,(function (){var attrs29132 = cljs.core.pr_str.call(null,d);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29132))?sablono.interpreter.attributes.call(null,attrs29132):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29132)], null))));
})());
{
var G__29189 = (i__29175 + (1));
i__29175 = G__29189;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29176),iter__29173.call(null,cljs.core.chunk_rest.call(null,s__29174__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29176),null);
}
} else
{var d = cljs.core.first.call(null,s__29174__$2);return cljs.core.cons.call(null,(function (){var attrs29132 = cljs.core.pr_str.call(null,d);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29132))?sablono.interpreter.attributes.call(null,attrs29132):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29132)], null))));
})(),iter__29173.call(null,cljs.core.rest.call(null,s__29174__$2)));
}
} else
{return null;
}
break;
}
});})(i__29163,r,c__4283__auto__,size__4284__auto__,b__29164,s__29162__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,null,null));
});})(i__29163,r,c__4283__auto__,size__4284__auto__,b__29164,s__29162__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;return iter__4285__auto__.call(null,r);
})())));
{
var G__29190 = (i__29163 + (1));
i__29163 = G__29190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29164),iter__29161.call(null,cljs.core.chunk_rest.call(null,s__29162__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29164),null);
}
} else
{var r = cljs.core.first.call(null,s__29162__$2);return cljs.core.cons.call(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (r,s__29162__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function iter__29177(s__29178){return (new cljs.core.LazySeq(null,((function (r,s__29162__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (){var s__29178__$1 = s__29178;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__29178__$1);if(temp__4219__auto____$1)
{var s__29178__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29178__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29178__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29180 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29179 = (0);while(true){
if((i__29179 < size__4284__auto__))
{var d = cljs.core._nth.call(null,c__4283__auto__,i__29179);cljs.core.chunk_append.call(null,b__29180,(function (){var attrs29132 = cljs.core.pr_str.call(null,d);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29132))?sablono.interpreter.attributes.call(null,attrs29132):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29132)], null))));
})());
{
var G__29191 = (i__29179 + (1));
i__29179 = G__29191;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29180),iter__29177.call(null,cljs.core.chunk_rest.call(null,s__29178__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29180),null);
}
} else
{var d = cljs.core.first.call(null,s__29178__$2);return cljs.core.cons.call(null,(function (){var attrs29132 = cljs.core.pr_str.call(null,d);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29132))?sablono.interpreter.attributes.call(null,attrs29132):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29132)], null))));
})(),iter__29177.call(null,cljs.core.rest.call(null,s__29178__$2)));
}
} else
{return null;
}
break;
}
});})(r,s__29162__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,null,null));
});})(r,s__29162__$2,temp__4219__auto__,attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;return iter__4285__auto__.call(null,r);
})())),iter__29161.call(null,cljs.core.rest.call(null,s__29162__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,null,null));
});})(attrs29128,___$1,control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;return iter__4285__auto__.call(null,self__.data);
})()))))))], null))));
});})(control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;
comsole.views.t29125.prototype.om$core$IDidUpdate$ = true;
comsole.views.t29125.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return cljs.core.println.call(null,"updated results");
});})(control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;
comsole.views.t29125.prototype.om$core$IWillReceiveProps$ = true;
comsole.views.t29125.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return cljs.core.println.call(null,"results received...");
});})(control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;
comsole.views.t29125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (_29127){var self__ = this;
var _29127__$1 = this;return self__.meta29126;
});})(control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;
comsole.views.t29125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function (_29127,meta29126__$1){var self__ = this;
var _29127__$1 = this;return (new comsole.views.t29125(self__.map29061,self__.data__9003__auto__,self__.G__29068,self__.map29062,self__.owner28936,self__.p__28938,self__.output_schema29064,self__.data,self__.results,self__.find,self__.fnk29063,self__.vec__29060,self__.output_checker29067,self__.validate__7204__auto__,self__.input_schema29065,self__.input_checker29066,self__.loading_QMARK_,self__.opts__9004__auto__,self__.control,self__.app,self__.ufv__,meta29126__$1));
});})(control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;
comsole.views.__GT_t29125 = ((function (control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__){
return (function __GT_t29125(map29061__$1,data__9003__auto____$1,G__29068__$1,map29062__$1,owner28936__$1,p__28938__$1,output_schema29064__$1,data__$1,results__$1,find__$1,fnk29063__$1,vec__29060__$1,output_checker29067__$1,validate__7204__auto____$1,input_schema29065__$1,input_checker29066__$1,loading_QMARK___$1,opts__9004__auto____$1,control__$1,app__$1,ufv____$1,meta29126){return (new comsole.views.t29125(map29061__$1,data__9003__auto____$1,G__29068__$1,map29062__$1,owner28936__$1,p__28938__$1,output_schema29064__$1,data__$1,results__$1,find__$1,fnk29063__$1,vec__29060__$1,output_checker29067__$1,validate__7204__auto____$1,input_schema29065__$1,input_checker29066__$1,loading_QMARK___$1,opts__9004__auto____$1,control__$1,app__$1,ufv____$1,meta29126));
});})(control,map29062,loading_QMARK_,data,find,app,validate__7204__auto__,ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
;
}
return (new comsole.views.t29125(map29061,data__9003__auto__,G__29068,map29062,owner28936,p__28938,output_schema29064,data,results,find,fnk29063,vec__29060,output_checker29067,validate__7204__auto__,input_schema29065,input_checker29066,loading_QMARK_,opts__9004__auto__,control,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___29192 = output_checker29067.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___29192))
{var error__7206__auto___29193 = temp__4219__auto___29192;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29063","fnk29063",950385928,null),cljs.core.pr_str.call(null,error__7206__auto___29193)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29064,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29193], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv__,output_schema29064,input_schema29065,input_checker29066,output_checker29067,vec__29060,opts__9004__auto__))
,schema.core.make_fn_schema.call(null,output_schema29064,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29065], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9004__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28936),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28936,new cljs.core.Keyword(null,"data","data",-232669377),data__9003__auto__], null));
};
var results = function (data__9003__auto__,owner28936,var_args){
var p__28938 = null;if (arguments.length > 2) {
  p__28938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return results__delegate.call(this,data__9003__auto__,owner28936,p__28938);};
results.cljs$lang$maxFixedArity = 2;
results.cljs$lang$applyTo = (function (arglist__29194){
var data__9003__auto__ = cljs.core.first(arglist__29194);
arglist__29194 = cljs.core.next(arglist__29194);
var owner28936 = cljs.core.first(arglist__29194);
var p__28938 = cljs.core.rest(arglist__29194);
return results__delegate(data__9003__auto__,owner28936,p__28938);
});
results.cljs$core$IFn$_invoke$arity$variadic = results__delegate;
return results;
})()
;
comsole.views.__GT_results = (function() {
var __GT_results = null;
var __GT_results__1 = (function (cursor__8972__auto__){return om.core.build.call(null,comsole.views.results,cursor__8972__auto__);
});
var __GT_results__2 = (function (cursor__8972__auto__,m28937){return om.core.build.call(null,comsole.views.results,cursor__8972__auto__,m28937);
});
__GT_results = function(cursor__8972__auto__,m28937){
switch(arguments.length){
case 1:
return __GT_results__1.call(this,cursor__8972__auto__);
case 2:
return __GT_results__2.call(this,cursor__8972__auto__,m28937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_results.cljs$core$IFn$_invoke$arity$1 = __GT_results__1;
__GT_results.cljs$core$IFn$_invoke$arity$2 = __GT_results__2;
return __GT_results;
})()
;
/**
* @param {...*} var_args
*/
comsole.views.navbar = (function() { 
var navbar__delegate = function (data__9003__auto__,owner29195,p__29197){var vec__29226 = p__29197;var opts__9004__auto__ = cljs.core.nth.call(null,vec__29226,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29229 = schema.core.Any;var input_schema29230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"page","page",849072397),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29227","map29227",1706632532,null))], null);var input_checker29231 = schema.core.checker.call(null,input_schema29230);var output_checker29232 = schema.core.checker.call(null,output_schema29229);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function fnk29228(G__29233){var validate__7204__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___29254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29233], null);var temp__4219__auto___29255 = input_checker29231.call(null,args__7205__auto___29254);if(cljs.core.truth_(temp__4219__auto___29255))
{var error__7206__auto___29256 = temp__4219__auto___29255;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29228","fnk29228",1016353586,null),cljs.core.pr_str.call(null,error__7206__auto___29256)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29230,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___29254,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29256], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var map29227 = G__29233;while(true){
if(cljs.core.map_QMARK_.call(null,map29227))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29227)));
}
var app = plumbing.fnk.schema.safe_get.call(null,map29227,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var page = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));if(typeof comsole.views.t29244 !== 'undefined')
{} else
{
/**
* @constructor
*/
comsole.views.t29244 = (function (owner29195,data__9003__auto__,output_schema29229,validate__7204__auto__,G__29233,p__29197,navbar,fnk29228,output_checker29232,map29227,opts__9004__auto__,page,input_checker29231,app,vec__29226,ufv__,input_schema29230,meta29245){
this.owner29195 = owner29195;
this.data__9003__auto__ = data__9003__auto__;
this.output_schema29229 = output_schema29229;
this.validate__7204__auto__ = validate__7204__auto__;
this.G__29233 = G__29233;
this.p__29197 = p__29197;
this.navbar = navbar;
this.fnk29228 = fnk29228;
this.output_checker29232 = output_checker29232;
this.map29227 = map29227;
this.opts__9004__auto__ = opts__9004__auto__;
this.page = page;
this.input_checker29231 = input_checker29231;
this.app = app;
this.vec__29226 = vec__29226;
this.ufv__ = ufv__;
this.input_schema29230 = input_schema29230;
this.meta29245 = meta29245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comsole.views.t29244.cljs$lang$type = true;
comsole.views.t29244.cljs$lang$ctorStr = "comsole.views/t29244";
comsole.views.t29244.cljs$lang$ctorPrWriter = ((function (page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"comsole.views/t29244");
});})(page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
;
comsole.views.t29244.prototype.om$core$IRender$ = true;
comsole.views.t29244.prototype.om$core$IRender$render$arity$1 = ((function (page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "navbar navbar-inverse navbar-fixed-top", "role": "navigation"},React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "navbar-header"},React.DOM.a({"className": "navbar-brand", "href": "/"},"comsole")),React.DOM.div({"className": "collapse navbar-collapse"},(function (){var attrs29249 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.page));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs29249))?sablono.interpreter.attributes.call(null,attrs29249):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29249))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29249)], null))));
})(),React.DOM.ul({"className": "nav navbar-nav"},cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (___$1,page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function iter__29250(s__29251){return (new cljs.core.LazySeq(null,((function (___$1,page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function (){var s__29251__$1 = s__29251;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29251__$1);if(temp__4219__auto__)
{var s__29251__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29251__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29251__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29253 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29252 = (0);while(true){
if((i__29252 < size__4284__auto__))
{var route = cljs.core._nth.call(null,c__4283__auto__,i__29252);cljs.core.chunk_append.call(null,b__29253,React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.page,route))?"active":null)},sablono.interpreter.interpret.call(null,comsole.util.link_for.call(null,route))));
{
var G__29257 = (i__29252 + (1));
i__29252 = G__29257;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29253),iter__29250.call(null,cljs.core.chunk_rest.call(null,s__29251__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29253),null);
}
} else
{var route = cljs.core.first.call(null,s__29251__$2);return cljs.core.cons.call(null,React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.page,route))?"active":null)},sablono.interpreter.interpret.call(null,comsole.util.link_for.call(null,route))),iter__29250.call(null,cljs.core.rest.call(null,s__29251__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
,null,null));
});})(___$1,page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
;return iter__4285__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","queries","app/queries",1444623356),new cljs.core.Keyword("app","builder","app/builder",-2055437588),new cljs.core.Keyword("app","docs","app/docs",-1975755543)], null));
})())))));
});})(page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
;
comsole.views.t29244.prototype.om$core$IDidUpdate$ = true;
comsole.views.t29244.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return cljs.core.println.call(null,"updated navbar");
});})(page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
;
comsole.views.t29244.prototype.om$core$IWillReceiveProps$ = true;
comsole.views.t29244.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function (s,p){var self__ = this;
var s__$1 = this;return cljs.core.println.call(null,"navbar received...",cljs.core.pr_str.call(null,p,s__$1));
});})(page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
;
comsole.views.t29244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function (_29246){var self__ = this;
var _29246__$1 = this;return self__.meta29245;
});})(page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
;
comsole.views.t29244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function (_29246,meta29245__$1){var self__ = this;
var _29246__$1 = this;return (new comsole.views.t29244(self__.owner29195,self__.data__9003__auto__,self__.output_schema29229,self__.validate__7204__auto__,self__.G__29233,self__.p__29197,self__.navbar,self__.fnk29228,self__.output_checker29232,self__.map29227,self__.opts__9004__auto__,self__.page,self__.input_checker29231,self__.app,self__.vec__29226,self__.ufv__,self__.input_schema29230,meta29245__$1));
});})(page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
;
comsole.views.__GT_t29244 = ((function (page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__){
return (function __GT_t29244(owner29195__$1,data__9003__auto____$1,output_schema29229__$1,validate__7204__auto____$1,G__29233__$1,p__29197__$1,navbar__$1,fnk29228__$1,output_checker29232__$1,map29227__$1,opts__9004__auto____$1,page__$1,input_checker29231__$1,app__$1,vec__29226__$1,ufv____$1,input_schema29230__$1,meta29245){return (new comsole.views.t29244(owner29195__$1,data__9003__auto____$1,output_schema29229__$1,validate__7204__auto____$1,G__29233__$1,p__29197__$1,navbar__$1,fnk29228__$1,output_checker29232__$1,map29227__$1,opts__9004__auto____$1,page__$1,input_checker29231__$1,app__$1,vec__29226__$1,ufv____$1,input_schema29230__$1,meta29245));
});})(page,app,validate__7204__auto__,ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
;
}
return (new comsole.views.t29244(owner29195,data__9003__auto__,output_schema29229,validate__7204__auto__,G__29233,p__29197,navbar,fnk29228,output_checker29232,map29227,opts__9004__auto__,page,input_checker29231,app,vec__29226,ufv__,input_schema29230,null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___29258 = output_checker29232.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___29258))
{var error__7206__auto___29259 = temp__4219__auto___29258;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29228","fnk29228",1016353586,null),cljs.core.pr_str.call(null,error__7206__auto___29259)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29229,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29259], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv__,output_schema29229,input_schema29230,input_checker29231,output_checker29232,vec__29226,opts__9004__auto__))
,schema.core.make_fn_schema.call(null,output_schema29229,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29230], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9004__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29195,new cljs.core.Keyword(null,"data","data",-232669377),data__9003__auto__], null));
};
var navbar = function (data__9003__auto__,owner29195,var_args){
var p__29197 = null;if (arguments.length > 2) {
  p__29197 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return navbar__delegate.call(this,data__9003__auto__,owner29195,p__29197);};
navbar.cljs$lang$maxFixedArity = 2;
navbar.cljs$lang$applyTo = (function (arglist__29260){
var data__9003__auto__ = cljs.core.first(arglist__29260);
arglist__29260 = cljs.core.next(arglist__29260);
var owner29195 = cljs.core.first(arglist__29260);
var p__29197 = cljs.core.rest(arglist__29260);
return navbar__delegate(data__9003__auto__,owner29195,p__29197);
});
navbar.cljs$core$IFn$_invoke$arity$variadic = navbar__delegate;
return navbar;
})()
;
comsole.views.__GT_navbar = (function() {
var __GT_navbar = null;
var __GT_navbar__1 = (function (cursor__8972__auto__){return om.core.build.call(null,comsole.views.navbar,cursor__8972__auto__);
});
var __GT_navbar__2 = (function (cursor__8972__auto__,m29196){return om.core.build.call(null,comsole.views.navbar,cursor__8972__auto__,m29196);
});
__GT_navbar = function(cursor__8972__auto__,m29196){
switch(arguments.length){
case 1:
return __GT_navbar__1.call(this,cursor__8972__auto__);
case 2:
return __GT_navbar__2.call(this,cursor__8972__auto__,m29196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_navbar.cljs$core$IFn$_invoke$arity$1 = __GT_navbar__1;
__GT_navbar.cljs$core$IFn$_invoke$arity$2 = __GT_navbar__2;
return __GT_navbar;
})()
;
/**
* @param {...*} var_args
*/
comsole.views.where_row = (function() { 
var where_row__delegate = function (data__9003__auto__,owner29262,p__29264){var vec__29295 = p__29264;var opts__9004__auto__ = cljs.core.nth.call(null,vec__29295,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29300 = schema.core.Any;var input_schema29301 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"control","control",1892578036),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"where","where",-2044795965),schema.core.Any,new cljs.core.Keyword(null,"index","index",-1531685915),schema.core.Any,new cljs.core.Keyword(null,"fields","fields",-1932066230),schema.core.Any,new cljs.core.Keyword(null,"drop-down","drop-down",-545329823),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29296","map29296",469499452,null))], null);var input_checker29302 = schema.core.checker.call(null,input_schema29301);var output_checker29303 = schema.core.checker.call(null,output_schema29300);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function fnk29299(G__29304){var validate__7204__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___29325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29304], null);var temp__4219__auto___29326 = input_checker29302.call(null,args__7205__auto___29325);if(cljs.core.truth_(temp__4219__auto___29326))
{var error__7206__auto___29327 = temp__4219__auto___29326;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29299","fnk29299",1748964419,null),cljs.core.pr_str.call(null,error__7206__auto___29327)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29301,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___29325,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29327], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var map29296 = G__29304;while(true){
if(cljs.core.map_QMARK_.call(null,map29296))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29296)));
}
var map29298 = plumbing.fnk.schema.safe_get.call(null,map29296,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var drop_down = plumbing.fnk.schema.safe_get.call(null,map29298,new cljs.core.Keyword(null,"drop-down","drop-down",-545329823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var fields = plumbing.fnk.schema.safe_get.call(null,map29298,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var index = plumbing.fnk.schema.safe_get.call(null,map29298,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var where = plumbing.fnk.schema.safe_get.call(null,map29298,new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29297 = plumbing.fnk.schema.safe_get.call(null,map29296,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var control = plumbing.fnk.schema.safe_get.call(null,map29297,new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));if(typeof comsole.views.t29315 !== 'undefined')
{} else
{
/**
* @constructor
*/
comsole.views.t29315 = (function (p__29264,map29297,data__9003__auto__,fnk29299,input_schema29301,drop_down,where,validate__7204__auto__,map29298,index,output_checker29303,where_row,vec__29295,input_checker29302,fields,opts__9004__auto__,G__29304,output_schema29300,control,owner29262,map29296,ufv__,meta29316){
this.p__29264 = p__29264;
this.map29297 = map29297;
this.data__9003__auto__ = data__9003__auto__;
this.fnk29299 = fnk29299;
this.input_schema29301 = input_schema29301;
this.drop_down = drop_down;
this.where = where;
this.validate__7204__auto__ = validate__7204__auto__;
this.map29298 = map29298;
this.index = index;
this.output_checker29303 = output_checker29303;
this.where_row = where_row;
this.vec__29295 = vec__29295;
this.input_checker29302 = input_checker29302;
this.fields = fields;
this.opts__9004__auto__ = opts__9004__auto__;
this.G__29304 = G__29304;
this.output_schema29300 = output_schema29300;
this.control = control;
this.owner29262 = owner29262;
this.map29296 = map29296;
this.ufv__ = ufv__;
this.meta29316 = meta29316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comsole.views.t29315.cljs$lang$type = true;
comsole.views.t29315.cljs$lang$ctorStr = "comsole.views/t29315";
comsole.views.t29315.cljs$lang$ctorPrWriter = ((function (control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"comsole.views/t29315");
});})(control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
;
comsole.views.t29315.prototype.om$core$IRender$ = true;
comsole.views.t29315.prototype.om$core$IRender$render$arity$1 = ((function (control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function iter__29321(s__29322){return (new cljs.core.LazySeq(null,((function (___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (){var s__29322__$1 = s__29322;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29322__$1);if(temp__4219__auto__)
{var s__29322__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29322__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29322__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29324 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29323 = (0);while(true){
if((i__29323 < size__4284__auto__))
{var j = cljs.core._nth.call(null,c__4283__auto__,i__29323);cljs.core.chunk_append.call(null,b__29324,(function (){var attrs29318 = (function (){var temp__4217__auto__ = cljs.core.get.call(null,self__.where,j);if(cljs.core.truth_(temp__4217__auto__))
{var r = temp__4217__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-blocks","div.input-blocks",-1914353575),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.binding.input-block","span.binding.input-block",-201908465),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29323,r,temp__4217__auto__,j,c__4283__auto__,size__4284__auto__,b__29324,s__29322__$2,temp__4219__auto__,___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","edit-cell","builder/edit-cell",704183504),self__.index,j,null], null));
});})(i__29323,r,temp__4217__auto__,j,c__4283__auto__,size__4284__auto__,b__29324,s__29322__$2,temp__4219__auto__,___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
], null)], null)], null)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),("Please enter a "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (i__29323,temp__4217__auto__,j,c__4283__auto__,size__4284__auto__,b__29324,s__29322__$2,temp__4219__auto__,___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (p1__29261_SHARP_){if(cljs.core._EQ_.call(null,(13),p1__29261_SHARP_.which))
{cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","edit-cell","builder/edit-cell",704183504),self__.index,j,p1__29261_SHARP_.target.value], null));
return p1__29261_SHARP_.target.value = "";
} else
{return null;
}
});})(i__29323,temp__4217__auto__,j,c__4283__auto__,size__4284__auto__,b__29324,s__29322__$2,temp__4219__auto__,___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
], null)], null);
}
})();return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29318))?sablono.interpreter.attributes.call(null,attrs29318):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29318))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29318)], null))));
})());
{
var G__29328 = (i__29323 + (1));
i__29323 = G__29328;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29324),iter__29321.call(null,cljs.core.chunk_rest.call(null,s__29322__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29324),null);
}
} else
{var j = cljs.core.first.call(null,s__29322__$2);return cljs.core.cons.call(null,(function (){var attrs29318 = (function (){var temp__4217__auto__ = cljs.core.get.call(null,self__.where,j);if(cljs.core.truth_(temp__4217__auto__))
{var r = temp__4217__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-blocks","div.input-blocks",-1914353575),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.binding.input-block","span.binding.input-block",-201908465),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,temp__4217__auto__,j,s__29322__$2,temp__4219__auto__,___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","edit-cell","builder/edit-cell",704183504),self__.index,j,null], null));
});})(r,temp__4217__auto__,j,s__29322__$2,temp__4219__auto__,___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
], null)], null)], null)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),("Please enter a "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4217__auto__,j,s__29322__$2,temp__4219__auto__,___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (p1__29261_SHARP_){if(cljs.core._EQ_.call(null,(13),p1__29261_SHARP_.which))
{cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","edit-cell","builder/edit-cell",704183504),self__.index,j,p1__29261_SHARP_.target.value], null));
return p1__29261_SHARP_.target.value = "";
} else
{return null;
}
});})(temp__4217__auto__,j,s__29322__$2,temp__4219__auto__,___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
], null)], null);
}
})();return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29318))?sablono.interpreter.attributes.call(null,attrs29318):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29318))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29318)], null))));
})(),iter__29321.call(null,cljs.core.rest.call(null,s__29322__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
,null,null));
});})(___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
;return iter__4285__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null));
})()),React.DOM.td({"className": "control"},React.DOM.a({"className": "btn btn-warning", "onClick": ((function (___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","del-row","builder/del-row",-958250986),self__.index], null));
});})(___$1,control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
},React.DOM.span({"className": "glyphicon glyphicon-remove"}))));
});})(control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
;
comsole.views.t29315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (_29317){var self__ = this;
var _29317__$1 = this;return self__.meta29316;
});})(control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
;
comsole.views.t29315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function (_29317,meta29316__$1){var self__ = this;
var _29317__$1 = this;return (new comsole.views.t29315(self__.p__29264,self__.map29297,self__.data__9003__auto__,self__.fnk29299,self__.input_schema29301,self__.drop_down,self__.where,self__.validate__7204__auto__,self__.map29298,self__.index,self__.output_checker29303,self__.where_row,self__.vec__29295,self__.input_checker29302,self__.fields,self__.opts__9004__auto__,self__.G__29304,self__.output_schema29300,self__.control,self__.owner29262,self__.map29296,self__.ufv__,meta29316__$1));
});})(control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
;
comsole.views.__GT_t29315 = ((function (control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__){
return (function __GT_t29315(p__29264__$1,map29297__$1,data__9003__auto____$1,fnk29299__$1,input_schema29301__$1,drop_down__$1,where__$1,validate__7204__auto____$1,map29298__$1,index__$1,output_checker29303__$1,where_row__$1,vec__29295__$1,input_checker29302__$1,fields__$1,opts__9004__auto____$1,G__29304__$1,output_schema29300__$1,control__$1,owner29262__$1,map29296__$1,ufv____$1,meta29316){return (new comsole.views.t29315(p__29264__$1,map29297__$1,data__9003__auto____$1,fnk29299__$1,input_schema29301__$1,drop_down__$1,where__$1,validate__7204__auto____$1,map29298__$1,index__$1,output_checker29303__$1,where_row__$1,vec__29295__$1,input_checker29302__$1,fields__$1,opts__9004__auto____$1,G__29304__$1,output_schema29300__$1,control__$1,owner29262__$1,map29296__$1,ufv____$1,meta29316));
});})(control,map29297,where,index,fields,drop_down,map29298,validate__7204__auto__,ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
;
}
return (new comsole.views.t29315(p__29264,map29297,data__9003__auto__,fnk29299,input_schema29301,drop_down,where,validate__7204__auto__,map29298,index,output_checker29303,where_row,vec__29295,input_checker29302,fields,opts__9004__auto__,G__29304,output_schema29300,control,owner29262,map29296,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___29329 = output_checker29303.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___29329))
{var error__7206__auto___29330 = temp__4219__auto___29329;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29299","fnk29299",1748964419,null),cljs.core.pr_str.call(null,error__7206__auto___29330)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29300,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29330], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv__,output_schema29300,input_schema29301,input_checker29302,output_checker29303,vec__29295,opts__9004__auto__))
,schema.core.make_fn_schema.call(null,output_schema29300,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29301], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9004__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29262),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29262,new cljs.core.Keyword(null,"data","data",-232669377),data__9003__auto__], null));
};
var where_row = function (data__9003__auto__,owner29262,var_args){
var p__29264 = null;if (arguments.length > 2) {
  p__29264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return where_row__delegate.call(this,data__9003__auto__,owner29262,p__29264);};
where_row.cljs$lang$maxFixedArity = 2;
where_row.cljs$lang$applyTo = (function (arglist__29331){
var data__9003__auto__ = cljs.core.first(arglist__29331);
arglist__29331 = cljs.core.next(arglist__29331);
var owner29262 = cljs.core.first(arglist__29331);
var p__29264 = cljs.core.rest(arglist__29331);
return where_row__delegate(data__9003__auto__,owner29262,p__29264);
});
where_row.cljs$core$IFn$_invoke$arity$variadic = where_row__delegate;
return where_row;
})()
;
comsole.views.__GT_where_row = (function() {
var __GT_where_row = null;
var __GT_where_row__1 = (function (cursor__8972__auto__){return om.core.build.call(null,comsole.views.where_row,cursor__8972__auto__);
});
var __GT_where_row__2 = (function (cursor__8972__auto__,m29263){return om.core.build.call(null,comsole.views.where_row,cursor__8972__auto__,m29263);
});
__GT_where_row = function(cursor__8972__auto__,m29263){
switch(arguments.length){
case 1:
return __GT_where_row__1.call(this,cursor__8972__auto__);
case 2:
return __GT_where_row__2.call(this,cursor__8972__auto__,m29263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_where_row.cljs$core$IFn$_invoke$arity$1 = __GT_where_row__1;
__GT_where_row.cljs$core$IFn$_invoke$arity$2 = __GT_where_row__2;
return __GT_where_row;
})()
;
/**
* @param {...*} var_args
*/
comsole.views.builder = (function() { 
var builder__delegate = function (data__9003__auto__,owner29333,p__29335){var vec__29405 = p__29335;var opts__9004__auto__ = cljs.core.nth.call(null,vec__29405,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29409 = schema.core.Any;var input_schema29410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"control","control",1892578036),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"loading?","loading?",1905707049),schema.core.Any,new cljs.core.Keyword(null,"docs","docs",-1974280502),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29406","map29406",-1934852648,null))], null);var input_checker29411 = schema.core.checker.call(null,input_schema29410);var output_checker29412 = schema.core.checker.call(null,output_schema29409);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function fnk29408(G__29413){var validate__7204__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___29474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29413], null);var temp__4219__auto___29475 = input_checker29411.call(null,args__7205__auto___29474);if(cljs.core.truth_(temp__4219__auto___29475))
{var error__7206__auto___29476 = temp__4219__auto___29475;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29408","fnk29408",516530107,null),cljs.core.pr_str.call(null,error__7206__auto___29476)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29410,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___29474,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29476], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var map29406 = G__29413;while(true){
if(cljs.core.map_QMARK_.call(null,map29406))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29406)));
}
var app = plumbing.fnk.schema.safe_get.call(null,map29406,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var docs = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var loading_QMARK_ = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29407 = plumbing.fnk.schema.safe_get.call(null,map29406,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var control = plumbing.fnk.schema.safe_get.call(null,map29407,new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));if(typeof comsole.views.t29444 !== 'undefined')
{} else
{
/**
* @constructor
*/
comsole.views.t29444 = (function (query,data__9003__auto__,owner29333,output_schema29409,data,vec__29405,validate__7204__auto__,loading_QMARK_,docs,builder,input_checker29411,opts__9004__auto__,map29406,output_checker29412,control,fnk29408,map29407,app,p__29335,ufv__,input_schema29410,G__29413,meta29445){
this.query = query;
this.data__9003__auto__ = data__9003__auto__;
this.owner29333 = owner29333;
this.output_schema29409 = output_schema29409;
this.data = data;
this.vec__29405 = vec__29405;
this.validate__7204__auto__ = validate__7204__auto__;
this.loading_QMARK_ = loading_QMARK_;
this.docs = docs;
this.builder = builder;
this.input_checker29411 = input_checker29411;
this.opts__9004__auto__ = opts__9004__auto__;
this.map29406 = map29406;
this.output_checker29412 = output_checker29412;
this.control = control;
this.fnk29408 = fnk29408;
this.map29407 = map29407;
this.app = app;
this.p__29335 = p__29335;
this.ufv__ = ufv__;
this.input_schema29410 = input_schema29410;
this.G__29413 = G__29413;
this.meta29445 = meta29445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comsole.views.t29444.cljs$lang$type = true;
comsole.views.t29444.cljs$lang$ctorStr = "comsole.views/t29444";
comsole.views.t29444.cljs$lang$ctorPrWriter = ((function (control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"comsole.views/t29444");
});})(control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;
comsole.views.t29444.prototype.om$core$IRender$ = true;
comsole.views.t29444.prototype.om$core$IRender$render$arity$1 = ((function (control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var bindings = comsole.views.bindings.call(null,self__.query);var bindings__$1 = cljs.core.map.call(null,((function (bindings,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,x),"Binding"], null);
});})(bindings,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
,bindings);var drop_down = bindings__$1;return React.DOM.div(null,React.DOM.div({"className": "page-header"},React.DOM.h3(null,"Builder")),React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label(null,"Name"),sablono.interpreter.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.query), "onChange": ((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.List.EMPTY;
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
})),React.DOM.div({"className": "form-group"},React.DOM.label(null,"Find"),React.DOM.div({"className": "input-container"},React.DOM.div({"className": "input-blocks"},cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function iter__29462(s__29463){return (new cljs.core.LazySeq(null,((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){var s__29463__$1 = s__29463;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29463__$1);if(temp__4219__auto__)
{var s__29463__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29463__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29463__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29465 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29464 = (0);while(true){
if((i__29464 < size__4284__auto__))
{var find = cljs.core._nth.call(null,c__4283__auto__,i__29464);cljs.core.chunk_append.call(null,b__29465,(function (){var attrs29453 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(find));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs29453))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["binding","input-block"], null)], null),attrs29453)):{"className": "binding input-block"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29453))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a(null,React.DOM.span({"className": "glyphicon glyphicon-remove", "onClick": ((function (i__29464,attrs29453,find,c__4283__auto__,size__4284__auto__,b__29465,s__29463__$2,temp__4219__auto__,bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","find-remove","builder/find-remove",1318827880),find], null));
});})(i__29464,attrs29453,find,c__4283__auto__,size__4284__auto__,b__29465,s__29463__$2,temp__4219__auto__,bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29453),React.DOM.a(null,React.DOM.span({"className": "glyphicon glyphicon-remove", "onClick": ((function (i__29464,attrs29453,find,c__4283__auto__,size__4284__auto__,b__29465,s__29463__$2,temp__4219__auto__,bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","find-remove","builder/find-remove",1318827880),find], null));
});})(i__29464,attrs29453,find,c__4283__auto__,size__4284__auto__,b__29465,s__29463__$2,temp__4219__auto__,bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
}))], null))));
})());
{
var G__29477 = (i__29464 + (1));
i__29464 = G__29477;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29465),iter__29462.call(null,cljs.core.chunk_rest.call(null,s__29463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29465),null);
}
} else
{var find = cljs.core.first.call(null,s__29463__$2);return cljs.core.cons.call(null,(function (){var attrs29453 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(find));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs29453))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["binding","input-block"], null)], null),attrs29453)):{"className": "binding input-block"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29453))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a(null,React.DOM.span({"className": "glyphicon glyphicon-remove", "onClick": ((function (attrs29453,find,s__29463__$2,temp__4219__auto__,bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","find-remove","builder/find-remove",1318827880),find], null));
});})(attrs29453,find,s__29463__$2,temp__4219__auto__,bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
}))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29453),React.DOM.a(null,React.DOM.span({"className": "glyphicon glyphicon-remove", "onClick": ((function (attrs29453,find,s__29463__$2,temp__4219__auto__,bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","find-remove","builder/find-remove",1318827880),find], null));
});})(attrs29453,find,s__29463__$2,temp__4219__auto__,bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
}))], null))));
})(),iter__29462.call(null,cljs.core.rest.call(null,s__29463__$2)));
}
} else
{return null;
}
break;
}
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
,null,null));
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;return iter__4285__auto__.call(null,cljs.core.get_in.call(null,self__.query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456)], null)));
})())),sablono.interpreter.input.call(null,{"className": "form-control", "onKeyDown": ((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (p1__29332_SHARP_){if(cljs.core._EQ_.call(null,(13),p1__29332_SHARP_.which))
{cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","find-add","builder/find-add",-1984785757),p1__29332_SHARP_.target.value], null));
return p1__29332_SHARP_.target.value = "";
} else
{return null;
}
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
}))),React.DOM.div({"className": "form-group"},React.DOM.label(null,"Inputs"),sablono.interpreter.input.call(null,{"className": "form-control", "value": cljs.core.get_in.call(null,self__.query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null)), "onChange": ((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.List.EMPTY;
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
})),React.DOM.table({"className": "where"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th({"className": "e"},"Entity"),React.DOM.th({"className": "a"},"Attribute"),React.DOM.th({"className": "v"},"Value"),React.DOM.th({"className": "control"},""))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function iter__29466(s__29467){return (new cljs.core.LazySeq(null,((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){var s__29467__$1 = s__29467;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29467__$1);if(temp__4219__auto__)
{var s__29467__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29467__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29467__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29469 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29468 = (0);while(true){
if((i__29468 < size__4284__auto__))
{var vec__29472 = cljs.core._nth.call(null,c__4283__auto__,i__29468);var i = cljs.core.nth.call(null,vec__29472,(0),null);var m = cljs.core.nth.call(null,vec__29472,(1),null);cljs.core.chunk_append.call(null,b__29469,sablono.interpreter.interpret.call(null,comsole.views.__GT_where_row.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),m,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"drop-down","drop-down",-545329823),drop_down,new cljs.core.Keyword(null,"where","where",-2044795965),m], null))));
{
var G__29478 = (i__29468 + (1));
i__29468 = G__29478;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29469),iter__29466.call(null,cljs.core.chunk_rest.call(null,s__29467__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29469),null);
}
} else
{var vec__29473 = cljs.core.first.call(null,s__29467__$2);var i = cljs.core.nth.call(null,vec__29473,(0),null);var m = cljs.core.nth.call(null,vec__29473,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,comsole.views.__GT_where_row.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fields","fields",-1932066230),m,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"drop-down","drop-down",-545329823),drop_down,new cljs.core.Keyword(null,"where","where",-2044795965),m], null))),iter__29466.call(null,cljs.core.rest.call(null,s__29467__$2)));
}
} else
{return null;
}
break;
}
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
,null,null));
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;return iter__4285__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.get_in.call(null,self__.query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"where","where",-2044795965)], null))));
})()))),React.DOM.div({"className": "pull-right"},React.DOM.a({"className": "btn btn-success", "onClick": ((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("builder","add-row","builder/add-row",469458446)], null));
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
},React.DOM.span({"className": "glyphicon glyphicon-plus"})))),React.DOM.a({"className": "btn btn-primary", "onClick": ((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.control,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("query","run","query/run",1843547515)], null));
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
},"Test"),React.DOM.a({"className": "btn btn-primary", "onClick": ((function (bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (){return cljs.core.List.EMPTY;
});})(bindings,bindings__$1,drop_down,___$1,control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
},"Save"),React.DOM.hr(null),sablono.interpreter.interpret.call(null,comsole.views.__GT_results.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(self__.query),new cljs.core.Keyword(null,"data","data",-232669377),self__.data,new cljs.core.Keyword(null,"loading?","loading?",1905707049),self__.loading_QMARK_], null))));
});})(control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;
comsole.views.t29444.prototype.om$core$IDidUpdate$ = true;
comsole.views.t29444.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return cljs.core.println.call(null,"updated builder");
});})(control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;
comsole.views.t29444.prototype.om$core$IWillReceiveProps$ = true;
comsole.views.t29444.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return cljs.core.println.call(null,"builder received...");
});})(control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;
comsole.views.t29444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (_29446){var self__ = this;
var _29446__$1 = this;return self__.meta29445;
});})(control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;
comsole.views.t29444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function (_29446,meta29445__$1){var self__ = this;
var _29446__$1 = this;return (new comsole.views.t29444(self__.query,self__.data__9003__auto__,self__.owner29333,self__.output_schema29409,self__.data,self__.vec__29405,self__.validate__7204__auto__,self__.loading_QMARK_,self__.docs,self__.builder,self__.input_checker29411,self__.opts__9004__auto__,self__.map29406,self__.output_checker29412,self__.control,self__.fnk29408,self__.map29407,self__.app,self__.p__29335,self__.ufv__,self__.input_schema29410,self__.G__29413,meta29445__$1));
});})(control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;
comsole.views.__GT_t29444 = ((function (control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__){
return (function __GT_t29444(query__$1,data__9003__auto____$1,owner29333__$1,output_schema29409__$1,data__$1,vec__29405__$1,validate__7204__auto____$1,loading_QMARK___$1,docs__$1,builder__$1,input_checker29411__$1,opts__9004__auto____$1,map29406__$1,output_checker29412__$1,control__$1,fnk29408__$1,map29407__$1,app__$1,p__29335__$1,ufv____$1,input_schema29410__$1,G__29413__$1,meta29445){return (new comsole.views.t29444(query__$1,data__9003__auto____$1,owner29333__$1,output_schema29409__$1,data__$1,vec__29405__$1,validate__7204__auto____$1,loading_QMARK___$1,docs__$1,builder__$1,input_checker29411__$1,opts__9004__auto____$1,map29406__$1,output_checker29412__$1,control__$1,fnk29408__$1,map29407__$1,app__$1,p__29335__$1,ufv____$1,input_schema29410__$1,G__29413__$1,meta29445));
});})(control,map29407,loading_QMARK_,docs,query,data,app,validate__7204__auto__,ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
;
}
return (new comsole.views.t29444(query,data__9003__auto__,owner29333,output_schema29409,data,vec__29405,validate__7204__auto__,loading_QMARK_,docs,builder,input_checker29411,opts__9004__auto__,map29406,output_checker29412,control,fnk29408,map29407,app,p__29335,ufv__,input_schema29410,G__29413,null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___29479 = output_checker29412.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___29479))
{var error__7206__auto___29480 = temp__4219__auto___29479;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29408","fnk29408",516530107,null),cljs.core.pr_str.call(null,error__7206__auto___29480)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29409,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29480], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv__,output_schema29409,input_schema29410,input_checker29411,output_checker29412,vec__29405,opts__9004__auto__))
,schema.core.make_fn_schema.call(null,output_schema29409,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29410], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9004__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29333),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29333,new cljs.core.Keyword(null,"data","data",-232669377),data__9003__auto__], null));
};
var builder = function (data__9003__auto__,owner29333,var_args){
var p__29335 = null;if (arguments.length > 2) {
  p__29335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return builder__delegate.call(this,data__9003__auto__,owner29333,p__29335);};
builder.cljs$lang$maxFixedArity = 2;
builder.cljs$lang$applyTo = (function (arglist__29481){
var data__9003__auto__ = cljs.core.first(arglist__29481);
arglist__29481 = cljs.core.next(arglist__29481);
var owner29333 = cljs.core.first(arglist__29481);
var p__29335 = cljs.core.rest(arglist__29481);
return builder__delegate(data__9003__auto__,owner29333,p__29335);
});
builder.cljs$core$IFn$_invoke$arity$variadic = builder__delegate;
return builder;
})()
;
comsole.views.__GT_builder = (function() {
var __GT_builder = null;
var __GT_builder__1 = (function (cursor__8972__auto__){return om.core.build.call(null,comsole.views.builder,cursor__8972__auto__);
});
var __GT_builder__2 = (function (cursor__8972__auto__,m29334){return om.core.build.call(null,comsole.views.builder,cursor__8972__auto__,m29334);
});
__GT_builder = function(cursor__8972__auto__,m29334){
switch(arguments.length){
case 1:
return __GT_builder__1.call(this,cursor__8972__auto__);
case 2:
return __GT_builder__2.call(this,cursor__8972__auto__,m29334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_builder.cljs$core$IFn$_invoke$arity$1 = __GT_builder__1;
__GT_builder.cljs$core$IFn$_invoke$arity$2 = __GT_builder__2;
return __GT_builder;
})()
;
/**
* @param {...*} var_args
*/
comsole.views.queries = (function() { 
var queries__delegate = function (data__9003__auto__,owner29482,p__29484){var vec__29513 = p__29484;var opts__9004__auto__ = cljs.core.nth.call(null,vec__29513,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29516 = schema.core.Any;var input_schema29517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"queries","queries",1446291995),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29514","map29514",-1954054059,null))], null);var input_checker29518 = schema.core.checker.call(null,input_schema29517);var output_checker29519 = schema.core.checker.call(null,output_schema29516);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function fnk29515(G__29520){var validate__7204__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___29541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29520], null);var temp__4219__auto___29542 = input_checker29518.call(null,args__7205__auto___29541);if(cljs.core.truth_(temp__4219__auto___29542))
{var error__7206__auto___29543 = temp__4219__auto___29542;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29515","fnk29515",1164403132,null),cljs.core.pr_str.call(null,error__7206__auto___29543)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29517,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___29541,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29543], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var map29514 = G__29520;while(true){
if(cljs.core.map_QMARK_.call(null,map29514))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29514)));
}
var app = plumbing.fnk.schema.safe_get.call(null,map29514,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var queries__$1 = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));if(typeof comsole.views.t29531 !== 'undefined')
{} else
{
/**
* @constructor
*/
comsole.views.t29531 = (function (G__29520,queries,data__9003__auto__,input_schema29517,p__29484,output_checker29519,validate__7204__auto__,opts__9004__auto__,map29514,input_checker29518,output_schema29516,vec__29513,owner29482,app,fnk29515,ufv__,meta29532){
this.G__29520 = G__29520;
this.queries = queries;
this.data__9003__auto__ = data__9003__auto__;
this.input_schema29517 = input_schema29517;
this.p__29484 = p__29484;
this.output_checker29519 = output_checker29519;
this.validate__7204__auto__ = validate__7204__auto__;
this.opts__9004__auto__ = opts__9004__auto__;
this.map29514 = map29514;
this.input_checker29518 = input_checker29518;
this.output_schema29516 = output_schema29516;
this.vec__29513 = vec__29513;
this.owner29482 = owner29482;
this.app = app;
this.fnk29515 = fnk29515;
this.ufv__ = ufv__;
this.meta29532 = meta29532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comsole.views.t29531.cljs$lang$type = true;
comsole.views.t29531.cljs$lang$ctorStr = "comsole.views/t29531";
comsole.views.t29531.cljs$lang$ctorPrWriter = ((function (queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"comsole.views/t29531");
});})(queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
;
comsole.views.t29531.prototype.om$core$IRender$ = true;
comsole.views.t29531.prototype.om$core$IRender$render$arity$1 = ((function (queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "page-header"},React.DOM.h3(null,"Queries")),React.DOM.ul(null,cljs.core.into_array.call(null,(function (){var iter__4285__auto__ = ((function (___$1,queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function iter__29537(s__29538){return (new cljs.core.LazySeq(null,((function (___$1,queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function (){var s__29538__$1 = s__29538;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__29538__$1);if(temp__4219__auto__)
{var s__29538__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29538__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__29538__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__29540 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__29539 = (0);while(true){
if((i__29539 < size__4284__auto__))
{var q = cljs.core._nth.call(null,c__4283__auto__,i__29539);cljs.core.chunk_append.call(null,b__29540,(function (){var attrs29536 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(q);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs29536))?sablono.interpreter.attributes.call(null,attrs29536):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29536))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29536)], null))));
})());
{
var G__29544 = (i__29539 + (1));
i__29539 = G__29544;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29540),iter__29537.call(null,cljs.core.chunk_rest.call(null,s__29538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29540),null);
}
} else
{var q = cljs.core.first.call(null,s__29538__$2);return cljs.core.cons.call(null,(function (){var attrs29536 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(q);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs29536))?sablono.interpreter.attributes.call(null,attrs29536):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29536))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29536)], null))));
})(),iter__29537.call(null,cljs.core.rest.call(null,s__29538__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
,null,null));
});})(___$1,queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
;return iter__4285__auto__.call(null,self__.queries);
})())));
});})(queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
;
comsole.views.t29531.prototype.om$core$IDidUpdate$ = true;
comsole.views.t29531.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return cljs.core.println.call(null,"updated queries");
});})(queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
;
comsole.views.t29531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function (_29533){var self__ = this;
var _29533__$1 = this;return self__.meta29532;
});})(queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
;
comsole.views.t29531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function (_29533,meta29532__$1){var self__ = this;
var _29533__$1 = this;return (new comsole.views.t29531(self__.G__29520,self__.queries,self__.data__9003__auto__,self__.input_schema29517,self__.p__29484,self__.output_checker29519,self__.validate__7204__auto__,self__.opts__9004__auto__,self__.map29514,self__.input_checker29518,self__.output_schema29516,self__.vec__29513,self__.owner29482,self__.app,self__.fnk29515,self__.ufv__,meta29532__$1));
});})(queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
;
comsole.views.__GT_t29531 = ((function (queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__){
return (function __GT_t29531(G__29520__$1,queries__$2,data__9003__auto____$1,input_schema29517__$1,p__29484__$1,output_checker29519__$1,validate__7204__auto____$1,opts__9004__auto____$1,map29514__$1,input_checker29518__$1,output_schema29516__$1,vec__29513__$1,owner29482__$1,app__$1,fnk29515__$1,ufv____$1,meta29532){return (new comsole.views.t29531(G__29520__$1,queries__$2,data__9003__auto____$1,input_schema29517__$1,p__29484__$1,output_checker29519__$1,validate__7204__auto____$1,opts__9004__auto____$1,map29514__$1,input_checker29518__$1,output_schema29516__$1,vec__29513__$1,owner29482__$1,app__$1,fnk29515__$1,ufv____$1,meta29532));
});})(queries__$1,app,validate__7204__auto__,ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
;
}
return (new comsole.views.t29531(G__29520,queries__$1,data__9003__auto__,input_schema29517,p__29484,output_checker29519,validate__7204__auto__,opts__9004__auto__,map29514,input_checker29518,output_schema29516,vec__29513,owner29482,app,fnk29515,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___29545 = output_checker29519.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___29545))
{var error__7206__auto___29546 = temp__4219__auto___29545;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29515","fnk29515",1164403132,null),cljs.core.pr_str.call(null,error__7206__auto___29546)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29516,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29546], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv__,output_schema29516,input_schema29517,input_checker29518,output_checker29519,vec__29513,opts__9004__auto__))
,schema.core.make_fn_schema.call(null,output_schema29516,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29517], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9004__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29482,new cljs.core.Keyword(null,"data","data",-232669377),data__9003__auto__], null));
};
var queries = function (data__9003__auto__,owner29482,var_args){
var p__29484 = null;if (arguments.length > 2) {
  p__29484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return queries__delegate.call(this,data__9003__auto__,owner29482,p__29484);};
queries.cljs$lang$maxFixedArity = 2;
queries.cljs$lang$applyTo = (function (arglist__29547){
var data__9003__auto__ = cljs.core.first(arglist__29547);
arglist__29547 = cljs.core.next(arglist__29547);
var owner29482 = cljs.core.first(arglist__29547);
var p__29484 = cljs.core.rest(arglist__29547);
return queries__delegate(data__9003__auto__,owner29482,p__29484);
});
queries.cljs$core$IFn$_invoke$arity$variadic = queries__delegate;
return queries;
})()
;
comsole.views.__GT_queries = (function() {
var __GT_queries = null;
var __GT_queries__1 = (function (cursor__8972__auto__){return om.core.build.call(null,comsole.views.queries,cursor__8972__auto__);
});
var __GT_queries__2 = (function (cursor__8972__auto__,m29483){return om.core.build.call(null,comsole.views.queries,cursor__8972__auto__,m29483);
});
__GT_queries = function(cursor__8972__auto__,m29483){
switch(arguments.length){
case 1:
return __GT_queries__1.call(this,cursor__8972__auto__);
case 2:
return __GT_queries__2.call(this,cursor__8972__auto__,m29483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_queries.cljs$core$IFn$_invoke$arity$1 = __GT_queries__1;
__GT_queries.cljs$core$IFn$_invoke$arity$2 = __GT_queries__2;
return __GT_queries;
})()
;
/**
* @param {...*} var_args
*/
comsole.views.widget = (function() { 
var widget__delegate = function (data__9003__auto__,owner29548,p__29550){var vec__29578 = p__29550;var opts__9004__auto__ = cljs.core.nth.call(null,vec__29578,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29582 = schema.core.Any;var input_schema29583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"control","control",1892578036),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"loading?","loading?",1905707049),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any,new cljs.core.Keyword(null,"nav","nav",719540477),schema.core.Any,new cljs.core.Keyword(null,"docs","docs",-1974280502),schema.core.Any,new cljs.core.Keyword(null,"queries","queries",1446291995),schema.core.Any,new cljs.core.Keyword(null,"page","page",849072397),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29579","map29579",1364680723,null))], null);var input_checker29584 = schema.core.checker.call(null,input_schema29583);var output_checker29585 = schema.core.checker.call(null,output_schema29582);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__){
return (function fnk29581(G__29586){var validate__7204__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___29605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29586], null);var temp__4219__auto___29606 = input_checker29584.call(null,args__7205__auto___29605);if(cljs.core.truth_(temp__4219__auto___29606))
{var error__7206__auto___29607 = temp__4219__auto___29606;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29581","fnk29581",1243080040,null),cljs.core.pr_str.call(null,error__7206__auto___29607)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29583,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___29605,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29607], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var map29579 = G__29586;while(true){
if(cljs.core.map_QMARK_.call(null,map29579))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29579)));
}
var app = plumbing.fnk.schema.safe_get.call(null,map29579,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var page = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var queries = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var docs = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var nav = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var loading_QMARK_ = plumbing.fnk.schema.safe_get.call(null,app,new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29580 = plumbing.fnk.schema.safe_get.call(null,map29579,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var control = plumbing.fnk.schema.safe_get.call(null,map29580,new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));if(typeof comsole.views.t29596 !== 'undefined')
{} else
{
/**
* @constructor
*/
comsole.views.t29596 = (function (query,vec__29578,queries,data__9003__auto__,output_checker29585,nav,data,input_checker29584,owner29548,input_schema29583,fnk29581,validate__7204__auto__,p__29550,loading_QMARK_,docs,G__29586,map29580,output_schema29582,map29579,opts__9004__auto__,page,widget,control,app,ufv__,meta29597){
this.query = query;
this.vec__29578 = vec__29578;
this.queries = queries;
this.data__9003__auto__ = data__9003__auto__;
this.output_checker29585 = output_checker29585;
this.nav = nav;
this.data = data;
this.input_checker29584 = input_checker29584;
this.owner29548 = owner29548;
this.input_schema29583 = input_schema29583;
this.fnk29581 = fnk29581;
this.validate__7204__auto__ = validate__7204__auto__;
this.p__29550 = p__29550;
this.loading_QMARK_ = loading_QMARK_;
this.docs = docs;
this.G__29586 = G__29586;
this.map29580 = map29580;
this.output_schema29582 = output_schema29582;
this.map29579 = map29579;
this.opts__9004__auto__ = opts__9004__auto__;
this.page = page;
this.widget = widget;
this.control = control;
this.app = app;
this.ufv__ = ufv__;
this.meta29597 = meta29597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
comsole.views.t29596.cljs$lang$type = true;
comsole.views.t29596.cljs$lang$ctorStr = "comsole.views/t29596";
comsole.views.t29596.cljs$lang$ctorPrWriter = ((function (control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"comsole.views/t29596");
});})(control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__))
;
comsole.views.t29596.prototype.om$core$IRender$ = true;
comsole.views.t29596.prototype.om$core$IRender$render$arity$1 = ((function (control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,(function (){var attrs29599 = comsole.views.__GT_navbar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),self__.page], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29599))?sablono.interpreter.attributes.call(null,attrs29599):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29599))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29599)], null))));
})(),React.DOM.div({"className": "container-fluid"},(function (){var attrs29600 = comsole.views.__GT_sidebar.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docs","docs",-1974280502),self__.docs,new cljs.core.Keyword(null,"nav","nav",719540477),self__.nav], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29600))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs29600)):{"className": "row"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29600))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs29601 = (function (){var G__29603 = (((self__.page instanceof cljs.core.Keyword))?self__.page.fqn:null);switch (G__29603) {
case "app/docs":
return comsole.views.__GT_docs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"docs","docs",-1974280502),self__.docs], null));

break;
case "app/queries":
return comsole.views.__GT_queries.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queries","queries",1446291995),self__.queries], null));

break;
case "app/builder":
return comsole.views.__GT_builder.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),self__.query,new cljs.core.Keyword(null,"docs","docs",-1974280502),self__.docs,new cljs.core.Keyword(null,"data","data",-232669377),self__.data,new cljs.core.Keyword(null,"loading?","loading?",1905707049),self__.loading_QMARK_], null));

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"404"], null);

}
})();return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29601))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-10","col-xs-offset-2","main"], null)], null),attrs29601)):{"className": "col-xs-10 col-xs-offset-2 main"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29601))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29601)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29600),(function (){var attrs29602 = (function (){var G__29604 = (((self__.page instanceof cljs.core.Keyword))?self__.page.fqn:null);switch (G__29604) {
case "app/docs":
return comsole.views.__GT_docs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"docs","docs",-1974280502),self__.docs], null));

break;
case "app/queries":
return comsole.views.__GT_queries.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queries","queries",1446291995),self__.queries], null));

break;
case "app/builder":
return comsole.views.__GT_builder.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),self__.query,new cljs.core.Keyword(null,"docs","docs",-1974280502),self__.docs,new cljs.core.Keyword(null,"data","data",-232669377),self__.data,new cljs.core.Keyword(null,"loading?","loading?",1905707049),self__.loading_QMARK_], null));

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"404"], null);

}
})();return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29602))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-10","col-xs-offset-2","main"], null)], null),attrs29602)):{"className": "col-xs-10 col-xs-offset-2 main"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29602))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29602)], null))));
})()], null))));
})()));
});})(control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__))
;
comsole.views.t29596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__){
return (function (_29598){var self__ = this;
var _29598__$1 = this;return self__.meta29597;
});})(control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__))
;
comsole.views.t29596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__){
return (function (_29598,meta29597__$1){var self__ = this;
var _29598__$1 = this;return (new comsole.views.t29596(self__.query,self__.vec__29578,self__.queries,self__.data__9003__auto__,self__.output_checker29585,self__.nav,self__.data,self__.input_checker29584,self__.owner29548,self__.input_schema29583,self__.fnk29581,self__.validate__7204__auto__,self__.p__29550,self__.loading_QMARK_,self__.docs,self__.G__29586,self__.map29580,self__.output_schema29582,self__.map29579,self__.opts__9004__auto__,self__.page,self__.widget,self__.control,self__.app,self__.ufv__,meta29597__$1));
});})(control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__))
;
comsole.views.__GT_t29596 = ((function (control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__){
return (function __GT_t29596(query__$1,vec__29578__$1,queries__$1,data__9003__auto____$1,output_checker29585__$1,nav__$1,data__$1,input_checker29584__$1,owner29548__$1,input_schema29583__$1,fnk29581__$1,validate__7204__auto____$1,p__29550__$1,loading_QMARK___$1,docs__$1,G__29586__$1,map29580__$1,output_schema29582__$1,map29579__$1,opts__9004__auto____$1,page__$1,widget__$1,control__$1,app__$1,ufv____$1,meta29597){return (new comsole.views.t29596(query__$1,vec__29578__$1,queries__$1,data__9003__auto____$1,output_checker29585__$1,nav__$1,data__$1,input_checker29584__$1,owner29548__$1,input_schema29583__$1,fnk29581__$1,validate__7204__auto____$1,p__29550__$1,loading_QMARK___$1,docs__$1,G__29586__$1,map29580__$1,output_schema29582__$1,map29579__$1,opts__9004__auto____$1,page__$1,widget__$1,control__$1,app__$1,ufv____$1,meta29597));
});})(control,map29580,loading_QMARK_,query,data,nav,docs,queries,page,app,validate__7204__auto__,ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__))
;
}
return (new comsole.views.t29596(query,vec__29578,queries,data__9003__auto__,output_checker29585,nav,data,input_checker29584,owner29548,input_schema29583,fnk29581,validate__7204__auto__,p__29550,loading_QMARK_,docs,G__29586,map29580,output_schema29582,map29579,opts__9004__auto__,page,widget,control,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___29610 = output_checker29585.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___29610))
{var error__7206__auto___29611 = temp__4219__auto___29610;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk29581","fnk29581",1243080040,null),cljs.core.pr_str.call(null,error__7206__auto___29611)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29582,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___29611], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv__,output_schema29582,input_schema29583,input_checker29584,output_checker29585,vec__29578,opts__9004__auto__))
,schema.core.make_fn_schema.call(null,output_schema29582,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29583], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9004__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29548),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29548,new cljs.core.Keyword(null,"data","data",-232669377),data__9003__auto__], null));
};
var widget = function (data__9003__auto__,owner29548,var_args){
var p__29550 = null;if (arguments.length > 2) {
  p__29550 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return widget__delegate.call(this,data__9003__auto__,owner29548,p__29550);};
widget.cljs$lang$maxFixedArity = 2;
widget.cljs$lang$applyTo = (function (arglist__29612){
var data__9003__auto__ = cljs.core.first(arglist__29612);
arglist__29612 = cljs.core.next(arglist__29612);
var owner29548 = cljs.core.first(arglist__29612);
var p__29550 = cljs.core.rest(arglist__29612);
return widget__delegate(data__9003__auto__,owner29548,p__29550);
});
widget.cljs$core$IFn$_invoke$arity$variadic = widget__delegate;
return widget;
})()
;
comsole.views.__GT_widget = (function() {
var __GT_widget = null;
var __GT_widget__1 = (function (cursor__8972__auto__){return om.core.build.call(null,comsole.views.widget,cursor__8972__auto__);
});
var __GT_widget__2 = (function (cursor__8972__auto__,m29549){return om.core.build.call(null,comsole.views.widget,cursor__8972__auto__,m29549);
});
__GT_widget = function(cursor__8972__auto__,m29549){
switch(arguments.length){
case 1:
return __GT_widget__1.call(this,cursor__8972__auto__);
case 2:
return __GT_widget__2.call(this,cursor__8972__auto__,m29549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget.cljs$core$IFn$_invoke$arity$1 = __GT_widget__1;
__GT_widget.cljs$core$IFn$_invoke$arity$2 = __GT_widget__2;
return __GT_widget;
})()
;

//# sourceMappingURL=views.js.map