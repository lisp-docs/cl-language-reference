---
title: "char-int"
---

# char-int

import CharIntFunction from './_char-int_function.md';

<CharIntFunction />

## Expanded Reference: char-int

### Basic usage

`char-int` returns a non-negative integer encoding of a character. The encoding is implementation-dependent.

```lisp
(integerp (char-int #\A))
=> T
(>= (char-int #\A) 0)
=> T
```

### Relationship to char-code

For characters with no implementation-defined attributes, `char-int` and `char-code` return the same value.

```lisp
(= (char-int #\A) (char-code #\A))
=> T
(= (char-int #\Space) (char-code #\Space))
=> T
```

### char= equivalence via char-int

Two characters are `char=` if and only if their `char-int` values are equal. This makes `char-int` a complete encoding that distinguishes all characters that `char=` can distinguish.

```lisp
(= (char-int #\a) (char-int #\a))
=> T
(= (char-int #\a) (char-int #\A))
=> NIL
(= (char-int #\a) (char-int #\b))
=> NIL
```

### Using char-int for hashing

Since `char-int` provides a unique integer for each distinct character, it can be useful for creating character-based hash computations.

```lisp
(let ((chars "Hello"))
  (reduce #'+ (map 'list #'char-int chars)))
;; => implementation-dependent
```
