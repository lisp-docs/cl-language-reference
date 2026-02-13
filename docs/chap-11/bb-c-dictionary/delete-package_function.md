---
title: "delete-package"
---

# delete-package

import DeletePackageFunction from './_delete-package_function.md';

<DeletePackageFunction />

## Expanded Reference: delete-package

### Basic Usage: Deleting a Package

`delete-package` removes a package from the system. It returns T on success.

```lisp
(make-package "TEMP-DEL" :use '())
(find-package "TEMP-DEL")
;; → #<PACKAGE "TEMP-DEL">

(delete-package "TEMP-DEL")
;; → T

(find-package "TEMP-DEL")
;; → NIL
```

### Deleted Package Objects Still Satisfy packagep

After deletion, the package object still exists but has no name.

```lisp
(let ((pkg (make-package "EPHEMERAL" :use '())))
  (delete-package pkg)
  (values (packagep pkg)
          (package-name pkg)))
;; → T, NIL
```

### Deleting an Already-Deleted Package Returns NIL

```lisp
(let ((pkg (make-package "TWICE" :use '())))
  (delete-package pkg)   ;; → T
  (delete-package pkg))  ;; → NIL
```

### Symbols From Deleted Packages Lose Their Home

Symbols whose home package was the deleted package may become uninterned (printed with #:).

```lisp
(make-package "MORTAL" :use '())
(let ((sym (intern "THING" "MORTAL")))
  (delete-package "MORTAL")
  (symbol-package sym))
;; → NIL  ; or implementation-dependent
```

### Deletion Requires No Dependent Packages

If other packages use the package being deleted, a correctable error is signaled. To delete cleanly, first remove dependencies.

```lisp
(defpackage "DEL-BASE" (:use) (:export "X"))
(defpackage "DEL-USER" (:use "DEL-BASE"))

;; Must unuse first to avoid the error
(unuse-package "DEL-BASE" "DEL-USER")
(delete-package "DEL-BASE")
;; → T
```
