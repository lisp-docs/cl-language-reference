---
title: "list-all-packages"
---

# list-all-packages

import ListAllPackagesFunction from './_list-all-packages_function.md';

<ListAllPackagesFunction />

## Expanded Reference: list-all-packages

### Basic Usage: Getting All Registered Packages

`list-all-packages` returns a fresh list of all currently registered packages. It takes no arguments.

```lisp
(listp (list-all-packages))
;; → T

;; Standard packages are always present
(member (find-package "COMMON-LISP") (list-all-packages))
;; → (#<PACKAGE "COMMON-LISP"> ...)  ; non-NIL

(member (find-package "KEYWORD") (list-all-packages))
;; → (#<PACKAGE "KEYWORD"> ...)  ; non-NIL
```

### Detecting Newly Created Packages

```lisp
(let ((before (list-all-packages)))
  (make-package "LAP-NEW" :use '())
  (let ((after (list-all-packages)))
    (mapcar #'package-name
            (set-difference after before))))
;; → ("LAP-NEW")
```

### Deleted Packages Disappear from the List

```lisp
(make-package "LAP-GONE" :use '())
(member (find-package "LAP-GONE") (list-all-packages))
;; → (#<PACKAGE "LAP-GONE"> ...)  ; non-NIL

(delete-package "LAP-GONE")
;; → T

(find-if (lambda (p) (string= (package-name p) "LAP-GONE"))
         (list-all-packages))
;; → NIL
```

### The List is Fresh Each Time

Each call returns a new list that can be modified without affecting the package system.

```lisp
(let ((a (list-all-packages))
      (b (list-all-packages)))
  (eq a b))
;; → NIL
```
