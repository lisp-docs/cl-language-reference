---
title: "symbol-package"
---

# symbol-package

import SymbolPackageFunction from './_symbol-package_function.md';

<SymbolPackageFunction />

## Expanded Reference: symbol-package

### Basic usage

`symbol-package` returns the home package of a symbol, which is the package where it was first interned.

```lisp
(symbol-package 'car) ; → #<PACKAGE "COMMON-LISP">
(symbol-package 'list) ; → #<PACKAGE "COMMON-LISP">
```

### User-defined symbols

Symbols created in user code typically have `COMMON-LISP-USER` as their home package.

```lisp
(defvar *my-var* 42)
(symbol-package '*my-var*) ; → #<PACKAGE "COMMON-LISP-USER">
```

### Keywords

Keywords live in the `KEYWORD` package.

```lisp
(symbol-package :test) ; → #<PACKAGE "KEYWORD">
(symbol-package :hello) ; → #<PACKAGE "KEYWORD">
```

### Uninterned symbols have no home package

Symbols created with `make-symbol` or `gensym` are not interned in any package, so `symbol-package` returns `NIL`.

```lisp
(symbol-package (make-symbol "TEMP")) ; → NIL
(symbol-package (gensym)) ; → NIL
```

### Symbols in custom packages

When you intern a symbol in a custom package, that package becomes its home package.

```lisp
(defpackage "MY-PKG" (:use))
(intern "MY-SYM" "MY-PKG")
(symbol-package (find-symbol "MY-SYM" "MY-PKG"))
; → #<PACKAGE "MY-PKG">
```
