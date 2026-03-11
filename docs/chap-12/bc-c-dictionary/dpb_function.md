---
title: "dpb"
---

# dpb

import DpbFunction from './_dpb_function.md';

<DpbFunction />

## Expanded Reference: dpb

### Basic usage

`dpb` (deposit byte) replaces a field of bits within an integer. The low bits of `newbyte` are deposited at the position and width specified by the byte specifier.

```lisp
(dpb 1 (byte 1 10) 0)
=> 1024
(dpb -2 (byte 2 10) 0)
=> 2048
(dpb 1 (byte 2 10) 2048)
=> 1024
```

### Setting individual bits

You can set a single bit by depositing 1 into a 1-bit byte.

```lisp
(dpb 1 (byte 1 0) 0)
=> 1
(dpb 1 (byte 1 3) 0)
=> 8
(dpb 1 (byte 1 7) 0)
=> 128
```

### Clearing bits

Deposit 0 to clear specific bits.

```lisp
(dpb 0 (byte 4 0) #xFF)
=> 240
(dpb 0 (byte 4 4) #xFF)
=> 15
(dpb 0 (byte 8 0) #xABCD)
=> 43776
```

### Replacing a nibble in a byte

```lisp
;; Replace the low nibble of #xA0 with #x5
(dpb #x5 (byte 4 0) #xA0)
=> 165

;; Replace the high nibble of #x0F with #xB
(dpb #xB (byte 4 4) #x0F)
=> 191
```

### Zero-width byte spec does nothing

Depositing into a zero-width byte always returns the original integer.

```lisp
(dpb #xFFFF (byte 0 5) 42)
=> 42
(dpb 999 (byte 0 0) 100)
=> 100
```

### Practical use: building a 24-bit color value

```lisp
(let ((r #x1A) (g #x88) (b #x44))
  (dpb r (byte 8 16)
       (dpb g (byte 8 8)
            (dpb b (byte 8 0) 0))))
=> 1738820
```
