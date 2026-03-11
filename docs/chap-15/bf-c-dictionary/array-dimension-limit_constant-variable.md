---
title: "array-dimension-limit"
---

# array-dimension-limit

import ArrayDimensionLimitConstantVariable from './_array-dimension-limit_constant-variable.md';

<ArrayDimensionLimitConstantVariable />

## Expanded Reference: array-dimension-limit

### Basic Usage

`array-dimension-limit` is a constant that specifies the upper exclusive bound on each individual dimension of an array. The actual value is implementation-dependent but must be at least 1024.

```lisp
;; Check the value (implementation-dependent)
array-dimension-limit
;; => 17592186044416

;; It is always at least 1024
(>= array-dimension-limit 1024)
=> T
```

### Each Dimension Must Be Less Than This Limit

This constrains the size of any single dimension. Even if `array-total-size-limit` would allow a larger array, no single dimension can reach `array-dimension-limit`.

```lisp
;; Each dimension is independently bounded
(< 100 array-dimension-limit)
=> T

(< 1000 array-dimension-limit)
=> T
```

### Checking Before Creating Arrays

```lisp
(defun valid-dimensions-p (dimensions)
  "Check that all array dimensions are within the allowed limit."
  (every (lambda (d) (< d array-dimension-limit)) dimensions))

(valid-dimensions-p '(100 200 300))
=> T
```

### Relationship to Other Limits

The three array limit constants work together: `array-rank-limit` limits the number of dimensions, `array-dimension-limit` limits each individual dimension's size, and `array-total-size-limit` limits the product of all dimensions.

```lisp
(list :rank-limit array-rank-limit
      :dim-limit array-dimension-limit
      :total-size-limit array-total-size-limit)
=> (:RANK-LIMIT 129 :DIM-LIMIT 17592186044416 :TOTAL-SIZE-LIMIT 17592186044416)
```
