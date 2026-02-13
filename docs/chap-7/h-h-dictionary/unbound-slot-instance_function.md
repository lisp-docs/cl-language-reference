---
title: "unbound-slot-instance"
---

# unbound-slot-instance

import UnboundSlotInstanceFunction from './_unbound-slot-instance_function.md';

<UnboundSlotInstanceFunction />

## Expanded Reference: unbound-slot-instance

### Accessing the Instance from an unbound-slot Condition

`unbound-slot-instance` returns the object that had the unbound slot when the `unbound-slot` condition was signaled.

```lisp
(defclass item ()
  ((name :initarg :name)
   (price :initarg :price)))

(let ((obj (make-instance 'item :name "Widget")))
  (handler-case (slot-value obj 'price)
    (unbound-slot (c)
      (let ((inst (unbound-slot-instance c)))
        (format nil "Slot ~A unbound in ~A (a ~A)"
                (cell-error-name c)
                (slot-value inst 'name)
                (class-name (class-of inst)))))))
;; => "Slot PRICE unbound in Widget (a ITEM)"
```

### Combining with cell-error-name

Together, `unbound-slot-instance` and `cell-error-name` provide complete information about the unbound slot access.

```lisp
(defclass config ()
  ((host :initarg :host)
   (port :initarg :port)))

(let ((c (make-instance 'config :host "localhost")))
  (handler-case (slot-value c 'port)
    (unbound-slot (condition)
      (list :slot-name (cell-error-name condition)
            :same-instance-p (eq c (unbound-slot-instance condition))))))
;; => (:SLOT-NAME PORT :SAME-INSTANCE-P T)
```
