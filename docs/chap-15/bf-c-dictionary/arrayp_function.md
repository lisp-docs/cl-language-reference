---
title: "arrayp"
---

# arrayp

import ArraypFunction from './_arrayp_function.md';

<ArraypFunction />

## Expanded Reference: arrayp

### Basic Usage

`arrayp` returns true if its argument is an array, false otherwise. Vectors, strings, bit vectors, and multi-dimensional arrays are all arrays.

```lisp
(arrayp (make-array 5))
=> T

(arrayp (make-array '(2 3)))
=> T

(arrayp 42)
=> NIL

(arrayp 'hello)
=> NIL
```

### Strings and Bit Vectors Are Arrays

Strings and bit vectors are specialized one-dimensional arrays, so `arrayp` returns true for them.

```lisp
(arrayp "hello world")
=> T

(arrayp #*10110)
=> T
```

### Vectors Created by vector Are Arrays

```lisp
(arrayp (vector 1 2 3))
=> T
```

### Lists and Other Non-Array Types

Lists, numbers, symbols, and other non-array objects return false.

```lisp
(arrayp '(1 2 3))
=> NIL

(arrayp #\a)
=> NIL

(arrayp nil)
=> NIL
```

### Equivalence to typep

`(arrayp x)` is equivalent to `(typep x 'array)`.

```lisp
(let ((a (make-array '(2 3))))
  (eq (arrayp a) (typep a 'array)))
=> T
```
