---
title: "do-symbols, do-external-symbols, do-all-symbols"
---

# do-symbols, do-external-symbols, do-all-symbols

import DoSymbolsMacro from './_do-symbols_do-external-symbols_do-all-symbols_macro.md';

<DoSymbolsMacro />

## Expanded Reference: do-symbols, do-external-symbols, do-all-symbols

### do-symbols: Iterating Over All Accessible Symbols

`do-symbols` iterates over every symbol accessible in a package (internal, external, and inherited).

```lisp
(defpackage "DS-DEMO" (:use) (:export "PUB"))
(intern "PRIV" "DS-DEMO")

(let ((syms '()))
  (do-symbols (s "DS-DEMO")
    (push (symbol-name s) syms))
  (sort syms #'string<))
;; → ("PRIV" "PUB")
```

### do-external-symbols: Iterating Over Only External Symbols

`do-external-symbols` iterates only over the external (exported) symbols of a package.

```lisp
(defpackage "EXT-DEMO" (:use) (:export "ALPHA" "BETA"))
(intern "GAMMA" "EXT-DEMO")  ; internal, not exported

(let ((syms '()))
  (do-external-symbols (s "EXT-DEMO")
    (push (symbol-name s) syms))
  (sort syms #'string<))
;; → ("ALPHA" "BETA")
;; "GAMMA" is not included because it is internal
```

### do-all-symbols: Iterating Over All Registered Packages

`do-all-symbols` iterates over symbols present in every registered package. It does not take a package argument.

```lisp
;; Count how many symbols named "CAR" exist across all packages
(let ((count 0))
  (do-all-symbols (s)
    (when (string= (symbol-name s) "CAR")
      (incf count)))
  (> count 0))
;; → T
```

### Using the Result Form

The optional result form is evaluated after iteration completes. The variable is bound to NIL at that point.

```lisp
(defpackage "RES-DEMO" (:use) (:export "X" "Y"))

(do-external-symbols (s "RES-DEMO" (length result))
  ;; This won't work as-is; use a local variable instead:
  )

;; Correct pattern using a collecting variable:
(let ((result '()))
  (do-external-symbols (s "RES-DEMO")
    (push s result))
  (length result))
;; → 2
```

### Early Termination with return

An implicit block named NIL surrounds the iteration, so `return` can exit early.

```lisp
(defpackage "EARLY-DEMO" (:use) (:export "A" "B" "C" "D"))

(do-external-symbols (s "EARLY-DEMO")
  (when (string= (symbol-name s) "B")
    (return s)))
;; → EARLY-DEMO:B  ; or whichever symbol named "B" is encountered
```

### Counting Symbols in a Package

```lisp
(let ((count 0))
  (do-symbols (s "COMMON-LISP")
    (incf count))
  (> count 500))
;; → T  ; COMMON-LISP has hundreds of symbols
```
