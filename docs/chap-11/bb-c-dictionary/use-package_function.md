---
title: "use-package"
---

# use-package

import UsePackageFunction from './_use-package_function.md';

<UsePackageFunction />

## Expanded Reference: use-package

### Basic Usage: Inheriting Symbols from Another Package

`use-package` causes a package to inherit all external symbols from the specified package(s).

```lisp
(defpackage "TOOLS-UP" (:use) (:export "HAMMER" "WRENCH"))
(make-package "WORKSHOP" :use '())

(find-symbol "HAMMER" "WORKSHOP")
=> NIL
=> NIL

(use-package "TOOLS-UP" "WORKSHOP")
=> T

(find-symbol "HAMMER" "WORKSHOP")
;; => TOOLS-UP:HAMMER
;; => :INHERITED

(find-symbol "WRENCH" "WORKSHOP")
;; => TOOLS-UP:WRENCH
;; => :INHERITED
```

### Using Multiple Packages at Once

`use-package` accepts a list of packages.

```lisp
(defpackage "PKG-A-UP" (:use) (:export "FOO"))
(defpackage "PKG-B-UP" (:use) (:export "BAR"))
(make-package "PKG-C-UP" :use '())

(use-package '("PKG-A-UP" "PKG-B-UP") "PKG-C-UP")
=> T

(find-symbol "FOO" "PKG-C-UP")
;; => PKG-A-UP:FOO
;; => :INHERITED
(find-symbol "BAR" "PKG-C-UP")
;; => PKG-B-UP:BAR
;; => :INHERITED
```

### The Use List is Updated

```lisp
(defpackage "LIB-UP" (:use) (:export "FUNC"))
(make-package "CLIENT-UP" :use '())

(package-use-list "CLIENT-UP")
=> ()

(use-package "LIB-UP" "CLIENT-UP")
=> T

(mapcar #'package-name (package-use-list "CLIENT-UP"))
=> ("LIB-UP")
```

### Using a Package That is Already Used is Harmless

```lisp
(defpackage "ALREADY-UP" (:use) (:export "X"))
(defpackage "USER-UP" (:use "ALREADY-UP"))

;; Using it again is a no-op
(use-package "ALREADY-UP" "USER-UP")
=> T
```

### Only External Symbols are Inherited

Internal symbols of the used package are not accessible in the using package.

```lisp
(defpackage "PARTIAL-UP" (:use) (:export "VISIBLE"))
(intern "HIDDEN" "PARTIAL-UP")

(make-package "VIEWER-UP" :use '())
(use-package "PARTIAL-UP" "VIEWER-UP")

(find-symbol "VISIBLE" "VIEWER-UP")
;; => PARTIAL-UP:VISIBLE
;; => :INHERITED
(find-symbol "HIDDEN" "VIEWER-UP")
;; => NIL
;; => NIL
```
