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
koch.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fractal-depth","fractal-depth",-640843856),(2),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) / (3)),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) / (2)),(1.732 / (6))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) / (3)),(0)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),"hello"], null));
koch.core.point_debug = (function point_debug(p__18601){var vec__18603 = p__18601;var x = cljs.core.nth.call(null,vec__18603,(0),null);var y = cljs.core.nth.call(null,vec__18603,(1),null);return ("x: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"\ty: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"\n");
});
koch.core.offset_in_element = (function offset_in_element(e,node){var offset = goog.style.getPageOffset(node);var x_px = (e.pageX - offset.x);var y_px = (e.pageY - offset.y);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_px,y_px], null);
});
koch.core.offset_percent = (function offset_percent(p__18604,node){var vec__18606 = p__18604;var x = cljs.core.nth.call(null,vec__18606,(0),null);var y = cljs.core.nth.call(null,vec__18606,(1),null);var size = goog.style.getSize(node);var xpt = (x / size.width);var ypt = (y / size.height);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpt,ypt], null);
});
koch.core.scale_to = (function scale_to(n,min,max){var size = (max - min);return (min + (size * n));
});
koch.core.handle_segment_click = (function handle_segment_click(e,segments,owner){var node = om.core.get_node.call(null,owner,"segments");var offset = koch.core.offset_in_element.call(null,e,node);var vec__18609 = koch.core.offset_percent.call(null,offset,node);var xpct = cljs.core.nth.call(null,vec__18609,(0),null);var ypct = cljs.core.nth.call(null,vec__18609,(1),null);var x = koch.core.scale_to.call(null,xpct,koch.core.xmin,koch.core.xmax);var y = koch.core.scale_to.call(null,ypct,(- koch.core.ymin),(- koch.core.ymax));return om.core.transact_BANG_.call(null,segments,((function (node,offset,vec__18609,xpct,ypct,x,y){
return (function (p1__18607_SHARP_){return cljs.core.conj.call(null,p1__18607_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(node,offset,vec__18609,xpct,ypct,x,y))
);
});
koch.core.point_data = (function point_data(p__18610){var vec__18612 = p__18610;var x = cljs.core.nth.call(null,vec__18612,(0),null);var y = cljs.core.nth.call(null,vec__18612,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((- y)));
});
koch.core.input_point_circle = (function input_point_circle(p__18613){var vec__18615 = p__18613;var x = cljs.core.nth.call(null,vec__18615,(0),null);var y = cljs.core.nth.call(null,vec__18615,(1),null);return React.DOM.circle({"fill": "black", "r": 0.02, "cy": (- y), "cx": x});
});
koch.core.segments_path_data = (function segments_path_data(segments){return ("M"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"L",cljs.core.map.call(null,koch.core.point_data,segments))));
});
koch.core.segments_path = (function segments_path(segments,color,width){return React.DOM.path({"fill": "none", "strokeWidth": width, "stroke": color, "d": koch.core.segments_path_data.call(null,segments)});
});
koch.core.segments_input = (function segments_input(segments,owner){if(typeof koch.core.t18620 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t18620 = (function (owner,segments,segments_input,meta18621){
this.owner = owner;
this.segments = segments;
this.segments_input = segments_input;
this.meta18621 = meta18621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t18620.cljs$lang$type = true;
koch.core.t18620.cljs$lang$ctorStr = "koch.core/t18620";
koch.core.t18620.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t18620");
});
koch.core.t18620.prototype.om$core$IRenderState$ = true;
koch.core.t18620.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var closed_segments = cljs.core.conj.call(null,self__.segments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));return React.DOM.svg({"onClick": ((function (closed_segments,this$__$1){
return (function (p1__18616_SHARP_){return koch.core.handle_segment_click.call(null,p1__18616_SHARP_,self__.segments,self__.owner);
});})(closed_segments,this$__$1))
, "ref": "segments", "viewBox": "0 -0.5 1 1", "className": "segments"},koch.core.segments_path.call(null,closed_segments,"red",0.01),cljs.core.apply.call(null,om.dom.g,null,cljs.core.map.call(null,koch.core.input_point_circle,closed_segments)));
});
koch.core.t18620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18622){var self__ = this;
var _18622__$1 = this;return self__.meta18621;
});
koch.core.t18620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18622,meta18621__$1){var self__ = this;
var _18622__$1 = this;return (new koch.core.t18620(self__.owner,self__.segments,self__.segments_input,meta18621__$1));
});
koch.core.__GT_t18620 = (function __GT_t18620(owner__$1,segments__$1,segments_input__$1,meta18621){return (new koch.core.t18620(owner__$1,segments__$1,segments_input__$1,meta18621));
});
}
return (new koch.core.t18620(owner,segments,segments_input,null));
});
koch.core.segments_debug = (function segments_debug(segments,owner){if(typeof koch.core.t18626 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t18626 = (function (owner,segments,segments_debug,meta18627){
this.owner = owner;
this.segments = segments;
this.segments_debug = segments_debug;
this.meta18627 = meta18627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t18626.cljs$lang$type = true;
koch.core.t18626.cljs$lang$ctorStr = "koch.core/t18626";
koch.core.t18626.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t18626");
});
koch.core.t18626.prototype.om$core$IRender$ = true;
koch.core.t18626.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.pre,null,cljs.core.map.call(null,koch.core.point_debug,self__.segments));
});
koch.core.t18626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18628){var self__ = this;
var _18628__$1 = this;return self__.meta18627;
});
koch.core.t18626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18628,meta18627__$1){var self__ = this;
var _18628__$1 = this;return (new koch.core.t18626(self__.owner,self__.segments,self__.segments_debug,meta18627__$1));
});
koch.core.__GT_t18626 = (function __GT_t18626(owner__$1,segments__$1,segments_debug__$1,meta18627){return (new koch.core.t18626(owner__$1,segments__$1,segments_debug__$1,meta18627));
});
}
return (new koch.core.t18626(owner,segments,segments_debug,null));
});
koch.core.segments_to_fractal = (function segments_to_fractal(segments,n){return koch.algorithm.core.fractalizeMe.call(null,cljs.core.conj.call(null,segments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),n);
});
koch.core.fractal_output = (function fractal_output(app,owner){if(typeof koch.core.t18632 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t18632 = (function (owner,app,fractal_output,meta18633){
this.owner = owner;
this.app = app;
this.fractal_output = fractal_output;
this.meta18633 = meta18633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t18632.cljs$lang$type = true;
koch.core.t18632.cljs$lang$ctorStr = "koch.core/t18632";
koch.core.t18632.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t18632");
});
koch.core.t18632.prototype.om$core$IRenderState$ = true;
koch.core.t18632.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var fractal_segments = koch.core.segments_to_fractal.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"fractal-depth","fractal-depth",-640843856).cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.svg({"ref": "output", "viewBox": "0 -0.5 1 1", "className": "output"},koch.core.segments_path.call(null,fractal_segments,"black",0.005));
});
koch.core.t18632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18634){var self__ = this;
var _18634__$1 = this;return self__.meta18633;
});
koch.core.t18632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18634,meta18633__$1){var self__ = this;
var _18634__$1 = this;return (new koch.core.t18632(self__.owner,self__.app,self__.fractal_output,meta18633__$1));
});
koch.core.__GT_t18632 = (function __GT_t18632(owner__$1,app__$1,fractal_output__$1,meta18633){return (new koch.core.t18632(owner__$1,app__$1,fractal_output__$1,meta18633));
});
}
return (new koch.core.t18632(owner,app,fractal_output,null));
});
koch.core.handle_clear = (function handle_clear(app,owner){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
});
koch.core.handle_depth = (function handle_depth(app,n){console.log("Hello",n);
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"fractal-depth","fractal-depth",-640843856),(function (p1__18635_SHARP_){var x__3860__auto__ = (0);var y__3861__auto__ = (p1__18635_SHARP_ + n);return ((x__3860__auto__ > y__3861__auto__) ? x__3860__auto__ : y__3861__auto__);
}));
});
koch.core.main_view = (function main_view(app,owner){if(typeof koch.core.t18639 !== 'undefined')
{} else
{
/**
* @constructor
*/
koch.core.t18639 = (function (owner,app,main_view,meta18640){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta18640 = meta18640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
koch.core.t18639.cljs$lang$type = true;
koch.core.t18639.cljs$lang$ctorStr = "koch.core/t18639";
koch.core.t18639.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"koch.core/t18639");
});
koch.core.t18639.prototype.om$core$IRender$ = true;
koch.core.t18639.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var depth = new cljs.core.Keyword(null,"fractal-depth","fractal-depth",-640843856).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.div(null,React.DOM.h2(null,"Koch Fractals"),om.core.build.call(null,koch.core.segments_input,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.p(null,React.DOM.button({"onClick": ((function (depth,this$__$1){
return (function (){return koch.core.handle_clear.call(null,self__.app,self__.owner);
});})(depth,this$__$1))
},"Clear Segments")),React.DOM.p(null,React.DOM.button({"onClick": ((function (depth,this$__$1){
return (function (){return koch.core.handle_depth.call(null,self__.app,(- (1)));
});})(depth,this$__$1))
},"-"),React.DOM.span(null,(" Depth: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)+" ")),React.DOM.button({"onClick": ((function (depth,this$__$1){
return (function (){return koch.core.handle_depth.call(null,self__.app,(1));
});})(depth,this$__$1))
},"+"),React.DOM.p(null,om.core.build.call(null,koch.core.fractal_output,self__.app))));
});
koch.core.t18639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18641){var self__ = this;
var _18641__$1 = this;return self__.meta18640;
});
koch.core.t18639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18641,meta18640__$1){var self__ = this;
var _18641__$1 = this;return (new koch.core.t18639(self__.owner,self__.app,self__.main_view,meta18640__$1));
});
koch.core.__GT_t18639 = (function __GT_t18639(owner__$1,app__$1,main_view__$1,meta18640){return (new koch.core.t18639(owner__$1,app__$1,main_view__$1,meta18640));
});
}
return (new koch.core.t18639(owner,app,main_view,null));
});
om.core.root.call(null,koch.core.main_view,koch.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map