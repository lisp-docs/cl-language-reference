---
title: "find-package"
---

# find-package

import FindPackageFunction from './_find-package_function.md';

<FindPackageFunction />

## Expanded Reference: find-package

### Basic Usage: Finding a Package by Name

`find-package` looks up a package by its name or nickname and returns the package object, or NIL if not found.

```lisp
(find-package "COMMON-LISP")
;; → #<PACKAGE "COMMON-LISP">

(find-package "COMMON-LISP-USER")
;; → #<PACKAGE "COMMON-LISP-USER">
```

### Finding a Package by Nickname

Packages can be found by any of their nicknames.

```lisp
(find-package "CL")
;; → #<PACKAGE "COMMON-LISP">

(find-package "CL-USER")
;; → #<PACKAGE "COMMON-LISP-USER">
```

### Using a Symbol as the Argument

When a symbol is given, its name (a string) is used for the lookup. The search is case-sensitive.

```lisp
(find-package 'common-lisp)
;; → #<PACKAGE "COMMON-LISP">

(find-package 'keyword)
;; → #<PACKAGE "KEYWORD">
```

### When No Package is Found

If no matching package exists, NIL is returned.

```lisp
(find-package "NONEXISTENT-PACKAGE")
;; → NIL

(find-package 'no-such-package)
;; → NIL
```

### Passing a Package Object

If the argument is already a package object, it is returned as-is.

```lisp
(let ((pkg (find-package "COMMON-LISP")))
  (eq pkg (find-package pkg)))
;; → T
```

### Case Sensitivity

Package name lookup is case-sensitive. Standard package names are uppercase.

```lisp
(find-package "common-lisp")
;; → NIL

(find-package "COMMON-LISP")
;; → #<PACKAGE "COMMON-LISP">
```
