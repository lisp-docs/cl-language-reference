---
title: "bit, sbit"
---

# bit, sbit

import BitAccessor from './_bit_sbit_accessor.md';

<BitAccessor />

## Expanded Reference: bit, sbit

### Basic Bit Access

`bit` accesses elements of a bit array. `sbit` is the same but requires a simple bit array, potentially allowing faster access.

```lisp
(let ((bv (make-array 8 :element-type 'bit
                      :initial-contents '(1 0 1 1 0 0 1 0))))
  (list (bit bv 0) (bit bv 1) (bit bv 2)))
→ (1 0 1)

;; sbit works the same way on simple bit arrays
(let ((bv #*10110010))
  (list (sbit bv 0) (sbit bv 3) (sbit bv 7)))
→ (1 1 0)
```

### Setting Bits with SETF

Both `bit` and `sbit` work with `setf`.

```lisp
(let ((bv (make-array 5 :element-type 'bit :initial-element 0)))
  (setf (bit bv 1) 1)
  (setf (bit bv 3) 1)
  bv)
→ #*01010
```

### Multi-Dimensional Bit Arrays

`bit` and `sbit` work on bit arrays of any rank, not just bit vectors.

```lisp
(let ((ba (make-array '(2 3) :element-type 'bit
                      :initial-contents '((1 0 1) (0 1 0)))))
  (list (bit ba 0 0) (bit ba 0 2) (bit ba 1 1)))
→ (1 1 1)
```

### Bitwise Logical Operations on Bit Arrays

The `bit-and`, `bit-or`, `bit-xor`, and `bit-not` family of functions perform element-wise logical operations on entire bit arrays.

```lisp
(bit-and #*1100 #*1010)
→ #*1000

(bit-or #*1100 #*1010)
→ #*1110

(bit-xor #*1100 #*1010)
→ #*0110

(bit-not #*10110)
→ #*01001
```

### Destructive Bit Operations with opt-arg

The optional third argument controls where the result is stored. Pass `t` to modify the first argument in place, or pass another bit array to store the result there.

```lisp
;; Store result back into the first argument
(let ((a (copy-seq #*1100))
      (b #*1010))
  (bit-and a b t)  ; result stored in a
  a)
→ #*1000

;; Create a fresh result (default, opt-arg = nil)
(let ((result (bit-or #*1100 #*1010)))
  result)
→ #*1110
```
