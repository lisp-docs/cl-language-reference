---
title: "simple-string"
---

# simple-string

import SimpleStringType from './_simple-string_type.md';

<SimpleStringType />

## Expanded Reference: simple-string

### A simple-string is a string that is a simple-array

A `simple-string` is a string that is not displaced, has no fill pointer, and is not adjustable. String literals and strings from `make-string` are simple strings.

```lisp
(typep "hello" 'simple-string)
→ T

(typep (make-string 5 :initial-element #\x) 'simple-string)
→ T
```

### Compound type specifier with size

The compound form `(simple-string size)` denotes simple strings of a specific length.

```lisp
(typep "hello" '(simple-string 5))
→ T

(typep "hello" '(simple-string 3))
→ NIL

(typep "hello" '(simple-string *))
→ T
```

### Non-simple strings

Strings with fill pointers, adjustable strings, and displaced strings are not simple strings.

```lisp
(typep (make-array 5 :element-type 'character
                     :fill-pointer 3
                     :initial-element #\a)
       'simple-string)
→ NIL

(typep (make-array 5 :element-type 'character
                     :adjustable t
                     :initial-element #\a)
       'simple-string)
→ NIL
```

### Type hierarchy

`simple-string` is a subtype of both `string` and `simple-array`.

```lisp
(subtypep 'simple-string 'string)
→ T, T

(subtypep 'simple-string 'simple-array)
→ T, T

(subtypep 'simple-string 'vector)
→ T, T
```

### Using simple-string-p to test

The function `simple-string-p` is the predicate for this type.

```lisp
(simple-string-p "hello")
→ T

(simple-string-p (make-array 5 :element-type 'character
                               :fill-pointer t
                               :initial-element #\a))
→ NIL
```
