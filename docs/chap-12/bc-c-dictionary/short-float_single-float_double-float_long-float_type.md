---
title: "short-float, single-float, double-float, long-float"
---

# short-float, single-float, double-float, long-float

import ShortFloatType from './_short-float_single-float_double-float_long-float_type.md';

<ShortFloatType />

## Expanded Reference: short-float, single-float, double-float, long-float

### Type Checking

Common Lisp defines four float subtypes. Each is a subtype of `float`. Implementations may merge adjacent types (e.g., short-float with single-float, or double-float with long-float).

```lisp
(typep 1.0 'single-float)
=> T
(typep 1.0d0 'double-float)
=> T
(typep 1.0 'float)
=> T
(typep 1.0d0 'float)
=> T
```

### Determining Float Type with type-of

The `type-of` function reveals the specific float subtype of a value.

```lisp
(type-of 1.0)
=> SINGLE-FLOAT
(type-of 1.0d0)
=> DOUBLE-FLOAT
(type-of 1.0s0)
=> SINGLE-FLOAT
(type-of 1.0l0)
=> DOUBLE-FLOAT
```

### Reader Syntax for Float Types

Each float type has a corresponding exponent marker in the reader syntax.

```lisp
;; s or f → short-float or single-float
1.0s0  ; short-float (often same as single-float)
1.0f0  ; single-float

;; d → double-float
1.0d0  ; double-float

;; l → long-float (often same as double-float)
1.0l0  ; long-float

;; e → default float type (*read-default-float-format*)
1.0e0  ; single-float by default
```

### Type Specifiers with Ranges

Each float subtype can be used as a type specifier with optional bounds.

```lisp
(typep 0.5 '(single-float 0.0 1.0))
=> T
(typep 1.5 '(single-float 0.0 1.0))
=> NIL
(typep 0.5d0 '(double-float 0.0d0 1.0d0))
=> T
```

### Subtype Relationships

All four float types are subtypes of `float`, which is a subtype of `real`.

```lisp
(subtypep 'short-float 'float)
=> T
=> T
(subtypep 'single-float 'float)
=> T
=> T
(subtypep 'double-float 'float)
=> T
=> T
(subtypep 'long-float 'float)
=> T
=> T

;; On many implementations, some types are identical
(subtypep 'short-float 'single-float)
=> T
=> T
(subtypep 'long-float 'double-float)
=> T
=> T
```
