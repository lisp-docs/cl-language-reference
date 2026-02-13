---
title: "make-load-form"
---

# make-load-form

import MakeLoadFormStandardGenericFunction from './_make-load-form_standard-generic-function.md';

<MakeLoadFormStandardGenericFunction />

## Expanded Reference: make-load-form

### Basic make-load-form Method

`make-load-form` returns one or two forms: a creation form that reconstructs the object, and an optional initialization form. The file compiler uses these to externalize literal objects.

```lisp
(defclass color ()
  ((r :initarg :r :reader color-r)
   (g :initarg :g :reader color-g)
   (b :initarg :b :reader color-b)))

(defmethod make-load-form ((c color) &optional environment)
  (declare (ignore environment))
  `(make-instance 'color
     :r ,(color-r c)
     :g ,(color-g c)
     :b ,(color-b c)))

(let ((red (make-instance 'color :r 255 :g 0 :b 0)))
  (make-load-form red))
;; => (MAKE-INSTANCE 'COLOR :R 255 :G 0 :B 0)
```

### Using make-load-form-saving-slots

For simple cases, `make-load-form-saving-slots` provides a convenient default implementation.

```lisp
(defclass point ()
  ((x :initarg :x :reader point-x)
   (y :initarg :y :reader point-y)))

(defmethod make-load-form ((p point) &optional environment)
  (make-load-form-saving-slots p :environment environment))

;; Returns two values: creation form and initialization form
(let ((p (make-instance 'point :x 3 :y 4)))
  (multiple-value-list (make-load-form p)))
;; => (<creation-form> <initialization-form>)
```

### Two-Form Pattern for Circular Structures

When objects have circular references, use two forms: the creation form makes the object, and the initialization form fills in the back-references.

```lisp
(defclass tree-node ()
  ((name :initarg :name :reader node-name)
   (parent :accessor node-parent)
   (children :initarg :children :accessor node-children :initform nil)))

(defmethod make-load-form ((node tree-node) &optional environment)
  (declare (ignore environment))
  (values
   ;; Creation form -- creates node with children
   `(make-instance ',(class-of node)
      :name ',(node-name node)
      :children ',(node-children node))
   ;; Initialization form -- sets parent (may be circular)
   (when (slot-boundp node 'parent)
     `(setf (node-parent ',node) ',(node-parent node)))))
```
