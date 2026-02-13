---
title: "integerp"
---

# integerp

import IntegerpFunction from './_integerp_function.md';

<IntegerpFunction />

## Expanded Reference: integerp

### Testing if an object is an integer

`integerp` returns true if the object is an integer (fixnum or bignum).

```lisp
(integerp 1) ; → T
(integerp 0) ; → T
(integerp -100) ; → T
(integerp (expt 2 130)) ; → T
```

### Non-integer numbers

Ratios, floats, and complex numbers are not integers.

```lisp
(integerp 6/5) ; → NIL
(integerp 3.0) ; → NIL
(integerp #c(1 2)) ; → NIL
```

### Non-numeric objects

`integerp` returns false for all non-numeric types.

```lisp
(integerp nil) ; → NIL
(integerp "42") ; → NIL
(integerp 'hello) ; → NIL
```

### Practical use: ensuring integer arguments

`integerp` can guard functions that require integer inputs.

```lisp
(defun factorial (n)
  (assert (and (integerp n) (>= n 0))
          (n) "~A is not a non-negative integer" n)
  (if (zerop n) 1 (* n (factorial (1- n)))))

(factorial 5) ; → 120
```

### Equivalence to typep

`integerp` is equivalent to `(typep object 'integer)`.

```lisp
(eql (integerp 42) (typep 42 'integer)) ; → T
(eql (integerp 3.0) (typep 3.0 'integer)) ; → T
```
