---
title: "division-by-zero"
---

# division-by-zero

import DivisionByZeroConditionType from './_division-by-zero_condition-type.md';

<DivisionByZeroConditionType />

## Expanded Reference: division-by-zero

### Type Hierarchy

The `division-by-zero` condition is a subtype of `arithmetic-error`, which is itself a subtype of `error`.

```lisp
(subtypep 'division-by-zero 'arithmetic-error) ; → T, T
(subtypep 'division-by-zero 'error) ; → T, T
```

### Handling Division by Zero

Use `handler-case` to catch division-by-zero errors and provide a fallback value or alternative behavior.

```lisp
(handler-case (/ 10 0)
  (division-by-zero ()
    :infinity))
; → :INFINITY

(handler-case (/ 1 0)
  (division-by-zero (c)
    (format nil "Cannot divide ~A by ~A"
            (first (arithmetic-error-operands c))
            (second (arithmetic-error-operands c)))))
; → "Cannot divide 1 by 0"
```

### Safe Division Utility

A common pattern is to write a safe division function that returns a default value instead of signaling an error.

```lisp
(defun safe-divide (a b &optional (default 0))
  (handler-case (/ a b)
    (division-by-zero () default)))

(safe-divide 10 3)   ; → 10/3
(safe-divide 10 0)   ; → 0
(safe-divide 10 0 :nan) ; → :NAN
```

### Float vs Integer Division by Zero

Depending on the implementation, division of a float by zero may signal `division-by-zero` or may return an IEEE infinity. Integer division by zero always signals.

```lisp
;; Integer division always signals
(handler-case (/ 1 0)
  (division-by-zero () :caught))
; → :CAUGHT

;; Float behavior is implementation-dependent
(handler-case (/ 1.0 0.0)
  (division-by-zero () :caught))
; → :CAUGHT  (on most implementations)
```
