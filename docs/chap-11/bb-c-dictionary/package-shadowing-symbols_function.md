---
title: "package-shadowing-symbols"
---

# package-shadowing-symbols

import PackageShadowingSymbolsFunction from './_package-shadowing-symbols_function.md';

<PackageShadowingSymbolsFunction />

## Expanded Reference: package-shadowing-symbols

### Basic Usage: Listing Shadowing Symbols

`package-shadowing-symbols` returns a list of symbols that have been declared as shadowing symbols in the given package.

```lisp
(defpackage "PSS-DEMO" (:use "COMMON-LISP") (:shadow "LIST"))
(package-shadowing-symbols "PSS-DEMO")
;; => (PSS-DEMO::LIST)
```

### A Package with No Shadowing Symbols

```lisp
(make-package "NO-SHADOW" :use '())
(package-shadowing-symbols "NO-SHADOW")
=> ()
```

### After shadow Creates a Shadowing Symbol

```lisp
(defpackage "PSS-2" (:use "COMMON-LISP"))
(package-shadowing-symbols "PSS-2")
=> ()

(shadow "CAR" "PSS-2")
=> T

(package-shadowing-symbols "PSS-2")
;; => (PSS-2::CAR)
```

### After shadowing-import

```lisp
(make-package "PSS-3" :use '())
(intern "FOO" "PSS-3")

(shadowing-import 'cl:car "PSS-3")
=> T

(mapcar #'symbol-name (package-shadowing-symbols "PSS-3"))
=> ("CAR")
```

### Multiple Shadowing Symbols

```lisp
(defpackage "PSS-MULTI"
  (:use "COMMON-LISP")
  (:shadow "CAR" "CDR" "CONS"))

(let ((syms (package-shadowing-symbols "PSS-MULTI")))
  (sort (mapcar #'symbol-name syms) #'string<))
=> ("CAR" "CDR" "CONS")
```
