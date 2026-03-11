---
title: "condition"
---

# condition

import ConditionConditionType from './_condition_condition-type.md';

<ConditionConditionType />

## Expanded Reference: condition

### The Root of the Condition Hierarchy

`condition` is the base type for all conditions in Common Lisp. Every condition type -- whether an error, warning, or other signal -- inherits from `condition`.

```lisp
(typep (make-condition 'simple-error :format-control "oops")
       'condition)

=> T
```

### Checking the Type Hierarchy

All standard condition types are subtypes of `condition`.

```lisp
(subtypep 'error 'condition)

=> T
=> T
```

```lisp
(subtypep 'warning 'condition)

=> T
=> T
```

```lisp
(subtypep 'serious-condition 'condition)

=> T
=> T
```

### Defining Custom Conditions

User-defined conditions must be defined with `define-condition`, not `defclass`. They must inherit from `condition` or one of its subtypes.

```lisp
(define-condition my-notice (condition)
  ((message :initarg :message :reader notice-message))
  (:report (lambda (c stream)
             (format stream "Notice: ~A" (notice-message c)))))

(typep (make-condition 'my-notice :message "test") 'condition)

=> T
```

### Signaling a Plain Condition

A condition that is not an error or warning can be signaled with `signal`. If unhandled, `signal` returns `nil` rather than entering the debugger.

```lisp
(signal (make-condition 'simple-condition
                        :format-control "Just informing"))

=> NIL
```
