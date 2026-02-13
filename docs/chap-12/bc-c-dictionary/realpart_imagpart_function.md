---
title: "realpart, imagpart"
---

# realpart, imagpart

import RealpartFunction from './_realpart_imagpart_function.md';

<RealpartFunction />

## Expanded Reference: realpart, imagpart

### Extracting parts of complex numbers

`realpart` and `imagpart` return the real and imaginary parts of a complex number.

```lisp
(realpart #c(3 4))   ; → 3
(imagpart #c(3 4))   ; → 4

(realpart #c(23 41)) ; → 23
(imagpart #c(23 41.0)) ; → 41.0
```

### Behavior with real numbers

For a real number, `realpart` returns the number itself and `imagpart` returns zero of the same type.

```lisp
(realpart 5)     ; → 5
(imagpart 5)     ; → 0

(realpart 3.14)  ; → 3.14
(imagpart 3.14)  ; → 0.0

(realpart 2/3)   ; → 2/3
(imagpart 2/3)   ; → 0
```

### Type contagion with float components

When a complex has a float component, `realpart` returns a float even if originally specified as an integer.

```lisp
(realpart #c(23 41.0)) ; → 23.0 (coerced to float)
(imagpart #c(23 41.0)) ; → 41.0
```

### Using realpart and imagpart for complex arithmetic

You can decompose complex numbers for custom operations.

```lisp
;; Manually compute the magnitude of a complex number
(let ((z #c(3.0 4.0)))
  (sqrt (+ (* (realpart z) (realpart z))
            (* (imagpart z) (imagpart z)))))
; → 5.0

;; Swap real and imaginary parts
(let ((z #c(5 7)))
  (complex (imagpart z) (realpart z)))
; → #C(7 5)
```

### Relationship with complex constructor

`realpart` and `imagpart` are the inverse of `complex`.

```lisp
(let ((z #c(10 20)))
  (equal z (complex (realpart z) (imagpart z))))
; → T
```
