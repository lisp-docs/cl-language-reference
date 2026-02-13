---
title: "vector"
---

# vector

import VectorSystemClass from './_vector_system-class.md';

<VectorSystemClass />

## Expanded Reference: vector

### The vector Type

The `vector` type represents one-dimensional arrays. Strings, bit vectors, and general vectors are all subtypes of `vector`.

```lisp
(typep (make-array 5) 'vector)
→ T

(typep "hello" 'vector)
→ T

(typep #*10110 'vector)
→ T

;; Multi-dimensional arrays are NOT vectors
(typep (make-array '(2 3)) 'vector)
→ NIL
```

### Parameterized Vector Type

The `vector` type specifier can be parameterized by element type and size.

```lisp
;; Vector of any type with any size
(typep (vector 1 2 3) '(vector * *))
→ T

;; Vector of exactly 3 elements
(typep (vector 1 2 3) '(vector * 3))
→ T

(typep (vector 1 2 3) '(vector * 4))
→ NIL
```

### Vectors Are Both Arrays and Sequences

Vectors are the intersection of `array` and `sequence` -- they support both array operations (like `aref`) and sequence operations (like `map`, `reduce`, `find`).

```lisp
(let ((v (vector 10 20 30 40 50)))
  (list (aref v 2)           ; array access
        (elt v 2)            ; sequence access
        (find 30 v)          ; sequence operation
        (reduce #'+ v)))     ; sequence operation
→ (30 30 30 150)
```

### Type Relationships

```lisp
(subtypep 'vector 'array)
→ T

(subtypep 'string 'vector)
→ T

(subtypep 'bit-vector 'vector)
→ T
```
