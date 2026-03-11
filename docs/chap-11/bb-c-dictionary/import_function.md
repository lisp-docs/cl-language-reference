---
title: "import"
---

# import

import ImportFunction from './_import_function.md';

<ImportFunction />

## Expanded Reference: import

### Basic Usage: Importing a Symbol into a Package

`import` adds a symbol as an internal symbol of a package, making it directly present rather than merely inherited.

```lisp
(defpackage "SRC-PKG" (:use) (:export "WIDGET"))
(make-package "DST-PKG" :use '())

(import (find-symbol "WIDGET" "SRC-PKG") "DST-PKG")
=> T

(find-symbol "WIDGET" "DST-PKG")
;; => SRC-PKG:WIDGET
;; => :INTERNAL
```

### Importing a Symbol from COMMON-LISP into a Bare Package

```lisp
(make-package "TINY" :use '())

;; TINY has no symbols at all
(find-symbol "CAR" "TINY")
=> NIL
=> NIL

(import 'cl:car "TINY")
=> T

(find-symbol "CAR" "TINY")
=> CAR
=> :INTERNAL
```

### Importing Multiple Symbols

`import` accepts a list of symbols.

```lisp
(make-package "SELECTIVE" :use '())
(import (list 'cl:list 'cl:cons 'cl:append) "SELECTIVE")
=> T

(find-symbol "LIST" "SELECTIVE")
=> LIST
=> :INTERNAL
(find-symbol "CONS" "SELECTIVE")
=> CONS
=> :INTERNAL
(find-symbol "APPEND" "SELECTIVE")
=> APPEND
=> :INTERNAL
(find-symbol "CAR" "SELECTIVE")
=> NIL
=> NIL
```

### Import Sets the Home Package for Uninterned Symbols

If a symbol has no home package, importing it sets the home package.

```lisp
(let ((sym (make-symbol "ORPHAN")))
  (symbol-package sym)
=> NIL
  (make-package "ADOPT" :use '())
  (import sym "ADOPT")
  (symbol-package sym))
==> #<PACKAGE "ADOPT">
```

### Importing an Already-Present Symbol is a No-Op

```lisp
(defpackage "IDEMPOTENT" (:use "COMMON-LISP"))

;; CAR is already inherited
(find-symbol "CAR" "IDEMPOTENT")
=> CAR
=> :INHERITED

;; Importing the same symbol makes it present
(import 'cl:car "IDEMPOTENT")
=> T

(find-symbol "CAR" "IDEMPOTENT")
=> CAR
=> :INTERNAL
```
