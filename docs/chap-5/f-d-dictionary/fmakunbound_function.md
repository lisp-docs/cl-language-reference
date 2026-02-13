---
title: "fmakunbound"
---

# fmakunbound

import FmakunboundFunction from './_fmakunbound_function.md';

<FmakunboundFunction />

## Expanded Reference: fmakunbound

### Removing a Function Binding

`fmakunbound` removes the function definition associated with a symbol, making it unbound in the function namespace.

```lisp
(defun temp-helper (x) (* x 2))
(fboundp 'temp-helper) ; → T
(temp-helper 5) ; → 10

(fmakunbound 'temp-helper)
(fboundp 'temp-helper) ; → NIL
```

### Return Value

`fmakunbound` returns the symbol that was unbound, making it chainable or useful in expressions.

```lisp
(defun foo () :foo)
(fmakunbound 'foo) ; → FOO

;; Calling the function now signals an error
(handler-case (foo)
  (undefined-function (c)
    (cell-error-name c)))
; → FOO
```

### Removing setf Function Bindings

`fmakunbound` also works with `(setf name)` function names.

```lisp
(defun (setf my-val) (new-value)
  (declare (ignore new-value))
  nil)

(fboundp '(setf my-val)) ; → T
(fmakunbound '(setf my-val))
(fboundp '(setf my-val)) ; → NIL
```
