---
title: "method"
---

# method

import MethodSystemClass from './_method_system-class.md';

<MethodSystemClass />

## Expanded Reference: method

### The method System Class

`method` is the superclass of all method objects. Methods are created by `defmethod` and are associated with generic functions.

```lisp
(defgeneric greet (obj))
;; => #<STANDARD-GENERIC-FUNCTION GREET>

(defmethod greet ((obj string))
  (format nil "Hello, ~A!" obj))
;; => #<STANDARD-METHOD GREET (STRING)>

(greet "world")
;; => "Hello, world!"
```

### Inspecting Methods

```lisp
(length (generic-function-methods #'greet))
;; => 1
```
