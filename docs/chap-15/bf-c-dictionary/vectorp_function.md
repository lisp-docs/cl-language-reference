---
title: "vectorp"
---

# vectorp

import VectorpFunction from './_vectorp_function.md';

<VectorpFunction />

## Expanded Reference: vectorp

### Basic Usage

`vectorp` returns true if its argument is a vector (a one-dimensional array), false otherwise.

```lisp
(vectorp (make-array 5))
→ T

(vectorp (vector 1 2 3))
→ T

(vectorp 42)
→ NIL
```

### Strings and Bit Vectors Are Vectors

Strings and bit vectors are specialized one-dimensional arrays, so they are vectors.

```lisp
(vectorp "hello")
→ T

(vectorp #*10110)
→ T
```

### Multi-Dimensional Arrays Are Not Vectors

Only one-dimensional arrays qualify as vectors.

```lisp
(vectorp (make-array '(2 3)))
→ NIL

(vectorp (make-array '(3 3 3)))
→ NIL
```

### Vectors with Fill Pointers

Vectors with fill pointers are still vectors.

```lisp
(vectorp (make-array 10 :fill-pointer 5))
→ T
```

### Equivalence to typep

`(vectorp x)` is equivalent to `(typep x 'vector)`.

```lisp
(let ((v (vector 'a 'b 'c)))
  (eq (vectorp v) (typep v 'vector)))
→ T
```
