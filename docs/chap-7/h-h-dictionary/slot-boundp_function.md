---
title: "slot-boundp"
---

# slot-boundp

import SlotBoundpFunction from './_slot-boundp_function.md';

<SlotBoundpFunction />

## Expanded Reference: slot-boundp

### Basic Usage

`slot-boundp` returns true if the named slot has a value, and false if it is unbound. This is useful for checking whether a slot has been initialized.

```lisp
(defclass item ()
  ((name  :initarg :name)
   (price :initarg :price)))

(let ((i (make-instance 'item :name "Widget")))
  (list (slot-boundp i 'name)
        (slot-boundp i 'price)))
;; => (T NIL)
```

### Checking Before Accessing Unbound Slots

Use `slot-boundp` to avoid the error that occurs when reading an unbound slot.

```lisp
(defclass optional-field ()
  ((value :initarg :value)))

(defun safe-get-value (obj)
  (if (slot-boundp obj 'value)
      (slot-value obj 'value)
      :not-set))

(safe-get-value (make-instance 'optional-field :value 42))
;; => 42

(safe-get-value (make-instance 'optional-field))
;; => :NOT-SET
```

### Conditional Initialization in :after Methods

`slot-boundp` is commonly used inside `initialize-instance` `:after` methods to set defaults only for slots that were not provided.

```lisp
(defclass record ()
  ((id    :initarg :id    :accessor record-id)
   (label :initarg :label :accessor record-label)))

(defmethod initialize-instance :after ((r record) &key)
  (unless (slot-boundp r 'label)
    (setf (record-label r)
          (format nil "Record-~A" (record-id r)))))

(record-label (make-instance 'record :id 1))
;; => "Record-1"

(record-label (make-instance 'record :id 1 :label "Custom"))
;; => "Custom"
```

### After slot-makunbound

A slot that was once bound can be made unbound again using `slot-makunbound`. `slot-boundp` reflects this change.

```lisp
(defclass container ()
  ((content :initarg :content :accessor container-content)))

(let ((c (make-instance 'container :content "stuff")))
  (list (slot-boundp c 'content)
        (progn (slot-makunbound c 'content)
               (slot-boundp c 'content))))
;; => (T NIL)
```
