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
(sin 0) ; → 0.0
(cos 0) ; → 1.0
(tan 0) ; → 0.0
```

### Common angle values

The constant `pi` provides the value of pi for computing standard angles.

```lisp
(sin (/ pi 2)) ; → 1.0d0 (approximately)
(cos pi) ; → -1.0d0 (approximately)
(sin pi) ; → 0.0d0 (approximately, may be a very small number)
(tan (/ pi 4)) ; → 1.0d0 (approximately)
```

### Working with degrees

Convert degrees to radians by multiplying by pi/180.

```lisp
(defun deg-to-rad (degrees)
  (* degrees (/ pi 180)))

(sin (deg-to-rad 30)) ; → 0.5d0 (approximately)
(cos (deg-to-rad 60)) ; → 0.5d0 (approximately)
(tan (deg-to-rad 45)) ; → 1.0d0 (approximately)
```

### Trigonometric identity

The Pythagorean identity holds: sin^2(x) + cos^2(x) = 1.

```lisp
(let ((x 1.0))
  (+ (expt (sin x) 2) (expt (cos x) 2)))
; → 1.0 (approximately)
```

### Complex arguments

These functions also accept complex number arguments.

```lisp
(sin #c(0 1)) ; → #C(0.0 1.1752012) (approximately)
(cos #c(0 1)) ; → 1.5430806 (approximately)
(tan #c(0 1)) ; → #C(0.0 0.7615942) (approximately)
```
