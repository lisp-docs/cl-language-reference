---
title: "floating-point-invalid-operation"
---

# floating-point-invalid-operation

import FloatingPointInvalidOperationConditionType from './_floating-point-invalid-operation_condition-type.md';

<FloatingPointInvalidOperationConditionType />

## Expanded Reference: floating-point-invalid-operation

### Type Hierarchy

The `floating-point-invalid-operation` condition is a subtype of `arithmetic-error`. It corresponds to the IEEE 754 "invalid operation" exception, which occurs for operations that have no mathematically defined result.

```lisp
(subtypep 'floating-point-invalid-operation 'arithmetic-error)
=> T
=> T
(subtypep 'floating-point-invalid-operation 'error)
=> T
=> T
```

### When It May Be Signaled

This condition may be signaled for operations that are mathematically undefined, such as taking the square root of a negative number (when not producing a complex result) or computing 0/0 in floating-point arithmetic. Whether and when this condition is signaled is implementation-dependent.

```lisp
;; Some implementations may signal this for:
(handler-case (sqrt -1.0)
  (floating-point-invalid-operation ()
    :invalid))
=> #C(0.0 1.0)
```

### Handling the Condition

When handling this condition, you can use the inherited `arithmetic-error-operation` and `arithmetic-error-operands` accessors to inspect what caused the error.

```lisp
(handler-case (some-float-operation)
  (floating-point-invalid-operation (c)
    (format nil "Invalid operation: ~A called on ~A"
            (arithmetic-error-operation c)
            (arithmetic-error-operands c)))
  (arithmetic-error (c)
    (format nil "Other arithmetic error: ~A" c)))
```

### Practical Note

Like `floating-point-inexact`, this condition may not be signaled by all implementations. Some implementations return NaN or signal a different error type for invalid floating-point operations. Code that needs to handle these cases portably should consider catching the broader `arithmetic-error` type.

```lisp
;; Portable approach: catch the broader type
(handler-case (/ 0.0 0.0)
  (arithmetic-error ()
    :undefined-result))
=> :UNDEFINED-RESULT
```
