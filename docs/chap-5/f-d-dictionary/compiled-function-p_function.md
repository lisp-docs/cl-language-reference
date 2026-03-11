---
title: "compiled-function-p"
---

# compiled-function-p

import CompiledFunctionPFunction from './_compiled-function-p_function.md';

<CompiledFunctionPFunction />

## Expanded Reference: compiled-function-p

### Testing Compiled Functions

`compiled-function-p` returns true if its argument is a compiled function. Functions defined at the top level are typically compiled in most implementations.

```lisp
;; A top-level defun is usually compiled
(defun square (x) (* x x))
(compiled-function-p #'square)
=> T

;; Built-in functions are compiled
(compiled-function-p #'car)
=> T
(compiled-function-p #'mapcar)
=> T
```

### Interpreted vs. Compiled Lambda Functions

Lambda expressions evaluated directly may or may not be compiled, depending on the implementation. You can ensure compilation with `compile`.

```lisp
;; A lambda may or may not be compiled depending on the implementation
(compiled-function-p (lambda (x) (1+ x)))
=> T

;; Explicitly compiling ensures a compiled function
(compiled-function-p (compile nil (lambda (x) (1+ x))))
=> T
```

### Relationship to functionp

Every compiled function is a function, but not every function is necessarily compiled.

```lisp
(let ((f (compile nil (lambda (x) (* x x)))))
  (values (functionp f)
          (compiled-function-p f)))
=> T
=> T

;; compiled-function-p returns NIL for non-functions
(compiled-function-p 42)
=> NIL
(compiled-function-p 'car)
=> NIL
```
