---
title: "array-displacement"
---

# array-displacement

import ArrayDisplacementFunction from './_array-displacement_function.md';

<ArrayDisplacementFunction />

## Expanded Reference: array-displacement

### Basic Usage

`array-displacement` returns two values: the array that the given array is displaced to, and the displacement offset. For non-displaced arrays, it returns `nil` and `0`.

```lisp
;; A non-displaced array
(array-displacement (make-array 5))
=> NIL
=> 0

;; A displaced array
(let* ((base (make-array 10 :initial-element 0))
       (view (make-array 5 :displaced-to base :displaced-index-offset 3)))
  (multiple-value-list (array-displacement view)))
=> (#(0 0 0 0 0 0 0 0 0 0) 3)
```

### Verifying Displacement Relationships

You can use `array-displacement` to check whether an array shares storage with another.

```lisp
(let* ((a (make-array 8 :initial-contents '(0 1 2 3 4 5 6 7)))
       (b (make-array 4 :displaced-to a :displaced-index-offset 2)))
  (multiple-value-bind (target offset) (array-displacement b)
    (list :displaced-to-a (eq target a)
          :offset offset)))
=> (:DISPLACED-TO-A T :OFFSET 2)
```

### Chained Displacement

Displacement is not transitive -- if B is displaced to A, and C is displaced to B, then `array-displacement` on C returns B, not A.

```lisp
(let* ((a (make-array 10 :initial-element 0))
       (b (make-array 6 :displaced-to a :displaced-index-offset 2))
       (c (make-array 3 :displaced-to b :displaced-index-offset 1)))
  (multiple-value-bind (target offset) (array-displacement c)
    (list :target-is-b (eq target b)
          :offset offset)))
=> (:TARGET-IS-B T :OFFSET 1)
```

### Practical Use: Checking If an Array Is a View

```lisp
(defun displaced-array-p (array)
  "Returns true if ARRAY is displaced to another array."
  (not (null (nth-value 0 (array-displacement array)))))

(displaced-array-p (make-array 5))
=> NIL

(displaced-array-p (make-array 3 :displaced-to (make-array 10)))
=> T
```
