---
title: "short-float-epsilon, short-float-negative-epsilon, single-float-epsilon, single-float-negative-epsilon, double-float-epsilon, double-float-negative-epsilon, long-float-epsilon, long-float-negative-epsilon"
---

# short-float-epsilon, short-float-negative-epsilon, single-float-epsilon, single-float-negative-epsilon, double-float-epsilon, double-float-negative-epsilon, long-float-epsilon, long-float-negative-epsilon

import ShortFloatEpsilonConstantVariable from './_short-float-epsilon_short-float-negative-epsilon_single-float-epsilon_single-float-negative-epsilon_double-float-epsilon_double-float-negative-epsilon_long-float-epsilon_long-float-negative-epsilon_con-stant-variable.md';

<ShortFloatEpsilonConstantVariable />

## Expanded Reference: short-float-epsilon, short-float-negative-epsilon, single-float-epsilon, single-float-negative-epsilon, double-float-epsilon, double-float-negative-epsilon, long-float-epsilon, long-float-negative-epsilon

### Examining Epsilon Values

Each epsilon constant is the smallest positive float such that `(not (= 1.0 (+ 1.0 epsilon)))` is true for that float type. The negative epsilon variants work for subtraction.

```lisp
single-float-epsilon
=> 5.960465e-8
single-float-negative-epsilon
=> 2.9802326e-8

double-float-epsilon
=> 1.1102230246251568d-16
double-float-negative-epsilon
=> 5.551115123125784d-17
```

### Verifying the Definition

The epsilon is the smallest value where adding it to 1.0 produces a distinguishable result.

```lisp
;; Epsilon is distinguishable from zero when added to 1.0
(/= 1.0 (+ 1.0 single-float-epsilon))
=> T
(= 1.0 (+ 1.0 (/ single-float-epsilon 2.0)))
=> T

(/= 1.0d0 (+ 1.0d0 double-float-epsilon))
=> T
(= 1.0d0 (+ 1.0d0 (/ double-float-epsilon 2.0d0)))
=> T
```

### Practical Use: Approximate Float Comparison

Epsilon values are essential for writing correct floating-point comparison functions, since exact equality with `=` is unreliable for computed floats.

```lisp
(defun float-nearly-equal (a b &optional (tolerance single-float-epsilon))
  "Compare two floats for approximate equality."
  (let ((diff (abs (- a b)))
        (scale (max (abs a) (abs b) 1.0)))
    (<= diff (* scale tolerance))))

(float-nearly-equal 1.0 (+ 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1))
;; => impl-dependent

(= 1.0 (+ 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1))
=> NIL
```

### Relationship Between Float Types

Double-float epsilon is much smaller than single-float epsilon, reflecting greater precision. On many implementations, short-float and single-float share the same epsilon, as do double-float and long-float.

```lisp
;; Comparing precision across types
(< double-float-epsilon single-float-epsilon)
=> T

;; On many implementations:
;; short-float-epsilon = single-float-epsilon
;; long-float-epsilon = double-float-epsilon
```
