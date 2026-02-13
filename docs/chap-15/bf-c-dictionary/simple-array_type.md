---
title: "simple-array"
---

# simple-array

import SimpleArrayType from './_simple-array_type.md';

<SimpleArrayType />

## Expanded Reference: simple-array

### The simple-array Type

A `simple-array` is an array that is not displaced to another array, has no fill pointer, and is not expressly adjustable. Most arrays created with plain `make-array` (without `:adjustable`, `:fill-pointer`, or `:displaced-to`) are simple arrays.

```lisp
;; Simple arrays -- created without special options
(typep (make-array 5) 'simple-array)
→ T

(typep (make-array '(2 3)) 'simple-array)
→ T

;; Literal vectors and strings are simple arrays
(typep #(1 2 3) 'simple-array)
→ T

(typep "hello" 'simple-array)
→ T
```

### Non-Simple Arrays

Arrays with fill pointers, adjustability, or displacement are not guaranteed to be simple arrays.

```lisp
;; Arrays with fill pointers are not simple
(typep (make-array 5 :fill-pointer 0) 'simple-array)
→ NIL

;; Explicitly adjustable arrays are not simple
(typep (make-array 5 :adjustable t) 'simple-array)
→ NIL  ; implementation-dependent
```

### Why Simple Arrays Matter

Simple arrays can often be accessed more efficiently by the compiler. Type declarations using `simple-array` (or subtypes like `simple-vector`, `simple-string`) can enable better optimization.

```lisp
;; simple-vector is a subtype of simple-array
(subtypep 'simple-vector 'simple-array)
→ T

;; simple-string is also a subtype
(subtypep 'simple-string 'simple-array)
→ T

;; simple-bit-vector as well
(subtypep 'simple-bit-vector 'simple-array)
→ T
```
