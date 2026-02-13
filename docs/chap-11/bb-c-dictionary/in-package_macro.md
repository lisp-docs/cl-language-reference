---
title: "in-package"
---

# in-package

import InPackageMacro from './_in-package_macro.md';

<InPackageMacro />

## Expanded Reference: in-package

### Basic Usage: Switching the Current Package

`in-package` sets `*package*` to the named package and returns it. The name is not evaluated.

```lisp
(in-package "COMMON-LISP-USER")
;; → #<PACKAGE "COMMON-LISP-USER">

*package*
;; → #<PACKAGE "COMMON-LISP-USER">
```

### Switching to a User-Defined Package

The package must already exist before `in-package` is called.

```lisp
(defpackage "MY-MODULE"
  (:use "COMMON-LISP"))

(in-package "MY-MODULE")
;; → #<PACKAGE "MY-MODULE">

(package-name *package*)
;; → "MY-MODULE"

;; Switch back
(in-package "COMMON-LISP-USER")
;; → #<PACKAGE "COMMON-LISP-USER">
```

### Using a Symbol as the Name Argument

Since the name is a string designator, a symbol may be used. Its symbol-name is taken.

```lisp
(defpackage "DEMO-PKG" (:use "COMMON-LISP"))
(in-package demo-pkg)
;; → #<PACKAGE "DEMO-PKG">

(in-package common-lisp-user)
;; → #<PACKAGE "COMMON-LISP-USER">
```

### Effect at Compile Time

When `in-package` appears as a top-level form, it also takes effect at compile time. This is why source files typically begin with `in-package` after `defpackage`.

```lisp
;; Typical file structure:
;; (defpackage "MY-SYSTEM" (:use "COMMON-LISP") (:export "RUN"))
;; (in-package "MY-SYSTEM")
;; (defun run () ...)

;; The in-package form ensures that all subsequent forms in the file
;; are read in the MY-SYSTEM package.
```
