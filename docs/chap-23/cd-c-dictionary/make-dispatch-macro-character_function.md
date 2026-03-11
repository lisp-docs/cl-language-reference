---
title: "make-dispatch-macro-character"
---

# make-dispatch-macro-character

import MakeDispatchMacroCharacterFunction from './_make-dispatch-macro-character_function.md';

<MakeDispatchMacroCharacterFunction />

## Expanded Reference: make-dispatch-macro-character

### Creating a dispatch macro character

`make-dispatch-macro-character` designates a character as a dispatching macro character. After calling it, you can define sub-characters using `set-dispatch-macro-character`.

```lisp
(let ((*readtable* (copy-readtable)))
  ;; Make ! a dispatch macro character
  (make-dispatch-macro-character #\!)
  ;; Verify it is now a macro character
  (not (null (get-macro-character #\!))))
=> T
```

### Defining sub-character handlers

After making a character a dispatch character, use `set-dispatch-macro-character` to assign behavior to sub-characters. The dispatch function receives the stream, the sub-character, and the optional numeric argument.

```lisp
(let ((*readtable* (copy-readtable)))
  (make-dispatch-macro-character #\!)
  (set-dispatch-macro-character #\! #\k
    (lambda (stream sub-char arg)
      (declare (ignore sub-char arg))
      (let ((sym (read stream t nil t)))
        (list 'keyword sym))))
  (with-input-from-string (s "!kfoo")
    (read s)))
=> (KEYWORD FOO)
```

### Terminating vs. non-terminating dispatch characters

By default, `make-dispatch-macro-character` creates a terminating macro character. Pass `t` for `non-terminating-p` to make it non-terminating, meaning it can appear within a symbol token without ending it.

```lisp
(let ((*readtable* (copy-readtable)))
  ;; Terminating (default): ends a token
  (make-dispatch-macro-character #\! nil)
  (set-dispatch-macro-character #\! #\t
    (lambda (s c a) (declare (ignore s c a)) :bang))
  (with-input-from-string (s "abc!tdef")
    (list (read s) (read s))))
=> (ABC :BANG)
;; Note: "def" is still in the stream as a separate token
```

### The # character is a built-in dispatch macro character

The standard `#` character is already a dispatching macro character in the standard readtable. You do not need to call `make-dispatch-macro-character` on it; you can directly use `set-dispatch-macro-character` to add or modify sub-character handlers.

```lisp
;; # is already a dispatch macro character
(let ((*readtable* (copy-readtable)))
  (set-dispatch-macro-character #\# #\!
    (lambda (stream sub-char arg)
      (declare (ignore sub-char arg))
      (list 'shebang (read stream t nil t))))
  (with-input-from-string (s "#!test")
    (read s)))
=> (SHEBANG TEST)
```
