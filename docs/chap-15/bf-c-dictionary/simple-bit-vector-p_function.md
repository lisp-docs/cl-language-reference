---
title: "simple-bit-vector-p"
---

# simple-bit-vector-p

import SimpleBitVectorPFunction from './_simple-bit-vector-p_function.md';

<SimpleBitVectorPFunction />

## Expanded Reference: simple-bit-vector-p

### Basic Usage

`simple-bit-vector-p` returns true if its argument is a simple bit vector -- a one-dimensional bit array that is not adjustable, not displaced, and has no fill pointer.

```lisp
;; Bit vector literals are simple
(simple-bit-vector-p #*10110)
→ T

;; Empty bit vector
(simple-bit-vector-p #*)
→ T

;; Not a bit vector at all
(simple-bit-vector-p (vector 1 0 1))
→ NIL
```

### Non-Simple Bit Vectors

Bit vectors with fill pointers, adjustability, or displacement are not simple.

```lisp
(simple-bit-vector-p
  (make-array 5 :element-type 'bit :fill-pointer 3 :initial-element 0))
→ NIL
```

### Non-Bit-Vector Types

Strings, general vectors, numbers, and other types all return false.

```lisp
(simple-bit-vector-p "hello")
→ NIL

(simple-bit-vector-p (make-array 5))
→ NIL

(simple-bit-vector-p 42)
→ NIL
```

### Equivalence to typep

`(simple-bit-vector-p x)` is equivalent to `(typep x 'simple-bit-vector)`.

```lisp
(let ((bv #*10101))
  (eq (simple-bit-vector-p bv)
      (typep bv 'simple-bit-vector)))
→ T
```
