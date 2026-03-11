---
title: "simple-bit-vector"
---

# simple-bit-vector

import SimpleBitVectorType from './_simple-bit-vector_type.md';

<SimpleBitVectorType />

## Expanded Reference: simple-bit-vector

### The simple-bit-vector Type

A `simple-bit-vector` is a bit vector that is not displaced, has no fill pointer, and is not expressly adjustable. Bit vector literals created with `#*` are simple bit vectors.

```lisp
(typep #*10110 'simple-bit-vector)
=> T

(typep #* 'simple-bit-vector)
=> T

;; A bit vector with a fill pointer is not simple
(typep (make-array 5 :element-type 'bit :fill-pointer 3 :initial-element 0)
       'simple-bit-vector)
=> NIL
```

### Parameterized simple-bit-vector Type

```lisp
(typep #*1011 '(simple-bit-vector 4))
=> T

(typep #*1011 '(simple-bit-vector 3))
=> NIL
```

### sbit Requires Simple Bit Vectors

The `sbit` accessor is the simple-bit-vector counterpart of `bit`, potentially allowing faster access.

```lisp
(let ((sbv #*10110))
  (list (sbit sbv 0) (sbit sbv 1) (sbit sbv 2)))
=> (1 0 1)
```

### Type Relationships

```lisp
(subtypep 'simple-bit-vector 'bit-vector)
=> T
=> T

(subtypep 'simple-bit-vector 'simple-array)
=> T
=> T

(subtypep 'simple-bit-vector 'vector)
=> T
=> T
```
