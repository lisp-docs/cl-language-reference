---
title: "cis"
---

# cis

import CisFunction from './_cis_function.md';

<CisFunction />

## Expanded Reference: cis

### Basic usage

`cis` returns e^(i*radians), a complex number whose real part is `cos(radians)` and whose imaginary part is `sin(radians)`.

```lisp
(cis 0)         ; → #C(1.0 0.0)
(cis (/ pi 2))  ; → #C(0.0 1.0) (approximately)
(cis pi)        ; → #C(-1.0 0.0) (approximately)
```

### Euler's formula

`cis` directly implements Euler's formula: e^(i*theta) = cos(theta) + i*sin(theta).

```lisp
;; Verify that cis matches cos + i*sin
(let ((theta 1.0))
  (list (cis theta)
        (complex (cos theta) (sin theta))))
; → (#C(0.5403023 0.84147096) #C(0.5403023 0.84147096))
```

### Unit circle representation

`cis` always returns a complex number on the unit circle (magnitude 1).

```lisp
(abs (cis 0.0))   ; → 1.0
(abs (cis 1.0))   ; → 1.0
(abs (cis 42.0))  ; → 1.0 (approximately)
```

### Constructing complex numbers in polar form

Use `cis` together with multiplication to create complex numbers from polar coordinates (magnitude and angle).

```lisp
;; Complex number with magnitude 5 and angle pi/4
(* 5 (cis (/ pi 4)))
; → #C(3.5355339 3.5355339) (approximately 5/sqrt(2) + 5i/sqrt(2))

;; Complex number with magnitude 2 and angle pi/3
(* 2 (cis (/ pi 3)))
; → #C(1.0 1.7320508) (approximately 1 + i*sqrt(3))
```

### Relationship to phase and abs

For any complex number z, `(* (abs z) (cis (phase z)))` reconstructs z.

```lisp
(let ((z #c(3.0 4.0)))
  (* (abs z) (cis (phase z))))
; → #C(3.0 4.0) (approximately)
```
