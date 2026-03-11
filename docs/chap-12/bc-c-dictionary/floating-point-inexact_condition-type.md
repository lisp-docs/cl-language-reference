---
title: "floating-point-inexact"
---

# floating-point-inexact

import FloatingPointInexactConditionType from './_floating-point-inexact_condition-type.md';

<FloatingPointInexactConditionType />

## Expanded Reference: floating-point-inexact

### Type Hierarchy

The `floating-point-inexact` condition is a subtype of `arithmetic-error`, which means it inherits the `arithmetic-error-operation` and `arithmetic-error-operands` accessors.

```lisp
(subtypep 'floating-point-inexact 'arithmetic-error)
=> T
=> T
(subtypep 'floating-point-inexact 'error)
=> T
=> T
```

### Rarely Signaled in Practice

This condition type is defined by the standard but is very rarely signaled by actual implementations. Most Common Lisp implementations silently produce inexact floating-point results (as is normal for IEEE 754 arithmetic) rather than signaling this condition.

```lisp
;; In theory, this could signal floating-point-inexact since
;; 1/3 cannot be represented exactly as a float:
(float 1/3)
=> 0.33333334

;; You can write a handler, but it will rarely be triggered:
(handler-case (float 1/3)
  (floating-point-inexact ()
    :inexact-result))
=> 0.33333334
```

### Defensive Handling

If you need to write portable code that accounts for the possibility of this condition being signaled, you can include it in a `handler-case` alongside other arithmetic errors.

```lisp
(handler-case (some-float-computation)
  (floating-point-inexact (c)
    (format nil "Inexact result from ~A on ~A"
            (arithmetic-error-operation c)
            (arithmetic-error-operands c)))
  (arithmetic-error (c)
    (format nil "Arithmetic error: ~A" c)))
```
