---
title: "character"
---

# character

import CharacterFunction from './_character_function.md';

<CharacterFunction />

## Expanded Reference: character

### Converting a character to itself

When given a character object, `character` simply returns it.

```lisp
(character #\a) ; → #\a
(character #\Z) ; → #\Z
(character #\Space) ; → #\Space
```

### Converting a single-character string

A string of length one is a valid character designator.

```lisp
(character "a") ; → #\a
(character "Z") ; → #\Z
(character " ") ; → #\Space
```

### Converting a symbol with a single-character name

A symbol whose name is a single character is also a valid character designator. Note that symbol names are typically uppercase by default.

```lisp
(character 'a) ; → #\A
(character 'z) ; → #\Z
```

### Invalid designators signal an error

Multi-character strings, multi-character symbol names, and numbers are not valid character designators.

```lisp
;; These signal errors:
;; (character "abc")   ; error: not a character designator
;; (character 65)      ; error: not a character designator
;; (character 'apple)  ; error: not a character designator
```

### Equivalence with coerce

The `character` function is equivalent to `(coerce object 'character)`.

```lisp
(eql (character "x") (coerce "x" 'character)) ; → T
(eql (character #\y) (coerce #\y 'character))  ; → T
(eql (character 'z) (coerce 'z 'character))    ; → T
```
