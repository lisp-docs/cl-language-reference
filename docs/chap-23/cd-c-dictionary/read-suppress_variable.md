---
title: "read-suppress"
---

# \*read-suppress\*

import ReadSuppressVariable from './_read-suppress_variable.md';

<ReadSuppressVariable />

## Expanded Reference: \*read-suppress\*

### Default value

`*read-suppress*` is `nil` by default, meaning the reader operates normally.

```lisp
*read-suppress*
; => NIL
```

### When true, read returns NIL

When `*read-suppress*` is true, `read` and `read-from-string` parse the printed representation of an object (skipping over it) but always return `nil` instead of constructing the object.

```lisp
(let ((*read-suppress* t))
  (read-from-string "(a b c)"))
; => NIL
; => 7

(let ((*read-suppress* t))
  (read-from-string "123"))
; => NIL
; => 3
```

### Suppressing errors from non-portable syntax

The primary purpose of `*read-suppress*` is to support `#+` and `#-` read-time conditionals. When a feature expression is not satisfied, the reader must skip over the following form even if it contains syntax that is not valid in the current implementation.

```lisp
(let ((*read-suppress* t))
  (values (read-from-string "#P(:type :lisp)")))
; => NIL

(let ((*read-suppress* t))
  (values (read-from-string "#c(1.0 2.0)")))
; => NIL
```

### Multiple suppressed forms

You can use `*read-suppress*` to skip multiple forms in sequence.

```lisp
(let ((*read-suppress* t))
  (mapcar (lambda (s) (values (read-from-string s)))
          '("#(foo bar baz)" "#S(INTEGER)" "#\\GARBAGE")))
; => (NIL NIL NIL)
```

### Parentheses and strings still delimit correctly

Even under `*read-suppress*`, parentheses still delimit lists and strings still require closing quotes. This ensures the reader can properly skip over balanced expressions.

```lisp
(let ((*read-suppress* t))
  (with-input-from-string (s "(unknown-stuff 1 2 3) hello")
    (read s)           ; skips (unknown-stuff 1 2 3) returning NIL
    (let ((*read-suppress* nil))
      (read s))))      ; reads hello normally
; => HELLO
```
