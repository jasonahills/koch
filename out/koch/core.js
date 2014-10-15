// Compiled by ClojureScript 0.0-2311
goog.provide('koch.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
koch.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-size","input-size",-731983507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(10)], null),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.24], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,-0.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),"hello"], null));
koch.core.input_point_circle = (function input_point_circle(p__10376){var vec__10378 = p__10376;var x = cljs.core.nth.call(null,vec__10378,(0),null);var y = cljs.core.nth.call(null,vec__10378,(1),null);return React.DOM.circle({"fill": "red", "r": 0.03, "cy": (- y), "cx": x});
});
koch.core.point_debug = (function point_debug(p__10379){var vec__10381 = p__10379;var x = cljs.core.nth.call(null,vec__10381,(0),null);var y = cljs.core.nth.call(null,vec__10381,(1),null);return ("x: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"\ty: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"\n");
});
koch.core.handle_segment_click = (function handle_segment_click(e,segments,owner){console.log("Event",e.clientX,e.clientY);
console.log("Test",om.core.get_node.call(null,owner,"segments"));
return om.core.transact_BANG_.call(null,segments,(function (p1__10382_SHARP_){return cljs.core.conj.call(null,p1__10382_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,-0.5], null));
}));
});
koch.core.segments_input = (function segments_input(segments,owner){if(typeof koch.core.t10387 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t10387 = (function (owner,segments,segments_input,meta10388){
this.owner = owner;
this.segments = segments;
this.segments_input = segments_input;
this.meta10388 = meta10388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t10387.cljs$lang$type = true;
koch.core.t10387.cljs$lang$ctorStr = "koch.core/t10387";
koch.core.t10387.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t10387");
});
koch.core.t10387.prototype.om$core$IRenderState$ = true;
koch.core.t10387.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.svg({"onClick": ((function (this$__$1){
return (function (p1__10383_SHARP_){return koch.core.handle_segment_click.call(null,p1__10383_SHARP_,self__.segments,self__.owner);
});})(this$__$1))
, "ref": "segments", "viewBox": "0 -0.5 1 1", "className": "segments"},cljs.core.apply.call(null,om.dom.g,null,cljs.core.map.call(null,koch.core.input_point_circle,self__.segments)));
});
koch.core.t10387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10389){var self__ = this;
var _10389__$1 = this;return self__.meta10388;
});
koch.core.t10387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10389,meta10388__$1){var self__ = this;
var _10389__$1 = this;return (new koch.core.t10387(self__.owner,self__.segments,self__.segments_input,meta10388__$1));
});
koch.core.__GT_t10387 = (function __GT_t10387(owner__$1,segments__$1,segments_input__$1,meta10388){return (new koch.core.t10387(owner__$1,segments__$1,segments_input__$1,meta10388));
});
}
return (new koch.core.t10387(owner,segments,segments_input,null));
});
koch.core.segments_debug = (function segments_debug(segments,owner){if(typeof koch.core.t10393 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t10393 = (function (owner,segments,segments_debug,meta10394){
this.owner = owner;
this.segments = segments;
this.segments_debug = segments_debug;
this.meta10394 = meta10394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t10393.cljs$lang$type = true;
koch.core.t10393.cljs$lang$ctorStr = "koch.core/t10393";
koch.core.t10393.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t10393");
});
koch.core.t10393.prototype.om$core$IRender$ = true;
koch.core.t10393.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.pre,null,cljs.core.map.call(null,koch.core.point_debug,self__.segments));
});
koch.core.t10393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10395){var self__ = this;
var _10395__$1 = this;return self__.meta10394;
});
koch.core.t10393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10395,meta10394__$1){var self__ = this;
var _10395__$1 = this;return (new koch.core.t10393(self__.owner,self__.segments,self__.segments_debug,meta10394__$1));
});
koch.core.__GT_t10393 = (function __GT_t10393(owner__$1,segments__$1,segments_debug__$1,meta10394){return (new koch.core.t10393(owner__$1,segments__$1,segments_debug__$1,meta10394));
});
}
return (new koch.core.t10393(owner,segments,segments_debug,null));
});
koch.core.fractal_output = (function fractal_output(app,owner){if(typeof koch.core.t10399 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t10399 = (function (owner,app,fractal_output,meta10400){
this.owner = owner;
this.app = app;
this.fractal_output = fractal_output;
this.meta10400 = meta10400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t10399.cljs$lang$type = true;
koch.core.t10399.cljs$lang$ctorStr = "koch.core/t10399";
koch.core.t10399.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t10399");
});
koch.core.t10399.prototype.om$core$IRenderState$ = true;
koch.core.t10399.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.svg({"className": "output"},koch.core.input_point_circle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300)], null)));
});
koch.core.t10399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10401){var self__ = this;
var _10401__$1 = this;return self__.meta10400;
});
koch.core.t10399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10401,meta10400__$1){var self__ = this;
var _10401__$1 = this;return (new koch.core.t10399(self__.owner,self__.app,self__.fractal_output,meta10400__$1));
});
koch.core.__GT_t10399 = (function __GT_t10399(owner__$1,app__$1,fractal_output__$1,meta10400){return (new koch.core.t10399(owner__$1,app__$1,fractal_output__$1,meta10400));
});
}
return (new koch.core.t10399(owner,app,fractal_output,null));
});
koch.core.handle_clear = (function handle_clear(app,owner){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
});
koch.core.main_view = (function main_view(app,owner){if(typeof koch.core.t10405 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t10405 = (function (owner,app,main_view,meta10406){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta10406 = meta10406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t10405.cljs$lang$type = true;
koch.core.t10405.cljs$lang$ctorStr = "koch.core/t10405";
koch.core.t10405.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t10405");
});
koch.core.t10405.prototype.om$core$IRender$ = true;
koch.core.t10405.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Koch Fractals"),React.DOM.p(null,"So beautiful!"),om.core.build.call(null,koch.core.segments_input,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.p(null,React.DOM.button({"onClick": ((function (this$__$1){
return (function (){return koch.core.handle_clear.call(null,self__.app,self__.owner);
});})(this$__$1))
},"Clear Segments")),React.DOM.p(null,om.core.build.call(null,koch.core.segments_debug,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(self__.app))),React.DOM.p(null,React.DOM.button(null,"+"),React.DOM.span(null," # Fractals "),React.DOM.button(null,"-"),React.DOM.p(null,om.core.build.call(null,koch.core.fractal_output,null))));
});
koch.core.t10405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10407){var self__ = this;
var _10407__$1 = this;return self__.meta10406;
});
koch.core.t10405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10407,meta10406__$1){var self__ = this;
var _10407__$1 = this;return (new koch.core.t10405(self__.owner,self__.app,self__.main_view,meta10406__$1));
});
koch.core.__GT_t10405 = (function __GT_t10405(owner__$1,app__$1,main_view__$1,meta10406){return (new koch.core.t10405(owner__$1,app__$1,main_view__$1,meta10406));
});
}
return (new koch.core.t10405(owner,app,main_view,null));
});
om.core.root.call(null,koch.core.main_view,koch.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map