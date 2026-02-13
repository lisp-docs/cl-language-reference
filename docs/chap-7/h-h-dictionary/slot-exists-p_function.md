---
title: "slot-exists-p"
---

# slot-exists-p

import SlotExistsPFunction from './_slot-exists-p_function.md';

<SlotExistsPFunction />

## Expanded Reference: slot-exists-p

### Checking for Slot Existence

`slot-exists-p` returns true if the object has a slot with the given name, and false otherwise. It does not check whether the slot is bound.

```lisp
(defclass person ()
  ((name :initarg :name)
   (age  :initarg :age)))

(let ((p (make-instance 'person :name "Alice")))
  (list (slot-exists-p p 'name)
        (slot-exists-p p 'age)
        (slot-exists-p p 'address)))
;; => (T T NIL)
```

### Guarding Against Missing Slots

`slot-exists-p` is useful for writing generic code that works with objects from different classes.

```lisp
(defclass base-record ()
  ((id :initarg :id :accessor record-id)))

(defclass extended-record (base-record)
  ((notes :initarg :notes :accessor record-notes)))

(defun safe-get-notes (obj)
  (if (slot-exists-p obj 'notes)
      (if (slot-boundp obj 'notes)
          (slot-value obj 'notes)
          "(no notes)")
      "(slot not available)"))

(safe-get-notes (make-instance 'extended-record :id 1 :notes "important"))
;; => "important"

(safe-get-notes (make-instance 'base-record :id 2))
;; => "(slot not available)"
```

### Works with Structures Too

`slot-exists-p` also works with structure instances.

```lisp
(defstruct point x y)

(let ((p (make-point :x 1 :y 2)))
  (list (slot-exists-p p 'x)
        (slot-exists-p p 'z)))
;; => (T NIL)
```
