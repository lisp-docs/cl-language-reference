---
title: "package-use-list"
---

# package-use-list

import PackageUseListFunction from './_package-use-list_function.md';

<PackageUseListFunction />

## Expanded Reference: package-use-list

### Basic Usage: Seeing Which Packages Are Used

`package-use-list` returns a list of package objects that the given package inherits from.

```lisp
(defpackage "MY-PKG" (:use "COMMON-LISP"))

(package-use-list "MY-PKG")
;; => (#<PACKAGE "COMMON-LISP">)
```

### A Package That Uses Nothing

```lisp
(make-package "EMPTY-PKG" :use '())
(package-use-list "EMPTY-PKG")
=> ()
```

### After use-package and unuse-package

The use list changes dynamically as packages are used or unused.

```lisp
(defpackage "BASE-A" (:use) (:export "X"))
(defpackage "BASE-B" (:use) (:export "Y"))
(make-package "COMBINED" :use '())

(use-package "BASE-A" "COMBINED")
(package-use-list "COMBINED")
;; => (#<PACKAGE "BASE-A">)

(use-package "BASE-B" "COMBINED")
(package-use-list "COMBINED")
;; => (#<PACKAGE "BASE-A"> #<PACKAGE "BASE-B">)

(unuse-package "BASE-A" "COMBINED")
(package-use-list "COMBINED")
;; => (#<PACKAGE "BASE-B">)
```

### The COMMON-LISP-USER Package

```lisp
;; CL-USER typically uses at least COMMON-LISP
(member (find-package "COMMON-LISP")
        (package-use-list "COMMON-LISP-USER"))
;; => (#<PACKAGE "COMMON-LISP"> ...)
```
