(ns koch.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]
            [koch.algorithm.core :as alg]))

(enable-console-print!)

; (def app-state (atom {:list ["Lion" "Zebra" "Buffalo" "Antelope"]}))

; (om/root
;   (fn [app owner]
;     (om/component (dom/h2 nil (:text app))))
;   app-state
;   {:target (. js/document (getElementById "app"))})


; (defn stripe [text bgc]
; (let [st #js {:backgroundColor bgc}]
;   (dom/li #js {:style st} text)))
;
; (om/root
;   (fn [app owner]
;     (om/component
;       (apply dom/ul #js {:className "animals"}
;         (map stripe (:list app) (cycle ["#ff0" "#fff"])))))
;   app-state
;   {:target (. js/document (getElementById "app0"))})

; (swap! app-state assoc :text "Do it live!")
; (swap! app-state assoc :text "Multiple roots!")

(def app-state
  (atom
    {:input-size [20 10]
     :segments [[0 0] [0.3 0.24] [0.8 -0.3] [1 0]]
     :message "hello"}))

; (defn contact-view [contact owner]
;   (reify
;     om/IRenderState
;     (render-state [this {:keys [delete]}]
;       (dom/li nil
;         (dom/span nil (display-name contact))
;         (dom/button #js {:onClick (fn [e] (put! delete @contact))} "Delete")))))
;
; (defn handle-change [e owner {:keys [text]}]
;   (let [value (.. e -target -value)]
;     (if-not (re-find #"[0-9]" value)
;       (om/set-state! owner :text value)
;       (om/set-state! owner :text text))))
;
; (defn contacts-view [app owner]
;   (reify
;     om/IInitState
;     (init-state [_]
;       {:delete (chan)
;        :text ""})
;     om/IWillMount
;     (will-mount [_]
;       (let [delete (om/get-state owner :delete)]
;         (go (loop []
;               (let [contact (<! delete)]
;                 (om/transact! app :contacts
;                   (fn [xs] (vec (remove #(= contact %) xs))))
;                 (recur))))))
;     om/IRenderState
;     (render-state [this state]
;       (dom/div nil
;         (dom/h2 nil "Contact list")
;         (apply dom/ul nil
;           (om/build-all contact-view (:contacts app)
;             {:init-state state}))
;         (dom/div nil
;           (dom/input
;             #js {:type "text" :ref "new-contact" :value (:text state)
;                  :onChange #(handle-change % owner state)})
;           (dom/button #js {:onClick #(add-contact app owner)} "Add contact"))))))


(defn input-point-circle
  [[x y]]
  (dom/circle #js {:cx x :cy (- y) :r 0.03 :fill "red"}))

(defn point-debug [[x y]] (str "x: " x "\ty: " y "\n"))

(defn handle-segment-click [e segments owner]
  ;; change so it uses the width/height of the component?
  (let [node (om/get-node owner "segments")]
    (.log js/console "Event" e.clientX e.clientY)
    (.log js/console "Test" )
    (om/transact! segments #(conj % [0.3 -0.5]))))



;; renders a series of segments and adds new ones to a provided channel?
;; or should it directly add to its cursor?
;; two-way data binding :) why not?
;; it'll just edit itself
(defn segments-input [segments owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/svg #js {:className "segments"
                    :viewBox "0 -0.5 1 1"
                    :ref "segments"
                    :onClick #(handle-segment-click % segments owner)}
        (apply dom/g nil
          (map input-point-circle segments))))))

(defn segments-debug [segments owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/pre nil
        (map point-debug segments)))))

(defn fractal-output [app owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/svg #js {:className "output"} (input-point-circle [100 300])))))

(defn handle-clear [app owner]
  (om/update! app :segments [[0 0]]))

(defn main-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h2 nil "Koch Fractals")
        (dom/p nil "So beautiful!")
        (om/build segments-input (:segments app))
        (dom/p nil
          (dom/button #js {:onClick #(handle-clear app owner)} "Clear Segments"))
        (dom/p nil (om/build segments-debug (:segments app)))
        (dom/p nil
          (dom/button nil "+")
          (dom/span nil " # Fractals ")
          (dom/button nil "-")
        (dom/p nil
          (om/build fractal-output nil)))))))

(om/root main-view app-state
  {:target (. js/document (getElementById "app"))})
