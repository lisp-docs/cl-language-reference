---
title: "floating-point-underflow"
---

# floating-point-underflow

import FloatingPointUnderflowConditionType from './_floating-point-underflow_condition-type.md';

<FloatingPointUnderflowConditionType />

## Expanded Reference: floating-point-underflow

### Type Hierarchy

The `floating-point-underflow` condition is a subtype of `arithmetic-error`. It is signaled when a floating-point operation produces a result that is too small (too close to zero) to be represented as a normalized floating-point number.

```lisp
(subtypep 'floating-point-underflow 'arithmetic-error) ; → T, T
(subtypep 'floating-point-underflow 'error) ; → T, T
```

### Triggering Underflow

Underflow occurs when a computation produces a value smaller in magnitude than the smallest representable positive float.

```lisp
(handler-case (exp -1000.0d0)
  (floating-point-underflow ()
    :underflow))
; → :UNDERFLOW  (or 0.0d0 on implementations that silently underflow to zero)

(handler-case (/ least-positive-double-float 10.0d0)
  (floating-point-underflow ()
    :underflow))
; → :UNDERFLOW  (implementation-dependent)
```

### Inspecting the Error

As with all `arithmetic-error` subtypes, the operation and operands can be inspected.

```lisp
(handler-case (exp -1000.0d0)
  (floating-point-underflow (c)
    (list :op (arithmetic-error-operation c)
          :args (arithmetic-error-operands c))))
; → (:OP EXP :ARGS (-1000.0d0))  (implementation-dependent)
```

### Practical Note

Many implementations flush underflow results to zero rather than signaling this condition, especially when hardware denormalized numbers are available. Whether underflow is signaled depends on the implementation and potentially on floating-point trap settings.

```lisp
;; On many implementations, this silently returns 0.0d0:
(exp -1000.0d0) ; → 0.0d0

;; Portable code should handle both possibilities:
(defun safe-exp-small (x)
  (handler-case (exp x)
    (floating-point-underflow () 0.0d0)))

(safe-exp-small -1000.0d0) ; → 0.0d0
```
