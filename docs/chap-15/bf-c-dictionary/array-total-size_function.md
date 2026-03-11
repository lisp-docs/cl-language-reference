---
title: "array-total-size"
---

# array-total-size

import ArrayTotalSizeFunction from './_array-total-size_function.md';

<ArrayTotalSizeFunction />

## Expanded Reference: array-total-size

### Basic Usage

`array-total-size` returns the total number of elements in an array, which is the product of all its dimensions.

```lisp
(array-total-size (make-array 5))
=> 5

(array-total-size (make-array '(3 4)))
=> 12

(array-total-size (make-array '(2 3 4)))
=> 24
```

### Edge Cases: Zero and Zero-Dimensional Arrays

An array with any dimension of size 0 has total size 0. A zero-dimensional array (no dimensions) has total size 1 because the product of no numbers is 1.

```lisp
(array-total-size (make-array 0))
=> 0

(array-total-size (make-array '(5 0)))
=> 0

;; Zero-dimensional array: product of zero dimensions = 1
(array-total-size (make-array '()))
=> 1
```

### Fill Pointer Is Ignored

`array-total-size` returns the allocated size, ignoring any fill pointer.

```lisp
(let ((v (make-array 20 :fill-pointer 5)))
  (list (length v)              ; respects fill pointer
        (array-total-size v)))  ; actual allocated size
=> (5 20)
```

### Equivalence to Product of Dimensions

`array-total-size` is equivalent to multiplying the values returned by `array-dimensions`.

```lisp
(let ((a (make-array '(4 5 6))))
  (= (array-total-size a)
     (apply #'* (array-dimensions a))))
=> T
```
