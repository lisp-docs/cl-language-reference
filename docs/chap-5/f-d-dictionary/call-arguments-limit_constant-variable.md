---
title: "call-arguments-limit"
---

# call-arguments-limit

import CallArgumentsLimitConstantVariable from './_call-arguments-limit_constant-variable.md';

<CallArgumentsLimitConstantVariable />

## Expanded Reference: call-arguments-limit

### Inspecting the Value

The value of `call-arguments-limit` is implementation-dependent but must be at least 50 according to the standard. It represents the upper exclusive bound on the number of arguments that may be passed to a function.

```lisp
;; Check the implementation's limit
call-arguments-limit
=> 1073741824

;; The standard guarantees at least 50
(>= call-arguments-limit 50)
=> T
```

### Relationship to Other Limits

`call-arguments-limit` is related to `lambda-parameters-limit` and `multiple-values-limit`. All three constrain different aspects of function calls.

```lisp
;; Compare the limits
(list call-arguments-limit
      lambda-parameters-limit
      multiple-values-limit)
=> (1073741824 1073741824 1073741824)

;; call-arguments-limit bounds what you can pass via apply
;; This is fine for small lists:
(apply #'+ '(1 2 3 4 5))
=> 15
```

### Defensive Use with apply

When using `apply` with dynamically constructed argument lists, it is good practice to be aware of `call-arguments-limit` to avoid hitting the ceiling.

```lisp
;; A safe wrapper that checks before calling apply
(defun safe-apply (fn args)
  (if (< (length args) call-arguments-limit)
      (apply fn args)
      (error "Too many arguments: ~D (limit is ~D)"
             (length args) call-arguments-limit)))

(safe-apply #'+ '(1 2 3))
=> 6
```
