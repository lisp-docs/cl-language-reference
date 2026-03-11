---
title: "generic-function"
---

# generic-function

import GenericFunctionSystemClass from './_generic-function_system-class.md';

<GenericFunctionSystemClass />

## Expanded Reference: generic-function

### The generic-function System Class

`generic-function` is the type of all generic function objects. Generic functions dispatch to methods based on the classes of their arguments.

```lisp
(defgeneric area (shape))

(typep #'area 'generic-function)
=> T

(typep #'area 'function)
=> T
```

### Ordinary Functions Are Not Generic

```lisp
(typep #'car 'generic-function)
=> NIL
```
