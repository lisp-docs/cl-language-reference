---
title: "t"
---

# t

import TSystemClass from './_t_system-class.md';

<TSystemClass />

## Expanded Reference: t (System Class)

### The Universal Supertype

As a type specifier, `t` denotes the set of all objects. Every object is of type `t`.

```lisp
(typep 42 t)
=> T

(typep "hello" t)
=> T

(typep nil t)
=> T

(typep #'car t)
=> T
```

### Every Type Is a Subtype of t

```lisp
(subtypep 'integer t)
=> T
=> T

(subtypep 'string t)
=> T
=> T

(subtypep nil t)
=> T
=> T
```

### t as a Class

`t` is also the name of a class -- the root of the class hierarchy.

```lisp
(find-class t)
==> #<BUILT-IN-CLASS T>

(class-name (find-class t))
=> T
```
