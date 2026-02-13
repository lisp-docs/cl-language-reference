---
title: "bignum"
---

# bignum

import BignumType from './_bignum_type.md';

<BignumType />

## Expanded Reference: bignum

### Type Checking

A `bignum` is an integer too large to be represented as a `fixnum`. The type `bignum` is equivalent to `(and integer (not fixnum))`.

```lisp
(typep 1 'bignum) ; → NIL  (small integers are fixnums)
(typep most-positive-fixnum 'bignum) ; → NIL
(typep (1+ most-positive-fixnum) 'bignum) ; → T
(typep (1- most-negative-fixnum) 'bignum) ; → T
```

### Relationship to fixnum and integer

Every integer is either a `fixnum` or a `bignum`. These two types are an exhaustive partition of the `integer` type.

```lisp
(subtypep 'bignum 'integer) ; → T, T
(type-of (1+ most-positive-fixnum)) ; → BIGNUM
(type-of (expt 2 100)) ; → BIGNUM
(integerp (expt 2 100)) ; → T
```

### Arbitrary Precision

Common Lisp bignums provide arbitrary precision arithmetic. There is no upper bound on the size of a bignum, limited only by available memory.

```lisp
(expt 2 128)
; → 340282366920938463463374607431768211456

(* most-positive-fixnum most-positive-fixnum)
; → <a very large bignum, implementation-dependent>

(typep (factorial 100) 'bignum) ; → T  (assuming a factorial function)
```

### Performance Note

Bignum arithmetic is typically slower than fixnum arithmetic because fixnums can use native machine instructions while bignums require multi-word operations. Keeping values within fixnum range when possible improves performance.

```lisp
;; Checking if a value is a fixnum for performance-sensitive code
(typep 42 'fixnum)  ; → T  (fast arithmetic)
(typep (expt 10 20) 'fixnum) ; → NIL  (slower arithmetic)
```
