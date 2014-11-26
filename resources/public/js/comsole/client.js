// Compiled by ClojureScript 0.0-2322
goog.provide('comsole.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('bidi.bidi');
goog.require('comsole.views');
goog.require('comsole.views');
goog.require('sablono.core');
goog.require('bidi.bidi');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('comsole.routes');
goog.require('comsole.routes');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('ajax.core');
goog.require('om.core');
goog.require('om.core');
goog.require('pushy.core');
goog.require('pushy.core');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
comsole.client.event_bus = cljs.core.async.chan.call(null);
comsole.client.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?type","?type",-1287409101,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)),new cljs.core.Symbol(null,"?doc","?doc",-2048959561,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","doc","db/doc",1913350069),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"?doc","?doc",-2048959561,null)], null)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"time-machine?","time-machine?",1536366157),false,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app","docs","app/docs",-1975755543)], null));
comsole.client.dispatch = (function dispatch(match){return cljs.core.async.put_BANG_.call(null,comsole.client.event_bus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),match], null));
});
pushy.core.push_state_BANG_.call(null,comsole.client.dispatch,cljs.core.partial.call(null,bidi.bidi.match_route,comsole.routes.routes),cljs.core.identity);
comsole.client.controller = (function (){var method_table__4426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4430__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("controller",cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4430__auto__,method_table__4426__auto__,prefer_table__4427__auto__,method_cache__4428__auto__,cached_hierarchy__4429__auto__));
})();
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword(null,"route","route",329891309),(function (p__29613){var vec__29614 = p__29613;var _ = cljs.core.nth.call(null,vec__29614,(0),null);var match = cljs.core.nth.call(null,vec__29614,(1),null);return cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match));
}));
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword("query","run","query/run",1843547515),(function (_){var c__10238__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto__){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto__){
return (function (state_29653){var state_val_29654 = (state_29653[(1)]);if((state_val_29654 === (2)))
{var inst_29632 = (state_29653[(7)]);var inst_29644 = (state_29653[(2)]);var inst_29645 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29644);var inst_29646 = cljs.core.print.call(null,inst_29632);var inst_29647 = cljs.core.println.call(null,"Done");var inst_29648 = cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_29645);var inst_29649 = cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);var inst_29650 = cljs.core.deref.call(null,comsole.client.state);var inst_29651 = cljs.core.print.call(null,inst_29650);var state_29653__$1 = (function (){var statearr_29655 = state_29653;(statearr_29655[(8)] = inst_29649);
(statearr_29655[(9)] = inst_29648);
(statearr_29655[(10)] = inst_29646);
(statearr_29655[(11)] = inst_29647);
return statearr_29655;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29653__$1,inst_29651);
} else
{if((state_val_29654 === (1)))
{var inst_29632 = (state_29653[(7)]);var inst_29615 = cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);var inst_29616 = cljs.core.print.call(null,"Here");var inst_29617 = [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"where","where",-2044795965)];var inst_29618 = cljs.core.deref.call(null,comsole.client.state);var inst_29619 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29620 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"find","find",496279456)];var inst_29621 = (new cljs.core.PersistentVector(null,2,(5),inst_29619,inst_29620,null));var inst_29622 = cljs.core.get_in.call(null,inst_29618,inst_29621);var inst_29623 = cljs.core.vec.call(null,inst_29622);var inst_29624 = (function (){return ((function (inst_29632,inst_29615,inst_29616,inst_29617,inst_29618,inst_29619,inst_29620,inst_29621,inst_29622,inst_29623,state_val_29654,c__10238__auto__){
return (function (row){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(row)], null);
});
;})(inst_29632,inst_29615,inst_29616,inst_29617,inst_29618,inst_29619,inst_29620,inst_29621,inst_29622,inst_29623,state_val_29654,c__10238__auto__))
})();var inst_29625 = cljs.core.deref.call(null,comsole.client.state);var inst_29626 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29627 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"where","where",-2044795965)];var inst_29628 = (new cljs.core.PersistentVector(null,2,(5),inst_29626,inst_29627,null));var inst_29629 = cljs.core.get_in.call(null,inst_29625,inst_29628);var inst_29630 = cljs.core.mapv.call(null,inst_29624,inst_29629);var inst_29631 = [inst_29623,inst_29630];var inst_29632__$1 = cljs.core.PersistentHashMap.fromArrays(inst_29617,inst_29631);var inst_29633 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];var inst_29634 = ["accept"];var inst_29635 = ["application/edn"];var inst_29636 = cljs.core.PersistentHashMap.fromArrays(inst_29634,inst_29635);var inst_29637 = [new cljs.core.Keyword(null,"query","query",-1288509510)];var inst_29638 = [inst_29632__$1];var inst_29639 = cljs.core.PersistentHashMap.fromArrays(inst_29637,inst_29638);var inst_29640 = [inst_29636,inst_29639];var inst_29641 = cljs.core.PersistentHashMap.fromArrays(inst_29633,inst_29640);var inst_29642 = cljs_http.client.post.call(null,"http://localhost:3000/query",inst_29641);var state_29653__$1 = (function (){var statearr_29656 = state_29653;(statearr_29656[(12)] = inst_29615);
(statearr_29656[(7)] = inst_29632__$1);
(statearr_29656[(13)] = inst_29616);
return statearr_29656;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29653__$1,(2),inst_29642);
} else
{return null;
}
}
});})(c__10238__auto__))
;return ((function (switch__10223__auto__,c__10238__auto__){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_29660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29660[(0)] = state_machine__10224__auto__);
(statearr_29660[(1)] = (1));
return statearr_29660;
});
var state_machine__10224__auto____1 = (function (state_29653){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_29653);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e29661){if((e29661 instanceof Object))
{var ex__10227__auto__ = e29661;var statearr_29662_29664 = state_29653;(statearr_29662_29664[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29661;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29665 = state_29653;
state_29653 = G__29665;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_29653){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_29653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto__))
})();var state__10240__auto__ = (function (){var statearr_29663 = f__10239__auto__.call(null);(statearr_29663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto__);
return statearr_29663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto__))
);
return c__10238__auto__;
}));
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword("docs","fetch","docs/fetch",-1093602441),(function (_){var c__10238__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto__){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto__){
return (function (state_29678){var state_val_29679 = (state_29678[(1)]);if((state_val_29679 === (2)))
{var inst_29674 = (state_29678[(2)]);var inst_29675 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29674);var inst_29676 = cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.assoc,new cljs.core.Keyword(null,"docs","docs",-1974280502),inst_29675);var state_29678__$1 = state_29678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29678__$1,inst_29676);
} else
{if((state_val_29679 === (1)))
{var inst_29666 = [new cljs.core.Keyword(null,"headers","headers",-835030129)];var inst_29667 = ["accept"];var inst_29668 = ["application/edn"];var inst_29669 = cljs.core.PersistentHashMap.fromArrays(inst_29667,inst_29668);var inst_29670 = [inst_29669];var inst_29671 = cljs.core.PersistentHashMap.fromArrays(inst_29666,inst_29670);var inst_29672 = cljs_http.client.get.call(null,"http://localhost:3000/idents",inst_29671);var state_29678__$1 = state_29678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29678__$1,(2),inst_29672);
} else
{return null;
}
}
});})(c__10238__auto__))
;return ((function (switch__10223__auto__,c__10238__auto__){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_29683 = [null,null,null,null,null,null,null];(statearr_29683[(0)] = state_machine__10224__auto__);
(statearr_29683[(1)] = (1));
return statearr_29683;
});
var state_machine__10224__auto____1 = (function (state_29678){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_29678);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e29684){if((e29684 instanceof Object))
{var ex__10227__auto__ = e29684;var statearr_29685_29687 = state_29678;(statearr_29685_29687[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29678);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29684;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29688 = state_29678;
state_29678 = G__29688;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_29678){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_29678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto__))
})();var state__10240__auto__ = (function (){var statearr_29686 = f__10239__auto__.call(null);(statearr_29686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto__);
return statearr_29686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto__))
);
return c__10238__auto__;
}));
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword("builder","add-row","builder/add-row",469458446),(function (_){var c__10238__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto__){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto__){
return (function (state_29697){var state_val_29698 = (state_29697[(1)]);if((state_val_29698 === (1)))
{var inst_29689 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29690 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"where","where",-2044795965)];var inst_29691 = (new cljs.core.PersistentVector(null,2,(5),inst_29689,inst_29690,null));var inst_29692 = [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)];var inst_29693 = [null,null,null];var inst_29694 = cljs.core.PersistentHashMap.fromArrays(inst_29692,inst_29693);var inst_29695 = cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.update_in,inst_29691,cljs.core.conj,inst_29694);var state_29697__$1 = state_29697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29697__$1,inst_29695);
} else
{return null;
}
});})(c__10238__auto__))
;return ((function (switch__10223__auto__,c__10238__auto__){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_29702 = [null,null,null,null,null,null,null];(statearr_29702[(0)] = state_machine__10224__auto__);
(statearr_29702[(1)] = (1));
return statearr_29702;
});
var state_machine__10224__auto____1 = (function (state_29697){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_29697);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e29703){if((e29703 instanceof Object))
{var ex__10227__auto__ = e29703;var statearr_29704_29706 = state_29697;(statearr_29704_29706[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29697);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29703;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29707 = state_29697;
state_29697 = G__29707;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_29697){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_29697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto__))
})();var state__10240__auto__ = (function (){var statearr_29705 = f__10239__auto__.call(null);(statearr_29705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto__);
return statearr_29705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto__))
);
return c__10238__auto__;
}));
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword("builder","del-row","builder/del-row",-958250986),(function (p__29708){var vec__29709 = p__29708;var _ = cljs.core.nth.call(null,vec__29709,(0),null);var row = cljs.core.nth.call(null,vec__29709,(1),null);return cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"where","where",-2044795965)], null),((function (vec__29709,_,row){
return (function (x){return cljs.core.remove.call(null,((function (vec__29709,_,row){
return (function (p__29710){var vec__29711 = p__29710;var i = cljs.core.nth.call(null,vec__29711,(0),null);var m = cljs.core.nth.call(null,vec__29711,(1),null);return cljs.core._EQ_.call(null,row,i);
});})(vec__29709,_,row))
,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.get_in.call(null,cljs.core.deref.call(null,comsole.client.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"where","where",-2044795965)], null))));
});})(vec__29709,_,row))
);
}));
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword("builder","edit-cell","builder/edit-cell",704183504),(function (p__29712){var vec__29713 = p__29712;var _ = cljs.core.nth.call(null,vec__29713,(0),null);var i = cljs.core.nth.call(null,vec__29713,(1),null);var j = cljs.core.nth.call(null,vec__29713,(2),null);var v = cljs.core.nth.call(null,vec__29713,(3),null);return cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"where","where",-2044795965),i,j], null),(((v == null))?null:cljs.reader.read_string.call(null,v)));
}));
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword("builder","find-add","builder/find-add",-1984785757),(function (p__29714){var vec__29715 = p__29714;var _ = cljs.core.nth.call(null,vec__29715,(0),null);var find = cljs.core.nth.call(null,vec__29715,(1),null);return cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"find","find",496279456)], null),cljs.core.conj,cljs.reader.read_string.call(null,find));
}));
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword("builder","find-remove","builder/find-remove",1318827880),(function (p__29716){var vec__29717 = p__29716;var _ = cljs.core.nth.call(null,vec__29717,(0),null);var find = cljs.core.nth.call(null,vec__29717,(1),null);return cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"find","find",496279456)], null),((function (vec__29717,_,find){
return (function (x){return cljs.core.reduce.call(null,((function (vec__29717,_,find){
return (function (c,w){if(cljs.core.not_EQ_.call(null,w,find))
{return cljs.core.conj.call(null,c,w);
} else
{return c;
}
});})(vec__29717,_,find))
,cljs.core.PersistentVector.EMPTY,x);
});})(vec__29717,_,find))
);
}));
cljs.core._add_method.call(null,comsole.client.controller,new cljs.core.Keyword("nav","toggle","nav/toggle",1291734225),(function (p__29718){var vec__29719 = p__29718;var _ = cljs.core.nth.call(null,vec__29719,(0),null);var nav = cljs.core.nth.call(null,vec__29719,(1),null);return cljs.core.swap_BANG_.call(null,comsole.client.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),nav], null),cljs.core.not);
}));
var c__10238__auto___29742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10238__auto___29742){
return (function (){var f__10239__auto__ = (function (){var switch__10223__auto__ = ((function (c__10238__auto___29742){
return (function (state_29730){var state_val_29731 = (state_29730[(1)]);if((state_val_29731 === (4)))
{var inst_29722 = (state_29730[(2)]);var inst_29723 = cljs.core.pr_str.call(null,inst_29722);var inst_29724 = cljs.core.println.call(null,inst_29723);var inst_29725 = comsole.client.controller.call(null,inst_29722);var state_29730__$1 = (function (){var statearr_29732 = state_29730;(statearr_29732[(7)] = inst_29725);
(statearr_29732[(8)] = inst_29724);
return statearr_29732;
})();var statearr_29733_29743 = state_29730__$1;(statearr_29733_29743[(2)] = null);
(statearr_29733_29743[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29731 === (3)))
{var inst_29728 = (state_29730[(2)]);var state_29730__$1 = state_29730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29730__$1,inst_29728);
} else
{if((state_val_29731 === (2)))
{var state_29730__$1 = state_29730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(4),comsole.client.event_bus);
} else
{if((state_val_29731 === (1)))
{var state_29730__$1 = state_29730;var statearr_29734_29744 = state_29730__$1;(statearr_29734_29744[(2)] = null);
(statearr_29734_29744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__10238__auto___29742))
;return ((function (switch__10223__auto__,c__10238__auto___29742){
return (function() {
var state_machine__10224__auto__ = null;
var state_machine__10224__auto____0 = (function (){var statearr_29738 = [null,null,null,null,null,null,null,null,null];(statearr_29738[(0)] = state_machine__10224__auto__);
(statearr_29738[(1)] = (1));
return statearr_29738;
});
var state_machine__10224__auto____1 = (function (state_29730){while(true){
var ret_value__10225__auto__ = (function (){try{while(true){
var result__10226__auto__ = switch__10223__auto__.call(null,state_29730);if(cljs.core.keyword_identical_QMARK_.call(null,result__10226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10226__auto__;
}
break;
}
}catch (e29739){if((e29739 instanceof Object))
{var ex__10227__auto__ = e29739;var statearr_29740_29745 = state_29730;(statearr_29740_29745[(5)] = ex__10227__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29739;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29746 = state_29730;
state_29730 = G__29746;
continue;
}
} else
{return ret_value__10225__auto__;
}
break;
}
});
state_machine__10224__auto__ = function(state_29730){
switch(arguments.length){
case 0:
return state_machine__10224__auto____0.call(this);
case 1:
return state_machine__10224__auto____1.call(this,state_29730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10224__auto____0;
state_machine__10224__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10224__auto____1;
return state_machine__10224__auto__;
})()
;})(switch__10223__auto__,c__10238__auto___29742))
})();var state__10240__auto__ = (function (){var statearr_29741 = f__10239__auto__.call(null);(statearr_29741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10238__auto___29742);
return statearr_29741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10240__auto__);
});})(c__10238__auto___29742))
);
om.core.root.call(null,comsole.views.widget,comsole.client.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control","control",1892578036),comsole.client.event_bus], null)], null));
cljs.core.async.put_BANG_.call(null,comsole.client.event_bus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("docs","fetch","docs/fetch",-1093602441)], null));

//# sourceMappingURL=client.js.map