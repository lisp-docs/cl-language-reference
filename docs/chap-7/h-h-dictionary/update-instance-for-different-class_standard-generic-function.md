---
title: "update-instance-for-different-class"
---

# update-instance-for-different-class

import UpdateInstanceForDifferentClassStandardGenericFunction from './_update-instance-for-different-class_standard-generic-function.md';

<UpdateInstanceForDifferentClassStandardGenericFunction />

## Expanded Reference: update-instance-for-different-class

### Customizing Class Change Behavior

`update-instance-for-different-class` is called by `change-class` after the instance has been transformed. It receives a copy of the old instance (`previous`) and the modified instance (`current`). Define `:before` or `:after` methods to customize the transition.

```lisp
(defclass cartesian-point ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)))

(defclass polar-point ()
  ((radius :accessor point-radius)
   (angle  :accessor point-angle)))

(defmethod update-instance-for-different-class
    :before ((old cartesian-point) (new polar-point) &key)
  (let ((x (point-x old))
        (y (point-y old)))
    (setf (point-radius new) (sqrt (+ (* x x) (* y y))))
    (setf (point-angle new) (atan y x))))

(let ((p (make-instance 'cartesian-point :x 3.0 :y 4.0)))
  (change-class p 'polar-point)
  (list (point-radius p) (point-angle p)))
=> (5.0 0.9272952)
```

### The previous and current Arguments

The `previous` argument is a snapshot of the old state. The `current` argument is the actual (now transformed) instance. Use `previous` to read old slot values and `current` to set new ones.

```lisp
(defclass employee ()
  ((name :initarg :name :accessor emp-name)
   (salary :initarg :salary :accessor emp-salary)))

(defclass consultant ()
  ((name :initarg :name :accessor consultant-name)
   (hourly-rate :accessor consultant-rate)))

(defmethod update-instance-for-different-class
    :before ((old employee) (new consultant) &key)
  ;; Derive hourly rate from annual salary
  (setf (consultant-rate new) (/ (emp-salary old) 2080.0)))

(let ((e (make-instance 'employee :name "Bob" :salary 104000)))
  (change-class e 'consultant)
  (list (consultant-name e) (consultant-rate e)))
=> ("Bob" 50.0)
```

### Passing Initargs Through change-class

Initargs passed to `change-class` are forwarded to `update-instance-for-different-class`.

```lisp
(defclass basic-user ()
  ((username :initarg :username :accessor user-name)))

(defclass admin-user ()
  ((username :initarg :username :accessor user-name)
   (level :initarg :level :accessor admin-level :initform 1)))

(let ((u (make-instance 'basic-user :username "alice")))
  (change-class u 'admin-user :level 5)
  (list (user-name u) (admin-level u)))
=> ("alice" 5)
```
