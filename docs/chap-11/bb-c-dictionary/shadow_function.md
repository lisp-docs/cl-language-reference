---
title: "shadow"
---

# shadow

import ShadowFunction from './_shadow_function.md';

<ShadowFunction />

## Expanded Reference: shadow

### Basic Usage: Shadowing an Inherited Symbol

`shadow` ensures that a symbol with the given name is present in the package and on its shadowing symbols list. If the symbol only exists through inheritance, a new local symbol is created that shadows the inherited one.

```lisp
(defpackage "SHADOW-DEMO" (:use "COMMON-LISP"))

;; CAR is inherited from COMMON-LISP
(find-symbol "CAR" "SHADOW-DEMO")
;; → CAR, :INHERITED

(shadow "CAR" "SHADOW-DEMO")
;; → T

;; Now there is a local symbol that shadows CL:CAR
(find-symbol "CAR" "SHADOW-DEMO")
;; → SHADOW-DEMO::CAR, :INTERNAL

(eq (find-symbol "CAR" "SHADOW-DEMO")
    (find-symbol "CAR" "COMMON-LISP"))
;; → NIL
```

### The Shadowed Symbol Appears on the Shadowing Symbols List

```lisp
(defpackage "SH-LIST" (:use "COMMON-LISP"))
(package-shadowing-symbols "SH-LIST")
;; → ()

(shadow "LIST" "SH-LIST")
;; → T

(package-shadowing-symbols "SH-LIST")
;; → (SH-LIST::LIST)
```

### Shadowing Prevents Name Conflicts During use-package

Shadowing is primarily used to prevent name conflicts when using packages that export symbols with the same name.

```lisp
(defpackage "LIB-1-SH" (:use) (:export "PROCESS"))
(defpackage "LIB-2-SH" (:use) (:export "PROCESS"))

(defpackage "APP-SH" (:use))
(shadow "PROCESS" "APP-SH")
;; → T

;; Now both can be used without conflict
(use-package "LIB-1-SH" "APP-SH") ;; → T
(use-package "LIB-2-SH" "APP-SH") ;; → T

;; APP-SH's own PROCESS shadows both
(find-symbol "PROCESS" "APP-SH")
;; → APP-SH::PROCESS, :INTERNAL
```

### Shadowing Multiple Names

`shadow` accepts a list of string designators.

```lisp
(defpackage "MULTI-SH" (:use "COMMON-LISP"))
(shadow '("CAR" "CDR" "CONS") "MULTI-SH")
;; → T

(mapcar #'symbol-name (package-shadowing-symbols "MULTI-SH"))
;; → ("CAR" "CDR" "CONS")  ; order may vary
```

### Shadowing an Already-Present Symbol

If a symbol with the given name is already present (not just inherited), `shadow` simply adds it to the shadowing list without creating a new symbol.

```lisp
(defpackage "ALREADY-SH" (:use))
(intern "MINE" "ALREADY-SH")

(shadow "MINE" "ALREADY-SH")
;; → T

;; The existing symbol is now a shadowing symbol
(package-shadowing-symbols "ALREADY-SH")
;; → (ALREADY-SH::MINE)
```
