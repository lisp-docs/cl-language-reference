---
title: "character"
---

# character

import CharacterSystemClass from './_character_system-class.md';

<CharacterSystemClass />

## Expanded Reference: character (System Class)

### The character type

`character` is the system class for all character objects. Every character object is of type `character`.

```lisp
(typep #\a 'character)
=> T
(typep #\Space 'character)
=> T
(typep #\Newline 'character)
=> T
(typep "a" 'character)
=> NIL
(typep 65 'character)
=> NIL
```

### Type hierarchy

The `character` type has two subtypes that form an exhaustive partition: `base-char` and `extended-char`. Every character is either a base character or an extended character, but not both.

```lisp
(subtypep 'base-char 'character)
=> T
=> T
(subtypep 'extended-char 'character)
=> T
=> T
(subtypep 'standard-char 'character)
=> T
=> T
```

### Using character as a type specifier

The `character` type can be used in declarations, type checks, and as an array element type.

```lisp
(let ((ch #\x))
  (declare (type character ch))
  (characterp ch))
=> T

(make-array 5 :element-type 'character :initial-element #\x)
=> "xxxxx"
```

### Class precedence list

The class precedence list for `character` is: `character`, `t`.

```lisp
(typep #\a 't)
=> T
(typep #\a 'character)
=> T
```
