---
title: "package-used-by-list"
---

# package-used-by-list

import PackageUsedByListFunction from './_package-used-by-list_function.md';

<PackageUsedByListFunction />

## Expanded Reference: package-used-by-list

### Basic Usage: Finding Which Packages Use a Given Package

`package-used-by-list` returns a list of packages that inherit from (use) the specified package.

```lisp
(defpackage "FOUNDATION" (:use) (:export "CORE"))
(defpackage "APP-A" (:use "FOUNDATION"))
(defpackage "APP-B" (:use "FOUNDATION"))

(sort (mapcar #'package-name (package-used-by-list "FOUNDATION")) #'string<)
=> ("APP-A" "APP-B")
```

### A Package Not Used by Anyone

```lisp
(make-package "LONELY" :use '())
(package-used-by-list "LONELY")
=> ()
```

### The COMMON-LISP Package Is Widely Used

```lisp
;; COMMON-LISP is typically used by many packages
(not (null (package-used-by-list "COMMON-LISP")))
=> T
```

### Relationship Between package-use-list and package-used-by-list

These two functions are inverses: if A uses B, then B is used-by A.

```lisp
(defpackage "PROVIDER-X" (:use) (:export "SVC"))
(defpackage "CONSUMER-X" (:use "PROVIDER-X"))

(member (find-package "PROVIDER-X")
        (package-use-list "CONSUMER-X"))
;; => (#<PACKAGE "PROVIDER-X">)

(member (find-package "CONSUMER-X")
        (package-used-by-list "PROVIDER-X"))
;; => (#<PACKAGE "CONSUMER-X">)
```
