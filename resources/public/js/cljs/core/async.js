// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t44628 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44628 = (function (f,fn_handler,meta44629){
this.f = f;
this.fn_handler = fn_handler;
this.meta44629 = meta44629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44628.cljs$lang$type = true;
cljs.core.async.t44628.cljs$lang$ctorStr = "cljs.core.async/t44628";
cljs.core.async.t44628.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t44628");
});
cljs.core.async.t44628.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t44628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t44628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44630){var self__ = this;
var _44630__$1 = this;return self__.meta44629;
});
cljs.core.async.t44628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44630,meta44629__$1){var self__ = this;
var _44630__$1 = this;return (new cljs.core.async.t44628(self__.f,self__.fn_handler,meta44629__$1));
});
cljs.core.async.__GT_t44628 = (function __GT_t44628(f__$1,fn_handler__$1,meta44629){return (new cljs.core.async.t44628(f__$1,fn_handler__$1,meta44629));
});
}
return (new cljs.core.async.t44628(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__44632 = buff;if(G__44632)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__44632.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__44632.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__44632);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__44632);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_44633 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_44633);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_44633,ret){
return (function (){return fn1.call(null,val_44633);
});})(val_44633,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4217__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4217__auto__))
{var ret = temp__4217__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4217__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4217__auto__))
{var retb = temp__4217__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4217__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4217__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___44634 = n;var x_44635 = (0);while(true){
if((x_44635 < n__4416__auto___44634))
{(a[x_44635] = (0));
{
var G__44636 = (x_44635 + (1));
x_44635 = G__44636;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__44637 = (i + (1));
i = G__44637;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t44641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44641 = (function (flag,alt_flag,meta44642){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta44642 = meta44642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44641.cljs$lang$type = true;
cljs.core.async.t44641.cljs$lang$ctorStr = "cljs.core.async/t44641";
cljs.core.async.t44641.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t44641");
});})(flag))
;
cljs.core.async.t44641.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t44641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t44641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44643){var self__ = this;
var _44643__$1 = this;return self__.meta44642;
});})(flag))
;
cljs.core.async.t44641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44643,meta44642__$1){var self__ = this;
var _44643__$1 = this;return (new cljs.core.async.t44641(self__.flag,self__.alt_flag,meta44642__$1));
});})(flag))
;
cljs.core.async.__GT_t44641 = ((function (flag){
return (function __GT_t44641(flag__$1,alt_flag__$1,meta44642){return (new cljs.core.async.t44641(flag__$1,alt_flag__$1,meta44642));
});})(flag))
;
}
return (new cljs.core.async.t44641(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t44647 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44647 = (function (cb,flag,alt_handler,meta44648){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta44648 = meta44648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44647.cljs$lang$type = true;
cljs.core.async.t44647.cljs$lang$ctorStr = "cljs.core.async/t44647";
cljs.core.async.t44647.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t44647");
});
cljs.core.async.t44647.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t44647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t44647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44649){var self__ = this;
var _44649__$1 = this;return self__.meta44648;
});
cljs.core.async.t44647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44649,meta44648__$1){var self__ = this;
var _44649__$1 = this;return (new cljs.core.async.t44647(self__.cb,self__.flag,self__.alt_handler,meta44648__$1));
});
cljs.core.async.__GT_t44647 = (function __GT_t44647(cb__$1,flag__$1,alt_handler__$1,meta44648){return (new cljs.core.async.t44647(cb__$1,flag__$1,alt_handler__$1,meta44648));
});
}
return (new cljs.core.async.t44647(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44650_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44650_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44651_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44651_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3560__auto__ = wport;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__44652 = (i + (1));
i = G__44652;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3560__auto__ = ret;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4219__auto__ = (function (){var and__3548__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3548__auto__;
}
})();if(cljs.core.truth_(temp__4219__auto__))
{var got = temp__4219__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__44653){var map__44655 = p__44653;var map__44655__$1 = ((cljs.core.seq_QMARK_.call(null,map__44655))?cljs.core.apply.call(null,cljs.core.hash_map,map__44655):map__44655);var opts = map__44655__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__44653 = null;if (arguments.length > 1) {
  p__44653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__44653);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__44656){
var ports = cljs.core.first(arglist__44656);
var p__44653 = cljs.core.rest(arglist__44656);
return alts_BANG___delegate(ports,p__44653);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10238__auto___44751 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___44751){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___44751){
return (function (state_44727){var state_val_44728 = (state_44727[(1)]);if((state_val_44728 === (7)))
{var inst_44723 = (state_44727[(2)]);var state_44727__$1 = state_44727;var statearr_44729_44752 = state_44727__$1;(statearr_44729_44752[(2)] = inst_44723);
(statearr_44729_44752[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (1)))
{var state_44727__$1 = state_44727;var statearr_44730_44753 = state_44727__$1;(statearr_44730_44753[(2)] = null);
(statearr_44730_44753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (4)))
{var inst_44706 = (state_44727[(7)]);var inst_44706__$1 = (state_44727[(2)]);var inst_44707 = (inst_44706__$1 == null);var state_44727__$1 = (function (){var statearr_44731 = state_44727;(statearr_44731[(7)] = inst_44706__$1);
return statearr_44731;
})();if(cljs.core.truth_(inst_44707))
{var statearr_44732_44754 = state_44727__$1;(statearr_44732_44754[(1)] = (5));
} else
{var statearr_44733_44755 = state_44727__$1;(statearr_44733_44755[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (13)))
{var state_44727__$1 = state_44727;var statearr_44734_44756 = state_44727__$1;(statearr_44734_44756[(2)] = null);
(statearr_44734_44756[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (6)))
{var inst_44706 = (state_44727[(7)]);var state_44727__$1 = state_44727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44727__$1,(11),to,inst_44706);
} else
{if((state_val_44728 === (3)))
{var inst_44725 = (state_44727[(2)]);var state_44727__$1 = state_44727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44727__$1,inst_44725);
} else
{if((state_val_44728 === (12)))
{var state_44727__$1 = state_44727;var statearr_44735_44757 = state_44727__$1;(statearr_44735_44757[(2)] = null);
(statearr_44735_44757[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (2)))
{var state_44727__$1 = state_44727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44727__$1,(4),from);
} else
{if((state_val_44728 === (11)))
{var inst_44716 = (state_44727[(2)]);var state_44727__$1 = state_44727;if(cljs.core.truth_(inst_44716))
{var statearr_44736_44758 = state_44727__$1;(statearr_44736_44758[(1)] = (12));
} else
{var statearr_44737_44759 = state_44727__$1;(statearr_44737_44759[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (9)))
{var state_44727__$1 = state_44727;var statearr_44738_44760 = state_44727__$1;(statearr_44738_44760[(2)] = null);
(statearr_44738_44760[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (5)))
{var state_44727__$1 = state_44727;if(cljs.core.truth_(close_QMARK_))
{var statearr_44739_44761 = state_44727__$1;(statearr_44739_44761[(1)] = (8));
} else
{var statearr_44740_44762 = state_44727__$1;(statearr_44740_44762[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (14)))
{var inst_44721 = (state_44727[(2)]);var state_44727__$1 = state_44727;var statearr_44741_44763 = state_44727__$1;(statearr_44741_44763[(2)] = inst_44721);
(statearr_44741_44763[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (10)))
{var inst_44713 = (state_44727[(2)]);var state_44727__$1 = state_44727;var statearr_44742_44764 = state_44727__$1;(statearr_44742_44764[(2)] = inst_44713);
(statearr_44742_44764[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44728 === (8)))
{var inst_44710 = cljs.core.async.close_BANG_.call(null,to);var state_44727__$1 = state_44727;var statearr_44743_44765 = state_44727__$1;(statearr_44743_44765[(2)] = inst_44710);
(statearr_44743_44765[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___44751))
;return ((function (switch__10223__auto__,c__10238__auto___44751){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_44747 = [null,null,null,null,null,null,null,null];(statearr_44747[(0)] = state_machine__10224__auto__);
(statearr_44747[(1)] = (1));
return statearr_44747;
});
var state_machine__10224__auto____1 = (function (state_44727){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_44727);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e44748){if((e44748 instanceof Object))
{var ex__10227__auto__ = e44748;var statearr_44749_44766 = state_44727;(statearr_44749_44766[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44727);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44748;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44767 = state_44727;
state_44727 = G__44767;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_44727){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_44727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___44751))
})();var state__10240__auto__ = (function (){var statearr_44750 = f__10239__auto__.call(null);(statearr_44750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___44751);
return statearr_44750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___44751))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__44951){var vec__44952 = p__44951;var v = cljs.core.nth.call(null,vec__44952,(0),null);var p = cljs.core.nth.call(null,vec__44952,(1),null);var job = vec__44952;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__10238__auto___45134 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___45134,res,vec__44952,v,p,job,jobs,results){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___45134,res,vec__44952,v,p,job,jobs,results){
return (function (state_44957){var state_val_44958 = (state_44957[(1)]);if((state_val_44958 === (2)))
{var inst_44954 = (state_44957[(2)]);var inst_44955 = cljs.core.async.close_BANG_.call(null,res);var state_44957__$1 = (function (){var statearr_44959 = state_44957;(statearr_44959[(7)] = inst_44954);
return statearr_44959;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44957__$1,inst_44955);
} else
{if((state_val_44958 === (1)))
{var state_44957__$1 = state_44957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44957__$1,(2),res,v);
} else
{return null;
}
}
});})(c__10238__auto___45134,res,vec__44952,v,p,job,jobs,results))
;return ((function (switch__10223__auto__,c__10238__auto___45134,res,vec__44952,v,p,job,jobs,results){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_44963 = [null,null,null,null,null,null,null,null];(statearr_44963[(0)] = state_machine__10224__auto__);
(statearr_44963[(1)] = (1));
return statearr_44963;
});
var state_machine__10224__auto____1 = (function (state_44957){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_44957);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e44964){if((e44964 instanceof Object))
{var ex__10227__auto__ = e44964;var statearr_44965_45135 = state_44957;(statearr_44965_45135[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44964;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45136 = state_44957;
state_44957 = G__45136;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_44957){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_44957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___45134,res,vec__44952,v,p,job,jobs,results))
})();var state__10240__auto__ = (function (){var statearr_44966 = f__10239__auto__.call(null);(statearr_44966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___45134);
return statearr_44966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___45134,res,vec__44952,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__44967){var vec__44968 = p__44967;var v = cljs.core.nth.call(null,vec__44968,(0),null);var p = cljs.core.nth.call(null,vec__44968,(1),null);var job = vec__44968;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4416__auto___45137 = n;var __45138 = (0);while(true){
if((__45138 < n__4416__auto___45137))
{var G__44969_45139 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__44969_45139) {
case "async":
var c__10238__auto___45141 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__45138,c__10238__auto___45141,G__44969_45139,n__4416__auto___45137,jobs,results,process,async){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (__45138,c__10238__auto___45141,G__44969_45139,n__4416__auto___45137,jobs,results,process,async){
return (function (state_44982){var state_val_44983 = (state_44982[(1)]);if((state_val_44983 === (7)))
{var inst_44978 = (state_44982[(2)]);var state_44982__$1 = state_44982;var statearr_44984_45142 = state_44982__$1;(statearr_44984_45142[(2)] = inst_44978);
(statearr_44984_45142[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44983 === (6)))
{var state_44982__$1 = state_44982;var statearr_44985_45143 = state_44982__$1;(statearr_44985_45143[(2)] = null);
(statearr_44985_45143[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44983 === (5)))
{var state_44982__$1 = state_44982;var statearr_44986_45144 = state_44982__$1;(statearr_44986_45144[(2)] = null);
(statearr_44986_45144[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44983 === (4)))
{var inst_44972 = (state_44982[(2)]);var inst_44973 = async.call(null,inst_44972);var state_44982__$1 = state_44982;if(cljs.core.truth_(inst_44973))
{var statearr_44987_45145 = state_44982__$1;(statearr_44987_45145[(1)] = (5));
} else
{var statearr_44988_45146 = state_44982__$1;(statearr_44988_45146[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44983 === (3)))
{var inst_44980 = (state_44982[(2)]);var state_44982__$1 = state_44982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44982__$1,inst_44980);
} else
{if((state_val_44983 === (2)))
{var state_44982__$1 = state_44982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44982__$1,(4),jobs);
} else
{if((state_val_44983 === (1)))
{var state_44982__$1 = state_44982;var statearr_44989_45147 = state_44982__$1;(statearr_44989_45147[(2)] = null);
(statearr_44989_45147[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__45138,c__10238__auto___45141,G__44969_45139,n__4416__auto___45137,jobs,results,process,async))
;return ((function (__45138,switch__10223__auto__,c__10238__auto___45141,G__44969_45139,n__4416__auto___45137,jobs,results,process,async){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_44993 = [null,null,null,null,null,null,null];(statearr_44993[(0)] = state_machine__10224__auto__);
(statearr_44993[(1)] = (1));
return statearr_44993;
});
var state_machine__10224__auto____1 = (function (state_44982){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_44982);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e44994){if((e44994 instanceof Object))
{var ex__10227__auto__ = e44994;var statearr_44995_45148 = state_44982;(statearr_44995_45148[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44994;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45149 = state_44982;
state_44982 = G__45149;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_44982){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_44982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(__45138,switch__10223__auto__,c__10238__auto___45141,G__44969_45139,n__4416__auto___45137,jobs,results,process,async))
})();var state__10240__auto__ = (function (){var statearr_44996 = f__10239__auto__.call(null);(statearr_44996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___45141);
return statearr_44996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(__45138,c__10238__auto___45141,G__44969_45139,n__4416__auto___45137,jobs,results,process,async))
);

break;
case "compute":
var c__10238__auto___45150 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__45138,c__10238__auto___45150,G__44969_45139,n__4416__auto___45137,jobs,results,process,async){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (__45138,c__10238__auto___45150,G__44969_45139,n__4416__auto___45137,jobs,results,process,async){
return (function (state_45009){var state_val_45010 = (state_45009[(1)]);if((state_val_45010 === (7)))
{var inst_45005 = (state_45009[(2)]);var state_45009__$1 = state_45009;var statearr_45011_45151 = state_45009__$1;(statearr_45011_45151[(2)] = inst_45005);
(statearr_45011_45151[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45010 === (6)))
{var state_45009__$1 = state_45009;var statearr_45012_45152 = state_45009__$1;(statearr_45012_45152[(2)] = null);
(statearr_45012_45152[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45010 === (5)))
{var state_45009__$1 = state_45009;var statearr_45013_45153 = state_45009__$1;(statearr_45013_45153[(2)] = null);
(statearr_45013_45153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45010 === (4)))
{var inst_44999 = (state_45009[(2)]);var inst_45000 = process.call(null,inst_44999);var state_45009__$1 = state_45009;if(cljs.core.truth_(inst_45000))
{var statearr_45014_45154 = state_45009__$1;(statearr_45014_45154[(1)] = (5));
} else
{var statearr_45015_45155 = state_45009__$1;(statearr_45015_45155[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45010 === (3)))
{var inst_45007 = (state_45009[(2)]);var state_45009__$1 = state_45009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45009__$1,inst_45007);
} else
{if((state_val_45010 === (2)))
{var state_45009__$1 = state_45009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45009__$1,(4),jobs);
} else
{if((state_val_45010 === (1)))
{var state_45009__$1 = state_45009;var statearr_45016_45156 = state_45009__$1;(statearr_45016_45156[(2)] = null);
(statearr_45016_45156[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__45138,c__10238__auto___45150,G__44969_45139,n__4416__auto___45137,jobs,results,process,async))
;return ((function (__45138,switch__10223__auto__,c__10238__auto___45150,G__44969_45139,n__4416__auto___45137,jobs,results,process,async){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_45020 = [null,null,null,null,null,null,null];(statearr_45020[(0)] = state_machine__10224__auto__);
(statearr_45020[(1)] = (1));
return statearr_45020;
});
var state_machine__10224__auto____1 = (function (state_45009){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_45009);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e45021){if((e45021 instanceof Object))
{var ex__10227__auto__ = e45021;var statearr_45022_45157 = state_45009;(statearr_45022_45157[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45021;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45158 = state_45009;
state_45009 = G__45158;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_45009){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_45009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(__45138,switch__10223__auto__,c__10238__auto___45150,G__44969_45139,n__4416__auto___45137,jobs,results,process,async))
})();var state__10240__auto__ = (function (){var statearr_45023 = f__10239__auto__.call(null);(statearr_45023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___45150);
return statearr_45023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(__45138,c__10238__auto___45150,G__44969_45139,n__4416__auto___45137,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__45159 = (__45138 + (1));
__45138 = G__45159;
continue;
}
} else
{}
break;
}
var c__10238__auto___45160 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___45160,jobs,results,process,async){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___45160,jobs,results,process,async){
return (function (state_45045){var state_val_45046 = (state_45045[(1)]);if((state_val_45046 === (9)))
{var inst_45038 = (state_45045[(2)]);var state_45045__$1 = (function (){var statearr_45047 = state_45045;(statearr_45047[(7)] = inst_45038);
return statearr_45047;
})();var statearr_45048_45161 = state_45045__$1;(statearr_45048_45161[(2)] = null);
(statearr_45048_45161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45046 === (8)))
{var inst_45031 = (state_45045[(8)]);var inst_45036 = (state_45045[(2)]);var state_45045__$1 = (function (){var statearr_45049 = state_45045;(statearr_45049[(9)] = inst_45036);
return statearr_45049;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45045__$1,(9),results,inst_45031);
} else
{if((state_val_45046 === (7)))
{var inst_45041 = (state_45045[(2)]);var state_45045__$1 = state_45045;var statearr_45050_45162 = state_45045__$1;(statearr_45050_45162[(2)] = inst_45041);
(statearr_45050_45162[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45046 === (6)))
{var inst_45031 = (state_45045[(8)]);var inst_45026 = (state_45045[(10)]);var inst_45031__$1 = cljs.core.async.chan.call(null,(1));var inst_45032 = cljs.core.PersistentVector.EMPTY_NODE;var inst_45033 = [inst_45026,inst_45031__$1];var inst_45034 = (new cljs.core.PersistentVector(null,2,(5),inst_45032,inst_45033,null));var state_45045__$1 = (function (){var statearr_45051 = state_45045;(statearr_45051[(8)] = inst_45031__$1);
return statearr_45051;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45045__$1,(8),jobs,inst_45034);
} else
{if((state_val_45046 === (5)))
{var inst_45029 = cljs.core.async.close_BANG_.call(null,jobs);var state_45045__$1 = state_45045;var statearr_45052_45163 = state_45045__$1;(statearr_45052_45163[(2)] = inst_45029);
(statearr_45052_45163[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45046 === (4)))
{var inst_45026 = (state_45045[(10)]);var inst_45026__$1 = (state_45045[(2)]);var inst_45027 = (inst_45026__$1 == null);var state_45045__$1 = (function (){var statearr_45053 = state_45045;(statearr_45053[(10)] = inst_45026__$1);
return statearr_45053;
})();if(cljs.core.truth_(inst_45027))
{var statearr_45054_45164 = state_45045__$1;(statearr_45054_45164[(1)] = (5));
} else
{var statearr_45055_45165 = state_45045__$1;(statearr_45055_45165[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45046 === (3)))
{var inst_45043 = (state_45045[(2)]);var state_45045__$1 = state_45045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45045__$1,inst_45043);
} else
{if((state_val_45046 === (2)))
{var state_45045__$1 = state_45045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45045__$1,(4),from);
} else
{if((state_val_45046 === (1)))
{var state_45045__$1 = state_45045;var statearr_45056_45166 = state_45045__$1;(statearr_45056_45166[(2)] = null);
(statearr_45056_45166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___45160,jobs,results,process,async))
;return ((function (switch__10223__auto__,c__10238__auto___45160,jobs,results,process,async){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_45060 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_45060[(0)] = state_machine__10224__auto__);
(statearr_45060[(1)] = (1));
return statearr_45060;
});
var state_machine__10224__auto____1 = (function (state_45045){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_45045);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e45061){if((e45061 instanceof Object))
{var ex__10227__auto__ = e45061;var statearr_45062_45167 = state_45045;(statearr_45062_45167[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45045);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45061;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45168 = state_45045;
state_45045 = G__45168;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_45045){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_45045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___45160,jobs,results,process,async))
})();var state__10240__auto__ = (function (){var statearr_45063 = f__10239__auto__.call(null);(statearr_45063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___45160);
return statearr_45063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___45160,jobs,results,process,async))
);
var c__10238__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto__,jobs,results,process,async){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto__,jobs,results,process,async){
return (function (state_45101){var state_val_45102 = (state_45101[(1)]);if((state_val_45102 === (7)))
{var inst_45097 = (state_45101[(2)]);var state_45101__$1 = state_45101;var statearr_45103_45169 = state_45101__$1;(statearr_45103_45169[(2)] = inst_45097);
(statearr_45103_45169[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (20)))
{var state_45101__$1 = state_45101;var statearr_45104_45170 = state_45101__$1;(statearr_45104_45170[(2)] = null);
(statearr_45104_45170[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (1)))
{var state_45101__$1 = state_45101;var statearr_45105_45171 = state_45101__$1;(statearr_45105_45171[(2)] = null);
(statearr_45105_45171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (4)))
{var inst_45066 = (state_45101[(7)]);var inst_45066__$1 = (state_45101[(2)]);var inst_45067 = (inst_45066__$1 == null);var state_45101__$1 = (function (){var statearr_45106 = state_45101;(statearr_45106[(7)] = inst_45066__$1);
return statearr_45106;
})();if(cljs.core.truth_(inst_45067))
{var statearr_45107_45172 = state_45101__$1;(statearr_45107_45172[(1)] = (5));
} else
{var statearr_45108_45173 = state_45101__$1;(statearr_45108_45173[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (15)))
{var inst_45079 = (state_45101[(8)]);var state_45101__$1 = state_45101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45101__$1,(18),to,inst_45079);
} else
{if((state_val_45102 === (21)))
{var inst_45092 = (state_45101[(2)]);var state_45101__$1 = state_45101;var statearr_45109_45174 = state_45101__$1;(statearr_45109_45174[(2)] = inst_45092);
(statearr_45109_45174[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (13)))
{var inst_45094 = (state_45101[(2)]);var state_45101__$1 = (function (){var statearr_45110 = state_45101;(statearr_45110[(9)] = inst_45094);
return statearr_45110;
})();var statearr_45111_45175 = state_45101__$1;(statearr_45111_45175[(2)] = null);
(statearr_45111_45175[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (6)))
{var inst_45066 = (state_45101[(7)]);var state_45101__$1 = state_45101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45101__$1,(11),inst_45066);
} else
{if((state_val_45102 === (17)))
{var inst_45087 = (state_45101[(2)]);var state_45101__$1 = state_45101;if(cljs.core.truth_(inst_45087))
{var statearr_45112_45176 = state_45101__$1;(statearr_45112_45176[(1)] = (19));
} else
{var statearr_45113_45177 = state_45101__$1;(statearr_45113_45177[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (3)))
{var inst_45099 = (state_45101[(2)]);var state_45101__$1 = state_45101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45101__$1,inst_45099);
} else
{if((state_val_45102 === (12)))
{var inst_45076 = (state_45101[(10)]);var state_45101__$1 = state_45101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45101__$1,(14),inst_45076);
} else
{if((state_val_45102 === (2)))
{var state_45101__$1 = state_45101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45101__$1,(4),results);
} else
{if((state_val_45102 === (19)))
{var state_45101__$1 = state_45101;var statearr_45114_45178 = state_45101__$1;(statearr_45114_45178[(2)] = null);
(statearr_45114_45178[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (11)))
{var inst_45076 = (state_45101[(2)]);var state_45101__$1 = (function (){var statearr_45115 = state_45101;(statearr_45115[(10)] = inst_45076);
return statearr_45115;
})();var statearr_45116_45179 = state_45101__$1;(statearr_45116_45179[(2)] = null);
(statearr_45116_45179[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (9)))
{var state_45101__$1 = state_45101;var statearr_45117_45180 = state_45101__$1;(statearr_45117_45180[(2)] = null);
(statearr_45117_45180[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (5)))
{var state_45101__$1 = state_45101;if(cljs.core.truth_(close_QMARK_))
{var statearr_45118_45181 = state_45101__$1;(statearr_45118_45181[(1)] = (8));
} else
{var statearr_45119_45182 = state_45101__$1;(statearr_45119_45182[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (14)))
{var inst_45079 = (state_45101[(8)]);var inst_45081 = (state_45101[(11)]);var inst_45079__$1 = (state_45101[(2)]);var inst_45080 = (inst_45079__$1 == null);var inst_45081__$1 = cljs.core.not.call(null,inst_45080);var state_45101__$1 = (function (){var statearr_45120 = state_45101;(statearr_45120[(8)] = inst_45079__$1);
(statearr_45120[(11)] = inst_45081__$1);
return statearr_45120;
})();if(inst_45081__$1)
{var statearr_45121_45183 = state_45101__$1;(statearr_45121_45183[(1)] = (15));
} else
{var statearr_45122_45184 = state_45101__$1;(statearr_45122_45184[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (16)))
{var inst_45081 = (state_45101[(11)]);var state_45101__$1 = state_45101;var statearr_45123_45185 = state_45101__$1;(statearr_45123_45185[(2)] = inst_45081);
(statearr_45123_45185[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (10)))
{var inst_45073 = (state_45101[(2)]);var state_45101__$1 = state_45101;var statearr_45124_45186 = state_45101__$1;(statearr_45124_45186[(2)] = inst_45073);
(statearr_45124_45186[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (18)))
{var inst_45084 = (state_45101[(2)]);var state_45101__$1 = state_45101;var statearr_45125_45187 = state_45101__$1;(statearr_45125_45187[(2)] = inst_45084);
(statearr_45125_45187[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45102 === (8)))
{var inst_45070 = cljs.core.async.close_BANG_.call(null,to);var state_45101__$1 = state_45101;var statearr_45126_45188 = state_45101__$1;(statearr_45126_45188[(2)] = inst_45070);
(statearr_45126_45188[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto__,jobs,results,process,async))
;return ((function (switch__10223__auto__,c__10238__auto__,jobs,results,process,async){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_45130 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45130[(0)] = state_machine__10224__auto__);
(statearr_45130[(1)] = (1));
return statearr_45130;
});
var state_machine__10224__auto____1 = (function (state_45101){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_45101);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e45131){if((e45131 instanceof Object))
{var ex__10227__auto__ = e45131;var statearr_45132_45189 = state_45101;(statearr_45132_45189[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45131;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45190 = state_45101;
state_45101 = G__45190;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_45101){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_45101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto__,jobs,results,process,async))
})();var state__10240__auto__ = (function (){var statearr_45133 = f__10239__auto__.call(null);(statearr_45133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto__);
return statearr_45133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto__,jobs,results,process,async))
);
return c__10238__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10238__auto___45291 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___45291,tc,fc){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___45291,tc,fc){
return (function (state_45266){var state_val_45267 = (state_45266[(1)]);if((state_val_45267 === (7)))
{var inst_45262 = (state_45266[(2)]);var state_45266__$1 = state_45266;var statearr_45268_45292 = state_45266__$1;(statearr_45268_45292[(2)] = inst_45262);
(statearr_45268_45292[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (1)))
{var state_45266__$1 = state_45266;var statearr_45269_45293 = state_45266__$1;(statearr_45269_45293[(2)] = null);
(statearr_45269_45293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (4)))
{var inst_45243 = (state_45266[(7)]);var inst_45243__$1 = (state_45266[(2)]);var inst_45244 = (inst_45243__$1 == null);var state_45266__$1 = (function (){var statearr_45270 = state_45266;(statearr_45270[(7)] = inst_45243__$1);
return statearr_45270;
})();if(cljs.core.truth_(inst_45244))
{var statearr_45271_45294 = state_45266__$1;(statearr_45271_45294[(1)] = (5));
} else
{var statearr_45272_45295 = state_45266__$1;(statearr_45272_45295[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (13)))
{var state_45266__$1 = state_45266;var statearr_45273_45296 = state_45266__$1;(statearr_45273_45296[(2)] = null);
(statearr_45273_45296[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (6)))
{var inst_45243 = (state_45266[(7)]);var inst_45249 = p.call(null,inst_45243);var state_45266__$1 = state_45266;if(cljs.core.truth_(inst_45249))
{var statearr_45274_45297 = state_45266__$1;(statearr_45274_45297[(1)] = (9));
} else
{var statearr_45275_45298 = state_45266__$1;(statearr_45275_45298[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (3)))
{var inst_45264 = (state_45266[(2)]);var state_45266__$1 = state_45266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45266__$1,inst_45264);
} else
{if((state_val_45267 === (12)))
{var state_45266__$1 = state_45266;var statearr_45276_45299 = state_45266__$1;(statearr_45276_45299[(2)] = null);
(statearr_45276_45299[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (2)))
{var state_45266__$1 = state_45266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45266__$1,(4),ch);
} else
{if((state_val_45267 === (11)))
{var inst_45243 = (state_45266[(7)]);var inst_45253 = (state_45266[(2)]);var state_45266__$1 = state_45266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45266__$1,(8),inst_45253,inst_45243);
} else
{if((state_val_45267 === (9)))
{var state_45266__$1 = state_45266;var statearr_45277_45300 = state_45266__$1;(statearr_45277_45300[(2)] = tc);
(statearr_45277_45300[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (5)))
{var inst_45246 = cljs.core.async.close_BANG_.call(null,tc);var inst_45247 = cljs.core.async.close_BANG_.call(null,fc);var state_45266__$1 = (function (){var statearr_45278 = state_45266;(statearr_45278[(8)] = inst_45246);
return statearr_45278;
})();var statearr_45279_45301 = state_45266__$1;(statearr_45279_45301[(2)] = inst_45247);
(statearr_45279_45301[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (14)))
{var inst_45260 = (state_45266[(2)]);var state_45266__$1 = state_45266;var statearr_45280_45302 = state_45266__$1;(statearr_45280_45302[(2)] = inst_45260);
(statearr_45280_45302[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (10)))
{var state_45266__$1 = state_45266;var statearr_45281_45303 = state_45266__$1;(statearr_45281_45303[(2)] = fc);
(statearr_45281_45303[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45267 === (8)))
{var inst_45255 = (state_45266[(2)]);var state_45266__$1 = state_45266;if(cljs.core.truth_(inst_45255))
{var statearr_45282_45304 = state_45266__$1;(statearr_45282_45304[(1)] = (12));
} else
{var statearr_45283_45305 = state_45266__$1;(statearr_45283_45305[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___45291,tc,fc))
;return ((function (switch__10223__auto__,c__10238__auto___45291,tc,fc){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_45287 = [null,null,null,null,null,null,null,null,null];(statearr_45287[(0)] = state_machine__10224__auto__);
(statearr_45287[(1)] = (1));
return statearr_45287;
});
var state_machine__10224__auto____1 = (function (state_45266){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_45266);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e45288){if((e45288 instanceof Object))
{var ex__10227__auto__ = e45288;var statearr_45289_45306 = state_45266;(statearr_45289_45306[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45266);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45288;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45307 = state_45266;
state_45266 = G__45307;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_45266){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_45266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___45291,tc,fc))
})();var state__10240__auto__ = (function (){var statearr_45290 = f__10239__auto__.call(null);(statearr_45290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___45291);
return statearr_45290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___45291,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10238__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto__){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto__){
return (function (state_45354){var state_val_45355 = (state_45354[(1)]);if((state_val_45355 === (7)))
{var inst_45350 = (state_45354[(2)]);var state_45354__$1 = state_45354;var statearr_45356_45372 = state_45354__$1;(statearr_45356_45372[(2)] = inst_45350);
(statearr_45356_45372[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45355 === (6)))
{var inst_45340 = (state_45354[(7)]);var inst_45343 = (state_45354[(8)]);var inst_45347 = f.call(null,inst_45340,inst_45343);var inst_45340__$1 = inst_45347;var state_45354__$1 = (function (){var statearr_45357 = state_45354;(statearr_45357[(7)] = inst_45340__$1);
return statearr_45357;
})();var statearr_45358_45373 = state_45354__$1;(statearr_45358_45373[(2)] = null);
(statearr_45358_45373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45355 === (5)))
{var inst_45340 = (state_45354[(7)]);var state_45354__$1 = state_45354;var statearr_45359_45374 = state_45354__$1;(statearr_45359_45374[(2)] = inst_45340);
(statearr_45359_45374[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45355 === (4)))
{var inst_45343 = (state_45354[(8)]);var inst_45343__$1 = (state_45354[(2)]);var inst_45344 = (inst_45343__$1 == null);var state_45354__$1 = (function (){var statearr_45360 = state_45354;(statearr_45360[(8)] = inst_45343__$1);
return statearr_45360;
})();if(cljs.core.truth_(inst_45344))
{var statearr_45361_45375 = state_45354__$1;(statearr_45361_45375[(1)] = (5));
} else
{var statearr_45362_45376 = state_45354__$1;(statearr_45362_45376[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45355 === (3)))
{var inst_45352 = (state_45354[(2)]);var state_45354__$1 = state_45354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45354__$1,inst_45352);
} else
{if((state_val_45355 === (2)))
{var state_45354__$1 = state_45354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45354__$1,(4),ch);
} else
{if((state_val_45355 === (1)))
{var inst_45340 = init;var state_45354__$1 = (function (){var statearr_45363 = state_45354;(statearr_45363[(7)] = inst_45340);
return statearr_45363;
})();var statearr_45364_45377 = state_45354__$1;(statearr_45364_45377[(2)] = null);
(statearr_45364_45377[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10238__auto__))
;return ((function (switch__10223__auto__,c__10238__auto__){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_45368 = [null,null,null,null,null,null,null,null,null];(statearr_45368[(0)] = state_machine__10224__auto__);
(statearr_45368[(1)] = (1));
return statearr_45368;
});
var state_machine__10224__auto____1 = (function (state_45354){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_45354);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e45369){if((e45369 instanceof Object))
{var ex__10227__auto__ = e45369;var statearr_45370_45378 = state_45354;(statearr_45370_45378[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45354);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45369;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45379 = state_45354;
state_45354 = G__45379;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_45354){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_45354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto__))
})();var state__10240__auto__ = (function (){var statearr_45371 = f__10239__auto__.call(null);(statearr_45371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto__);
return statearr_45371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto__))
);
return c__10238__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10238__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto__){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto__){
return (function (state_45453){var state_val_45454 = (state_45453[(1)]);if((state_val_45454 === (7)))
{var inst_45435 = (state_45453[(2)]);var state_45453__$1 = state_45453;var statearr_45455_45478 = state_45453__$1;(statearr_45455_45478[(2)] = inst_45435);
(statearr_45455_45478[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (1)))
{var inst_45429 = cljs.core.seq.call(null,coll);var inst_45430 = inst_45429;var state_45453__$1 = (function (){var statearr_45456 = state_45453;(statearr_45456[(7)] = inst_45430);
return statearr_45456;
})();var statearr_45457_45479 = state_45453__$1;(statearr_45457_45479[(2)] = null);
(statearr_45457_45479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (4)))
{var inst_45430 = (state_45453[(7)]);var inst_45433 = cljs.core.first.call(null,inst_45430);var state_45453__$1 = state_45453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45453__$1,(7),ch,inst_45433);
} else
{if((state_val_45454 === (13)))
{var inst_45447 = (state_45453[(2)]);var state_45453__$1 = state_45453;var statearr_45458_45480 = state_45453__$1;(statearr_45458_45480[(2)] = inst_45447);
(statearr_45458_45480[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (6)))
{var inst_45438 = (state_45453[(2)]);var state_45453__$1 = state_45453;if(cljs.core.truth_(inst_45438))
{var statearr_45459_45481 = state_45453__$1;(statearr_45459_45481[(1)] = (8));
} else
{var statearr_45460_45482 = state_45453__$1;(statearr_45460_45482[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (3)))
{var inst_45451 = (state_45453[(2)]);var state_45453__$1 = state_45453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45453__$1,inst_45451);
} else
{if((state_val_45454 === (12)))
{var state_45453__$1 = state_45453;var statearr_45461_45483 = state_45453__$1;(statearr_45461_45483[(2)] = null);
(statearr_45461_45483[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (2)))
{var inst_45430 = (state_45453[(7)]);var state_45453__$1 = state_45453;if(cljs.core.truth_(inst_45430))
{var statearr_45462_45484 = state_45453__$1;(statearr_45462_45484[(1)] = (4));
} else
{var statearr_45463_45485 = state_45453__$1;(statearr_45463_45485[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (11)))
{var inst_45444 = cljs.core.async.close_BANG_.call(null,ch);var state_45453__$1 = state_45453;var statearr_45464_45486 = state_45453__$1;(statearr_45464_45486[(2)] = inst_45444);
(statearr_45464_45486[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (9)))
{var state_45453__$1 = state_45453;if(cljs.core.truth_(close_QMARK_))
{var statearr_45465_45487 = state_45453__$1;(statearr_45465_45487[(1)] = (11));
} else
{var statearr_45466_45488 = state_45453__$1;(statearr_45466_45488[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (5)))
{var inst_45430 = (state_45453[(7)]);var state_45453__$1 = state_45453;var statearr_45467_45489 = state_45453__$1;(statearr_45467_45489[(2)] = inst_45430);
(statearr_45467_45489[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (10)))
{var inst_45449 = (state_45453[(2)]);var state_45453__$1 = state_45453;var statearr_45468_45490 = state_45453__$1;(statearr_45468_45490[(2)] = inst_45449);
(statearr_45468_45490[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45454 === (8)))
{var inst_45430 = (state_45453[(7)]);var inst_45440 = cljs.core.next.call(null,inst_45430);var inst_45430__$1 = inst_45440;var state_45453__$1 = (function (){var statearr_45469 = state_45453;(statearr_45469[(7)] = inst_45430__$1);
return statearr_45469;
})();var statearr_45470_45491 = state_45453__$1;(statearr_45470_45491[(2)] = null);
(statearr_45470_45491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto__))
;return ((function (switch__10223__auto__,c__10238__auto__){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_45474 = [null,null,null,null,null,null,null,null];(statearr_45474[(0)] = state_machine__10224__auto__);
(statearr_45474[(1)] = (1));
return statearr_45474;
});
var state_machine__10224__auto____1 = (function (state_45453){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_45453);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e45475){if((e45475 instanceof Object))
{var ex__10227__auto__ = e45475;var statearr_45476_45492 = state_45453;(statearr_45476_45492[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45475;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45493 = state_45453;
state_45453 = G__45493;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_45453){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_45453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto__))
})();var state__10240__auto__ = (function (){var statearr_45477 = f__10239__auto__.call(null);(statearr_45477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto__);
return statearr_45477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto__))
);
return c__10238__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj45495 = {};return obj45495;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj45497 = {};return obj45497;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t45719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t45719 = (function (cs,ch,mult,meta45720){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta45720 = meta45720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45719.cljs$lang$type = true;
cljs.core.async.t45719.cljs$lang$ctorStr = "cljs.core.async/t45719";
cljs.core.async.t45719.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t45719");
});})(cs))
;
cljs.core.async.t45719.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t45719.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t45719.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t45719.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t45719.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t45719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t45719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45721){var self__ = this;
var _45721__$1 = this;return self__.meta45720;
});})(cs))
;
cljs.core.async.t45719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45721,meta45720__$1){var self__ = this;
var _45721__$1 = this;return (new cljs.core.async.t45719(self__.cs,self__.ch,self__.mult,meta45720__$1));
});})(cs))
;
cljs.core.async.__GT_t45719 = ((function (cs){
return (function __GT_t45719(cs__$1,ch__$1,mult__$1,meta45720){return (new cljs.core.async.t45719(cs__$1,ch__$1,mult__$1,meta45720));
});})(cs))
;
}
return (new cljs.core.async.t45719(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10238__auto___45940 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___45940,cs,m,dchan,dctr,done){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___45940,cs,m,dchan,dctr,done){
return (function (state_45852){var state_val_45853 = (state_45852[(1)]);if((state_val_45853 === (7)))
{var inst_45848 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45854_45941 = state_45852__$1;(statearr_45854_45941[(2)] = inst_45848);
(statearr_45854_45941[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (20)))
{var inst_45753 = (state_45852[(7)]);var inst_45763 = cljs.core.first.call(null,inst_45753);var inst_45764 = cljs.core.nth.call(null,inst_45763,(0),null);var inst_45765 = cljs.core.nth.call(null,inst_45763,(1),null);var state_45852__$1 = (function (){var statearr_45855 = state_45852;(statearr_45855[(8)] = inst_45764);
return statearr_45855;
})();if(cljs.core.truth_(inst_45765))
{var statearr_45856_45942 = state_45852__$1;(statearr_45856_45942[(1)] = (22));
} else
{var statearr_45857_45943 = state_45852__$1;(statearr_45857_45943[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (27)))
{var inst_45800 = (state_45852[(9)]);var inst_45795 = (state_45852[(10)]);var inst_45793 = (state_45852[(11)]);var inst_45724 = (state_45852[(12)]);var inst_45800__$1 = cljs.core._nth.call(null,inst_45793,inst_45795);var inst_45801 = cljs.core.async.put_BANG_.call(null,inst_45800__$1,inst_45724,done);var state_45852__$1 = (function (){var statearr_45858 = state_45852;(statearr_45858[(9)] = inst_45800__$1);
return statearr_45858;
})();if(cljs.core.truth_(inst_45801))
{var statearr_45859_45944 = state_45852__$1;(statearr_45859_45944[(1)] = (30));
} else
{var statearr_45860_45945 = state_45852__$1;(statearr_45860_45945[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (1)))
{var state_45852__$1 = state_45852;var statearr_45861_45946 = state_45852__$1;(statearr_45861_45946[(2)] = null);
(statearr_45861_45946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (24)))
{var inst_45753 = (state_45852[(7)]);var inst_45770 = (state_45852[(2)]);var inst_45771 = cljs.core.next.call(null,inst_45753);var inst_45733 = inst_45771;var inst_45734 = null;var inst_45735 = (0);var inst_45736 = (0);var state_45852__$1 = (function (){var statearr_45862 = state_45852;(statearr_45862[(13)] = inst_45733);
(statearr_45862[(14)] = inst_45734);
(statearr_45862[(15)] = inst_45736);
(statearr_45862[(16)] = inst_45770);
(statearr_45862[(17)] = inst_45735);
return statearr_45862;
})();var statearr_45863_45947 = state_45852__$1;(statearr_45863_45947[(2)] = null);
(statearr_45863_45947[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (39)))
{var state_45852__$1 = state_45852;var statearr_45867_45948 = state_45852__$1;(statearr_45867_45948[(2)] = null);
(statearr_45867_45948[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (4)))
{var inst_45724 = (state_45852[(12)]);var inst_45724__$1 = (state_45852[(2)]);var inst_45725 = (inst_45724__$1 == null);var state_45852__$1 = (function (){var statearr_45868 = state_45852;(statearr_45868[(12)] = inst_45724__$1);
return statearr_45868;
})();if(cljs.core.truth_(inst_45725))
{var statearr_45869_45949 = state_45852__$1;(statearr_45869_45949[(1)] = (5));
} else
{var statearr_45870_45950 = state_45852__$1;(statearr_45870_45950[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (15)))
{var inst_45733 = (state_45852[(13)]);var inst_45734 = (state_45852[(14)]);var inst_45736 = (state_45852[(15)]);var inst_45735 = (state_45852[(17)]);var inst_45749 = (state_45852[(2)]);var inst_45750 = (inst_45736 + (1));var tmp45864 = inst_45733;var tmp45865 = inst_45734;var tmp45866 = inst_45735;var inst_45733__$1 = tmp45864;var inst_45734__$1 = tmp45865;var inst_45735__$1 = tmp45866;var inst_45736__$1 = inst_45750;var state_45852__$1 = (function (){var statearr_45871 = state_45852;(statearr_45871[(13)] = inst_45733__$1);
(statearr_45871[(14)] = inst_45734__$1);
(statearr_45871[(15)] = inst_45736__$1);
(statearr_45871[(18)] = inst_45749);
(statearr_45871[(17)] = inst_45735__$1);
return statearr_45871;
})();var statearr_45872_45951 = state_45852__$1;(statearr_45872_45951[(2)] = null);
(statearr_45872_45951[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (21)))
{var inst_45774 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45876_45952 = state_45852__$1;(statearr_45876_45952[(2)] = inst_45774);
(statearr_45876_45952[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (31)))
{var inst_45800 = (state_45852[(9)]);var inst_45804 = done.call(null,null);var inst_45805 = cljs.core.async.untap_STAR_.call(null,m,inst_45800);var state_45852__$1 = (function (){var statearr_45877 = state_45852;(statearr_45877[(19)] = inst_45804);
return statearr_45877;
})();var statearr_45878_45953 = state_45852__$1;(statearr_45878_45953[(2)] = inst_45805);
(statearr_45878_45953[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (32)))
{var inst_45795 = (state_45852[(10)]);var inst_45793 = (state_45852[(11)]);var inst_45794 = (state_45852[(20)]);var inst_45792 = (state_45852[(21)]);var inst_45807 = (state_45852[(2)]);var inst_45808 = (inst_45795 + (1));var tmp45873 = inst_45793;var tmp45874 = inst_45794;var tmp45875 = inst_45792;var inst_45792__$1 = tmp45875;var inst_45793__$1 = tmp45873;var inst_45794__$1 = tmp45874;var inst_45795__$1 = inst_45808;var state_45852__$1 = (function (){var statearr_45879 = state_45852;(statearr_45879[(22)] = inst_45807);
(statearr_45879[(10)] = inst_45795__$1);
(statearr_45879[(11)] = inst_45793__$1);
(statearr_45879[(20)] = inst_45794__$1);
(statearr_45879[(21)] = inst_45792__$1);
return statearr_45879;
})();var statearr_45880_45954 = state_45852__$1;(statearr_45880_45954[(2)] = null);
(statearr_45880_45954[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (40)))
{var inst_45820 = (state_45852[(23)]);var inst_45824 = done.call(null,null);var inst_45825 = cljs.core.async.untap_STAR_.call(null,m,inst_45820);var state_45852__$1 = (function (){var statearr_45881 = state_45852;(statearr_45881[(24)] = inst_45824);
return statearr_45881;
})();var statearr_45882_45955 = state_45852__$1;(statearr_45882_45955[(2)] = inst_45825);
(statearr_45882_45955[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (33)))
{var inst_45811 = (state_45852[(25)]);var inst_45813 = cljs.core.chunked_seq_QMARK_.call(null,inst_45811);var state_45852__$1 = state_45852;if(inst_45813)
{var statearr_45883_45956 = state_45852__$1;(statearr_45883_45956[(1)] = (36));
} else
{var statearr_45884_45957 = state_45852__$1;(statearr_45884_45957[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (13)))
{var inst_45743 = (state_45852[(26)]);var inst_45746 = cljs.core.async.close_BANG_.call(null,inst_45743);var state_45852__$1 = state_45852;var statearr_45885_45958 = state_45852__$1;(statearr_45885_45958[(2)] = inst_45746);
(statearr_45885_45958[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (22)))
{var inst_45764 = (state_45852[(8)]);var inst_45767 = cljs.core.async.close_BANG_.call(null,inst_45764);var state_45852__$1 = state_45852;var statearr_45886_45959 = state_45852__$1;(statearr_45886_45959[(2)] = inst_45767);
(statearr_45886_45959[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (36)))
{var inst_45811 = (state_45852[(25)]);var inst_45815 = cljs.core.chunk_first.call(null,inst_45811);var inst_45816 = cljs.core.chunk_rest.call(null,inst_45811);var inst_45817 = cljs.core.count.call(null,inst_45815);var inst_45792 = inst_45816;var inst_45793 = inst_45815;var inst_45794 = inst_45817;var inst_45795 = (0);var state_45852__$1 = (function (){var statearr_45887 = state_45852;(statearr_45887[(10)] = inst_45795);
(statearr_45887[(11)] = inst_45793);
(statearr_45887[(20)] = inst_45794);
(statearr_45887[(21)] = inst_45792);
return statearr_45887;
})();var statearr_45888_45960 = state_45852__$1;(statearr_45888_45960[(2)] = null);
(statearr_45888_45960[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (41)))
{var inst_45811 = (state_45852[(25)]);var inst_45827 = (state_45852[(2)]);var inst_45828 = cljs.core.next.call(null,inst_45811);var inst_45792 = inst_45828;var inst_45793 = null;var inst_45794 = (0);var inst_45795 = (0);var state_45852__$1 = (function (){var statearr_45889 = state_45852;(statearr_45889[(27)] = inst_45827);
(statearr_45889[(10)] = inst_45795);
(statearr_45889[(11)] = inst_45793);
(statearr_45889[(20)] = inst_45794);
(statearr_45889[(21)] = inst_45792);
return statearr_45889;
})();var statearr_45890_45961 = state_45852__$1;(statearr_45890_45961[(2)] = null);
(statearr_45890_45961[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (43)))
{var state_45852__$1 = state_45852;var statearr_45891_45962 = state_45852__$1;(statearr_45891_45962[(2)] = null);
(statearr_45891_45962[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (29)))
{var inst_45836 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45892_45963 = state_45852__$1;(statearr_45892_45963[(2)] = inst_45836);
(statearr_45892_45963[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (44)))
{var inst_45845 = (state_45852[(2)]);var state_45852__$1 = (function (){var statearr_45893 = state_45852;(statearr_45893[(28)] = inst_45845);
return statearr_45893;
})();var statearr_45894_45964 = state_45852__$1;(statearr_45894_45964[(2)] = null);
(statearr_45894_45964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (6)))
{var inst_45784 = (state_45852[(29)]);var inst_45783 = cljs.core.deref.call(null,cs);var inst_45784__$1 = cljs.core.keys.call(null,inst_45783);var inst_45785 = cljs.core.count.call(null,inst_45784__$1);var inst_45786 = cljs.core.reset_BANG_.call(null,dctr,inst_45785);var inst_45791 = cljs.core.seq.call(null,inst_45784__$1);var inst_45792 = inst_45791;var inst_45793 = null;var inst_45794 = (0);var inst_45795 = (0);var state_45852__$1 = (function (){var statearr_45895 = state_45852;(statearr_45895[(30)] = inst_45786);
(statearr_45895[(10)] = inst_45795);
(statearr_45895[(11)] = inst_45793);
(statearr_45895[(20)] = inst_45794);
(statearr_45895[(29)] = inst_45784__$1);
(statearr_45895[(21)] = inst_45792);
return statearr_45895;
})();var statearr_45896_45965 = state_45852__$1;(statearr_45896_45965[(2)] = null);
(statearr_45896_45965[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (28)))
{var inst_45811 = (state_45852[(25)]);var inst_45792 = (state_45852[(21)]);var inst_45811__$1 = cljs.core.seq.call(null,inst_45792);var state_45852__$1 = (function (){var statearr_45897 = state_45852;(statearr_45897[(25)] = inst_45811__$1);
return statearr_45897;
})();if(inst_45811__$1)
{var statearr_45898_45966 = state_45852__$1;(statearr_45898_45966[(1)] = (33));
} else
{var statearr_45899_45967 = state_45852__$1;(statearr_45899_45967[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (25)))
{var inst_45795 = (state_45852[(10)]);var inst_45794 = (state_45852[(20)]);var inst_45797 = (inst_45795 < inst_45794);var inst_45798 = inst_45797;var state_45852__$1 = state_45852;if(cljs.core.truth_(inst_45798))
{var statearr_45900_45968 = state_45852__$1;(statearr_45900_45968[(1)] = (27));
} else
{var statearr_45901_45969 = state_45852__$1;(statearr_45901_45969[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (34)))
{var state_45852__$1 = state_45852;var statearr_45902_45970 = state_45852__$1;(statearr_45902_45970[(2)] = null);
(statearr_45902_45970[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (17)))
{var state_45852__$1 = state_45852;var statearr_45903_45971 = state_45852__$1;(statearr_45903_45971[(2)] = null);
(statearr_45903_45971[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (3)))
{var inst_45850 = (state_45852[(2)]);var state_45852__$1 = state_45852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45852__$1,inst_45850);
} else
{if((state_val_45853 === (12)))
{var inst_45779 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45904_45972 = state_45852__$1;(statearr_45904_45972[(2)] = inst_45779);
(statearr_45904_45972[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (2)))
{var state_45852__$1 = state_45852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45852__$1,(4),ch);
} else
{if((state_val_45853 === (23)))
{var state_45852__$1 = state_45852;var statearr_45905_45973 = state_45852__$1;(statearr_45905_45973[(2)] = null);
(statearr_45905_45973[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (35)))
{var inst_45834 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45906_45974 = state_45852__$1;(statearr_45906_45974[(2)] = inst_45834);
(statearr_45906_45974[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (19)))
{var inst_45753 = (state_45852[(7)]);var inst_45757 = cljs.core.chunk_first.call(null,inst_45753);var inst_45758 = cljs.core.chunk_rest.call(null,inst_45753);var inst_45759 = cljs.core.count.call(null,inst_45757);var inst_45733 = inst_45758;var inst_45734 = inst_45757;var inst_45735 = inst_45759;var inst_45736 = (0);var state_45852__$1 = (function (){var statearr_45907 = state_45852;(statearr_45907[(13)] = inst_45733);
(statearr_45907[(14)] = inst_45734);
(statearr_45907[(15)] = inst_45736);
(statearr_45907[(17)] = inst_45735);
return statearr_45907;
})();var statearr_45908_45975 = state_45852__$1;(statearr_45908_45975[(2)] = null);
(statearr_45908_45975[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (11)))
{var inst_45733 = (state_45852[(13)]);var inst_45753 = (state_45852[(7)]);var inst_45753__$1 = cljs.core.seq.call(null,inst_45733);var state_45852__$1 = (function (){var statearr_45909 = state_45852;(statearr_45909[(7)] = inst_45753__$1);
return statearr_45909;
})();if(inst_45753__$1)
{var statearr_45910_45976 = state_45852__$1;(statearr_45910_45976[(1)] = (16));
} else
{var statearr_45911_45977 = state_45852__$1;(statearr_45911_45977[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (9)))
{var inst_45781 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45912_45978 = state_45852__$1;(statearr_45912_45978[(2)] = inst_45781);
(statearr_45912_45978[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (5)))
{var inst_45731 = cljs.core.deref.call(null,cs);var inst_45732 = cljs.core.seq.call(null,inst_45731);var inst_45733 = inst_45732;var inst_45734 = null;var inst_45735 = (0);var inst_45736 = (0);var state_45852__$1 = (function (){var statearr_45913 = state_45852;(statearr_45913[(13)] = inst_45733);
(statearr_45913[(14)] = inst_45734);
(statearr_45913[(15)] = inst_45736);
(statearr_45913[(17)] = inst_45735);
return statearr_45913;
})();var statearr_45914_45979 = state_45852__$1;(statearr_45914_45979[(2)] = null);
(statearr_45914_45979[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (14)))
{var state_45852__$1 = state_45852;var statearr_45915_45980 = state_45852__$1;(statearr_45915_45980[(2)] = null);
(statearr_45915_45980[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (45)))
{var inst_45842 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45916_45981 = state_45852__$1;(statearr_45916_45981[(2)] = inst_45842);
(statearr_45916_45981[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (26)))
{var inst_45784 = (state_45852[(29)]);var inst_45838 = (state_45852[(2)]);var inst_45839 = cljs.core.seq.call(null,inst_45784);var state_45852__$1 = (function (){var statearr_45917 = state_45852;(statearr_45917[(31)] = inst_45838);
return statearr_45917;
})();if(inst_45839)
{var statearr_45918_45982 = state_45852__$1;(statearr_45918_45982[(1)] = (42));
} else
{var statearr_45919_45983 = state_45852__$1;(statearr_45919_45983[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (16)))
{var inst_45753 = (state_45852[(7)]);var inst_45755 = cljs.core.chunked_seq_QMARK_.call(null,inst_45753);var state_45852__$1 = state_45852;if(inst_45755)
{var statearr_45920_45984 = state_45852__$1;(statearr_45920_45984[(1)] = (19));
} else
{var statearr_45921_45985 = state_45852__$1;(statearr_45921_45985[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (38)))
{var inst_45831 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45922_45986 = state_45852__$1;(statearr_45922_45986[(2)] = inst_45831);
(statearr_45922_45986[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (30)))
{var state_45852__$1 = state_45852;var statearr_45923_45987 = state_45852__$1;(statearr_45923_45987[(2)] = null);
(statearr_45923_45987[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (10)))
{var inst_45734 = (state_45852[(14)]);var inst_45736 = (state_45852[(15)]);var inst_45742 = cljs.core._nth.call(null,inst_45734,inst_45736);var inst_45743 = cljs.core.nth.call(null,inst_45742,(0),null);var inst_45744 = cljs.core.nth.call(null,inst_45742,(1),null);var state_45852__$1 = (function (){var statearr_45924 = state_45852;(statearr_45924[(26)] = inst_45743);
return statearr_45924;
})();if(cljs.core.truth_(inst_45744))
{var statearr_45925_45988 = state_45852__$1;(statearr_45925_45988[(1)] = (13));
} else
{var statearr_45926_45989 = state_45852__$1;(statearr_45926_45989[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (18)))
{var inst_45777 = (state_45852[(2)]);var state_45852__$1 = state_45852;var statearr_45927_45990 = state_45852__$1;(statearr_45927_45990[(2)] = inst_45777);
(statearr_45927_45990[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (42)))
{var state_45852__$1 = state_45852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45852__$1,(45),dchan);
} else
{if((state_val_45853 === (37)))
{var inst_45820 = (state_45852[(23)]);var inst_45811 = (state_45852[(25)]);var inst_45724 = (state_45852[(12)]);var inst_45820__$1 = cljs.core.first.call(null,inst_45811);var inst_45821 = cljs.core.async.put_BANG_.call(null,inst_45820__$1,inst_45724,done);var state_45852__$1 = (function (){var statearr_45928 = state_45852;(statearr_45928[(23)] = inst_45820__$1);
return statearr_45928;
})();if(cljs.core.truth_(inst_45821))
{var statearr_45929_45991 = state_45852__$1;(statearr_45929_45991[(1)] = (39));
} else
{var statearr_45930_45992 = state_45852__$1;(statearr_45930_45992[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45853 === (8)))
{var inst_45736 = (state_45852[(15)]);var inst_45735 = (state_45852[(17)]);var inst_45738 = (inst_45736 < inst_45735);var inst_45739 = inst_45738;var state_45852__$1 = state_45852;if(cljs.core.truth_(inst_45739))
{var statearr_45931_45993 = state_45852__$1;(statearr_45931_45993[(1)] = (10));
} else
{var statearr_45932_45994 = state_45852__$1;(statearr_45932_45994[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___45940,cs,m,dchan,dctr,done))
;return ((function (switch__10223__auto__,c__10238__auto___45940,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_45936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45936[(0)] = state_machine__10224__auto__);
(statearr_45936[(1)] = (1));
return statearr_45936;
});
var state_machine__10224__auto____1 = (function (state_45852){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_45852);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e45937){if((e45937 instanceof Object))
{var ex__10227__auto__ = e45937;var statearr_45938_45995 = state_45852;(statearr_45938_45995[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45937;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45996 = state_45852;
state_45852 = G__45996;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_45852){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_45852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___45940,cs,m,dchan,dctr,done))
})();var state__10240__auto__ = (function (){var statearr_45939 = f__10239__auto__.call(null);(statearr_45939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___45940);
return statearr_45939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___45940,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj45998 = {};return obj45998;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t46118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46118 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46119){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46119 = meta46119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46118.cljs$lang$type = true;
cljs.core.async.t46118.cljs$lang$ctorStr = "cljs.core.async/t46118";
cljs.core.async.t46118.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t46118");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46118.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t46118.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46118.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46118.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46118.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46118.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46118.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t46118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46120){var self__ = this;
var _46120__$1 = this;return self__.meta46119;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46120,meta46119__$1){var self__ = this;
var _46120__$1 = this;return (new cljs.core.async.t46118(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46119__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t46118 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t46118(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46119){return (new cljs.core.async.t46118(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46119));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t46118(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10238__auto___46237 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___46237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___46237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46190){var state_val_46191 = (state_46190[(1)]);if((state_val_46191 === (7)))
{var inst_46134 = (state_46190[(7)]);var inst_46139 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46134);var state_46190__$1 = state_46190;var statearr_46192_46238 = state_46190__$1;(statearr_46192_46238[(2)] = inst_46139);
(statearr_46192_46238[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (20)))
{var inst_46149 = (state_46190[(8)]);var state_46190__$1 = state_46190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46190__$1,(23),out,inst_46149);
} else
{if((state_val_46191 === (1)))
{var inst_46124 = (state_46190[(9)]);var inst_46124__$1 = calc_state.call(null);var inst_46125 = cljs.core.seq_QMARK_.call(null,inst_46124__$1);var state_46190__$1 = (function (){var statearr_46193 = state_46190;(statearr_46193[(9)] = inst_46124__$1);
return statearr_46193;
})();if(inst_46125)
{var statearr_46194_46239 = state_46190__$1;(statearr_46194_46239[(1)] = (2));
} else
{var statearr_46195_46240 = state_46190__$1;(statearr_46195_46240[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (24)))
{var inst_46142 = (state_46190[(10)]);var inst_46134 = inst_46142;var state_46190__$1 = (function (){var statearr_46196 = state_46190;(statearr_46196[(7)] = inst_46134);
return statearr_46196;
})();var statearr_46197_46241 = state_46190__$1;(statearr_46197_46241[(2)] = null);
(statearr_46197_46241[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (4)))
{var inst_46124 = (state_46190[(9)]);var inst_46130 = (state_46190[(2)]);var inst_46131 = cljs.core.get.call(null,inst_46130,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_46132 = cljs.core.get.call(null,inst_46130,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_46133 = cljs.core.get.call(null,inst_46130,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_46134 = inst_46124;var state_46190__$1 = (function (){var statearr_46198 = state_46190;(statearr_46198[(11)] = inst_46131);
(statearr_46198[(12)] = inst_46133);
(statearr_46198[(7)] = inst_46134);
(statearr_46198[(13)] = inst_46132);
return statearr_46198;
})();var statearr_46199_46242 = state_46190__$1;(statearr_46199_46242[(2)] = null);
(statearr_46199_46242[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (15)))
{var state_46190__$1 = state_46190;var statearr_46200_46243 = state_46190__$1;(statearr_46200_46243[(2)] = null);
(statearr_46200_46243[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (21)))
{var inst_46142 = (state_46190[(10)]);var inst_46134 = inst_46142;var state_46190__$1 = (function (){var statearr_46201 = state_46190;(statearr_46201[(7)] = inst_46134);
return statearr_46201;
})();var statearr_46202_46244 = state_46190__$1;(statearr_46202_46244[(2)] = null);
(statearr_46202_46244[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (13)))
{var inst_46186 = (state_46190[(2)]);var state_46190__$1 = state_46190;var statearr_46203_46245 = state_46190__$1;(statearr_46203_46245[(2)] = inst_46186);
(statearr_46203_46245[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (22)))
{var inst_46184 = (state_46190[(2)]);var state_46190__$1 = state_46190;var statearr_46204_46246 = state_46190__$1;(statearr_46204_46246[(2)] = inst_46184);
(statearr_46204_46246[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (6)))
{var inst_46188 = (state_46190[(2)]);var state_46190__$1 = state_46190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46190__$1,inst_46188);
} else
{if((state_val_46191 === (25)))
{var state_46190__$1 = state_46190;var statearr_46205_46247 = state_46190__$1;(statearr_46205_46247[(2)] = null);
(statearr_46205_46247[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (17)))
{var inst_46164 = (state_46190[(14)]);var state_46190__$1 = state_46190;var statearr_46206_46248 = state_46190__$1;(statearr_46206_46248[(2)] = inst_46164);
(statearr_46206_46248[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (3)))
{var inst_46124 = (state_46190[(9)]);var state_46190__$1 = state_46190;var statearr_46207_46249 = state_46190__$1;(statearr_46207_46249[(2)] = inst_46124);
(statearr_46207_46249[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (12)))
{var inst_46145 = (state_46190[(15)]);var inst_46164 = (state_46190[(14)]);var inst_46150 = (state_46190[(16)]);var inst_46164__$1 = inst_46145.call(null,inst_46150);var state_46190__$1 = (function (){var statearr_46208 = state_46190;(statearr_46208[(14)] = inst_46164__$1);
return statearr_46208;
})();if(cljs.core.truth_(inst_46164__$1))
{var statearr_46209_46250 = state_46190__$1;(statearr_46209_46250[(1)] = (17));
} else
{var statearr_46210_46251 = state_46190__$1;(statearr_46210_46251[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (2)))
{var inst_46124 = (state_46190[(9)]);var inst_46127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46124);var state_46190__$1 = state_46190;var statearr_46211_46252 = state_46190__$1;(statearr_46211_46252[(2)] = inst_46127);
(statearr_46211_46252[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (23)))
{var inst_46175 = (state_46190[(2)]);var state_46190__$1 = state_46190;if(cljs.core.truth_(inst_46175))
{var statearr_46212_46253 = state_46190__$1;(statearr_46212_46253[(1)] = (24));
} else
{var statearr_46213_46254 = state_46190__$1;(statearr_46213_46254[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (19)))
{var inst_46172 = (state_46190[(2)]);var state_46190__$1 = state_46190;if(cljs.core.truth_(inst_46172))
{var statearr_46214_46255 = state_46190__$1;(statearr_46214_46255[(1)] = (20));
} else
{var statearr_46215_46256 = state_46190__$1;(statearr_46215_46256[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (11)))
{var inst_46149 = (state_46190[(8)]);var inst_46155 = (inst_46149 == null);var state_46190__$1 = state_46190;if(cljs.core.truth_(inst_46155))
{var statearr_46216_46257 = state_46190__$1;(statearr_46216_46257[(1)] = (14));
} else
{var statearr_46217_46258 = state_46190__$1;(statearr_46217_46258[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (9)))
{var inst_46142 = (state_46190[(10)]);var inst_46142__$1 = (state_46190[(2)]);var inst_46143 = cljs.core.get.call(null,inst_46142__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_46144 = cljs.core.get.call(null,inst_46142__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_46145 = cljs.core.get.call(null,inst_46142__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_46190__$1 = (function (){var statearr_46218 = state_46190;(statearr_46218[(15)] = inst_46145);
(statearr_46218[(17)] = inst_46144);
(statearr_46218[(10)] = inst_46142__$1);
return statearr_46218;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_46190__$1,(10),inst_46143);
} else
{if((state_val_46191 === (5)))
{var inst_46134 = (state_46190[(7)]);var inst_46137 = cljs.core.seq_QMARK_.call(null,inst_46134);var state_46190__$1 = state_46190;if(inst_46137)
{var statearr_46219_46259 = state_46190__$1;(statearr_46219_46259[(1)] = (7));
} else
{var statearr_46220_46260 = state_46190__$1;(statearr_46220_46260[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (14)))
{var inst_46150 = (state_46190[(16)]);var inst_46157 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46150);var state_46190__$1 = state_46190;var statearr_46221_46261 = state_46190__$1;(statearr_46221_46261[(2)] = inst_46157);
(statearr_46221_46261[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (26)))
{var inst_46180 = (state_46190[(2)]);var state_46190__$1 = state_46190;var statearr_46222_46262 = state_46190__$1;(statearr_46222_46262[(2)] = inst_46180);
(statearr_46222_46262[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (16)))
{var inst_46160 = (state_46190[(2)]);var inst_46161 = calc_state.call(null);var inst_46134 = inst_46161;var state_46190__$1 = (function (){var statearr_46223 = state_46190;(statearr_46223[(18)] = inst_46160);
(statearr_46223[(7)] = inst_46134);
return statearr_46223;
})();var statearr_46224_46263 = state_46190__$1;(statearr_46224_46263[(2)] = null);
(statearr_46224_46263[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (10)))
{var inst_46150 = (state_46190[(16)]);var inst_46149 = (state_46190[(8)]);var inst_46148 = (state_46190[(2)]);var inst_46149__$1 = cljs.core.nth.call(null,inst_46148,(0),null);var inst_46150__$1 = cljs.core.nth.call(null,inst_46148,(1),null);var inst_46151 = (inst_46149__$1 == null);var inst_46152 = cljs.core._EQ_.call(null,inst_46150__$1,change);var inst_46153 = (inst_46151) || (inst_46152);var state_46190__$1 = (function (){var statearr_46225 = state_46190;(statearr_46225[(16)] = inst_46150__$1);
(statearr_46225[(8)] = inst_46149__$1);
return statearr_46225;
})();if(cljs.core.truth_(inst_46153))
{var statearr_46226_46264 = state_46190__$1;(statearr_46226_46264[(1)] = (11));
} else
{var statearr_46227_46265 = state_46190__$1;(statearr_46227_46265[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (18)))
{var inst_46145 = (state_46190[(15)]);var inst_46144 = (state_46190[(17)]);var inst_46150 = (state_46190[(16)]);var inst_46167 = cljs.core.empty_QMARK_.call(null,inst_46145);var inst_46168 = inst_46144.call(null,inst_46150);var inst_46169 = cljs.core.not.call(null,inst_46168);var inst_46170 = (inst_46167) && (inst_46169);var state_46190__$1 = state_46190;var statearr_46228_46266 = state_46190__$1;(statearr_46228_46266[(2)] = inst_46170);
(statearr_46228_46266[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46191 === (8)))
{var inst_46134 = (state_46190[(7)]);var state_46190__$1 = state_46190;var statearr_46229_46267 = state_46190__$1;(statearr_46229_46267[(2)] = inst_46134);
(statearr_46229_46267[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___46237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10223__auto__,c__10238__auto___46237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_46233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46233[(0)] = state_machine__10224__auto__);
(statearr_46233[(1)] = (1));
return statearr_46233;
});
var state_machine__10224__auto____1 = (function (state_46190){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_46190);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e46234){if((e46234 instanceof Object))
{var ex__10227__auto__ = e46234;var statearr_46235_46268 = state_46190;(statearr_46235_46268[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46190);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e46234;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46269 = state_46190;
state_46190 = G__46269;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_46190){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_46190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___46237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10240__auto__ = (function (){var statearr_46236 = f__10239__auto__.call(null);(statearr_46236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___46237);
return statearr_46236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___46237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj46271 = {};return obj46271;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3560__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3560__auto__,mults){
return (function (p1__46272_SHARP_){if(cljs.core.truth_(p1__46272_SHARP_.call(null,topic)))
{return p1__46272_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__46272_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t46395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46395 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta46396){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta46396 = meta46396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46395.cljs$lang$type = true;
cljs.core.async.t46395.cljs$lang$ctorStr = "cljs.core.async/t46395";
cljs.core.async.t46395.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t46395");
});})(mults,ensure_mult))
;
cljs.core.async.t46395.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t46395.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t46395.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4219__auto__))
{var m = temp__4219__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t46395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t46395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t46395.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t46395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t46395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46397){var self__ = this;
var _46397__$1 = this;return self__.meta46396;
});})(mults,ensure_mult))
;
cljs.core.async.t46395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46397,meta46396__$1){var self__ = this;
var _46397__$1 = this;return (new cljs.core.async.t46395(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta46396__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t46395 = ((function (mults,ensure_mult){
return (function __GT_t46395(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta46396){return (new cljs.core.async.t46395(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta46396));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t46395(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10238__auto___46517 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___46517,mults,ensure_mult,p){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___46517,mults,ensure_mult,p){
return (function (state_46469){var state_val_46470 = (state_46469[(1)]);if((state_val_46470 === (7)))
{var inst_46465 = (state_46469[(2)]);var state_46469__$1 = state_46469;var statearr_46471_46518 = state_46469__$1;(statearr_46471_46518[(2)] = inst_46465);
(statearr_46471_46518[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (20)))
{var state_46469__$1 = state_46469;var statearr_46472_46519 = state_46469__$1;(statearr_46472_46519[(2)] = null);
(statearr_46472_46519[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (1)))
{var state_46469__$1 = state_46469;var statearr_46473_46520 = state_46469__$1;(statearr_46473_46520[(2)] = null);
(statearr_46473_46520[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (24)))
{var inst_46448 = (state_46469[(7)]);var inst_46457 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46448);var state_46469__$1 = state_46469;var statearr_46474_46521 = state_46469__$1;(statearr_46474_46521[(2)] = inst_46457);
(statearr_46474_46521[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (4)))
{var inst_46400 = (state_46469[(8)]);var inst_46400__$1 = (state_46469[(2)]);var inst_46401 = (inst_46400__$1 == null);var state_46469__$1 = (function (){var statearr_46475 = state_46469;(statearr_46475[(8)] = inst_46400__$1);
return statearr_46475;
})();if(cljs.core.truth_(inst_46401))
{var statearr_46476_46522 = state_46469__$1;(statearr_46476_46522[(1)] = (5));
} else
{var statearr_46477_46523 = state_46469__$1;(statearr_46477_46523[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (15)))
{var inst_46442 = (state_46469[(2)]);var state_46469__$1 = state_46469;var statearr_46478_46524 = state_46469__$1;(statearr_46478_46524[(2)] = inst_46442);
(statearr_46478_46524[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (21)))
{var inst_46462 = (state_46469[(2)]);var state_46469__$1 = (function (){var statearr_46479 = state_46469;(statearr_46479[(9)] = inst_46462);
return statearr_46479;
})();var statearr_46480_46525 = state_46469__$1;(statearr_46480_46525[(2)] = null);
(statearr_46480_46525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (13)))
{var inst_46424 = (state_46469[(10)]);var inst_46426 = cljs.core.chunked_seq_QMARK_.call(null,inst_46424);var state_46469__$1 = state_46469;if(inst_46426)
{var statearr_46481_46526 = state_46469__$1;(statearr_46481_46526[(1)] = (16));
} else
{var statearr_46482_46527 = state_46469__$1;(statearr_46482_46527[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (22)))
{var inst_46454 = (state_46469[(2)]);var state_46469__$1 = state_46469;if(cljs.core.truth_(inst_46454))
{var statearr_46483_46528 = state_46469__$1;(statearr_46483_46528[(1)] = (23));
} else
{var statearr_46484_46529 = state_46469__$1;(statearr_46484_46529[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (6)))
{var inst_46400 = (state_46469[(8)]);var inst_46450 = (state_46469[(11)]);var inst_46448 = (state_46469[(7)]);var inst_46448__$1 = topic_fn.call(null,inst_46400);var inst_46449 = cljs.core.deref.call(null,mults);var inst_46450__$1 = cljs.core.get.call(null,inst_46449,inst_46448__$1);var state_46469__$1 = (function (){var statearr_46485 = state_46469;(statearr_46485[(11)] = inst_46450__$1);
(statearr_46485[(7)] = inst_46448__$1);
return statearr_46485;
})();if(cljs.core.truth_(inst_46450__$1))
{var statearr_46486_46530 = state_46469__$1;(statearr_46486_46530[(1)] = (19));
} else
{var statearr_46487_46531 = state_46469__$1;(statearr_46487_46531[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (25)))
{var inst_46459 = (state_46469[(2)]);var state_46469__$1 = state_46469;var statearr_46488_46532 = state_46469__$1;(statearr_46488_46532[(2)] = inst_46459);
(statearr_46488_46532[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (17)))
{var inst_46424 = (state_46469[(10)]);var inst_46433 = cljs.core.first.call(null,inst_46424);var inst_46434 = cljs.core.async.muxch_STAR_.call(null,inst_46433);var inst_46435 = cljs.core.async.close_BANG_.call(null,inst_46434);var inst_46436 = cljs.core.next.call(null,inst_46424);var inst_46410 = inst_46436;var inst_46411 = null;var inst_46412 = (0);var inst_46413 = (0);var state_46469__$1 = (function (){var statearr_46489 = state_46469;(statearr_46489[(12)] = inst_46410);
(statearr_46489[(13)] = inst_46413);
(statearr_46489[(14)] = inst_46435);
(statearr_46489[(15)] = inst_46411);
(statearr_46489[(16)] = inst_46412);
return statearr_46489;
})();var statearr_46490_46533 = state_46469__$1;(statearr_46490_46533[(2)] = null);
(statearr_46490_46533[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (3)))
{var inst_46467 = (state_46469[(2)]);var state_46469__$1 = state_46469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46469__$1,inst_46467);
} else
{if((state_val_46470 === (12)))
{var inst_46444 = (state_46469[(2)]);var state_46469__$1 = state_46469;var statearr_46491_46534 = state_46469__$1;(statearr_46491_46534[(2)] = inst_46444);
(statearr_46491_46534[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (2)))
{var state_46469__$1 = state_46469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46469__$1,(4),ch);
} else
{if((state_val_46470 === (23)))
{var state_46469__$1 = state_46469;var statearr_46492_46535 = state_46469__$1;(statearr_46492_46535[(2)] = null);
(statearr_46492_46535[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (19)))
{var inst_46400 = (state_46469[(8)]);var inst_46450 = (state_46469[(11)]);var inst_46452 = cljs.core.async.muxch_STAR_.call(null,inst_46450);var state_46469__$1 = state_46469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46469__$1,(22),inst_46452,inst_46400);
} else
{if((state_val_46470 === (11)))
{var inst_46410 = (state_46469[(12)]);var inst_46424 = (state_46469[(10)]);var inst_46424__$1 = cljs.core.seq.call(null,inst_46410);var state_46469__$1 = (function (){var statearr_46493 = state_46469;(statearr_46493[(10)] = inst_46424__$1);
return statearr_46493;
})();if(inst_46424__$1)
{var statearr_46494_46536 = state_46469__$1;(statearr_46494_46536[(1)] = (13));
} else
{var statearr_46495_46537 = state_46469__$1;(statearr_46495_46537[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (9)))
{var inst_46446 = (state_46469[(2)]);var state_46469__$1 = state_46469;var statearr_46496_46538 = state_46469__$1;(statearr_46496_46538[(2)] = inst_46446);
(statearr_46496_46538[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (5)))
{var inst_46407 = cljs.core.deref.call(null,mults);var inst_46408 = cljs.core.vals.call(null,inst_46407);var inst_46409 = cljs.core.seq.call(null,inst_46408);var inst_46410 = inst_46409;var inst_46411 = null;var inst_46412 = (0);var inst_46413 = (0);var state_46469__$1 = (function (){var statearr_46497 = state_46469;(statearr_46497[(12)] = inst_46410);
(statearr_46497[(13)] = inst_46413);
(statearr_46497[(15)] = inst_46411);
(statearr_46497[(16)] = inst_46412);
return statearr_46497;
})();var statearr_46498_46539 = state_46469__$1;(statearr_46498_46539[(2)] = null);
(statearr_46498_46539[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (14)))
{var state_46469__$1 = state_46469;var statearr_46502_46540 = state_46469__$1;(statearr_46502_46540[(2)] = null);
(statearr_46502_46540[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (16)))
{var inst_46424 = (state_46469[(10)]);var inst_46428 = cljs.core.chunk_first.call(null,inst_46424);var inst_46429 = cljs.core.chunk_rest.call(null,inst_46424);var inst_46430 = cljs.core.count.call(null,inst_46428);var inst_46410 = inst_46429;var inst_46411 = inst_46428;var inst_46412 = inst_46430;var inst_46413 = (0);var state_46469__$1 = (function (){var statearr_46503 = state_46469;(statearr_46503[(12)] = inst_46410);
(statearr_46503[(13)] = inst_46413);
(statearr_46503[(15)] = inst_46411);
(statearr_46503[(16)] = inst_46412);
return statearr_46503;
})();var statearr_46504_46541 = state_46469__$1;(statearr_46504_46541[(2)] = null);
(statearr_46504_46541[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (10)))
{var inst_46410 = (state_46469[(12)]);var inst_46413 = (state_46469[(13)]);var inst_46411 = (state_46469[(15)]);var inst_46412 = (state_46469[(16)]);var inst_46418 = cljs.core._nth.call(null,inst_46411,inst_46413);var inst_46419 = cljs.core.async.muxch_STAR_.call(null,inst_46418);var inst_46420 = cljs.core.async.close_BANG_.call(null,inst_46419);var inst_46421 = (inst_46413 + (1));var tmp46499 = inst_46410;var tmp46500 = inst_46411;var tmp46501 = inst_46412;var inst_46410__$1 = tmp46499;var inst_46411__$1 = tmp46500;var inst_46412__$1 = tmp46501;var inst_46413__$1 = inst_46421;var state_46469__$1 = (function (){var statearr_46505 = state_46469;(statearr_46505[(17)] = inst_46420);
(statearr_46505[(12)] = inst_46410__$1);
(statearr_46505[(13)] = inst_46413__$1);
(statearr_46505[(15)] = inst_46411__$1);
(statearr_46505[(16)] = inst_46412__$1);
return statearr_46505;
})();var statearr_46506_46542 = state_46469__$1;(statearr_46506_46542[(2)] = null);
(statearr_46506_46542[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (18)))
{var inst_46439 = (state_46469[(2)]);var state_46469__$1 = state_46469;var statearr_46507_46543 = state_46469__$1;(statearr_46507_46543[(2)] = inst_46439);
(statearr_46507_46543[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46470 === (8)))
{var inst_46413 = (state_46469[(13)]);var inst_46412 = (state_46469[(16)]);var inst_46415 = (inst_46413 < inst_46412);var inst_46416 = inst_46415;var state_46469__$1 = state_46469;if(cljs.core.truth_(inst_46416))
{var statearr_46508_46544 = state_46469__$1;(statearr_46508_46544[(1)] = (10));
} else
{var statearr_46509_46545 = state_46469__$1;(statearr_46509_46545[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___46517,mults,ensure_mult,p))
;return ((function (switch__10223__auto__,c__10238__auto___46517,mults,ensure_mult,p){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_46513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46513[(0)] = state_machine__10224__auto__);
(statearr_46513[(1)] = (1));
return statearr_46513;
});
var state_machine__10224__auto____1 = (function (state_46469){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_46469);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e46514){if((e46514 instanceof Object))
{var ex__10227__auto__ = e46514;var statearr_46515_46546 = state_46469;(statearr_46515_46546[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e46514;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46547 = state_46469;
state_46469 = G__46547;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_46469){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_46469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___46517,mults,ensure_mult,p))
})();var state__10240__auto__ = (function (){var statearr_46516 = f__10239__auto__.call(null);(statearr_46516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___46517);
return statearr_46516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___46517,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10238__auto___46684 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___46684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___46684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46654){var state_val_46655 = (state_46654[(1)]);if((state_val_46655 === (7)))
{var state_46654__$1 = state_46654;var statearr_46656_46685 = state_46654__$1;(statearr_46656_46685[(2)] = null);
(statearr_46656_46685[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (1)))
{var state_46654__$1 = state_46654;var statearr_46657_46686 = state_46654__$1;(statearr_46657_46686[(2)] = null);
(statearr_46657_46686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (4)))
{var inst_46618 = (state_46654[(7)]);var inst_46620 = (inst_46618 < cnt);var state_46654__$1 = state_46654;if(cljs.core.truth_(inst_46620))
{var statearr_46658_46687 = state_46654__$1;(statearr_46658_46687[(1)] = (6));
} else
{var statearr_46659_46688 = state_46654__$1;(statearr_46659_46688[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (15)))
{var inst_46650 = (state_46654[(2)]);var state_46654__$1 = state_46654;var statearr_46660_46689 = state_46654__$1;(statearr_46660_46689[(2)] = inst_46650);
(statearr_46660_46689[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (13)))
{var inst_46643 = cljs.core.async.close_BANG_.call(null,out);var state_46654__$1 = state_46654;var statearr_46661_46690 = state_46654__$1;(statearr_46661_46690[(2)] = inst_46643);
(statearr_46661_46690[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (6)))
{var state_46654__$1 = state_46654;var statearr_46662_46691 = state_46654__$1;(statearr_46662_46691[(2)] = null);
(statearr_46662_46691[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (3)))
{var inst_46652 = (state_46654[(2)]);var state_46654__$1 = state_46654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46654__$1,inst_46652);
} else
{if((state_val_46655 === (12)))
{var inst_46640 = (state_46654[(8)]);var inst_46640__$1 = (state_46654[(2)]);var inst_46641 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46640__$1);var state_46654__$1 = (function (){var statearr_46663 = state_46654;(statearr_46663[(8)] = inst_46640__$1);
return statearr_46663;
})();if(cljs.core.truth_(inst_46641))
{var statearr_46664_46692 = state_46654__$1;(statearr_46664_46692[(1)] = (13));
} else
{var statearr_46665_46693 = state_46654__$1;(statearr_46665_46693[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (2)))
{var inst_46617 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_46618 = (0);var state_46654__$1 = (function (){var statearr_46666 = state_46654;(statearr_46666[(7)] = inst_46618);
(statearr_46666[(9)] = inst_46617);
return statearr_46666;
})();var statearr_46667_46694 = state_46654__$1;(statearr_46667_46694[(2)] = null);
(statearr_46667_46694[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (11)))
{var inst_46618 = (state_46654[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46654,(10),Object,null,(9));var inst_46627 = chs__$1.call(null,inst_46618);var inst_46628 = done.call(null,inst_46618);var inst_46629 = cljs.core.async.take_BANG_.call(null,inst_46627,inst_46628);var state_46654__$1 = state_46654;var statearr_46668_46695 = state_46654__$1;(statearr_46668_46695[(2)] = inst_46629);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46654__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (9)))
{var inst_46618 = (state_46654[(7)]);var inst_46631 = (state_46654[(2)]);var inst_46632 = (inst_46618 + (1));var inst_46618__$1 = inst_46632;var state_46654__$1 = (function (){var statearr_46669 = state_46654;(statearr_46669[(10)] = inst_46631);
(statearr_46669[(7)] = inst_46618__$1);
return statearr_46669;
})();var statearr_46670_46696 = state_46654__$1;(statearr_46670_46696[(2)] = null);
(statearr_46670_46696[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (5)))
{var inst_46638 = (state_46654[(2)]);var state_46654__$1 = (function (){var statearr_46671 = state_46654;(statearr_46671[(11)] = inst_46638);
return statearr_46671;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46654__$1,(12),dchan);
} else
{if((state_val_46655 === (14)))
{var inst_46640 = (state_46654[(8)]);var inst_46645 = cljs.core.apply.call(null,f,inst_46640);var state_46654__$1 = state_46654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46654__$1,(16),out,inst_46645);
} else
{if((state_val_46655 === (16)))
{var inst_46647 = (state_46654[(2)]);var state_46654__$1 = (function (){var statearr_46672 = state_46654;(statearr_46672[(12)] = inst_46647);
return statearr_46672;
})();var statearr_46673_46697 = state_46654__$1;(statearr_46673_46697[(2)] = null);
(statearr_46673_46697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (10)))
{var inst_46622 = (state_46654[(2)]);var inst_46623 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_46654__$1 = (function (){var statearr_46674 = state_46654;(statearr_46674[(13)] = inst_46622);
return statearr_46674;
})();var statearr_46675_46698 = state_46654__$1;(statearr_46675_46698[(2)] = inst_46623);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46654__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46655 === (8)))
{var inst_46636 = (state_46654[(2)]);var state_46654__$1 = state_46654;var statearr_46676_46699 = state_46654__$1;(statearr_46676_46699[(2)] = inst_46636);
(statearr_46676_46699[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___46684,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10223__auto__,c__10238__auto___46684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_46680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46680[(0)] = state_machine__10224__auto__);
(statearr_46680[(1)] = (1));
return statearr_46680;
});
var state_machine__10224__auto____1 = (function (state_46654){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_46654);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e46681){if((e46681 instanceof Object))
{var ex__10227__auto__ = e46681;var statearr_46682_46700 = state_46654;(statearr_46682_46700[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e46681;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46701 = state_46654;
state_46654 = G__46701;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_46654){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_46654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___46684,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10240__auto__ = (function (){var statearr_46683 = f__10239__auto__.call(null);(statearr_46683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___46684);
return statearr_46683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___46684,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10238__auto___46809 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___46809,out){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___46809,out){
return (function (state_46785){var state_val_46786 = (state_46785[(1)]);if((state_val_46786 === (7)))
{var inst_46764 = (state_46785[(7)]);var inst_46765 = (state_46785[(8)]);var inst_46764__$1 = (state_46785[(2)]);var inst_46765__$1 = cljs.core.nth.call(null,inst_46764__$1,(0),null);var inst_46766 = cljs.core.nth.call(null,inst_46764__$1,(1),null);var inst_46767 = (inst_46765__$1 == null);var state_46785__$1 = (function (){var statearr_46787 = state_46785;(statearr_46787[(9)] = inst_46766);
(statearr_46787[(7)] = inst_46764__$1);
(statearr_46787[(8)] = inst_46765__$1);
return statearr_46787;
})();if(cljs.core.truth_(inst_46767))
{var statearr_46788_46810 = state_46785__$1;(statearr_46788_46810[(1)] = (8));
} else
{var statearr_46789_46811 = state_46785__$1;(statearr_46789_46811[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46786 === (1)))
{var inst_46756 = cljs.core.vec.call(null,chs);var inst_46757 = inst_46756;var state_46785__$1 = (function (){var statearr_46790 = state_46785;(statearr_46790[(10)] = inst_46757);
return statearr_46790;
})();var statearr_46791_46812 = state_46785__$1;(statearr_46791_46812[(2)] = null);
(statearr_46791_46812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46786 === (4)))
{var inst_46757 = (state_46785[(10)]);var state_46785__$1 = state_46785;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_46785__$1,(7),inst_46757);
} else
{if((state_val_46786 === (6)))
{var inst_46781 = (state_46785[(2)]);var state_46785__$1 = state_46785;var statearr_46792_46813 = state_46785__$1;(statearr_46792_46813[(2)] = inst_46781);
(statearr_46792_46813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46786 === (3)))
{var inst_46783 = (state_46785[(2)]);var state_46785__$1 = state_46785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46785__$1,inst_46783);
} else
{if((state_val_46786 === (2)))
{var inst_46757 = (state_46785[(10)]);var inst_46759 = cljs.core.count.call(null,inst_46757);var inst_46760 = (inst_46759 > (0));var state_46785__$1 = state_46785;if(cljs.core.truth_(inst_46760))
{var statearr_46794_46814 = state_46785__$1;(statearr_46794_46814[(1)] = (4));
} else
{var statearr_46795_46815 = state_46785__$1;(statearr_46795_46815[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46786 === (11)))
{var inst_46757 = (state_46785[(10)]);var inst_46774 = (state_46785[(2)]);var tmp46793 = inst_46757;var inst_46757__$1 = tmp46793;var state_46785__$1 = (function (){var statearr_46796 = state_46785;(statearr_46796[(11)] = inst_46774);
(statearr_46796[(10)] = inst_46757__$1);
return statearr_46796;
})();var statearr_46797_46816 = state_46785__$1;(statearr_46797_46816[(2)] = null);
(statearr_46797_46816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46786 === (9)))
{var inst_46765 = (state_46785[(8)]);var state_46785__$1 = state_46785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46785__$1,(11),out,inst_46765);
} else
{if((state_val_46786 === (5)))
{var inst_46779 = cljs.core.async.close_BANG_.call(null,out);var state_46785__$1 = state_46785;var statearr_46798_46817 = state_46785__$1;(statearr_46798_46817[(2)] = inst_46779);
(statearr_46798_46817[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46786 === (10)))
{var inst_46777 = (state_46785[(2)]);var state_46785__$1 = state_46785;var statearr_46799_46818 = state_46785__$1;(statearr_46799_46818[(2)] = inst_46777);
(statearr_46799_46818[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46786 === (8)))
{var inst_46766 = (state_46785[(9)]);var inst_46764 = (state_46785[(7)]);var inst_46757 = (state_46785[(10)]);var inst_46765 = (state_46785[(8)]);var inst_46769 = (function (){var c = inst_46766;var v = inst_46765;var vec__46762 = inst_46764;var cs = inst_46757;return ((function (c,v,vec__46762,cs,inst_46766,inst_46764,inst_46757,inst_46765,state_val_46786,c__10238__auto___46809,out){
return (function (p1__46702_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__46702_SHARP_);
});
;})(c,v,vec__46762,cs,inst_46766,inst_46764,inst_46757,inst_46765,state_val_46786,c__10238__auto___46809,out))
})();var inst_46770 = cljs.core.filterv.call(null,inst_46769,inst_46757);var inst_46757__$1 = inst_46770;var state_46785__$1 = (function (){var statearr_46800 = state_46785;(statearr_46800[(10)] = inst_46757__$1);
return statearr_46800;
})();var statearr_46801_46819 = state_46785__$1;(statearr_46801_46819[(2)] = null);
(statearr_46801_46819[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___46809,out))
;return ((function (switch__10223__auto__,c__10238__auto___46809,out){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_46805 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46805[(0)] = state_machine__10224__auto__);
(statearr_46805[(1)] = (1));
return statearr_46805;
});
var state_machine__10224__auto____1 = (function (state_46785){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_46785);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e46806){if((e46806 instanceof Object))
{var ex__10227__auto__ = e46806;var statearr_46807_46820 = state_46785;(statearr_46807_46820[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e46806;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46821 = state_46785;
state_46785 = G__46821;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_46785){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_46785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___46809,out))
})();var state__10240__auto__ = (function (){var statearr_46808 = f__10239__auto__.call(null);(statearr_46808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___46809);
return statearr_46808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___46809,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10238__auto___46914 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___46914,out){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___46914,out){
return (function (state_46891){var state_val_46892 = (state_46891[(1)]);if((state_val_46892 === (7)))
{var inst_46873 = (state_46891[(7)]);var inst_46873__$1 = (state_46891[(2)]);var inst_46874 = (inst_46873__$1 == null);var inst_46875 = cljs.core.not.call(null,inst_46874);var state_46891__$1 = (function (){var statearr_46893 = state_46891;(statearr_46893[(7)] = inst_46873__$1);
return statearr_46893;
})();if(inst_46875)
{var statearr_46894_46915 = state_46891__$1;(statearr_46894_46915[(1)] = (8));
} else
{var statearr_46895_46916 = state_46891__$1;(statearr_46895_46916[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46892 === (1)))
{var inst_46868 = (0);var state_46891__$1 = (function (){var statearr_46896 = state_46891;(statearr_46896[(8)] = inst_46868);
return statearr_46896;
})();var statearr_46897_46917 = state_46891__$1;(statearr_46897_46917[(2)] = null);
(statearr_46897_46917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46892 === (4)))
{var state_46891__$1 = state_46891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46891__$1,(7),ch);
} else
{if((state_val_46892 === (6)))
{var inst_46886 = (state_46891[(2)]);var state_46891__$1 = state_46891;var statearr_46898_46918 = state_46891__$1;(statearr_46898_46918[(2)] = inst_46886);
(statearr_46898_46918[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46892 === (3)))
{var inst_46888 = (state_46891[(2)]);var inst_46889 = cljs.core.async.close_BANG_.call(null,out);var state_46891__$1 = (function (){var statearr_46899 = state_46891;(statearr_46899[(9)] = inst_46888);
return statearr_46899;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46891__$1,inst_46889);
} else
{if((state_val_46892 === (2)))
{var inst_46868 = (state_46891[(8)]);var inst_46870 = (inst_46868 < n);var state_46891__$1 = state_46891;if(cljs.core.truth_(inst_46870))
{var statearr_46900_46919 = state_46891__$1;(statearr_46900_46919[(1)] = (4));
} else
{var statearr_46901_46920 = state_46891__$1;(statearr_46901_46920[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46892 === (11)))
{var inst_46868 = (state_46891[(8)]);var inst_46878 = (state_46891[(2)]);var inst_46879 = (inst_46868 + (1));var inst_46868__$1 = inst_46879;var state_46891__$1 = (function (){var statearr_46902 = state_46891;(statearr_46902[(10)] = inst_46878);
(statearr_46902[(8)] = inst_46868__$1);
return statearr_46902;
})();var statearr_46903_46921 = state_46891__$1;(statearr_46903_46921[(2)] = null);
(statearr_46903_46921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46892 === (9)))
{var state_46891__$1 = state_46891;var statearr_46904_46922 = state_46891__$1;(statearr_46904_46922[(2)] = null);
(statearr_46904_46922[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46892 === (5)))
{var state_46891__$1 = state_46891;var statearr_46905_46923 = state_46891__$1;(statearr_46905_46923[(2)] = null);
(statearr_46905_46923[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46892 === (10)))
{var inst_46883 = (state_46891[(2)]);var state_46891__$1 = state_46891;var statearr_46906_46924 = state_46891__$1;(statearr_46906_46924[(2)] = inst_46883);
(statearr_46906_46924[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_46892 === (8)))
{var inst_46873 = (state_46891[(7)]);var state_46891__$1 = state_46891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46891__$1,(11),out,inst_46873);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___46914,out))
;return ((function (switch__10223__auto__,c__10238__auto___46914,out){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_46910 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_46910[(0)] = state_machine__10224__auto__);
(statearr_46910[(1)] = (1));
return statearr_46910;
});
var state_machine__10224__auto____1 = (function (state_46891){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_46891);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e46911){if((e46911 instanceof Object))
{var ex__10227__auto__ = e46911;var statearr_46912_46925 = state_46891;(statearr_46912_46925[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e46911;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46926 = state_46891;
state_46891 = G__46926;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_46891){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_46891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___46914,out))
})();var state__10240__auto__ = (function (){var statearr_46913 = f__10239__auto__.call(null);(statearr_46913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___46914);
return statearr_46913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___46914,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t46934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46934 = (function (ch,f,map_LT_,meta46935){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46935 = meta46935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46934.cljs$lang$type = true;
cljs.core.async.t46934.cljs$lang$ctorStr = "cljs.core.async/t46934";
cljs.core.async.t46934.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t46934");
});
cljs.core.async.t46934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t46934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t46937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46937 = (function (fn1,_,meta46935,ch,f,map_LT_,meta46938){
this.fn1 = fn1;
this._ = _;
this.meta46935 = meta46935;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46938 = meta46938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46937.cljs$lang$type = true;
cljs.core.async.t46937.cljs$lang$ctorStr = "cljs.core.async/t46937";
cljs.core.async.t46937.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t46937");
});})(___$1))
;
cljs.core.async.t46937.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t46937.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t46937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__46927_SHARP_){return f1.call(null,(((p1__46927_SHARP_ == null))?null:self__.f.call(null,p1__46927_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t46937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46939){var self__ = this;
var _46939__$1 = this;return self__.meta46938;
});})(___$1))
;
cljs.core.async.t46937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46939,meta46938__$1){var self__ = this;
var _46939__$1 = this;return (new cljs.core.async.t46937(self__.fn1,self__._,self__.meta46935,self__.ch,self__.f,self__.map_LT_,meta46938__$1));
});})(___$1))
;
cljs.core.async.__GT_t46937 = ((function (___$1){
return (function __GT_t46937(fn1__$1,___$2,meta46935__$1,ch__$2,f__$2,map_LT___$2,meta46938){return (new cljs.core.async.t46937(fn1__$1,___$2,meta46935__$1,ch__$2,f__$2,map_LT___$2,meta46938));
});})(___$1))
;
}
return (new cljs.core.async.t46937(fn1,___$1,self__.meta46935,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3548__auto__ = ret;if(cljs.core.truth_(and__3548__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t46934.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t46934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46936){var self__ = this;
var _46936__$1 = this;return self__.meta46935;
});
cljs.core.async.t46934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46936,meta46935__$1){var self__ = this;
var _46936__$1 = this;return (new cljs.core.async.t46934(self__.ch,self__.f,self__.map_LT_,meta46935__$1));
});
cljs.core.async.__GT_t46934 = (function __GT_t46934(ch__$1,f__$1,map_LT___$1,meta46935){return (new cljs.core.async.t46934(ch__$1,f__$1,map_LT___$1,meta46935));
});
}
return (new cljs.core.async.t46934(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t46943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46943 = (function (ch,f,map_GT_,meta46944){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta46944 = meta46944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46943.cljs$lang$type = true;
cljs.core.async.t46943.cljs$lang$ctorStr = "cljs.core.async/t46943";
cljs.core.async.t46943.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t46943");
});
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46945){var self__ = this;
var _46945__$1 = this;return self__.meta46944;
});
cljs.core.async.t46943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46945,meta46944__$1){var self__ = this;
var _46945__$1 = this;return (new cljs.core.async.t46943(self__.ch,self__.f,self__.map_GT_,meta46944__$1));
});
cljs.core.async.__GT_t46943 = (function __GT_t46943(ch__$1,f__$1,map_GT___$1,meta46944){return (new cljs.core.async.t46943(ch__$1,f__$1,map_GT___$1,meta46944));
});
}
return (new cljs.core.async.t46943(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t46949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46949 = (function (ch,p,filter_GT_,meta46950){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta46950 = meta46950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46949.cljs$lang$type = true;
cljs.core.async.t46949.cljs$lang$ctorStr = "cljs.core.async/t46949";
cljs.core.async.t46949.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t46949");
});
cljs.core.async.t46949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t46949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t46949.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t46949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46951){var self__ = this;
var _46951__$1 = this;return self__.meta46950;
});
cljs.core.async.t46949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46951,meta46950__$1){var self__ = this;
var _46951__$1 = this;return (new cljs.core.async.t46949(self__.ch,self__.p,self__.filter_GT_,meta46950__$1));
});
cljs.core.async.__GT_t46949 = (function __GT_t46949(ch__$1,p__$1,filter_GT___$1,meta46950){return (new cljs.core.async.t46949(ch__$1,p__$1,filter_GT___$1,meta46950));
});
}
return (new cljs.core.async.t46949(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10238__auto___47034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___47034,out){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___47034,out){
return (function (state_47013){var state_val_47014 = (state_47013[(1)]);if((state_val_47014 === (7)))
{var inst_47009 = (state_47013[(2)]);var state_47013__$1 = state_47013;var statearr_47015_47035 = state_47013__$1;(statearr_47015_47035[(2)] = inst_47009);
(statearr_47015_47035[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47014 === (1)))
{var state_47013__$1 = state_47013;var statearr_47016_47036 = state_47013__$1;(statearr_47016_47036[(2)] = null);
(statearr_47016_47036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47014 === (4)))
{var inst_46995 = (state_47013[(7)]);var inst_46995__$1 = (state_47013[(2)]);var inst_46996 = (inst_46995__$1 == null);var state_47013__$1 = (function (){var statearr_47017 = state_47013;(statearr_47017[(7)] = inst_46995__$1);
return statearr_47017;
})();if(cljs.core.truth_(inst_46996))
{var statearr_47018_47037 = state_47013__$1;(statearr_47018_47037[(1)] = (5));
} else
{var statearr_47019_47038 = state_47013__$1;(statearr_47019_47038[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47014 === (6)))
{var inst_46995 = (state_47013[(7)]);var inst_47000 = p.call(null,inst_46995);var state_47013__$1 = state_47013;if(cljs.core.truth_(inst_47000))
{var statearr_47020_47039 = state_47013__$1;(statearr_47020_47039[(1)] = (8));
} else
{var statearr_47021_47040 = state_47013__$1;(statearr_47021_47040[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47014 === (3)))
{var inst_47011 = (state_47013[(2)]);var state_47013__$1 = state_47013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47013__$1,inst_47011);
} else
{if((state_val_47014 === (2)))
{var state_47013__$1 = state_47013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47013__$1,(4),ch);
} else
{if((state_val_47014 === (11)))
{var inst_47003 = (state_47013[(2)]);var state_47013__$1 = state_47013;var statearr_47022_47041 = state_47013__$1;(statearr_47022_47041[(2)] = inst_47003);
(statearr_47022_47041[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47014 === (9)))
{var state_47013__$1 = state_47013;var statearr_47023_47042 = state_47013__$1;(statearr_47023_47042[(2)] = null);
(statearr_47023_47042[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47014 === (5)))
{var inst_46998 = cljs.core.async.close_BANG_.call(null,out);var state_47013__$1 = state_47013;var statearr_47024_47043 = state_47013__$1;(statearr_47024_47043[(2)] = inst_46998);
(statearr_47024_47043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47014 === (10)))
{var inst_47006 = (state_47013[(2)]);var state_47013__$1 = (function (){var statearr_47025 = state_47013;(statearr_47025[(8)] = inst_47006);
return statearr_47025;
})();var statearr_47026_47044 = state_47013__$1;(statearr_47026_47044[(2)] = null);
(statearr_47026_47044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47014 === (8)))
{var inst_46995 = (state_47013[(7)]);var state_47013__$1 = state_47013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47013__$1,(11),out,inst_46995);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___47034,out))
;return ((function (switch__10223__auto__,c__10238__auto___47034,out){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_47030 = [null,null,null,null,null,null,null,null,null];(statearr_47030[(0)] = state_machine__10224__auto__);
(statearr_47030[(1)] = (1));
return statearr_47030;
});
var state_machine__10224__auto____1 = (function (state_47013){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_47013);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e47031){if((e47031 instanceof Object))
{var ex__10227__auto__ = e47031;var statearr_47032_47045 = state_47013;(statearr_47032_47045[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e47031;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47046 = state_47013;
state_47013 = G__47046;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_47013){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_47013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___47034,out))
})();var state__10240__auto__ = (function (){var statearr_47033 = f__10239__auto__.call(null);(statearr_47033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___47034);
return statearr_47033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___47034,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10238__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto__){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto__){
return (function (state_47212){var state_val_47213 = (state_47212[(1)]);if((state_val_47213 === (7)))
{var inst_47208 = (state_47212[(2)]);var state_47212__$1 = state_47212;var statearr_47214_47255 = state_47212__$1;(statearr_47214_47255[(2)] = inst_47208);
(statearr_47214_47255[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (20)))
{var inst_47178 = (state_47212[(7)]);var inst_47189 = (state_47212[(2)]);var inst_47190 = cljs.core.next.call(null,inst_47178);var inst_47164 = inst_47190;var inst_47165 = null;var inst_47166 = (0);var inst_47167 = (0);var state_47212__$1 = (function (){var statearr_47215 = state_47212;(statearr_47215[(8)] = inst_47165);
(statearr_47215[(9)] = inst_47167);
(statearr_47215[(10)] = inst_47166);
(statearr_47215[(11)] = inst_47189);
(statearr_47215[(12)] = inst_47164);
return statearr_47215;
})();var statearr_47216_47256 = state_47212__$1;(statearr_47216_47256[(2)] = null);
(statearr_47216_47256[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (1)))
{var state_47212__$1 = state_47212;var statearr_47217_47257 = state_47212__$1;(statearr_47217_47257[(2)] = null);
(statearr_47217_47257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (4)))
{var inst_47153 = (state_47212[(13)]);var inst_47153__$1 = (state_47212[(2)]);var inst_47154 = (inst_47153__$1 == null);var state_47212__$1 = (function (){var statearr_47218 = state_47212;(statearr_47218[(13)] = inst_47153__$1);
return statearr_47218;
})();if(cljs.core.truth_(inst_47154))
{var statearr_47219_47258 = state_47212__$1;(statearr_47219_47258[(1)] = (5));
} else
{var statearr_47220_47259 = state_47212__$1;(statearr_47220_47259[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (15)))
{var state_47212__$1 = state_47212;var statearr_47224_47260 = state_47212__$1;(statearr_47224_47260[(2)] = null);
(statearr_47224_47260[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (21)))
{var state_47212__$1 = state_47212;var statearr_47225_47261 = state_47212__$1;(statearr_47225_47261[(2)] = null);
(statearr_47225_47261[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (13)))
{var inst_47165 = (state_47212[(8)]);var inst_47167 = (state_47212[(9)]);var inst_47166 = (state_47212[(10)]);var inst_47164 = (state_47212[(12)]);var inst_47174 = (state_47212[(2)]);var inst_47175 = (inst_47167 + (1));var tmp47221 = inst_47165;var tmp47222 = inst_47166;var tmp47223 = inst_47164;var inst_47164__$1 = tmp47223;var inst_47165__$1 = tmp47221;var inst_47166__$1 = tmp47222;var inst_47167__$1 = inst_47175;var state_47212__$1 = (function (){var statearr_47226 = state_47212;(statearr_47226[(8)] = inst_47165__$1);
(statearr_47226[(9)] = inst_47167__$1);
(statearr_47226[(14)] = inst_47174);
(statearr_47226[(10)] = inst_47166__$1);
(statearr_47226[(12)] = inst_47164__$1);
return statearr_47226;
})();var statearr_47227_47262 = state_47212__$1;(statearr_47227_47262[(2)] = null);
(statearr_47227_47262[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (22)))
{var state_47212__$1 = state_47212;var statearr_47228_47263 = state_47212__$1;(statearr_47228_47263[(2)] = null);
(statearr_47228_47263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (6)))
{var inst_47153 = (state_47212[(13)]);var inst_47162 = f.call(null,inst_47153);var inst_47163 = cljs.core.seq.call(null,inst_47162);var inst_47164 = inst_47163;var inst_47165 = null;var inst_47166 = (0);var inst_47167 = (0);var state_47212__$1 = (function (){var statearr_47229 = state_47212;(statearr_47229[(8)] = inst_47165);
(statearr_47229[(9)] = inst_47167);
(statearr_47229[(10)] = inst_47166);
(statearr_47229[(12)] = inst_47164);
return statearr_47229;
})();var statearr_47230_47264 = state_47212__$1;(statearr_47230_47264[(2)] = null);
(statearr_47230_47264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (17)))
{var inst_47178 = (state_47212[(7)]);var inst_47182 = cljs.core.chunk_first.call(null,inst_47178);var inst_47183 = cljs.core.chunk_rest.call(null,inst_47178);var inst_47184 = cljs.core.count.call(null,inst_47182);var inst_47164 = inst_47183;var inst_47165 = inst_47182;var inst_47166 = inst_47184;var inst_47167 = (0);var state_47212__$1 = (function (){var statearr_47231 = state_47212;(statearr_47231[(8)] = inst_47165);
(statearr_47231[(9)] = inst_47167);
(statearr_47231[(10)] = inst_47166);
(statearr_47231[(12)] = inst_47164);
return statearr_47231;
})();var statearr_47232_47265 = state_47212__$1;(statearr_47232_47265[(2)] = null);
(statearr_47232_47265[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (3)))
{var inst_47210 = (state_47212[(2)]);var state_47212__$1 = state_47212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47212__$1,inst_47210);
} else
{if((state_val_47213 === (12)))
{var inst_47198 = (state_47212[(2)]);var state_47212__$1 = state_47212;var statearr_47233_47266 = state_47212__$1;(statearr_47233_47266[(2)] = inst_47198);
(statearr_47233_47266[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (2)))
{var state_47212__$1 = state_47212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47212__$1,(4),in$);
} else
{if((state_val_47213 === (23)))
{var inst_47206 = (state_47212[(2)]);var state_47212__$1 = state_47212;var statearr_47234_47267 = state_47212__$1;(statearr_47234_47267[(2)] = inst_47206);
(statearr_47234_47267[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (19)))
{var inst_47193 = (state_47212[(2)]);var state_47212__$1 = state_47212;var statearr_47235_47268 = state_47212__$1;(statearr_47235_47268[(2)] = inst_47193);
(statearr_47235_47268[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (11)))
{var inst_47164 = (state_47212[(12)]);var inst_47178 = (state_47212[(7)]);var inst_47178__$1 = cljs.core.seq.call(null,inst_47164);var state_47212__$1 = (function (){var statearr_47236 = state_47212;(statearr_47236[(7)] = inst_47178__$1);
return statearr_47236;
})();if(inst_47178__$1)
{var statearr_47237_47269 = state_47212__$1;(statearr_47237_47269[(1)] = (14));
} else
{var statearr_47238_47270 = state_47212__$1;(statearr_47238_47270[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (9)))
{var inst_47200 = (state_47212[(2)]);var inst_47201 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_47212__$1 = (function (){var statearr_47239 = state_47212;(statearr_47239[(15)] = inst_47200);
return statearr_47239;
})();if(cljs.core.truth_(inst_47201))
{var statearr_47240_47271 = state_47212__$1;(statearr_47240_47271[(1)] = (21));
} else
{var statearr_47241_47272 = state_47212__$1;(statearr_47241_47272[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (5)))
{var inst_47156 = cljs.core.async.close_BANG_.call(null,out);var state_47212__$1 = state_47212;var statearr_47242_47273 = state_47212__$1;(statearr_47242_47273[(2)] = inst_47156);
(statearr_47242_47273[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (14)))
{var inst_47178 = (state_47212[(7)]);var inst_47180 = cljs.core.chunked_seq_QMARK_.call(null,inst_47178);var state_47212__$1 = state_47212;if(inst_47180)
{var statearr_47243_47274 = state_47212__$1;(statearr_47243_47274[(1)] = (17));
} else
{var statearr_47244_47275 = state_47212__$1;(statearr_47244_47275[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (16)))
{var inst_47196 = (state_47212[(2)]);var state_47212__$1 = state_47212;var statearr_47245_47276 = state_47212__$1;(statearr_47245_47276[(2)] = inst_47196);
(statearr_47245_47276[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47213 === (10)))
{var inst_47165 = (state_47212[(8)]);var inst_47167 = (state_47212[(9)]);var inst_47172 = cljs.core._nth.call(null,inst_47165,inst_47167);var state_47212__$1 = state_47212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47212__$1,(13),out,inst_47172);
} else
{if((state_val_47213 === (18)))
{var inst_47178 = (state_47212[(7)]);var inst_47187 = cljs.core.first.call(null,inst_47178);var state_47212__$1 = state_47212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47212__$1,(20),out,inst_47187);
} else
{if((state_val_47213 === (8)))
{var inst_47167 = (state_47212[(9)]);var inst_47166 = (state_47212[(10)]);var inst_47169 = (inst_47167 < inst_47166);var inst_47170 = inst_47169;var state_47212__$1 = state_47212;if(cljs.core.truth_(inst_47170))
{var statearr_47246_47277 = state_47212__$1;(statearr_47246_47277[(1)] = (10));
} else
{var statearr_47247_47278 = state_47212__$1;(statearr_47247_47278[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto__))
;return ((function (switch__10223__auto__,c__10238__auto__){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_47251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47251[(0)] = state_machine__10224__auto__);
(statearr_47251[(1)] = (1));
return statearr_47251;
});
var state_machine__10224__auto____1 = (function (state_47212){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_47212);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e47252){if((e47252 instanceof Object))
{var ex__10227__auto__ = e47252;var statearr_47253_47279 = state_47212;(statearr_47253_47279[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47212);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e47252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47280 = state_47212;
state_47212 = G__47280;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_47212){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_47212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto__))
})();var state__10240__auto__ = (function (){var statearr_47254 = f__10239__auto__.call(null);(statearr_47254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto__);
return statearr_47254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto__))
);
return c__10238__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10238__auto___47377 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___47377,out){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___47377,out){
return (function (state_47352){var state_val_47353 = (state_47352[(1)]);if((state_val_47353 === (7)))
{var inst_47347 = (state_47352[(2)]);var state_47352__$1 = state_47352;var statearr_47354_47378 = state_47352__$1;(statearr_47354_47378[(2)] = inst_47347);
(statearr_47354_47378[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47353 === (1)))
{var inst_47329 = null;var state_47352__$1 = (function (){var statearr_47355 = state_47352;(statearr_47355[(7)] = inst_47329);
return statearr_47355;
})();var statearr_47356_47379 = state_47352__$1;(statearr_47356_47379[(2)] = null);
(statearr_47356_47379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47353 === (4)))
{var inst_47332 = (state_47352[(8)]);var inst_47332__$1 = (state_47352[(2)]);var inst_47333 = (inst_47332__$1 == null);var inst_47334 = cljs.core.not.call(null,inst_47333);var state_47352__$1 = (function (){var statearr_47357 = state_47352;(statearr_47357[(8)] = inst_47332__$1);
return statearr_47357;
})();if(inst_47334)
{var statearr_47358_47380 = state_47352__$1;(statearr_47358_47380[(1)] = (5));
} else
{var statearr_47359_47381 = state_47352__$1;(statearr_47359_47381[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47353 === (6)))
{var state_47352__$1 = state_47352;var statearr_47360_47382 = state_47352__$1;(statearr_47360_47382[(2)] = null);
(statearr_47360_47382[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47353 === (3)))
{var inst_47349 = (state_47352[(2)]);var inst_47350 = cljs.core.async.close_BANG_.call(null,out);var state_47352__$1 = (function (){var statearr_47361 = state_47352;(statearr_47361[(9)] = inst_47349);
return statearr_47361;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47352__$1,inst_47350);
} else
{if((state_val_47353 === (2)))
{var state_47352__$1 = state_47352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47352__$1,(4),ch);
} else
{if((state_val_47353 === (11)))
{var inst_47332 = (state_47352[(8)]);var inst_47341 = (state_47352[(2)]);var inst_47329 = inst_47332;var state_47352__$1 = (function (){var statearr_47362 = state_47352;(statearr_47362[(10)] = inst_47341);
(statearr_47362[(7)] = inst_47329);
return statearr_47362;
})();var statearr_47363_47383 = state_47352__$1;(statearr_47363_47383[(2)] = null);
(statearr_47363_47383[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47353 === (9)))
{var inst_47332 = (state_47352[(8)]);var state_47352__$1 = state_47352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47352__$1,(11),out,inst_47332);
} else
{if((state_val_47353 === (5)))
{var inst_47332 = (state_47352[(8)]);var inst_47329 = (state_47352[(7)]);var inst_47336 = cljs.core._EQ_.call(null,inst_47332,inst_47329);var state_47352__$1 = state_47352;if(inst_47336)
{var statearr_47365_47384 = state_47352__$1;(statearr_47365_47384[(1)] = (8));
} else
{var statearr_47366_47385 = state_47352__$1;(statearr_47366_47385[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47353 === (10)))
{var inst_47344 = (state_47352[(2)]);var state_47352__$1 = state_47352;var statearr_47367_47386 = state_47352__$1;(statearr_47367_47386[(2)] = inst_47344);
(statearr_47367_47386[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47353 === (8)))
{var inst_47329 = (state_47352[(7)]);var tmp47364 = inst_47329;var inst_47329__$1 = tmp47364;var state_47352__$1 = (function (){var statearr_47368 = state_47352;(statearr_47368[(7)] = inst_47329__$1);
return statearr_47368;
})();var statearr_47369_47387 = state_47352__$1;(statearr_47369_47387[(2)] = null);
(statearr_47369_47387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___47377,out))
;return ((function (switch__10223__auto__,c__10238__auto___47377,out){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_47373 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_47373[(0)] = state_machine__10224__auto__);
(statearr_47373[(1)] = (1));
return statearr_47373;
});
var state_machine__10224__auto____1 = (function (state_47352){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_47352);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e47374){if((e47374 instanceof Object))
{var ex__10227__auto__ = e47374;var statearr_47375_47388 = state_47352;(statearr_47375_47388[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e47374;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47389 = state_47352;
state_47352 = G__47389;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_47352){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_47352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___47377,out))
})();var state__10240__auto__ = (function (){var statearr_47376 = f__10239__auto__.call(null);(statearr_47376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___47377);
return statearr_47376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___47377,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10238__auto___47524 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___47524,out){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___47524,out){
return (function (state_47494){var state_val_47495 = (state_47494[(1)]);if((state_val_47495 === (7)))
{var inst_47490 = (state_47494[(2)]);var state_47494__$1 = state_47494;var statearr_47496_47525 = state_47494__$1;(statearr_47496_47525[(2)] = inst_47490);
(statearr_47496_47525[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (1)))
{var inst_47457 = (new Array(n));var inst_47458 = inst_47457;var inst_47459 = (0);var state_47494__$1 = (function (){var statearr_47497 = state_47494;(statearr_47497[(7)] = inst_47459);
(statearr_47497[(8)] = inst_47458);
return statearr_47497;
})();var statearr_47498_47526 = state_47494__$1;(statearr_47498_47526[(2)] = null);
(statearr_47498_47526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (4)))
{var inst_47462 = (state_47494[(9)]);var inst_47462__$1 = (state_47494[(2)]);var inst_47463 = (inst_47462__$1 == null);var inst_47464 = cljs.core.not.call(null,inst_47463);var state_47494__$1 = (function (){var statearr_47499 = state_47494;(statearr_47499[(9)] = inst_47462__$1);
return statearr_47499;
})();if(inst_47464)
{var statearr_47500_47527 = state_47494__$1;(statearr_47500_47527[(1)] = (5));
} else
{var statearr_47501_47528 = state_47494__$1;(statearr_47501_47528[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (15)))
{var inst_47484 = (state_47494[(2)]);var state_47494__$1 = state_47494;var statearr_47502_47529 = state_47494__$1;(statearr_47502_47529[(2)] = inst_47484);
(statearr_47502_47529[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (13)))
{var state_47494__$1 = state_47494;var statearr_47503_47530 = state_47494__$1;(statearr_47503_47530[(2)] = null);
(statearr_47503_47530[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (6)))
{var inst_47459 = (state_47494[(7)]);var inst_47480 = (inst_47459 > (0));var state_47494__$1 = state_47494;if(cljs.core.truth_(inst_47480))
{var statearr_47504_47531 = state_47494__$1;(statearr_47504_47531[(1)] = (12));
} else
{var statearr_47505_47532 = state_47494__$1;(statearr_47505_47532[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (3)))
{var inst_47492 = (state_47494[(2)]);var state_47494__$1 = state_47494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47494__$1,inst_47492);
} else
{if((state_val_47495 === (12)))
{var inst_47458 = (state_47494[(8)]);var inst_47482 = cljs.core.vec.call(null,inst_47458);var state_47494__$1 = state_47494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47494__$1,(15),out,inst_47482);
} else
{if((state_val_47495 === (2)))
{var state_47494__$1 = state_47494;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47494__$1,(4),ch);
} else
{if((state_val_47495 === (11)))
{var inst_47474 = (state_47494[(2)]);var inst_47475 = (new Array(n));var inst_47458 = inst_47475;var inst_47459 = (0);var state_47494__$1 = (function (){var statearr_47506 = state_47494;(statearr_47506[(10)] = inst_47474);
(statearr_47506[(7)] = inst_47459);
(statearr_47506[(8)] = inst_47458);
return statearr_47506;
})();var statearr_47507_47533 = state_47494__$1;(statearr_47507_47533[(2)] = null);
(statearr_47507_47533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (9)))
{var inst_47458 = (state_47494[(8)]);var inst_47472 = cljs.core.vec.call(null,inst_47458);var state_47494__$1 = state_47494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47494__$1,(11),out,inst_47472);
} else
{if((state_val_47495 === (5)))
{var inst_47459 = (state_47494[(7)]);var inst_47458 = (state_47494[(8)]);var inst_47467 = (state_47494[(11)]);var inst_47462 = (state_47494[(9)]);var inst_47466 = (inst_47458[inst_47459] = inst_47462);var inst_47467__$1 = (inst_47459 + (1));var inst_47468 = (inst_47467__$1 < n);var state_47494__$1 = (function (){var statearr_47508 = state_47494;(statearr_47508[(11)] = inst_47467__$1);
(statearr_47508[(12)] = inst_47466);
return statearr_47508;
})();if(cljs.core.truth_(inst_47468))
{var statearr_47509_47534 = state_47494__$1;(statearr_47509_47534[(1)] = (8));
} else
{var statearr_47510_47535 = state_47494__$1;(statearr_47510_47535[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (14)))
{var inst_47487 = (state_47494[(2)]);var inst_47488 = cljs.core.async.close_BANG_.call(null,out);var state_47494__$1 = (function (){var statearr_47512 = state_47494;(statearr_47512[(13)] = inst_47487);
return statearr_47512;
})();var statearr_47513_47536 = state_47494__$1;(statearr_47513_47536[(2)] = inst_47488);
(statearr_47513_47536[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (10)))
{var inst_47478 = (state_47494[(2)]);var state_47494__$1 = state_47494;var statearr_47514_47537 = state_47494__$1;(statearr_47514_47537[(2)] = inst_47478);
(statearr_47514_47537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47495 === (8)))
{var inst_47458 = (state_47494[(8)]);var inst_47467 = (state_47494[(11)]);var tmp47511 = inst_47458;var inst_47458__$1 = tmp47511;var inst_47459 = inst_47467;var state_47494__$1 = (function (){var statearr_47515 = state_47494;(statearr_47515[(7)] = inst_47459);
(statearr_47515[(8)] = inst_47458__$1);
return statearr_47515;
})();var statearr_47516_47538 = state_47494__$1;(statearr_47516_47538[(2)] = null);
(statearr_47516_47538[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___47524,out))
;return ((function (switch__10223__auto__,c__10238__auto___47524,out){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_47520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47520[(0)] = state_machine__10224__auto__);
(statearr_47520[(1)] = (1));
return statearr_47520;
});
var state_machine__10224__auto____1 = (function (state_47494){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_47494);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e47521){if((e47521 instanceof Object))
{var ex__10227__auto__ = e47521;var statearr_47522_47539 = state_47494;(statearr_47522_47539[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47494);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e47521;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47540 = state_47494;
state_47494 = G__47540;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_47494){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_47494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___47524,out))
})();var state__10240__auto__ = (function (){var statearr_47523 = f__10239__auto__.call(null);(statearr_47523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___47524);
return statearr_47523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___47524,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10238__auto___47683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___47683,out){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___47683,out){
return (function (state_47653){var state_val_47654 = (state_47653[(1)]);if((state_val_47654 === (7)))
{var inst_47649 = (state_47653[(2)]);var state_47653__$1 = state_47653;var statearr_47655_47684 = state_47653__$1;(statearr_47655_47684[(2)] = inst_47649);
(statearr_47655_47684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (1)))
{var inst_47612 = [];var inst_47613 = inst_47612;var inst_47614 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_47653__$1 = (function (){var statearr_47656 = state_47653;(statearr_47656[(7)] = inst_47614);
(statearr_47656[(8)] = inst_47613);
return statearr_47656;
})();var statearr_47657_47685 = state_47653__$1;(statearr_47657_47685[(2)] = null);
(statearr_47657_47685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (4)))
{var inst_47617 = (state_47653[(9)]);var inst_47617__$1 = (state_47653[(2)]);var inst_47618 = (inst_47617__$1 == null);var inst_47619 = cljs.core.not.call(null,inst_47618);var state_47653__$1 = (function (){var statearr_47658 = state_47653;(statearr_47658[(9)] = inst_47617__$1);
return statearr_47658;
})();if(inst_47619)
{var statearr_47659_47686 = state_47653__$1;(statearr_47659_47686[(1)] = (5));
} else
{var statearr_47660_47687 = state_47653__$1;(statearr_47660_47687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (15)))
{var inst_47643 = (state_47653[(2)]);var state_47653__$1 = state_47653;var statearr_47661_47688 = state_47653__$1;(statearr_47661_47688[(2)] = inst_47643);
(statearr_47661_47688[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (13)))
{var state_47653__$1 = state_47653;var statearr_47662_47689 = state_47653__$1;(statearr_47662_47689[(2)] = null);
(statearr_47662_47689[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (6)))
{var inst_47613 = (state_47653[(8)]);var inst_47638 = inst_47613.length;var inst_47639 = (inst_47638 > (0));var state_47653__$1 = state_47653;if(cljs.core.truth_(inst_47639))
{var statearr_47663_47690 = state_47653__$1;(statearr_47663_47690[(1)] = (12));
} else
{var statearr_47664_47691 = state_47653__$1;(statearr_47664_47691[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (3)))
{var inst_47651 = (state_47653[(2)]);var state_47653__$1 = state_47653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47653__$1,inst_47651);
} else
{if((state_val_47654 === (12)))
{var inst_47613 = (state_47653[(8)]);var inst_47641 = cljs.core.vec.call(null,inst_47613);var state_47653__$1 = state_47653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47653__$1,(15),out,inst_47641);
} else
{if((state_val_47654 === (2)))
{var state_47653__$1 = state_47653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47653__$1,(4),ch);
} else
{if((state_val_47654 === (11)))
{var inst_47617 = (state_47653[(9)]);var inst_47621 = (state_47653[(10)]);var inst_47631 = (state_47653[(2)]);var inst_47632 = [];var inst_47633 = inst_47632.push(inst_47617);var inst_47613 = inst_47632;var inst_47614 = inst_47621;var state_47653__$1 = (function (){var statearr_47665 = state_47653;(statearr_47665[(11)] = inst_47631);
(statearr_47665[(7)] = inst_47614);
(statearr_47665[(8)] = inst_47613);
(statearr_47665[(12)] = inst_47633);
return statearr_47665;
})();var statearr_47666_47692 = state_47653__$1;(statearr_47666_47692[(2)] = null);
(statearr_47666_47692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (9)))
{var inst_47613 = (state_47653[(8)]);var inst_47629 = cljs.core.vec.call(null,inst_47613);var state_47653__$1 = state_47653;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47653__$1,(11),out,inst_47629);
} else
{if((state_val_47654 === (5)))
{var inst_47614 = (state_47653[(7)]);var inst_47617 = (state_47653[(9)]);var inst_47621 = (state_47653[(10)]);var inst_47621__$1 = f.call(null,inst_47617);var inst_47622 = cljs.core._EQ_.call(null,inst_47621__$1,inst_47614);var inst_47623 = cljs.core.keyword_identical_QMARK_.call(null,inst_47614,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_47624 = (inst_47622) || (inst_47623);var state_47653__$1 = (function (){var statearr_47667 = state_47653;(statearr_47667[(10)] = inst_47621__$1);
return statearr_47667;
})();if(cljs.core.truth_(inst_47624))
{var statearr_47668_47693 = state_47653__$1;(statearr_47668_47693[(1)] = (8));
} else
{var statearr_47669_47694 = state_47653__$1;(statearr_47669_47694[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (14)))
{var inst_47646 = (state_47653[(2)]);var inst_47647 = cljs.core.async.close_BANG_.call(null,out);var state_47653__$1 = (function (){var statearr_47671 = state_47653;(statearr_47671[(13)] = inst_47646);
return statearr_47671;
})();var statearr_47672_47695 = state_47653__$1;(statearr_47672_47695[(2)] = inst_47647);
(statearr_47672_47695[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (10)))
{var inst_47636 = (state_47653[(2)]);var state_47653__$1 = state_47653;var statearr_47673_47696 = state_47653__$1;(statearr_47673_47696[(2)] = inst_47636);
(statearr_47673_47696[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47654 === (8)))
{var inst_47617 = (state_47653[(9)]);var inst_47613 = (state_47653[(8)]);var inst_47621 = (state_47653[(10)]);var inst_47626 = inst_47613.push(inst_47617);var tmp47670 = inst_47613;var inst_47613__$1 = tmp47670;var inst_47614 = inst_47621;var state_47653__$1 = (function (){var statearr_47674 = state_47653;(statearr_47674[(7)] = inst_47614);
(statearr_47674[(8)] = inst_47613__$1);
(statearr_47674[(14)] = inst_47626);
return statearr_47674;
})();var statearr_47675_47697 = state_47653__$1;(statearr_47675_47697[(2)] = null);
(statearr_47675_47697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10238__auto___47683,out))
;return ((function (switch__10223__auto__,c__10238__auto___47683,out){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_47679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47679[(0)] = state_machine__10224__auto__);
(statearr_47679[(1)] = (1));
return statearr_47679;
});
var state_machine__10224__auto____1 = (function (state_47653){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_47653);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e47680){if((e47680 instanceof Object))
{var ex__10227__auto__ = e47680;var statearr_47681_47698 = state_47653;(statearr_47681_47698[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e47680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47699 = state_47653;
state_47653 = G__47699;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_47653){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_47653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___47683,out))
})();var state__10240__auto__ = (function (){var statearr_47682 = f__10239__auto__.call(null);(statearr_47682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___47683);
return statearr_47682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___47683,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map