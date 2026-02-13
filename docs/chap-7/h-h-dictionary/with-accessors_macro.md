---
title: "with-accessors"
---

# with-accessors

import WithAccessorsMacro from './_with-accessors_macro.md';

<WithAccessorsMacro />

## Expanded Reference: with-accessors

### Basic Usage

`with-accessors` is similar to `with-slots`, but references go through accessor generic functions instead of `slot-value`. Each entry is of the form `(variable-name accessor-name)`.

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)
   (age  :initarg :age  :accessor person-age)))

(let ((p (make-instance 'person :name "Alice" :age 30)))
  (with-accessors ((n person-name) (a person-age)) p
    (list n a)))
;; => ("Alice" 30)
```

### Modifying Through Accessors

Writes through `with-accessors` call the `setf` accessor, which means `:before` and `:after` methods on the writer are invoked.

```lisp
(let ((p (make-instance 'person :name "Bob" :age 25)))
  (with-accessors ((n person-name) (a person-age)) p
    (setf n "Robert")
    (incf a 5))
  (list (person-name p) (person-age p)))
;; => ("Robert" 30)
```

### Difference from with-slots

The key difference is that `with-accessors` invokes accessor methods (which may have `:before`/`:after` methods), while `with-slots` goes directly through `slot-value`.

```lisp
(defclass tracked ()
  ((value :initarg :value :accessor tracked-value)))

(defmethod (setf tracked-value) :before (new-val (obj tracked))
  (format t "Setting value to ~A~%" new-val))

;; with-accessors triggers the :before method
(let ((obj (make-instance 'tracked :value 0)))
  (with-accessors ((v tracked-value)) obj
    (setf v 42)))
;; >> Setting value to 42
;; => 42

;; with-slots bypasses accessor methods
(let ((obj (make-instance 'tracked :value 0)))
  (with-slots (value) obj
    (setf value 42)))
;; => 42 (no output printed)
```

### Working with Multiple Objects

Like `with-slots`, `with-accessors` forms can be nested to work with multiple objects simultaneously.

```lisp
(defclass point ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)))

(defun swap-points (p1 p2)
  "Swap the coordinates of two points."
  (with-accessors ((x1 point-x) (y1 point-y)) p1
    (with-accessors ((x2 point-x) (y2 point-y)) p2
      (psetf x1 x2 x2 x1
             y1 y2 y2 y1))))

(let ((a (make-instance 'point :x 1 :y 2))
      (b (make-instance 'point :x 3 :y 4)))
  (swap-points a b)
  (list (point-x a) (point-y a) (point-x b) (point-y b)))
;; => (3 4 1 2)
```
