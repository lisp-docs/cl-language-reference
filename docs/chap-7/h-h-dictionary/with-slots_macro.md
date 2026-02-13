---
title: "with-slots"
---

# with-slots

import WithSlotsMacro from './_with-slots_macro.md';

<WithSlotsMacro />

## Expanded Reference: with-slots

### Basic Slot Access

`with-slots` establishes a lexical environment where slot names can be used as if they were variables. Reads and writes go through `slot-value`.

```lisp
(defclass point ()
  ((x :initarg :x :initform 0)
   (y :initarg :y :initform 0)))

(let ((p (make-instance 'point :x 3 :y 4)))
  (with-slots (x y) p
    (list x y)))
;; => (3 4)
```

### Modifying Slots

Both `setf` and `setq` can be used within `with-slots` to modify slot values.

```lisp
(let ((p (make-instance 'point :x 0 :y 0)))
  (with-slots (x y) p
    (setf x 10)
    (setq y 20))
  (list (slot-value p 'x) (slot-value p 'y)))
;; => (10 20)
```

### Renaming Slots to Local Variables

When a slot name would conflict with another variable, or for clarity, you can rename it using the `(variable-name slot-name)` form.

```lisp
(let ((p1 (make-instance 'point :x 1 :y 2))
      (p2 (make-instance 'point :x 3 :y 4)))
  (with-slots ((x1 x) (y1 y)) p1
    (with-slots ((x2 x) (y2 y)) p2
      ;; Euclidean distance
      (sqrt (+ (expt (- x2 x1) 2)
               (expt (- y2 y1) 2))))))
;; => 2.828427
```

### Computing Derived Values

`with-slots` is convenient for formulas that reference multiple slots of the same object.

```lisp
(defclass rectangle ()
  ((width  :initarg :width  :initform 0)
   (height :initarg :height :initform 0)))

(defgeneric area (shape))
(defgeneric perimeter (shape))

(defmethod area ((r rectangle))
  (with-slots (width height) r
    (* width height)))

(defmethod perimeter ((r rectangle))
  (with-slots (width height) r
    (* 2 (+ width height))))

(let ((r (make-instance 'rectangle :width 5 :height 3)))
  (list (area r) (perimeter r)))
;; => (15 16)
```

### Swapping Slot Values

Because the slot references are genuine places, you can use `rotatef` and `psetf` within `with-slots`.

```lisp
(let ((p (make-instance 'point :x 10 :y 20)))
  (with-slots (x y) p
    (rotatef x y))
  (list (slot-value p 'x) (slot-value p 'y)))
;; => (20 10)
```
