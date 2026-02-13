---
title: "built-in-class"
---

# built-in-class

import BuiltInClassSystemClass from './_built-in-class_system-class.md';

<BuiltInClassSystemClass />

## Expanded Reference: built-in-class

### The built-in-class Metaclass

`built-in-class` is the metaclass of classes whose instances are handled with special, optimized representations by the implementation. Examples include `integer`, `string`, `cons`, and `character`.

```lisp
(typep (find-class 'integer) 'built-in-class)
;; => T  (implementation-dependent, but typically true)

(typep (find-class 'cons) 'built-in-class)
;; => T
```

### Not a CLOS standard-class

Built-in classes cannot be subclassed with `defclass` in a portable way. They have a different metaclass than user-defined classes.

```lisp
(class-of (find-class 'integer))
;; => #<STANDARD-CLASS BUILT-IN-CLASS>

(class-of (find-class 'standard-object))
;; => #<STANDARD-CLASS STANDARD-CLASS>
```
