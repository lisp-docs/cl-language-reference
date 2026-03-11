---
title: "peek-char"
---

# peek-char

import PeekCharFunction from './_peek-char_function.md';

<PeekCharFunction />

## Expanded Reference: peek-char

### Basic Peek (peek-type NIL)

With no `peek-type` or `nil`, `peek-char` returns the next character without consuming it.

```lisp
(with-input-from-string (s "abc")
  (list (peek-char nil s)
        (read-char s)
        (peek-char nil s)
        (read-char s)))
=> (#\a #\a #\b #\b)
```

### Skipping Whitespace (peek-type T)

With `peek-type` of `t`, `peek-char` skips whitespace characters and returns the next non-whitespace character.

```lisp
(with-input-from-string (s "   hello")
  (list (peek-char t s)
        (read-char s)))
=> (#\h #\h)
```

### Skipping to a Specific Character

When `peek-type` is a character, `peek-char` skips until it finds that character.

```lisp
(with-input-from-string (s "abc:def")
  (list (peek-char #\: s)
        (read-char s)
        (read-char s)))
=> (#\: #\: #\d)
```

### Combined Peek Types in One Stream

```lisp
(with-input-from-string (s " 1 2 3 4 5")
  (list (peek-char t s)          ; skip whitespace, peek at #\1
        (peek-char #\4 s)        ; skip to #\4
        (peek-char nil s)))      ; peek at #\4 again (still there)
=> (#\1 #\4 #\4)
```

### End of File Handling

```lisp
(with-input-from-string (s "ab")
  (read-char s)
  (read-char s)
  (peek-char nil s nil :eof))
=> :EOF
```
