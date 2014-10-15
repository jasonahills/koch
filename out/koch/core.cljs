(ns koch.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.style :as style]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]
            [koch.algorithm.core :as alg]))

(enable-console-print!)

(def xmin 0)
(def xmax 1)
(def ymin (- 0.5))
(def ymax 0.5)

(def app-state
  (atom
    {:fractal-depth 2
     :segments [[0 0] [(/ 1 3) 0] [(/ 1 2) (/ 1.732 6)] [(/ 2 3) 0]]
     :message "hello"}))

(defn point-debug [[x y]] (str "x: " x "\ty: " y "\n"))

(defn offset-in-element [e node]
  (let [offset (style/getPageOffset node)
        x-px (- e.pageX (.-x offset))
        y-px (- e.pageY (.-y offset))]
    [x-px y-px]))

(defn offset-percent [[x y] node]
  (let [size (style/getSize node)
        xpt (/ x (.-width size))
        ypt (/ y (.-height size))]
    [xpt ypt]))

(defn scale-to [n min max]
  (let [size (- max min)]
    (+ min (* size n))))

(defn handle-segment-click [e segments owner]
  ;; change so it uses the width/height of the component?
  (let [node (om/get-node owner "segments")
        offset (offset-in-element e node)
        [xpct ypct] (offset-percent offset node)
        x (scale-to xpct xmin xmax)
        y (scale-to ypct (- ymin) (- ymax))] ;; flip y
    (om/transact! segments #(conj % [x y]))))

(defn point-data [[x y]]
  (str x " " (- y)))

(defn input-point-circle
  [[x y]]
  (dom/circle #js {:cx x :cy (- y) :r 0.02 :fill "black"}))

(defn segments-path-data [segments]
  (str "M" (string/join "L" (map point-data segments))))

(defn segments-path [segments color width]
  (dom/path #js {:d (segments-path-data segments), :stroke color, :strokeWidth width, :fill "none"}))


(defn segments-input [segments owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (let [closed-segments (conj segments [1 0])]
        (dom/svg #js {:className "segments"
                      :viewBox "0 -0.5 1 1"
                      :ref "segments"
                      :onClick #(handle-segment-click % segments owner)}
          (segments-path closed-segments "red" 0.01)
          (apply dom/g nil
            (map input-point-circle closed-segments)))))))

(defn segments-debug [segments owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/pre nil
        (map point-debug segments)))))

(defn segments-to-fractal [segments n]
  (alg/fractalizeMe (conj segments [1 0]) n))

(defn fractal-output [app owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (let [fractal-segments (segments-to-fractal (:segments app) (:fractal-depth app))]
        (dom/svg #js {:className "output"
                      :viewBox "0 -0.5 1 1"
                      :ref "output"}
          (segments-path fractal-segments "black" 0.005))))))


(defn handle-clear [app owner]
  (om/update! app :segments [[0 0]]))

(defn handle-depth [app n]
  (.log js/console "Hello" n)
  (om/transact! app :fractal-depth #(max 0 (+ % n))))

(defn main-view [app owner]
  (reify
    om/IRender
    (render [this]
      (let [depth (:fractal-depth app)]
        (dom/div nil
          (dom/h2 nil "Koch Fractals")
          (om/build segments-input (:segments app))
          (dom/p nil
            (dom/button #js {:onClick #(handle-clear app owner)} "Clear Segments"))
          ; (dom/p nil (om/build segments-debug (:segments app)))
          (dom/p nil
            (dom/button #js {:onClick #(handle-depth app (- 1))} "-")
            (dom/span nil (str " Depth: " depth " "))
            (dom/button #js {:onClick #(handle-depth app 1)} "+")
          (dom/p nil
            (om/build fractal-output app))))))))

(om/root main-view app-state
  {:target (. js/document (getElementById "app"))})
