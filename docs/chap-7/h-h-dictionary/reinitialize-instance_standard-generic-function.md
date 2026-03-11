---
title: "reinitialize-instance"
---

# reinitialize-instance

import ReinitializeInstanceStandardGenericFunction from './_reinitialize-instance_standard-generic-function.md';

<ReinitializeInstanceStandardGenericFunction />

## Expanded Reference: reinitialize-instance

### Changing Slot Values on an Existing Instance

`reinitialize-instance` updates the slot values of an existing instance using initargs. Only slots whose initargs are supplied are changed; other slots retain their current values.

```lisp
(defclass config ()
  ((host :initarg :host :accessor config-host :initform "localhost")
   (port :initarg :port :accessor config-port :initform 8080)))

(let ((c (make-instance 'config)))
  (reinitialize-instance c :port 3000)
  (list (config-host c) (config-port c)))
=> ("localhost" 3000)
```

### Difference from make-instance

Unlike `make-instance`, `reinitialize-instance` does not evaluate `:initform` forms for slots not mentioned in the initargs. It only changes the slots for which initargs are explicitly provided.

```lisp
(defclass counter ()
  ((count :initarg :count :accessor counter-count :initform 0)
   (label :initarg :label :accessor counter-label :initform "default")))

(let ((c (make-instance 'counter :count 10 :label "hits")))
  ;; Only update count; label remains unchanged
  (reinitialize-instance c :count 0)
  (list (counter-count c) (counter-label c)))
=> (0 "hits")
```

### Custom :after Methods for Reinitialization

You can define `:after` methods to perform additional actions when an instance is reinitialized.

```lisp
(defclass rectangle ()
  ((width  :initarg :width  :accessor rect-width)
   (height :initarg :height :accessor rect-height)
   (area   :accessor rect-area)))

(defmethod initialize-instance :after ((r rectangle) &key)
  (setf (rect-area r) (* (rect-width r) (rect-height r))))

(defmethod reinitialize-instance :after ((r rectangle) &key)
  (setf (rect-area r) (* (rect-width r) (rect-height r))))

(let ((r (make-instance 'rectangle :width 3 :height 4)))
  (format t "Area: ~A~%" (rect-area r))
  (reinitialize-instance r :width 5)
  (rect-area r))
.. Area: 12
..
=> 20
```
