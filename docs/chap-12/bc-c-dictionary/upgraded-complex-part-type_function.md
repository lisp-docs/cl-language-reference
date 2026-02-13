---
title: "upgraded-complex-part-type"
---

# upgraded-complex-part-type

import UpgradedComplexPartTypeFunction from './_upgraded-complex-part-type_function.md';

<UpgradedComplexPartTypeFunction />

## Expanded Reference: upgraded-complex-part-type

### Basic Usage

The function `upgraded-complex-part-type` returns the type to which the implementation upgrades the parts of a complex number when given a specified part type. This is analogous to `upgraded-array-element-type` for arrays.

```lisp
(upgraded-complex-part-type 'integer)      ; → RATIONAL  (typical)
(upgraded-complex-part-type 'single-float) ; → SINGLE-FLOAT
(upgraded-complex-part-type 'double-float) ; → DOUBLE-FLOAT
(upgraded-complex-part-type 'rational)     ; → RATIONAL  (typical)
```

### Understanding Upgrading

Implementations may not support complex numbers with arbitrary part types. When you create a complex number, the parts may be upgraded (widened) to a type the implementation actually supports.

```lisp
;; The actual part type may be wider than requested
(upgraded-complex-part-type '(integer 0 10))
; → RATIONAL  (or INTEGER, implementation-dependent)

(upgraded-complex-part-type 'bit)
; → RATIONAL  (or INTEGER, implementation-dependent)

(upgraded-complex-part-type 'real)
; → REAL  (or a specific float type, implementation-dependent)
```

### Relationship to Complex Type Specifiers

The upgraded type determines what `(complex <type>)` actually contains. Two different specified types may upgrade to the same actual type.

```lisp
;; These may all upgrade to the same internal type
(upgraded-complex-part-type 'fixnum)   ; → RATIONAL  (typical)
(upgraded-complex-part-type 'integer)  ; → RATIONAL  (typical)
(upgraded-complex-part-type 'rational) ; → RATIONAL  (typical)

;; Creating complex numbers and checking actual types
(type-of (complex 1 2))       ; → (COMPLEX (INTEGER 1 2))  (implementation-dependent)
(type-of (complex 1.0 2.0))   ; → (COMPLEX SINGLE-FLOAT)
(type-of (complex 1.0d0 2.0d0)) ; → (COMPLEX DOUBLE-FLOAT)
```

### Optional Environment Argument

The function accepts an optional environment argument for use in macros, though in most practical usage it is omitted.

```lisp
;; Without environment (most common usage)
(upgraded-complex-part-type 'single-float) ; → SINGLE-FLOAT

;; With nil environment (equivalent to no environment)
(upgraded-complex-part-type 'single-float nil) ; → SINGLE-FLOAT
```
