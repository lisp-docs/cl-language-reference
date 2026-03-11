---
title: "simple-vector"
---

# simple-vector

import SimpleVectorType from './_simple-vector_type.md';

<SimpleVectorType />

## Expanded Reference: simple-vector

### The simple-vector Type

A `simple-vector` is a one-dimensional simple array with element-type `t`. It has no fill pointer, is not adjustable, and is not displaced. The `vector` function always creates simple vectors.

```lisp
(typep (vector 1 2 3) 'simple-vector)
=> T

(typep (make-array 5) 'simple-vector)
=> T

(typep #(a b c) 'simple-vector)
=> T
```

### What Is Not a Simple Vector

Strings, bit vectors, adjustable vectors, and vectors with fill pointers are not simple vectors.

```lisp
(typep "hello" 'simple-vector)
=> NIL

(typep #*10110 'simple-vector)
=> NIL

(typep (make-array 5 :fill-pointer 0) 'simple-vector)
=> NIL
```

### Parameterized simple-vector Type

The `simple-vector` type can be parameterized by size.

```lisp
(typep (vector 1 2 3) '(simple-vector 3))
=> T

(typep (vector 1 2 3) '(simple-vector 4))
=> NIL
```

### Type Relationships

```lisp
(subtypep 'simple-vector 'vector)
=> T
=> T

(subtypep 'simple-vector 'simple-array)
=> T
=> T

;; svref requires a simple-vector
(svref (vector 'a 'b 'c) 1)
=> B
```
