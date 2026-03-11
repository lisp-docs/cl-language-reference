---
title: "slot-value"
---

# slot-value

import SlotValueFunction from './_slot-value_function.md';

<SlotValueFunction />

## Expanded Reference: slot-value

### Basic Slot Access

`slot-value` reads the value of a named slot from any object. The slot name is a symbol and is not evaluated (you must quote it).

```lisp
(defclass point ()
  ((x :initarg :x)
   (y :initarg :y)))

(let ((p (make-instance 'point :x 10 :y 20)))
  (list (slot-value p 'x) (slot-value p 'y)))
=> (10 20)
```

### Setting Slot Values with setf

`slot-value` is a `setf`-able place. You can write to slots that have no accessor defined.

```lisp
(defclass point ()
  ((x :initarg :x)
   (y :initarg :y)))

(let ((p (make-instance 'point :x 0 :y 0)))
  (setf (slot-value p 'x) 42)
  (setf (slot-value p 'y) 99)
  (list (slot-value p 'x) (slot-value p 'y)))
=> (42 99)
```

### Accessing Slots Without Accessors

`slot-value` is the only way to access slots when no `:reader`, `:writer`, or `:accessor` has been defined.

```lisp
(defclass secret ()
  ((data :initarg :data)))

;; No accessor -- must use slot-value
(let ((s (make-instance 'secret :data "classified")))
  (slot-value s 'data))
=> "classified"
```

### Using slot-value Inside Methods

Within method bodies, `slot-value` provides direct access to any slot, even private ones not exposed through accessors.

```lisp
(defclass counter ()
  ((count :initform 0)))

(defgeneric increment (counter))
(defgeneric get-count (counter))

(defmethod increment ((c counter))
  (incf (slot-value c 'count)))

(defmethod get-count ((c counter))
  (slot-value c 'count))

(let ((c (make-instance 'counter)))
  (increment c)
  (increment c)
  (increment c)
  (get-count c))
=> 3
```

### Unbound Slot Access

Accessing a slot that has no value (unbound) invokes `slot-unbound`, which by default signals an error.

```lisp
(defclass maybe-value ()
  ((val :initarg :val)))

(let ((obj (make-instance 'maybe-value)))
  ;; The slot 'val has no :initform and no initarg was supplied
  (handler-case (slot-value obj 'val)
    (unbound-slot (c)
      (format nil "Slot ~A is unbound" (cell-error-name c)))))
=> "Slot VAL is unbound"
```
