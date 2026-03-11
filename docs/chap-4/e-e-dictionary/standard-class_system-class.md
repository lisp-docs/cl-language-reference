---
title: "standard-class"
---

# standard-class

import StandardClassSystemClass from './_standard-class_system-class.md';

<StandardClassSystemClass />

## Expanded Reference: standard-class

### The standard-class Metaclass

`standard-class` is the default metaclass for classes defined with `defclass`.

```lisp
(defclass my-widget () ())
==> #<STANDARD-CLASS MY-WIDGET>

(typep (find-class 'my-widget) 'standard-class)
=> T
```

### Distinguished from Other Metaclasses

```lisp
;; User-defined classes have metaclass standard-class:
(class-of (find-class 'my-widget))
;; ==> #<STANDARD-CLASS STANDARD-CLASS>

;; Structure classes have metaclass structure-class:
(defstruct my-struct a b)
(class-of (find-class 'my-struct))
;; ==> #<STANDARD-CLASS STRUCTURE-CLASS>
```
