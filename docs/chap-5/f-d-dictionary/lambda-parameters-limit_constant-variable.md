---
title: "lambda-parameters-limit"
---

# lambda-parameters-limit

import LambdaParametersLimitConstantVariable from './_lambda-parameters-limit_constant-variable.md';

<LambdaParametersLimitConstantVariable />

## Expanded Reference: lambda-parameters-limit

### Inspecting the Value

`lambda-parameters-limit` is an upper exclusive bound on the number of parameters that can appear in a single lambda list. The standard requires this to be at least 50.

```lisp
;; Check the implementation's limit
lambda-parameters-limit ; → 4611686018427387903  (implementation-dependent)

;; Guaranteed to be at least 50
(>= lambda-parameters-limit 50) ; → T
```

### Relationship to call-arguments-limit

`lambda-parameters-limit` constrains the definition side (how many parameters a function can declare), while `call-arguments-limit` constrains the call side (how many arguments can be passed).

```lisp
;; Compare the two limits
(values lambda-parameters-limit
        call-arguments-limit)
; → 4611686018427387903, 4611686018427387903  (implementation-dependent)
```

### Practical Note

In practice, this limit is astronomically large on most implementations and you will never approach it. However, code generators or macro-writing tools that produce lambda lists programmatically should be aware of this bound.

```lisp
;; Verify that a generated parameter list is within bounds
(defun check-param-count (n)
  (if (< n lambda-parameters-limit)
      (format nil "~D parameters: OK" n)
      (format nil "~D parameters: exceeds limit" n)))

(check-param-count 100) ; → "100 parameters: OK"
```
