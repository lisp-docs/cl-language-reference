---
title: "defpackage"
---

# defpackage

import DefpackageMacro from './_defpackage_macro.md';

<DefpackageMacro />

## Expanded Reference: defpackage

### Basic Package Definition

`defpackage` creates a new package with the given name. It returns the package object.

```lisp
(defpackage "MY-APP"
  (:use "COMMON-LISP"))
==> #<PACKAGE "MY-APP">

(find-package "MY-APP")
==> #<PACKAGE "MY-APP">
```

### Defining Nicknames

The `:nicknames` option provides alternative names for the package.

```lisp
(defpackage "UTILITIES"
  (:use "COMMON-LISP")
  (:nicknames "UTIL" "U"))
==> #<PACKAGE "UTILITIES">

(find-package "UTIL")
==> #<PACKAGE "UTILITIES">

(find-package "U")
==> #<PACKAGE "UTILITIES">
```

### Exporting Symbols

The `:export` option specifies which symbols should be external.

```lisp
(defpackage "MATH-LIB"
  (:use "COMMON-LISP")
  (:export "ADD" "SUBTRACT" "MULTIPLY"))
==> #<PACKAGE "MATH-LIB">

(find-symbol "ADD" "MATH-LIB")
;; => MATH-LIB:ADD
;; => :EXTERNAL

(find-symbol "SUBTRACT" "MATH-LIB")
;; => MATH-LIB:SUBTRACT
;; => :EXTERNAL
```

### Importing From Other Packages

The `:import-from` option selectively imports specific symbols from another package.

```lisp
(defpackage "HELPERS"
  (:use "COMMON-LISP")
  (:export "SAFE-DIVIDE"))

(defpackage "CALCULATOR"
  (:use "COMMON-LISP")
  (:import-from "HELPERS" "SAFE-DIVIDE")
  (:export "COMPUTE"))
==> #<PACKAGE "CALCULATOR">

(find-symbol "SAFE-DIVIDE" "CALCULATOR")
;; => HELPERS:SAFE-DIVIDE
;; => :INTERNAL
```

### Shadowing Inherited Symbols

The `:shadow` option creates local symbols that shadow any inherited symbols with the same name.

```lisp
(defpackage "MY-LISP"
  (:use "COMMON-LISP")
  (:shadow "CAR" "CDR"))
==> #<PACKAGE "MY-LISP">

;; MY-LISP has its own CAR, distinct from CL:CAR
(find-symbol "CAR" "MY-LISP")
;; => MY-LISP::CAR
;; => :INTERNAL

(eq (find-symbol "CAR" "MY-LISP")
    (find-symbol "CAR" "COMMON-LISP"))
;; => NIL
```

### Shadowing-Import From Another Package

The `:shadowing-import-from` option imports a symbol and places it on the shadowing list, preventing name conflicts.

```lisp
(defpackage "BASE"
  (:use "COMMON-LISP")
  (:export "PRINT-OBJECT"))

(defpackage "EXTENDED"
  (:use "COMMON-LISP" "BASE")
  (:shadowing-import-from "COMMON-LISP" "PRINT-OBJECT"))
==> #<PACKAGE "EXTENDED">

;; COMMON-LISP:PRINT-OBJECT wins over BASE:PRINT-OBJECT
(eq (find-symbol "PRINT-OBJECT" "EXTENDED")
    (find-symbol "PRINT-OBJECT" "COMMON-LISP"))
=> T
```

### A Package That Uses No Other Packages

Passing `(:use)` with no arguments creates an isolated package that inherits nothing.

```lisp
(defpackage "ISOLATED"
  (:use))
==> #<PACKAGE "ISOLATED">

(find-symbol "CAR" "ISOLATED")
=> NIL
=> NIL

(find-symbol "NIL" "ISOLATED")
=> NIL
=> NIL
```
