---
title: "progv"
---

# progv

import ProgvSpecialOperator from './_progv_special-operator.md';

<ProgvSpecialOperator />

## Expanded Reference: progv

### Basic Dynamic Binding

`progv` dynamically binds a list of symbols to a list of values for the duration of its body. Unlike `let`, the variable names are evaluated at runtime, making `progv` useful for dynamic/computed bindings.

```lisp
(defvar *x* 10)

(progv '(*x*) '(42)
  *x*)
=> 42

;; After progv, the old binding is restored
*x*
=> 10
```

### Binding Multiple Variables

`progv` can bind multiple variables at once. The symbols and values lists are matched positionally.

```lisp
(defvar *a* 1)
(defvar *b* 2)

(progv '(*a* *b*) '(100 200)
  (list *a* *b*))
=> (100 200)

;; Original values are restored
(list *a* *b*)
=> (1 2)
```

### Runtime-Determined Variable Names

Unlike `let`, the symbol names in `progv` are evaluated, so you can compute which variables to bind at runtime.

```lisp
(defvar *debug-level* 0)
(defvar *verbose* nil)

(defun with-config (settings thunk)
  "Bind dynamic variables from an alist of (symbol . value) pairs."
  (progv (mapcar #'car settings)
         (mapcar #'cdr settings)
    (funcall thunk)))

(with-config '((*debug-level* . 3) (*verbose* . t))
  (lambda () (list *debug-level* *verbose*)))
=> (3 T)
```

### Fewer Values Than Symbols

If there are more symbols than values, the extra symbols become unbound (not nil) within the body.

```lisp
(defvar *p* :original)

(handler-case
    (progv '(*p*) '()
      *p*)
  (unbound-variable (c)
    (format nil "~A is unbound" (cell-error-name c))))
=> "*P* is unbound"

;; Restored after progv
*p*
=> :ORIGINAL
```
