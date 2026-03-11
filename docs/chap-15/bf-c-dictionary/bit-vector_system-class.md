---
title: "bit-vector"
---

# bit-vector

import BitVectorSystemClass from './_bit-vector_system-class.md';

<BitVectorSystemClass />

## Expanded Reference: bit-vector

### The bit-vector Type

A `bit-vector` is a vector whose elements are restricted to bits (0 or 1). Bit vectors are printed with the `#*` syntax.

```lisp
(typep #*10110 'bit-vector)
=> T

(typep (make-array 5 :element-type 'bit :initial-element 0) 'bit-vector)
=> T

;; General vectors are NOT bit vectors
(typep (vector 0 1 0 1) 'bit-vector)
=> NIL
```

### Creating Bit Vectors

```lisp
;; Literal syntax
#*11001010
=> #*11001010

;; Using make-array
(make-array 8 :element-type 'bit :initial-element 0)
=> #*00000000

(make-array 4 :element-type 'bit :initial-contents '(1 0 1 1))
=> #*1011
```

### Parameterized bit-vector Type

The `bit-vector` type can be parameterized by length.

```lisp
(typep #*1011 '(bit-vector 4))
=> T

(typep #*1011 '(bit-vector 5))
=> NIL
```

### Bit Vectors Support Logical Operations

The `bit-and`, `bit-ior`, `bit-xor`, and `bit-not` functions operate on entire bit vectors at once.

```lisp
(bit-and #*1100 #*1010)
=> #*1000

(bit-ior #*1100 #*1010)
=> #*1110

(bit-not #*1100)
=> #*0011
```

### Type Relationships

```lisp
(subtypep 'bit-vector 'vector)
=> T
=> T

(subtypep 'simple-bit-vector 'bit-vector)
=> T
=> T
```
