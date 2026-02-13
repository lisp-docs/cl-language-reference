---
title: "unuse-package"
---

# unuse-package

import UnusePackageFunction from './_unuse-package_function.md';

<UnusePackageFunction />

## Expanded Reference: unuse-package

### Basic Usage: Removing Package Inheritance

`unuse-package` reverses the effect of `use-package`. The specified package is removed from the use list, and its external symbols are no longer inherited.

```lisp
(defpackage "SOURCE-UU" (:use) (:export "DATA"))
(defpackage "TARGET-UU" (:use "SOURCE-UU"))

(find-symbol "DATA" "TARGET-UU")
;; → SOURCE-UU:DATA, :INHERITED

(unuse-package "SOURCE-UU" "TARGET-UU")
;; → T

(find-symbol "DATA" "TARGET-UU")
;; → NIL, NIL
```

### The Use List is Updated

```lisp
(defpackage "LIB-UU" (:use) (:export "FN"))
(defpackage "APP-UU" (:use "LIB-UU"))

(mapcar #'package-name (package-use-list "APP-UU"))
;; → ("LIB-UU")

(unuse-package "LIB-UU" "APP-UU")
;; → T

(package-use-list "APP-UU")
;; → ()
```

### Imported Symbols Remain After unuse-package

Symbols that were explicitly imported (not just inherited) remain present even after unuse-package.

```lisp
(defpackage "PROVIDER-UU" (:use) (:export "ITEM"))
(make-package "RECEIVER-UU" :use '())
(use-package "PROVIDER-UU" "RECEIVER-UU")

;; Import makes it directly present
(import (find-symbol "ITEM" "PROVIDER-UU") "RECEIVER-UU")
(find-symbol "ITEM" "RECEIVER-UU")
;; → PROVIDER-UU:ITEM, :INTERNAL

(unuse-package "PROVIDER-UU" "RECEIVER-UU")
;; → T

;; Still present because it was imported
(find-symbol "ITEM" "RECEIVER-UU")
;; → PROVIDER-UU:ITEM, :INTERNAL
```

### Unusing Multiple Packages

`unuse-package` accepts a list of packages.

```lisp
(defpackage "X-UU" (:use) (:export "A"))
(defpackage "Y-UU" (:use) (:export "B"))
(defpackage "Z-UU" (:use "X-UU" "Y-UU"))

(unuse-package '("X-UU" "Y-UU") "Z-UU")
;; → T

(package-use-list "Z-UU")
;; → ()
```
