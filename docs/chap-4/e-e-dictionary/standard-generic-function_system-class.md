---
title: "standard-generic-function"
---

# standard-generic-function

import StandardGenericFunctionSystemClass from './_standard-generic-function_system-class.md';

<StandardGenericFunctionSystemClass />

## Expanded Reference: standard-generic-function

### The standard-generic-function System Class

`standard-generic-function` is the default class of generic functions created with `defgeneric` or `defmethod`.

```lisp
(defgeneric volume (shape))

(typep #'volume 'standard-generic-function)
=> T

(typep #'volume 'generic-function)
=> T
```
