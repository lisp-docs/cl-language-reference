---
title: "simple-vector-p"
---

# simple-vector-p

import SimpleVectorPFunction from './_simple-vector-p_function.md';

<SimpleVectorPFunction />

## Expanded Reference: simple-vector-p

### Basic Usage

`simple-vector-p` returns true if its argument is a simple vector -- a one-dimensional, non-adjustable, non-displaced array with element-type `t` and no fill pointer.

```lisp
(simple-vector-p (vector 1 2 3))
→ T

(simple-vector-p (make-array 5))
→ T

(simple-vector-p 42)
→ NIL
```

### Strings and Bit Vectors Are Not Simple Vectors

Even though strings and bit vectors are one-dimensional arrays, they have specialized element types and thus are not of type `simple-vector`.

```lisp
(simple-vector-p "hello")
→ NIL

(simple-vector-p #*10110)
→ NIL
```

### Vectors with Fill Pointers or Adjustability

Vectors with fill pointers are not simple vectors. Adjustable vectors may or may not be simple, depending on the implementation.

```lisp
(simple-vector-p (make-array 5 :fill-pointer 3))
→ NIL
```

### Relationship to Other Predicates

A simple vector satisfies `vectorp` and `arrayp` as well, but the reverse is not always true.

```lisp
(let ((sv (vector 'a 'b 'c)))
  (list (simple-vector-p sv)
        (vectorp sv)
        (arrayp sv)))
→ (T T T)

(let ((fv (make-array 5 :fill-pointer 0)))
  (list (simple-vector-p fv)
        (vectorp fv)
        (arrayp fv)))
→ (NIL T T)
```
