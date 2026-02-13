---
title: "control-error"
---

# control-error

import ControlErrorConditionType from './_control-error_condition-type.md';

<ControlErrorConditionType />

## Expanded Reference: control-error

### Type Hierarchy

`control-error` is a subtype of `error` that is signaled when a control transfer (such as `go`, `return-from`, or `throw`) attempts to use a tag or block that is no longer active.

```lisp
;; control-error sits in the condition hierarchy
(subtypep 'control-error 'error) ; → T, T
(subtypep 'control-error 'condition) ; → T, T
```

### Handling control-error with handler-case

A `control-error` is signaled when a `throw` targets a catch tag that does not exist in the dynamic scope.

```lisp
;; Catching a control-error from an invalid throw
(handler-case
    (throw 'nonexistent-tag 42)
  (control-error (c)
    (format nil "Caught control-error: ~A" c)))
; → "Caught control-error: ..."  (message is implementation-dependent)
```

### Using typep to Identify control-error

You can test whether a condition object is of type `control-error` using `typep`.

```lisp
;; Capture the condition and inspect it
(let ((condition
        (handler-case
            (throw 'no-such-tag nil)
          (control-error (c) c))))
  (values (typep condition 'control-error)
          (typep condition 'error)
          (typep condition 'condition)))
; → T, T, T
```
