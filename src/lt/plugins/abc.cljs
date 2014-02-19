(ns lt.plugins.abc

  (:require-macros [lt.plugins.abc :refer [my-double-m defn-doubled]]))

(defn my-double-f [x] (* x 2))
(my-double-f 3)

(my-double-m 3)

(defn-doubled my-quad [x] (* x 2))

(my-quad 3)
