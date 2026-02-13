---
title: "unread-char"
---

# unread-char

import UnreadCharFunction from './_unread-char_function.md';

<UnreadCharFunction />

## Expanded Reference: unread-char

### Basic Usage

`unread-char` puts a character back onto the front of an input stream so it will be the next character read. The character must be the last character that was read from the stream.

```lisp
(with-input-from-string (s "abc")
  (let ((c (read-char s)))
    (unread-char c s)
    (list c (read-char s))))
→ (#\a #\a)
```

### One-Character Lookahead

`unread-char` is typically used for implementing parsers that need one-character lookahead.

```lisp
(with-input-from-string (s "0123")
  (dotimes (i 6)
    (let ((c (read-char s)))
      (if (evenp i)
          (format t "~&~S ~S~%" i c)
          (unread-char c s)))))
; prints:
; 0 #\0
; 2 #\1
; 4 #\2
→ NIL
```

### Reading Until a Delimiter

A common pattern is to read characters and put back the delimiter.

```lisp
(with-input-from-string (s "hello world")
  (let ((chars (loop for c = (read-char s nil nil)
                     while (and c (char/= c #\Space))
                     collect c
                     finally (when c (unread-char c s)))))
    (list (coerce chars 'string)
          (read-char s nil nil))))
→ ("hello" #\Space)
```

### Constraint: Only One Unread

You cannot call `unread-char` twice consecutively without an intervening read operation.

```lisp
;; This is correct: read, unread, read, unread
(with-input-from-string (s "ab")
  (let ((c1 (read-char s)))
    (unread-char c1 s)
    (let ((c2 (read-char s)))
      (list c1 c2))))
→ (#\a #\a)
```
