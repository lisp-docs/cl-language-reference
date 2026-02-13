---
title: "package"
---

# package

import PackageSystemClass from './_package_system-class.md';

<PackageSystemClass />

## Expanded Reference: package

### The package System Class

A package is a namespace that maps symbol names to symbols. The `package` system class is the type of all package objects.

```lisp
(type-of (find-package "COMMON-LISP"))
;; → PACKAGE

(typep (find-package "COMMON-LISP") 'package)
;; → T
```

### Packages in the Class Hierarchy

`package` is a subtype of `t` with no other standard supertypes.

```lisp
(subtypep 'package 't)
;; → T, T

(class-name (class-of (find-package "COMMON-LISP")))
;; → PACKAGE
```

### Creating Package Objects

Packages are created with `defpackage` or `make-package`, not with `make-instance`.

```lisp
(let ((pkg (make-package "PKG-CLASS-DEMO" :use '())))
  (typep pkg 'package))
;; → T
```

### Printing Package Objects

Packages are printed in an implementation-dependent fashion, typically as `#<PACKAGE "name">`.

```lisp
(format nil "~A" (find-package "COMMON-LISP"))
;; → "COMMON-LISP"  ; or implementation-dependent representation
```
