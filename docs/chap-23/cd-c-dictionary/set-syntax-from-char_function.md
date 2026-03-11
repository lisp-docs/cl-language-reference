---
title: "set-syntax-from-char"
---

# set-syntax-from-char

import SetSyntaxFromCharFunction from './_set-syntax-from-char_function.md';

<SetSyntaxFromCharFunction />

## Expanded Reference: set-syntax-from-char

### Copying syntax from one character to another

`set-syntax-from-char` makes the syntax of `to-char` be the same as the syntax of `from-char`. This includes the syntax type and, if `from-char` is a macro character, its reader macro function.

```lisp
;; Give z the syntax of the single-quote character
(let ((*readtable* (copy-readtable)))
  (set-syntax-from-char #\z #\')
  (with-input-from-string (s "zhello")
    (read s)))
=> (QUOTE HELLO)
```

### Making a character behave as a comment

You can copy the syntax of `;` (semicolon) to another character to make it act as a line comment.

```lisp
(let ((*readtable* (copy-readtable)))
  (set-syntax-from-char #\% #\;)
  (with-input-from-string (s "hello % this is a comment
world")
    (list (read s) (read s))))
=> (HELLO WORLD)
```

### Making a digit a comment character

A more dramatic example: making a digit act as a comment character. The rest of the line after it is ignored.

```lisp
(let ((*readtable* (copy-readtable)))
  (set-syntax-from-char #\7 #\;)
  (with-input-from-string (s "12357 this is ignored
89")
    (list (read s) (read s))))
=> (1235 89)
```

### Copying from a specific readtable

The fourth argument `from-readtable` specifies which readtable to copy the syntax from. By default it is the standard readtable (`nil`).

```lisp
;; Copy the standard syntax of ( to a custom readtable
(let ((rt1 (copy-readtable))
      (rt2 (copy-readtable)))
  ;; Modify ( in rt1 somehow, then restore it from the standard readtable
  (set-syntax-from-char #\( #\( rt1 nil)
  ;; ( in rt1 now has standard behavior
  (not (null (get-macro-character #\( rt1))))
=> T
```

### Caveat: macro definitions look for the original character

When copying the macro definition from a character like `"`, the copied function still looks for the same terminating character. Copying `"` to `|` would make `|` start a string that ends at the next `"`, not at the next `|`.

```lisp
;; Copying " to another character: the terminator behavior
;; is implementation-dependent
(let ((*readtable* (copy-readtable)))
  (set-syntax-from-char #\^ #\")
  (with-input-from-string (s "^hello^")
    (read s)))
=> "hello"
```
