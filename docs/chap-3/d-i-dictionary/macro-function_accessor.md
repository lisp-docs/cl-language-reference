---
title: "macro-function"
---

# macro-function

import MacroFunctionAccessor from './_macro-function_accessor.md';

<MacroFunctionAccessor />

## Expanded Reference: macro-function

### Testing Whether a Symbol Names a Macro

`macro-function` returns the macro function if the symbol has a macro definition, or `nil` otherwise.

```lisp
(defmacro my-macro (x) `(list ,x))
=> MY-MACRO

(macro-function 'my-macro)
==> #<FUNCTION ...>

(macro-function 'car)
=> NIL
```

### Installing a Macro Function with setf

You can use `setf` of `macro-function` to install a macro expansion function directly. The function must accept two arguments: the form and an environment.

```lisp
(setf (macro-function 'my-nop)
      (lambda (form env)
        (declare (ignore form env))
        nil))
==> #<FUNCTION ...>

(my-nop anything here)
=> NIL
```

### Interaction with macrolet

`macro-function` can detect macros in a lexical environment when used inside a macro that receives `&environment`.

```lisp
(defmacro macro-defined-p (name &environment env)
  (if (macro-function name env)
      ''yes
      ''no))
=> MACRO-DEFINED-P

(macro-defined-p defun)
=> YES

(macrolet ((local-mac () 42))
  (macro-defined-p local-mac))
=> YES
```

### Difference from special-operator-p

A symbol can be both a special operator and have a macro function. `macro-function` and `special-operator-p` can both return true for the same symbol.

```lisp
;; Some implementations provide macro definitions for special operators
;; as a compatibility aid. Results are implementation-dependent:
(and (special-operator-p 'setq)
     (not (null (macro-function 'setq))))
=> NIL
```
