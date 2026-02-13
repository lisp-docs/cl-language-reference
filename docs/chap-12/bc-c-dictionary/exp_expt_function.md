---
title: "exp, expt"
---

# exp, expt

import ExpFunction from './_exp_expt_function.md';

<ExpFunction />

## Expanded Reference: exp, expt

### exp -- e raised to a power

`exp` returns Euler's number e raised to the power of its argument.

```lisp
(exp 0) ; → 1.0
(exp 1) ; → 2.718282
(exp 2) ; → 7.389056
```

### exp and log are inverses

`exp` and `log` are inverse functions for real positive values.

```lisp
(exp (log 5)) ; → 5.0
(log (exp 3)) ; → 3.0
```

### expt -- general exponentiation

`expt` raises a base to a power. When both arguments are integers, the result is exact.

```lisp
(expt 2 8) ; → 256
(expt 2 0) ; → 1
(expt 3 3) ; → 27
(expt 10 6) ; → 1000000
```

### expt with rational and float arguments

With a float power, the result is a float. With rational arguments and an integer power, the result is exact.

```lisp
(expt 4 1/2) ; → 2.0
(expt 4 0.5) ; → 2.0
(expt 2/3 3) ; → 8/27
(expt 1.5 2) ; → 2.25
```

### expt with complex numbers

`expt` works with complex numbers.

```lisp
(expt #c(0 1) 2) ; → -1
(expt #c(2 2) 3) ; → #C(-16 16)
(expt #c(2 2) 4) ; → -64
```

### Negative base with non-integer power

When the base is negative and the power is not an integer, the result is complex (the principal value).

```lisp
;; The principal cube root of -8 is a complex number, not -2
(expt -8 1/3) ; → #C(1.0 1.7320508) (approximately)
(expt -1 1/2) ; → #C(0.0 1.0) (approximately)
```
