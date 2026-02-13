---
title: "allocate-instance"
---

# allocate-instance

import AllocateInstanceStandardGenericFunction from './_allocate-instance_standard-generic-function.md';

<AllocateInstanceStandardGenericFunction />

## Expanded Reference: allocate-instance

### Understanding allocate-instance

`allocate-instance` creates a raw, uninitialized instance of a class. All slots are unbound. It is called internally by `make-instance` before `initialize-instance`. Normally you do not call it directly.

```lisp
(defclass point ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)))

;; allocate-instance creates an instance with unbound slots
(let ((p (allocate-instance (find-class 'point))))
  (list (slot-boundp p 'x) (slot-boundp p 'y)))
;; => (NIL NIL)
```

### Difference from make-instance

Unlike `make-instance`, `allocate-instance` does not process initargs, initforms, or call `initialize-instance`.

```lisp
(defclass widget ()
  ((label :initarg :label :initform "default" :accessor widget-label)))

;; make-instance applies the initform
(widget-label (make-instance 'widget))
;; => "default"

;; allocate-instance leaves the slot unbound
(let ((w (allocate-instance (find-class 'widget))))
  (slot-boundp w 'label))
;; => NIL
```
