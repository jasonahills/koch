(ns koch.algorithm.core)


(enable-console-print!)

; MATH LIBRARY

; (defn sign 
;   [number]
;   (/ (numberMath.abs number))
; )

; MATRIX LIBRARY
(def testMatrix1 [[1 2 3] [4 5 6] [7 8 9]])
(def identityMatrix [[1 0 0] [0 1 0] [0 0 1]])

(defn dotProd
  [vector1 vector2]
  (reduce + (map * vector1 vector2)))

(defn columnAsVector
  [matrix colIndex]
  (map #(nth % colIndex) matrix)
)

(defn mult3x3
  ; we really ought to build a general one of these, but this this quicker for now
  [matrix1 matrix2]
  (let [row0 (get matrix1 0)
        row1 (get matrix1 1)
        row2 (get matrix1 2)
        col0 (columnAsVector matrix2 0)
        col1 (columnAsVector matrix2 1)
        col2 (columnAsVector matrix2 2)]
        (println "all the rows" row0 row1 row2 col0 col1 col2)
      [[(dotProd row0 col0) (dotProd row0 col1) (dotProd row0 col2)]
       [(dotProd row1 col0) (dotProd row1 col1) (dotProd row1 col2)]
       [(dotProd row2 col0) (dotProd row2 col1) (dotProd row2 col2)]]))

(println "mult3x3" (mult3x3 testMatrix1 identityMatrix))




; point [x y]
; curve [point point point ... point]
; segment [point point]


; MEASUREMENTS

(def testSeg1 [[0 0] [1 0]])
(def testSeg2 [[1 1] [2 2]])

(defn segmentLength
    [ [[x1 y1] [x2 y2]] ]
    (let [rise (- y1 y2)
          run (- x1 x2)]
        (Math/sqrt (+ (* rise rise) (* run run)))))

(defn segmentAngle
    "angle from x-axis"
    [ [[x1 y1] [x2 y2]] ]
    (let [opp (- y1 y2)
          adj (- x1 x2)]
        (Math/atan (/ opp adj))))
        ; can't currently handle vertical lines; TODO: fix this.
        ; (if (= adj 0)
        ;   (opp(/ Math/PI 2)
          ; (Math/atan (/ opp adj)))))

(defn requiredScale
    "scale to fit first segment on second"
    [segment1 segment2]
    (/ (segmentLength segment2) (segmentLength segment1)))

(defn requiredAngle
    "angle to fit first segment on second"
    [segment1 segment2]
    (- (segmentAngle segment1) (segmentAngle segment2)))

(println "segAng" (segmentAngle testSeg1) (segmentAngle testSeg2))



; MATRICES

(defn translationMatrix
    [[x y]]
    [[1 0 x]
     [0 1 y]
     [0 0 1]])

(defn rotationMatrix
    "clockwise rotation (when y axis points up); angle in radians"
    [angle]
    [[(Math/cos angle) (- 0 (Math/sin angle)) 0]
     [(Math/sin angle) (Math/cos angle) 0]
     [0 0 1]])
    ; ([angle [x y]])  TODO: allow optional rotation around point other than origin

(defn scaleMatrix
    "scales from origin"
    [scaleFactor]
    [[scaleFactor 0 0]
     [0 scaleFactor 0]
     [0 0 scaleFactor]])

; (defn segmentToSegmentTransformMatrix
;     [segment1 segment2]
;     (let [scale (requiredScale segment1 segment2)
;           angle (requiredAngle segment1 segment2)
;           first])
;   )

; ALGORITHM

(defn segmentsFromCurve
    "curve -> [segment ... segment]"
    [curve]
    (map
        (fn [pnt1 pnt2] [pnt1 pnt2])
        curve
        (rest curve)))

(defn transformModelToSegment
    [curve segment])














(defn curveOntoSegmentMatrix
    [ curve segment ]
    (let [curveInit (first curve)
          curveLast (last curve)]
          ))
; defn transToOrigin


; points [[0 0] [1 1] [2 0] [3 0]]
; segment [[0 0] [1 2]]
