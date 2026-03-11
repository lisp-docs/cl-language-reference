---
title: "initialize-instance"
---

# initialize-instance

import InitializeInstanceStandardGenericFunction from './_initialize-instance_standard-generic-function.md';

<InitializeInstanceStandardGenericFunction />

## Expanded Reference: initialize-instance

### Basic Customization with :after Methods

`initialize-instance` is called by `make-instance` to set up a newly created instance. The recommended way to customize initialization is to define `:after` methods, which run after the system-supplied primary method has filled in slot values from initargs and initforms.

```lisp
(defclass person ()
  ((first-name :initarg :first-name :accessor first-name)
   (last-name  :initarg :last-name  :accessor last-name)
   (full-name  :accessor full-name)))

(defmethod initialize-instance :after ((p person) &key)
  (setf (full-name p)
        (format nil "~A ~A" (first-name p) (last-name p))))

(let ((p (make-instance 'person :first-name "Jane" :last-name "Doe")))
  (full-name p))
=> "Jane Doe"
```

### Validation During Initialization

An `:after` method can signal an error if required slots are missing or invalid.

```lisp
(defclass positive-pair ()
  ((x :initarg :x :accessor pair-x)
   (y :initarg :y :accessor pair-y)))

(defmethod initialize-instance :after ((pp positive-pair) &key)
  (unless (and (slot-boundp pp 'x) (slot-boundp pp 'y))
    (error "Both X and Y must be provided"))
  (unless (and (plusp (pair-x pp)) (plusp (pair-y pp)))
    (error "X and Y must be positive numbers")))

(let ((pp (make-instance 'positive-pair :x 3 :y 5)))
  (list (pair-x pp) (pair-y pp)))
=> (3 5)

;; This would signal an error:
;; (make-instance 'positive-pair :x -1 :y 5)
;; Error: X and Y must be positive numbers
```

### Accessing Initargs in :after Methods

Custom initargs can be accepted via `&key` and used for initialization logic that goes beyond simple slot filling.

```lisp
(defclass circle ()
  ((radius    :initarg :radius :accessor circle-radius)
   (diameter  :accessor circle-diameter)
   (perimeter :accessor circle-perimeter)))

(defmethod initialize-instance :after ((c circle) &key)
  (let ((r (circle-radius c)))
    (setf (circle-diameter c) (* 2 r))
    (setf (circle-perimeter c) (* 2 pi r))))

(let ((c (make-instance 'circle :radius 5)))
  (list (circle-radius c)
        (circle-diameter c)
        (floor (circle-perimeter c))))
=> (5 10 31)
```

### Conditional Slot Initialization

Use `slot-boundp` inside an `:after` method to initialize only those slots that have not been set by initargs.

```lisp
(defclass entry ()
  ((key   :initarg :key   :accessor entry-key)
   (label :initarg :label :accessor entry-label)))

(defmethod initialize-instance :after ((e entry) &key)
  (unless (slot-boundp e 'label)
    (setf (entry-label e)
          (string-capitalize (string (entry-key e))))))

(entry-label (make-instance 'entry :key :hello))
=> "Hello"

(entry-label (make-instance 'entry :key :hello :label "Custom"))
=> "Custom"
```

### Inheritance of :after Methods

When classes form an inheritance chain, `:after` methods from all classes in the chain run in most-specific-last order (after the primary method). This allows each class to contribute its own initialization.

```lisp
(defclass base-widget ()
  ((id :accessor widget-id)))

(defmethod initialize-instance :after ((w base-widget) &key)
  (setf (widget-id w) (gensym "WIDGET-")))

(defclass labeled-widget (base-widget)
  ((label :initarg :label :accessor widget-label)
   (display-label :accessor display-label)))

(defmethod initialize-instance :after ((w labeled-widget) &key)
  (setf (display-label w)
        (format nil "[~A] ~A" (widget-id w) (widget-label w))))

(let ((w (make-instance 'labeled-widget :label "OK")))
  ;; Both :after methods ran: base-widget's first, then labeled-widget's
  (values (symbolp (widget-id w))
          (stringp (display-label w))))
=> T
=> T
```
