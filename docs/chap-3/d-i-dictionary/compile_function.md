---
title: "compile"
---

# compile

import CompileFunction from './_compile_function.md';

<CompileFunction />

## Expanded Reference: compile

### Basic Usage: Compiling a Named Function

After defining an interpreted function, `compile` produces a compiled version and installs it under the same name.

```lisp
(defun add2 (x) (+ x 2))
=> ADD2

(compiled-function-p #'add2)
;; => implementation-dependent (may already be compiled)

(compile 'add2)
=> ADD2
=> NIL
=> NIL

(compiled-function-p #'add2)
=> T
```

### Compiling a Lambda Expression Anonymously

When the first argument is `nil`, `compile` returns a compiled function object directly.

```lisp
(compile nil '(lambda (x y) (* x y)))
==> #<COMPILED-FUNCTION ...>
=> NIL
=> NIL

(funcall (compile nil '(lambda (x y) (* x y))) 3 4)
=> 12
```

### Replacing a Function Definition via compile

You can compile a lambda expression and install it as a symbol's function definition using `setf` of `symbol-function`.

```lisp
(setf (symbol-function 'my-square)
      (compile nil '(lambda (x) (* x x))))
==> #<COMPILED-FUNCTION ...>

(my-square 7)
=> 49
```

### Multiple Return Values

`compile` returns three values: the function name (or compiled function), a warnings flag, and a failure flag.

```lisp
(defun trivial () 42)
=> TRIVIAL

(multiple-value-list (compile 'trivial))
=> (TRIVIAL NIL NIL)
```
