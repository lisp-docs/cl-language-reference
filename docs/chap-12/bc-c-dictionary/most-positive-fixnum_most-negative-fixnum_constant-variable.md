---
title: "most-positive-fixnum, most-negative-fixnum"
---

# most-positive-fixnum, most-negative-fixnum

import MostPositiveFixnumConstantVariable from './_most-positive-fixnum_most-negative-fixnum_constant-variable.md';

<MostPositiveFixnumConstantVariable />

## Expanded Reference: most-positive-fixnum, most-negative-fixnum

### Inspecting the Values

These constants define the range of the `fixnum` type, which varies across implementations. The standard guarantees that fixnums span at least the range from -2^15 to 2^15-1.

```lisp
most-positive-fixnum
=> 4611686018427387903

most-negative-fixnum
=> -4611686018427387904
```

### Boundary Behavior

Adding 1 to `most-positive-fixnum` produces a bignum. Subtracting 1 from `most-negative-fixnum` also produces a bignum.

```lisp
(typep most-positive-fixnum 'fixnum)
=> T
(typep (1+ most-positive-fixnum) 'fixnum)
=> NIL
(typep (1+ most-positive-fixnum) 'bignum)
=> T

(typep most-negative-fixnum 'fixnum)
=> T
(typep (1- most-negative-fixnum) 'fixnum)
=> NIL
(typep (1- most-negative-fixnum) 'bignum)
=> T
```

### Portability Note

Code that depends on specific fixnum ranges is inherently non-portable. The fixnum range varies widely: 32-bit implementations may have fixnums as small as 2^29, while 64-bit implementations commonly use 2^62 or larger. Always use these constants rather than hardcoded values.

```lisp
;; Portable fixnum range check
(defun fits-in-fixnum-p (n)
  (<= most-negative-fixnum n most-positive-fixnum))

(fits-in-fixnum-p 1000000)
=> T
(fits-in-fixnum-p (expt 2 100))
=> NIL
```

### Determining Fixnum Size in Bits

You can compute how many bits a fixnum occupies on the current implementation.

```lisp
(integer-length most-positive-fixnum)
=> 62

(+ 1 (integer-length most-positive-fixnum))
=> 63
```
