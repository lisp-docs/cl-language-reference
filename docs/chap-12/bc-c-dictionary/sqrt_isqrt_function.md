---
title: "sqrt, isqrt"
---

# sqrt, isqrt

import SqrtFunction from './_sqrt_isqrt_function.md';

<SqrtFunction />

## Expanded Reference: sqrt, isqrt

### sqrt -- principal square root

`sqrt` returns the principal square root of a number. For non-negative reals, the result is a non-negative real.

```lisp
(sqrt 9.0) ; → 3.0
(sqrt 2.0) ; → 1.4142135
(sqrt 0) ; → 0.0
(sqrt 25) ; → 5 or 5.0
```

### sqrt of negative numbers

When the argument is a negative real, the result is a complex number.

```lisp
(sqrt -1) ; → #C(0.0 1.0)
(sqrt -9.0) ; → #C(0.0 3.0)
(sqrt -4) ; → #C(0.0 2.0)
```

### sqrt with complex arguments

`sqrt` works with complex numbers directly.

```lisp
(sqrt #c(0 2)) ; → #C(1.0 1.0)
(sqrt #c(3 4)) ; → #C(2.0 1.0)
```

### isqrt -- integer square root

`isqrt` returns the greatest integer less than or equal to the exact square root of a non-negative integer.

```lisp
(isqrt 9) ; → 3
(isqrt 12) ; → 3
(isqrt 25) ; → 5
(isqrt 300) ; → 17
(isqrt 325) ; → 18
(isqrt 0) ; → 0
```

### Practical use: checking for perfect squares

`isqrt` is useful for testing whether a number is a perfect square.

```lisp
(defun perfect-square-p (n)
  (let ((root (isqrt n)))
    (= (* root root) n)))

(perfect-square-p 16) ; → T
(perfect-square-p 15) ; → NIL
(perfect-square-p 144) ; → T
```
