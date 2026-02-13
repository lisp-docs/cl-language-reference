---
title: "array-row-major-index"
---

# array-row-major-index

import ArrayRowMajorIndexFunction from './_array-row-major-index_function.md';

<ArrayRowMajorIndexFunction />

## Expanded Reference: array-row-major-index

### Basic Usage

`array-row-major-index` converts multi-dimensional subscripts into a single row-major index. This is the position the element would occupy if the array were flattened into a one-dimensional sequence in row-major order.

```lisp
;; For a 1D array, the row-major index equals the subscript
(array-row-major-index (make-array 5) 3)
→ 3

;; For a 3x4 array: index = row * num_cols + col
(array-row-major-index (make-array '(3 4)) 1 2)
→ 6  ; 1 * 4 + 2

(array-row-major-index (make-array '(3 4)) 2 3)
→ 11  ; 2 * 4 + 3
```

### 3D Arrays

For a 3D array with dimensions (d0, d1, d2), the row-major index of element (i, j, k) is `i * d1 * d2 + j * d2 + k`.

```lisp
(array-row-major-index (make-array '(2 3 4)) 1 2 3)
→ 23  ; 1*12 + 2*4 + 3

(array-row-major-index (make-array '(2 3 4)) 0 0 0)
→ 0
```

### Use with row-major-aref

`array-row-major-index` and `row-major-aref` work together to access elements by their flattened position.

```lisp
(let ((m (make-array '(2 3) :initial-contents '((a b c) (d e f)))))
  (let ((idx (array-row-major-index m 1 1)))
    (list idx (row-major-aref m idx))))
→ (4 E)
```

### Iterating Over All Elements

Combined with `array-total-size` and `row-major-aref`, this provides a way to iterate over all elements of any array regardless of its rank.

```lisp
(let ((m (make-array '(2 3) :initial-contents '((1 2 3) (4 5 6))))
      (sum 0))
  (dotimes (i (array-total-size m) sum)
    (incf sum (row-major-aref m i))))
→ 21
```
