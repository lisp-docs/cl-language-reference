---
title: "ldb"
---

# ldb

import LdbAccessor from './_ldb_accessor.md';

<LdbAccessor />

## Expanded Reference: ldb

### Basic byte extraction

`ldb` (load byte) extracts a field of bits from an integer, returning them right-justified.

```lisp
(ldb (byte 2 1) 10)   ; → 1 (10 = #b1010, bits 1-2 are 01)
(ldb (byte 4 0) #xFF)  ; → 15 (low nibble)
(ldb (byte 4 4) #xFF)  ; → 15 (high nibble)
(ldb (byte 8 0) #xABCD) ; → 205 (#xCD)
```

### Extracting individual bits

Use a byte of size 1 to extract a single bit.

```lisp
(ldb (byte 1 0) 5) ; → 1 (bit 0 of 101)
(ldb (byte 1 1) 5) ; → 0 (bit 1 of 101)
(ldb (byte 1 2) 5) ; → 1 (bit 2 of 101)
```

### setf with ldb

`ldb` is a setf-able accessor. Using `setf` with `ldb` modifies a byte within a place.

```lisp
(let ((a (list 8)))
  (setf (ldb (byte 2 1) (car a)) 1)
  a)
; → (10)

(let ((x 0))
  (setf (ldb (byte 4 4) x) #xA)
  x)
; → 160 (#xA0)
```

### Zero-width byte always returns zero

```lisp
(ldb (byte 0 0) 12345) ; → 0
(ldb (byte 0 99) -1)   ; → 0
```

### Practical use: extracting fields from a packed integer

```lisp
;; A date packed as: year (12 bits) | month (4 bits) | day (5 bits)
(let ((packed-date (logior (ash 2025 9) (ash 6 5) 15)))
  (list (ldb (byte 12 9) packed-date)  ; year
        (ldb (byte 4 5) packed-date)   ; month
        (ldb (byte 5 0) packed-date))) ; day
; → (2025 6 15)
```

### Relationship to dpb

`ldb` and `dpb` are inverse operations: `ldb` extracts what `dpb` deposits.

```lisp
(let ((bs (byte 4 4)))
  (ldb bs (dpb #xA bs 0)))
; → 10 (#xA)
```
