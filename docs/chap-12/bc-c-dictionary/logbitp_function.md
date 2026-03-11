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
(logbitp 0 1)
=> T
(logbitp 1 1)
=> NIL
(logbitp 0 6)
=> NIL
(logbitp 1 6)
=> T
(logbitp 2 6)
=> T
```

### Testing bits of larger numbers

```lisp
(logbitp 3 10)
=> T
(logbitp 0 10)
=> NIL
(logbitp 10 1024)
=> T
(logbitp 9 1024)
=> NIL
```

### Negative integers in two's-complement

Negative integers are treated as if represented in two's-complement, meaning they have infinite leading ones.

```lisp
(logbitp 0 -1)
=> T
(logbitp 1000000 -1)
=> T
(logbitp 0 -2)
=> NIL
(logbitp 1 -2)
=> T
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
=> (T NIL T)
```

### Equivalence to ldb-test

`logbitp` is equivalent to testing a 1-bit byte at the given position.

```lisp
(eql (logbitp 3 42) (ldb-test (byte 1 3) 42))
=> T
(eql (logbitp 0 42) (ldb-test (byte 1 0) 42))
=> T
```
