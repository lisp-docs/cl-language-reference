---
title: "multiple-values-limit"
---

# multiple-values-limit

import MultipleValuesLimitConstantVariable from './_multiple-values-limit_constant-variable.md';

<MultipleValuesLimitConstantVariable />

## Expanded Reference: multiple-values-limit

### Inspecting the Value

`multiple-values-limit` is an upper exclusive bound on the number of values that can be returned from a function via `values`. The standard requires this to be at least 20.

```lisp
;; Check the implementation's limit
multiple-values-limit ; → 536870911  (implementation-dependent)

;; Guaranteed to be at least 20
(>= multiple-values-limit 20) ; → T
```

### Returning Multiple Values

In practice, `values` can return many values, but the limit determines the maximum your implementation supports.

```lisp
;; Returning a modest number of values is always fine
(multiple-value-list (values 1 2 3 4 5))
; → (1 2 3 4 5)

;; The limit is typically very large
(format nil "Can return up to ~:D values" (1- multiple-values-limit))
; → "Can return up to 536,870,910 values"  (implementation-dependent)
```

### Relationship to Other Limits

`multiple-values-limit` may differ from `call-arguments-limit` and `lambda-parameters-limit`. It specifically governs `values` and `multiple-value-bind`.

```lisp
(list :call-args call-arguments-limit
      :lambda-params lambda-parameters-limit
      :multiple-values multiple-values-limit)
; → (:CALL-ARGS 4611686018427387903
;    :LAMBDA-PARAMS 4611686018427387903
;    :MULTIPLE-VALUES 536870911)  (implementation-dependent)
```
