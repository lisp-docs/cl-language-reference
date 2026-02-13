---
title: "functionp"
---

# functionp

import FunctionpFunction from './_functionp_function.md';

<FunctionpFunction />

## Expanded Reference: functionp

### Testing Various Objects

`functionp` returns true if its argument is a function object. Symbols and lambda expressions are not functions -- you need `#'` or `(function ...)` to get the actual function object.

```lisp
;; Function objects
(functionp #'car) ; → T
(functionp #'+) ; → T
(functionp (lambda (x) x)) ; → T

;; Not function objects
(functionp 'car) ; → NIL  (a symbol, not a function)
(functionp 42) ; → NIL
(functionp "hello") ; → NIL
(functionp '(lambda (x) x)) ; → NIL  (a list, not a function)
```

### Compiled and Interpreted Functions

Both compiled and interpreted function objects satisfy `functionp`.

```lisp
(functionp (compile nil (lambda (x) (1+ x)))) ; → T
(functionp #'(lambda (x) (1+ x))) ; → T
```

### Equivalence to typep

`functionp` is equivalent to `(typep object 'function)`.

```lisp
(let ((f #'list))
  (values (functionp f)
          (typep f 'function)))
; → T, T

(let ((s 'list))
  (values (functionp s)
          (typep s 'function)))
; → NIL, NIL
```
