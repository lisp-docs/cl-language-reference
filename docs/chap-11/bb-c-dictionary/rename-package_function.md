---
title: "rename-package"
---

# rename-package

import RenamePackageFunction from './_rename-package_function.md';

<RenamePackageFunction />

## Expanded Reference: rename-package

### Basic Usage: Renaming a Package

`rename-package` replaces the name and nicknames of a package. The old name ceases to work.

```lisp
(make-package "ALPHA" :use '())
(rename-package "ALPHA" "BETA")
;; → #<PACKAGE "BETA">

(find-package "BETA")
;; → #<PACKAGE "BETA">

(find-package "ALPHA")
;; → NIL
```

### Renaming with New Nicknames

The optional third argument provides new nicknames, replacing any existing ones.

```lisp
(make-package "ORIGINAL-RP" :nicknames '("ORIG") :use '())
(package-nicknames "ORIGINAL-RP")
;; → ("ORIG")

(rename-package "ORIGINAL-RP" "REPLACEMENT" '("REPL" "RPL"))
;; → #<PACKAGE "REPLACEMENT">

(package-nicknames "REPLACEMENT")
;; → ("REPL" "RPL")  ; or ("RPL" "REPL")

;; Old name and nickname are gone
(find-package "ORIGINAL-RP") ;; → NIL
(find-package "ORIG")        ;; → NIL

;; New nickname works
(find-package "REPL")
;; → #<PACKAGE "REPLACEMENT">
```

### Renaming Removes Old Nicknames When None Are Supplied

If the nicknames argument is omitted, all old nicknames are removed.

```lisp
(make-package "HAS-NICKS" :nicknames '("HN") :use '())
(rename-package "HAS-NICKS" "NO-NICKS-NOW")
(package-nicknames "NO-NICKS-NOW")
;; → ()
```

### Package Object Identity Is Preserved

The package object is the same before and after renaming.

```lisp
(let ((pkg (make-package "BEFORE-RP" :use '())))
  (rename-package pkg "AFTER-RP")
  (eq pkg (find-package "AFTER-RP")))
;; → T
```
