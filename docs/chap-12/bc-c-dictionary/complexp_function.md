---
title: "complexp"
---

# complexp

import ComplexpFunction from './_complexp_function.md';

<ComplexpFunction />

## Expanded Reference: complexp

### Testing if an object is a complex number

`complexp` returns true if the object is of type `complex`.

```lisp
(complexp #c(1 2)) ; → T
(complexp #c(5/3 7.2)) ; → T
(complexp #c(0.0 1.0)) ; → T
```

### Real numbers are not complex

Integers, ratios, and floats are not complex, even though they can be thought of as complex numbers with zero imaginary part.

```lisp
(complexp 42) ; → NIL
(complexp 1.2d2) ; → NIL
(complexp 3/4) ; → NIL
```

### Non-numeric objects

`complexp` returns false for all non-numeric types.

```lisp
(complexp nil) ; → NIL
(complexp "complex") ; → NIL
(complexp '(1 2)) ; → NIL
```

### Complex numbers created with the complex function

The `complex` function creates complex numbers. If the imaginary part is an exact zero and the real part is rational, the result may be a rational rather than a complex.

```lisp
(complexp (complex 1 2)) ; → T
(complexp (complex 1.0 0.0)) ; → T
(complexp (complex 1 0)) ; → NIL  ; simplified to integer 1
```

### Equivalence to typep

`complexp` is equivalent to `(typep object 'complex)`.

```lisp
(eql (complexp #c(1 2)) (typep #c(1 2) 'complex)) ; → T
(eql (complexp 42) (typep 42 'complex)) ; → T
```
