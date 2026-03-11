---
title: "char-code"
---

# char-code

import CharCodeFunction from './_char-code_function.md';

<CharCodeFunction />

## Expanded Reference: char-code

### Getting the character code of common characters

`char-code` returns the implementation-dependent numeric code for a character. Most implementations use ASCII/Unicode code points.

```lisp
;; On ASCII-based implementations:
(char-code #\A)
=> 65
(char-code #\a)
=> 97
(char-code #\0)
=> 48
(char-code #\Space)
=> 32
```

### Character codes are bounded by char-code-limit

The returned code is always a non-negative integer less than `char-code-limit`.

```lisp
(< (char-code #\a) char-code-limit)
=> T
(< (char-code #\Z) char-code-limit)
=> T
(integerp (char-code #\x))
=> T
(>= (char-code #\x) 0)
=> T
```

### Round-tripping with code-char

`char-code` and `code-char` are inverse operations for valid character codes.

```lisp
(code-char (char-code #\A))
=> #\A
(code-char (char-code #\Space))
=> #\Space
(char= #\z (code-char (char-code #\z)))
=> T
```

### Comparing characters by code

Character codes reflect the implementation's ordering. For standard characters, the ordering is consistent with `char<`.

```lisp
(< (char-code #\A) (char-code #\B))
=> T
(< (char-code #\a) (char-code #\z))
=> T
(< (char-code #\0) (char-code #\9))
=> T
```

### Mapping characters to their codes

You can use `char-code` with `map` to get numeric codes for a string of characters.

```lisp
(map 'list #'char-code "Hello")
=> (72 101 108 108 111)
```
