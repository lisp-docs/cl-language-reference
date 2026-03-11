---
title: "fixnum"
---

# fixnum

import FixnumType from './_fixnum_type.md';

<FixnumType />

## Expanded Reference: fixnum

### Type Checking

A `fixnum` is an integer that the implementation can represent efficiently, typically as a machine word. The range is at least from -2^15 to 2^15-1 but is usually much larger.

```lisp
(typep 0 'fixnum)
=> T
(typep 42 'fixnum)
=> T
(typep -100 'fixnum)
=> T
(typep most-positive-fixnum 'fixnum)
=> T
(typep (1+ most-positive-fixnum) 'fixnum)
=> NIL
```

### Fixnum Range

The constants `most-positive-fixnum` and `most-negative-fixnum` define the implementation-dependent range. On most 64-bit implementations, fixnums cover a very large range.

```lisp
most-positive-fixnum
=> 4611686018427387903
most-negative-fixnum
=> -4611686018427387904

;; fixnum is equivalent to this integer range
(subtypep 'fixnum `(integer ,most-negative-fixnum ,most-positive-fixnum))
=> T
=> T
```

### Type Hierarchy

The `fixnum` type is a subtype of `integer` and is disjoint from `bignum`. Together, `fixnum` and `bignum` partition the `integer` type.

```lisp
(subtypep 'fixnum 'integer)
=> T
=> T
(subtypep 'fixnum 'bignum)
=> NIL
=> T
(type-of 42)
=> (INTEGER 0 4611686018427387903)
```

### Performance Considerations

Fixnum arithmetic uses efficient machine instructions. Declaring fixnum types can help compilers optimize numeric code.

```lisp
;; Type declarations for performance
(defun fast-add (a b)
  (declare (type fixnum a b))
  (the fixnum (+ a b)))

(fast-add 10 20)
=> 30
```
