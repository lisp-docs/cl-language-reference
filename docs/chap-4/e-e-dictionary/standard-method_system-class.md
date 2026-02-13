---
title: "standard-method"
---

# standard-method

import StandardMethodSystemClass from './_standard-method_system-class.md';

<StandardMethodSystemClass />

## Expanded Reference: standard-method

### The standard-method System Class

`standard-method` is the default class of method objects created by `defmethod`. It is a subclass of `method`.

```lisp
(defgeneric describe-it (obj))

(defmethod describe-it ((obj number))
  (format nil "~A is a number" obj))

(typep (first (generic-function-methods #'describe-it))
       'standard-method)
;; => T
```
