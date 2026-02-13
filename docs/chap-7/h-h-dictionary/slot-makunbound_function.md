---
title: "slot-makunbound"
---

# slot-makunbound

import SlotMakunboundFunction from './_slot-makunbound_function.md';

<SlotMakunboundFunction />

## Expanded Reference: slot-makunbound

### Making a Slot Unbound

`slot-makunbound` restores a slot to the unbound state. After calling it, `slot-boundp` returns `nil` for that slot, and `slot-value` will signal an error (or invoke `slot-unbound`).

```lisp
(defclass box ()
  ((content :initarg :content :accessor box-content)))

(let ((b (make-instance 'box :content "treasure")))
  (format t "Bound: ~A~%" (slot-boundp b 'content))
  (slot-makunbound b 'content)
  (slot-boundp b 'content))
;; >> Bound: T
;; => NIL
```

### Resetting Slots

`slot-makunbound` can be used to "clear" a slot, forcing it to behave as if it was never initialized.

```lisp
(defclass cache-entry ()
  ((key   :initarg :key   :accessor entry-key)
   (value :initarg :value :accessor entry-value)))

(defun clear-cache-value (entry)
  (slot-makunbound entry 'value)
  entry)

(let ((e (make-instance 'cache-entry :key :x :value 42)))
  (clear-cache-value e)
  (slot-boundp e 'value))
;; => NIL
```

### Returns the Instance

`slot-makunbound` returns the instance itself, which allows chaining.

```lisp
(defclass pair ()
  ((a :initarg :a)
   (b :initarg :b)))

(let ((p (make-instance 'pair :a 1 :b 2)))
  (eq p (slot-makunbound p 'a)))
;; => T
```
