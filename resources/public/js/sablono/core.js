// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__47826__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__47825 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__47825,(0),null);var body = cljs.core.nthnext.call(null,vec__47825,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__47826 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47826__delegate.call(this,args);};
G__47826.cljs$lang$maxFixedArity = 0;
G__47826.cljs$lang$applyTo = (function (arglist__47827){
var args = cljs.core.seq(arglist__47827);
return G__47826__delegate(args);
});
G__47826.cljs$core$IFn$_invoke$arity$variadic = G__47826__delegate;
return G__47826;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4285__auto__ = (function iter__47832(s__47833){return (new cljs.core.LazySeq(null,(function (){var s__47833__$1 = s__47833;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__47833__$1);if(temp__4219__auto__)
{var s__47833__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47833__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__47833__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__47835 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__47834 = (0);while(true){
if((i__47834 < size__4284__auto__))
{var args = cljs.core._nth.call(null,c__4283__auto__,i__47834);cljs.core.chunk_append.call(null,b__47835,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__47836 = (i__47834 + (1));
i__47834 = G__47836;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47835),iter__47832.call(null,cljs.core.chunk_rest.call(null,s__47833__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47835),null);
}
} else
{var args = cljs.core.first.call(null,s__47833__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__47832.call(null,cljs.core.rest.call(null,s__47833__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4285__auto__ = (function iter__47841(s__47842){return (new cljs.core.LazySeq(null,(function (){var s__47842__$1 = s__47842;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__47842__$1);if(temp__4219__auto__)
{var s__47842__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47842__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__47842__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__47844 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__47843 = (0);while(true){
if((i__47843 < size__4284__auto__))
{var style = cljs.core._nth.call(null,c__4283__auto__,i__47843);cljs.core.chunk_append.call(null,b__47844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__47845 = (i__47843 + (1));
i__47843 = G__47845;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47844),iter__47841.call(null,cljs.core.chunk_rest.call(null,s__47842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47844),null);
}
} else
{var style = cljs.core.first.call(null,s__47842__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__47841.call(null,cljs.core.rest.call(null,s__47842__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__47846){
var styles = cljs.core.seq(arglist__47846);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to47847 = (function() { 
var link_to47847__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to47847 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to47847__delegate.call(this,url,content);};
link_to47847.cljs$lang$maxFixedArity = 1;
link_to47847.cljs$lang$applyTo = (function (arglist__47848){
var url = cljs.core.first(arglist__47848);
var content = cljs.core.rest(arglist__47848);
return link_to47847__delegate(url,content);
});
link_to47847.cljs$core$IFn$_invoke$arity$variadic = link_to47847__delegate;
return link_to47847;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to47847);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to47849 = (function() { 
var mail_to47849__delegate = function (e_mail,p__47850){var vec__47852 = p__47850;var content = cljs.core.nth.call(null,vec__47852,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3560__auto__ = content;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to47849 = function (e_mail,var_args){
var p__47850 = null;if (arguments.length > 1) {
  p__47850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to47849__delegate.call(this,e_mail,p__47850);};
mail_to47849.cljs$lang$maxFixedArity = 1;
mail_to47849.cljs$lang$applyTo = (function (arglist__47853){
var e_mail = cljs.core.first(arglist__47853);
var p__47850 = cljs.core.rest(arglist__47853);
return mail_to47849__delegate(e_mail,p__47850);
});
mail_to47849.cljs$core$IFn$_invoke$arity$variadic = mail_to47849__delegate;
return mail_to47849;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to47849);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list47854 = (function unordered_list47854(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4285__auto__ = (function iter__47859(s__47860){return (new cljs.core.LazySeq(null,(function (){var s__47860__$1 = s__47860;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__47860__$1);if(temp__4219__auto__)
{var s__47860__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47860__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__47860__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__47862 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__47861 = (0);while(true){
if((i__47861 < size__4284__auto__))
{var x = cljs.core._nth.call(null,c__4283__auto__,i__47861);cljs.core.chunk_append.call(null,b__47862,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__47863 = (i__47861 + (1));
i__47861 = G__47863;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47862),iter__47859.call(null,cljs.core.chunk_rest.call(null,s__47860__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47862),null);
}
} else
{var x = cljs.core.first.call(null,s__47860__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__47859.call(null,cljs.core.rest.call(null,s__47860__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list47854);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list47864 = (function ordered_list47864(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4285__auto__ = (function iter__47869(s__47870){return (new cljs.core.LazySeq(null,(function (){var s__47870__$1 = s__47870;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__47870__$1);if(temp__4219__auto__)
{var s__47870__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47870__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__47870__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__47872 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__47871 = (0);while(true){
if((i__47871 < size__4284__auto__))
{var x = cljs.core._nth.call(null,c__4283__auto__,i__47871);cljs.core.chunk_append.call(null,b__47872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__47873 = (i__47871 + (1));
i__47871 = G__47873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47872),iter__47869.call(null,cljs.core.chunk_rest.call(null,s__47870__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47872),null);
}
} else
{var x = cljs.core.first.call(null,s__47870__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__47869.call(null,cljs.core.rest.call(null,s__47870__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list47864);
/**
* Create an image element.
*/
sablono.core.image47874 = (function() {
var image47874 = null;
var image47874__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image47874__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image47874 = function(src,alt){
switch(arguments.length){
case 1:
return image47874__1.call(this,src);
case 2:
return image47874__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image47874.cljs$core$IFn$_invoke$arity$1 = image47874__1;
image47874.cljs$core$IFn$_invoke$arity$2 = image47874__2;
return image47874;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image47874);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__47875_SHARP_,p2__47876_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47875_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47876_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__47877_SHARP_,p2__47878_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47877_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47878_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field47879 = (function() {
var color_field47879 = null;
var color_field47879__1 = (function (name__6264__auto__){return color_field47879.call(null,name__6264__auto__,null);
});
var color_field47879__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__6264__auto__,value__6265__auto__);
});
color_field47879 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return color_field47879__1.call(this,name__6264__auto__);
case 2:
return color_field47879__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field47879.cljs$core$IFn$_invoke$arity$1 = color_field47879__1;
color_field47879.cljs$core$IFn$_invoke$arity$2 = color_field47879__2;
return color_field47879;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field47879);
/**
* Creates a date input field.
*/
sablono.core.date_field47880 = (function() {
var date_field47880 = null;
var date_field47880__1 = (function (name__6264__auto__){return date_field47880.call(null,name__6264__auto__,null);
});
var date_field47880__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__6264__auto__,value__6265__auto__);
});
date_field47880 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return date_field47880__1.call(this,name__6264__auto__);
case 2:
return date_field47880__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field47880.cljs$core$IFn$_invoke$arity$1 = date_field47880__1;
date_field47880.cljs$core$IFn$_invoke$arity$2 = date_field47880__2;
return date_field47880;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field47880);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field47881 = (function() {
var datetime_field47881 = null;
var datetime_field47881__1 = (function (name__6264__auto__){return datetime_field47881.call(null,name__6264__auto__,null);
});
var datetime_field47881__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__6264__auto__,value__6265__auto__);
});
datetime_field47881 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return datetime_field47881__1.call(this,name__6264__auto__);
case 2:
return datetime_field47881__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field47881.cljs$core$IFn$_invoke$arity$1 = datetime_field47881__1;
datetime_field47881.cljs$core$IFn$_invoke$arity$2 = datetime_field47881__2;
return datetime_field47881;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field47881);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field47882 = (function() {
var datetime_local_field47882 = null;
var datetime_local_field47882__1 = (function (name__6264__auto__){return datetime_local_field47882.call(null,name__6264__auto__,null);
});
var datetime_local_field47882__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__6264__auto__,value__6265__auto__);
});
datetime_local_field47882 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return datetime_local_field47882__1.call(this,name__6264__auto__);
case 2:
return datetime_local_field47882__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field47882.cljs$core$IFn$_invoke$arity$1 = datetime_local_field47882__1;
datetime_local_field47882.cljs$core$IFn$_invoke$arity$2 = datetime_local_field47882__2;
return datetime_local_field47882;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field47882);
/**
* Creates a email input field.
*/
sablono.core.email_field47883 = (function() {
var email_field47883 = null;
var email_field47883__1 = (function (name__6264__auto__){return email_field47883.call(null,name__6264__auto__,null);
});
var email_field47883__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__6264__auto__,value__6265__auto__);
});
email_field47883 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return email_field47883__1.call(this,name__6264__auto__);
case 2:
return email_field47883__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field47883.cljs$core$IFn$_invoke$arity$1 = email_field47883__1;
email_field47883.cljs$core$IFn$_invoke$arity$2 = email_field47883__2;
return email_field47883;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field47883);
/**
* Creates a file input field.
*/
sablono.core.file_field47884 = (function() {
var file_field47884 = null;
var file_field47884__1 = (function (name__6264__auto__){return file_field47884.call(null,name__6264__auto__,null);
});
var file_field47884__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__6264__auto__,value__6265__auto__);
});
file_field47884 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return file_field47884__1.call(this,name__6264__auto__);
case 2:
return file_field47884__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field47884.cljs$core$IFn$_invoke$arity$1 = file_field47884__1;
file_field47884.cljs$core$IFn$_invoke$arity$2 = file_field47884__2;
return file_field47884;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field47884);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field47885 = (function() {
var hidden_field47885 = null;
var hidden_field47885__1 = (function (name__6264__auto__){return hidden_field47885.call(null,name__6264__auto__,null);
});
var hidden_field47885__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__6264__auto__,value__6265__auto__);
});
hidden_field47885 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return hidden_field47885__1.call(this,name__6264__auto__);
case 2:
return hidden_field47885__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field47885.cljs$core$IFn$_invoke$arity$1 = hidden_field47885__1;
hidden_field47885.cljs$core$IFn$_invoke$arity$2 = hidden_field47885__2;
return hidden_field47885;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field47885);
/**
* Creates a month input field.
*/
sablono.core.month_field47886 = (function() {
var month_field47886 = null;
var month_field47886__1 = (function (name__6264__auto__){return month_field47886.call(null,name__6264__auto__,null);
});
var month_field47886__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__6264__auto__,value__6265__auto__);
});
month_field47886 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return month_field47886__1.call(this,name__6264__auto__);
case 2:
return month_field47886__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field47886.cljs$core$IFn$_invoke$arity$1 = month_field47886__1;
month_field47886.cljs$core$IFn$_invoke$arity$2 = month_field47886__2;
return month_field47886;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field47886);
/**
* Creates a number input field.
*/
sablono.core.number_field47887 = (function() {
var number_field47887 = null;
var number_field47887__1 = (function (name__6264__auto__){return number_field47887.call(null,name__6264__auto__,null);
});
var number_field47887__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__6264__auto__,value__6265__auto__);
});
number_field47887 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return number_field47887__1.call(this,name__6264__auto__);
case 2:
return number_field47887__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field47887.cljs$core$IFn$_invoke$arity$1 = number_field47887__1;
number_field47887.cljs$core$IFn$_invoke$arity$2 = number_field47887__2;
return number_field47887;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field47887);
/**
* Creates a password input field.
*/
sablono.core.password_field47888 = (function() {
var password_field47888 = null;
var password_field47888__1 = (function (name__6264__auto__){return password_field47888.call(null,name__6264__auto__,null);
});
var password_field47888__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__6264__auto__,value__6265__auto__);
});
password_field47888 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return password_field47888__1.call(this,name__6264__auto__);
case 2:
return password_field47888__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field47888.cljs$core$IFn$_invoke$arity$1 = password_field47888__1;
password_field47888.cljs$core$IFn$_invoke$arity$2 = password_field47888__2;
return password_field47888;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field47888);
/**
* Creates a range input field.
*/
sablono.core.range_field47889 = (function() {
var range_field47889 = null;
var range_field47889__1 = (function (name__6264__auto__){return range_field47889.call(null,name__6264__auto__,null);
});
var range_field47889__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__6264__auto__,value__6265__auto__);
});
range_field47889 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return range_field47889__1.call(this,name__6264__auto__);
case 2:
return range_field47889__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field47889.cljs$core$IFn$_invoke$arity$1 = range_field47889__1;
range_field47889.cljs$core$IFn$_invoke$arity$2 = range_field47889__2;
return range_field47889;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field47889);
/**
* Creates a search input field.
*/
sablono.core.search_field47890 = (function() {
var search_field47890 = null;
var search_field47890__1 = (function (name__6264__auto__){return search_field47890.call(null,name__6264__auto__,null);
});
var search_field47890__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__6264__auto__,value__6265__auto__);
});
search_field47890 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return search_field47890__1.call(this,name__6264__auto__);
case 2:
return search_field47890__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field47890.cljs$core$IFn$_invoke$arity$1 = search_field47890__1;
search_field47890.cljs$core$IFn$_invoke$arity$2 = search_field47890__2;
return search_field47890;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field47890);
/**
* Creates a tel input field.
*/
sablono.core.tel_field47891 = (function() {
var tel_field47891 = null;
var tel_field47891__1 = (function (name__6264__auto__){return tel_field47891.call(null,name__6264__auto__,null);
});
var tel_field47891__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__6264__auto__,value__6265__auto__);
});
tel_field47891 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return tel_field47891__1.call(this,name__6264__auto__);
case 2:
return tel_field47891__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field47891.cljs$core$IFn$_invoke$arity$1 = tel_field47891__1;
tel_field47891.cljs$core$IFn$_invoke$arity$2 = tel_field47891__2;
return tel_field47891;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field47891);
/**
* Creates a text input field.
*/
sablono.core.text_field47892 = (function() {
var text_field47892 = null;
var text_field47892__1 = (function (name__6264__auto__){return text_field47892.call(null,name__6264__auto__,null);
});
var text_field47892__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__6264__auto__,value__6265__auto__);
});
text_field47892 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return text_field47892__1.call(this,name__6264__auto__);
case 2:
return text_field47892__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field47892.cljs$core$IFn$_invoke$arity$1 = text_field47892__1;
text_field47892.cljs$core$IFn$_invoke$arity$2 = text_field47892__2;
return text_field47892;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field47892);
/**
* Creates a time input field.
*/
sablono.core.time_field47893 = (function() {
var time_field47893 = null;
var time_field47893__1 = (function (name__6264__auto__){return time_field47893.call(null,name__6264__auto__,null);
});
var time_field47893__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__6264__auto__,value__6265__auto__);
});
time_field47893 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return time_field47893__1.call(this,name__6264__auto__);
case 2:
return time_field47893__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field47893.cljs$core$IFn$_invoke$arity$1 = time_field47893__1;
time_field47893.cljs$core$IFn$_invoke$arity$2 = time_field47893__2;
return time_field47893;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field47893);
/**
* Creates a url input field.
*/
sablono.core.url_field47894 = (function() {
var url_field47894 = null;
var url_field47894__1 = (function (name__6264__auto__){return url_field47894.call(null,name__6264__auto__,null);
});
var url_field47894__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__6264__auto__,value__6265__auto__);
});
url_field47894 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return url_field47894__1.call(this,name__6264__auto__);
case 2:
return url_field47894__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field47894.cljs$core$IFn$_invoke$arity$1 = url_field47894__1;
url_field47894.cljs$core$IFn$_invoke$arity$2 = url_field47894__2;
return url_field47894;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field47894);
/**
* Creates a week input field.
*/
sablono.core.week_field47895 = (function() {
var week_field47895 = null;
var week_field47895__1 = (function (name__6264__auto__){return week_field47895.call(null,name__6264__auto__,null);
});
var week_field47895__2 = (function (name__6264__auto__,value__6265__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__6264__auto__,value__6265__auto__);
});
week_field47895 = function(name__6264__auto__,value__6265__auto__){
switch(arguments.length){
case 1:
return week_field47895__1.call(this,name__6264__auto__);
case 2:
return week_field47895__2.call(this,name__6264__auto__,value__6265__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field47895.cljs$core$IFn$_invoke$arity$1 = week_field47895__1;
week_field47895.cljs$core$IFn$_invoke$arity$2 = week_field47895__2;
return week_field47895;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field47895);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box47896 = (function() {
var check_box47896 = null;
var check_box47896__1 = (function (name){return check_box47896.call(null,name,null);
});
var check_box47896__2 = (function (name,checked_QMARK_){return check_box47896.call(null,name,checked_QMARK_,"true");
});
var check_box47896__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box47896 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box47896__1.call(this,name);
case 2:
return check_box47896__2.call(this,name,checked_QMARK_);
case 3:
return check_box47896__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box47896.cljs$core$IFn$_invoke$arity$1 = check_box47896__1;
check_box47896.cljs$core$IFn$_invoke$arity$2 = check_box47896__2;
check_box47896.cljs$core$IFn$_invoke$arity$3 = check_box47896__3;
return check_box47896;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box47896);
/**
* Creates a radio button.
*/
sablono.core.radio_button47897 = (function() {
var radio_button47897 = null;
var radio_button47897__1 = (function (group){return radio_button47897.call(null,group,null);
});
var radio_button47897__2 = (function (group,checked_QMARK_){return radio_button47897.call(null,group,checked_QMARK_,"true");
});
var radio_button47897__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button47897 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button47897__1.call(this,group);
case 2:
return radio_button47897__2.call(this,group,checked_QMARK_);
case 3:
return radio_button47897__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button47897.cljs$core$IFn$_invoke$arity$1 = radio_button47897__1;
radio_button47897.cljs$core$IFn$_invoke$arity$2 = radio_button47897__2;
radio_button47897.cljs$core$IFn$_invoke$arity$3 = radio_button47897__3;
return radio_button47897;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button47897);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options47898 = (function() {
var select_options47898 = null;
var select_options47898__1 = (function (coll){return select_options47898.call(null,coll,null);
});
var select_options47898__2 = (function (coll,selected){var iter__4285__auto__ = (function iter__47907(s__47908){return (new cljs.core.LazySeq(null,(function (){var s__47908__$1 = s__47908;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__47908__$1);if(temp__4219__auto__)
{var s__47908__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47908__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__47908__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__47910 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__47909 = (0);while(true){
if((i__47909 < size__4284__auto__))
{var x = cljs.core._nth.call(null,c__4283__auto__,i__47909);cljs.core.chunk_append.call(null,b__47910,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__47913 = x;var text = cljs.core.nth.call(null,vec__47913,(0),null);var val = cljs.core.nth.call(null,vec__47913,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__47913,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options47898.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__47915 = (i__47909 + (1));
i__47909 = G__47915;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47910),iter__47907.call(null,cljs.core.chunk_rest.call(null,s__47908__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47910),null);
}
} else
{var x = cljs.core.first.call(null,s__47908__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__47914 = x;var text = cljs.core.nth.call(null,vec__47914,(0),null);var val = cljs.core.nth.call(null,vec__47914,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__47914,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options47898.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__47907.call(null,cljs.core.rest.call(null,s__47908__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,coll);
});
select_options47898 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options47898__1.call(this,coll);
case 2:
return select_options47898__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options47898.cljs$core$IFn$_invoke$arity$1 = select_options47898__1;
select_options47898.cljs$core$IFn$_invoke$arity$2 = select_options47898__2;
return select_options47898;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options47898);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down47916 = (function() {
var drop_down47916 = null;
var drop_down47916__2 = (function (name,options){return drop_down47916.call(null,name,options,null);
});
var drop_down47916__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down47916 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down47916__2.call(this,name,options);
case 3:
return drop_down47916__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down47916.cljs$core$IFn$_invoke$arity$2 = drop_down47916__2;
drop_down47916.cljs$core$IFn$_invoke$arity$3 = drop_down47916__3;
return drop_down47916;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down47916);
/**
* Creates a text area element.
*/
sablono.core.text_area47917 = (function() {
var text_area47917 = null;
var text_area47917__1 = (function (name){return text_area47917.call(null,name,null);
});
var text_area47917__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area47917 = function(name,value){
switch(arguments.length){
case 1:
return text_area47917__1.call(this,name);
case 2:
return text_area47917__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area47917.cljs$core$IFn$_invoke$arity$1 = text_area47917__1;
text_area47917.cljs$core$IFn$_invoke$arity$2 = text_area47917__2;
return text_area47917;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area47917);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label47918 = (function label47918(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label47918);
/**
* Creates a submit button.
*/
sablono.core.submit_button47919 = (function submit_button47919(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button47919);
/**
* Creates a form reset button.
*/
sablono.core.reset_button47920 = (function reset_button47920(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button47920);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to47921 = (function() { 
var form_to47921__delegate = function (p__47922,body){var vec__47924 = p__47922;var method = cljs.core.nth.call(null,vec__47924,(0),null);var action = cljs.core.nth.call(null,vec__47924,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to47921 = function (p__47922,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to47921__delegate.call(this,p__47922,body);};
form_to47921.cljs$lang$maxFixedArity = 1;
form_to47921.cljs$lang$applyTo = (function (arglist__47925){
var p__47922 = cljs.core.first(arglist__47925);
var body = cljs.core.rest(arglist__47925);
return form_to47921__delegate(p__47922,body);
});
form_to47921.cljs$core$IFn$_invoke$arity$variadic = form_to47921__delegate;
return form_to47921;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to47921);

//# sourceMappingURL=core.js.map