---
title: "unintern"
---

# unintern

import UninternFunction from './_unintern_function.md';

<UninternFunction />

## Expanded Reference: unintern

### Basic Usage: Removing a Symbol from a Package

`unintern` removes a symbol from a package. It returns T if the symbol was present, NIL otherwise.

```lisp
(make-package "UI-DEMO" :use '())
(intern "TEMP-SYM" "UI-DEMO")

(find-symbol "TEMP-SYM" "UI-DEMO")
;; => UI-DEMO::TEMP-SYM
;; => :INTERNAL

(unintern (find-symbol "TEMP-SYM" "UI-DEMO") "UI-DEMO")
;; => T

(find-symbol "TEMP-SYM" "UI-DEMO")
;; => NIL
;; => NIL
```

### The Symbol Loses Its Home Package

If the package was the symbol's home package, the symbol becomes uninterned (printed with #:).

```lisp
(make-package "HOME-DEMO" :use '())
(let ((sym (intern "HOMELESS" "HOME-DEMO")))
  (symbol-package sym)
  ;; ==> #<PACKAGE "HOME-DEMO">
  (unintern sym "HOME-DEMO")
  (symbol-package sym))
=> NIL
```

### Unintern Returns NIL for Non-Present Symbols

```lisp
(make-package "UI-MISS" :use '())
(unintern (intern "NOWHERE" "COMMON-LISP-USER") "UI-MISS")
=> NIL
```

### Unintern Also Removes from the Shadowing List

If the symbol was on the package's shadowing symbols list, `unintern` removes it from there too.

```lisp
(defpackage "UI-SHAD" (:use "COMMON-LISP") (:shadow "CAR"))
(package-shadowing-symbols "UI-SHAD")
;; => (UI-SHAD::CAR)

(unintern (find-symbol "CAR" "UI-SHAD") "UI-SHAD")
;; => T

(package-shadowing-symbols "UI-SHAD")
;; => ()

;; CAR is now inherited from COMMON-LISP again
(find-symbol "CAR" "UI-SHAD")
;; => CAR
;; => :INHERITED
```

### Interned Symbol May Still Be Accessible by Inheritance

Even after uninterning, the symbol may still be reachable if it is inherited from a used package.

```lisp
(defpackage "UI-BASE" (:use) (:export "SHARED"))
(defpackage "UI-USER" (:use "UI-BASE"))

;; Import to make it present
(import (find-symbol "SHARED" "UI-BASE") "UI-USER")
(find-symbol "SHARED" "UI-USER")
;; => UI-BASE:SHARED
;; => :INTERNAL

(unintern (find-symbol "SHARED" "UI-USER") "UI-USER")
;; => T

;; Still accessible via inheritance
(find-symbol "SHARED" "UI-USER")
;; => UI-BASE:SHARED
;; => :INHERITED
```
