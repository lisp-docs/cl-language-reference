---
title: "array"
---

# array

import ArraySystemClass from './_array_system-class.md';

<ArraySystemClass />

## Expanded Reference: array

### The array Type in Type Specifiers

The `array` type specifier can be used to describe arrays with specific element types and dimensions.

```lisp
;; Check if something is an array
(typep (make-array '(2 3)) 'array)
→ T

(typep "hello" 'array)
→ T

(typep 42 'array)
→ NIL
```

### Parameterized Array Types

The `array` type can be parameterized by element type and dimensions.

```lisp
;; Any 2D array
(typep (make-array '(3 4)) '(array * 2))
→ T

;; A 1D array (vector) of any element type
(typep (vector 1 2 3) '(array * 1))
→ T

;; Array with specific dimension sizes
(typep (make-array '(2 3)) '(array * (2 3)))
→ T

(typep (make-array '(2 3)) '(array * (3 2)))
→ NIL
```

### Array Type Hierarchy

Arrays form a type hierarchy: `array` is the most general, with `vector`, `string`, `bit-vector`, and their simple variants as subtypes.

```lisp
;; All of these are arrays
(every #'arrayp
  (list (make-array 5)           ; simple vector
        (make-array '(2 3))      ; 2D array
        "hello"                  ; string
        #*10110                  ; bit vector
        (make-array '())))       ; 0D array
→ T
```

### Coercing with the Array Type

```lisp
;; Strings and bit vectors are specialized arrays
(typep "abc" '(array character (*)))
→ T

(typep #*101 '(array bit (*)))
→ T
```
