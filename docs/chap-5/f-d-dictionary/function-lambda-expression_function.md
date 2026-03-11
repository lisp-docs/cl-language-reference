---
title: "function-lambda-expression"
---

# function-lambda-expression

import FunctionLambdaExpressionFunction from './_function-lambda-expression_function.md';

<FunctionLambdaExpressionFunction />

## Expanded Reference: function-lambda-expression

### Retrieving a Lambda Expression

`function-lambda-expression` returns three values: the lambda expression (or nil), a boolean indicating whether the function was closed over non-null environment, and the name of the function (or nil). Implementations are not required to return the lambda expression.

```lisp
;; Results are implementation-dependent; the lambda may or may not be available
(function-lambda-expression #'(lambda (x) (1+ x)))
;; => (LAMBDA (X) (1+ X))  ; implementation-dependent
```

### Named Functions

For named functions defined with `defun`, the third value is typically the function name.

```lisp
(defun double (x) (* x 2))

(multiple-value-bind (lambda-expr closure-p name)
    (function-lambda-expression #'double)
  (list :lambda lambda-expr :closure-p closure-p :name name))
;; => (:LAMBDA NIL :CLOSURE-P NIL :NAME DOUBLE)  ; implementation-dependent
```

### Closures May Not Return the Lambda

When a function closes over variables, the second return value indicates this, and the lambda expression is often unavailable.

```lisp
(let ((counter 0))
  (let ((incrementer (lambda () (incf counter))))
    (multiple-value-list (function-lambda-expression incrementer))))
;; => (NIL T NIL)  ; implementation-dependent
```

### Compiled Functions

Compiled functions frequently return nil for the lambda expression since the source may not be retained after compilation.

```lisp
(multiple-value-list
 (function-lambda-expression (compile nil (lambda (x) (* x x)))))
;; => (NIL T NIL)  ; implementation-dependent
```
