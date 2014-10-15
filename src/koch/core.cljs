(ns koch.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

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
     :segments [[0 0] [10 2] [-3 14] [100 100] [80 80]]
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
  (dom/circle #js {:cx x :cy y :r 4 :stroke "black" :strokeWidth 1 :fill "red"}))

(defn segments-input [segments owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/svg #js {:className "segments"}
        (apply dom/g nil 
          (map input-point-circle segments))))))

(defn fractal-output [app owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/svg #js {:className "output"} (input-point-circle [100 300])))))

(defn main-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h2 nil "Koch Fractals")
        (dom/p nil "So beautiful!")
        (om/build segments-input (:segments app))
        (dom/p nil (dom/button nil "Clear Segments"))
        (dom/p nil
          (dom/button nil "+")
          (dom/span nil " # Fractals ")
          (dom/button nil "-")
        (dom/p nil
          (om/build fractal-output nil)))))))

(om/root main-view app-state
  {:target (. js/document (getElementById "app"))})
