---
title: "mask-field"
---

# mask-field

import MaskFieldAccessor from './_mask-field_accessor.md';

<MaskFieldAccessor />

## Expanded Reference: mask-field

### Basic masking

`mask-field` returns an integer with the same bits as the input within the specified byte, and zero bits everywhere else. Unlike `ldb`, the result bits stay at their original position.

```lisp
(mask-field (byte 1 5) -1) ; → 32 (only bit 5 is set)
(mask-field (byte 2 0) 15) ; → 3 (keep bits 0-1 of 15 = #b1111)
(mask-field (byte 4 0) #xFF) ; → 15 (keep low nibble)
(mask-field (byte 4 4) #xFF) ; → 240 (keep high nibble, #xF0)
```

### Difference from ldb

`ldb` right-justifies the extracted bits; `mask-field` keeps them at their original position.

```lisp
;; ldb extracts and right-justifies
(ldb (byte 4 4) #xAB) ; → 10 (#xA, right-justified)

;; mask-field keeps bits in position
(mask-field (byte 4 4) #xAB) ; → 160 (#xA0, bits at position 4-7)
```

### setf with mask-field

`mask-field` is a setf-able accessor. Setting it performs a `deposit-field` operation.

```lisp
(let ((a 15))
  (setf (mask-field (byte 2 0) a) 1)
  a)
; → 13 (replaced bits 0-1 of 15=#b1111 with bits 0-1 of 1=#b01, result=#b1101)
```

### Masking preserves the byte for ldb

The identity `(ldb bs (mask-field bs n))` equals `(ldb bs n)`.

```lisp
(let ((bs (byte 4 4))
      (n #xABCD))
  (= (ldb bs (mask-field bs n))
     (ldb bs n)))
; → T
```

### Equivalence to logand with a mask

`mask-field` is equivalent to ANDing with a mask that has ones only in the specified byte.

```lisp
(let ((bs (byte 4 4)))
  (= (mask-field bs #xABCD)
     (logand #xABCD (dpb -1 bs 0))))
; → T
```
