---
title: "reduce"
---

# reduce

import ReduceFunction from './_reduce_function.md';

<ReduceFunction />

## Expanded Reference: reduce

### Basic reduction: summing a list

`reduce` combines the elements of a sequence using a binary function, accumulating from left to right by default.

```lisp
(reduce #'+ '(1 2 3 4 5)) ; → 15
(reduce #'* '(1 2 3 4 5)) ; → 120
```

### Using :initial-value

An initial value is logically placed before the sequence and included in the reduction. This is especially useful for empty sequences.

```lisp
(reduce #'+ '() :initial-value 0) ; → 0
(reduce #'+ '(1 2 3) :initial-value 10) ; → 16
```

### Left-associative vs. right-associative with :from-end

By default, `reduce` is left-associative. With `:from-end t`, it becomes right-associative.

```lisp
(reduce #'list '(1 2 3 4))
; → (((1 2) 3) 4)

(reduce #'list '(1 2 3 4) :from-end t)
; → (1 (2 (3 4)))
```

### Using :key to extract values

The `:key` function is applied to each element before it is passed to the reducing function.

```lisp
(reduce #'+ '((1 a) (2 b) (3 c)) :key #'first)
; → 6
```

### Reducing a subsequence with :start and :end

You can reduce only a portion of the sequence.

```lisp
(reduce #'+ #(10 20 30 40 50) :start 1 :end 4)
; → 90
```

### Practical example: finding the maximum

`reduce` can be used to compute the maximum value in a sequence.

```lisp
(reduce #'max '(3 1 4 1 5 9 2 6))
; → 9
```
