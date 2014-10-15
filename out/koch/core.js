// Compiled by ClojureScript 0.0-2311
goog.provide('koch.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('clojure.data');
goog.require('koch.algorithm.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.core');
goog.require('koch.algorithm.core');
goog.require('om.core');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.data');
cljs.core.enable_console_print_BANG_.call(null);
koch.core.xmin = (0);
koch.core.xmax = (1);
koch.core.ymin = (- 0.5);
koch.core.ymax = 0.5;
koch.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fractal-depth","fractal-depth",-640843856),(4),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.24], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),"hello"], null));
koch.core.point_debug = (function point_debug(p__9422){var vec__9424 = p__9422;var x = cljs.core.nth.call(null,vec__9424,(0),null);var y = cljs.core.nth.call(null,vec__9424,(1),null);return ("x: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"\ty: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"\n");
});
koch.core.offset_in_element = (function offset_in_element(e,node){var offset = goog.style.getPageOffset(node);var x_px = (e.pageX - offset.x);var y_px = (e.pageY - offset.y);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_px,y_px], null);
});
koch.core.offset_percent = (function offset_percent(p__9425,node){var vec__9427 = p__9425;var x = cljs.core.nth.call(null,vec__9427,(0),null);var y = cljs.core.nth.call(null,vec__9427,(1),null);var size = goog.style.getSize(node);var xpt = (x / size.width);var ypt = (y / size.height);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpt,ypt], null);
});
koch.core.scale_to = (function scale_to(n,min,max){var size = (max - min);return (min + (size * n));
});
koch.core.handle_segment_click = (function handle_segment_click(e,segments,owner){var node = om.core.get_node.call(null,owner,"segments");var offset = koch.core.offset_in_element.call(null,e,node);var vec__9430 = koch.core.offset_percent.call(null,offset,node);var xpct = cljs.core.nth.call(null,vec__9430,(0),null);var ypct = cljs.core.nth.call(null,vec__9430,(1),null);var x = koch.core.scale_to.call(null,xpct,koch.core.xmin,koch.core.xmax);var y = koch.core.scale_to.call(null,ypct,(- koch.core.ymin),(- koch.core.ymax));return om.core.transact_BANG_.call(null,segments,((function (node,offset,vec__9430,xpct,ypct,x,y){
return (function (p1__9428_SHARP_){return cljs.core.conj.call(null,p1__9428_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(node,offset,vec__9430,xpct,ypct,x,y))
);
});
koch.core.point_data = (function point_data(p__9431){var vec__9433 = p__9431;var x = cljs.core.nth.call(null,vec__9433,(0),null);var y = cljs.core.nth.call(null,vec__9433,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((- y)));
});
koch.core.input_point_circle = (function input_point_circle(p__9434){var vec__9436 = p__9434;var x = cljs.core.nth.call(null,vec__9436,(0),null);var y = cljs.core.nth.call(null,vec__9436,(1),null);return React.DOM.circle({"fill": "black", "r": 0.02, "cy": (- y), "cx": x});
});
koch.core.segments_path_data = (function segments_path_data(segments){return ("M"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"L",cljs.core.map.call(null,koch.core.point_data,segments))));
});
koch.core.segments_path = (function segments_path(segments,color,width){return React.DOM.path({"fill": "none", "strokeWidth": width, "stroke": color, "d": koch.core.segments_path_data.call(null,segments)});
});
koch.core.segments_input = (function segments_input(segments,owner){if(typeof koch.core.t9441 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t9441 = (function (owner,segments,segments_input,meta9442){
this.owner = owner;
this.segments = segments;
this.segments_input = segments_input;
this.meta9442 = meta9442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t9441.cljs$lang$type = true;
koch.core.t9441.cljs$lang$ctorStr = "koch.core/t9441";
koch.core.t9441.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t9441");
});
koch.core.t9441.prototype.om$core$IRenderState$ = true;
koch.core.t9441.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var closed_segments = cljs.core.conj.call(null,self__.segments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));return React.DOM.svg({"onClick": ((function (closed_segments,this$__$1){
return (function (p1__9437_SHARP_){return koch.core.handle_segment_click.call(null,p1__9437_SHARP_,self__.segments,self__.owner);
});})(closed_segments,this$__$1))
, "ref": "segments", "viewBox": "0 -0.5 1 1", "className": "segments"},koch.core.segments_path.call(null,closed_segments,"red",0.01),cljs.core.apply.call(null,om.dom.g,null,cljs.core.map.call(null,koch.core.input_point_circle,closed_segments)));
});
koch.core.t9441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9443){var self__ = this;
var _9443__$1 = this;return self__.meta9442;
});
koch.core.t9441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9443,meta9442__$1){var self__ = this;
var _9443__$1 = this;return (new koch.core.t9441(self__.owner,self__.segments,self__.segments_input,meta9442__$1));
});
koch.core.__GT_t9441 = (function __GT_t9441(owner__$1,segments__$1,segments_input__$1,meta9442){return (new koch.core.t9441(owner__$1,segments__$1,segments_input__$1,meta9442));
});
}
return (new koch.core.t9441(owner,segments,segments_input,null));
});
koch.core.segments_debug = (function segments_debug(segments,owner){if(typeof koch.core.t9447 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t9447 = (function (owner,segments,segments_debug,meta9448){
this.owner = owner;
this.segments = segments;
this.segments_debug = segments_debug;
this.meta9448 = meta9448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t9447.cljs$lang$type = true;
koch.core.t9447.cljs$lang$ctorStr = "koch.core/t9447";
koch.core.t9447.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t9447");
});
koch.core.t9447.prototype.om$core$IRender$ = true;
koch.core.t9447.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.pre,null,cljs.core.map.call(null,koch.core.point_debug,self__.segments));
});
koch.core.t9447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9449){var self__ = this;
var _9449__$1 = this;return self__.meta9448;
});
koch.core.t9447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9449,meta9448__$1){var self__ = this;
var _9449__$1 = this;return (new koch.core.t9447(self__.owner,self__.segments,self__.segments_debug,meta9448__$1));
});
koch.core.__GT_t9447 = (function __GT_t9447(owner__$1,segments__$1,segments_debug__$1,meta9448){return (new koch.core.t9447(owner__$1,segments__$1,segments_debug__$1,meta9448));
});
}
return (new koch.core.t9447(owner,segments,segments_debug,null));
});
koch.core.fractal_output = (function fractal_output(segments,owner){if(typeof koch.core.t9453 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t9453 = (function (owner,segments,fractal_output,meta9454){
this.owner = owner;
this.segments = segments;
this.fractal_output = fractal_output;
this.meta9454 = meta9454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t9453.cljs$lang$type = true;
koch.core.t9453.cljs$lang$ctorStr = "koch.core/t9453";
koch.core.t9453.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t9453");
});
koch.core.t9453.prototype.om$core$IRenderState$ = true;
koch.core.t9453.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.svg({"ref": "output", "viewBox": "0 -0.5 1 1", "className": "output"},koch.core.segments_path.call(null,self__.segments,"black",0.005));
});
koch.core.t9453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9455){var self__ = this;
var _9455__$1 = this;return self__.meta9454;
});
koch.core.t9453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9455,meta9454__$1){var self__ = this;
var _9455__$1 = this;return (new koch.core.t9453(self__.owner,self__.segments,self__.fractal_output,meta9454__$1));
});
koch.core.__GT_t9453 = (function __GT_t9453(owner__$1,segments__$1,fractal_output__$1,meta9454){return (new koch.core.t9453(owner__$1,segments__$1,fractal_output__$1,meta9454));
});
}
return (new koch.core.t9453(owner,segments,fractal_output,null));
});
koch.core.handle_clear = (function handle_clear(app,owner){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
});
koch.core.handle_depth = (function handle_depth(app,n){console.log("Hello",n);
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"fractal-depth","fractal-depth",-640843856),(function (p1__9456_SHARP_){var x__3860__auto__ = (0);var y__3861__auto__ = (p1__9456_SHARP_ + n);return ((x__3860__auto__ > y__3861__auto__) ? x__3860__auto__ : y__3861__auto__);
}));
});
koch.core.main_view = (function main_view(app,owner){if(typeof koch.core.t9460 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t9460 = (function (owner,app,main_view,meta9461){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta9461 = meta9461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t9460.cljs$lang$type = true;
koch.core.t9460.cljs$lang$ctorStr = "koch.core/t9460";
koch.core.t9460.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t9460");
});
koch.core.t9460.prototype.om$core$IRender$ = true;
koch.core.t9460.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var depth = new cljs.core.Keyword(null,"fractal-depth","fractal-depth",-640843856).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.div(null,React.DOM.h2(null,"Koch Fractals"),om.core.build.call(null,koch.core.segments_input,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.p(null,React.DOM.button({"onClick": ((function (depth,this$__$1){
return (function (){return koch.core.handle_clear.call(null,self__.app,self__.owner);
});})(depth,this$__$1))
},"Clear Segments")),React.DOM.p(null,React.DOM.button({"onClick": ((function (depth,this$__$1){
return (function (){return koch.core.handle_depth.call(null,self__.app,(- (1)));
});})(depth,this$__$1))
},"-"),React.DOM.span(null,(" Depth: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)+" ")),React.DOM.button({"onClick": ((function (depth,this$__$1){
return (function (){return koch.core.handle_depth.call(null,self__.app,(1));
});})(depth,this$__$1))
},"+"),React.DOM.p(null,om.core.build.call(null,koch.core.fractal_output,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});
koch.core.t9460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9462){var self__ = this;
var _9462__$1 = this;return self__.meta9461;
});
koch.core.t9460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9462,meta9461__$1){var self__ = this;
var _9462__$1 = this;return (new koch.core.t9460(self__.owner,self__.app,self__.main_view,meta9461__$1));
});
koch.core.__GT_t9460 = (function __GT_t9460(owner__$1,app__$1,main_view__$1,meta9461){return (new koch.core.t9460(owner__$1,app__$1,main_view__$1,meta9461));
});
}
return (new koch.core.t9460(owner,app,main_view,null));
});
om.core.root.call(null,koch.core.main_view,koch.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map