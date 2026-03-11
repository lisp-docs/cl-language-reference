---
title: "slot-missing"
---

# slot-missing

import SlotMissingStandardGenericFunction from './_slot-missing_standard-generic-function.md';

<SlotMissingStandardGenericFunction />

## Expanded Reference: slot-missing

### Default Behavior

`slot-missing` is called when `slot-value`, `(setf slot-value)`, `slot-boundp`, or `slot-makunbound` is used with a slot name that does not exist on the object. The default method signals an error.

```lisp
(defclass simple ()
  ((x :initarg :x)))

(let ((s (make-instance 'simple :x 1)))
  (handler-case (slot-value s 'nonexistent)
    (error () :caught-error)))
=> :CAUGHT-ERROR
```

### Custom slot-missing for Dynamic Properties

You can define a method on `slot-missing` to implement a property-list-like fallback for missing slots.

```lisp
(defclass flexible-object ()
  ((properties :initform (make-hash-table) :accessor obj-properties)))

(defmethod slot-missing ((class t) (obj flexible-object) slot-name
                         (operation (eql 'slot-value)) &optional new-value)
  (declare (ignore new-value))
  (gethash slot-name (obj-properties obj)))

(defmethod slot-missing ((class t) (obj flexible-object) slot-name
                         (operation (eql 'setf)) &optional new-value)
  (setf (gethash slot-name (obj-properties obj)) new-value))

(let ((obj (make-instance 'flexible-object)))
  (setf (slot-value obj 'color) :red)
  (slot-value obj 'color))
=> :RED
```

### The operation Argument

The `operation` argument tells you which function triggered the call: `slot-value`, `setf`, `slot-boundp`, or `slot-makunbound`.

```lisp
(defclass logged ()
  ((data :initarg :data)))

(defmethod slot-missing ((class t) (obj logged) slot-name operation
                         &optional new-value)
  (format nil "Missing slot ~A, operation ~A" slot-name operation))

(let ((obj (make-instance 'logged :data 1)))
  (slot-value obj 'no-such-slot))
=> "Missing slot NO-SUCH-SLOT, operation SLOT-VALUE"
```
