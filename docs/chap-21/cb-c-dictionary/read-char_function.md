---
title: "read-char"
---

# read-char

import ReadCharFunction from './_read-char_function.md';

<ReadCharFunction />

## Expanded Reference: read-char

### Basic Usage

`read-char` reads and returns one character from an input stream.

```lisp
(with-input-from-string (s "abc")
  (list (read-char s) (read-char s) (read-char s)))
→ (#\a #\b #\c)
```

### Handling End of File

By default, `read-char` signals an error at end of file. Pass `nil` for `eof-error-p` to return a custom value instead.

```lisp
(with-input-from-string (s "xy")
  (list (read-char s nil :eof)
        (read-char s nil :eof)
        (read-char s nil :eof)))
→ (#\x #\y :EOF)
```

### Iterating Over Characters

A common pattern is to read characters in a loop until end of file.

```lisp
(with-input-from-string (s "0123")
  (do ((c (read-char s) (read-char s nil 'the-end)))
      ((not (characterp c)) c)
    (format t "~S " c)))
; prints: #\0 #\1 #\2 #\3
→ THE-END
```

### Collecting Characters into a List

```lisp
(with-input-from-string (s "Hello")
  (loop for c = (read-char s nil nil)
        while c
        collect c))
→ (#\H #\e #\l #\l #\o)
```
