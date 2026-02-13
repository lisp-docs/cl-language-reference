---
title: "byte, byte-size, byte-position"
---

# byte, byte-size, byte-position

import ByteFunction from './_byte_byte-size_byte-position_function.md';

<ByteFunction />

## Expanded Reference: byte, byte-size, byte-position

### Creating byte specifiers

`byte` creates a byte specifier describing a contiguous field of bits with a given size (width) and position (starting bit).

```lisp
;; A 4-bit field starting at bit 0 (the low nibble)
(byte 4 0) ; → implementation-dependent byte specifier

;; An 8-bit field starting at bit 8 (the second byte)
(byte 8 8) ; → implementation-dependent byte specifier
```

### Querying byte specifier properties

`byte-size` returns the width and `byte-position` returns the starting bit of a byte specifier.

```lisp
(let ((bs (byte 100 200)))
  (list (byte-size bs)
        (byte-position bs)))
; → (100 200)

(byte-size (byte 4 0))     ; → 4
(byte-position (byte 4 0)) ; → 0
```

### Using byte specifiers with ldb and dpb

Byte specifiers are typically used with `ldb` (load byte) and `dpb` (deposit byte).

```lisp
;; Extract the low nibble (4 bits starting at position 0)
(ldb (byte 4 0) #xFF) ; → 15

;; Extract the high nibble (4 bits starting at position 4)
(ldb (byte 4 4) #xFF) ; → 15

;; Deposit the value 5 into the low nibble
(dpb 5 (byte 4 0) #xF0) ; → 245 (#xF5)
```

### Zero-width byte specifiers

A byte of size 0 is valid and always extracts or deposits zero.

```lisp
(ldb (byte 0 3) #o7777)  ; → 0
(dpb #o7777 (byte 0 3) 0) ; → 0
```

### Practical use: extracting RGB components from a 24-bit color

```lisp
(let ((color #xRR8844))
  ;; Assuming color = #x1A8844 for a concrete example
  (let ((color #x1A8844))
    (list (ldb (byte 8 16) color)   ; red
          (ldb (byte 8 8) color)    ; green
          (ldb (byte 8 0) color)))) ; blue
; → (26 136 68)
```
