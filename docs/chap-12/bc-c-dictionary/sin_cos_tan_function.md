---
title: "sin, cos, tan"
---

# sin, cos, tan

import SinFunction from './_sin_cos_tan_function.md';

<SinFunction />

## Expanded Reference: sin, cos, tan

### Basic trigonometric functions

`sin`, `cos`, and `tan` take an angle in radians and return the sine, cosine, and tangent respectively.

```lisp
(sin 0)
=> 0.0
(cos 0)
=> 1.0
(tan 0)
=> 0.0
```

### Common angle values

The constant `pi` provides the value of pi for computing standard angles.

```lisp
(sin (/ pi 2))
=> 1.0d0
(cos pi)
=> -1.0d0
(sin pi)
;; => impl-dependent
(tan (/ pi 4))
;; => impl-dependent
```

### Working with degrees

Convert degrees to radians by multiplying by pi/180.

```lisp
(defun deg-to-rad (degrees)
  (* degrees (/ pi 180)))

(sin (deg-to-rad 30))
;; => impl-dependent
(cos (deg-to-rad 60))
;; => impl-dependent
(tan (deg-to-rad 45))
;; => impl-dependent
```

### Trigonometric identity

The Pythagorean identity holds: sin^2(x) + cos^2(x) = 1.

```lisp
(let ((x 1.0))
  (+ (expt (sin x) 2) (expt (cos x) 2)))
=> 0.99999994
```

### Complex arguments

These functions also accept complex number arguments.

```lisp
(sin #c(0 1))
=> #C(0.0 1.1752012)
(cos #c(0 1))
;; => impl-dependent
(tan #c(0 1))
=> #C(0.0 0.7615942)
```
