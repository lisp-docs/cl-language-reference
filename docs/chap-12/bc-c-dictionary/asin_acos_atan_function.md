---
title: "asin, acos, atan"
---

# asin, acos, atan

import AsinFunction from './_asin_acos_atan_function.md';

<AsinFunction />

## Expanded Reference: asin, acos, atan

### Basic inverse trigonometric functions

`asin`, `acos`, and `atan` compute the arc sine, arc cosine, and arc tangent in radians.

```lisp
(asin 0)   ; → 0.0
(asin 1.0) ; → 1.5707964 (approximately pi/2)

(acos 1.0) ; → 0.0
(acos 0.0) ; → 1.5707964 (approximately pi/2)

(atan 0.0) ; → 0.0
(atan 1.0) ; → 0.7853982 (approximately pi/4)
```

### Two-argument atan for quadrant-aware arc tangent

When called with two arguments, `atan` computes the arc tangent of y/x, using the signs of both arguments to determine the correct quadrant. This is equivalent to the `atan2` function in other languages.

```lisp
(atan 1.0 1.0)   ; → 0.7853982 (pi/4, first quadrant)
(atan 1.0 -1.0)  ; → 2.3561945 (3*pi/4, second quadrant)
(atan -1.0 -1.0) ; → -2.3561945 (-3*pi/4, third quadrant)
(atan -1.0 1.0)  ; → -0.7853982 (-pi/4, fourth quadrant)
```

### Computing angles from trigonometric ratios

Two-argument `atan` is useful for computing angles from coordinate pairs.

```lisp
;; Angle of a 30-60-90 triangle
(/ (atan 1 (sqrt 3)) 6) ; → 0.087266 (approximately pi/36)

;; Full circle check: atan of opposite sides
(atan 0.0 1.0)  ; → 0.0 (pointing right)
(atan 0.0 -1.0) ; → 3.1415927 (approximately pi, pointing left)
```

### Complex number inputs

`asin` and `acos` can return complex numbers even for real inputs when the absolute value exceeds 1.

```lisp
(asin 2.0)       ; → #C(1.5707964 -1.3169579) (complex result)
(acos 2.0)       ; → #C(0.0 1.3169579) (complex result)
(acos #c(0 1))   ; → #C(1.5707963267948966 -0.8813735870195432)
(atan #c(0 2))   ; → #C(-1.5707964 0.54930615)
```

### Practical use: converting between radians and degrees

```lisp
(defun radians-to-degrees (r)
  (* r (/ 180.0 pi)))

(radians-to-degrees (asin 0.5))  ; → 30.0 (approximately)
(radians-to-degrees (acos 0.5))  ; → 60.0 (approximately)
(radians-to-degrees (atan 1.0))  ; → 45.0 (approximately)
```
