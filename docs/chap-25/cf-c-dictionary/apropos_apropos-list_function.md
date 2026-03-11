---
title: "apropos, apropos-list"
---

# apropos, apropos-list

import AproposFunction from './_apropos_apropos-list_function.md';

<AproposFunction />

## Expanded Reference: apropos, apropos-list

### Finding symbols by substring with apropos

`apropos` prints information about all symbols whose names contain the given string as a substring. It returns no useful value.

```lisp
(apropos "MAKE-HASH")
; Prints matching symbols, e.g.:
; MAKE-HASH-TABLE (fbound)
=> ; no useful return value (implementation-dependent)
```

### Getting a list of matching symbols with apropos-list

`apropos-list` is the functional equivalent -- it returns a list of matching symbols rather than printing them.

```lisp
(let ((results (apropos-list "MAKE-HASH")))
  (not (null (member 'make-hash-table results))))
;; => T
```

### Restricting search to a specific package

Both functions accept an optional package argument to restrict the search.

```lisp
;; Search only in the COMMON-LISP package
(not (null (member 'make-hash-table
                   (apropos-list "MAKE-HASH" (find-package "COMMON-LISP")))))
;; => T
```

### Case-insensitive matching

The search is typically case-insensitive (though this is implementation-dependent). Symbol names in Common Lisp are usually uppercase internally.

```lisp
;; These produce the same results
(= (length (apropos-list "CONS"))
   (length (apropos-list "cons")))
;; => impl-dependent
```
