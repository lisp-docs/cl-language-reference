---
title: "multiple-value-call"
---

# multiple-value-call

import MultipleValueCallSpecialOperator from './_multiple-value-call_special-operator.md';

<MultipleValueCallSpecialOperator />

## Expanded Reference: multiple-value-call

### Basic usage: passing all values to a function

`multiple-value-call` collects all values from each form and passes them as arguments to the function.

```lisp
(multiple-value-call #'list (values 1 2) (values 3 4))
=> (1 2 3 4)
```

### Collecting all values from floor

With a normal function call, only the primary value is used. `multiple-value-call` passes all returned values.

```lisp
;; Normal call: only primary values are used
(+ (floor 5 3) (floor 19 4))
=> 5

;; multiple-value-call: ALL values are passed
;; (floor 5 3) → 1, 2  and  (floor 19 4) → 4, 3
;; So this becomes (+ 1 2 4 3)
(multiple-value-call #'+ (floor 5 3) (floor 19 4))
=> 10
```

### Mixing single-value and multiple-value forms

Single-value forms contribute exactly one argument, and multiple-value forms contribute all their values.

```lisp
(multiple-value-call #'list 1 (values 2 3) 4 (values 5 6))
=> (1 2 3 4 5 6)

(multiple-value-call #'list (values) (values 'a 'b))
=> (A B)
```

### Equivalent to multiple-value-list with apply

`multiple-value-call` with `#'list` is equivalent to `multiple-value-list`, but `multiple-value-call` is more general because it can combine values from multiple forms.

```lisp
(multiple-value-call #'list (floor 10 3))
=> (3 1)

(multiple-value-list (floor 10 3))
=> (3 1)
```

### Practical example: combining quotient and remainder

```lisp
(multiple-value-call #'format t "~D remainder ~D" (floor 17 5))
.. 3 remainder 2
=> NIL
```
