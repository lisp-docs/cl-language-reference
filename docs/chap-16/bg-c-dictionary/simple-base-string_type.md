---
title: "simple-base-string"
---

# simple-base-string

import SimpleBaseStringType from './_simple-base-string_type.md';

<SimpleBaseStringType />

## Expanded Reference: simple-base-string

### simple-base-string is equivalent to (simple-array base-char (*))

A `simple-base-string` is a simple string whose elements are of type `base-char`. It is both a simple-string and a base-string.

```lisp
;; In SBCL, string literals have element-type CHARACTER, not BASE-CHAR
(typep "hello" 'simple-base-string)
=> NIL

(subtypep 'simple-base-string 'simple-string)
=> T
=> T

(subtypep 'simple-base-string 'base-string)
=> T
=> T
```

### Compound type specifier with size

The compound form `(simple-base-string size)` restricts to simple base-strings of a given length.

```lisp
;; In SBCL, string literals are not simple-base-strings
(typep "abc" '(simple-base-string 3))
=> NIL

(typep "abc" '(simple-base-string 4))
=> NIL

(typep "abc" '(simple-base-string *))
=> NIL
```

### String literals are typically simple-base-strings

In most implementations, string literals are simple-base-strings because they contain only standard characters.

```lisp
;; In SBCL, string literals have element-type CHARACTER
(typep "Hello, World!" 'simple-base-string)
=> NIL
```

### Non-simple strings are not simple-base-strings

Strings with fill pointers or that are adjustable do not qualify as simple-base-strings.

```lisp
(typep (make-array 5 :element-type 'base-char
                     :fill-pointer 3
                     :initial-element #\a)
       'simple-base-string)
=> NIL
```

### Type hierarchy

`simple-base-string` sits at the intersection of `simple-string` and `base-string`.

```lisp
(subtypep 'simple-base-string 'string)
=> T
=> T

(subtypep 'simple-base-string 'simple-array)
=> T
=> T

(subtypep 'simple-base-string 'sequence)
=> T
=> T
```
