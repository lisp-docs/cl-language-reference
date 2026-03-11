---
title: "name-char"
---

# name-char

import NameCharFunction from './_name-char_function.md';

<NameCharFunction />

## Expanded Reference: name-char

### Looking up characters by name

`name-char` returns the character object whose name matches the given string. The lookup is case-insensitive.

```lisp
(name-char "Space")
=> #\Space
(name-char "Newline")
=> #\Newline
(name-char "SPACE")
=> #\Space
(name-char "space")
=> #\Space
```

### Using a symbol as the name

Since `name-char` accepts a string designator, you can also pass a symbol.

```lisp
(name-char 'space)
=> #\Space
(name-char 'newline)
=> #\Newline
```

### Unknown names return NIL

If no character has the given name, `name-char` returns NIL.

```lisp
(name-char "NoSuchCharacter")
=> NIL
(name-char "Foo")
=> NIL
```

### Semi-standard character names

The semi-standard characters Tab, Page, Rubout, Linefeed, Return, and Backspace can be looked up by name if supported by the implementation.

```lisp
(name-char "Tab")
=> #\Tab
(name-char "Return")
=> #\Return
(name-char "Backspace")
=> #\Backspace
```

### Round-tripping with char-name

For any character that has a name, `name-char` and `char-name` are inverses.

```lisp
(char-name (name-char "Space"))
=> "Space"
(char-name (name-char "Newline"))
=> "Newline"

;; For any character with a name:
(let ((name (char-name #\Space)))
  (char= (name-char name) #\Space))
=> T
```
