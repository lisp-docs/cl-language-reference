---
title: "compiled-function"
---

# compiled-function

import CompiledFunctionType from './_compiled-function_type.md';

<CompiledFunctionType />

## Expanded Reference: compiled-function

### Testing for Compiled Functions

`compiled-function` is the type of functions that have been compiled.

```lisp
(defun my-fn (x) (+ x 1))
=> MY-FN

(compile 'my-fn)
=> MY-FN
=> NIL
=> NIL

(typep #'my-fn 'compiled-function)
=> T
```

### Compiling a Lambda

```lisp
(typep (compile nil '(lambda (x) (* x x))) 'compiled-function)
=> T
```

### Subtype of function

```lisp
(subtypep 'compiled-function 'function)
=> T
=> T
```
