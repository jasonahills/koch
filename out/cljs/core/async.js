// Compiled by ClojureScript 0.0-2311
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11047 = (function (f,fn_handler,meta11048){
this.f = f;
this.fn_handler = fn_handler;
this.meta11048 = meta11048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11047.cljs$lang$type = true;
cljs.core.async.t11047.cljs$lang$ctorStr = "cljs.core.async/t11047";
cljs.core.async.t11047.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11047");
});
cljs.core.async.t11047.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11049){var self__ = this;
var _11049__$1 = this;return self__.meta11048;
});
cljs.core.async.t11047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11049,meta11048__$1){var self__ = this;
var _11049__$1 = this;return (new cljs.core.async.t11047(self__.f,self__.fn_handler,meta11048__$1));
});
cljs.core.async.__GT_t11047 = (function __GT_t11047(f__$1,fn_handler__$1,meta11048){return (new cljs.core.async.t11047(f__$1,fn_handler__$1,meta11048));
});
}
return (new cljs.core.async.t11047(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11051 = buff;if(G__11051)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__11051.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11051.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11051);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11051);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
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
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
{var val_11052 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11052);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11052,ret){
return (function (){return fn1.call(null,val_11052);
});})(val_11052,ret))
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
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3541__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___11053 = n;var x_11054 = (0);while(true){
if((x_11054 < n__4409__auto___11053))
{(a[x_11054] = (0));
{
var G__11055 = (x_11054 + (1));
x_11054 = G__11055;
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
var G__11056 = (i + (1));
i = G__11056;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11060 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11060 = (function (flag,alt_flag,meta11061){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11061 = meta11061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11060.cljs$lang$type = true;
cljs.core.async.t11060.cljs$lang$ctorStr = "cljs.core.async/t11060";
cljs.core.async.t11060.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11060");
});})(flag))
;
cljs.core.async.t11060.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11062){var self__ = this;
var _11062__$1 = this;return self__.meta11061;
});})(flag))
;
cljs.core.async.t11060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11062,meta11061__$1){var self__ = this;
var _11062__$1 = this;return (new cljs.core.async.t11060(self__.flag,self__.alt_flag,meta11061__$1));
});})(flag))
;
cljs.core.async.__GT_t11060 = ((function (flag){
return (function __GT_t11060(flag__$1,alt_flag__$1,meta11061){return (new cljs.core.async.t11060(flag__$1,alt_flag__$1,meta11061));
});})(flag))
;
}
return (new cljs.core.async.t11060(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11066 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11066 = (function (cb,flag,alt_handler,meta11067){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11067 = meta11067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11066.cljs$lang$type = true;
cljs.core.async.t11066.cljs$lang$ctorStr = "cljs.core.async/t11066";
cljs.core.async.t11066.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11066");
});
cljs.core.async.t11066.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11068){var self__ = this;
var _11068__$1 = this;return self__.meta11067;
});
cljs.core.async.t11066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11068,meta11067__$1){var self__ = this;
var _11068__$1 = this;return (new cljs.core.async.t11066(self__.cb,self__.flag,self__.alt_handler,meta11067__$1));
});
cljs.core.async.__GT_t11066 = (function __GT_t11066(cb__$1,flag__$1,alt_handler__$1,meta11067){return (new cljs.core.async.t11066(cb__$1,flag__$1,alt_handler__$1,meta11067));
});
}
return (new cljs.core.async.t11066(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11069_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11069_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11070 = (i + (1));
i = G__11070;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
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
var alts_BANG___delegate = function (ports,p__11071){var map__11073 = p__11071;var map__11073__$1 = ((cljs.core.seq_QMARK_.call(null,map__11073))?cljs.core.apply.call(null,cljs.core.hash_map,map__11073):map__11073);var opts = map__11073__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11071 = null;if (arguments.length > 1) {
  p__11071 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11071);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11074){
var ports = cljs.core.first(arglist__11074);
var p__11071 = cljs.core.rest(arglist__11074);
return alts_BANG___delegate(ports,p__11071);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11082 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11082 = (function (ch,f,map_LT_,meta11083){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11083 = meta11083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11082.cljs$lang$type = true;
cljs.core.async.t11082.cljs$lang$ctorStr = "cljs.core.async/t11082";
cljs.core.async.t11082.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11082");
});
cljs.core.async.t11082.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11082.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11085 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11085 = (function (fn1,_,meta11083,ch,f,map_LT_,meta11086){
this.fn1 = fn1;
this._ = _;
this.meta11083 = meta11083;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11086 = meta11086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11085.cljs$lang$type = true;
cljs.core.async.t11085.cljs$lang$ctorStr = "cljs.core.async/t11085";
cljs.core.async.t11085.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11085");
});})(___$1))
;
cljs.core.async.t11085.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11085.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11075_SHARP_){return f1.call(null,(((p1__11075_SHARP_ == null))?null:self__.f.call(null,p1__11075_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11087){var self__ = this;
var _11087__$1 = this;return self__.meta11086;
});})(___$1))
;
cljs.core.async.t11085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11087,meta11086__$1){var self__ = this;
var _11087__$1 = this;return (new cljs.core.async.t11085(self__.fn1,self__._,self__.meta11083,self__.ch,self__.f,self__.map_LT_,meta11086__$1));
});})(___$1))
;
cljs.core.async.__GT_t11085 = ((function (___$1){
return (function __GT_t11085(fn1__$1,___$2,meta11083__$1,ch__$2,f__$2,map_LT___$2,meta11086){return (new cljs.core.async.t11085(fn1__$1,___$2,meta11083__$1,ch__$2,f__$2,map_LT___$2,meta11086));
});})(___$1))
;
}
return (new cljs.core.async.t11085(fn1,___$1,self__.meta11083,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11082.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11084){var self__ = this;
var _11084__$1 = this;return self__.meta11083;
});
cljs.core.async.t11082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11084,meta11083__$1){var self__ = this;
var _11084__$1 = this;return (new cljs.core.async.t11082(self__.ch,self__.f,self__.map_LT_,meta11083__$1));
});
cljs.core.async.__GT_t11082 = (function __GT_t11082(ch__$1,f__$1,map_LT___$1,meta11083){return (new cljs.core.async.t11082(ch__$1,f__$1,map_LT___$1,meta11083));
});
}
return (new cljs.core.async.t11082(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11091 = (function (ch,f,map_GT_,meta11092){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11092 = meta11092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11091.cljs$lang$type = true;
cljs.core.async.t11091.cljs$lang$ctorStr = "cljs.core.async/t11091";
cljs.core.async.t11091.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11091");
});
cljs.core.async.t11091.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11091.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11091.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11093){var self__ = this;
var _11093__$1 = this;return self__.meta11092;
});
cljs.core.async.t11091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11093,meta11092__$1){var self__ = this;
var _11093__$1 = this;return (new cljs.core.async.t11091(self__.ch,self__.f,self__.map_GT_,meta11092__$1));
});
cljs.core.async.__GT_t11091 = (function __GT_t11091(ch__$1,f__$1,map_GT___$1,meta11092){return (new cljs.core.async.t11091(ch__$1,f__$1,map_GT___$1,meta11092));
});
}
return (new cljs.core.async.t11091(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11097 = (function (ch,p,filter_GT_,meta11098){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11098 = meta11098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11097.cljs$lang$type = true;
cljs.core.async.t11097.cljs$lang$ctorStr = "cljs.core.async/t11097";
cljs.core.async.t11097.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11097");
});
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11099){var self__ = this;
var _11099__$1 = this;return self__.meta11098;
});
cljs.core.async.t11097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11099,meta11098__$1){var self__ = this;
var _11099__$1 = this;return (new cljs.core.async.t11097(self__.ch,self__.p,self__.filter_GT_,meta11098__$1));
});
cljs.core.async.__GT_t11097 = (function __GT_t11097(ch__$1,p__$1,filter_GT___$1,meta11098){return (new cljs.core.async.t11097(ch__$1,p__$1,filter_GT___$1,meta11098));
});
}
return (new cljs.core.async.t11097(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8556__auto___11182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___11182,out){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___11182,out){
return (function (state_11161){var state_val_11162 = (state_11161[(1)]);if((state_val_11162 === (7)))
{var inst_11157 = (state_11161[(2)]);var state_11161__$1 = state_11161;var statearr_11163_11183 = state_11161__$1;(statearr_11163_11183[(2)] = inst_11157);
(statearr_11163_11183[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (1)))
{var state_11161__$1 = state_11161;var statearr_11164_11184 = state_11161__$1;(statearr_11164_11184[(2)] = null);
(statearr_11164_11184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (4)))
{var inst_11143 = (state_11161[(7)]);var inst_11143__$1 = (state_11161[(2)]);var inst_11144 = (inst_11143__$1 == null);var state_11161__$1 = (function (){var statearr_11165 = state_11161;(statearr_11165[(7)] = inst_11143__$1);
return statearr_11165;
})();if(cljs.core.truth_(inst_11144))
{var statearr_11166_11185 = state_11161__$1;(statearr_11166_11185[(1)] = (5));
} else
{var statearr_11167_11186 = state_11161__$1;(statearr_11167_11186[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (6)))
{var inst_11143 = (state_11161[(7)]);var inst_11148 = p.call(null,inst_11143);var state_11161__$1 = state_11161;if(cljs.core.truth_(inst_11148))
{var statearr_11168_11187 = state_11161__$1;(statearr_11168_11187[(1)] = (8));
} else
{var statearr_11169_11188 = state_11161__$1;(statearr_11169_11188[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (3)))
{var inst_11159 = (state_11161[(2)]);var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11161__$1,inst_11159);
} else
{if((state_val_11162 === (2)))
{var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11161__$1,(4),ch);
} else
{if((state_val_11162 === (11)))
{var inst_11151 = (state_11161[(2)]);var state_11161__$1 = state_11161;var statearr_11170_11189 = state_11161__$1;(statearr_11170_11189[(2)] = inst_11151);
(statearr_11170_11189[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (9)))
{var state_11161__$1 = state_11161;var statearr_11171_11190 = state_11161__$1;(statearr_11171_11190[(2)] = null);
(statearr_11171_11190[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (5)))
{var inst_11146 = cljs.core.async.close_BANG_.call(null,out);var state_11161__$1 = state_11161;var statearr_11172_11191 = state_11161__$1;(statearr_11172_11191[(2)] = inst_11146);
(statearr_11172_11191[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (10)))
{var inst_11154 = (state_11161[(2)]);var state_11161__$1 = (function (){var statearr_11173 = state_11161;(statearr_11173[(8)] = inst_11154);
return statearr_11173;
})();var statearr_11174_11192 = state_11161__$1;(statearr_11174_11192[(2)] = null);
(statearr_11174_11192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (8)))
{var inst_11143 = (state_11161[(7)]);var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11161__$1,(11),out,inst_11143);
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
});})(c__8556__auto___11182,out))
;return ((function (switch__8541__auto__,c__8556__auto___11182,out){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_11178 = [null,null,null,null,null,null,null,null,null];(statearr_11178[(0)] = state_machine__8542__auto__);
(statearr_11178[(1)] = (1));
return statearr_11178;
});
var state_machine__8542__auto____1 = (function (state_11161){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_11161);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e11179){if((e11179 instanceof Object))
{var ex__8545__auto__ = e11179;var statearr_11180_11193 = state_11161;(statearr_11180_11193[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11161);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11194 = state_11161;
state_11161 = G__11194;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_11161){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_11161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___11182,out))
})();var state__8558__auto__ = (function (){var statearr_11181 = f__8557__auto__.call(null);(statearr_11181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___11182);
return statearr_11181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___11182,out))
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
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8556__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto__){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto__){
return (function (state_11346){var state_val_11347 = (state_11346[(1)]);if((state_val_11347 === (7)))
{var inst_11342 = (state_11346[(2)]);var state_11346__$1 = state_11346;var statearr_11348_11385 = state_11346__$1;(statearr_11348_11385[(2)] = inst_11342);
(statearr_11348_11385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (20)))
{var inst_11317 = (state_11346[(7)]);var inst_11328 = (state_11346[(2)]);var inst_11329 = cljs.core.next.call(null,inst_11317);var inst_11303 = inst_11329;var inst_11304 = null;var inst_11305 = (0);var inst_11306 = (0);var state_11346__$1 = (function (){var statearr_11349 = state_11346;(statearr_11349[(8)] = inst_11328);
(statearr_11349[(9)] = inst_11305);
(statearr_11349[(10)] = inst_11304);
(statearr_11349[(11)] = inst_11303);
(statearr_11349[(12)] = inst_11306);
return statearr_11349;
})();var statearr_11350_11386 = state_11346__$1;(statearr_11350_11386[(2)] = null);
(statearr_11350_11386[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (1)))
{var state_11346__$1 = state_11346;var statearr_11351_11387 = state_11346__$1;(statearr_11351_11387[(2)] = null);
(statearr_11351_11387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (4)))
{var inst_11292 = (state_11346[(13)]);var inst_11292__$1 = (state_11346[(2)]);var inst_11293 = (inst_11292__$1 == null);var state_11346__$1 = (function (){var statearr_11355 = state_11346;(statearr_11355[(13)] = inst_11292__$1);
return statearr_11355;
})();if(cljs.core.truth_(inst_11293))
{var statearr_11356_11388 = state_11346__$1;(statearr_11356_11388[(1)] = (5));
} else
{var statearr_11357_11389 = state_11346__$1;(statearr_11357_11389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (15)))
{var state_11346__$1 = state_11346;var statearr_11358_11390 = state_11346__$1;(statearr_11358_11390[(2)] = null);
(statearr_11358_11390[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (13)))
{var inst_11305 = (state_11346[(9)]);var inst_11304 = (state_11346[(10)]);var inst_11303 = (state_11346[(11)]);var inst_11306 = (state_11346[(12)]);var inst_11313 = (state_11346[(2)]);var inst_11314 = (inst_11306 + (1));var tmp11352 = inst_11305;var tmp11353 = inst_11304;var tmp11354 = inst_11303;var inst_11303__$1 = tmp11354;var inst_11304__$1 = tmp11353;var inst_11305__$1 = tmp11352;var inst_11306__$1 = inst_11314;var state_11346__$1 = (function (){var statearr_11359 = state_11346;(statearr_11359[(9)] = inst_11305__$1);
(statearr_11359[(10)] = inst_11304__$1);
(statearr_11359[(11)] = inst_11303__$1);
(statearr_11359[(12)] = inst_11306__$1);
(statearr_11359[(14)] = inst_11313);
return statearr_11359;
})();var statearr_11360_11391 = state_11346__$1;(statearr_11360_11391[(2)] = null);
(statearr_11360_11391[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (6)))
{var inst_11292 = (state_11346[(13)]);var inst_11297 = f.call(null,inst_11292);var inst_11302 = cljs.core.seq.call(null,inst_11297);var inst_11303 = inst_11302;var inst_11304 = null;var inst_11305 = (0);var inst_11306 = (0);var state_11346__$1 = (function (){var statearr_11361 = state_11346;(statearr_11361[(9)] = inst_11305);
(statearr_11361[(10)] = inst_11304);
(statearr_11361[(11)] = inst_11303);
(statearr_11361[(12)] = inst_11306);
return statearr_11361;
})();var statearr_11362_11392 = state_11346__$1;(statearr_11362_11392[(2)] = null);
(statearr_11362_11392[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (17)))
{var inst_11317 = (state_11346[(7)]);var inst_11321 = cljs.core.chunk_first.call(null,inst_11317);var inst_11322 = cljs.core.chunk_rest.call(null,inst_11317);var inst_11323 = cljs.core.count.call(null,inst_11321);var inst_11303 = inst_11322;var inst_11304 = inst_11321;var inst_11305 = inst_11323;var inst_11306 = (0);var state_11346__$1 = (function (){var statearr_11363 = state_11346;(statearr_11363[(9)] = inst_11305);
(statearr_11363[(10)] = inst_11304);
(statearr_11363[(11)] = inst_11303);
(statearr_11363[(12)] = inst_11306);
return statearr_11363;
})();var statearr_11364_11393 = state_11346__$1;(statearr_11364_11393[(2)] = null);
(statearr_11364_11393[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (3)))
{var inst_11344 = (state_11346[(2)]);var state_11346__$1 = state_11346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11346__$1,inst_11344);
} else
{if((state_val_11347 === (12)))
{var inst_11337 = (state_11346[(2)]);var state_11346__$1 = state_11346;var statearr_11365_11394 = state_11346__$1;(statearr_11365_11394[(2)] = inst_11337);
(statearr_11365_11394[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (2)))
{var state_11346__$1 = state_11346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11346__$1,(4),in$);
} else
{if((state_val_11347 === (19)))
{var inst_11332 = (state_11346[(2)]);var state_11346__$1 = state_11346;var statearr_11366_11395 = state_11346__$1;(statearr_11366_11395[(2)] = inst_11332);
(statearr_11366_11395[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (11)))
{var inst_11303 = (state_11346[(11)]);var inst_11317 = (state_11346[(7)]);var inst_11317__$1 = cljs.core.seq.call(null,inst_11303);var state_11346__$1 = (function (){var statearr_11367 = state_11346;(statearr_11367[(7)] = inst_11317__$1);
return statearr_11367;
})();if(inst_11317__$1)
{var statearr_11368_11396 = state_11346__$1;(statearr_11368_11396[(1)] = (14));
} else
{var statearr_11369_11397 = state_11346__$1;(statearr_11369_11397[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (9)))
{var inst_11339 = (state_11346[(2)]);var state_11346__$1 = (function (){var statearr_11370 = state_11346;(statearr_11370[(15)] = inst_11339);
return statearr_11370;
})();var statearr_11371_11398 = state_11346__$1;(statearr_11371_11398[(2)] = null);
(statearr_11371_11398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (5)))
{var inst_11295 = cljs.core.async.close_BANG_.call(null,out);var state_11346__$1 = state_11346;var statearr_11372_11399 = state_11346__$1;(statearr_11372_11399[(2)] = inst_11295);
(statearr_11372_11399[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (14)))
{var inst_11317 = (state_11346[(7)]);var inst_11319 = cljs.core.chunked_seq_QMARK_.call(null,inst_11317);var state_11346__$1 = state_11346;if(inst_11319)
{var statearr_11373_11400 = state_11346__$1;(statearr_11373_11400[(1)] = (17));
} else
{var statearr_11374_11401 = state_11346__$1;(statearr_11374_11401[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (16)))
{var inst_11335 = (state_11346[(2)]);var state_11346__$1 = state_11346;var statearr_11375_11402 = state_11346__$1;(statearr_11375_11402[(2)] = inst_11335);
(statearr_11375_11402[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11347 === (10)))
{var inst_11304 = (state_11346[(10)]);var inst_11306 = (state_11346[(12)]);var inst_11311 = cljs.core._nth.call(null,inst_11304,inst_11306);var state_11346__$1 = state_11346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11346__$1,(13),out,inst_11311);
} else
{if((state_val_11347 === (18)))
{var inst_11317 = (state_11346[(7)]);var inst_11326 = cljs.core.first.call(null,inst_11317);var state_11346__$1 = state_11346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11346__$1,(20),out,inst_11326);
} else
{if((state_val_11347 === (8)))
{var inst_11305 = (state_11346[(9)]);var inst_11306 = (state_11346[(12)]);var inst_11308 = (inst_11306 < inst_11305);var inst_11309 = inst_11308;var state_11346__$1 = state_11346;if(cljs.core.truth_(inst_11309))
{var statearr_11376_11403 = state_11346__$1;(statearr_11376_11403[(1)] = (10));
} else
{var statearr_11377_11404 = state_11346__$1;(statearr_11377_11404[(1)] = (11));
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
});})(c__8556__auto__))
;return ((function (switch__8541__auto__,c__8556__auto__){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_11381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11381[(0)] = state_machine__8542__auto__);
(statearr_11381[(1)] = (1));
return statearr_11381;
});
var state_machine__8542__auto____1 = (function (state_11346){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_11346);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e11382){if((e11382 instanceof Object))
{var ex__8545__auto__ = e11382;var statearr_11383_11405 = state_11346;(statearr_11383_11405[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11406 = state_11346;
state_11346 = G__11406;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_11346){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_11346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto__))
})();var state__8558__auto__ = (function (){var statearr_11384 = f__8557__auto__.call(null);(statearr_11384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto__);
return statearr_11384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto__))
);
return c__8556__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
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
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
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
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8556__auto___11487 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___11487){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___11487){
return (function (state_11466){var state_val_11467 = (state_11466[(1)]);if((state_val_11467 === (7)))
{var inst_11462 = (state_11466[(2)]);var state_11466__$1 = state_11466;var statearr_11468_11488 = state_11466__$1;(statearr_11468_11488[(2)] = inst_11462);
(statearr_11468_11488[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11467 === (1)))
{var state_11466__$1 = state_11466;var statearr_11469_11489 = state_11466__$1;(statearr_11469_11489[(2)] = null);
(statearr_11469_11489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11467 === (4)))
{var inst_11449 = (state_11466[(7)]);var inst_11449__$1 = (state_11466[(2)]);var inst_11450 = (inst_11449__$1 == null);var state_11466__$1 = (function (){var statearr_11470 = state_11466;(statearr_11470[(7)] = inst_11449__$1);
return statearr_11470;
})();if(cljs.core.truth_(inst_11450))
{var statearr_11471_11490 = state_11466__$1;(statearr_11471_11490[(1)] = (5));
} else
{var statearr_11472_11491 = state_11466__$1;(statearr_11472_11491[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11467 === (6)))
{var inst_11449 = (state_11466[(7)]);var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11466__$1,(11),to,inst_11449);
} else
{if((state_val_11467 === (3)))
{var inst_11464 = (state_11466[(2)]);var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11466__$1,inst_11464);
} else
{if((state_val_11467 === (2)))
{var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11466__$1,(4),from);
} else
{if((state_val_11467 === (11)))
{var inst_11459 = (state_11466[(2)]);var state_11466__$1 = (function (){var statearr_11473 = state_11466;(statearr_11473[(8)] = inst_11459);
return statearr_11473;
})();var statearr_11474_11492 = state_11466__$1;(statearr_11474_11492[(2)] = null);
(statearr_11474_11492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11467 === (9)))
{var state_11466__$1 = state_11466;var statearr_11475_11493 = state_11466__$1;(statearr_11475_11493[(2)] = null);
(statearr_11475_11493[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11467 === (5)))
{var state_11466__$1 = state_11466;if(cljs.core.truth_(close_QMARK_))
{var statearr_11476_11494 = state_11466__$1;(statearr_11476_11494[(1)] = (8));
} else
{var statearr_11477_11495 = state_11466__$1;(statearr_11477_11495[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11467 === (10)))
{var inst_11456 = (state_11466[(2)]);var state_11466__$1 = state_11466;var statearr_11478_11496 = state_11466__$1;(statearr_11478_11496[(2)] = inst_11456);
(statearr_11478_11496[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11467 === (8)))
{var inst_11453 = cljs.core.async.close_BANG_.call(null,to);var state_11466__$1 = state_11466;var statearr_11479_11497 = state_11466__$1;(statearr_11479_11497[(2)] = inst_11453);
(statearr_11479_11497[(1)] = (10));
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
});})(c__8556__auto___11487))
;return ((function (switch__8541__auto__,c__8556__auto___11487){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_11483 = [null,null,null,null,null,null,null,null,null];(statearr_11483[(0)] = state_machine__8542__auto__);
(statearr_11483[(1)] = (1));
return statearr_11483;
});
var state_machine__8542__auto____1 = (function (state_11466){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_11466);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e11484){if((e11484 instanceof Object))
{var ex__8545__auto__ = e11484;var statearr_11485_11498 = state_11466;(statearr_11485_11498[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11484;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11499 = state_11466;
state_11466 = G__11499;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_11466){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_11466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___11487))
})();var state__8558__auto__ = (function (){var statearr_11486 = f__8557__auto__.call(null);(statearr_11486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___11487);
return statearr_11486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___11487))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8556__auto___11586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___11586,tc,fc){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___11586,tc,fc){
return (function (state_11564){var state_val_11565 = (state_11564[(1)]);if((state_val_11565 === (7)))
{var inst_11560 = (state_11564[(2)]);var state_11564__$1 = state_11564;var statearr_11566_11587 = state_11564__$1;(statearr_11566_11587[(2)] = inst_11560);
(statearr_11566_11587[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11565 === (1)))
{var state_11564__$1 = state_11564;var statearr_11567_11588 = state_11564__$1;(statearr_11567_11588[(2)] = null);
(statearr_11567_11588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11565 === (4)))
{var inst_11545 = (state_11564[(7)]);var inst_11545__$1 = (state_11564[(2)]);var inst_11546 = (inst_11545__$1 == null);var state_11564__$1 = (function (){var statearr_11568 = state_11564;(statearr_11568[(7)] = inst_11545__$1);
return statearr_11568;
})();if(cljs.core.truth_(inst_11546))
{var statearr_11569_11589 = state_11564__$1;(statearr_11569_11589[(1)] = (5));
} else
{var statearr_11570_11590 = state_11564__$1;(statearr_11570_11590[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11565 === (6)))
{var inst_11545 = (state_11564[(7)]);var inst_11551 = p.call(null,inst_11545);var state_11564__$1 = state_11564;if(cljs.core.truth_(inst_11551))
{var statearr_11571_11591 = state_11564__$1;(statearr_11571_11591[(1)] = (9));
} else
{var statearr_11572_11592 = state_11564__$1;(statearr_11572_11592[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11565 === (3)))
{var inst_11562 = (state_11564[(2)]);var state_11564__$1 = state_11564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11564__$1,inst_11562);
} else
{if((state_val_11565 === (2)))
{var state_11564__$1 = state_11564;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11564__$1,(4),ch);
} else
{if((state_val_11565 === (11)))
{var inst_11545 = (state_11564[(7)]);var inst_11555 = (state_11564[(2)]);var state_11564__$1 = state_11564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11564__$1,(8),inst_11555,inst_11545);
} else
{if((state_val_11565 === (9)))
{var state_11564__$1 = state_11564;var statearr_11573_11593 = state_11564__$1;(statearr_11573_11593[(2)] = tc);
(statearr_11573_11593[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11565 === (5)))
{var inst_11548 = cljs.core.async.close_BANG_.call(null,tc);var inst_11549 = cljs.core.async.close_BANG_.call(null,fc);var state_11564__$1 = (function (){var statearr_11574 = state_11564;(statearr_11574[(8)] = inst_11548);
return statearr_11574;
})();var statearr_11575_11594 = state_11564__$1;(statearr_11575_11594[(2)] = inst_11549);
(statearr_11575_11594[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11565 === (10)))
{var state_11564__$1 = state_11564;var statearr_11576_11595 = state_11564__$1;(statearr_11576_11595[(2)] = fc);
(statearr_11576_11595[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11565 === (8)))
{var inst_11557 = (state_11564[(2)]);var state_11564__$1 = (function (){var statearr_11577 = state_11564;(statearr_11577[(9)] = inst_11557);
return statearr_11577;
})();var statearr_11578_11596 = state_11564__$1;(statearr_11578_11596[(2)] = null);
(statearr_11578_11596[(1)] = (2));
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
});})(c__8556__auto___11586,tc,fc))
;return ((function (switch__8541__auto__,c__8556__auto___11586,tc,fc){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_11582 = [null,null,null,null,null,null,null,null,null,null];(statearr_11582[(0)] = state_machine__8542__auto__);
(statearr_11582[(1)] = (1));
return statearr_11582;
});
var state_machine__8542__auto____1 = (function (state_11564){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_11564);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e11583){if((e11583 instanceof Object))
{var ex__8545__auto__ = e11583;var statearr_11584_11597 = state_11564;(statearr_11584_11597[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11564);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11598 = state_11564;
state_11564 = G__11598;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_11564){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_11564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___11586,tc,fc))
})();var state__8558__auto__ = (function (){var statearr_11585 = f__8557__auto__.call(null);(statearr_11585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___11586);
return statearr_11585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___11586,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8556__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto__){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto__){
return (function (state_11645){var state_val_11646 = (state_11645[(1)]);if((state_val_11646 === (7)))
{var inst_11641 = (state_11645[(2)]);var state_11645__$1 = state_11645;var statearr_11647_11663 = state_11645__$1;(statearr_11647_11663[(2)] = inst_11641);
(statearr_11647_11663[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11646 === (6)))
{var inst_11631 = (state_11645[(7)]);var inst_11634 = (state_11645[(8)]);var inst_11638 = f.call(null,inst_11631,inst_11634);var inst_11631__$1 = inst_11638;var state_11645__$1 = (function (){var statearr_11648 = state_11645;(statearr_11648[(7)] = inst_11631__$1);
return statearr_11648;
})();var statearr_11649_11664 = state_11645__$1;(statearr_11649_11664[(2)] = null);
(statearr_11649_11664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11646 === (5)))
{var inst_11631 = (state_11645[(7)]);var state_11645__$1 = state_11645;var statearr_11650_11665 = state_11645__$1;(statearr_11650_11665[(2)] = inst_11631);
(statearr_11650_11665[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11646 === (4)))
{var inst_11634 = (state_11645[(8)]);var inst_11634__$1 = (state_11645[(2)]);var inst_11635 = (inst_11634__$1 == null);var state_11645__$1 = (function (){var statearr_11651 = state_11645;(statearr_11651[(8)] = inst_11634__$1);
return statearr_11651;
})();if(cljs.core.truth_(inst_11635))
{var statearr_11652_11666 = state_11645__$1;(statearr_11652_11666[(1)] = (5));
} else
{var statearr_11653_11667 = state_11645__$1;(statearr_11653_11667[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11646 === (3)))
{var inst_11643 = (state_11645[(2)]);var state_11645__$1 = state_11645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11645__$1,inst_11643);
} else
{if((state_val_11646 === (2)))
{var state_11645__$1 = state_11645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11645__$1,(4),ch);
} else
{if((state_val_11646 === (1)))
{var inst_11631 = init;var state_11645__$1 = (function (){var statearr_11654 = state_11645;(statearr_11654[(7)] = inst_11631);
return statearr_11654;
})();var statearr_11655_11668 = state_11645__$1;(statearr_11655_11668[(2)] = null);
(statearr_11655_11668[(1)] = (2));
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
});})(c__8556__auto__))
;return ((function (switch__8541__auto__,c__8556__auto__){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_11659 = [null,null,null,null,null,null,null,null,null];(statearr_11659[(0)] = state_machine__8542__auto__);
(statearr_11659[(1)] = (1));
return statearr_11659;
});
var state_machine__8542__auto____1 = (function (state_11645){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_11645);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e11660){if((e11660 instanceof Object))
{var ex__8545__auto__ = e11660;var statearr_11661_11669 = state_11645;(statearr_11661_11669[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11645);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11660;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11670 = state_11645;
state_11645 = G__11670;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_11645){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_11645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto__))
})();var state__8558__auto__ = (function (){var statearr_11662 = f__8557__auto__.call(null);(statearr_11662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto__);
return statearr_11662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto__))
);
return c__8556__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8556__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto__){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto__){
return (function (state_11732){var state_val_11733 = (state_11732[(1)]);if((state_val_11733 === (7)))
{var inst_11713 = (state_11732[(7)]);var inst_11718 = (state_11732[(2)]);var inst_11719 = cljs.core.next.call(null,inst_11713);var inst_11713__$1 = inst_11719;var state_11732__$1 = (function (){var statearr_11734 = state_11732;(statearr_11734[(7)] = inst_11713__$1);
(statearr_11734[(8)] = inst_11718);
return statearr_11734;
})();var statearr_11735_11753 = state_11732__$1;(statearr_11735_11753[(2)] = null);
(statearr_11735_11753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11733 === (1)))
{var inst_11712 = cljs.core.seq.call(null,coll);var inst_11713 = inst_11712;var state_11732__$1 = (function (){var statearr_11736 = state_11732;(statearr_11736[(7)] = inst_11713);
return statearr_11736;
})();var statearr_11737_11754 = state_11732__$1;(statearr_11737_11754[(2)] = null);
(statearr_11737_11754[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11733 === (4)))
{var inst_11713 = (state_11732[(7)]);var inst_11716 = cljs.core.first.call(null,inst_11713);var state_11732__$1 = state_11732;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11732__$1,(7),ch,inst_11716);
} else
{if((state_val_11733 === (6)))
{var inst_11728 = (state_11732[(2)]);var state_11732__$1 = state_11732;var statearr_11738_11755 = state_11732__$1;(statearr_11738_11755[(2)] = inst_11728);
(statearr_11738_11755[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11733 === (3)))
{var inst_11730 = (state_11732[(2)]);var state_11732__$1 = state_11732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11732__$1,inst_11730);
} else
{if((state_val_11733 === (2)))
{var inst_11713 = (state_11732[(7)]);var state_11732__$1 = state_11732;if(cljs.core.truth_(inst_11713))
{var statearr_11739_11756 = state_11732__$1;(statearr_11739_11756[(1)] = (4));
} else
{var statearr_11740_11757 = state_11732__$1;(statearr_11740_11757[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11733 === (9)))
{var state_11732__$1 = state_11732;var statearr_11741_11758 = state_11732__$1;(statearr_11741_11758[(2)] = null);
(statearr_11741_11758[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11733 === (5)))
{var state_11732__$1 = state_11732;if(cljs.core.truth_(close_QMARK_))
{var statearr_11742_11759 = state_11732__$1;(statearr_11742_11759[(1)] = (8));
} else
{var statearr_11743_11760 = state_11732__$1;(statearr_11743_11760[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11733 === (10)))
{var inst_11726 = (state_11732[(2)]);var state_11732__$1 = state_11732;var statearr_11744_11761 = state_11732__$1;(statearr_11744_11761[(2)] = inst_11726);
(statearr_11744_11761[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11733 === (8)))
{var inst_11723 = cljs.core.async.close_BANG_.call(null,ch);var state_11732__$1 = state_11732;var statearr_11745_11762 = state_11732__$1;(statearr_11745_11762[(2)] = inst_11723);
(statearr_11745_11762[(1)] = (10));
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
});})(c__8556__auto__))
;return ((function (switch__8541__auto__,c__8556__auto__){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_11749 = [null,null,null,null,null,null,null,null,null];(statearr_11749[(0)] = state_machine__8542__auto__);
(statearr_11749[(1)] = (1));
return statearr_11749;
});
var state_machine__8542__auto____1 = (function (state_11732){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_11732);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e11750){if((e11750 instanceof Object))
{var ex__8545__auto__ = e11750;var statearr_11751_11763 = state_11732;(statearr_11751_11763[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11750;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11764 = state_11732;
state_11732 = G__11764;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_11732){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_11732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto__))
})();var state__8558__auto__ = (function (){var statearr_11752 = f__8557__auto__.call(null);(statearr_11752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto__);
return statearr_11752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto__))
);
return c__8556__auto__;
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
cljs.core.async.Mux = (function (){var obj11766 = {};return obj11766;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11768 = {};return obj11768;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11992 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11992 = (function (cs,ch,mult,meta11993){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11993 = meta11993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11992.cljs$lang$type = true;
cljs.core.async.t11992.cljs$lang$ctorStr = "cljs.core.async/t11992";
cljs.core.async.t11992.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11992");
});})(cs))
;
cljs.core.async.t11992.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11992.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11992.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11992.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11992.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11994){var self__ = this;
var _11994__$1 = this;return self__.meta11993;
});})(cs))
;
cljs.core.async.t11992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11994,meta11993__$1){var self__ = this;
var _11994__$1 = this;return (new cljs.core.async.t11992(self__.cs,self__.ch,self__.mult,meta11993__$1));
});})(cs))
;
cljs.core.async.__GT_t11992 = ((function (cs){
return (function __GT_t11992(cs__$1,ch__$1,mult__$1,meta11993){return (new cljs.core.async.t11992(cs__$1,ch__$1,mult__$1,meta11993));
});})(cs))
;
}
return (new cljs.core.async.t11992(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8556__auto___12215 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___12215,cs,m,dchan,dctr,done){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___12215,cs,m,dchan,dctr,done){
return (function (state_12129){var state_val_12130 = (state_12129[(1)]);if((state_val_12130 === (7)))
{var inst_12125 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12131_12216 = state_12129__$1;(statearr_12131_12216[(2)] = inst_12125);
(statearr_12131_12216[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (20)))
{var inst_12026 = (state_12129[(7)]);var inst_12036 = cljs.core.first.call(null,inst_12026);var inst_12037 = cljs.core.nth.call(null,inst_12036,(0),null);var inst_12038 = cljs.core.nth.call(null,inst_12036,(1),null);var state_12129__$1 = (function (){var statearr_12132 = state_12129;(statearr_12132[(8)] = inst_12037);
return statearr_12132;
})();if(cljs.core.truth_(inst_12038))
{var statearr_12133_12217 = state_12129__$1;(statearr_12133_12217[(1)] = (22));
} else
{var statearr_12134_12218 = state_12129__$1;(statearr_12134_12218[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (27)))
{var inst_12068 = (state_12129[(9)]);var inst_12066 = (state_12129[(10)]);var inst_12073 = cljs.core._nth.call(null,inst_12066,inst_12068);var state_12129__$1 = (function (){var statearr_12135 = state_12129;(statearr_12135[(11)] = inst_12073);
return statearr_12135;
})();var statearr_12136_12219 = state_12129__$1;(statearr_12136_12219[(2)] = null);
(statearr_12136_12219[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (1)))
{var state_12129__$1 = state_12129;var statearr_12137_12220 = state_12129__$1;(statearr_12137_12220[(2)] = null);
(statearr_12137_12220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (24)))
{var inst_12026 = (state_12129[(7)]);var inst_12043 = (state_12129[(2)]);var inst_12044 = cljs.core.next.call(null,inst_12026);var inst_12006 = inst_12044;var inst_12007 = null;var inst_12008 = (0);var inst_12009 = (0);var state_12129__$1 = (function (){var statearr_12138 = state_12129;(statearr_12138[(12)] = inst_12043);
(statearr_12138[(13)] = inst_12006);
(statearr_12138[(14)] = inst_12009);
(statearr_12138[(15)] = inst_12007);
(statearr_12138[(16)] = inst_12008);
return statearr_12138;
})();var statearr_12139_12221 = state_12129__$1;(statearr_12139_12221[(2)] = null);
(statearr_12139_12221[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (39)))
{var inst_12086 = (state_12129[(17)]);var inst_12104 = (state_12129[(2)]);var inst_12105 = cljs.core.next.call(null,inst_12086);var inst_12065 = inst_12105;var inst_12066 = null;var inst_12067 = (0);var inst_12068 = (0);var state_12129__$1 = (function (){var statearr_12143 = state_12129;(statearr_12143[(18)] = inst_12067);
(statearr_12143[(19)] = inst_12065);
(statearr_12143[(20)] = inst_12104);
(statearr_12143[(9)] = inst_12068);
(statearr_12143[(10)] = inst_12066);
return statearr_12143;
})();var statearr_12144_12222 = state_12129__$1;(statearr_12144_12222[(2)] = null);
(statearr_12144_12222[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (4)))
{var inst_11997 = (state_12129[(21)]);var inst_11997__$1 = (state_12129[(2)]);var inst_11998 = (inst_11997__$1 == null);var state_12129__$1 = (function (){var statearr_12145 = state_12129;(statearr_12145[(21)] = inst_11997__$1);
return statearr_12145;
})();if(cljs.core.truth_(inst_11998))
{var statearr_12146_12223 = state_12129__$1;(statearr_12146_12223[(1)] = (5));
} else
{var statearr_12147_12224 = state_12129__$1;(statearr_12147_12224[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (15)))
{var inst_12006 = (state_12129[(13)]);var inst_12009 = (state_12129[(14)]);var inst_12007 = (state_12129[(15)]);var inst_12008 = (state_12129[(16)]);var inst_12022 = (state_12129[(2)]);var inst_12023 = (inst_12009 + (1));var tmp12140 = inst_12006;var tmp12141 = inst_12007;var tmp12142 = inst_12008;var inst_12006__$1 = tmp12140;var inst_12007__$1 = tmp12141;var inst_12008__$1 = tmp12142;var inst_12009__$1 = inst_12023;var state_12129__$1 = (function (){var statearr_12148 = state_12129;(statearr_12148[(13)] = inst_12006__$1);
(statearr_12148[(22)] = inst_12022);
(statearr_12148[(14)] = inst_12009__$1);
(statearr_12148[(15)] = inst_12007__$1);
(statearr_12148[(16)] = inst_12008__$1);
return statearr_12148;
})();var statearr_12149_12225 = state_12129__$1;(statearr_12149_12225[(2)] = null);
(statearr_12149_12225[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (21)))
{var inst_12047 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12150_12226 = state_12129__$1;(statearr_12150_12226[(2)] = inst_12047);
(statearr_12150_12226[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (31)))
{var inst_12073 = (state_12129[(11)]);var inst_12074 = (state_12129[(2)]);var inst_12075 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12076 = cljs.core.async.untap_STAR_.call(null,m,inst_12073);var state_12129__$1 = (function (){var statearr_12151 = state_12129;(statearr_12151[(23)] = inst_12075);
(statearr_12151[(24)] = inst_12074);
return statearr_12151;
})();var statearr_12152_12227 = state_12129__$1;(statearr_12152_12227[(2)] = inst_12076);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (32)))
{var inst_11997 = (state_12129[(21)]);var inst_12073 = (state_12129[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12129,(31),Object,null,(30));var inst_12080 = cljs.core.async.put_BANG_.call(null,inst_12073,inst_11997,done);var state_12129__$1 = state_12129;var statearr_12153_12228 = state_12129__$1;(statearr_12153_12228[(2)] = inst_12080);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (40)))
{var inst_12095 = (state_12129[(25)]);var inst_12096 = (state_12129[(2)]);var inst_12097 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12098 = cljs.core.async.untap_STAR_.call(null,m,inst_12095);var state_12129__$1 = (function (){var statearr_12154 = state_12129;(statearr_12154[(26)] = inst_12097);
(statearr_12154[(27)] = inst_12096);
return statearr_12154;
})();var statearr_12155_12229 = state_12129__$1;(statearr_12155_12229[(2)] = inst_12098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (33)))
{var inst_12086 = (state_12129[(17)]);var inst_12088 = cljs.core.chunked_seq_QMARK_.call(null,inst_12086);var state_12129__$1 = state_12129;if(inst_12088)
{var statearr_12156_12230 = state_12129__$1;(statearr_12156_12230[(1)] = (36));
} else
{var statearr_12157_12231 = state_12129__$1;(statearr_12157_12231[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (13)))
{var inst_12016 = (state_12129[(28)]);var inst_12019 = cljs.core.async.close_BANG_.call(null,inst_12016);var state_12129__$1 = state_12129;var statearr_12158_12232 = state_12129__$1;(statearr_12158_12232[(2)] = inst_12019);
(statearr_12158_12232[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (22)))
{var inst_12037 = (state_12129[(8)]);var inst_12040 = cljs.core.async.close_BANG_.call(null,inst_12037);var state_12129__$1 = state_12129;var statearr_12159_12233 = state_12129__$1;(statearr_12159_12233[(2)] = inst_12040);
(statearr_12159_12233[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (36)))
{var inst_12086 = (state_12129[(17)]);var inst_12090 = cljs.core.chunk_first.call(null,inst_12086);var inst_12091 = cljs.core.chunk_rest.call(null,inst_12086);var inst_12092 = cljs.core.count.call(null,inst_12090);var inst_12065 = inst_12091;var inst_12066 = inst_12090;var inst_12067 = inst_12092;var inst_12068 = (0);var state_12129__$1 = (function (){var statearr_12160 = state_12129;(statearr_12160[(18)] = inst_12067);
(statearr_12160[(19)] = inst_12065);
(statearr_12160[(9)] = inst_12068);
(statearr_12160[(10)] = inst_12066);
return statearr_12160;
})();var statearr_12161_12234 = state_12129__$1;(statearr_12161_12234[(2)] = null);
(statearr_12161_12234[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (41)))
{var inst_12095 = (state_12129[(25)]);var inst_11997 = (state_12129[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12129,(40),Object,null,(39));var inst_12102 = cljs.core.async.put_BANG_.call(null,inst_12095,inst_11997,done);var state_12129__$1 = state_12129;var statearr_12162_12235 = state_12129__$1;(statearr_12162_12235[(2)] = inst_12102);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (43)))
{var state_12129__$1 = state_12129;var statearr_12163_12236 = state_12129__$1;(statearr_12163_12236[(2)] = null);
(statearr_12163_12236[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (29)))
{var inst_12113 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12164_12237 = state_12129__$1;(statearr_12164_12237[(2)] = inst_12113);
(statearr_12164_12237[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (44)))
{var inst_12122 = (state_12129[(2)]);var state_12129__$1 = (function (){var statearr_12165 = state_12129;(statearr_12165[(29)] = inst_12122);
return statearr_12165;
})();var statearr_12166_12238 = state_12129__$1;(statearr_12166_12238[(2)] = null);
(statearr_12166_12238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (6)))
{var inst_12057 = (state_12129[(30)]);var inst_12056 = cljs.core.deref.call(null,cs);var inst_12057__$1 = cljs.core.keys.call(null,inst_12056);var inst_12058 = cljs.core.count.call(null,inst_12057__$1);var inst_12059 = cljs.core.reset_BANG_.call(null,dctr,inst_12058);var inst_12064 = cljs.core.seq.call(null,inst_12057__$1);var inst_12065 = inst_12064;var inst_12066 = null;var inst_12067 = (0);var inst_12068 = (0);var state_12129__$1 = (function (){var statearr_12167 = state_12129;(statearr_12167[(18)] = inst_12067);
(statearr_12167[(19)] = inst_12065);
(statearr_12167[(30)] = inst_12057__$1);
(statearr_12167[(9)] = inst_12068);
(statearr_12167[(31)] = inst_12059);
(statearr_12167[(10)] = inst_12066);
return statearr_12167;
})();var statearr_12168_12239 = state_12129__$1;(statearr_12168_12239[(2)] = null);
(statearr_12168_12239[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (28)))
{var inst_12065 = (state_12129[(19)]);var inst_12086 = (state_12129[(17)]);var inst_12086__$1 = cljs.core.seq.call(null,inst_12065);var state_12129__$1 = (function (){var statearr_12169 = state_12129;(statearr_12169[(17)] = inst_12086__$1);
return statearr_12169;
})();if(inst_12086__$1)
{var statearr_12170_12240 = state_12129__$1;(statearr_12170_12240[(1)] = (33));
} else
{var statearr_12171_12241 = state_12129__$1;(statearr_12171_12241[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (25)))
{var inst_12067 = (state_12129[(18)]);var inst_12068 = (state_12129[(9)]);var inst_12070 = (inst_12068 < inst_12067);var inst_12071 = inst_12070;var state_12129__$1 = state_12129;if(cljs.core.truth_(inst_12071))
{var statearr_12172_12242 = state_12129__$1;(statearr_12172_12242[(1)] = (27));
} else
{var statearr_12173_12243 = state_12129__$1;(statearr_12173_12243[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (34)))
{var state_12129__$1 = state_12129;var statearr_12174_12244 = state_12129__$1;(statearr_12174_12244[(2)] = null);
(statearr_12174_12244[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (17)))
{var state_12129__$1 = state_12129;var statearr_12175_12245 = state_12129__$1;(statearr_12175_12245[(2)] = null);
(statearr_12175_12245[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (3)))
{var inst_12127 = (state_12129[(2)]);var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12129__$1,inst_12127);
} else
{if((state_val_12130 === (12)))
{var inst_12052 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12176_12246 = state_12129__$1;(statearr_12176_12246[(2)] = inst_12052);
(statearr_12176_12246[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (2)))
{var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12129__$1,(4),ch);
} else
{if((state_val_12130 === (23)))
{var state_12129__$1 = state_12129;var statearr_12177_12247 = state_12129__$1;(statearr_12177_12247[(2)] = null);
(statearr_12177_12247[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (35)))
{var inst_12111 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12178_12248 = state_12129__$1;(statearr_12178_12248[(2)] = inst_12111);
(statearr_12178_12248[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (19)))
{var inst_12026 = (state_12129[(7)]);var inst_12030 = cljs.core.chunk_first.call(null,inst_12026);var inst_12031 = cljs.core.chunk_rest.call(null,inst_12026);var inst_12032 = cljs.core.count.call(null,inst_12030);var inst_12006 = inst_12031;var inst_12007 = inst_12030;var inst_12008 = inst_12032;var inst_12009 = (0);var state_12129__$1 = (function (){var statearr_12179 = state_12129;(statearr_12179[(13)] = inst_12006);
(statearr_12179[(14)] = inst_12009);
(statearr_12179[(15)] = inst_12007);
(statearr_12179[(16)] = inst_12008);
return statearr_12179;
})();var statearr_12180_12249 = state_12129__$1;(statearr_12180_12249[(2)] = null);
(statearr_12180_12249[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (11)))
{var inst_12006 = (state_12129[(13)]);var inst_12026 = (state_12129[(7)]);var inst_12026__$1 = cljs.core.seq.call(null,inst_12006);var state_12129__$1 = (function (){var statearr_12181 = state_12129;(statearr_12181[(7)] = inst_12026__$1);
return statearr_12181;
})();if(inst_12026__$1)
{var statearr_12182_12250 = state_12129__$1;(statearr_12182_12250[(1)] = (16));
} else
{var statearr_12183_12251 = state_12129__$1;(statearr_12183_12251[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (9)))
{var inst_12054 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12184_12252 = state_12129__$1;(statearr_12184_12252[(2)] = inst_12054);
(statearr_12184_12252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (5)))
{var inst_12004 = cljs.core.deref.call(null,cs);var inst_12005 = cljs.core.seq.call(null,inst_12004);var inst_12006 = inst_12005;var inst_12007 = null;var inst_12008 = (0);var inst_12009 = (0);var state_12129__$1 = (function (){var statearr_12185 = state_12129;(statearr_12185[(13)] = inst_12006);
(statearr_12185[(14)] = inst_12009);
(statearr_12185[(15)] = inst_12007);
(statearr_12185[(16)] = inst_12008);
return statearr_12185;
})();var statearr_12186_12253 = state_12129__$1;(statearr_12186_12253[(2)] = null);
(statearr_12186_12253[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (14)))
{var state_12129__$1 = state_12129;var statearr_12187_12254 = state_12129__$1;(statearr_12187_12254[(2)] = null);
(statearr_12187_12254[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (45)))
{var inst_12119 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12188_12255 = state_12129__$1;(statearr_12188_12255[(2)] = inst_12119);
(statearr_12188_12255[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (26)))
{var inst_12057 = (state_12129[(30)]);var inst_12115 = (state_12129[(2)]);var inst_12116 = cljs.core.seq.call(null,inst_12057);var state_12129__$1 = (function (){var statearr_12189 = state_12129;(statearr_12189[(32)] = inst_12115);
return statearr_12189;
})();if(inst_12116)
{var statearr_12190_12256 = state_12129__$1;(statearr_12190_12256[(1)] = (42));
} else
{var statearr_12191_12257 = state_12129__$1;(statearr_12191_12257[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (16)))
{var inst_12026 = (state_12129[(7)]);var inst_12028 = cljs.core.chunked_seq_QMARK_.call(null,inst_12026);var state_12129__$1 = state_12129;if(inst_12028)
{var statearr_12195_12258 = state_12129__$1;(statearr_12195_12258[(1)] = (19));
} else
{var statearr_12196_12259 = state_12129__$1;(statearr_12196_12259[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (38)))
{var inst_12108 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12197_12260 = state_12129__$1;(statearr_12197_12260[(2)] = inst_12108);
(statearr_12197_12260[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (30)))
{var inst_12067 = (state_12129[(18)]);var inst_12065 = (state_12129[(19)]);var inst_12068 = (state_12129[(9)]);var inst_12066 = (state_12129[(10)]);var inst_12082 = (state_12129[(2)]);var inst_12083 = (inst_12068 + (1));var tmp12192 = inst_12067;var tmp12193 = inst_12065;var tmp12194 = inst_12066;var inst_12065__$1 = tmp12193;var inst_12066__$1 = tmp12194;var inst_12067__$1 = tmp12192;var inst_12068__$1 = inst_12083;var state_12129__$1 = (function (){var statearr_12198 = state_12129;(statearr_12198[(18)] = inst_12067__$1);
(statearr_12198[(33)] = inst_12082);
(statearr_12198[(19)] = inst_12065__$1);
(statearr_12198[(9)] = inst_12068__$1);
(statearr_12198[(10)] = inst_12066__$1);
return statearr_12198;
})();var statearr_12199_12261 = state_12129__$1;(statearr_12199_12261[(2)] = null);
(statearr_12199_12261[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (10)))
{var inst_12009 = (state_12129[(14)]);var inst_12007 = (state_12129[(15)]);var inst_12015 = cljs.core._nth.call(null,inst_12007,inst_12009);var inst_12016 = cljs.core.nth.call(null,inst_12015,(0),null);var inst_12017 = cljs.core.nth.call(null,inst_12015,(1),null);var state_12129__$1 = (function (){var statearr_12200 = state_12129;(statearr_12200[(28)] = inst_12016);
return statearr_12200;
})();if(cljs.core.truth_(inst_12017))
{var statearr_12201_12262 = state_12129__$1;(statearr_12201_12262[(1)] = (13));
} else
{var statearr_12202_12263 = state_12129__$1;(statearr_12202_12263[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (18)))
{var inst_12050 = (state_12129[(2)]);var state_12129__$1 = state_12129;var statearr_12203_12264 = state_12129__$1;(statearr_12203_12264[(2)] = inst_12050);
(statearr_12203_12264[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (42)))
{var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12129__$1,(45),dchan);
} else
{if((state_val_12130 === (37)))
{var inst_12086 = (state_12129[(17)]);var inst_12095 = cljs.core.first.call(null,inst_12086);var state_12129__$1 = (function (){var statearr_12204 = state_12129;(statearr_12204[(25)] = inst_12095);
return statearr_12204;
})();var statearr_12205_12265 = state_12129__$1;(statearr_12205_12265[(2)] = null);
(statearr_12205_12265[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12130 === (8)))
{var inst_12009 = (state_12129[(14)]);var inst_12008 = (state_12129[(16)]);var inst_12011 = (inst_12009 < inst_12008);var inst_12012 = inst_12011;var state_12129__$1 = state_12129;if(cljs.core.truth_(inst_12012))
{var statearr_12206_12266 = state_12129__$1;(statearr_12206_12266[(1)] = (10));
} else
{var statearr_12207_12267 = state_12129__$1;(statearr_12207_12267[(1)] = (11));
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
});})(c__8556__auto___12215,cs,m,dchan,dctr,done))
;return ((function (switch__8541__auto__,c__8556__auto___12215,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_12211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12211[(0)] = state_machine__8542__auto__);
(statearr_12211[(1)] = (1));
return statearr_12211;
});
var state_machine__8542__auto____1 = (function (state_12129){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_12129);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e12212){if((e12212 instanceof Object))
{var ex__8545__auto__ = e12212;var statearr_12213_12268 = state_12129;(statearr_12213_12268[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12212;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12269 = state_12129;
state_12129 = G__12269;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_12129){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_12129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___12215,cs,m,dchan,dctr,done))
})();var state__8558__auto__ = (function (){var statearr_12214 = f__8557__auto__.call(null);(statearr_12214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___12215);
return statearr_12214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___12215,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12271 = {};return obj12271;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t12381 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12381 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12382){
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
this.meta12382 = meta12382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12381.cljs$lang$type = true;
cljs.core.async.t12381.cljs$lang$ctorStr = "cljs.core.async/t12381";
cljs.core.async.t12381.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12381");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12383){var self__ = this;
var _12383__$1 = this;return self__.meta12382;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12383,meta12382__$1){var self__ = this;
var _12383__$1 = this;return (new cljs.core.async.t12381(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12382__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12381 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12381(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12382){return (new cljs.core.async.t12381(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12382));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12381(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8556__auto___12490 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___12490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___12490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12448){var state_val_12449 = (state_12448[(1)]);if((state_val_12449 === (7)))
{var inst_12397 = (state_12448[(7)]);var inst_12402 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12397);var state_12448__$1 = state_12448;var statearr_12450_12491 = state_12448__$1;(statearr_12450_12491[(2)] = inst_12402);
(statearr_12450_12491[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (20)))
{var inst_12412 = (state_12448[(8)]);var state_12448__$1 = state_12448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12448__$1,(23),out,inst_12412);
} else
{if((state_val_12449 === (1)))
{var inst_12387 = (state_12448[(9)]);var inst_12387__$1 = calc_state.call(null);var inst_12388 = cljs.core.seq_QMARK_.call(null,inst_12387__$1);var state_12448__$1 = (function (){var statearr_12451 = state_12448;(statearr_12451[(9)] = inst_12387__$1);
return statearr_12451;
})();if(inst_12388)
{var statearr_12452_12492 = state_12448__$1;(statearr_12452_12492[(1)] = (2));
} else
{var statearr_12453_12493 = state_12448__$1;(statearr_12453_12493[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (4)))
{var inst_12387 = (state_12448[(9)]);var inst_12393 = (state_12448[(2)]);var inst_12394 = cljs.core.get.call(null,inst_12393,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12395 = cljs.core.get.call(null,inst_12393,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12396 = cljs.core.get.call(null,inst_12393,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12397 = inst_12387;var state_12448__$1 = (function (){var statearr_12454 = state_12448;(statearr_12454[(7)] = inst_12397);
(statearr_12454[(10)] = inst_12396);
(statearr_12454[(11)] = inst_12395);
(statearr_12454[(12)] = inst_12394);
return statearr_12454;
})();var statearr_12455_12494 = state_12448__$1;(statearr_12455_12494[(2)] = null);
(statearr_12455_12494[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (15)))
{var state_12448__$1 = state_12448;var statearr_12456_12495 = state_12448__$1;(statearr_12456_12495[(2)] = null);
(statearr_12456_12495[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (21)))
{var state_12448__$1 = state_12448;var statearr_12457_12496 = state_12448__$1;(statearr_12457_12496[(2)] = null);
(statearr_12457_12496[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (13)))
{var inst_12444 = (state_12448[(2)]);var state_12448__$1 = state_12448;var statearr_12458_12497 = state_12448__$1;(statearr_12458_12497[(2)] = inst_12444);
(statearr_12458_12497[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (22)))
{var inst_12405 = (state_12448[(13)]);var inst_12441 = (state_12448[(2)]);var inst_12397 = inst_12405;var state_12448__$1 = (function (){var statearr_12459 = state_12448;(statearr_12459[(7)] = inst_12397);
(statearr_12459[(14)] = inst_12441);
return statearr_12459;
})();var statearr_12460_12498 = state_12448__$1;(statearr_12460_12498[(2)] = null);
(statearr_12460_12498[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (6)))
{var inst_12446 = (state_12448[(2)]);var state_12448__$1 = state_12448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12448__$1,inst_12446);
} else
{if((state_val_12449 === (17)))
{var inst_12427 = (state_12448[(15)]);var state_12448__$1 = state_12448;var statearr_12461_12499 = state_12448__$1;(statearr_12461_12499[(2)] = inst_12427);
(statearr_12461_12499[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (3)))
{var inst_12387 = (state_12448[(9)]);var state_12448__$1 = state_12448;var statearr_12462_12500 = state_12448__$1;(statearr_12462_12500[(2)] = inst_12387);
(statearr_12462_12500[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (12)))
{var inst_12427 = (state_12448[(15)]);var inst_12413 = (state_12448[(16)]);var inst_12408 = (state_12448[(17)]);var inst_12427__$1 = inst_12408.call(null,inst_12413);var state_12448__$1 = (function (){var statearr_12463 = state_12448;(statearr_12463[(15)] = inst_12427__$1);
return statearr_12463;
})();if(cljs.core.truth_(inst_12427__$1))
{var statearr_12464_12501 = state_12448__$1;(statearr_12464_12501[(1)] = (17));
} else
{var statearr_12465_12502 = state_12448__$1;(statearr_12465_12502[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (2)))
{var inst_12387 = (state_12448[(9)]);var inst_12390 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12387);var state_12448__$1 = state_12448;var statearr_12466_12503 = state_12448__$1;(statearr_12466_12503[(2)] = inst_12390);
(statearr_12466_12503[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (23)))
{var inst_12438 = (state_12448[(2)]);var state_12448__$1 = state_12448;var statearr_12467_12504 = state_12448__$1;(statearr_12467_12504[(2)] = inst_12438);
(statearr_12467_12504[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (19)))
{var inst_12435 = (state_12448[(2)]);var state_12448__$1 = state_12448;if(cljs.core.truth_(inst_12435))
{var statearr_12468_12505 = state_12448__$1;(statearr_12468_12505[(1)] = (20));
} else
{var statearr_12469_12506 = state_12448__$1;(statearr_12469_12506[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (11)))
{var inst_12412 = (state_12448[(8)]);var inst_12418 = (inst_12412 == null);var state_12448__$1 = state_12448;if(cljs.core.truth_(inst_12418))
{var statearr_12470_12507 = state_12448__$1;(statearr_12470_12507[(1)] = (14));
} else
{var statearr_12471_12508 = state_12448__$1;(statearr_12471_12508[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (9)))
{var inst_12405 = (state_12448[(13)]);var inst_12405__$1 = (state_12448[(2)]);var inst_12406 = cljs.core.get.call(null,inst_12405__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12407 = cljs.core.get.call(null,inst_12405__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12408 = cljs.core.get.call(null,inst_12405__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12448__$1 = (function (){var statearr_12472 = state_12448;(statearr_12472[(18)] = inst_12407);
(statearr_12472[(13)] = inst_12405__$1);
(statearr_12472[(17)] = inst_12408);
return statearr_12472;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12448__$1,(10),inst_12406);
} else
{if((state_val_12449 === (5)))
{var inst_12397 = (state_12448[(7)]);var inst_12400 = cljs.core.seq_QMARK_.call(null,inst_12397);var state_12448__$1 = state_12448;if(inst_12400)
{var statearr_12473_12509 = state_12448__$1;(statearr_12473_12509[(1)] = (7));
} else
{var statearr_12474_12510 = state_12448__$1;(statearr_12474_12510[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (14)))
{var inst_12413 = (state_12448[(16)]);var inst_12420 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12413);var state_12448__$1 = state_12448;var statearr_12475_12511 = state_12448__$1;(statearr_12475_12511[(2)] = inst_12420);
(statearr_12475_12511[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (16)))
{var inst_12423 = (state_12448[(2)]);var inst_12424 = calc_state.call(null);var inst_12397 = inst_12424;var state_12448__$1 = (function (){var statearr_12476 = state_12448;(statearr_12476[(7)] = inst_12397);
(statearr_12476[(19)] = inst_12423);
return statearr_12476;
})();var statearr_12477_12512 = state_12448__$1;(statearr_12477_12512[(2)] = null);
(statearr_12477_12512[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (10)))
{var inst_12412 = (state_12448[(8)]);var inst_12413 = (state_12448[(16)]);var inst_12411 = (state_12448[(2)]);var inst_12412__$1 = cljs.core.nth.call(null,inst_12411,(0),null);var inst_12413__$1 = cljs.core.nth.call(null,inst_12411,(1),null);var inst_12414 = (inst_12412__$1 == null);var inst_12415 = cljs.core._EQ_.call(null,inst_12413__$1,change);var inst_12416 = (inst_12414) || (inst_12415);var state_12448__$1 = (function (){var statearr_12478 = state_12448;(statearr_12478[(8)] = inst_12412__$1);
(statearr_12478[(16)] = inst_12413__$1);
return statearr_12478;
})();if(cljs.core.truth_(inst_12416))
{var statearr_12479_12513 = state_12448__$1;(statearr_12479_12513[(1)] = (11));
} else
{var statearr_12480_12514 = state_12448__$1;(statearr_12480_12514[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (18)))
{var inst_12413 = (state_12448[(16)]);var inst_12407 = (state_12448[(18)]);var inst_12408 = (state_12448[(17)]);var inst_12430 = cljs.core.empty_QMARK_.call(null,inst_12408);var inst_12431 = inst_12407.call(null,inst_12413);var inst_12432 = cljs.core.not.call(null,inst_12431);var inst_12433 = (inst_12430) && (inst_12432);var state_12448__$1 = state_12448;var statearr_12481_12515 = state_12448__$1;(statearr_12481_12515[(2)] = inst_12433);
(statearr_12481_12515[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12449 === (8)))
{var inst_12397 = (state_12448[(7)]);var state_12448__$1 = state_12448;var statearr_12482_12516 = state_12448__$1;(statearr_12482_12516[(2)] = inst_12397);
(statearr_12482_12516[(1)] = (9));
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
});})(c__8556__auto___12490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__8541__auto__,c__8556__auto___12490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_12486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12486[(0)] = state_machine__8542__auto__);
(statearr_12486[(1)] = (1));
return statearr_12486;
});
var state_machine__8542__auto____1 = (function (state_12448){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_12448);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e12487){if((e12487 instanceof Object))
{var ex__8545__auto__ = e12487;var statearr_12488_12517 = state_12448;(statearr_12488_12517[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12448);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12487;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12518 = state_12448;
state_12448 = G__12518;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_12448){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_12448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___12490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__8558__auto__ = (function (){var statearr_12489 = f__8557__auto__.call(null);(statearr_12489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___12490);
return statearr_12489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___12490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12520 = {};return obj12520;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
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
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__12521_SHARP_){if(cljs.core.truth_(p1__12521_SHARP_.call(null,topic)))
{return p1__12521_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12521_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12646 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12646 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12647){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12647 = meta12647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12646.cljs$lang$type = true;
cljs.core.async.t12646.cljs$lang$ctorStr = "cljs.core.async/t12646";
cljs.core.async.t12646.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12646");
});})(mults,ensure_mult))
;
cljs.core.async.t12646.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12646.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12646.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12646.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12646.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12646.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12648){var self__ = this;
var _12648__$1 = this;return self__.meta12647;
});})(mults,ensure_mult))
;
cljs.core.async.t12646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12648,meta12647__$1){var self__ = this;
var _12648__$1 = this;return (new cljs.core.async.t12646(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12647__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12646 = ((function (mults,ensure_mult){
return (function __GT_t12646(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12647){return (new cljs.core.async.t12646(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12647));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12646(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8556__auto___12770 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___12770,mults,ensure_mult,p){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___12770,mults,ensure_mult,p){
return (function (state_12722){var state_val_12723 = (state_12722[(1)]);if((state_val_12723 === (7)))
{var inst_12718 = (state_12722[(2)]);var state_12722__$1 = state_12722;var statearr_12724_12771 = state_12722__$1;(statearr_12724_12771[(2)] = inst_12718);
(statearr_12724_12771[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (20)))
{var state_12722__$1 = state_12722;var statearr_12725_12772 = state_12722__$1;(statearr_12725_12772[(2)] = null);
(statearr_12725_12772[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (1)))
{var state_12722__$1 = state_12722;var statearr_12726_12773 = state_12722__$1;(statearr_12726_12773[(2)] = null);
(statearr_12726_12773[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (24)))
{var inst_12651 = (state_12722[(7)]);var inst_12701 = (state_12722[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12722,(23),Object,null,(22));var inst_12708 = cljs.core.async.muxch_STAR_.call(null,inst_12701);var state_12722__$1 = state_12722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12722__$1,(25),inst_12708,inst_12651);
} else
{if((state_val_12723 === (4)))
{var inst_12651 = (state_12722[(7)]);var inst_12651__$1 = (state_12722[(2)]);var inst_12652 = (inst_12651__$1 == null);var state_12722__$1 = (function (){var statearr_12727 = state_12722;(statearr_12727[(7)] = inst_12651__$1);
return statearr_12727;
})();if(cljs.core.truth_(inst_12652))
{var statearr_12728_12774 = state_12722__$1;(statearr_12728_12774[(1)] = (5));
} else
{var statearr_12729_12775 = state_12722__$1;(statearr_12729_12775[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (15)))
{var inst_12693 = (state_12722[(2)]);var state_12722__$1 = state_12722;var statearr_12730_12776 = state_12722__$1;(statearr_12730_12776[(2)] = inst_12693);
(statearr_12730_12776[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (21)))
{var inst_12715 = (state_12722[(2)]);var state_12722__$1 = (function (){var statearr_12731 = state_12722;(statearr_12731[(9)] = inst_12715);
return statearr_12731;
})();var statearr_12732_12777 = state_12722__$1;(statearr_12732_12777[(2)] = null);
(statearr_12732_12777[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (13)))
{var inst_12675 = (state_12722[(10)]);var inst_12677 = cljs.core.chunked_seq_QMARK_.call(null,inst_12675);var state_12722__$1 = state_12722;if(inst_12677)
{var statearr_12733_12778 = state_12722__$1;(statearr_12733_12778[(1)] = (16));
} else
{var statearr_12734_12779 = state_12722__$1;(statearr_12734_12779[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (22)))
{var inst_12712 = (state_12722[(2)]);var state_12722__$1 = state_12722;var statearr_12735_12780 = state_12722__$1;(statearr_12735_12780[(2)] = inst_12712);
(statearr_12735_12780[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (6)))
{var inst_12651 = (state_12722[(7)]);var inst_12699 = (state_12722[(11)]);var inst_12701 = (state_12722[(8)]);var inst_12699__$1 = topic_fn.call(null,inst_12651);var inst_12700 = cljs.core.deref.call(null,mults);var inst_12701__$1 = cljs.core.get.call(null,inst_12700,inst_12699__$1);var state_12722__$1 = (function (){var statearr_12736 = state_12722;(statearr_12736[(11)] = inst_12699__$1);
(statearr_12736[(8)] = inst_12701__$1);
return statearr_12736;
})();if(cljs.core.truth_(inst_12701__$1))
{var statearr_12737_12781 = state_12722__$1;(statearr_12737_12781[(1)] = (19));
} else
{var statearr_12738_12782 = state_12722__$1;(statearr_12738_12782[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (25)))
{var inst_12710 = (state_12722[(2)]);var state_12722__$1 = state_12722;var statearr_12739_12783 = state_12722__$1;(statearr_12739_12783[(2)] = inst_12710);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12722__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (17)))
{var inst_12675 = (state_12722[(10)]);var inst_12684 = cljs.core.first.call(null,inst_12675);var inst_12685 = cljs.core.async.muxch_STAR_.call(null,inst_12684);var inst_12686 = cljs.core.async.close_BANG_.call(null,inst_12685);var inst_12687 = cljs.core.next.call(null,inst_12675);var inst_12661 = inst_12687;var inst_12662 = null;var inst_12663 = (0);var inst_12664 = (0);var state_12722__$1 = (function (){var statearr_12740 = state_12722;(statearr_12740[(12)] = inst_12663);
(statearr_12740[(13)] = inst_12661);
(statearr_12740[(14)] = inst_12686);
(statearr_12740[(15)] = inst_12664);
(statearr_12740[(16)] = inst_12662);
return statearr_12740;
})();var statearr_12741_12784 = state_12722__$1;(statearr_12741_12784[(2)] = null);
(statearr_12741_12784[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (3)))
{var inst_12720 = (state_12722[(2)]);var state_12722__$1 = state_12722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12722__$1,inst_12720);
} else
{if((state_val_12723 === (12)))
{var inst_12695 = (state_12722[(2)]);var state_12722__$1 = state_12722;var statearr_12742_12785 = state_12722__$1;(statearr_12742_12785[(2)] = inst_12695);
(statearr_12742_12785[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (2)))
{var state_12722__$1 = state_12722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12722__$1,(4),ch);
} else
{if((state_val_12723 === (23)))
{var inst_12699 = (state_12722[(11)]);var inst_12703 = (state_12722[(2)]);var inst_12704 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12699);var state_12722__$1 = (function (){var statearr_12743 = state_12722;(statearr_12743[(17)] = inst_12703);
return statearr_12743;
})();var statearr_12744_12786 = state_12722__$1;(statearr_12744_12786[(2)] = inst_12704);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12722__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (19)))
{var state_12722__$1 = state_12722;var statearr_12745_12787 = state_12722__$1;(statearr_12745_12787[(2)] = null);
(statearr_12745_12787[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (11)))
{var inst_12661 = (state_12722[(13)]);var inst_12675 = (state_12722[(10)]);var inst_12675__$1 = cljs.core.seq.call(null,inst_12661);var state_12722__$1 = (function (){var statearr_12746 = state_12722;(statearr_12746[(10)] = inst_12675__$1);
return statearr_12746;
})();if(inst_12675__$1)
{var statearr_12747_12788 = state_12722__$1;(statearr_12747_12788[(1)] = (13));
} else
{var statearr_12748_12789 = state_12722__$1;(statearr_12748_12789[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (9)))
{var inst_12697 = (state_12722[(2)]);var state_12722__$1 = state_12722;var statearr_12749_12790 = state_12722__$1;(statearr_12749_12790[(2)] = inst_12697);
(statearr_12749_12790[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (5)))
{var inst_12658 = cljs.core.deref.call(null,mults);var inst_12659 = cljs.core.vals.call(null,inst_12658);var inst_12660 = cljs.core.seq.call(null,inst_12659);var inst_12661 = inst_12660;var inst_12662 = null;var inst_12663 = (0);var inst_12664 = (0);var state_12722__$1 = (function (){var statearr_12750 = state_12722;(statearr_12750[(12)] = inst_12663);
(statearr_12750[(13)] = inst_12661);
(statearr_12750[(15)] = inst_12664);
(statearr_12750[(16)] = inst_12662);
return statearr_12750;
})();var statearr_12751_12791 = state_12722__$1;(statearr_12751_12791[(2)] = null);
(statearr_12751_12791[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (14)))
{var state_12722__$1 = state_12722;var statearr_12755_12792 = state_12722__$1;(statearr_12755_12792[(2)] = null);
(statearr_12755_12792[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (16)))
{var inst_12675 = (state_12722[(10)]);var inst_12679 = cljs.core.chunk_first.call(null,inst_12675);var inst_12680 = cljs.core.chunk_rest.call(null,inst_12675);var inst_12681 = cljs.core.count.call(null,inst_12679);var inst_12661 = inst_12680;var inst_12662 = inst_12679;var inst_12663 = inst_12681;var inst_12664 = (0);var state_12722__$1 = (function (){var statearr_12756 = state_12722;(statearr_12756[(12)] = inst_12663);
(statearr_12756[(13)] = inst_12661);
(statearr_12756[(15)] = inst_12664);
(statearr_12756[(16)] = inst_12662);
return statearr_12756;
})();var statearr_12757_12793 = state_12722__$1;(statearr_12757_12793[(2)] = null);
(statearr_12757_12793[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (10)))
{var inst_12663 = (state_12722[(12)]);var inst_12661 = (state_12722[(13)]);var inst_12664 = (state_12722[(15)]);var inst_12662 = (state_12722[(16)]);var inst_12669 = cljs.core._nth.call(null,inst_12662,inst_12664);var inst_12670 = cljs.core.async.muxch_STAR_.call(null,inst_12669);var inst_12671 = cljs.core.async.close_BANG_.call(null,inst_12670);var inst_12672 = (inst_12664 + (1));var tmp12752 = inst_12663;var tmp12753 = inst_12661;var tmp12754 = inst_12662;var inst_12661__$1 = tmp12753;var inst_12662__$1 = tmp12754;var inst_12663__$1 = tmp12752;var inst_12664__$1 = inst_12672;var state_12722__$1 = (function (){var statearr_12758 = state_12722;(statearr_12758[(12)] = inst_12663__$1);
(statearr_12758[(13)] = inst_12661__$1);
(statearr_12758[(18)] = inst_12671);
(statearr_12758[(15)] = inst_12664__$1);
(statearr_12758[(16)] = inst_12662__$1);
return statearr_12758;
})();var statearr_12759_12794 = state_12722__$1;(statearr_12759_12794[(2)] = null);
(statearr_12759_12794[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (18)))
{var inst_12690 = (state_12722[(2)]);var state_12722__$1 = state_12722;var statearr_12760_12795 = state_12722__$1;(statearr_12760_12795[(2)] = inst_12690);
(statearr_12760_12795[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12723 === (8)))
{var inst_12663 = (state_12722[(12)]);var inst_12664 = (state_12722[(15)]);var inst_12666 = (inst_12664 < inst_12663);var inst_12667 = inst_12666;var state_12722__$1 = state_12722;if(cljs.core.truth_(inst_12667))
{var statearr_12761_12796 = state_12722__$1;(statearr_12761_12796[(1)] = (10));
} else
{var statearr_12762_12797 = state_12722__$1;(statearr_12762_12797[(1)] = (11));
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
});})(c__8556__auto___12770,mults,ensure_mult,p))
;return ((function (switch__8541__auto__,c__8556__auto___12770,mults,ensure_mult,p){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_12766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12766[(0)] = state_machine__8542__auto__);
(statearr_12766[(1)] = (1));
return statearr_12766;
});
var state_machine__8542__auto____1 = (function (state_12722){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_12722);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e12767){if((e12767 instanceof Object))
{var ex__8545__auto__ = e12767;var statearr_12768_12798 = state_12722;(statearr_12768_12798[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12767;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12799 = state_12722;
state_12722 = G__12799;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_12722){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_12722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___12770,mults,ensure_mult,p))
})();var state__8558__auto__ = (function (){var statearr_12769 = f__8557__auto__.call(null);(statearr_12769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___12770);
return statearr_12769;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___12770,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__8556__auto___12936 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___12936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___12936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12906){var state_val_12907 = (state_12906[(1)]);if((state_val_12907 === (7)))
{var state_12906__$1 = state_12906;var statearr_12908_12937 = state_12906__$1;(statearr_12908_12937[(2)] = null);
(statearr_12908_12937[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (1)))
{var state_12906__$1 = state_12906;var statearr_12909_12938 = state_12906__$1;(statearr_12909_12938[(2)] = null);
(statearr_12909_12938[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (4)))
{var inst_12870 = (state_12906[(7)]);var inst_12872 = (inst_12870 < cnt);var state_12906__$1 = state_12906;if(cljs.core.truth_(inst_12872))
{var statearr_12910_12939 = state_12906__$1;(statearr_12910_12939[(1)] = (6));
} else
{var statearr_12911_12940 = state_12906__$1;(statearr_12911_12940[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (15)))
{var inst_12902 = (state_12906[(2)]);var state_12906__$1 = state_12906;var statearr_12912_12941 = state_12906__$1;(statearr_12912_12941[(2)] = inst_12902);
(statearr_12912_12941[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (13)))
{var inst_12895 = cljs.core.async.close_BANG_.call(null,out);var state_12906__$1 = state_12906;var statearr_12913_12942 = state_12906__$1;(statearr_12913_12942[(2)] = inst_12895);
(statearr_12913_12942[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (6)))
{var state_12906__$1 = state_12906;var statearr_12914_12943 = state_12906__$1;(statearr_12914_12943[(2)] = null);
(statearr_12914_12943[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (3)))
{var inst_12904 = (state_12906[(2)]);var state_12906__$1 = state_12906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12906__$1,inst_12904);
} else
{if((state_val_12907 === (12)))
{var inst_12892 = (state_12906[(8)]);var inst_12892__$1 = (state_12906[(2)]);var inst_12893 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12892__$1);var state_12906__$1 = (function (){var statearr_12915 = state_12906;(statearr_12915[(8)] = inst_12892__$1);
return statearr_12915;
})();if(cljs.core.truth_(inst_12893))
{var statearr_12916_12944 = state_12906__$1;(statearr_12916_12944[(1)] = (13));
} else
{var statearr_12917_12945 = state_12906__$1;(statearr_12917_12945[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (2)))
{var inst_12869 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12870 = (0);var state_12906__$1 = (function (){var statearr_12918 = state_12906;(statearr_12918[(7)] = inst_12870);
(statearr_12918[(9)] = inst_12869);
return statearr_12918;
})();var statearr_12919_12946 = state_12906__$1;(statearr_12919_12946[(2)] = null);
(statearr_12919_12946[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (11)))
{var inst_12870 = (state_12906[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12906,(10),Object,null,(9));var inst_12879 = chs__$1.call(null,inst_12870);var inst_12880 = done.call(null,inst_12870);var inst_12881 = cljs.core.async.take_BANG_.call(null,inst_12879,inst_12880);var state_12906__$1 = state_12906;var statearr_12920_12947 = state_12906__$1;(statearr_12920_12947[(2)] = inst_12881);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12906__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (9)))
{var inst_12870 = (state_12906[(7)]);var inst_12883 = (state_12906[(2)]);var inst_12884 = (inst_12870 + (1));var inst_12870__$1 = inst_12884;var state_12906__$1 = (function (){var statearr_12921 = state_12906;(statearr_12921[(7)] = inst_12870__$1);
(statearr_12921[(10)] = inst_12883);
return statearr_12921;
})();var statearr_12922_12948 = state_12906__$1;(statearr_12922_12948[(2)] = null);
(statearr_12922_12948[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (5)))
{var inst_12890 = (state_12906[(2)]);var state_12906__$1 = (function (){var statearr_12923 = state_12906;(statearr_12923[(11)] = inst_12890);
return statearr_12923;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12906__$1,(12),dchan);
} else
{if((state_val_12907 === (14)))
{var inst_12892 = (state_12906[(8)]);var inst_12897 = cljs.core.apply.call(null,f,inst_12892);var state_12906__$1 = state_12906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12906__$1,(16),out,inst_12897);
} else
{if((state_val_12907 === (16)))
{var inst_12899 = (state_12906[(2)]);var state_12906__$1 = (function (){var statearr_12924 = state_12906;(statearr_12924[(12)] = inst_12899);
return statearr_12924;
})();var statearr_12925_12949 = state_12906__$1;(statearr_12925_12949[(2)] = null);
(statearr_12925_12949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (10)))
{var inst_12874 = (state_12906[(2)]);var inst_12875 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12906__$1 = (function (){var statearr_12926 = state_12906;(statearr_12926[(13)] = inst_12874);
return statearr_12926;
})();var statearr_12927_12950 = state_12906__$1;(statearr_12927_12950[(2)] = inst_12875);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12906__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12907 === (8)))
{var inst_12888 = (state_12906[(2)]);var state_12906__$1 = state_12906;var statearr_12928_12951 = state_12906__$1;(statearr_12928_12951[(2)] = inst_12888);
(statearr_12928_12951[(1)] = (5));
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
});})(c__8556__auto___12936,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__8541__auto__,c__8556__auto___12936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_12932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12932[(0)] = state_machine__8542__auto__);
(statearr_12932[(1)] = (1));
return statearr_12932;
});
var state_machine__8542__auto____1 = (function (state_12906){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_12906);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e12933){if((e12933 instanceof Object))
{var ex__8545__auto__ = e12933;var statearr_12934_12952 = state_12906;(statearr_12934_12952[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12933;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12953 = state_12906;
state_12906 = G__12953;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_12906){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_12906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___12936,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__8558__auto__ = (function (){var statearr_12935 = f__8557__auto__.call(null);(statearr_12935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___12936);
return statearr_12935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___12936,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8556__auto___13061 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___13061,out){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___13061,out){
return (function (state_13037){var state_val_13038 = (state_13037[(1)]);if((state_val_13038 === (7)))
{var inst_13016 = (state_13037[(7)]);var inst_13017 = (state_13037[(8)]);var inst_13016__$1 = (state_13037[(2)]);var inst_13017__$1 = cljs.core.nth.call(null,inst_13016__$1,(0),null);var inst_13018 = cljs.core.nth.call(null,inst_13016__$1,(1),null);var inst_13019 = (inst_13017__$1 == null);var state_13037__$1 = (function (){var statearr_13039 = state_13037;(statearr_13039[(7)] = inst_13016__$1);
(statearr_13039[(8)] = inst_13017__$1);
(statearr_13039[(9)] = inst_13018);
return statearr_13039;
})();if(cljs.core.truth_(inst_13019))
{var statearr_13040_13062 = state_13037__$1;(statearr_13040_13062[(1)] = (8));
} else
{var statearr_13041_13063 = state_13037__$1;(statearr_13041_13063[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13038 === (1)))
{var inst_13008 = cljs.core.vec.call(null,chs);var inst_13009 = inst_13008;var state_13037__$1 = (function (){var statearr_13042 = state_13037;(statearr_13042[(10)] = inst_13009);
return statearr_13042;
})();var statearr_13043_13064 = state_13037__$1;(statearr_13043_13064[(2)] = null);
(statearr_13043_13064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13038 === (4)))
{var inst_13009 = (state_13037[(10)]);var state_13037__$1 = state_13037;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13037__$1,(7),inst_13009);
} else
{if((state_val_13038 === (6)))
{var inst_13033 = (state_13037[(2)]);var state_13037__$1 = state_13037;var statearr_13044_13065 = state_13037__$1;(statearr_13044_13065[(2)] = inst_13033);
(statearr_13044_13065[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13038 === (3)))
{var inst_13035 = (state_13037[(2)]);var state_13037__$1 = state_13037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13037__$1,inst_13035);
} else
{if((state_val_13038 === (2)))
{var inst_13009 = (state_13037[(10)]);var inst_13011 = cljs.core.count.call(null,inst_13009);var inst_13012 = (inst_13011 > (0));var state_13037__$1 = state_13037;if(cljs.core.truth_(inst_13012))
{var statearr_13046_13066 = state_13037__$1;(statearr_13046_13066[(1)] = (4));
} else
{var statearr_13047_13067 = state_13037__$1;(statearr_13047_13067[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13038 === (11)))
{var inst_13009 = (state_13037[(10)]);var inst_13026 = (state_13037[(2)]);var tmp13045 = inst_13009;var inst_13009__$1 = tmp13045;var state_13037__$1 = (function (){var statearr_13048 = state_13037;(statearr_13048[(11)] = inst_13026);
(statearr_13048[(10)] = inst_13009__$1);
return statearr_13048;
})();var statearr_13049_13068 = state_13037__$1;(statearr_13049_13068[(2)] = null);
(statearr_13049_13068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13038 === (9)))
{var inst_13017 = (state_13037[(8)]);var state_13037__$1 = state_13037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13037__$1,(11),out,inst_13017);
} else
{if((state_val_13038 === (5)))
{var inst_13031 = cljs.core.async.close_BANG_.call(null,out);var state_13037__$1 = state_13037;var statearr_13050_13069 = state_13037__$1;(statearr_13050_13069[(2)] = inst_13031);
(statearr_13050_13069[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13038 === (10)))
{var inst_13029 = (state_13037[(2)]);var state_13037__$1 = state_13037;var statearr_13051_13070 = state_13037__$1;(statearr_13051_13070[(2)] = inst_13029);
(statearr_13051_13070[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13038 === (8)))
{var inst_13009 = (state_13037[(10)]);var inst_13016 = (state_13037[(7)]);var inst_13017 = (state_13037[(8)]);var inst_13018 = (state_13037[(9)]);var inst_13021 = (function (){var c = inst_13018;var v = inst_13017;var vec__13014 = inst_13016;var cs = inst_13009;return ((function (c,v,vec__13014,cs,inst_13009,inst_13016,inst_13017,inst_13018,state_val_13038,c__8556__auto___13061,out){
return (function (p1__12954_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12954_SHARP_);
});
;})(c,v,vec__13014,cs,inst_13009,inst_13016,inst_13017,inst_13018,state_val_13038,c__8556__auto___13061,out))
})();var inst_13022 = cljs.core.filterv.call(null,inst_13021,inst_13009);var inst_13009__$1 = inst_13022;var state_13037__$1 = (function (){var statearr_13052 = state_13037;(statearr_13052[(10)] = inst_13009__$1);
return statearr_13052;
})();var statearr_13053_13071 = state_13037__$1;(statearr_13053_13071[(2)] = null);
(statearr_13053_13071[(1)] = (2));
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
});})(c__8556__auto___13061,out))
;return ((function (switch__8541__auto__,c__8556__auto___13061,out){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_13057 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13057[(0)] = state_machine__8542__auto__);
(statearr_13057[(1)] = (1));
return statearr_13057;
});
var state_machine__8542__auto____1 = (function (state_13037){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_13037);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e13058){if((e13058 instanceof Object))
{var ex__8545__auto__ = e13058;var statearr_13059_13072 = state_13037;(statearr_13059_13072[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13037);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13058;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13073 = state_13037;
state_13037 = G__13073;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_13037){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_13037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___13061,out))
})();var state__8558__auto__ = (function (){var statearr_13060 = f__8557__auto__.call(null);(statearr_13060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___13061);
return statearr_13060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___13061,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8556__auto___13166 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___13166,out){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___13166,out){
return (function (state_13143){var state_val_13144 = (state_13143[(1)]);if((state_val_13144 === (7)))
{var inst_13125 = (state_13143[(7)]);var inst_13125__$1 = (state_13143[(2)]);var inst_13126 = (inst_13125__$1 == null);var inst_13127 = cljs.core.not.call(null,inst_13126);var state_13143__$1 = (function (){var statearr_13145 = state_13143;(statearr_13145[(7)] = inst_13125__$1);
return statearr_13145;
})();if(inst_13127)
{var statearr_13146_13167 = state_13143__$1;(statearr_13146_13167[(1)] = (8));
} else
{var statearr_13147_13168 = state_13143__$1;(statearr_13147_13168[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (1)))
{var inst_13120 = (0);var state_13143__$1 = (function (){var statearr_13148 = state_13143;(statearr_13148[(8)] = inst_13120);
return statearr_13148;
})();var statearr_13149_13169 = state_13143__$1;(statearr_13149_13169[(2)] = null);
(statearr_13149_13169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (4)))
{var state_13143__$1 = state_13143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13143__$1,(7),ch);
} else
{if((state_val_13144 === (6)))
{var inst_13138 = (state_13143[(2)]);var state_13143__$1 = state_13143;var statearr_13150_13170 = state_13143__$1;(statearr_13150_13170[(2)] = inst_13138);
(statearr_13150_13170[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (3)))
{var inst_13140 = (state_13143[(2)]);var inst_13141 = cljs.core.async.close_BANG_.call(null,out);var state_13143__$1 = (function (){var statearr_13151 = state_13143;(statearr_13151[(9)] = inst_13140);
return statearr_13151;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13143__$1,inst_13141);
} else
{if((state_val_13144 === (2)))
{var inst_13120 = (state_13143[(8)]);var inst_13122 = (inst_13120 < n);var state_13143__$1 = state_13143;if(cljs.core.truth_(inst_13122))
{var statearr_13152_13171 = state_13143__$1;(statearr_13152_13171[(1)] = (4));
} else
{var statearr_13153_13172 = state_13143__$1;(statearr_13153_13172[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (11)))
{var inst_13120 = (state_13143[(8)]);var inst_13130 = (state_13143[(2)]);var inst_13131 = (inst_13120 + (1));var inst_13120__$1 = inst_13131;var state_13143__$1 = (function (){var statearr_13154 = state_13143;(statearr_13154[(8)] = inst_13120__$1);
(statearr_13154[(10)] = inst_13130);
return statearr_13154;
})();var statearr_13155_13173 = state_13143__$1;(statearr_13155_13173[(2)] = null);
(statearr_13155_13173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (9)))
{var state_13143__$1 = state_13143;var statearr_13156_13174 = state_13143__$1;(statearr_13156_13174[(2)] = null);
(statearr_13156_13174[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (5)))
{var state_13143__$1 = state_13143;var statearr_13157_13175 = state_13143__$1;(statearr_13157_13175[(2)] = null);
(statearr_13157_13175[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (10)))
{var inst_13135 = (state_13143[(2)]);var state_13143__$1 = state_13143;var statearr_13158_13176 = state_13143__$1;(statearr_13158_13176[(2)] = inst_13135);
(statearr_13158_13176[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (8)))
{var inst_13125 = (state_13143[(7)]);var state_13143__$1 = state_13143;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13143__$1,(11),out,inst_13125);
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
});})(c__8556__auto___13166,out))
;return ((function (switch__8541__auto__,c__8556__auto___13166,out){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_13162 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13162[(0)] = state_machine__8542__auto__);
(statearr_13162[(1)] = (1));
return statearr_13162;
});
var state_machine__8542__auto____1 = (function (state_13143){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_13143);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e13163){if((e13163 instanceof Object))
{var ex__8545__auto__ = e13163;var statearr_13164_13177 = state_13143;(statearr_13164_13177[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13178 = state_13143;
state_13143 = G__13178;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_13143){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_13143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___13166,out))
})();var state__8558__auto__ = (function (){var statearr_13165 = f__8557__auto__.call(null);(statearr_13165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___13166);
return statearr_13165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___13166,out))
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
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8556__auto___13275 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___13275,out){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___13275,out){
return (function (state_13250){var state_val_13251 = (state_13250[(1)]);if((state_val_13251 === (7)))
{var inst_13245 = (state_13250[(2)]);var state_13250__$1 = state_13250;var statearr_13252_13276 = state_13250__$1;(statearr_13252_13276[(2)] = inst_13245);
(statearr_13252_13276[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (1)))
{var inst_13227 = null;var state_13250__$1 = (function (){var statearr_13253 = state_13250;(statearr_13253[(7)] = inst_13227);
return statearr_13253;
})();var statearr_13254_13277 = state_13250__$1;(statearr_13254_13277[(2)] = null);
(statearr_13254_13277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (4)))
{var inst_13230 = (state_13250[(8)]);var inst_13230__$1 = (state_13250[(2)]);var inst_13231 = (inst_13230__$1 == null);var inst_13232 = cljs.core.not.call(null,inst_13231);var state_13250__$1 = (function (){var statearr_13255 = state_13250;(statearr_13255[(8)] = inst_13230__$1);
return statearr_13255;
})();if(inst_13232)
{var statearr_13256_13278 = state_13250__$1;(statearr_13256_13278[(1)] = (5));
} else
{var statearr_13257_13279 = state_13250__$1;(statearr_13257_13279[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (6)))
{var state_13250__$1 = state_13250;var statearr_13258_13280 = state_13250__$1;(statearr_13258_13280[(2)] = null);
(statearr_13258_13280[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (3)))
{var inst_13247 = (state_13250[(2)]);var inst_13248 = cljs.core.async.close_BANG_.call(null,out);var state_13250__$1 = (function (){var statearr_13259 = state_13250;(statearr_13259[(9)] = inst_13247);
return statearr_13259;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13250__$1,inst_13248);
} else
{if((state_val_13251 === (2)))
{var state_13250__$1 = state_13250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13250__$1,(4),ch);
} else
{if((state_val_13251 === (11)))
{var inst_13230 = (state_13250[(8)]);var inst_13239 = (state_13250[(2)]);var inst_13227 = inst_13230;var state_13250__$1 = (function (){var statearr_13260 = state_13250;(statearr_13260[(10)] = inst_13239);
(statearr_13260[(7)] = inst_13227);
return statearr_13260;
})();var statearr_13261_13281 = state_13250__$1;(statearr_13261_13281[(2)] = null);
(statearr_13261_13281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (9)))
{var inst_13230 = (state_13250[(8)]);var state_13250__$1 = state_13250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13250__$1,(11),out,inst_13230);
} else
{if((state_val_13251 === (5)))
{var inst_13227 = (state_13250[(7)]);var inst_13230 = (state_13250[(8)]);var inst_13234 = cljs.core._EQ_.call(null,inst_13230,inst_13227);var state_13250__$1 = state_13250;if(inst_13234)
{var statearr_13263_13282 = state_13250__$1;(statearr_13263_13282[(1)] = (8));
} else
{var statearr_13264_13283 = state_13250__$1;(statearr_13264_13283[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (10)))
{var inst_13242 = (state_13250[(2)]);var state_13250__$1 = state_13250;var statearr_13265_13284 = state_13250__$1;(statearr_13265_13284[(2)] = inst_13242);
(statearr_13265_13284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (8)))
{var inst_13227 = (state_13250[(7)]);var tmp13262 = inst_13227;var inst_13227__$1 = tmp13262;var state_13250__$1 = (function (){var statearr_13266 = state_13250;(statearr_13266[(7)] = inst_13227__$1);
return statearr_13266;
})();var statearr_13267_13285 = state_13250__$1;(statearr_13267_13285[(2)] = null);
(statearr_13267_13285[(1)] = (2));
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
});})(c__8556__auto___13275,out))
;return ((function (switch__8541__auto__,c__8556__auto___13275,out){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_13271 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13271[(0)] = state_machine__8542__auto__);
(statearr_13271[(1)] = (1));
return statearr_13271;
});
var state_machine__8542__auto____1 = (function (state_13250){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_13250);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e13272){if((e13272 instanceof Object))
{var ex__8545__auto__ = e13272;var statearr_13273_13286 = state_13250;(statearr_13273_13286[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13250);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13287 = state_13250;
state_13250 = G__13287;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_13250){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_13250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___13275,out))
})();var state__8558__auto__ = (function (){var statearr_13274 = f__8557__auto__.call(null);(statearr_13274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___13275);
return statearr_13274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___13275,out))
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
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8556__auto___13422 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___13422,out){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___13422,out){
return (function (state_13392){var state_val_13393 = (state_13392[(1)]);if((state_val_13393 === (7)))
{var inst_13388 = (state_13392[(2)]);var state_13392__$1 = state_13392;var statearr_13394_13423 = state_13392__$1;(statearr_13394_13423[(2)] = inst_13388);
(statearr_13394_13423[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (1)))
{var inst_13355 = (new Array(n));var inst_13356 = inst_13355;var inst_13357 = (0);var state_13392__$1 = (function (){var statearr_13395 = state_13392;(statearr_13395[(7)] = inst_13356);
(statearr_13395[(8)] = inst_13357);
return statearr_13395;
})();var statearr_13396_13424 = state_13392__$1;(statearr_13396_13424[(2)] = null);
(statearr_13396_13424[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (4)))
{var inst_13360 = (state_13392[(9)]);var inst_13360__$1 = (state_13392[(2)]);var inst_13361 = (inst_13360__$1 == null);var inst_13362 = cljs.core.not.call(null,inst_13361);var state_13392__$1 = (function (){var statearr_13397 = state_13392;(statearr_13397[(9)] = inst_13360__$1);
return statearr_13397;
})();if(inst_13362)
{var statearr_13398_13425 = state_13392__$1;(statearr_13398_13425[(1)] = (5));
} else
{var statearr_13399_13426 = state_13392__$1;(statearr_13399_13426[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (15)))
{var inst_13382 = (state_13392[(2)]);var state_13392__$1 = state_13392;var statearr_13400_13427 = state_13392__$1;(statearr_13400_13427[(2)] = inst_13382);
(statearr_13400_13427[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (13)))
{var state_13392__$1 = state_13392;var statearr_13401_13428 = state_13392__$1;(statearr_13401_13428[(2)] = null);
(statearr_13401_13428[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (6)))
{var inst_13357 = (state_13392[(8)]);var inst_13378 = (inst_13357 > (0));var state_13392__$1 = state_13392;if(cljs.core.truth_(inst_13378))
{var statearr_13402_13429 = state_13392__$1;(statearr_13402_13429[(1)] = (12));
} else
{var statearr_13403_13430 = state_13392__$1;(statearr_13403_13430[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (3)))
{var inst_13390 = (state_13392[(2)]);var state_13392__$1 = state_13392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13392__$1,inst_13390);
} else
{if((state_val_13393 === (12)))
{var inst_13356 = (state_13392[(7)]);var inst_13380 = cljs.core.vec.call(null,inst_13356);var state_13392__$1 = state_13392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13392__$1,(15),out,inst_13380);
} else
{if((state_val_13393 === (2)))
{var state_13392__$1 = state_13392;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13392__$1,(4),ch);
} else
{if((state_val_13393 === (11)))
{var inst_13372 = (state_13392[(2)]);var inst_13373 = (new Array(n));var inst_13356 = inst_13373;var inst_13357 = (0);var state_13392__$1 = (function (){var statearr_13404 = state_13392;(statearr_13404[(7)] = inst_13356);
(statearr_13404[(10)] = inst_13372);
(statearr_13404[(8)] = inst_13357);
return statearr_13404;
})();var statearr_13405_13431 = state_13392__$1;(statearr_13405_13431[(2)] = null);
(statearr_13405_13431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (9)))
{var inst_13356 = (state_13392[(7)]);var inst_13370 = cljs.core.vec.call(null,inst_13356);var state_13392__$1 = state_13392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13392__$1,(11),out,inst_13370);
} else
{if((state_val_13393 === (5)))
{var inst_13356 = (state_13392[(7)]);var inst_13365 = (state_13392[(11)]);var inst_13357 = (state_13392[(8)]);var inst_13360 = (state_13392[(9)]);var inst_13364 = (inst_13356[inst_13357] = inst_13360);var inst_13365__$1 = (inst_13357 + (1));var inst_13366 = (inst_13365__$1 < n);var state_13392__$1 = (function (){var statearr_13406 = state_13392;(statearr_13406[(11)] = inst_13365__$1);
(statearr_13406[(12)] = inst_13364);
return statearr_13406;
})();if(cljs.core.truth_(inst_13366))
{var statearr_13407_13432 = state_13392__$1;(statearr_13407_13432[(1)] = (8));
} else
{var statearr_13408_13433 = state_13392__$1;(statearr_13408_13433[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (14)))
{var inst_13385 = (state_13392[(2)]);var inst_13386 = cljs.core.async.close_BANG_.call(null,out);var state_13392__$1 = (function (){var statearr_13410 = state_13392;(statearr_13410[(13)] = inst_13385);
return statearr_13410;
})();var statearr_13411_13434 = state_13392__$1;(statearr_13411_13434[(2)] = inst_13386);
(statearr_13411_13434[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (10)))
{var inst_13376 = (state_13392[(2)]);var state_13392__$1 = state_13392;var statearr_13412_13435 = state_13392__$1;(statearr_13412_13435[(2)] = inst_13376);
(statearr_13412_13435[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13393 === (8)))
{var inst_13356 = (state_13392[(7)]);var inst_13365 = (state_13392[(11)]);var tmp13409 = inst_13356;var inst_13356__$1 = tmp13409;var inst_13357 = inst_13365;var state_13392__$1 = (function (){var statearr_13413 = state_13392;(statearr_13413[(7)] = inst_13356__$1);
(statearr_13413[(8)] = inst_13357);
return statearr_13413;
})();var statearr_13414_13436 = state_13392__$1;(statearr_13414_13436[(2)] = null);
(statearr_13414_13436[(1)] = (2));
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
});})(c__8556__auto___13422,out))
;return ((function (switch__8541__auto__,c__8556__auto___13422,out){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_13418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13418[(0)] = state_machine__8542__auto__);
(statearr_13418[(1)] = (1));
return statearr_13418;
});
var state_machine__8542__auto____1 = (function (state_13392){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_13392);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e13419){if((e13419 instanceof Object))
{var ex__8545__auto__ = e13419;var statearr_13420_13437 = state_13392;(statearr_13420_13437[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13392);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13419;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13438 = state_13392;
state_13392 = G__13438;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_13392){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_13392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___13422,out))
})();var state__8558__auto__ = (function (){var statearr_13421 = f__8557__auto__.call(null);(statearr_13421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___13422);
return statearr_13421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___13422,out))
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
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8556__auto___13581 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8556__auto___13581,out){
return (function (){var f__8557__auto__ = (function (){var switch__8541__auto__ = ((function (c__8556__auto___13581,out){
return (function (state_13551){var state_val_13552 = (state_13551[(1)]);if((state_val_13552 === (7)))
{var inst_13547 = (state_13551[(2)]);var state_13551__$1 = state_13551;var statearr_13553_13582 = state_13551__$1;(statearr_13553_13582[(2)] = inst_13547);
(statearr_13553_13582[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (1)))
{var inst_13510 = [];var inst_13511 = inst_13510;var inst_13512 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13551__$1 = (function (){var statearr_13554 = state_13551;(statearr_13554[(7)] = inst_13511);
(statearr_13554[(8)] = inst_13512);
return statearr_13554;
})();var statearr_13555_13583 = state_13551__$1;(statearr_13555_13583[(2)] = null);
(statearr_13555_13583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (4)))
{var inst_13515 = (state_13551[(9)]);var inst_13515__$1 = (state_13551[(2)]);var inst_13516 = (inst_13515__$1 == null);var inst_13517 = cljs.core.not.call(null,inst_13516);var state_13551__$1 = (function (){var statearr_13556 = state_13551;(statearr_13556[(9)] = inst_13515__$1);
return statearr_13556;
})();if(inst_13517)
{var statearr_13557_13584 = state_13551__$1;(statearr_13557_13584[(1)] = (5));
} else
{var statearr_13558_13585 = state_13551__$1;(statearr_13558_13585[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (15)))
{var inst_13541 = (state_13551[(2)]);var state_13551__$1 = state_13551;var statearr_13559_13586 = state_13551__$1;(statearr_13559_13586[(2)] = inst_13541);
(statearr_13559_13586[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (13)))
{var state_13551__$1 = state_13551;var statearr_13560_13587 = state_13551__$1;(statearr_13560_13587[(2)] = null);
(statearr_13560_13587[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (6)))
{var inst_13511 = (state_13551[(7)]);var inst_13536 = inst_13511.length;var inst_13537 = (inst_13536 > (0));var state_13551__$1 = state_13551;if(cljs.core.truth_(inst_13537))
{var statearr_13561_13588 = state_13551__$1;(statearr_13561_13588[(1)] = (12));
} else
{var statearr_13562_13589 = state_13551__$1;(statearr_13562_13589[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (3)))
{var inst_13549 = (state_13551[(2)]);var state_13551__$1 = state_13551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13551__$1,inst_13549);
} else
{if((state_val_13552 === (12)))
{var inst_13511 = (state_13551[(7)]);var inst_13539 = cljs.core.vec.call(null,inst_13511);var state_13551__$1 = state_13551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13551__$1,(15),out,inst_13539);
} else
{if((state_val_13552 === (2)))
{var state_13551__$1 = state_13551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13551__$1,(4),ch);
} else
{if((state_val_13552 === (11)))
{var inst_13519 = (state_13551[(10)]);var inst_13515 = (state_13551[(9)]);var inst_13529 = (state_13551[(2)]);var inst_13530 = [];var inst_13531 = inst_13530.push(inst_13515);var inst_13511 = inst_13530;var inst_13512 = inst_13519;var state_13551__$1 = (function (){var statearr_13563 = state_13551;(statearr_13563[(11)] = inst_13531);
(statearr_13563[(7)] = inst_13511);
(statearr_13563[(8)] = inst_13512);
(statearr_13563[(12)] = inst_13529);
return statearr_13563;
})();var statearr_13564_13590 = state_13551__$1;(statearr_13564_13590[(2)] = null);
(statearr_13564_13590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (9)))
{var inst_13511 = (state_13551[(7)]);var inst_13527 = cljs.core.vec.call(null,inst_13511);var state_13551__$1 = state_13551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13551__$1,(11),out,inst_13527);
} else
{if((state_val_13552 === (5)))
{var inst_13519 = (state_13551[(10)]);var inst_13515 = (state_13551[(9)]);var inst_13512 = (state_13551[(8)]);var inst_13519__$1 = f.call(null,inst_13515);var inst_13520 = cljs.core._EQ_.call(null,inst_13519__$1,inst_13512);var inst_13521 = cljs.core.keyword_identical_QMARK_.call(null,inst_13512,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13522 = (inst_13520) || (inst_13521);var state_13551__$1 = (function (){var statearr_13565 = state_13551;(statearr_13565[(10)] = inst_13519__$1);
return statearr_13565;
})();if(cljs.core.truth_(inst_13522))
{var statearr_13566_13591 = state_13551__$1;(statearr_13566_13591[(1)] = (8));
} else
{var statearr_13567_13592 = state_13551__$1;(statearr_13567_13592[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (14)))
{var inst_13544 = (state_13551[(2)]);var inst_13545 = cljs.core.async.close_BANG_.call(null,out);var state_13551__$1 = (function (){var statearr_13569 = state_13551;(statearr_13569[(13)] = inst_13544);
return statearr_13569;
})();var statearr_13570_13593 = state_13551__$1;(statearr_13570_13593[(2)] = inst_13545);
(statearr_13570_13593[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (10)))
{var inst_13534 = (state_13551[(2)]);var state_13551__$1 = state_13551;var statearr_13571_13594 = state_13551__$1;(statearr_13571_13594[(2)] = inst_13534);
(statearr_13571_13594[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13552 === (8)))
{var inst_13519 = (state_13551[(10)]);var inst_13511 = (state_13551[(7)]);var inst_13515 = (state_13551[(9)]);var inst_13524 = inst_13511.push(inst_13515);var tmp13568 = inst_13511;var inst_13511__$1 = tmp13568;var inst_13512 = inst_13519;var state_13551__$1 = (function (){var statearr_13572 = state_13551;(statearr_13572[(7)] = inst_13511__$1);
(statearr_13572[(14)] = inst_13524);
(statearr_13572[(8)] = inst_13512);
return statearr_13572;
})();var statearr_13573_13595 = state_13551__$1;(statearr_13573_13595[(2)] = null);
(statearr_13573_13595[(1)] = (2));
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
});})(c__8556__auto___13581,out))
;return ((function (switch__8541__auto__,c__8556__auto___13581,out){
return (function() {
var state_machine__8542__auto__ = null;
var state_machine__8542__auto____0 = (function (){var statearr_13577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13577[(0)] = state_machine__8542__auto__);
(statearr_13577[(1)] = (1));
return statearr_13577;
});
var state_machine__8542__auto____1 = (function (state_13551){while(true){
var ret_value__8543__auto__ = (function (){try{while(true){
var result__8544__auto__ = switch__8541__auto__.call(null,state_13551);if(cljs.core.keyword_identical_QMARK_.call(null,result__8544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8544__auto__;
}
break;
}
}catch (e13578){if((e13578 instanceof Object))
{var ex__8545__auto__ = e13578;var statearr_13579_13596 = state_13551;(statearr_13579_13596[(5)] = ex__8545__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13578;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13597 = state_13551;
state_13551 = G__13597;
continue;
}
} else
{return ret_value__8543__auto__;
}
break;
}
});
state_machine__8542__auto__ = function(state_13551){
switch(arguments.length){
case 0:
return state_machine__8542__auto____0.call(this);
case 1:
return state_machine__8542__auto____1.call(this,state_13551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8542__auto____0;
state_machine__8542__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8542__auto____1;
return state_machine__8542__auto__;
})()
;})(switch__8541__auto__,c__8556__auto___13581,out))
})();var state__8558__auto__ = (function (){var statearr_13580 = f__8557__auto__.call(null);(statearr_13580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8556__auto___13581);
return statearr_13580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8558__auto__);
});})(c__8556__auto___13581,out))
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