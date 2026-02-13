---
title: "function"
---

# function

import FunctionSystemClass from './_function_system-class.md';

<FunctionSystemClass />

## Expanded Reference: function (System Class)

### The function Type

All function objects are of type `function`. This includes named functions, lambda closures, and compiled functions.

```lisp
(typep #'car 'function)
;; => T

(typep (lambda (x) x) 'function)
;; => T

(typep #'+ 'function)
;; => T
```

### Non-Functions

```lisp
(typep 'car 'function)
;; => NIL  (a symbol is not a function)

(typep '(lambda (x) x) 'function)
;; => NIL  (a list is not a function)
```

### Subtype Relationships

```lisp
(subtypep 'compiled-function 'function)
;; => T, T

(subtypep 'function t)
;; => T, T
```
