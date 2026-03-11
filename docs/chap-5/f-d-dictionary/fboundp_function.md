---
title: "fboundp"
---

# fboundp

import FboundpFunction from './_fboundp_function.md';

<FboundpFunction />

## Expanded Reference: fboundp

### Testing Built-in and User-defined Functions

`fboundp` returns true if the given symbol has a function binding in the global environment. It works for functions, macros, and special operators.

```lisp
;; Built-in functions are fbound
(not (null (fboundp 'car)))
=> T
(not (null (fboundp '+)))
=> T

;; User-defined functions
(defun greet (name) (format nil "Hello, ~A!" name))
(not (null (fboundp 'greet)))
=> T

;; An unbound symbol
(fboundp 'completely-undefined-function-xyz)
=> NIL
```

### Testing setf Functions

`fboundp` also works with `(setf name)` function names to check if a setf function is defined.

```lisp
;; Check if a setf function exists
(not (null (fboundp '(setf car))))
=> T

(defun my-accessor () nil)
(fboundp '(setf my-accessor))
=> NIL

(defun (setf my-accessor) (value)
  (declare (ignore value))
  nil)
(not (null (fboundp '(setf my-accessor))))
=> T
```

### Guarding Against Undefined Functions

`fboundp` is useful for conditionally calling a function that may or may not be loaded.

```lisp
;; Safely call an optional function
(when (fboundp 'optional-plugin-init)
  (funcall 'optional-plugin-init))
=> NIL
```
