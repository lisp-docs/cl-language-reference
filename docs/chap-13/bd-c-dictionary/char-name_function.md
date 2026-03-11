---
title: "char-name"
---

# char-name

import CharNameFunction from './_char-name_function.md';

<CharNameFunction />

## Expanded Reference: char-name

### Named non-graphic characters

`char-name` returns the name of a character as a string, or NIL if the character has no name. Non-graphic characters are required to have names.

```lisp
(char-name #\Space)
=> "Space"
(char-name #\Newline)
=> "Newline"
(char-name #\Tab)
=> "Tab"
(char-name #\Return)
=> "Return"
```

### Graphic characters may or may not have names

Whether graphic characters (letters, digits, punctuation) have names is implementation-dependent. Most implementations return NIL for them.

```lisp
(char-name #\a)
;; => NIL or implementation-defined name
(char-name #\A)
;; => NIL or implementation-defined name
(char-name #\5)
;; => NIL or implementation-defined name
```

### The Space character has a name

The space character is the only standard graphic character that has a required name.

```lisp
(char-name #\ )
=> "Space"
(char-name #\Space)
=> "Space"
```

### Round-tripping with name-char

`char-name` and `name-char` are inverses for characters that have names.

```lisp
(name-char (char-name #\Space))
=> #\Space
(name-char (char-name #\Newline))
=> #\Newline

;; For characters with names, the round trip always works
(let ((name (char-name #\Space)))
  (when name
    (char= (name-char name) #\Space)))
=> T
```

### Listing names of characters in a string

You can inspect which characters in a string have names.

```lisp
(mapcar #'char-name (coerce (format nil "A B~%C") 'list))
;; => (NIL "Space" NIL "Newline" NIL) or implementation-dependent
```
