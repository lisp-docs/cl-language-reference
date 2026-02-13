---
title: "aref"
---

# aref

import ArefAccessor from './_aref_accessor.md';

<ArefAccessor />

## Expanded Reference: aref

### Basic Element Access

`aref` accesses elements of any array by providing the appropriate subscripts. For a one-dimensional array, one subscript is needed; for a 2D array, two subscripts (row and column), and so on.

```lisp
;; Access elements of a 1D array (vector)
(let ((v (make-array 4 :initial-contents '(a b c d))))
  (list (aref v 0) (aref v 2) (aref v 3)))
→ (A C D)

;; Access elements of a 2D array
(let ((m (make-array '(2 3) :initial-contents '((1 2 3) (4 5 6)))))
  (list (aref m 0 0) (aref m 0 2) (aref m 1 1)))
→ (1 3 5)
```

### Setting Elements with SETF

`aref` is an accessor, so it works with `setf` to modify array elements in place.

```lisp
(let ((v (make-array 3 :initial-element 0)))
  (setf (aref v 0) 'first)
  (setf (aref v 1) 'second)
  (setf (aref v 2) 'third)
  v)
→ #(FIRST SECOND THIRD)

;; Modify a 2D array
(let ((m (make-array '(2 2) :initial-element 0)))
  (setf (aref m 0 1) 10)
  (setf (aref m 1 0) 20)
  m)
→ #2A((0 10) (20 0))
```

### Zero-Dimensional Arrays

A zero-dimensional array holds a single element. `aref` is called with no subscripts to access it.

```lisp
(let ((a (make-array '() :initial-element 42)))
  (aref a))
→ 42

(let ((a (make-array '() :initial-element nil)))
  (setf (aref a) :updated)
  (aref a))
→ :UPDATED
```

### Using APPLY with AREF

When subscripts are stored in a list, use `apply` to pass them to `aref`.

```lisp
(let ((m (make-array '(3 3) :initial-contents
                     '((1 2 3) (4 5 6) (7 8 9)))))
  (let ((indices '(2 1)))
    (apply #'aref m indices)))
→ 8
```

### AREF Ignores Fill Pointers

Unlike `length` and sequence functions, `aref` can access any element regardless of the fill pointer.

```lisp
(let ((v (make-array 5 :fill-pointer 2 :initial-contents '(a b c d e))))
  (list (length v)    ; respects fill pointer
        (aref v 0)    ; within fill pointer
        (aref v 4)))  ; beyond fill pointer -- still accessible
→ (2 A E)
```
