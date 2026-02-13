---
title: "define-symbol-macro"
---

# define-symbol-macro

import DefineSymbolMacroMacro from './_define-symbol-macro_macro.md';

<DefineSymbolMacroMacro />

## Expanded Reference: define-symbol-macro

### Basic Global Symbol Macro

`define-symbol-macro` establishes a global symbol macro so that references to the symbol are replaced by the expansion form.

```lisp
(defvar *things* (list 'alpha 'beta 'gamma))
;; => *THINGS*

(define-symbol-macro thing1 (first *things*))
;; => THING1

thing1
;; => ALPHA
```

### setq Acts as setf

Because `thing1` is a symbol macro, using `setq` on it is treated as `setf` of its expansion.

```lisp
(setq thing1 'one)
;; => ONE

*things*
;; => (ONE BETA GAMMA)
```

### Multiple Symbol Macros

```lisp
(define-symbol-macro thing2 (second *things*))
;; => THING2

(define-symbol-macro thing3 (third *things*))
;; => THING3

(multiple-value-setq (thing2 thing3) (values 'two 'three))
;; => TWO

(list thing2 thing3)
;; => (TWO THREE)

*things*
;; => (ONE TWO THREE)
```

### Shadowing by let

A `let` binding shadows the global symbol macro.

```lisp
(list thing2 (let ((thing2 2)) thing2))
;; => (TWO 2)
```
