---
title: "package-error-package"
---

# package-error-package

import PackageErrorPackageFunction from './_package-error-package_function.md';

<PackageErrorPackageFunction />

## Expanded Reference: package-error-package

### Basic Usage: Retrieving the Offending Package

`package-error-package` returns a designator for the package involved in a `package-error` condition.

```lisp
(let ((c (make-condition 'package-error
                         :package (find-package "COMMON-LISP"))))
  (package-error-package c))
;; → #<PACKAGE "COMMON-LISP">
```

### Using with handler-case

When handling a `package-error`, you can use `package-error-package` to identify which package caused the problem.

```lisp
(handler-case
    (in-package "THIS-PACKAGE-DOES-NOT-EXIST")
  (package-error (c)
    (format nil "Error involving package: ~A"
            (package-error-package c))))
;; → "Error involving package: THIS-PACKAGE-DOES-NOT-EXIST"
;; (exact output is implementation-dependent)
```

### The Return Value May Be a Package Object or Name

The specification says `package-error-package` returns a package designator, which could be a package object or a string name.

```lisp
(let ((c (make-condition 'package-error
                         :package "KEYWORD")))
  (let ((result (package-error-package c)))
    (or (packagep result) (stringp result))))
;; → T
```
