---
title: "deposit-field"
---

# deposit-field

import DepositFieldFunction from './_deposit-field_function.md';

<DepositFieldFunction />

## Expanded Reference: deposit-field

### Basic usage

`deposit-field` replaces a field of bits within an integer. Unlike `dpb`, the bits taken from `newbyte` are at the same position as specified by the byte specifier (not right-justified).

```lisp
(deposit-field 7 (byte 2 1) 0)
=> 6
;; 7 in binary is ...111. The byte spec takes 2 bits starting at position 1.
;; Bits at positions 1-2 of 7 are 11 (value 6), deposited into 0 → 6.

(deposit-field -1 (byte 4 0) 0)
=> 15
;; -1 has all bits set; the low 4 bits (1111 = 15) replace those in 0.
```

### Difference from dpb

`deposit-field` takes bits from `newbyte` at the same position as the byte specifier, while `dpb` takes the low bits of `newbyte`.

```lisp
;; dpb: takes the low 2 bits of 3 (= 11) and places them at position 4
(dpb 3 (byte 2 4) 0)
=> 48

;; deposit-field: takes bits 4-5 of 3 (= 00) and places them at position 4
(deposit-field 3 (byte 2 4) 0)
=> 0

;; deposit-field: takes bits 4-5 of #xFF (= 11) and places them at position 4
(deposit-field #xFF (byte 2 4) 0)
=> 48
```

### Clearing bits in a field

Depositing 0 clears the specified bit field.

```lisp
(deposit-field 0 (byte 2 1) -3)
=> -7
;; Clears bits at positions 1 and 2 of -3.
```

### Practical use: replacing a byte within a larger integer

```lisp
;; Replace the second byte (bits 8-15) of #xABCD with the same bits from #xFF00
(deposit-field #xFF00 (byte 8 8) #xABCD)
=> 65485
```

### Relationship to mask-field

`deposit-field` is to `mask-field` as `dpb` is to `ldb`.

```lisp
;; mask-field extracts bits in place; deposit-field puts bits in place
(let ((bs (byte 4 4)))
  (deposit-field (mask-field bs #xAB) bs 0))
=> 160
```
