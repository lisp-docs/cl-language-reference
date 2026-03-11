---
title: "structure-object"
---

# structure-object

import StructureObjectClass from './_structure-object_class.md';

<StructureObjectClass />

## Expanded Reference: structure-object

### The structure-object Class

`structure-object` is the superclass of all structures defined by `defstruct` (when no `:type` option is used). Every structure instance is of type `structure-object`.

```lisp
(defstruct point x y)
=> POINT

(typep (make-point) 'structure-object)
=> T
```

### Subtype Relationships

```lisp
(subtypep 'point 'structure-object)
;; => T
;; => T

(subtypep 'structure-object t)
=> T
=> T
```
