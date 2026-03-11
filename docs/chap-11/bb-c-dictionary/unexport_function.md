---
title: "unexport"
---

# unexport

import UnexportFunction from './_unexport_function.md';

<UnexportFunction />

## Expanded Reference: unexport

### Basic Usage: Reverting a Symbol to Internal Status

`unexport` changes an external symbol back to internal status. It undoes the effect of `export`.

```lisp
(defpackage "SVC" (:use) (:export "PUBLIC-FN"))

(find-symbol "PUBLIC-FN" "SVC")
;; => SVC:PUBLIC-FN
;; => :EXTERNAL

(unexport (find-symbol "PUBLIC-FN" "SVC") "SVC")
;; => T

(find-symbol "PUBLIC-FN" "SVC")
;; => SVC::PUBLIC-FN
;; => :INTERNAL
```

### Inherited Symbols Become Inaccessible After Unexport

When a symbol is unexported, packages that were inheriting it can no longer see it.

```lisp
(defpackage "LIB-U" (:use) (:export "HELPER"))
(defpackage "APP-U" (:use "LIB-U"))

(find-symbol "HELPER" "APP-U")
;; => LIB-U:HELPER
;; => :INHERITED

(unexport (find-symbol "HELPER" "LIB-U") "LIB-U")
;; => T

(find-symbol "HELPER" "APP-U")
;; => NIL
;; => NIL
```

### Unexporting an Already-Internal Symbol is a No-Op

```lisp
(defpackage "INT-PKG" (:use))
(intern "SECRET" "INT-PKG")

(find-symbol "SECRET" "INT-PKG")
;; => INT-PKG::SECRET
;; => :INTERNAL

;; Already internal, so unexport does nothing special
(unexport (find-symbol "SECRET" "INT-PKG") "INT-PKG")
;; => T

(find-symbol "SECRET" "INT-PKG")
;; => INT-PKG::SECRET
;; => :INTERNAL
```

### Unexporting Multiple Symbols

`unexport` accepts a list of symbols.

```lisp
(defpackage "MULTI-U" (:use) (:export "A" "B" "C"))
(unexport (list (find-symbol "A" "MULTI-U")
                (find-symbol "B" "MULTI-U"))
          "MULTI-U")
=> T

(find-symbol "A" "MULTI-U")
;; => MULTI-U::A
;; => :INTERNAL
(find-symbol "B" "MULTI-U")
;; => MULTI-U::B
;; => :INTERNAL
(find-symbol "C" "MULTI-U")
;; => MULTI-U:C
;; => :EXTERNAL
```
