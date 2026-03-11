---
title: "lambda"
---

# lambda

import LambdaMacro from './_lambda_macro.md';

<LambdaMacro />

## Expanded Reference: lambda (Macro)

### Shorthand for #'(lambda ...)

The `lambda` macro provides convenient shorthand so that `(lambda ...)` is equivalent to `#'(lambda ...)` or `(function (lambda ...))`.

```lisp
(funcall (lambda (x) (+ x 1)) 10)
=> 11
```

### Passing Lambdas to Higher-Order Functions

Because the macro makes `(lambda ...)` evaluate to a function, it can be passed directly to higher-order functions.

```lisp
(mapcar (lambda (x) (* x x)) '(1 2 3 4 5))
=> (1 4 9 16 25)

(remove-if (lambda (x) (evenp x)) '(1 2 3 4 5))
=> (1 3 5)
```

### Equivalence to function Special Form

These three forms are equivalent:

```lisp
(lambda (x) (+ x 1))
;; is the same as:
#'(lambda (x) (+ x 1))
;; is the same as:
(function (lambda (x) (+ x 1)))
```

### Closures via Lambda

Lambda expressions close over their lexical environment.

```lisp
(let ((offset 10))
  (mapcar (lambda (x) (+ x offset)) '(1 2 3)))
=> (11 12 13)
```
