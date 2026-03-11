---
title: "array-dimensions"
---

# array-dimensions

import ArrayDimensionsFunction from './_array-dimensions_function.md';

<ArrayDimensionsFunction />

## Expanded Reference: array-dimensions

### Basic Usage

`array-dimensions` returns a list of the sizes of each dimension of an array.

```lisp
;; 1D array
(array-dimensions (make-array 5))
=> (5)

;; 2D array
(array-dimensions (make-array '(3 4)))
=> (3 4)

;; 3D array
(array-dimensions (make-array '(2 3 4)))
=> (2 3 4)
```

### Zero-Dimensional Arrays

A zero-dimensional array has no dimensions, so the result is an empty list.

```lisp
(array-dimensions (make-array '()))
=> NIL
```

### Fill Pointer Is Ignored

The actual allocated size is returned, not the fill pointer.

```lisp
(array-dimensions (make-array 10 :fill-pointer 3))
=> (10)
```

### Practical Use: Iterating Over Array Dimensions

`array-dimensions` is useful for writing generic array-processing code.

```lisp
;; Compute total number of elements from dimensions
(let ((a (make-array '(3 4 5))))
  (reduce #'* (array-dimensions a)))
=> 60
```
