---
title: "ldb-test"
---

# ldb-test

import LdbTestFunction from './_ldb-test_function.md';

<LdbTestFunction />

## Expanded Reference: ldb-test

### Basic usage

`ldb-test` returns true if any bit in the specified byte of the integer is non-zero.

```lisp
(ldb-test (byte 4 1) 16) ; → T (16 = #b10000, bits 1-4 include bit 4 which is set)
(ldb-test (byte 3 1) 16) ; → NIL (bits 1-3 of 16 are all zero)
(ldb-test (byte 3 2) 16) ; → T (bits 2-4 of 16, bit 4 is set)
```

### Testing if a field is zero

`ldb-test` is a convenient way to check if a particular bit field has any bits set.

```lisp
(ldb-test (byte 4 0) 0)    ; → NIL (no bits set)
(ldb-test (byte 4 0) #xF0) ; → NIL (low nibble is zero)
(ldb-test (byte 4 4) #xF0) ; → T (high nibble has bits set)
```

### Testing individual bits

With a byte of size 1, `ldb-test` works like `logbitp`.

```lisp
(ldb-test (byte 1 0) 5) ; → T (bit 0 of 5 = 101 is set)
(ldb-test (byte 1 1) 5) ; → NIL (bit 1 is not set)
(ldb-test (byte 1 2) 5) ; → T (bit 2 is set)
```

### Equivalence to checking ldb against zero

`ldb-test` is equivalent to `(not (zerop (ldb bytespec n)))`.

```lisp
(let ((bs (byte 4 4))
      (n #xAB))
  (eql (ldb-test bs n)
       (not (zerop (ldb bs n)))))
; → T
```

### Practical use: checking if a flag group is active

```lisp
;; Check if any of the permission bits (bits 0-2) are set
(let ((permissions #b101))
  (ldb-test (byte 3 0) permissions))
; → T

;; Check if any high bits (bits 8-15) are set in a small number
(ldb-test (byte 8 8) 255)
; → NIL
```
