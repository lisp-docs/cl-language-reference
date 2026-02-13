---
title: "logtest"
---

# logtest

import LogtestFunction from './_logtest_function.md';

<LogtestFunction />

## Expanded Reference: logtest

### Testing if any bits overlap

`logtest` returns true if any bit that is 1 in the first integer is also 1 in the second integer. It is equivalent to `(not (zerop (logand x y)))`.

```lisp
(logtest 1 7)   ; → T (bit 0 is shared)
(logtest 1 2)   ; → NIL (no bits in common)
(logtest 6 3)   ; → T (bit 1 is shared: 110 AND 011 = 010)
(logtest 0 -1)  ; → NIL (zero has no bits set)
```

### Testing with negative integers

Negative integers in two's-complement have infinite leading 1-bits, so they always share bits with other negative integers.

```lisp
(logtest -2 -1) ; → T
(logtest -1 -1) ; → T
```

### Practical use: checking bit flags

`logtest` is a concise way to check if any flags in a mask are set.

```lisp
(defconstant +flag-a+ #b001)
(defconstant +flag-b+ #b010)
(defconstant +flag-c+ #b100)

(let ((active-flags (logior +flag-a+ +flag-c+))) ; #b101
  (list (logtest +flag-a+ active-flags)          ; flag A set?
        (logtest +flag-b+ active-flags)          ; flag B set?
        (logtest +flag-c+ active-flags)          ; flag C set?
        (logtest (logior +flag-a+ +flag-b+)      ; either A or B set?
                 active-flags)))
; → (T NIL T T)
```

### Equivalence to logand

`logtest` is defined as checking whether the bitwise AND is non-zero.

```lisp
(eql (logtest 12 10) (not (zerop (logand 12 10)))) ; → T
(eql (logtest 8 7)   (not (zerop (logand 8 7))))   ; → T
```
