---
title: "package"
---

# \*package\*

import PackageVariable from './_package_variable.md';

<PackageVariable />

## Expanded Reference: \*package\*

### Basic Usage: Inspecting the Current Package

`*package*` holds the current package object. It determines where the reader interns new symbols.

```lisp
*package*
;; → #<PACKAGE "COMMON-LISP-USER">

(package-name *package*)
;; → "COMMON-LISP-USER"
```

### Changing the Current Package with in-package

```lisp
(defpackage "PKG-VAR-DEMO" (:use "COMMON-LISP"))
(in-package "PKG-VAR-DEMO")

(package-name *package*)
;; → "PKG-VAR-DEMO"

(in-package "COMMON-LISP-USER")
```

### Temporarily Binding \*package\* with let

You can dynamically bind `*package*` to control symbol lookup temporarily.

```lisp
(defpackage "TEMP-BIND" (:use "COMMON-LISP"))

(let ((*package* (find-package "TEMP-BIND")))
  (package-name *package*))
;; → "TEMP-BIND"

;; Outside the let, *package* is unchanged
(package-name *package*)
;; → "COMMON-LISP-USER"
```

### Effect on the Reader

The value of `*package*` affects where `read` and `read-from-string` intern symbols.

```lisp
(defpackage "READ-DEMO" (:use "COMMON-LISP"))

(let ((*package* (find-package "READ-DEMO")))
  (symbol-package (read-from-string "MY-SYM")))
;; → #<PACKAGE "READ-DEMO">

(let ((*package* (find-package "COMMON-LISP-USER")))
  (symbol-package (read-from-string "MY-SYM")))
;; → #<PACKAGE "COMMON-LISP-USER">
```

### Default Value

The initial value of `*package*` is the COMMON-LISP-USER package.

```lisp
(eq *package* (find-package "COMMON-LISP-USER"))
;; → T  ; in a fresh session
```
