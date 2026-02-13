---
title: "floating-point-overflow"
---

# floating-point-overflow

import FloatingPointOverflowConditionType from './_floating-point-overflow_condition-type.md';

<FloatingPointOverflowConditionType />

## Expanded Reference: floating-point-overflow

### Type Hierarchy

The `floating-point-overflow` condition is a subtype of `arithmetic-error`. It is signaled when a floating-point operation produces a result that is too large to be represented.

```lisp
(subtypep 'floating-point-overflow 'arithmetic-error) ; → T, T
(subtypep 'floating-point-overflow 'error) ; → T, T
```

### Triggering Overflow

Overflow occurs when the result of a floating-point computation exceeds the maximum representable value for that float type.

```lisp
(handler-case (exp 1000.0d0)
  (floating-point-overflow ()
    :overflow))
; → :OVERFLOW

(handler-case (* most-positive-double-float 2.0d0)
  (floating-point-overflow ()
    :overflow))
; → :OVERFLOW
```

### Inspecting the Error

Use the `arithmetic-error-operation` and `arithmetic-error-operands` accessors to determine what caused the overflow.

```lisp
(handler-case (exp 1000.0d0)
  (floating-point-overflow (c)
    (list :op (arithmetic-error-operation c)
          :args (arithmetic-error-operands c))))
; → (:OP EXP :ARGS (1000.0d0))  (implementation-dependent)
```

### Safe Computation Pattern

A common pattern is to catch overflow and substitute a sentinel value such as the maximum representable float.

```lisp
(defun safe-exp (x)
  (handler-case (exp x)
    (floating-point-overflow ()
      most-positive-double-float)))

(safe-exp 1.0d0)    ; → 2.718281828459045d0
(safe-exp 1000.0d0) ; → 1.7976931348623157d308  (or similar max value)
```
