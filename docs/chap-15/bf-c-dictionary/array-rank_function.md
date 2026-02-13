---
title: "array-rank"
---

# array-rank

import ArrayRankFunction from './_array-rank_function.md';

<ArrayRankFunction />

## Expanded Reference: array-rank

### Basic Usage

`array-rank` returns the number of dimensions of an array.

```lisp
;; A vector (1D) has rank 1
(array-rank (make-array 5))
→ 1

;; A 2D array has rank 2
(array-rank (make-array '(3 4)))
→ 2

;; A 3D array has rank 3
(array-rank (make-array '(2 3 4)))
→ 3
```

### Zero-Dimensional Arrays

A zero-dimensional array has rank 0.

```lisp
(array-rank (make-array '()))
→ 0

(array-rank (make-array nil :initial-element 42))
→ 0
```

### Strings and Bit Vectors

Strings and bit vectors are specialized one-dimensional arrays, so they have rank 1.

```lisp
(array-rank "hello")
→ 1

(array-rank #*10110)
→ 1
```

### Practical Use: Dispatching on Array Shape

`array-rank` is useful for writing functions that handle arrays of different dimensionalities.

```lisp
(defun describe-array-shape (a)
  (case (array-rank a)
    (0 "scalar (0D array)")
    (1 "vector (1D array)")
    (2 "matrix (2D array)")
    (otherwise (format nil "~DD array" (array-rank a)))))

(describe-array-shape (make-array '()))
→ "scalar (0D array)"

(describe-array-shape (make-array 5))
→ "vector (1D array)"

(describe-array-shape (make-array '(3 3)))
→ "matrix (2D array)"

(describe-array-shape (make-array '(2 3 4)))
→ "3D array"
```
