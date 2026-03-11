---
title: "number"
---

# number

import NumberSystemClass from './_number_system-class.md';

<NumberSystemClass />

## Expanded Reference: number

### Type Checking

The `number` type is the root of the numeric type hierarchy. It encompasses all numeric types: integers, ratios, floats, and complex numbers.

```lisp
(typep 42 'number)
=> T
(typep 3.14 'number)
=> T
(typep 2/3 'number)
=> T
(typep #C(1 2) 'number)
=> T
(typep "42" 'number)
=> NIL
(numberp 42)
=> T
(numberp nil)
=> NIL
```

### Type Hierarchy

The `number` type has two direct subtypes: `real` and `complex`. The `real` type further divides into `rational` and `float`.

```lisp
(subtypep 'real 'number)
=> T
=> T
(subtypep 'complex 'number)
=> T
=> T
(subtypep 'integer 'number)
=> T
=> T
(subtypep 'float 'number)
=> T
=> T
(subtypep 'ratio 'number)
=> T
=> T
(subtypep 'rational 'number)
=> T
=> T
```

### Numeric Type Tree

The complete numeric type hierarchy shows how all numeric types relate.

```lisp
;; number
;;   real
;;     rational
;;       integer
;;         fixnum
;;         bignum
;;       ratio
;;     float
;;       short-float
;;       single-float
;;       double-float
;;       long-float
;;   complex

(typep 42 'real)
=> T
(typep 42 'rational)
=> T
(typep 42 'integer)
=> T
(typep 1/3 'rational)
=> T
(typep 1.0 'real)
=> T
(typep #C(1 2) 'real)
=> NIL
```

### Using numberp for Generic Numeric Checks

The `numberp` predicate is useful for validating inputs in functions that accept any numeric type.

```lisp
(defun numeric-description (x)
  (cond
    ((not (numberp x)) "not a number")
    ((complexp x)  "complex number")
    ((floatp x)    "floating-point number")
    ((rationalp x) "rational number")))

(numeric-description 42)
=> "rational number"
(numeric-description 3.14)
=> "floating-point number"
(numeric-description #C(1 2))
=> "complex number"
(numeric-description "hello")
=> "not a number"
```
