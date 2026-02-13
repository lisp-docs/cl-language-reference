---
title: "defclass"
---

# defclass

import DefclassMacro from './_defclass_macro.md';

<DefclassMacro />

## Expanded Reference: defclass

### Basic Class Definition

The simplest use of `defclass` defines a class with named slots. Each slot can have an `:initarg` for initialization, an `:initform` for a default value, and an `:accessor` for reading and writing.

```lisp
(defclass person ()
  ((name :initarg :name
         :accessor person-name)
   (age  :initarg :age
         :accessor person-age
         :initform 0)))
;; => #<STANDARD-CLASS PERSON>

(let ((p (make-instance 'person :name "Alice" :age 30)))
  (list (person-name p) (person-age p)))
;; => ("Alice" 30)
```

### Inheritance

A class can inherit from one or more superclasses. Slots from all superclasses are combined in the new class. The class precedence list determines which methods and slot options take priority.

```lisp
(defclass animal ()
  ((species :initarg :species
            :accessor animal-species)))

(defclass pet (animal)
  ((name :initarg :name
         :accessor pet-name)
   (owner :initarg :owner
          :accessor pet-owner
          :initform nil)))

(let ((dog (make-instance 'pet :species "Canis familiaris" :name "Rex")))
  (list (animal-species dog) (pet-name dog) (pet-owner dog)))
;; => ("Canis familiaris" "Rex" NIL)

;; The class also defines a type
(typep dog 'pet)    ;; => T
(typep dog 'animal) ;; => T
```

### Slot Options -- :reader, :writer, and :accessor

The `:reader` option creates only a reader generic function, `:writer` creates only a writer, and `:accessor` creates both. You can specify multiple readers or accessors for a single slot.

```lisp
(defclass point ()
  ((x :initarg :x :reader point-x)
   (y :initarg :y :reader point-y)))

(let ((p (make-instance 'point :x 3 :y 4)))
  ;; Reader works
  (list (point-x p) (point-y p)))
;; => (3 4)

;; To modify, use slot-value since we only defined readers
(let ((p (make-instance 'point :x 0 :y 0)))
  (setf (slot-value p 'x) 10)
  (point-x p))
;; => 10
```

### Shared (Class-Allocated) Slots

Using `:allocation :class`, a slot is shared among all instances. Changes to the slot through any instance (or the class itself) are visible everywhere.

```lisp
(defclass counter ()
  ((count :allocation :class
          :initform 0
          :accessor counter-count)
   (id    :initarg :id
          :accessor counter-id)))

(let ((a (make-instance 'counter :id 1))
      (b (make-instance 'counter :id 2)))
  (incf (counter-count a))
  (incf (counter-count b))
  ;; Both see the shared count
  (list (counter-count a) (counter-count b)))
;; => (2 2)
```

### Default Initargs

The `:default-initargs` class option provides defaults for initialization arguments that are not supplied to `make-instance`. These defaults are evaluated at instance creation time.

```lisp
(defclass timestamped ()
  ((created-at :initarg :created-at
               :reader created-at))
  (:default-initargs :created-at (get-universal-time)))

(let ((obj (make-instance 'timestamped)))
  (integerp (created-at obj)))
;; => T
```

### Documentation and Type Declarations

Slots and classes can have documentation strings and type declarations.

```lisp
(defclass temperature-reading ()
  ((value :initarg :value
          :accessor reading-value
          :type number
          :documentation "The temperature value in Celsius.")
   (unit  :initarg :unit
          :accessor reading-unit
          :initform :celsius))
  (:documentation "Represents a temperature measurement."))

(let ((r (make-instance 'temperature-reading :value 36.6)))
  (list (reading-value r) (reading-unit r)))
;; => (36.6 :CELSIUS)
```
