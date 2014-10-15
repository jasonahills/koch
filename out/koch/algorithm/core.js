// Compiled by ClojureScript 0.0-2311
goog.provide('koch.algorithm.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
koch.algorithm.core.testMatrix1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
koch.algorithm.core.identityMatrix = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
koch.algorithm.core.dotProd = (function dotProd(vector1,vector2){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,vector1,vector2));
});
koch.algorithm.core.columnAsVector = (function columnAsVector(matrix,colIndex){return cljs.core.map.call(null,(function (p1__4972_SHARP_){return cljs.core.nth.call(null,p1__4972_SHARP_,colIndex);
}),matrix);
});
koch.algorithm.core.mult3x3 = (function mult3x3(matrix1,matrix2){var row0 = cljs.core.get.call(null,matrix1,(0));var row1 = cljs.core.get.call(null,matrix1,(1));var row2 = cljs.core.get.call(null,matrix1,(2));var col0 = koch.algorithm.core.columnAsVector.call(null,matrix2,(0));var col1 = koch.algorithm.core.columnAsVector.call(null,matrix2,(1));var col2 = koch.algorithm.core.columnAsVector.call(null,matrix2,(2));cljs.core.println.call(null,"all the rows",row0,row1,row2,col0,col1,col2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row0,col0),koch.algorithm.core.dotProd.call(null,row0,col1),koch.algorithm.core.dotProd.call(null,row0,col2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row1,col0),koch.algorithm.core.dotProd.call(null,row1,col1),koch.algorithm.core.dotProd.call(null,row1,col2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row2,col0),koch.algorithm.core.dotProd.call(null,row2,col1),koch.algorithm.core.dotProd.call(null,row2,col2)], null)], null);
});
cljs.core.println.call(null,"mult3x3",koch.algorithm.core.mult3x3.call(null,koch.algorithm.core.testMatrix1,koch.algorithm.core.identityMatrix));
koch.algorithm.core.testSeg1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null);
koch.algorithm.core.testSeg2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
koch.algorithm.core.segmentLength = (function segmentLength(p__4973){var vec__4977 = p__4973;var vec__4978 = cljs.core.nth.call(null,vec__4977,(0),null);var x1 = cljs.core.nth.call(null,vec__4978,(0),null);var y1 = cljs.core.nth.call(null,vec__4978,(1),null);var vec__4979 = cljs.core.nth.call(null,vec__4977,(1),null);var x2 = cljs.core.nth.call(null,vec__4979,(0),null);var y2 = cljs.core.nth.call(null,vec__4979,(1),null);var rise = (y1 - y2);var run = (x1 - x2);return Math.sqrt.call(null,((rise * rise) + (run * run)));
});
/**
* angle from x-axis
*/
koch.algorithm.core.segmentAngle = (function segmentAngle(p__4980){var vec__4984 = p__4980;var vec__4985 = cljs.core.nth.call(null,vec__4984,(0),null);var x1 = cljs.core.nth.call(null,vec__4985,(0),null);var y1 = cljs.core.nth.call(null,vec__4985,(1),null);var vec__4986 = cljs.core.nth.call(null,vec__4984,(1),null);var x2 = cljs.core.nth.call(null,vec__4986,(0),null);var y2 = cljs.core.nth.call(null,vec__4986,(1),null);var opp = (y1 - y2);var adj = (x1 - x2);return Math.atan.call(null,(opp / adj));
});
/**
* scale to fit first segment on second
*/
koch.algorithm.core.requiredScale = (function requiredScale(segment1,segment2){return (koch.algorithm.core.segmentLength.call(null,segment2) / koch.algorithm.core.segmentLength.call(null,segment1));
});
/**
* angle to fit first segment on second
*/
koch.algorithm.core.requiredAngle = (function requiredAngle(segment1,segment2){return (koch.algorithm.core.segmentAngle.call(null,segment1) - koch.algorithm.core.segmentAngle.call(null,segment2));
});
cljs.core.println.call(null,"segAng",koch.algorithm.core.segmentAngle.call(null,koch.algorithm.core.testSeg1),koch.algorithm.core.segmentAngle.call(null,koch.algorithm.core.testSeg2));
koch.algorithm.core.translationMatrix = (function translationMatrix(p__4987){var vec__4989 = p__4987;var x = cljs.core.nth.call(null,vec__4989,(0),null);var y = cljs.core.nth.call(null,vec__4989,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),x], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
});
/**
* clockwise rotation (when y axis points up); angle in radians
*/
koch.algorithm.core.rotationMatrix = (function rotationMatrix(angle){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,angle),((0) - Math.sin.call(null,angle)),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,angle),Math.cos.call(null,angle),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
});
/**
* scales from origin
*/
koch.algorithm.core.scaleMatrix = (function scaleMatrix(scaleFactor){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scaleFactor,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),scaleFactor,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),scaleFactor], null)], null);
});
/**
* curve -> [segment ... segment]
*/
koch.algorithm.core.segmentsFromCurve = (function segmentsFromCurve(curve){return cljs.core.map.call(null,(function (pnt1,pnt2){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnt1,pnt2], null);
}),curve,cljs.core.rest.call(null,curve));
});
koch.algorithm.core.transformModelToSegment = (function transformModelToSegment(curve,segment){return null;
});
koch.algorithm.core.curveOntoSegmentMatrix = (function curveOntoSegmentMatrix(curve,segment){var curveInit = cljs.core.first.call(null,curve);var curveLast = cljs.core.last.call(null,curve);return null;
});

//# sourceMappingURL=core.js.map