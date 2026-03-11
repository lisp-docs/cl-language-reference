---
title: "symbol-function"
---

# symbol-function

import SymbolFunctionAccessor from './_symbol-function_accessor.md';

<SymbolFunctionAccessor />

## Expanded Reference: symbol-function

### Basic usage: retrieving a function definition

`symbol-function` returns the function object stored in a symbol's function cell.

```lisp
(defun square (x) (* x x))

(symbol-function 'square)
==> #<FUNCTION SQUARE>

(funcall (symbol-function 'square) 5)
=> 25
```

### Accessing built-in functions

Standard Common Lisp functions can be retrieved through `symbol-function`.

```lisp
(symbol-function 'car)
==> #<FUNCTION CAR>
(funcall (symbol-function 'car) '(a b c))
=> A
(funcall (symbol-function '+) 1 2 3)
=> 6
```

### Setting a function definition with setf

You can install a new function definition using `setf` with `symbol-function`.

```lisp
(setf (symbol-function 'double) #'(lambda (x) (* x 2)))
(double 21)
=> 42
```

### symbol-function does not see lexical function bindings

Unlike `#'name` inside an `flet` or `labels`, `symbol-function` always accesses the global function definition.

```lisp
(defun greet () "hello globally")

(flet ((greet () "hello locally"))
  (list (greet)
        (funcall (symbol-function 'greet))))
=> ("hello locally" "hello globally")
```

### Checking for undefined functions

Calling `symbol-function` on a symbol with no function definition signals an `undefined-function` error. Use `fboundp` to check first.

```lisp
(fboundp 'not-yet-defined)
=> NIL

(defun safe-symbol-function (sym)
  (if (and (fboundp sym)
           (not (macro-function sym))
           (not (special-operator-p sym)))
      (symbol-function sym)
      nil))

(safe-symbol-function 'car)
==> #<FUNCTION CAR>
(safe-symbol-function 'not-yet-defined)
=> NIL
(safe-symbol-function 'defun)
=> NIL
```
