---
title: "logbitp"
---

# logbitp

import LogbitpFunction from './_logbitp_function.md';

<LogbitpFunction />

## Expanded Reference: logbitp

### Testing individual bits

`logbitp` tests whether a specific bit (by index, zero-based from the least significant bit) is set in an integer.

```lisp
(logbitp 0 1)  ; → T (bit 0 of 1 = ...0001 is set)
(logbitp 1 1)  ; → NIL (bit 1 of 1 is not set)
(logbitp 0 6)  ; → NIL (6 = ...110, bit 0 is 0)
(logbitp 1 6)  ; → T (bit 1 of 6 is set)
(logbitp 2 6)  ; → T (bit 2 of 6 is set)
```

### Testing bits of larger numbers

```lisp
(logbitp 3 10)   ; → T (10 = #b1010, bit 3 is set)
(logbitp 0 10)   ; → NIL (bit 0 of 10 is 0)
(logbitp 10 1024) ; → T (1024 = 2^10)
(logbitp 9 1024)  ; → NIL
```

### Negative integers in two's-complement

Negative integers are treated as if represented in two's-complement, meaning they have infinite leading ones.

```lisp
(logbitp 0 -1)       ; → T (-1 = ...1111 in two's-complement)
(logbitp 1000000 -1) ; → T (all bits of -1 are set)
(logbitp 0 -2)       ; → NIL (-2 = ...1110)
(logbitp 1 -2)       ; → T
```

### Practical use: checking if a flag is set

```lisp
;; Define permission flags
(defconstant +read+    #b001)
(defconstant +write+   #b010)
(defconstant +execute+ #b100)

(let ((perms (logior +read+ +execute+)))  ; 5 = #b101
  (list (logbitp 0 perms)   ; read?
        (logbitp 1 perms)   ; write?
        (logbitp 2 perms))) ; execute?
; → (T NIL T)
```

### Equivalence to ldb-test

`logbitp` is equivalent to testing a 1-bit byte at the given position.

```lisp
(eql (logbitp 3 42) (ldb-test (byte 1 3) 42)) ; → T
(eql (logbitp 0 42) (ldb-test (byte 1 0) 42)) ; → T
```
