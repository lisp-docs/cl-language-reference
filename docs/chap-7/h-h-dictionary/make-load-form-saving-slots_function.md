---
title: "make-load-form-saving-slots"
---

# make-load-form-saving-slots

import MakeLoadFormSavingSlotsFunction from './_make-load-form-saving-slots_function.md';

<MakeLoadFormSavingSlotsFunction />

## Expanded Reference: make-load-form-saving-slots

### Basic Usage

`make-load-form-saving-slots` is a helper function that generates creation and initialization forms to reconstruct an object by saving and restoring its slot values. It is the simplest way to implement `make-load-form`.

```lisp
(defclass settings ()
  ((theme  :initarg :theme  :accessor settings-theme)
   (volume :initarg :volume :accessor settings-volume)))

(defmethod make-load-form ((s settings) &optional environment)
  (make-load-form-saving-slots s :environment environment))

(let ((s (make-instance 'settings :theme :dark :volume 80)))
  (multiple-value-bind (creation init) (make-load-form s)
    (list (not (null creation)) (not (null init)))))
;; => (T T)
```

### Selecting Specific Slots

The `:slot-names` keyword lets you choose which slots to save. Slots not listed will be left unbound in the reconstructed object.

```lisp
(defclass record ()
  ((id   :initarg :id   :reader record-id)
   (data :initarg :data :reader record-data)
   (cache :initform nil :accessor record-cache)))

(defmethod make-load-form ((r record) &optional environment)
  ;; Only save id and data; cache will be recomputed
  (make-load-form-saving-slots r
    :slot-names '(id data)
    :environment environment))
```

### Works with Structures

`make-load-form-saving-slots` also works with `defstruct`-defined types.

```lisp
(defstruct point x y)

(defmethod make-load-form ((p point) &optional environment)
  (make-load-form-saving-slots p :environment environment))
```

### Handling Circular Structures

Because `make-load-form-saving-slots` returns two values (creation and initialization), it can handle circular references between objects, since all objects are allocated before any initialization forms run.

```lisp
(defclass node ()
  ((value :initarg :value :accessor node-value)
   (next  :initarg :next  :accessor node-next :initform nil)))

(defmethod make-load-form ((n node) &optional environment)
  (make-load-form-saving-slots n :environment environment))
```
