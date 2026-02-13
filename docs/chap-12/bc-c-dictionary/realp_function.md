---
title: "realp"
---

# realp

import RealpFunction from './_realp_function.md';

<RealpFunction />

## Expanded Reference: realp

### Testing if an object is a real number

`realp` returns true if the object is a real number, which includes integers, ratios, and floats.

```lisp
(realp 12) ; → T
(realp 3/4) ; → T
(realp 3.14) ; → T
(realp -7.5d0) ; → T
```

### Complex numbers are not real

Complex numbers, even those with zero imaginary parts written explicitly, are not of type `real`.

```lisp
(realp #c(5/3 7.2)) ; → NIL
(realp #c(1 0)) ; → NIL
```

### Non-numeric objects

`realp` returns false for all non-numeric types.

```lisp
(realp nil) ; → NIL
(realp "42") ; → NIL
(realp (cons 1 2)) ; → NIL
(realp 'foo) ; → NIL
```

### Relationship to other type predicates

All integers, rationals, and floats are real. Real numbers are a subset of numbers that excludes complex numbers.

```lisp
(and (realp 42) (integerp 42)) ; → T
(and (realp 1/3) (rationalp 1/3)) ; → T
(and (realp 3.0) (floatp 3.0)) ; → T
(and (numberp #c(1 2)) (not (realp #c(1 2)))) ; → T
```

### Equivalence to typep

`realp` is equivalent to `(typep object 'real)`.

```lisp
(eql (realp 42) (typep 42 'real)) ; → T
(eql (realp #c(1 2)) (typep #c(1 2) 'real)) ; → T
```
