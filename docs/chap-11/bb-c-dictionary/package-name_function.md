---
title: "package-name"
---

# package-name

import PackageNameFunction from './_package-name_function.md';

<PackageNameFunction />

## Expanded Reference: package-name

### Basic Usage: Getting the Name of a Package

`package-name` returns the string name of a package.

```lisp
(package-name *package*)
;; => "COMMON-LISP-USER"

(package-name (find-package "COMMON-LISP"))
=> "COMMON-LISP"
```

### Using a String Designator

The argument can be a string (package name) or symbol, not just a package object.

```lisp
(package-name "KEYWORD")
=> "KEYWORD"

(package-name 'keyword)
=> "KEYWORD"
```

### The KEYWORD Package

```lisp
(package-name (symbol-package :test))
=> "KEYWORD"
```

### Deleted Packages Return NIL

After a package is deleted, `package-name` returns NIL for the deleted package object.

```lisp
(let ((pkg (make-package "DOOMED" :use '())))
  (delete-package pkg)
  (package-name pkg))
=> NIL
```

### The Name Reflects Renaming

If a package has been renamed, `package-name` returns the new name.

```lisp
(make-package "ORIGINAL" :use '())
==> #<PACKAGE "ORIGINAL">

(rename-package "ORIGINAL" "RENAMED")
(package-name (find-package "RENAMED"))
=> "RENAMED"
```
