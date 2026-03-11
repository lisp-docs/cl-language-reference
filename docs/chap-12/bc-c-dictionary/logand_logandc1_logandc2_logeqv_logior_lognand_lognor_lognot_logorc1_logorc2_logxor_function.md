---
title: "logand, logandc1, logandc2, logeqv, logior, lognand, lognor, lognot, logorc1, logorc2, logxor"
---

# logand, logandc1, logandc2, logeqv, logior, lognand, lognor, lognot, logorc1, logorc2, logxor

import LogandFunction from './_logand_logandc1_logandc2_logeqv_logior_lognand_lognor_lognot_logorc1_logorc2_logxor_function.md';

<LogandFunction />

## Expanded Reference: logand, logandc1, logandc2, logeqv, logior, lognand, lognor, lognot, logorc1, logorc2, logxor

### logand, logior, logxor: the fundamental operations

These accept any number of integer arguments and are associative.

```lisp
(logand 15 9)
=> 9
(logior 1 2 4 8)
=> 15
(logxor 1 3 7 15)
=> 10
(logand 16 31)
=> 16
```

### Identity values with no arguments

`logand` and `logeqv` return -1 (all ones) with no arguments. `logior` and `logxor` return 0.

```lisp
(logand)
=> -1
(logeqv)
=> -1
(logior)
=> 0
(logxor)
=> 0
```

### lognot: bit-wise complement

`lognot` inverts all bits of a single integer (in two's-complement).

```lisp
(lognot 0)
=> -1
(lognot 1)
=> -2
(lognot -1)
=> 0
(lognot 7)
=> -8
```

### Two-argument complement operations

`logandc1`, `logandc2`, `lognand`, `lognor`, `logorc1`, and `logorc2` take exactly two arguments.

```lisp
;; logandc1: AND complement-of-first with second
(logandc1 #b1100 #b1010)
=> 2

;; logandc2: AND first with complement-of-second
(logandc2 #b1100 #b1010)
=> 4

;; lognand: NOT (a AND b)
(lognand #b1100 #b1010)
=> -9

;; lognor: NOT (a OR b)
(lognor #b1100 #b1010)
=> -15
```

### Practical use: bit masking

These functions are commonly used for setting, clearing, and testing bit flags.

```lisp
;; Set bits 0 and 2 (flags = 5 = #b101)
(let ((flags 0))
  (setq flags (logior flags #b101))
  flags)
=> 5

;; Clear bit 2
(let ((flags #b111))
  (logand flags (lognot #b100)))
=> 3

;; Toggle bit 1
(let ((flags #b101))
  (logxor flags #b010))
=> 7
```

### Bit-swapping example using logand and logxor

```lisp
;; Exchange bits in x and y at positions indicated by mask m
(let ((m #o007750)
      (x #o452576)
      (y #o317407))
  (let ((z (logand (logxor x y) m)))
    (list (logxor z x) (logxor z y))))
=> (155414 103791)
```
