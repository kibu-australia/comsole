// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__7234__7235__auto__){var G__43577 = p1__7234__7235__auto__;if(G__43577)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__43577.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__43577.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__43577);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__43577);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__43578_SHARP_){return (cljs.core.val.call(null,p1__43578_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__43580 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__43580,(0),null);var v = cljs.core.nth.call(null,vec__43580,(1),null);var p = vec__43580;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___43586 = schema.utils.use_fn_validation;var output_schema43581_43587 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema43582_43588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker43583_43589 = schema.core.checker.call(null,input_schema43582_43588);var output_checker43584_43590 = schema.core.checker.call(null,output_schema43581_43587);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___43586,output_schema43581_43587,input_schema43582_43588,input_checker43583_43589,output_checker43584_43590){
return (function unwrap_schema_form_key(G__43585){var validate__7204__auto__ = ufv___43586.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___43591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43585], null);var temp__4219__auto___43592 = input_checker43583_43589.call(null,args__7205__auto___43591);if(cljs.core.truth_(temp__4219__auto___43592))
{var error__7206__auto___43593 = temp__4219__auto___43592;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7206__auto___43593)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43582_43588,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___43591,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43593], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var k = G__43585;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___43594 = output_checker43584_43590.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___43594))
{var error__7206__auto___43595 = temp__4219__auto___43594;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7206__auto___43595)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43581_43587,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43595], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv___43586,output_schema43581_43587,input_schema43582_43588,input_checker43583_43589,output_checker43584_43590))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema43581_43587,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43582_43588], null)));
var ufv___43601 = schema.utils.use_fn_validation;var output_schema43596_43602 = schema.core.Any;var input_schema43597_43603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker43598_43604 = schema.core.checker.call(null,input_schema43597_43603);var output_checker43599_43605 = schema.core.checker.call(null,output_schema43596_43602);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___43601,output_schema43596_43602,input_schema43597_43603,input_checker43598_43604,output_checker43599_43605){
return (function explicit_schema_key_map(G__43600){var validate__7204__auto__ = ufv___43601.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___43606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43600], null);var temp__4219__auto___43607 = input_checker43598_43604.call(null,args__7205__auto___43606);if(cljs.core.truth_(temp__4219__auto___43607))
{var error__7206__auto___43608 = temp__4219__auto___43607;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7206__auto___43608)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43597_43603,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___43606,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43608], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var s = G__43600;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___43609 = output_checker43599_43605.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___43609))
{var error__7206__auto___43610 = temp__4219__auto___43609;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7206__auto___43610)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43596_43602,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43610], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv___43601,output_schema43596_43602,input_schema43597_43603,input_checker43598_43604,output_checker43599_43605))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema43596_43602,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43597_43603], null)));
var ufv___43616 = schema.utils.use_fn_validation;var output_schema43611_43617 = schema.core.Any;var input_schema43612_43618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker43613_43619 = schema.core.checker.call(null,input_schema43612_43618);var output_checker43614_43620 = schema.core.checker.call(null,output_schema43611_43617);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___43616,output_schema43611_43617,input_schema43612_43618,input_checker43613_43619,output_checker43614_43620){
return (function split_schema_keys(G__43615){var validate__7204__auto__ = ufv___43616.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___43621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43615], null);var temp__4219__auto___43622 = input_checker43613_43619.call(null,args__7205__auto___43621);if(cljs.core.truth_(temp__4219__auto___43622))
{var error__7206__auto___43623 = temp__4219__auto___43622;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7206__auto___43623)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43612_43618,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___43621,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43623], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var s = G__43615;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___43624 = output_checker43614_43620.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___43624))
{var error__7206__auto___43625 = temp__4219__auto___43624;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7206__auto___43625)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43611_43617,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43625], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv___43616,output_schema43611_43617,input_schema43612_43618,input_checker43613_43619,output_checker43614_43620))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema43611_43617,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43612_43618], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__43629){var vec__43630 = p__43629;var k = cljs.core.nth.call(null,vec__43630,(0),null);var v = cljs.core.nth.call(null,vec__43630,(1),null);var pk = key_project.call(null,k);var temp__4217__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4217__auto__))
{var vec__43631 = temp__4217__auto__;var ok = cljs.core.nth.call(null,vec__43631,(0),null);var ov = cljs.core.nth.call(null,vec__43631,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__43632){
var key_project = cljs.core.first(arglist__43632);
arglist__43632 = cljs.core.next(arglist__43632);
var key_combine = cljs.core.first(arglist__43632);
arglist__43632 = cljs.core.next(arglist__43632);
var val_combine = cljs.core.first(arglist__43632);
var maps = cljs.core.rest(arglist__43632);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___43640 = schema.utils.use_fn_validation;var output_schema43634_43641 = plumbing.fnk.schema.InputSchema;var input_schema43635_43642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker43636_43643 = schema.core.checker.call(null,input_schema43635_43642);var output_checker43637_43644 = schema.core.checker.call(null,output_schema43634_43641);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___43640,output_schema43634_43641,input_schema43635_43642,input_checker43636_43643,output_checker43637_43644){
return (function union_input_schemata(G__43638,G__43639){var validate__7204__auto__ = ufv___43640.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___43645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43638,G__43639], null);var temp__4219__auto___43646 = input_checker43636_43643.call(null,args__7205__auto___43645);if(cljs.core.truth_(temp__4219__auto___43646))
{var error__7206__auto___43647 = temp__4219__auto___43646;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7206__auto___43647)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43635_43642,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___43645,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43647], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var i1 = G__43638;var i2 = G__43639;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7204__auto__,ufv___43640,output_schema43634_43641,input_schema43635_43642,input_checker43636_43643,output_checker43637_43644){
return (function (p1__43633_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__43633_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__43633_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__7204__auto__,ufv___43640,output_schema43634_43641,input_schema43635_43642,input_checker43636_43643,output_checker43637_43644))
,((function (validate__7204__auto__,ufv___43640,output_schema43634_43641,input_schema43635_43642,input_checker43636_43643,output_checker43637_43644){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__7204__auto__,ufv___43640,output_schema43634_43641,input_schema43635_43642,input_checker43636_43643,output_checker43637_43644))
,((function (validate__7204__auto__,ufv___43640,output_schema43634_43641,input_schema43635_43642,input_checker43636_43643,output_checker43637_43644){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7204__auto__,ufv___43640,output_schema43634_43641,input_schema43635_43642,input_checker43636_43643,output_checker43637_43644))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___43648 = output_checker43637_43644.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___43648))
{var error__7206__auto___43649 = temp__4219__auto___43648;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7206__auto___43649)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43634_43641,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43649], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv___43640,output_schema43634_43641,input_schema43635_43642,input_checker43636_43643,output_checker43637_43644))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema43634_43641,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43635_43642], null)));
var ufv___43655 = schema.utils.use_fn_validation;var output_schema43650_43656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema43651_43657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker43652_43658 = schema.core.checker.call(null,input_schema43651_43657);var output_checker43653_43659 = schema.core.checker.call(null,output_schema43650_43656);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___43655,output_schema43650_43656,input_schema43651_43657,input_checker43652_43658,output_checker43653_43659){
return (function required_toplevel_keys(G__43654){var validate__7204__auto__ = ufv___43655.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___43660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43654], null);var temp__4219__auto___43661 = input_checker43652_43658.call(null,args__7205__auto___43660);if(cljs.core.truth_(temp__4219__auto___43661))
{var error__7206__auto___43662 = temp__4219__auto___43661;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7206__auto___43662)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43651_43657,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___43660,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43662], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var input_schema = G__43654;while(true){
return cljs.core.keep.call(null,((function (validate__7204__auto__,ufv___43655,output_schema43650_43656,input_schema43651_43657,input_checker43652_43658,output_checker43653_43659){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__7204__auto__,ufv___43655,output_schema43650_43656,input_schema43651_43657,input_checker43652_43658,output_checker43653_43659))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___43663 = output_checker43653_43659.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___43663))
{var error__7206__auto___43664 = temp__4219__auto___43663;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7206__auto___43664)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43650_43656,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43664], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv___43655,output_schema43650_43656,input_schema43651_43657,input_checker43652_43658,output_checker43653_43659))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema43650_43656,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43651_43657], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = (function iter__43673(s__43674){return (new cljs.core.LazySeq(null,(function (){var s__43674__$1 = s__43674;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__43674__$1);if(temp__4219__auto__)
{var s__43674__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43674__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__43674__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__43676 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__43675 = (0);while(true){
if((i__43675 < size__4284__auto__))
{var vec__43679 = cljs.core._nth.call(null,c__4283__auto__,i__43675);var k = cljs.core.nth.call(null,vec__43679,(0),null);var v = cljs.core.nth.call(null,vec__43679,(1),null);cljs.core.chunk_append.call(null,b__43676,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__43681 = (i__43675 + (1));
i__43675 = G__43681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43676),iter__43673.call(null,cljs.core.chunk_rest.call(null,s__43674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43676),null);
}
} else
{var vec__43680 = cljs.core.first.call(null,s__43674__$2);var k = cljs.core.nth.call(null,vec__43680,(0),null);var v = cljs.core.nth.call(null,vec__43680,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__43673.call(null,cljs.core.rest.call(null,s__43674__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = (function iter__43690(s__43691){return (new cljs.core.LazySeq(null,(function (){var s__43691__$1 = s__43691;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__43691__$1);if(temp__4219__auto__)
{var s__43691__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43691__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__43691__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__43693 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__43692 = (0);while(true){
if((i__43692 < size__4284__auto__))
{var vec__43696 = cljs.core._nth.call(null,c__4283__auto__,i__43692);var k = cljs.core.nth.call(null,vec__43696,(0),null);var v = cljs.core.nth.call(null,vec__43696,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__43693,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__43698 = (i__43692 + (1));
i__43692 = G__43698;
continue;
}
} else
{{
var G__43699 = (i__43692 + (1));
i__43692 = G__43699;
continue;
}
}
} else
{{
var G__43700 = (i__43692 + (1));
i__43692 = G__43700;
continue;
}
}
} else
{{
var G__43701 = (i__43692 + (1));
i__43692 = G__43701;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43693),iter__43690.call(null,cljs.core.chunk_rest.call(null,s__43691__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43693),null);
}
} else
{var vec__43697 = cljs.core.first.call(null,s__43691__$2);var k = cljs.core.nth.call(null,vec__43697,(0),null);var v = cljs.core.nth.call(null,vec__43697,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__43690.call(null,cljs.core.rest.call(null,s__43691__$2)));
} else
{{
var G__43702 = cljs.core.rest.call(null,s__43691__$2);
s__43691__$1 = G__43702;
continue;
}
}
} else
{{
var G__43703 = cljs.core.rest.call(null,s__43691__$2);
s__43691__$1 = G__43703;
continue;
}
}
} else
{{
var G__43704 = cljs.core.rest.call(null,s__43691__$2);
s__43691__$1 = G__43704;
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
});return iter__4285__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___43727 = schema.utils.use_fn_validation;var output_schema43705_43728 = schema.core.Any;var input_schema43706_43729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker43707_43730 = schema.core.checker.call(null,input_schema43706_43729);var output_checker43708_43731 = schema.core.checker.call(null,output_schema43705_43728);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___43727,output_schema43705_43728,input_schema43706_43729,input_checker43707_43730,output_checker43708_43731){
return (function compose_schemata(G__43709,G__43710){var validate__7204__auto__ = true;if(validate__7204__auto__)
{var args__7205__auto___43732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43709,G__43710], null);var temp__4219__auto___43733 = input_checker43707_43730.call(null,args__7205__auto___43732);if(cljs.core.truth_(temp__4219__auto___43733))
{var error__7206__auto___43734 = temp__4219__auto___43733;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7206__auto___43734)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43706_43729,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___43732,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43734], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var G__43721 = G__43709;var vec__43723 = G__43721;var i2 = cljs.core.nth.call(null,vec__43723,(0),null);var o2 = cljs.core.nth.call(null,vec__43723,(1),null);var G__43722 = G__43710;var vec__43724 = G__43722;var i1 = cljs.core.nth.call(null,vec__43724,(0),null);var o1 = cljs.core.nth.call(null,vec__43724,(1),null);var G__43721__$1 = G__43721;var G__43722__$1 = G__43722;while(true){
var vec__43725 = G__43721__$1;var i2__$1 = cljs.core.nth.call(null,vec__43725,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__43725,(1),null);var vec__43726 = G__43722__$1;var i1__$1 = cljs.core.nth.call(null,vec__43726,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__43726,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__7204__auto__)
{var temp__4219__auto___43735 = output_checker43708_43731.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___43735))
{var error__7206__auto___43736 = temp__4219__auto___43735;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7206__auto___43736)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43705_43728,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43736], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv___43727,output_schema43705_43728,input_schema43706_43729,input_checker43707_43730,output_checker43708_43731))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema43705_43728,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43706_43729], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___43815 = schema.utils.use_fn_validation;var output_schema43737_43816 = schema.core.Any;var input_schema43738_43817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker43739_43818 = schema.core.checker.call(null,input_schema43738_43817);var output_checker43740_43819 = schema.core.checker.call(null,output_schema43737_43816);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819){
return (function split_schema(G__43741,G__43742){var validate__7204__auto__ = ufv___43815.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___43820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43741,G__43742], null);var temp__4219__auto___43821 = input_checker43739_43818.call(null,args__7205__auto___43820);if(cljs.core.truth_(temp__4219__auto___43821))
{var error__7206__auto___43822 = temp__4219__auto___43821;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7206__auto___43822)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43738_43817,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___43820,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43822], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var s = G__43741;var ks = G__43742;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4285__auto__ = ((function (ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819){
return (function iter__43779(s__43780){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819){
return (function (){var s__43780__$1 = s__43780;while(true){
var temp__4219__auto__ = cljs.core.seq.call(null,s__43780__$1);if(temp__4219__auto__)
{var s__43780__$2 = temp__4219__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43780__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__43780__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__43782 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__43781 = (0);while(true){
if((i__43781 < size__4284__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4283__auto__,i__43781);cljs.core.chunk_append.call(null,b__43782,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = ((function (i__43781,in_QMARK_,c__4283__auto__,size__4284__auto__,b__43782,s__43780__$2,temp__4219__auto__,ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819){
return (function iter__43799(s__43800){return (new cljs.core.LazySeq(null,((function (i__43781,in_QMARK_,c__4283__auto__,size__4284__auto__,b__43782,s__43780__$2,temp__4219__auto__,ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819){
return (function (){var s__43800__$1 = s__43800;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__43800__$1);if(temp__4219__auto____$1)
{var s__43800__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__43800__$2))
{var c__4283__auto____$1 = cljs.core.chunk_first.call(null,s__43800__$2);var size__4284__auto____$1 = cljs.core.count.call(null,c__4283__auto____$1);var b__43802 = cljs.core.chunk_buffer.call(null,size__4284__auto____$1);if((function (){var i__43801 = (0);while(true){
if((i__43801 < size__4284__auto____$1))
{var vec__43805 = cljs.core._nth.call(null,c__4283__auto____$1,i__43801);var k = cljs.core.nth.call(null,vec__43805,(0),null);var v = cljs.core.nth.call(null,vec__43805,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__43802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__43823 = (i__43801 + (1));
i__43801 = G__43823;
continue;
}
} else
{{
var G__43824 = (i__43801 + (1));
i__43801 = G__43824;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43802),iter__43799.call(null,cljs.core.chunk_rest.call(null,s__43800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43802),null);
}
} else
{var vec__43806 = cljs.core.first.call(null,s__43800__$2);var k = cljs.core.nth.call(null,vec__43806,(0),null);var v = cljs.core.nth.call(null,vec__43806,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__43799.call(null,cljs.core.rest.call(null,s__43800__$2)));
} else
{{
var G__43825 = cljs.core.rest.call(null,s__43800__$2);
s__43800__$1 = G__43825;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__43781,in_QMARK_,c__4283__auto__,size__4284__auto__,b__43782,s__43780__$2,temp__4219__auto__,ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819))
,null,null));
});})(i__43781,in_QMARK_,c__4283__auto__,size__4284__auto__,b__43782,s__43780__$2,temp__4219__auto__,ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819))
;return iter__4285__auto__.call(null,s);
})()));
{
var G__43826 = (i__43781 + (1));
i__43781 = G__43826;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43782),iter__43779.call(null,cljs.core.chunk_rest.call(null,s__43780__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43782),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__43780__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = ((function (in_QMARK_,s__43780__$2,temp__4219__auto__,ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819){
return (function iter__43807(s__43808){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__43780__$2,temp__4219__auto__,ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819){
return (function (){var s__43808__$1 = s__43808;while(true){
var temp__4219__auto____$1 = cljs.core.seq.call(null,s__43808__$1);if(temp__4219__auto____$1)
{var s__43808__$2 = temp__4219__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__43808__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__43808__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__43810 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__43809 = (0);while(true){
if((i__43809 < size__4284__auto__))
{var vec__43813 = cljs.core._nth.call(null,c__4283__auto__,i__43809);var k = cljs.core.nth.call(null,vec__43813,(0),null);var v = cljs.core.nth.call(null,vec__43813,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__43810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__43827 = (i__43809 + (1));
i__43809 = G__43827;
continue;
}
} else
{{
var G__43828 = (i__43809 + (1));
i__43809 = G__43828;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43810),iter__43807.call(null,cljs.core.chunk_rest.call(null,s__43808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43810),null);
}
} else
{var vec__43814 = cljs.core.first.call(null,s__43808__$2);var k = cljs.core.nth.call(null,vec__43814,(0),null);var v = cljs.core.nth.call(null,vec__43814,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__43807.call(null,cljs.core.rest.call(null,s__43808__$2)));
} else
{{
var G__43829 = cljs.core.rest.call(null,s__43808__$2);
s__43808__$1 = G__43829;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__43780__$2,temp__4219__auto__,ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819))
,null,null));
});})(in_QMARK_,s__43780__$2,temp__4219__auto__,ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819))
;return iter__4285__auto__.call(null,s);
})()),iter__43779.call(null,cljs.core.rest.call(null,s__43780__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819))
,null,null));
});})(ks__$1,validate__7204__auto__,ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819))
;return iter__4285__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___43830 = output_checker43740_43819.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___43830))
{var error__7206__auto___43831 = temp__4219__auto___43830;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7206__auto___43831)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43737_43816,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43831], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv___43815,output_schema43737_43816,input_schema43738_43817,input_checker43739_43818,output_checker43740_43819))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema43737_43816,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43738_43817], null)));
var ufv___43862 = schema.utils.use_fn_validation;var output_schema43832_43863 = plumbing.fnk.schema.GraphIOSchemata;var input_schema43833_43864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker43834_43865 = schema.core.checker.call(null,input_schema43833_43864);var output_checker43835_43866 = schema.core.checker.call(null,output_schema43832_43863);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___43862,output_schema43832_43863,input_schema43833_43864,input_checker43834_43865,output_checker43835_43866){
return (function sequence_schemata(G__43836,G__43837){var validate__7204__auto__ = ufv___43862.get_cell();if(cljs.core.truth_(validate__7204__auto__))
{var args__7205__auto___43867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43836,G__43837], null);var temp__4219__auto___43868 = input_checker43834_43865.call(null,args__7205__auto___43867);if(cljs.core.truth_(temp__4219__auto___43868))
{var error__7206__auto___43869 = temp__4219__auto___43868;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7206__auto___43869)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43833_43864,new cljs.core.Keyword(null,"value","value",305978217),args__7205__auto___43867,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43869], null));
} else
{}
} else
{}
var o__7207__auto__ = (function (){var G__43853 = G__43836;var vec__43855 = G__43853;var i1 = cljs.core.nth.call(null,vec__43855,(0),null);var o1 = cljs.core.nth.call(null,vec__43855,(1),null);var G__43854 = G__43837;var vec__43856 = G__43854;var k = cljs.core.nth.call(null,vec__43856,(0),null);var vec__43857 = cljs.core.nth.call(null,vec__43856,(1),null);var i2 = cljs.core.nth.call(null,vec__43857,(0),null);var o2 = cljs.core.nth.call(null,vec__43857,(1),null);var G__43853__$1 = G__43853;var G__43854__$1 = G__43854;while(true){
var vec__43858 = G__43853__$1;var i1__$1 = cljs.core.nth.call(null,vec__43858,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__43858,(1),null);var vec__43859 = G__43854__$1;var k__$1 = cljs.core.nth.call(null,vec__43859,(0),null);var vec__43860 = cljs.core.nth.call(null,vec__43859,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__43860,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__43860,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__43861 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__43861,(0),null);var unused = cljs.core.nth.call(null,vec__43861,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__7204__auto__))
{var temp__4219__auto___43870 = output_checker43835_43866.call(null,o__7207__auto__);if(cljs.core.truth_(temp__4219__auto___43870))
{var error__7206__auto___43871 = temp__4219__auto___43870;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7206__auto___43871)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43832_43863,new cljs.core.Keyword(null,"value","value",305978217),o__7207__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7206__auto___43871], null));
} else
{}
} else
{}
return o__7207__auto__;
});})(ufv___43862,output_schema43832_43863,input_schema43833_43864,input_checker43834_43865,output_checker43835_43866))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema43832_43863,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43833_43864], null)));

//# sourceMappingURL=schema.js.map