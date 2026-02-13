---
title: "*"
---

import ProductFunction from './_product_function.md';

<ProductFunction />

## Expanded Reference: *

### Basic multiplication

`*` returns the product of its arguments. With no arguments, it returns the multiplicative identity `1`.

```lisp
(*) ; → 1
(* 6) ; → 6
(* 3 5) ; → 15
(* 2 3 4 5) ; → 120
```

### Rational multiplication

With rational arguments, the result is an exact rational.

```lisp
(* 1/2 1/3) ; → 1/6
(* 3/4 4/3) ; → 1
(* 2 3/5) ; → 6/5
```

### Floating-point contagion

If any argument is a float, the result is a float.

```lisp
(* 2 3.0) ; → 6.0
(* 0.5 10) ; → 5.0
(* 1.0d0 3) ; → 3.0d0
```

### Complex multiplication

`*` works with complex numbers following standard complex multiplication rules.

```lisp
(* #c(0 1) #c(0 1)) ; → -1
(* #c(1 1) #c(1 -1)) ; → 2
(* #c(2 3) 2) ; → #C(4 6)
```

### Computing factorials

`*` is useful with `reduce` or `apply` for computing products over sequences.

```lisp
(reduce #'* '(1 2 3 4 5)) ; → 120
(apply #'* (loop for i from 1 to 10 collect i)) ; → 3628800
```
