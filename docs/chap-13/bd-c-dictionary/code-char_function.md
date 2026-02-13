---
title: "code-char"
---

# code-char

import CodeCharFunction from './_code-char_function.md';

<CodeCharFunction />

## Expanded Reference: code-char

### Converting a code to a character

`code-char` returns the character with the given character code, or NIL if no such character exists.

```lisp
;; On ASCII-based implementations:
(code-char 65) ; → #\A
(code-char 97) ; → #\a
(code-char 48) ; → #\0
(code-char 32) ; → #\Space
```

### Round-tripping with char-code

`code-char` and `char-code` are inverse operations for valid character codes.

```lisp
(code-char (char-code #\A))     ; → #\A
(code-char (char-code #\Space)) ; → #\Space
(char-code (code-char 65))      ; → 65 (on ASCII-based implementations)
```

### Invalid codes return NIL

If the code does not correspond to any character, `code-char` returns NIL rather than signaling an error.

```lisp
;; Codes at or above char-code-limit are not valid character codes:
;; (code-char char-code-limit) would not be a valid call since
;; char-code-limit is not a character code

;; Negative numbers are not valid character codes and should not be passed
```

### Building a character range

You can use `code-char` with `char-code` to iterate over a range of characters.

```lisp
(loop for code from (char-code #\A) to (char-code #\Z)
      collect (code-char code))
; → (#\A #\B #\C #\D #\E #\F #\G #\H #\I #\J #\K #\L #\M
;    #\N #\O #\P #\Q #\R #\S #\T #\U #\V #\W #\X #\Y #\Z)
```

### Generating a string from character codes

```lisp
(map 'string #'code-char '(72 101 108 108 111))
; → "Hello"  (on ASCII-based implementations)
```
