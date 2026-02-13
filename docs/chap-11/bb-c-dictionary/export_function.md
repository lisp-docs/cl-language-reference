---
title: "export"
---

# export

import ExportFunction from './_export_function.md';

<ExportFunction />

## Expanded Reference: export

### Basic Usage: Exporting a Symbol from a Package

`export` makes symbols that are accessible in a package become external symbols of that package, allowing other packages that use it to inherit them.

```lisp
;; Create a package and intern a symbol
(defpackage "MY-LIB" (:use))
(intern "GREET" "MY-LIB")

;; The symbol is internal by default
(find-symbol "GREET" "MY-LIB")
;; → MY-LIB::GREET, :INTERNAL

;; Export it
(export (find-symbol "GREET" "MY-LIB") "MY-LIB")
;; → T

;; Now it is external
(find-symbol "GREET" "MY-LIB")
;; → MY-LIB:GREET, :EXTERNAL
```

### Exporting Makes Symbols Inherited by Using Packages

When a symbol is exported, it becomes visible to all packages that use the exporting package.

```lisp
(defpackage "MATH-UTILS" (:use))
(defpackage "APP" (:use "MATH-UTILS"))

(intern "ADD" "MATH-UTILS")
(find-symbol "ADD" "APP")
;; → NIL, NIL  ; not yet visible

(export (find-symbol "ADD" "MATH-UTILS") "MATH-UTILS")
;; → T

(find-symbol "ADD" "APP")
;; → MATH-UTILS:ADD, :INHERITED
```

### Exporting Multiple Symbols at Once

`export` accepts a list of symbols.

```lisp
(defpackage "TOOLS" (:use))
(intern "HAMMER" "TOOLS")
(intern "SAW" "TOOLS")
(intern "DRILL" "TOOLS")

(export (list (find-symbol "HAMMER" "TOOLS")
              (find-symbol "SAW" "TOOLS"))
        "TOOLS")
;; → T

(find-symbol "HAMMER" "TOOLS") ;; → TOOLS:HAMMER, :EXTERNAL
(find-symbol "SAW" "TOOLS")    ;; → TOOLS:SAW, :EXTERNAL
(find-symbol "DRILL" "TOOLS")  ;; → TOOLS::DRILL, :INTERNAL
```

### Exporting an Already-External Symbol is a No-Op

```lisp
(defpackage "ALREADY-EXT" (:use) (:export "FOO"))
(find-symbol "FOO" "ALREADY-EXT")
;; → ALREADY-EXT:FOO, :EXTERNAL

;; Exporting again has no effect and returns T
(export (find-symbol "FOO" "ALREADY-EXT") "ALREADY-EXT")
;; → T
```

### Using export with the Current Package

When the optional package argument is omitted, `export` operates on the current package.

```lisp
(defpackage "WORK" (:use "COMMON-LISP"))
(in-package "WORK")
(defun helper () "I help")

(export 'helper)
;; → T

(in-package "COMMON-LISP-USER")
(find-symbol "HELPER" "WORK")
;; → WORK:HELPER, :EXTERNAL
```
