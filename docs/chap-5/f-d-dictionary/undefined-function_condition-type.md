---
title: "undefined-function"
---

# undefined-function

import UndefinedFunctionConditionType from './_undefined-function_condition-type.md';

<UndefinedFunctionConditionType />

## Expanded Reference: undefined-function

### Type Hierarchy

`undefined-function` is a subtype of `cell-error` (and thus `error`) that is signaled when an attempt is made to call a function that has no definition.

```lisp
(subtypep 'undefined-function 'cell-error) ; → T, T
(subtypep 'undefined-function 'error) ; → T, T
(subtypep 'undefined-function 'condition) ; → T, T
```

### Handling undefined-function with handler-case

When you call an undefined function, this condition is signaled. You can catch it and use `cell-error-name` to find out which function was missing.

```lisp
(handler-case
    (funcall 'this-function-does-not-exist)
  (undefined-function (c)
    (format nil "Function ~S is not defined" (cell-error-name c))))
; → "Function THIS-FUNCTION-DOES-NOT-EXIST is not defined"
```

### Recovering from undefined-function

You can use `handler-case` to provide fallback behavior when a function might not be defined.

```lisp
;; Try calling an optional function, fall back to a default
(defun try-call (fn-name &rest args)
  (handler-case
      (apply fn-name args)
    (undefined-function ()
      (format nil "~S is unavailable, using fallback" fn-name))))

(try-call 'nonexistent-processor 1 2 3)
; → "NONEXISTENT-PROCESSOR is unavailable, using fallback"
```

### Inspecting the Condition Object

The condition carries the name of the missing function accessible via `cell-error-name`.

```lisp
(let ((cond (handler-case
                (funcall 'no-such-fn)
              (undefined-function (c) c))))
  (values (type-of cond)
          (cell-error-name cond)
          (typep cond 'undefined-function)))
; → UNDEFINED-FUNCTION, NO-SUCH-FN, T
```
