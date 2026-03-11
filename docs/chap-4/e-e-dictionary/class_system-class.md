---
title: "class"
---

# class

import ClassSystemClass from './_class_system-class.md';

<ClassSystemClass />

## Expanded Reference: class (System Class)

### The class Metaclass

`class` is the type of all class objects. It is the root of the metaclass hierarchy.

```lisp
(typep (find-class 'integer) 'class)
=> T

(typep (find-class 't) 'class)
=> T
```

### Finding Classes

```lisp
(find-class 'string)
==> #<BUILT-IN-CLASS STRING>

(class-name (find-class 'string))
=> STRING
```
