---
title: "upgraded-array-element-type"
---

# upgraded-array-element-type

import UpgradedArrayElementTypeFunction from './_upgraded-array-element-type_function.md';

<UpgradedArrayElementTypeFunction />

## Expanded Reference: upgraded-array-element-type

### Basic Usage

`upgraded-array-element-type` returns the element type that the implementation would actually use for an array requested with the given type specifier. This reveals the implementation's type upgrading behavior.

```lisp
;; T is always upgraded to T
(upgraded-array-element-type 't)
→ T

;; BIT always upgrades to BIT
(upgraded-array-element-type 'bit)
→ BIT

;; CHARACTER upgrades to CHARACTER (or BASE-CHAR)
(upgraded-array-element-type 'character)
→ CHARACTER  ; implementation-dependent, could be BASE-CHAR
```

### Understanding Type Upgrading

Implementations often have a limited set of specialized array representations. Requested types are "upgraded" to the nearest available type.

```lisp
;; Requesting (unsigned-byte 4) might upgrade to (unsigned-byte 8) or wider
(let ((upgraded (upgraded-array-element-type '(unsigned-byte 4))))
  (subtypep '(unsigned-byte 4) upgraded))
→ T  ; the upgraded type is always a supertype

;; Requesting (unsigned-byte 8) -- common specialization
(upgraded-array-element-type '(unsigned-byte 8))
→ (UNSIGNED-BYTE 8)  ; implementation-dependent
```

### Relationship to array-element-type

`upgraded-array-element-type` tells you what type an array *would* have; `array-element-type` tells you what type an existing array *does* have.

```lisp
(let ((a (make-array 4 :element-type 'bit)))
  (equal (upgraded-array-element-type 'bit)
         (array-element-type a)))
→ T
```

### Practical Use: Checking Specialization Support

You can use this function to check if the implementation provides specialized storage for a given type.

```lisp
;; Check if single-float arrays are specialized
(let ((upgraded (upgraded-array-element-type 'single-float)))
  (if (eq upgraded t)
      :not-specialized
      :specialized))
→ :SPECIALIZED  ; implementation-dependent
```
