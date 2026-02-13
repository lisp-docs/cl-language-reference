---
title: "integer"
---

# integer

import IntegerSystemClass from './_integer_system-class.md';

<IntegerSystemClass />

## Expanded Reference: integer

### Type Checking

The `integer` type represents whole numbers with arbitrary precision. Every integer is either a `fixnum` or a `bignum`.

```lisp
(typep 42 'integer)     ; → T
(typep -7 'integer)     ; → T
(typep 0 'integer)      ; → T
(typep 3.14 'integer)   ; → NIL
(typep 1/2 'integer)    ; → NIL
(integerp 42)           ; → T
```

### Type Specifier with Range

The `integer` type specifier accepts optional lower and upper bounds, which is useful for declaring constrained integer types.

```lisp
(typep 5 '(integer 0 10))    ; → T
(typep 11 '(integer 0 10))   ; → NIL
(typep -1 '(integer 0 *))    ; → NIL
(typep 100 '(integer 0 *))   ; → T  (non-negative integer)
(typep 0 '(integer 0 0))     ; → T  (only zero)
```

### Type Hierarchy

The `integer` type is a subtype of `rational`, which is a subtype of `real`, which is a subtype of `number`.

```lisp
(subtypep 'integer 'rational) ; → T, T
(subtypep 'integer 'real)     ; → T, T
(subtypep 'integer 'number)   ; → T, T
(subtypep 'fixnum 'integer)   ; → T, T
(subtypep 'bignum 'integer)   ; → T, T
```

### Partitioning into fixnum and bignum

Every integer is exactly one of `fixnum` or `bignum`. The boundary is implementation-dependent.

```lisp
(type-of 42)                       ; → FIXNUM  (or a specific integer type)
(type-of (expt 2 100))             ; → BIGNUM
(typep most-positive-fixnum 'fixnum) ; → T
(typep (1+ most-positive-fixnum) 'bignum) ; → T
```
