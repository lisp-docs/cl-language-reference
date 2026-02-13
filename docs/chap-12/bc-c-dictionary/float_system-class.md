---
title: "float"
---

# float

import FloatSystemClass from './_float_system-class.md';

<FloatSystemClass />

## Expanded Reference: float

### Type Checking

The `float` type is the supertype of all floating-point number types. Every float is also a `real` and a `number`.

```lisp
(typep 1.0 'float)     ; → T
(typep 1.0d0 'float)   ; → T  (double-float is a subtype of float)
(typep 1 'float)       ; → NIL (integers are not floats)
(typep 1/3 'float)     ; → NIL (ratios are not floats)
(floatp 3.14)          ; → T
```

### Float Subtypes

The standard defines four float subtypes: `short-float`, `single-float`, `double-float`, and `long-float`. Implementations may merge some of these types.

```lisp
(subtypep 'short-float 'float)  ; → T, T
(subtypep 'single-float 'float) ; → T, T
(subtypep 'double-float 'float) ; → T, T
(subtypep 'long-float 'float)   ; → T, T

(type-of 1.0)   ; → SINGLE-FLOAT  (typical)
(type-of 1.0d0) ; → DOUBLE-FLOAT
```

### Type Specifier with Range

The `float` type specifier accepts optional lower and upper bounds.

```lisp
(typep 0.5 '(float 0.0 1.0))   ; → T
(typep 1.5 '(float 0.0 1.0))   ; → NIL
(typep -0.1 '(float 0.0 *))    ; → NIL
(typep 3.14 '(float * *))      ; → T  (any float)
```

### Converting to Float

The `float` function converts a real number to a floating-point number, optionally matching the type of a prototype float.

```lisp
(float 1)       ; → 1.0
(float 1/3)     ; → 0.33333334
(float 1 1.0d0) ; → 1.0d0  (match double-float prototype)
(float 1/3 1.0d0) ; → 0.3333333333333333d0
```
