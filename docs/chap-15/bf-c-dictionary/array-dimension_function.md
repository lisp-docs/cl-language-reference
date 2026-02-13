---
title: "array-dimension"
---

# array-dimension

import ArrayDimensionFunction from './_array-dimension_function.md';

<ArrayDimensionFunction />

## Expanded Reference: array-dimension

### Basic Usage

`array-dimension` returns the size of a specific axis (dimension) of an array. The `axis-number` is zero-indexed.

```lisp
;; Dimension of a 1D array (only axis 0)
(array-dimension (make-array 7) 0)
→ 7

;; Dimensions of a 2D array
(let ((m (make-array '(3 5))))
  (list (array-dimension m 0)    ; rows
        (array-dimension m 1)))  ; columns
→ (3 5)
```

### Multi-Dimensional Arrays

For higher-rank arrays, each axis is queried independently.

```lisp
(let ((a (make-array '(2 3 4))))
  (list (array-dimension a 0)
        (array-dimension a 1)
        (array-dimension a 2)))
→ (2 3 4)
```

### Fill Pointer Is Ignored

`array-dimension` returns the actual allocated size, not the fill pointer value.

```lisp
(let ((v (make-array 10 :fill-pointer 3)))
  (list (array-dimension v 0)  ; actual size
        (length v)))           ; fill pointer value
→ (10 3)
```

### Relationship to array-dimensions

`array-dimension` on axis n is equivalent to the nth element of the list returned by `array-dimensions`.

```lisp
(let ((a (make-array '(4 6))))
  (equal (array-dimension a 1)
         (nth 1 (array-dimensions a))))
→ T
```
