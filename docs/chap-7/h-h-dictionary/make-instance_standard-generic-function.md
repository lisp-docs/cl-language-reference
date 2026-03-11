---
title: "make-instance"
---

# make-instance

import MakeInstanceStandardGenericFunction from './_make-instance_standard-generic-function.md';

<MakeInstanceStandardGenericFunction />

## Expanded Reference: make-instance

### Basic Instance Creation

`make-instance` creates a new instance of a class. The first argument is either a class name (a symbol) or a class object. Additional keyword arguments supply initialization values for slots that have declared `:initarg` names.

```lisp
(defclass point ()
  ((x :initarg :x :accessor point-x :initform 0)
   (y :initarg :y :accessor point-y :initform 0)))

(let ((p (make-instance 'point :x 3 :y 4)))
  (list (point-x p) (point-y p)))
=> (3 4)
```

### Default Values with :initform

When an initarg is not supplied, the slot receives its `:initform` default value. Slots without either remain unbound.

```lisp
(defclass config ()
  ((host  :initarg :host  :accessor config-host :initform "localhost")
   (port  :initarg :port  :accessor config-port :initform 8080)
   (debug :initarg :debug :accessor config-debug)))

(let ((c (make-instance 'config)))
  (list (config-host c) (config-port c)))
=> ("localhost" 8080)

;; Override defaults
(let ((c (make-instance 'config :host "example.com" :port 443)))
  (list (config-host c) (config-port c)))
=> ("example.com" 443)
```

### Using a Class Object Instead of a Symbol

You can pass a class object directly to `make-instance` instead of a symbol.

```lisp
(defclass point ()
  ((x :initarg :x :accessor point-x :initform 0)
   (y :initarg :y :accessor point-y :initform 0)))

(let* ((cls (find-class 'point))
       (p (make-instance cls :x 10 :y 20)))
  (list (point-x p) (point-y p)))
=> (10 20)
```

### Creating Instances of Subclasses

`make-instance` works with inherited slots and default-initargs from superclasses.

```lisp
(defclass shape ()
  ((color :initarg :color :accessor shape-color))
  (:default-initargs :color :black))

(defclass circle (shape)
  ((radius :initarg :radius :accessor circle-radius)))

(let ((c (make-instance 'circle :radius 5)))
  (list (circle-radius c) (shape-color c)))
=> (5 :BLACK)

(let ((c (make-instance 'circle :radius 5 :color :red)))
  (list (circle-radius c) (shape-color c)))
=> (5 :RED)
```

### Interaction with initialize-instance

After allocating the instance, `make-instance` calls `initialize-instance`. Custom `:after` methods on `initialize-instance` can perform validation or derived slot computation.

```lisp
(defclass rectangle ()
  ((width  :initarg :width  :accessor rect-width)
   (height :initarg :height :accessor rect-height)
   (area   :accessor rect-area)))

(defmethod initialize-instance :after ((r rectangle) &key)
  (setf (rect-area r) (* (rect-width r) (rect-height r))))

(let ((r (make-instance 'rectangle :width 3 :height 4)))
  (rect-area r))
=> 12
```
