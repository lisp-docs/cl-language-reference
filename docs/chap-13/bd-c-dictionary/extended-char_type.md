---
title: "extended-char"
---

# extended-char

import ExtendedCharType from './_extended-char_type.md';

<ExtendedCharType />

## Expanded Reference: extended-char

### The extended-char type

`extended-char` is a type equivalent to `(and character (not base-char))`. It represents characters that are not base characters. In many implementations where `base-char` and `character` are the same type, `extended-char` has no members.

```lisp
(subtypep 'extended-char 'character)
=> T
=> T
```

### Testing for extended characters

Whether any characters are of type `extended-char` depends on the implementation.

```lisp
;; In implementations where base-char = character:
(typep #\a 'extended-char)
=> NIL

;; The type might be empty:
(subtypep 'extended-char nil)
;; => implementation-dependent
```

### Exhaustive partition of character

The types `base-char` and `extended-char` form an exhaustive partition of `character`. Every character is exactly one of these two types.

```lisp
;; For any character ch, exactly one of these is true:
(let ((ch #\A))
  (or (typep ch 'base-char)
      (typep ch 'extended-char)))
=> T

(let ((ch #\A))
  (and (typep ch 'base-char)
       (typep ch 'extended-char)))
=> NIL
```

### Relationship with strings

Extended characters cannot be elements of base strings. They require a string type with a broader element type.

```lisp
;; Base strings only hold base-char elements:
(subtypep 'base-char
          (array-element-type (make-string 1)))
;; => implementation-dependent
```
