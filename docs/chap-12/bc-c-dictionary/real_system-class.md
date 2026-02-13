---
title: "real"
---

# real

import RealSystemClass from './_real_system-class.md';

<RealSystemClass />

## Expanded Reference: real

### Type Checking

The `real` type includes all numbers that can be placed on the number line: integers, ratios, and floats. Complex numbers are not real.

```lisp
(typep 42 'real)       ; → T
(typep 3.14 'real)     ; → T
(typep 2/3 'real)      ; → T
(typep #C(1 2) 'real)  ; → NIL
(realp 42)             ; → T
(realp #C(1 2))        ; → NIL
```

### Type Hierarchy

The `real` type has two subtypes: `rational` and `float`. It is itself a subtype of `number`.

```lisp
(subtypep 'rational 'real) ; → T, T
(subtypep 'float 'real)    ; → T, T
(subtypep 'integer 'real)  ; → T, T
(subtypep 'real 'number)   ; → T, T
(subtypep 'complex 'real)  ; → NIL, T  (disjoint)
```

### Type Specifier with Range

The `real` type specifier accepts optional lower and upper bounds, covering all real subtypes.

```lisp
(typep 0.5 '(real 0 1))    ; → T
(typep 1/2 '(real 0 1))    ; → T
(typep 1 '(real 0 1))      ; → T
(typep 1.5 '(real 0 1))    ; → NIL
(typep -1 '(real 0 *))     ; → NIL
```

### Ordering Operations

Real numbers support the ordering operations `<`, `>`, `<=`, `>=`, which are not available for complex numbers.

```lisp
(< 1 1.5 2/1 3)      ; → T  (mixed types, all ordered)
(min 1 0.5 3/2)       ; → 0.5
(max 1 0.5 3/2)       ; → 3/2

;; Real numbers can be compared across types
(<= 0 1/3 0.5 1)     ; → T
```
