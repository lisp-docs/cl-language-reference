---
title: "array-element-type"
---

# array-element-type

import ArrayElementTypeFunction from './_array-element-type_function.md';

<ArrayElementTypeFunction />

## Expanded Reference: array-element-type

### Basic Usage

`array-element-type` returns a type specifier representing the actual element type of the array, which may be broader than what you requested due to array upgrading.

```lisp
;; General arrays have element type T
(array-element-type (make-array 5))
=> T

(array-element-type (vector 1 2 3))
=> T
```

### Specialized Arrays

For arrays created with `:element-type`, the actual element type depends on the implementation's upgrading rules.

```lisp
;; Strings have character element types
(array-element-type "hello")
=> CHARACTER

;; Bit vectors have element type BIT
(array-element-type #*10110)
=> BIT

;; Requested type may be upgraded
(array-element-type (make-array 4 :element-type 'bit))
=> BIT
```

### Implementation-Dependent Upgrading

Implementations may upgrade requested types. For instance, `(unsigned-byte 5)` might be upgraded to `(unsigned-byte 8)` or even `fixnum`.

```lisp
;; The actual element type may be broader than requested
(let ((a (make-array 4 :element-type '(unsigned-byte 8) :initial-element 0)))
  (subtypep '(unsigned-byte 8) (array-element-type a)))
=> T
=> T
```

### Checking Array Specialization

You can use `array-element-type` to determine whether an array is specialized for a particular type.

```lisp
(let ((general (make-array 3 :initial-element 0))
      (bits (make-array 3 :element-type 'bit :initial-element 0))
      (chars (make-array 3 :element-type 'character :initial-element #\a)))
  (list (array-element-type general)
        (array-element-type bits)
        (array-element-type chars)))
=> (T BIT CHARACTER)
```
