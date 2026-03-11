---
title: "gentemp"
---

# gentemp

import GentempFunction from './_gentemp_function.md';

<GentempFunction />

## Expanded Reference: gentemp

:::warning
`gentemp` is deprecated. Use `gensym` or `make-symbol` instead for generating unique symbols.
:::

### Basic usage

`gentemp` creates a fresh symbol that is automatically interned in the current package. The default prefix is "T".

```lisp
(gentemp)
;; => T1  (exact number depends on internal counter)
(gentemp)
;; => T2
```

### Custom prefix

A string argument specifies a prefix other than "T".

```lisp
(gentemp "FOO")
;; => FOO3  (exact number varies)
(gentemp "BAR")
;; => BAR4
```

### The symbol is interned

Unlike `gensym`, the symbol created by `gentemp` is interned and can be found with `find-symbol`.

```lisp
(let ((sym (gentemp "INTERNED")))
  (values (symbol-package sym)
          (find-symbol (symbol-name sym))))
;; => #<PACKAGE "COMMON-LISP-USER">
;; => The symbol and :INTERNAL
```

### Specifying a package

You can specify which package to intern the symbol in.

```lisp
(defpackage "TEMP-PKG" (:use))
(let ((sym (gentemp "X" (find-package "TEMP-PKG"))))
  (symbol-package sym))
;; => #<PACKAGE "TEMP-PKG">
```

### Skips existing symbols

If a symbol with the generated name already exists in the package, `gentemp` increments its counter and tries again.

```lisp
;; gentemp always produces a symbol not previously accessible
(let ((sym (gentemp "UNIQUE")))
  (values (boundp sym)
          (fboundp sym)
          (symbol-plist sym)))
=> NIL
=> NIL
=> NIL
```
