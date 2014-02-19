(ns lt.plugins.abc)

(defmacro my-double-m [x] `(* ~x 2))

(defmacro defn-doubled [name vars body]
  `(defn ~name ~vars (* 2 ~body)))
