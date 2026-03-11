---
title: "make-symbol"
---

# make-symbol

import MakeSymbolFunction from './_make-symbol_function.md';

<MakeSymbolFunction />

## Expanded Reference: make-symbol

### Basic usage

`make-symbol` creates a fresh, uninterned symbol with the given string as its name. No case conversion is performed.

```lisp
(make-symbol "HELLO")
;; => #:HELLO
(make-symbol "hello")
;; => #:|hello|  (lowercase name preserved)
```

### The new symbol is uninterned

The returned symbol has no home package and is not interned anywhere.

```lisp
(let ((sym (make-symbol "TEMP")))
  (values (symbol-name sym)
          (symbol-package sym)))
=> "TEMP"
=> NIL
```

### Each call creates a distinct symbol

Even with the same name, each call to `make-symbol` produces a new, unique symbol.

```lisp
(let ((a (make-symbol "X"))
      (b (make-symbol "X")))
  (values (eq a b)
          (string= (symbol-name a) (symbol-name b))))
=> NIL
=> T
```

### The new symbol is unbound and unfbound

A freshly created symbol has no value, no function definition, and an empty property list.

```lisp
(let ((sym (make-symbol "FRESH")))
  (values (boundp sym)
          (fboundp sym)
          (symbol-plist sym)))
=> NIL
=> NIL
=> NIL
```

### Using make-symbol for private data keys

Uninterned symbols are useful as keys that cannot collide with any interned symbol.

```lisp
(let ((secret-key (make-symbol "SECRET"))
      (obj (make-symbol "OBJ")))
  (setf (get obj secret-key) "hidden-value")
  (values (get obj secret-key)
          (get obj 'secret)))
=> "hidden-value"
=> NIL
```

### No case conversion

Unlike the Lisp reader, `make-symbol` does not upcase the name string. The name is used exactly as given.

```lisp
(symbol-name (make-symbol "mixedCase"))
=> "mixedCase"
(symbol-name (make-symbol "ALL-CAPS"))
=> "ALL-CAPS"
```
