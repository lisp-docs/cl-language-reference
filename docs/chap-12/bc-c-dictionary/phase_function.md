---
title: "phase"
---

# phase

import PhaseFunction from './_phase_function.md';

<PhaseFunction />

## Expanded Reference: phase

### Phase of real numbers

The phase (angle) of a positive real number is zero. The phase of a negative real number is pi.

```lisp
(phase 1)    ; → 0.0
(phase 5.0)  ; → 0.0
(phase 0)    ; → 0.0
(phase -1.0) ; → 3.1415927 (approximately pi)
(phase -5)   ; → 3.1415927
```

### Phase of complex numbers

`phase` returns the angle in radians of the complex number in polar form, ranging from -pi (exclusive) to pi (inclusive).

```lisp
(phase #c(0 1))   ; → 1.5707964 (approximately pi/2)
(phase #c(0 -1))  ; → -1.5707964 (approximately -pi/2)
(phase #c(1 1))   ; → 0.7853982 (approximately pi/4)
(phase #c(-1 0))  ; → 3.1415927 (approximately pi)
```

### Relationship to atan

`phase` is mathematically equivalent to `(atan (imagpart x) (realpart x))`.

```lisp
(let ((z #c(3.0 4.0)))
  (list (phase z)
        (atan (imagpart z) (realpart z))))
; → (0.9272952 0.9272952)
```

### Reconstructing a complex number from abs and phase

A complex number can be reconstructed from its magnitude and phase using `cis`.

```lisp
(let ((z #c(3.0 4.0)))
  (* (abs z) (cis (phase z))))
; → #C(3.0 4.0) (approximately)
```

### Phase with cis

The phase of a complex number created by `cis` returns the original angle (within the principal range).

```lisp
(phase (cis 1.0))  ; → 1.0
(phase (cis -1.0)) ; → -1.0
(phase (cis 30))   ; → -1.4159266 (wrapped into (-pi, pi])
```
