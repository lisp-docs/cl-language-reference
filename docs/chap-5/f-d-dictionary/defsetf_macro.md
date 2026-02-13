---
title: "defsetf"
---

# defsetf

import DefsetfMacro from './_defsetf_macro.md';

<DefsetfMacro />

## Expanded Reference: defsetf

### Short Form defsetf

The short form of `defsetf` maps an accessor directly to an updater function. The updater must accept the same arguments as the accessor plus the new value as its last argument.

```lisp
;; Suppose we have a getter and setter for a simple property store
(defvar *store* (make-hash-table))

(defun my-prop (key)
  (gethash key *store*))

(defun set-my-prop (key value)
  (setf (gethash key *store*) value))

;; Short form: just name the updater function
(defsetf my-prop set-my-prop)

(setf (my-prop :color) "blue")
(my-prop :color) ; → "blue"
```

### Long Form defsetf

The long form gives you control over the storing computation. It receives the accessor's arguments as parameters and provides a store variable for the new value.

```lisp
;; A simple 2D grid backed by a flat vector
(defstruct grid data width)

(defun grid-ref (grid x y)
  (aref (grid-data grid) (+ (* y (grid-width grid)) x)))

(defsetf grid-ref (grid x y) (new-val)
  `(setf (aref (grid-data ,grid) (+ (* ,y (grid-width ,grid)) ,x))
         ,new-val))

(let ((g (make-grid :data (make-array 9 :initial-element 0) :width 3)))
  (setf (grid-ref g 1 2) 42)
  (grid-ref g 1 2))
; → 42
```

### Short Form with Built-in Functions

The short form is convenient for wrapping existing setter functions.

```lisp
;; Providing a setf expander for a custom accessor on association lists
(defun assoc-value (key alist)
  (cdr (assoc key alist)))

(defun set-assoc-value (key alist value)
  (let ((pair (assoc key alist)))
    (if pair
        (setf (cdr pair) value)
        (error "Key ~S not found" key))
    value))

(defsetf assoc-value set-assoc-value)

(let ((alist (list (cons :x 1) (cons :y 2))))
  (setf (assoc-value :x alist) 10)
  alist)
; → ((:X . 10) (:Y . 2))
```
