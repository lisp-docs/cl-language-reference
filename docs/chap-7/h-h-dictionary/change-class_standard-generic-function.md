---
title: "change-class"
---

# change-class

import ChangeClassStandardGenericFunction from './_change-class_standard-generic-function.md';

<ChangeClassStandardGenericFunction />

## Expanded Reference: change-class

### Basic Class Change

`change-class` destructively changes the class of an instance. Slots that exist in both the old and new class retain their values. Slots only in the new class are initialized according to their initforms or remain unbound.

```lisp
(defclass employee ()
  ((name :initarg :name :accessor person-name)
   (company :initarg :company :accessor employee-company)))

(defclass retiree ()
  ((name :initarg :name :accessor person-name)
   (pension :initarg :pension :accessor retiree-pension :initform 0)))

(let ((e (make-instance 'employee :name "Alice" :company "Acme")))
  (change-class e 'retiree)
  (list (person-name e)
        (class-name (class-of e))
        (retiree-pension e)))
=> ("Alice" RETIREE 0)
```

### Slots Are Retained or Dropped

Slots with matching names between the old and new class keep their values. Slots from the old class that are not in the new class are dropped. Slots in the new class that are not in the old class get initialized.

```lisp
(defclass point-2d ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)))

(defclass point-3d ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)
   (z :initarg :z :accessor point-z :initform 0)))

(let ((p (make-instance 'point-2d :x 1 :y 2)))
  (change-class p 'point-3d)
  (list (point-x p) (point-y p) (point-z p)))
=> (1 2 0)
```

### Using Initargs During change-class

You can pass keyword arguments to `change-class` to initialize the new slots.

```lisp
(defclass point-2d ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)))

(defclass point-3d ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)
   (z :initarg :z :accessor point-z :initform 0)))

(let ((p (make-instance 'point-2d :x 5 :y 10)))
  (change-class p 'point-3d :z 15)
  (list (point-x p) (point-y p) (point-z p)))
=> (5 10 15)
```

### Customizing with update-instance-for-different-class

The `update-instance-for-different-class` generic function is called during `change-class` to allow custom initialization of the transformed instance.

```lisp
(defclass cartesian ()
  ((x :initarg :x :accessor coord-x)
   (y :initarg :y :accessor coord-y)))

(defclass polar ()
  ((rho   :accessor coord-rho)
   (theta :accessor coord-theta)))

(defmethod update-instance-for-different-class
    :before ((old cartesian) (new polar) &key)
  (let ((x (coord-x old))
        (y (coord-y old)))
    (setf (coord-rho new) (sqrt (+ (* x x) (* y y))))
    (setf (coord-theta new) (atan y x))))

(let ((c (make-instance 'cartesian :x 3.0 :y 4.0)))
  (change-class c 'polar)
  (list (coord-rho c) (coord-theta c)))
=> (5.0 0.9272952)
```
