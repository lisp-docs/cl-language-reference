---
title: "listen"
---

# listen

import ListenFunction from './_listen_function.md';

<ListenFunction />

## Expanded Reference: listen

### Basic Usage

`listen` returns true if a character is immediately available from the input stream; otherwise returns false.

```lisp
;; A string input stream always has characters available until exhausted
(let ((s (make-string-input-stream "abc")))
  (list (listen s)
        (read-char s)
        (read-char s)
        (read-char s)
        (listen s)))
→ (T #\a #\b #\c NIL)
```

### After unread-char

A character put back with `unread-char` makes `listen` return true.

```lisp
(with-input-from-string (s "x")
  (read-char s)
  (let ((before (listen s)))
    (unread-char #\x s)
    (list before (listen s))))
→ (NIL T)
```

### End of File

At end of file, `listen` returns false.

```lisp
(listen (make-string-input-stream ""))
→ NIL
```

### Intended for Interactive Use

`listen` is primarily useful with interactive streams (e.g., keyboards) to check if the user has typed something without blocking. On non-interactive streams, it returns true unless at end of file.
