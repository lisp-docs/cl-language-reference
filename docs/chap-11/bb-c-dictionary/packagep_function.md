---
title: "packagep"
---

# packagep

import PackagepFunction from './_packagep_function.md';

<PackagepFunction />

## Expanded Reference: packagep

### Basic Usage: Testing if an Object is a Package

`packagep` returns true if the argument is a package object, and false otherwise.

```lisp
(packagep (find-package "COMMON-LISP"))
;; → T

(packagep *package*)
;; → T
```

### Non-Package Objects

Symbols, strings, and other objects are not packages.

```lisp
(packagep 'common-lisp)
;; → NIL

(packagep "COMMON-LISP")
;; → NIL

(packagep 42)
;; → NIL

(packagep nil)
;; → NIL
```

### Deleted Packages Still Satisfy packagep

Even after deletion, the package object still has type `package`.

```lisp
(let ((pkg (make-package "PKGP-DEMO" :use '())))
  (delete-package pkg)
  (packagep pkg))
;; → T
```

### Equivalence with typep

`packagep` is equivalent to `(typep object 'package)`.

```lisp
(let ((pkg (find-package "COMMON-LISP")))
  (eq (packagep pkg)
      (typep pkg 'package)))
;; → T
```
