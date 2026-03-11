---
title: "alphanumericp"
---

# alphanumericp

import AlphanumericpFunction from './_alphanumericp_function.md';

<AlphanumericpFunction />

## Expanded Reference: alphanumericp

### Basic alphanumeric tests

`alphanumericp` returns true if the character is either alphabetic or a digit.

```lisp
(alphanumericp #\a)
=> T
(alphanumericp #\Z)
=> T
(alphanumericp #\5)
=> T
(alphanumericp #\0)
=> T
```

### Non-alphanumeric characters

Punctuation, whitespace, and non-graphic characters return false.

```lisp
(alphanumericp #\#)
=> NIL
(alphanumericp #\Space)
=> NIL
(alphanumericp #\Newline)
=> NIL
(alphanumericp #\-)
=> NIL
(alphanumericp #\!)
=> NIL
```

### Equivalence with alpha-char-p and digit-char-p

`alphanumericp` is equivalent to testing whether a character satisfies `alpha-char-p` or `digit-char-p`.

```lisp
(defun my-alphanumericp (char)
  (or (alpha-char-p char)
      (digit-char-p char)))

(my-alphanumericp #\a)
=> T
(my-alphanumericp #\7)
=> 7
(my-alphanumericp #\!)
=> NIL
```

### Validating identifiers

A common use is checking whether strings contain only alphanumeric characters, for example when validating user input.

```lisp
(every #'alphanumericp "Hello123")
=> T
(every #'alphanumericp "Hello World")
=> NIL
(every #'alphanumericp "no-hyphens")
=> NIL
```

### Filtering a string to alphanumeric characters only

```lisp
(remove-if-not #'alphanumericp "abc-123_def!456")
=> "abc123def456"
```
