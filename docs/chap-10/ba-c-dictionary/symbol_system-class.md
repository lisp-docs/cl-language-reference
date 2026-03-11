---
title: "symbol"
---

# symbol

import SymbolSystemClass from './_symbol_system-class.md';

<SymbolSystemClass />

## Expanded Reference: symbol

### Symbols as a type

The `symbol` system class represents all symbols. Use `typep` to check if an object is a symbol.

```lisp
(typep 'hello 'symbol)
=> T
(typep :key 'symbol)
=> T
(typep nil 'symbol)
=> T
(typep 42 'symbol)
=> NIL
```

### The five attributes of a symbol

Every symbol has a name, package, value cell, function cell, and property list.

```lisp
(let ((sym 'example-sym))
  (values (symbol-name sym)
          (symbol-package sym)
          (symbol-plist sym)))
;; => "EXAMPLE-SYM"
;; => #<PACKAGE "COMMON-LISP-USER">
;; => NIL
```

### Interned vs. uninterned symbols

Interned symbols belong to a package and are found by the reader. Uninterned symbols have no home package.

```lisp
(let ((interned 'foo)
      (uninterned (make-symbol "FOO")))
  (values (symbol-package interned)
          (symbol-package uninterned)
          (eq interned uninterned)))
;; => #<PACKAGE "COMMON-LISP-USER">
;; => NIL
;; => NIL
```

### Symbols in the class hierarchy

`symbol` is a subtype of `t`. The type `keyword` is a subtype of `symbol`.

```lisp
(subtypep 'symbol 't)
=> T
=> T
(subtypep 'keyword 'symbol)
=> T
=> T
(subtypep 'symbol 'keyword)
=> NIL
=> T
```

### Using symbols as identifiers

Symbols serve as names for variables, functions, classes, and other entities in Common Lisp.

```lisp
(defvar *counter* 0)          ; symbol names a variable
(defun increment () (incf *counter*)) ; symbol names a function

(values (symbol-value '*counter*)
        (symbol-function 'increment))
;; => 0
;; => #<FUNCTION INCREMENT>
```
