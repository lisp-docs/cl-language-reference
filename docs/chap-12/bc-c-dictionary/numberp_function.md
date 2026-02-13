---
title: "numberp"
---

# numberp

import NumberpFunction from './_numberp_function.md';

<NumberpFunction />

## Expanded Reference: numberp

### Testing if an object is a number

`numberp` returns true if the object is of type `number`, which includes integers, ratios, floats, and complex numbers.

```lisp
(numberp 42) ; → T
(numberp 3.14) ; → T
(numberp 2/3) ; → T
(numberp #c(1 2)) ; → T
```

### Non-numeric objects

`numberp` returns false for all non-numeric types.

```lisp
(numberp nil) ; → NIL
(numberp "42") ; → NIL
(numberp 'foo) ; → NIL
(numberp (cons 1 2)) ; → NIL
(numberp #\0) ; → NIL
```

### Large integers (bignums) are numbers

Arbitrarily large integers are still numbers.

```lisp
(numberp (expt 2 130)) ; → T
(numberp most-positive-fixnum) ; → T
```

### Practical use: input validation

`numberp` is useful for validating that a value is numeric before performing arithmetic.

```lisp
(defun safe-add (a b)
  (if (and (numberp a) (numberp b))
      (+ a b)
      (error "Both arguments must be numbers")))

(safe-add 3 4) ; → 7
```

### Equivalence to typep

`numberp` is equivalent to `(typep object 'number)`.

```lisp
(eql (numberp 42) (typep 42 'number)) ; → T
(eql (numberp "x") (typep "x" 'number)) ; → T
```
