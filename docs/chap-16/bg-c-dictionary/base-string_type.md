---
title: "base-string"
---

# base-string

import BaseStringType from './_base-string_type.md';

<BaseStringType />

## Expanded Reference: base-string

### base-string is equivalent to (vector base-char)

A `base-string` is a string whose elements are of type `base-char`. It is the most efficient string representation for standard characters.

```lisp
(typep "hello" 'base-string)
→ T

(subtypep 'base-string 'string)
→ T, T
```

### Type checking with the compound type specifier

The compound form `(base-string size)` specifies a base-string of a particular length.

```lisp
(typep "abc" '(base-string 3))
→ T

(typep "abc" '(base-string 5))
→ NIL

(typep "abc" '(base-string *))
→ T
```

### Relationship to other string types

`base-string` is a subtype of `string` and a supertype of `simple-base-string`.

```lisp
(subtypep 'base-string 'string)
→ T, T

(subtypep 'simple-base-string 'base-string)
→ T, T

(subtypep 'base-string 'vector)
→ T, T
```

### Creating base-strings with make-string

`make-string` with `:element-type 'base-char` creates a simple base-string.

```lisp
(let ((s (make-string 4 :initial-element #\Z :element-type 'base-char)))
  (list s (typep s 'base-string)))
→ ("ZZZZ" T)
```
