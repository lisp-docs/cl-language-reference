---
title: "readtablep"
---

# readtablep

import ReadtablepFunction from './_readtablep_function.md';

<ReadtablepFunction />

## Expanded Reference: readtablep

### Basic type checking

`readtablep` returns true if its argument is a readtable object, and false otherwise.

```lisp
(readtablep *readtable*)
; => T

(readtablep (copy-readtable))
; => T
```

### Non-readtable objects return NIL

```lisp
(readtablep 42)
; => NIL

(readtablep "hello")
; => NIL

(readtablep nil)
; => NIL

;; The symbol *readtable* is not itself a readtable
(readtablep '*readtable*)
; => NIL
```

### Equivalence to TYPEP

`readtablep` is equivalent to `(typep object 'readtable)`.

```lisp
(let ((rt (copy-readtable)))
  (list (readtablep rt)
        (typep rt 'readtable)))
; => (T T)

(list (readtablep :keyword)
      (typep :keyword 'readtable))
; => (NIL NIL)
```
