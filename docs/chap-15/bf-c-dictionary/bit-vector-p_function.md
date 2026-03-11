---
title: "bit-vector-p"
---

# bit-vector-p

import BitVectorPFunction from './_bit-vector-p_function.md';

<BitVectorPFunction />

## Expanded Reference: bit-vector-p

### Basic Usage

`bit-vector-p` returns true if its argument is a bit vector (a one-dimensional array with element-type bit), false otherwise.

```lisp
(bit-vector-p #*10110)
=> T

(bit-vector-p #*)
=> T

(bit-vector-p 42)
=> NIL
```

### Bit Vectors with Fill Pointers

Unlike `simple-bit-vector-p`, `bit-vector-p` returns true even for non-simple bit vectors.

```lisp
(bit-vector-p
  (make-array 8 :element-type 'bit :fill-pointer 3 :initial-element 0))
=> T

(bit-vector-p
  (make-array 6 :element-type 'bit :initial-element 0))
=> T
```

### Non-Bit-Vector Types

General vectors, strings, multi-dimensional arrays, and non-arrays return false.

```lisp
(bit-vector-p (vector 0 1 0 1))
=> NIL

(bit-vector-p "hello")
=> NIL

(bit-vector-p (make-array '(2 3) :element-type 'bit :initial-element 0))
=> NIL
```

### Equivalence to typep

`(bit-vector-p x)` is equivalent to `(typep x 'bit-vector)`.

```lisp
(let ((bv (make-array 4 :element-type 'bit :initial-element 1)))
  (eq (bit-vector-p bv) (typep bv 'bit-vector)))
=> T
```
