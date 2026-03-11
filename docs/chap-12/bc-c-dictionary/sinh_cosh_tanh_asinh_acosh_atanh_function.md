---
title: "sinh, cosh, tanh, asinh, acosh, atanh"
---

# sinh, cosh, tanh, asinh, acosh, atanh

import SinhFunction from './_sinh_cosh_tanh_asinh_acosh_atanh_function.md';

<SinhFunction />

## Expanded Reference: sinh, cosh, tanh, asinh, acosh, atanh

### Basic hyperbolic functions

`sinh`, `cosh`, and `tanh` compute the hyperbolic sine, cosine, and tangent respectively.

```lisp
(sinh 0)
=> 0.0
(cosh 0)
=> 1.0
(tanh 0)
=> 0.0

(sinh 1.0)
=> 1.1752012
(cosh 1.0)
=> 1.5430807
(tanh 1.0)
=> 0.7615942
```

### Fundamental hyperbolic identity

The identity `cosh^2(x) - sinh^2(x) = 1` holds for all values.

```lisp
(let ((x 2.5))
  (- (* (cosh x) (cosh x))
     (* (sinh x) (sinh x))))
=> 1.0
```

### Inverse hyperbolic functions

`asinh`, `acosh`, and `atanh` compute the inverse (arc) hyperbolic functions.

```lisp
(asinh 0.0)
=> 0.0
(acosh 1.0)
=> 0.0
(atanh 0.0)
=> 0.0

;; Round-trip: applying a function then its inverse returns the original
(asinh (sinh 1.5))
=> 1.5
(acosh (cosh 2.0))
=> 2.0
(atanh (tanh 0.5))
=> 0.5
```

### Complex number inputs

These functions accept complex arguments and can return complex results.

```lisp
(cosh (complex 0 -1))
=> #C(0.5403023 -0.0)
(sinh (complex 0 1.0))
=> #C(0.0 0.84147096)

;; acosh can return complex for input less than 1
(acosh 0.5)
=> #C(0.0 1.0471976)
```

### Relationship to exponentials

Hyperbolic functions are defined in terms of exponentials: sinh(x) = (e^x - e^(-x))/2, cosh(x) = (e^x + e^(-x))/2.

```lisp
(let ((x 3.0))
  (list (- (sinh x) (/ (- (exp x) (exp (- x))) 2.0))
        (- (cosh x) (/ (+ (exp x) (exp (- x))) 2.0))))
=> (0.0 0.0)
```
