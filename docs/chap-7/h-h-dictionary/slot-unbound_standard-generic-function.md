---
title: "slot-unbound"
---

# slot-unbound

import SlotUnboundStandardGenericFunction from './_slot-unbound_standard-generic-function.md';

<SlotUnboundStandardGenericFunction />

## Expanded Reference: slot-unbound

### Default Behavior

`slot-unbound` is called by `slot-value` when an unbound slot is read. The default method signals an `unbound-slot` error.

```lisp
(defclass item ()
  ((value :initarg :value)))

(let ((obj (make-instance 'item)))
  (handler-case (slot-value obj 'value)
    (unbound-slot (c)
      (format nil "Unbound: ~A" (cell-error-name c)))))
=> "Unbound: VALUE"
```

### Providing a Default Value for Unbound Slots

You can define a method on `slot-unbound` to return a default value instead of signaling an error. This implements lazy initialization.

```lisp
(defclass lazy-default ()
  ((data :initarg :data :accessor lazy-data)))

(defmethod slot-unbound ((class t) (instance lazy-default) slot-name)
  (if (eq slot-name 'data)
      (setf (lazy-data instance) (list :default))
      (call-next-method)))

(let ((obj (make-instance 'lazy-default)))
  ;; First access triggers slot-unbound, which initializes the slot
  (lazy-data obj))
=> (:DEFAULT)
```

### Lazy Initialization Pattern

`slot-unbound` is particularly useful for expensive computations that should only happen on first access.

```lisp
(defclass expensive-resource ()
  ((connection :accessor resource-connection)))

(defmethod slot-unbound ((class t) (obj expensive-resource)
                         (slot-name (eql 'connection)))
  ;; Simulate creating an expensive resource on first access
  (setf (resource-connection obj) (cons :connection (get-universal-time))))

(let ((r (make-instance 'expensive-resource)))
  (consp (resource-connection r)))
=> T
```
