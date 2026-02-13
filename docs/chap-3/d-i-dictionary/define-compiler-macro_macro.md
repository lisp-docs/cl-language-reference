---
title: "define-compiler-macro"
---

# define-compiler-macro

import DefineCompilerMacroMacro from './_define-compiler-macro_macro.md';

<DefineCompilerMacroMacro />

## Expanded Reference: define-compiler-macro

### Basic Compiler Macro

`define-compiler-macro` defines an optimization hint for the compiler. The function still works normally, but the compiler may use the compiler macro to transform calls at compile time.

```lisp
(defun square (x) (* x x))
;; => SQUARE

(define-compiler-macro square (&whole form arg)
  (if (atom arg)
      `(* ,arg ,arg)
      form))
;; => SQUARE

;; The function still works:
(square 5)
;; => 25
```

### Declining to Expand

A compiler macro can decline to provide an expansion by returning the original form (obtained via `&whole`). This is useful for cases the optimizer cannot handle.

```lisp
(define-compiler-macro my-add (&whole form a b)
  (if (and (numberp a) (numberp b))
      (+ a b)          ; constant-fold at compile time
      form))           ; decline: let the function handle it
;; => MY-ADD

(defun my-add (a b) (+ a b))
;; => MY-ADD

(my-add 3 4)
;; => 7
```

### Inspecting the Compiler Macro

You can call the compiler macro function directly to see what expansion it would produce.

```lisp
(funcall (compiler-macro-function 'square) '(square x) nil)
;; => (* X X)

;; macroexpand does NOT expand compiler macros:
(macroexpand '(square x))
;; => (SQUARE X), NIL
```

### Checking if a Compiler Macro Exists

```lisp
(compiler-macro-function 'square)
;; => #<FUNCTION ...>   (non-nil: compiler macro exists)

(compiler-macro-function 'car)
;; => NIL   (no compiler macro for car)
```
