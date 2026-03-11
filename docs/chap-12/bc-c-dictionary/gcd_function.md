---
title: "gcd"
---

# gcd

import GcdFunction from './_gcd_function.md';

<GcdFunction />

## Expanded Reference: gcd

### Basic greatest common divisor

`gcd` returns the greatest common divisor of its integer arguments. With no arguments it returns 0 (the identity element).

```lisp
(gcd)
=> 0
(gcd 12)
=> 12
(gcd 12 8)
=> 4
(gcd 60 42)
=> 6
```

### Multiple arguments

`gcd` accepts any number of integer arguments.

```lisp
(gcd 12 8 6)
=> 2
(gcd 63 -42 35)
=> 7
(gcd 3333 -33 1002001)
=> 11
```

### Negative arguments

`gcd` always returns a non-negative integer. With a single argument, it returns the absolute value.

```lisp
(gcd -4)
=> 4
(gcd 91 -49)
=> 7
(gcd -12 -8)
=> 4
```

### Coprime numbers

Two numbers are coprime when their GCD is 1.

```lisp
(gcd 7 11)
=> 1
(gcd 3333 -33 101)
=> 1
(= 1 (gcd 14 15))
=> T
```

### Practical use: simplifying fractions

`gcd` can be used to reduce a fraction to lowest terms.

```lisp
(defun simplify (numer denom)
  (let ((g (gcd numer denom)))
    (values (/ numer g) (/ denom g))))

(simplify 12 8)
=> 3
=> 2
(simplify 100 75)
=> 4
=> 3
```
