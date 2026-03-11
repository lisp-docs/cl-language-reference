---
title: "unsigned-byte"
---

# unsigned-byte

import UnsignedByteType from './_unsigned-byte_type.md';

<UnsignedByteType />

## Expanded Reference: unsigned-byte

### Type Checking

The type `(unsigned-byte s)` denotes the set of non-negative integers that can be represented in `s` bits. It is equivalent to `(integer 0 (2^s - 1))`. The bare type `unsigned-byte` without a size is equivalent to `(integer 0 *)`.

```lisp
(typep 0 '(unsigned-byte 8))
=> T
(typep 255 '(unsigned-byte 8))
=> T
(typep 256 '(unsigned-byte 8))
=> NIL
(typep -1 '(unsigned-byte 8))
=> NIL
```

### Different Sizes

The size parameter specifies the number of bits available.

```lisp
;; (unsigned-byte 1) → range 0 to 1 (same as bit)
(typep 0 '(unsigned-byte 1))
=> T
(typep 1 '(unsigned-byte 1))
=> T
(typep 2 '(unsigned-byte 1))
=> NIL

;; (unsigned-byte 8) → range 0 to 255
(typep 255 '(unsigned-byte 8))
=> T

;; (unsigned-byte 16) → range 0 to 65535
(typep 65535 '(unsigned-byte 16))
=> T

;; (unsigned-byte 32) → range 0 to 4294967295
(typep 4294967295 '(unsigned-byte 32))
=> T
```

### Relationship to bit and signed-byte

The `bit` type is equivalent to `(unsigned-byte 1)`. Every `(unsigned-byte s)` is a subtype of `(signed-byte (1+ s))`.

```lisp
(subtypep 'bit '(unsigned-byte 1))
=> T
=> T
(subtypep '(unsigned-byte 1) 'bit)
=> T
=> T
(subtypep '(unsigned-byte 8) '(signed-byte 9))
=> T
=> T
(subtypep '(unsigned-byte 8) '(unsigned-byte 16))
=> T
=> T
```

### Use in Array Element Types

The `unsigned-byte` type is commonly used for byte arrays, image data, and binary data.

```lisp
;; Byte array (common for binary I/O)
(make-array 4 :element-type '(unsigned-byte 8)
              :initial-contents '(72 101 108 108))
=> #(72 101 108 108)

(array-element-type
  (make-array 4 :element-type '(unsigned-byte 8)))
=> (UNSIGNED-BYTE 8)

;; Bare unsigned-byte means any non-negative integer
(typep 1000000 'unsigned-byte)
=> T
(typep -1 'unsigned-byte)
=> NIL
```
