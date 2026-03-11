---
title: "compiler-macro-function"
---

# compiler-macro-function

import CompilerMacroFunctionAccessor from './_compiler-macro-function_accessor.md';

<CompilerMacroFunctionAccessor />

## Expanded Reference: compiler-macro-function

### Checking for a Compiler Macro

`compiler-macro-function` returns the compiler macro function associated with a name, or `nil` if there is none.

```lisp
(defun my-fn (x) x)
=> MY-FN

(compiler-macro-function 'my-fn)
=> NIL

(define-compiler-macro my-fn (&whole form x)
  (if (constantp x) x form))
=> MY-FN

(compiler-macro-function 'my-fn)
==> #<FUNCTION ...>
```

### Invoking the Compiler Macro Function Directly

The returned function takes two arguments: the form and an environment object.

```lisp
(funcall (compiler-macro-function 'my-fn) '(my-fn 42) nil)
;; => 42

(funcall (compiler-macro-function 'my-fn) '(my-fn x) nil)
;; => (MY-FN X)
```

### Removing a Compiler Macro with setf

```lisp
(setf (compiler-macro-function 'my-fn) nil)
=> NIL

(compiler-macro-function 'my-fn)
=> NIL
```
