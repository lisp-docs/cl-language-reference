---
title: "shared-initialize"
---

# shared-initialize

import SharedInitializeStandardGenericFunction from './_shared-initialize_standard-generic-function.md';

<SharedInitializeStandardGenericFunction />

## Expanded Reference: shared-initialize

### Role in the Initialization Protocol

`shared-initialize` is the workhorse of the CLOS initialization protocol. It is called by `initialize-instance`, `reinitialize-instance`, `update-instance-for-different-class`, and `update-instance-for-redefined-class`. It fills in slot values based on initargs and initforms.

```lisp
(defclass point ()
  ((x :initarg :x :accessor point-x :initform 0)
   (y :initarg :y :accessor point-y :initform 0)))

;; shared-initialize is called internally by make-instance
(let ((p (make-instance 'point :x 5)))
  (list (point-x p) (point-y p)))
=> (5 0)
```

### Custom :after Method on shared-initialize

Defining a method on `shared-initialize` is the most general way to customize initialization, since it applies to all initialization paths (creation, reinitialization, and class changes).

```lisp
(defclass normalized-vector ()
  ((x :initarg :x :accessor vec-x)
   (y :initarg :y :accessor vec-y)
   (magnitude :accessor vec-magnitude)))

(defmethod shared-initialize :after ((v normalized-vector) slot-names &key)
  (when (and (slot-boundp v 'x) (slot-boundp v 'y))
    (setf (vec-magnitude v)
          (sqrt (+ (expt (vec-x v) 2) (expt (vec-y v) 2))))))

;; Works at creation time
(let ((v (make-instance 'normalized-vector :x 3.0 :y 4.0)))
  (vec-magnitude v))
=> 5.0

;; Also works at reinitialization time
(let ((v (make-instance 'normalized-vector :x 3.0 :y 4.0)))
  (reinitialize-instance v :x 0.0 :y 1.0)
  (vec-magnitude v))
=> 1.0
```

### The slot-names Argument

The `slot-names` argument controls which slots get their `:initform` values when no initarg is given. When called by `initialize-instance`, this is `t` (all slots). When called by `reinitialize-instance`, this is `nil` (no slots get initforms).

```lisp
(defclass demo ()
  ((a :initarg :a :initform 10 :accessor demo-a)
   (b :initarg :b :initform 20 :accessor demo-b)))

;; At creation time, slot-names = t, so both get initforms
(let ((d (make-instance 'demo)))
  (list (demo-a d) (demo-b d)))
=> (10 20)

;; At reinitialization, slot-names = nil, so initforms are NOT applied
(let ((d (make-instance 'demo :a 1 :b 2)))
  (reinitialize-instance d :a 100)
  ;; b keeps its old value, not the initform
  (list (demo-a d) (demo-b d)))
=> (100 2)
```
