---
title: "base-char"
---

# base-char

import BaseCharType from './_base-char_type.md';

<BaseCharType />

## Expanded Reference: base-char

### Type checking with base-char

`base-char` is the type of characters that can be elements of a base string. All standard characters are base characters.

```lisp
(typep #\a 'base-char) ; → T
(typep #\Z 'base-char) ; → T
(typep #\5 'base-char) ; → T
(typep #\Space 'base-char) ; → T
```

### Relationship to character and standard-char

`standard-char` is a subtype of `base-char`, which is a subtype of `character`. In many implementations, `base-char` is the same type as `character`.

```lisp
(subtypep 'standard-char 'base-char) ; → T, T
(subtypep 'base-char 'character)     ; → T, T
```

### Base strings use base-char elements

The element type of a base string is `base-char`. This is the connection between the character type and string storage.

```lisp
(typep "hello" 'base-string)                    ; → T
(array-element-type (make-string 5))             ; → BASE-CHAR (implementation-dependent)
(upgraded-array-element-type 'standard-char)     ; → BASE-CHAR (implementation-dependent)
```

### Using base-char as a type specifier

You can use `base-char` in type declarations and `coerce` operations.

```lisp
(let ((chars (make-array 3 :element-type 'base-char
                           :initial-contents '(#\a #\b #\c))))
  (values (aref chars 0)
          (array-element-type chars)))
; → #\a
; → BASE-CHAR (implementation-dependent)
```
