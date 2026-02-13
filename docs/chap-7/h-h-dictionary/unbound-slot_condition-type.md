---
title: "unbound-slot"
---

# unbound-slot

import UnboundSlotConditionType from './_unbound-slot_condition-type.md';

<UnboundSlotConditionType />

## Expanded Reference: unbound-slot

### Catching unbound-slot Conditions

The `unbound-slot` condition is signaled when `slot-value` attempts to read an unbound slot. It is a subtype of `cell-error`, so `cell-error-name` gives the slot name, and `unbound-slot-instance` gives the instance.

```lisp
(defclass data-holder ()
  ((value :initarg :value)))

(let ((obj (make-instance 'data-holder)))
  (handler-case (slot-value obj 'value)
    (unbound-slot (c)
      (list :slot (cell-error-name c)
            :instance-class (class-name (class-of (unbound-slot-instance c)))))))
;; => (:SLOT VALUE :INSTANCE-CLASS DATA-HOLDER)
```

### Using handler-bind for Recovery

You can use `handler-bind` to handle the condition without unwinding the stack.

```lisp
(defclass optional-slot ()
  ((data :initarg :data)))

(defun safe-read (obj slot)
  (handler-case (slot-value obj slot)
    (unbound-slot () :unbound)))

(safe-read (make-instance 'optional-slot :data 42) 'data)
;; => 42

(safe-read (make-instance 'optional-slot) 'data)
;; => :UNBOUND
```

### Class Precedence List

`unbound-slot` inherits from `cell-error`, `error`, `serious-condition`, `condition`, and `t`.

```lisp
(subtypep 'unbound-slot 'cell-error) ;; => T, T
(subtypep 'unbound-slot 'error)      ;; => T, T
```
