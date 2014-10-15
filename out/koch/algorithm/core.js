// Compiled by ClojureScript 0.0-2311
goog.provide('koch.algorithm.core');
goog.require('cljs.core');
koch.algorithm.core.testMatrix1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
koch.algorithm.core.identityMatrix = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
koch.algorithm.core.dotProd = (function dotProd(vector1,vector2){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,vector1,vector2));
});
koch.algorithm.core.columnAsVector = (function columnAsVector(matrix,colIndex){return cljs.core.map.call(null,(function (p1__9474_SHARP_){return cljs.core.nth.call(null,p1__9474_SHARP_,colIndex);
}),matrix);
});
koch.algorithm.core.mult3x3 = (function mult3x3(matrix1,matrix2){var row0 = cljs.core.get.call(null,matrix1,(0));var row1 = cljs.core.get.call(null,matrix1,(1));var row2 = cljs.core.get.call(null,matrix1,(2));var col0 = koch.algorithm.core.columnAsVector.call(null,matrix2,(0));var col1 = koch.algorithm.core.columnAsVector.call(null,matrix2,(1));var col2 = koch.algorithm.core.columnAsVector.call(null,matrix2,(2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row0,col0),koch.algorithm.core.dotProd.call(null,row0,col1),koch.algorithm.core.dotProd.call(null,row0,col2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row1,col0),koch.algorithm.core.dotProd.call(null,row1,col1),koch.algorithm.core.dotProd.call(null,row1,col2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row2,col0),koch.algorithm.core.dotProd.call(null,row2,col1),koch.algorithm.core.dotProd.call(null,row2,col2)], null)], null);
});
/**
* adds a z-value to points
*/
koch.algorithm.core.pointToVector = (function pointToVector(p__9475){var vec__9477 = p__9475;var x = cljs.core.nth.call(null,vec__9477,(0),null);var y = cljs.core.nth.call(null,vec__9477,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(1)], null);
});
/**
* removes unneeded z-value from vector
*/
koch.algorithm.core.vectorToPoint = (function vectorToPoint(p__9478){var vec__9480 = p__9478;var x = cljs.core.nth.call(null,vec__9480,(0),null);var y = cljs.core.nth.call(null,vec__9480,(1),null);var z = cljs.core.nth.call(null,vec__9480,(2),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
koch.algorithm.core.applyMatrixToVector = (function applyMatrixToVector(matrix,vect){var row0 = cljs.core.get.call(null,matrix,(0));var row1 = cljs.core.get.call(null,matrix,(1));var row2 = cljs.core.get.call(null,matrix,(2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row0,vect),koch.algorithm.core.dotProd.call(null,row1,vect),koch.algorithm.core.dotProd.call(null,row2,vect)], null);
});
koch.algorithm.core.applyMatrixToPoint = (function applyMatrixToPoint(matrix,point){return koch.algorithm.core.vectorToPoint.call(null,koch.algorithm.core.applyMatrixToVector.call(null,matrix,koch.algorithm.core.pointToVector.call(null,point)));
});
koch.algorithm.core.testSeg1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null);
koch.algorithm.core.testSeg2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
koch.algorithm.core.segmentLength = (function segmentLength(p__9481){var vec__9485 = p__9481;var vec__9486 = cljs.core.nth.call(null,vec__9485,(0),null);var x1 = cljs.core.nth.call(null,vec__9486,(0),null);var y1 = cljs.core.nth.call(null,vec__9486,(1),null);var vec__9487 = cljs.core.nth.call(null,vec__9485,(1),null);var x2 = cljs.core.nth.call(null,vec__9487,(0),null);var y2 = cljs.core.nth.call(null,vec__9487,(1),null);var rise = (y2 - y1);var run = (x2 - x1);return Math.sqrt.call(null,((rise * rise) + (run * run)));
});
/**
* angle from x-axis
*/
koch.algorithm.core.segmentAngle = (function segmentAngle(p__9488){var vec__9492 = p__9488;var vec__9493 = cljs.core.nth.call(null,vec__9492,(0),null);var x1 = cljs.core.nth.call(null,vec__9493,(0),null);var y1 = cljs.core.nth.call(null,vec__9493,(1),null);var vec__9494 = cljs.core.nth.call(null,vec__9492,(1),null);var x2 = cljs.core.nth.call(null,vec__9494,(0),null);var y2 = cljs.core.nth.call(null,vec__9494,(1),null);var opp = (y2 - y1);var adj = (x2 - x1);var arcAngle = Math.atan.call(null,(opp / adj));if((adj < (0)))
{return (3.141592 + arcAngle);
} else
{return arcAngle;
}
});
/**
* scale to fit first segment on second
*/
koch.algorithm.core.requiredScale = (function requiredScale(segment1,segment2){return (koch.algorithm.core.segmentLength.call(null,segment2) / koch.algorithm.core.segmentLength.call(null,segment1));
});
/**
* angle to fit first segment on second
*/
koch.algorithm.core.requiredAngle = (function requiredAngle(segment1,segment2){return (koch.algorithm.core.segmentAngle.call(null,segment2) - koch.algorithm.core.segmentAngle.call(null,segment1));
});
koch.algorithm.core.translationMatrix = (function translationMatrix(p__9495){var vec__9497 = p__9495;var x = cljs.core.nth.call(null,vec__9497,(0),null);var y = cljs.core.nth.call(null,vec__9497,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),x], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
});
koch.algorithm.core.transToOriginMatrix = (function transToOriginMatrix(p__9498){var vec__9500 = p__9498;var x = cljs.core.nth.call(null,vec__9500,(0),null);var y = cljs.core.nth.call(null,vec__9500,(1),null);return koch.algorithm.core.translationMatrix.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),(- y)], null));
});
/**
* clockwise rotation (when y axis points up); angle in radians
*/
koch.algorithm.core.rotationMatrix = (function rotationMatrix(angle){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos.call(null,angle),((0) - Math.sin.call(null,angle)),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin.call(null,angle),Math.cos.call(null,angle),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
});
/**
* scales from origin
*/
koch.algorithm.core.scaleMatrix = (function scaleMatrix(scaleFactor){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scaleFactor,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),scaleFactor,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
});
koch.algorithm.core.segmentToSegmentTransformMatrix = (function segmentToSegmentTransformMatrix(segment1,segment2){var scale = koch.algorithm.core.requiredScale.call(null,segment1,segment2);var angle = koch.algorithm.core.requiredAngle.call(null,segment1,segment2);return cljs.core.reduce.call(null,koch.algorithm.core.mult3x3,cljs.core.reverse.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.transToOriginMatrix.call(null,cljs.core.first.call(null,segment1)),koch.algorithm.core.rotationMatrix.call(null,angle),koch.algorithm.core.scaleMatrix.call(null,scale),koch.algorithm.core.translationMatrix.call(null,cljs.core.first.call(null,segment2))], null)));
});
/**
* curve -> [segment ... segment]
*/
koch.algorithm.core.segmentsFromCurve = (function segmentsFromCurve(curve){return cljs.core.map.call(null,(function (pnt1,pnt2){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnt1,pnt2], null);
}),curve,cljs.core.rest.call(null,curve));
});
/**
* transforms a curve so its endpoints fit to a segment
*/
koch.algorithm.core.curveOntoSegment = (function curveOntoSegment(curve,segment){var curveSeg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,curve),cljs.core.last.call(null,curve)], null);var transMatrix = koch.algorithm.core.segmentToSegmentTransformMatrix.call(null,curveSeg,segment);return cljs.core.map.call(null,((function (curveSeg,transMatrix){
return (function (p1__9501_SHARP_){return koch.algorithm.core.applyMatrixToPoint.call(null,transMatrix,p1__9501_SHARP_);
});})(curveSeg,transMatrix))
,curve);
});
koch.algorithm.core.nextFractal = (function nextFractal(curve,level1curve){var segments = koch.algorithm.core.segmentsFromCurve.call(null,curve);var firstPoint = cljs.core.first.call(null,curve);var fractals = cljs.core.map.call(null,((function (segments,firstPoint){
return (function (p1__9502_SHARP_){return koch.algorithm.core.curveOntoSegment.call(null,level1curve,p1__9502_SHARP_);
});})(segments,firstPoint))
,segments);var headlessFractals = cljs.core.map.call(null,cljs.core.rest,fractals);var restPoints = cljs.core.reduce.call(null,cljs.core.concat,headlessFractals);return cljs.core.cons.call(null,firstPoint,restPoints);
});
koch.algorithm.core.fractalizeMe = (function fractalizeMe(curve,level){var originalCurve = curve;var curve__$1 = curve;var level__$1 = level;while(true){
if(cljs.core._EQ_.call(null,level__$1,(1)))
{return curve__$1;
} else
{{
var G__9503 = koch.algorithm.core.nextFractal.call(null,curve__$1,originalCurve);
var G__9504 = (level__$1 - (1));
curve__$1 = G__9503;
level__$1 = G__9504;
continue;
}
}
break;
}
});

//# sourceMappingURL=core.js.map