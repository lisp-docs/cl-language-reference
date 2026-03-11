---
title: "with-package-iterator"
---

# with-package-iterator

import WithPackageIteratorMacro from './_with-package-iterator_macro.md';

<WithPackageIteratorMacro />

## Expanded Reference: with-package-iterator

### Basic Usage: Iterating Over External Symbols

`with-package-iterator` defines a local macro that, when called, returns symbols one at a time from the specified packages. Each call returns four values: a flag (T if a symbol is available), the symbol, the accessibility type, and the source package.

```lisp
(defpackage "WPI-DEMO" (:use) (:export "ALPHA" "BETA"))

(let ((syms '()))
  (with-package-iterator (next "WPI-DEMO" :external)
    (loop
      (multiple-value-bind (more? sym accessibility pkg) (next)
        (unless more? (return))
        (push (list (symbol-name sym) accessibility) syms))))
  syms)
=> (("BETA" :EXTERNAL) ("ALPHA" :EXTERNAL))
;; order is implementation-dependent
```

### Iterating Over Internal and External Symbols

You can specify multiple symbol types.

```lisp
(defpackage "WPI-MIXED" (:use) (:export "PUB"))
(intern "PRIV" "WPI-MIXED")

(let ((syms '()))
  (with-package-iterator (next "WPI-MIXED" :internal :external)
    (loop
      (multiple-value-bind (more? sym accessibility) (next)
        (unless more? (return))
        (push (list (symbol-name sym) accessibility) syms))))
  (sort syms #'string< :key #'first))
=> (("PRIV" :INTERNAL) ("PUB" :EXTERNAL))
```

### Including Inherited Symbols

The `:inherited` type includes symbols inherited through `use-package`.

```lisp
(defpackage "WPI-BASE" (:use) (:export "BASE-FN"))
(defpackage "WPI-CHILD" (:use "WPI-BASE"))
(intern "OWN-FN" "WPI-CHILD")

(let ((syms '()))
  (with-package-iterator (next "WPI-CHILD" :internal :external :inherited)
    (loop
      (multiple-value-bind (more? sym accessibility pkg) (next)
        (unless more? (return))
        (push (list (symbol-name sym) accessibility (package-name pkg))
              syms))))
  (sort syms #'string< :key #'first))
;; => (("BASE-FN" :INHERITED "WPI-CHILD") ("OWN-FN" :INTERNAL "WPI-CHILD"))
```

### The Fourth Value Identifies the Source Package

```lisp
(defpackage "WPI-SRC" (:use) (:export "ITEM"))
(defpackage "WPI-DST" (:use "WPI-SRC"))

(with-package-iterator (next "WPI-DST" :inherited)
  (multiple-value-bind (more? sym accessibility pkg) (next)
    (when more?
      (package-name pkg))))
=> "WPI-DST"
```

### Collecting All Present Symbols Across Multiple Packages

```lisp
(defpackage "WPI-P1" (:use) (:export "X"))
(defpackage "WPI-P2" (:use) (:export "Y"))

(let ((syms '()))
  (with-package-iterator (next (list "WPI-P1" "WPI-P2") :external)
    (loop
      (multiple-value-bind (more? sym) (next)
        (unless more? (return))
        (push (symbol-name sym) syms))))
  (sort syms #'string<))
=> ("X" "Y")
```
