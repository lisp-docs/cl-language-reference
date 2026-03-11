---
title: "nil"
---

# nil

import NilType from './_nil_type.md';

<NilType />

## Expanded Reference: nil (Type)

### The Empty Type

As a type specifier, `nil` denotes the empty type -- no object is of type `nil`.

```lisp
(typep nil nil)
=> NIL

(typep 42 nil)
=> NIL

(typep t nil)
=> NIL
```

### Subtype of Everything

The `nil` type is a subtype of every type.

```lisp
(subtypep nil 'integer)
=> T
=> T

(subtypep nil 'string)
=> T
=> T

(subtypep nil t)
=> T
=> T
```

### Coercing to nil Always Fails

```lisp
(handler-case (coerce 42 nil)
  (type-error () "type-error signaled"))
=> "type-error signaled"
```
