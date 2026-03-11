---
title: "minusp, plusp"
---

# minusp, plusp

import MinuspFunction from './_minusp_plusp_function.md';

<MinuspFunction />

## Expanded Reference: minusp, plusp

### Testing for negative and positive numbers

`minusp` returns true if the real number is less than zero. `plusp` returns true if the real number is greater than zero. Neither returns true for zero.

```lisp
(minusp -1)
=> T
(minusp 0)
=> NIL
(minusp 1)
=> NIL

(plusp 1)
=> T
(plusp 0)
=> NIL
(plusp -1)
=> NIL
```

### With floating-point numbers

These predicates work with all real number types, including floats.

```lisp
(plusp 0.001)
=> T
(minusp -0.001)
=> T
(plusp least-positive-single-float)
=> T
(minusp most-negative-double-float)
=> T
```

### Negative zero

Regardless of whether an implementation supports negative zero, `(minusp -0.0)` always returns false.

```lisp
(minusp -0.0)
=> NIL
(plusp -0.0)
=> NIL
```

### With rationals

`minusp` and `plusp` work with ratios as well as integers.

```lisp
(plusp 1/1000000)
=> T
(minusp -1/1000000)
=> T
(plusp 0/5)
=> NIL
```

### Practical use: classifying numbers

These predicates are useful for branching logic based on sign.

```lisp
(defun describe-sign (n)
  (cond ((plusp n) "positive")
        ((minusp n) "negative")
        (t "zero")))

(describe-sign 5)
=> "positive"
(describe-sign -3)
=> "negative"
(describe-sign 0)
=> "zero"
```
