---
title: "rationalp"
---

# rationalp

import RationalpFunction from './_rationalp_function.md';

<RationalpFunction />

## Expanded Reference: rationalp

### Testing if an object is a rational

`rationalp` returns true if the object is a rational number, which includes both integers and ratios.

```lisp
(rationalp 12) ; → T
(rationalp 6/5) ; → T
(rationalp -7) ; → T
(rationalp 0) ; → T
```

### Non-rational numbers

Floats and complex numbers are not rationals.

```lisp
(rationalp 1.212) ; → NIL
(rationalp 3.0d0) ; → NIL
(rationalp #c(1 2)) ; → NIL
```

### Non-numeric objects

`rationalp` returns false for all non-numeric types.

```lisp
(rationalp nil) ; → NIL
(rationalp "1/2") ; → NIL
(rationalp 'foo) ; → NIL
```

### Integers are rationals

Every integer is also a rational, since an integer n is equivalent to the ratio n/1.

```lisp
(rationalp 42) ; → T
(rationalp (expt 2 100)) ; → T
(and (integerp 5) (rationalp 5)) ; → T
```

### Equivalence to typep

`rationalp` is equivalent to `(typep object 'rational)`.

```lisp
(eql (rationalp 1/3) (typep 1/3 'rational)) ; → T
(eql (rationalp 1.0) (typep 1.0 'rational)) ; → T
```
