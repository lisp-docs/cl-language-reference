---
title: "arithmetic-error"
---

# arithmetic-error

import ArithmeticErrorConditionType from './_arithmetic-error_condition-type.md';

<ArithmeticErrorConditionType />

## Expanded Reference: arithmetic-error

### Type Hierarchy

The `arithmetic-error` condition type is a subtype of `error` and serves as the supertype for all arithmetic-related conditions such as `division-by-zero`, `floating-point-overflow`, `floating-point-underflow`, `floating-point-inexact`, and `floating-point-invalid-operation`.

```lisp
(subtypep 'arithmetic-error 'error) ; → T, T
(subtypep 'division-by-zero 'arithmetic-error) ; → T, T
(subtypep 'floating-point-overflow 'arithmetic-error) ; → T, T
```

### Handling Arithmetic Errors

Use `handler-case` to catch any arithmetic error. The accessors `arithmetic-error-operation` and `arithmetic-error-operands` provide information about what caused the error.

```lisp
(handler-case (/ 1 0)
  (arithmetic-error (c)
    (list :operation (arithmetic-error-operation c)
          :operands (arithmetic-error-operands c))))
; → (:OPERATION / :OPERANDS (1 0))
```

### Inspecting Operation and Operands

The `arithmetic-error-operation` accessor returns the function that was being called, and `arithmetic-error-operands` returns the list of arguments that triggered the error.

```lisp
(handler-case (log 0)
  (arithmetic-error (c)
    (format nil "~A was called on ~A"
            (arithmetic-error-operation c)
            (arithmetic-error-operands c))))
; → "LOG was called on (0)"
```

### Catching Specific Subtypes

Since `arithmetic-error` is a parent type, you can use it as a catch-all for all arithmetic problems, or handle specific subtypes individually.

```lisp
(handler-case (/ 1.0 0.0)
  (division-by-zero (c)
    (format nil "Division by zero: ~A on ~A"
            (arithmetic-error-operation c)
            (arithmetic-error-operands c)))
  (arithmetic-error (c)
    (format nil "Other arithmetic error: ~A" c)))
; → "Division by zero: / on (1.0 0.0)"  ; (implementation-dependent)
```
