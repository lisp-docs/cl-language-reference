---
title: "array-total-size-limit"
---

# array-total-size-limit

import ArrayTotalSizeLimitConstantVariable from './_array-total-size-limit_constant-variable.md';

<ArrayTotalSizeLimitConstantVariable />

## Expanded Reference: array-total-size-limit

### Basic Usage

`array-total-size-limit` is a constant that specifies the upper exclusive bound on the total number of elements in an array. The actual value is implementation-dependent but must be at least 1024.

```lisp
;; Check the value (implementation-dependent)
array-total-size-limit
;; => 17592186044416

;; It is always a positive integer
(typep array-total-size-limit '(integer 1024))
=> T
```

### Relationship to Array Creation

The total size of any array (the product of all its dimensions) must be less than `array-total-size-limit`.

```lisp
;; Verify that arrays respect this limit
(< (array-total-size (make-array 1000)) array-total-size-limit)
=> T

(< (array-total-size (make-array '(10 10 10))) array-total-size-limit)
=> T
```

### Checking Before Creating Large Arrays

```lisp
(defun can-create-array-p (dimensions)
  "Check if an array with the given dimensions can be created."
  (< (reduce #'* dimensions) array-total-size-limit))

(can-create-array-p '(100 100 100))
=> T

(can-create-array-p '(1000 1000))
=> T
```
