---
title: "boolean"
---

# boolean

import BooleanType from './_boolean_type.md';

<BooleanType />

## Expanded Reference: boolean

### The boolean Type

The type `boolean` contains exactly two elements: `t` and `nil`. It is equivalent to `(member t nil)`.

```lisp
(typep t 'boolean)
=> T

(typep nil 'boolean)
=> T

(typep 42 'boolean)
=> NIL

(typep :true 'boolean)
=> NIL
```

### Subtype Relationships

```lisp
(subtypep 'boolean 'symbol)
=> T
=> T

(subtypep 'null 'boolean)
=> T
=> T
```
