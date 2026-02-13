---
title: "log"
---

# log

import LogFunction from './_log_function.md';

<LogFunction />

## Expanded Reference: log

### Natural logarithm

With one argument, `log` returns the natural logarithm (base e).

```lisp
(log 1) ; → 0.0
(log 2.718282) ; → 1.0 (approximately)
(log (exp 1)) ; → 1.0
```

### Logarithm with a specified base

The optional second argument specifies the base.

```lisp
(log 100 10) ; → 2.0 or 2
(log 8 2) ; → 3.0 or 3
(log 100.0 10) ; → 2.0
(log 81 3) ; → 4.0 or 4
```

### Logarithm of negative numbers

Taking the logarithm of a negative number returns a complex result.

```lisp
(log -1) ; → #C(0.0 3.1415927) (approximately i*pi)
(log -1.0) ; → #C(0.0 3.1415927)
```

### Inverse of exp and expt

`log` is the inverse of `exp` for natural logarithms.

```lisp
(log (exp 5)) ; → 5.0
(exp (log 10)) ; → 10.0
```

### Practical use: computing number of digits

The logarithm base 10 tells you the number of digits in a positive integer.

```lisp
(defun num-digits (n)
  (1+ (floor (log n 10))))

(num-digits 1) ; → 1
(num-digits 99) ; → 2
(num-digits 1000) ; → 4
```
