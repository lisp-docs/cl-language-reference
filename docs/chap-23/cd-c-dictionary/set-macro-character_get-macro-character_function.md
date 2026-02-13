---
title: "set-macro-character, get-macro-character"
---

# set-macro-character, get-macro-character

import SetMacroCharacterFunction from './_set-macro-character_get-macro-character_function.md';

<SetMacroCharacterFunction />

## Expanded Reference: set-macro-character, get-macro-character

### Querying existing macro characters

`get-macro-character` returns two values: the reader macro function associated with a character (or `nil` if it is not a macro character), and whether it is non-terminating.

```lisp
;; The single-quote is a standard terminating macro character
(multiple-value-bind (fn non-term-p)
    (get-macro-character #\')
  (list (not (null fn)) non-term-p))
; => (T NIL)

;; The semicolon is a standard terminating macro character
(not (null (get-macro-character #\;)))
; => T

;; A letter is not a macro character
(get-macro-character #\a)
; => NIL
```

### Defining a simple reader macro

`set-macro-character` installs a reader macro function for a character. The function receives the stream and the character that triggered it.

```lisp
;; Define a reader macro that makes ! read the next object and wrap it in (not ...)
(let ((*readtable* (copy-readtable)))
  (set-macro-character #\!
    (lambda (stream char)
      (declare (ignore char))
      (list 'not (read stream t nil t))))
  (with-input-from-string (s "!x")
    (read s)))
; => (NOT X)
```

### Implementing a single-quote-like reader macro

Here is an example of how the `'` (single-quote) reader macro could be defined.

```lisp
(let ((*readtable* (copy-readtable)))
  (set-macro-character #\'
    (lambda (stream char)
      (declare (ignore char))
      (list 'quote (read stream t nil t))))
  (with-input-from-string (s "'hello")
    (read s)))
; => (QUOTE HELLO)
```

### Terminating vs. non-terminating macro characters

A terminating macro character ends a token when encountered. A non-terminating macro character does not end tokens (like `#`). Pass `t` as the third argument to make a non-terminating macro character.

```lisp
(let ((*readtable* (copy-readtable)))
  ;; Terminating: ends a token
  (set-macro-character #\!
    (lambda (stream char)
      (declare (ignore stream char))
      :bang)
    nil)  ; terminating (default)
  (with-input-from-string (s "abc!def")
    (list (read s) (read s))))
; => (ABC :BANG)
```

### Specifying a readtable

Both functions accept an optional readtable argument. This lets you install or query macro characters in a readtable other than the current one.

```lisp
(let ((rt (copy-readtable)))
  (set-macro-character #\@
    (lambda (stream char)
      (declare (ignore char))
      (list 'at (read stream t nil t)))
    nil
    rt)
  ;; Query the macro character in that specific readtable
  (not (null (get-macro-character #\@ rt))))
; => T
```
