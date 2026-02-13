---
title: "logcount"
---

# logcount

import LogcountFunction from './_logcount_function.md';

<LogcountFunction />

## Expanded Reference: logcount

### Counting one-bits in non-negative integers

For non-negative integers, `logcount` returns the number of 1-bits (popcount).

```lisp
(logcount 0)   ; → 0
(logcount 1)   ; → 1 (binary: 1)
(logcount 7)   ; → 3 (binary: 111)
(logcount 13)  ; → 3 (binary: 1101)
(logcount 30)  ; → 4 (binary: 11110)
```

### Counting zero-bits in negative integers

For negative integers, `logcount` counts the 0-bits in two's-complement representation.

```lisp
(logcount -1)  ; → 0 (two's-complement: ...1111, no zero bits)
(logcount -13) ; → 2 (two's-complement: ...10011, two zero bits in finite portion)
(logcount -30) ; → 4 (two's-complement: ...100010)
```

### Powers of two

A power of two has exactly one 1-bit.

```lisp
(logcount 1)             ; → 1
(logcount 1024)          ; → 1
(logcount (expt 2 100))  ; → 1
```

### Relationship between logcount of n and lognot of n

`logcount` of an integer equals `logcount` of its bitwise complement.

```lisp
(= (logcount 42) (logcount (lognot 42))) ; → T
(= (logcount 999) (logcount (- (1+ 999)))) ; → T
```

### Practical use: checking if a number is a power of two

A positive integer is a power of two if and only if it has exactly one 1-bit.

```lisp
(defun power-of-two-p (n)
  (and (plusp n) (= 1 (logcount n))))

(power-of-two-p 16)  ; → T
(power-of-two-p 15)  ; → NIL
(power-of-two-p 1)   ; → T
(power-of-two-p 0)   ; → NIL
```
