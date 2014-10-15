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
koch.algorithm.core.mult3x3 = (function mult3x3(matrix1,matrix2){var row0 = cljs.core.get.call(null,matrix1,(0));var row1 = cljs.core.get.call(null,matrix1,(1));var row2 = cljs.core.get.call(null,matrix1,(2));var col0 = koch.algorithm.core.columnAsVector.call(null,matrix2,(0));var col1 = koch.algorithm.core.columnAsVector.call(null,matrix2,(1));var col2 = koch.algorithm.core.columnAsVector.call(null,matrix2,(2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row0,col0),koch.algorithm.core.dotProd.call(null,row0,col1),koch.algorithm.core.dotProd.call(null,row0,col2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row1,col0),koch.algorithm.core.dotProd.call(null,row1,col1),koch.algorithm.core.dotProd.call(null,row1,col2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row2,col0),koch.algorithm.core.dotProd.call(null,row2,col1),koch.algorithm.core.dotProd.call(null,row2,col2)], null)], null);
});
cljs.core.println.call(null,"mult3x3",koch.algorithm.core.mult3x3.call(null,koch.algorithm.core.testMatrix1,koch.algorithm.core.identityMatrix));
/**
* adds a z-value to points
*/
koch.algorithm.core.pointToVector = (function pointToVector(p__4973){var vec__4975 = p__4973;var x = cljs.core.nth.call(null,vec__4975,(0),null);var y = cljs.core.nth.call(null,vec__4975,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(1)], null);
});
/**
* removes unneeded z-value from vector
*/
koch.algorithm.core.vectorToPoint = (function vectorToPoint(p__4976){var vec__4978 = p__4976;var x = cljs.core.nth.call(null,vec__4978,(0),null);var y = cljs.core.nth.call(null,vec__4978,(1),null);var z = cljs.core.nth.call(null,vec__4978,(2),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
koch.algorithm.core.applyMatrixToVector = (function applyMatrixToVector(matrix,vect){var row0 = cljs.core.get.call(null,matrix,(0));var row1 = cljs.core.get.call(null,matrix,(1));var row2 = cljs.core.get.call(null,matrix,(2));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.dotProd.call(null,row0,vect),koch.algorithm.core.dotProd.call(null,row1,vect),koch.algorithm.core.dotProd.call(null,row2,vect)], null);
});
cljs.core.println.call(null,"am2v",koch.algorithm.core.applyMatrixToVector.call(null,koch.algorithm.core.testMatrix1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null)));
cljs.core.println.call(null,koch.algorithm.core.vectorToPoint.call(null,koch.algorithm.core.pointToVector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))));
koch.algorithm.core.applyMatrixToPoint = (function applyMatrixToPoint(matrix,point){return koch.algorithm.core.vectorToPoint.call(null,koch.algorithm.core.applyMatrixToVector.call(null,matrix,koch.algorithm.core.pointToVector.call(null,point)));
});
cljs.core.println.call(null,"am2v",koch.algorithm.core.applyMatrixToVector.call(null,koch.algorithm.core.testMatrix1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null)));
cljs.core.println.call(null,koch.algorithm.core.vectorToPoint.call(null,koch.algorithm.core.pointToVector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))));
koch.algorithm.core.testSeg1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null);
koch.algorithm.core.testSeg2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
koch.algorithm.core.segmentLength = (function segmentLength(p__4979){var vec__4983 = p__4979;var vec__4984 = cljs.core.nth.call(null,vec__4983,(0),null);var x1 = cljs.core.nth.call(null,vec__4984,(0),null);var y1 = cljs.core.nth.call(null,vec__4984,(1),null);var vec__4985 = cljs.core.nth.call(null,vec__4983,(1),null);var x2 = cljs.core.nth.call(null,vec__4985,(0),null);var y2 = cljs.core.nth.call(null,vec__4985,(1),null);var rise = (y1 - y2);var run = (x1 - x2);return Math.sqrt.call(null,((rise * rise) + (run * run)));
});
/**
* angle from x-axis
*/
koch.algorithm.core.segmentAngle = (function segmentAngle(p__4986){var vec__4990 = p__4986;var vec__4991 = cljs.core.nth.call(null,vec__4990,(0),null);var x1 = cljs.core.nth.call(null,vec__4991,(0),null);var y1 = cljs.core.nth.call(null,vec__4991,(1),null);var vec__4992 = cljs.core.nth.call(null,vec__4990,(1),null);var x2 = cljs.core.nth.call(null,vec__4992,(0),null);var y2 = cljs.core.nth.call(null,vec__4992,(1),null);var opp = (y1 - y2);var adj = (x1 - x2);return Math.atan.call(null,(opp / adj));
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
cljs.core.println.call(null,"segAng",koch.algorithm.core.segmentAngle.call(null,koch.algorithm.core.testSeg1),koch.algorithm.core.segmentAngle.call(null,koch.algorithm.core.testSeg2));
koch.algorithm.core.translationMatrix = (function translationMatrix(p__4993){var vec__4995 = p__4993;var x = cljs.core.nth.call(null,vec__4995,(0),null);var y = cljs.core.nth.call(null,vec__4995,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),x], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
});
koch.algorithm.core.transToOriginMatrix = (function transToOriginMatrix(p__4996){var vec__4998 = p__4996;var x = cljs.core.nth.call(null,vec__4998,(0),null);var y = cljs.core.nth.call(null,vec__4998,(1),null);return koch.algorithm.core.translationMatrix.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- x),(- y)], null));
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
koch.algorithm.core.segmentToSegmentTransformMatrix = (function segmentToSegmentTransformMatrix(segment1,segment2){var scale = koch.algorithm.core.requiredScale.call(null,segment1,segment2);var angle = koch.algorithm.core.requiredAngle.call(null,segment1,segment2);return cljs.core.reduce.call(null,koch.algorithm.core.mult3x3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [koch.algorithm.core.transToOriginMatrix.call(null,cljs.core.first.call(null,segment1)),koch.algorithm.core.rotationMatrix.call(null,angle),koch.algorithm.core.scaleMatrix.call(null,scale),koch.algorithm.core.translationMatrix.call(null,cljs.core.first.call(null,segment2))], null));
});
koch.algorithm.core.testCurve = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null)], null);
/**
* curve -> [segment ... segment]
*/
koch.algorithm.core.segmentsFromCurve = (function segmentsFromCurve(curve){return cljs.core.map.call(null,(function (pnt1,pnt2){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnt1,pnt2], null);
}),curve,cljs.core.rest.call(null,curve));
});
cljs.core.println.call(null,"segFromCurve",koch.algorithm.core.segmentsFromCurve.call(null,koch.algorithm.core.testCurve));
/**
* transforms a curve so its endpoints fit to a segment
*/
koch.algorithm.core.curveOntoSegment = (function curveOntoSegment(curve,segment){var curveSeg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,curve),cljs.core.last.call(null,curve)], null);var transMatrix = koch.algorithm.core.segmentToSegmentTransformMatrix.call(null,curveSeg,segment);cljs.core.println.call(null,curveSeg,"transMatrix",transMatrix);
return cljs.core.map.call(null,((function (curveSeg,transMatrix){
return (function (p1__4999_SHARP_){return koch.algorithm.core.applyMatrixToPoint.call(null,transMatrix,p1__4999_SHARP_);
});})(curveSeg,transMatrix))
,curve);
});
cljs.core.println.call(null,"testCurveOnSeg",koch.algorithm.core.curveOntoSegment.call(null,koch.algorithm.core.testCurve,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null)], null)));
cljs.core.println.call(null,"testCurveOnSeg",koch.algorithm.core.curveOntoSegment.call(null,koch.algorithm.core.testCurve,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null)));
cljs.core.println.call(null,"testCurveOnSeg",koch.algorithm.core.curveOntoSegment.call(null,koch.algorithm.core.testCurve,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((0) - (4))], null)], null)));
koch.algorithm.core.nextFractal = (function nextFractal(curve,level1curve){var segments = koch.algorithm.core.segmentsFromCurve.call(null,curve);var firstPoint = cljs.core.first.call(null,curve);var fractals = cljs.core.map.call(null,((function (segments,firstPoint){
return (function (p1__5000_SHARP_){return koch.algorithm.core.curveOntoSegment.call(null,level1curve,p1__5000_SHARP_);
});})(segments,firstPoint))
,segments);var headlessFractals = cljs.core.map.call(null,cljs.core.rest,fractals);var restPoints = cljs.core.reduce.call(null,cljs.core.concat,headlessFractals);cljs.core.println.call(null,"fractals",fractals);
cljs.core.println.call(null,"headlesss fractals",headlessFractals);
return cljs.core.cons.call(null,firstPoint,restPoints);
});
cljs.core.println.call(null,"nextFractal",koch.algorithm.core.nextFractal.call(null,koch.algorithm.core.testCurve,koch.algorithm.core.testCurve));
koch.algorithm.core.fractalizeMe = (function fractalizeMe(curve,level){var originalCurve = curve;var curve__$1 = curve;var level__$1 = level;while(true){
if(cljs.core._EQ_.call(null,level__$1,(1)))
{return curve__$1;
} else
{{
var G__5001 = koch.algorithm.core.nextFractal.call(null,curve__$1,originalCurve);
var G__5002 = (level__$1 - (1));
curve__$1 = G__5001;
level__$1 = G__5002;
continue;
}
}
break;
}
});
cljs.core.println.call(null,"fractalizeMe",koch.algorithm.core.fractalizeMe.call(null,koch.algorithm.core.testCurve,(2)));

//# sourceMappingURL=core.js.map