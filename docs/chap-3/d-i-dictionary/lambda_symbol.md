---
title: "lambda"
---

# lambda

import LambdaSymbol from './_lambda_symbol.md';

<LambdaSymbol />

## Expanded Reference: lambda (Symbol)

### Lambda Expressions as Function Designators

The symbol `lambda` heads a lambda expression, which describes an anonymous function. A lambda expression can be used directly in function position in a form.

```lisp
((lambda (x) (* x x)) 5)
;; => 25
```

### Using #' (function) with Lambda

The `#'` reader macro, which expands to the `function` special operator, converts a lambda expression into a function object.

```lisp
(funcall #'(lambda (x y) (+ x y)) 3 4)
;; => 7
```

### Lambda with Optional and Rest Parameters

```lisp
((lambda (a &optional (b 10)) (+ a b)) 5)
;; => 15

((lambda (a &rest others) (cons a others)) 1 2 3)
;; => (1 2 3)
```

### Lambda with Declarations and Documentation

```lisp
(funcall #'(lambda (x)
             "Doubles its argument."
             (declare (type integer x))
             (* x 2))
         21)
;; => 42
```
