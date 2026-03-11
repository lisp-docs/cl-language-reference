---
title: "update-instance-for-redefined-class"
---

# update-instance-for-redefined-class

import UpdateInstanceForRedefinedClassStandardGenericFunction from './_update-instance-for-redefined-class_standard-generic-function.md';

<UpdateInstanceForRedefinedClassStandardGenericFunction />

## Expanded Reference: update-instance-for-redefined-class

### Handling Class Redefinition

`update-instance-for-redefined-class` is called automatically when a class is redefined and an existing instance is accessed. It receives the instance, a list of added slot names, a list of discarded slot names, and a property list with the old values of discarded slots.

```lisp
;; First define a class
(defclass position ()
  ((x :initarg :x :initform 0 :accessor pos-x)
   (y :initarg :y :initform 0 :accessor pos-y)))

;; Create an instance
;; (defvar *p* (make-instance 'position :x 3 :y 4))

;; Later, you might redefine the class to use polar coordinates.
;; The system will call update-instance-for-redefined-class
;; on *p* the next time it is accessed.
```

### Defining a :before Method for Migration

A `:before` method is the recommended way to customize the update. The `property-list` argument contains old values of discarded slots, accessed with `getf`.

```lisp
;; This example shows the pattern for migrating from x/y to rho/theta
;; representation when a class is redefined.

(defclass coordinates ()
  ((x :initarg :x :initform 0 :accessor coord-x)
   (y :initarg :y :initform 0 :accessor coord-y)))

(defmethod update-instance-for-redefined-class :before
    ((instance coordinates) added-slots discarded-slots plist &key)
  ;; If x and y were discarded, compute rho and theta
  (when (and (member 'x discarded-slots)
             (member 'y discarded-slots))
    (let ((x (getf plist 'x 0))
          (y (getf plist 'y 0)))
      (when (slot-exists-p instance 'rho)
        (setf (slot-value instance 'rho) (sqrt (+ (* x x) (* y y)))))
      (when (slot-exists-p instance 'theta)
        (setf (slot-value instance 'theta) (atan y x))))))
```

### The Property List

The `property-list` is a plist where keys are slot names and values are the old slot values. Only slots that were discarded (removed or changed from local to shared) and had values appear in this list.

```lisp
;; Conceptual example of the arguments:
;; If a class originally had slots (a b c) and is redefined
;; to have slots (b c d), then:
;;   added-slots    = (d)
;;   discarded-slots = (a)
;;   property-list  = (a <old-value-of-a>)  ; if a was bound
```
