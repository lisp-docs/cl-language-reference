---
title: "bit"
---

# bit

import BitType from './_bit_type.md';

<BitType />

## Expanded Reference: bit

### Type Checking

The type `bit` contains exactly two elements: the integers `0` and `1`. It is equivalent to `(integer 0 1)` and is also equivalent to `(unsigned-byte 1)`.

```lisp
(typep 0 'bit) ; → T
(typep 1 'bit) ; → T
(typep 2 'bit) ; → NIL
(typep -1 'bit) ; → NIL
(typep 0.0 'bit) ; → NIL
```

### Type Hierarchy

The `bit` type is a subtype of several numeric types.

```lisp
(subtypep 'bit 'unsigned-byte) ; → T, T
(subtypep 'bit 'fixnum) ; → T, T
(subtypep 'bit 'integer) ; → T, T
(subtypep 'bit '(integer 0 1)) ; → T, T
```

### Bit Arrays and Bit Vectors

The `bit` type is primarily used as the element type for bit arrays and bit vectors, which provide compact storage and efficient bitwise operations.

```lisp
;; Bit vectors
(make-array 8 :element-type 'bit :initial-element 0)
; → #*00000000

#*10110100
; → #*10110100

(typep #*1010 'bit-vector) ; → T
(array-element-type #*1010) ; → BIT

;; Bit arrays
(make-array '(2 3) :element-type 'bit :initial-element 1)
; → #2A((1 1 1) (1 1 1))
```

### Bitwise Operations on Bit Vectors

Bit vectors support efficient logical operations through specialized functions.

```lisp
(bit-and #*1100 #*1010) ; → #*1000
(bit-ior #*1100 #*1010) ; → #*1110
(bit-xor #*1100 #*1010) ; → #*0110
(bit-not #*1100)         ; → #*0011
```
