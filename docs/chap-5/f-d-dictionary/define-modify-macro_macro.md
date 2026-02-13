---
title: "define-modify-macro"
---

# define-modify-macro

import DefineModifyMacroMacro from './_define-modify-macro_macro.md';

<DefineModifyMacroMacro />

## Expanded Reference: define-modify-macro

### Defining appendf

`define-modify-macro` creates a macro that reads a place, applies a function, and stores the result back. This is the easiest way to define simple modify macros.

```lisp
;; appendf appends items to the list stored in a place
(define-modify-macro appendf (&rest lists) append
  "Append lists to the value stored in the place.")

(let ((items '(1 2 3)))
  (appendf items '(4 5) '(6))
  items)
; → (1 2 3 4 5 6)
```

### Defining togglef for Booleans

A toggle macro flips a generalized boolean in place.

```lisp
(define-modify-macro togglef () not
  "Toggle a boolean place.")

(let ((flag t))
  (togglef flag)
  flag)
; → NIL

(let ((flag nil))
  (togglef flag)
  flag)
; → T
```

### Defining multf for Numeric Places

You can define modify macros for any two-argument function that takes the current value as its first argument.

```lisp
;; multf multiplies a numeric place by a factor
(define-modify-macro multf (&rest args) *
  "Multiply the value in the place.")

(let ((price 100))
  (multf price 1.1)
  price)
; → 110.0
```

### Works with Generalized Places

Modify macros defined with `define-modify-macro` work with any setf-able place, not just variables.

```lisp
(define-modify-macro nconcf (&rest lists) nconc)

(let ((alist (list (cons :a (list 1 2)))))
  (nconcf (cdr (assoc :a alist)) (list 3 4))
  alist)
; → ((:A 1 2 3 4))
```
