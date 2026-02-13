---
title: "structure-class"
---

# structure-class

import StructureClassSystemClass from './_structure-class_system-class.md';

<StructureClassSystemClass />

## Expanded Reference: structure-class

### The structure-class Metaclass

`structure-class` is the metaclass of classes created by `defstruct` (when no `:type` option is used).

```lisp
(defstruct color r g b)
;; => COLOR

(typep (find-class 'color) 'structure-class)
;; => T
```

### Distinguishing from standard-class

```lisp
(defclass my-object () ())
;; => #<STANDARD-CLASS MY-OBJECT>

(typep (find-class 'my-object) 'structure-class)
;; => NIL

(typep (find-class 'color) 'standard-class)
;; => NIL
```
