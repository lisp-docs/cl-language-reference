---
title: "row-major-aref"
---

# row-major-aref

import RowMajorArefAccessor from './_row-major-aref_accessor.md';

<RowMajorArefAccessor />

## Expanded Reference: row-major-aref

### Basic Usage

`row-major-aref` accesses an array element using a single row-major index, treating the array as if it were flattened into one dimension.

```lisp
(let ((m (make-array '(2 3) :initial-contents '((a b c) (d e f)))))
  (list (row-major-aref m 0)    ; element (0,0) = a
        (row-major-aref m 2)    ; element (0,2) = c
        (row-major-aref m 3)    ; element (1,0) = d
        (row-major-aref m 5)))  ; element (1,2) = f
→ (A C D F)
```

### Setting Elements with SETF

`row-major-aref` works with `setf`.

```lisp
(let ((m (make-array '(2 2) :initial-element 0)))
  (setf (row-major-aref m 1) 10)   ; element (0,1)
  (setf (row-major-aref m 2) 20)   ; element (1,0)
  m)
→ #2A((0 10) (20 0))
```

### Iterating Over All Elements Generically

`row-major-aref` combined with `array-total-size` lets you iterate over any array regardless of rank.

```lisp
;; Sum all elements of a 3D array
(let ((a (make-array '(2 2 2) :initial-contents
                     '(((1 2) (3 4)) ((5 6) (7 8)))))
      (total 0))
  (dotimes (i (array-total-size a) total)
    (incf total (row-major-aref a i))))
→ 36
```

### Collecting All Elements Into a List

```lisp
(defun array-to-list (array)
  "Flatten any array into a list of its elements in row-major order."
  (loop for i below (array-total-size array)
        collect (row-major-aref array i)))

(array-to-list (make-array '(2 3) :initial-contents '((a b c) (d e f))))
→ (A B C D E F)
```

### Equivalence to aref

`(row-major-aref array idx)` accesses the same element as `(aref array i0 i1 ...)` where `idx` is `(array-row-major-index array i0 i1 ...)`.

```lisp
(let ((m (make-array '(3 4) :initial-contents
                     '((0 1 2 3) (4 5 6 7) (8 9 10 11)))))
  (= (aref m 2 1)
     (row-major-aref m (array-row-major-index m 2 1))))
→ T
```
