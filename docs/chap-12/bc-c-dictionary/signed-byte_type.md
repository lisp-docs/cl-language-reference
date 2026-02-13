---
title: "signed-byte"
---

# signed-byte

import SignedByteType from './_signed-byte_type.md';

<SignedByteType />

## Expanded Reference: signed-byte

### Type Checking

The type `(signed-byte s)` denotes the set of integers that can be represented in two's complement form in `s` bits. It is equivalent to `(integer -(2^(s-1)) (2^(s-1) - 1))`. The bare type `signed-byte` without a size is equivalent to `integer`.

```lisp
(typep 0 '(signed-byte 8))     ; → T
(typep 127 '(signed-byte 8))   ; → T
(typep -128 '(signed-byte 8))  ; → T
(typep 128 '(signed-byte 8))   ; → NIL  (out of range)
(typep -129 '(signed-byte 8))  ; → NIL
```

### Different Sizes

The size parameter specifies the total number of bits including the sign bit.

```lisp
;; (signed-byte 8) → range -128 to 127
(typep 127 '(signed-byte 8))   ; → T
(typep -128 '(signed-byte 8))  ; → T

;; (signed-byte 16) → range -32768 to 32767
(typep 32767 '(signed-byte 16))  ; → T
(typep 32768 '(signed-byte 16))  ; → NIL

;; (signed-byte 32) → range -2147483648 to 2147483647
(typep 2147483647 '(signed-byte 32)) ; → T
```

### Relationship to integer

The bare `signed-byte` type specifier (without a size) is equivalent to `integer`, encompassing all integers.

```lisp
(subtypep 'signed-byte 'integer) ; → T, T
(subtypep 'integer 'signed-byte) ; → T, T
(subtypep '(signed-byte 8) '(signed-byte 16)) ; → T, T  (smaller fits in larger)
(subtypep '(signed-byte 16) '(signed-byte 8)) ; → NIL, T
```

### Use in Array Element Types

The `signed-byte` type is commonly used to declare compact array element types for memory-efficient storage.

```lisp
(make-array 4 :element-type '(signed-byte 8)
              :initial-contents '(-1 0 1 127))
; → #(-1 0 1 127)

(array-element-type
  (make-array 4 :element-type '(signed-byte 8)))
; → (SIGNED-BYTE 8)  (or a supertype, implementation-dependent)
```
