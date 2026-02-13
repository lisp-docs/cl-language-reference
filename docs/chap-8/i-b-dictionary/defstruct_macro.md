---
title: "defstruct"
---

# defstruct

import DefstructMacro from './_defstruct_macro.md';

<DefstructMacro />

## Expanded Reference: defstruct

### Basic Structure Definition

`defstruct` defines a new structure type with named slots. It automatically creates a constructor, a copier, a predicate, and accessor functions.

```lisp
(defstruct point x y)
;; => POINT

(setq p (make-point :x 3 :y 4))
;; => #S(POINT :X 3 :Y 4)

(point-x p)
;; => 3

(point-y p)
;; => 4

(point-p p)
;; => T

(point-p "not a point")
;; => NIL
```

### Slots with Default Values and Types

```lisp
(defstruct town
  area
  watertowers
  (firetrucks 1 :type fixnum)
  population
  (elevation 5128 :read-only t))
;; => TOWN

(setq t1 (make-town :area 100 :watertowers 2))
;; => #S(TOWN ...)

(town-firetrucks t1)
;; => 1  (default value)

(town-elevation t1)
;; => 5128  (read-only, cannot be modified with setf)
```

### Modifying Slots with setf

```lisp
(setf (town-population t1) 5000)
;; => 5000

(town-population t1)
;; => 5000
```

### Custom Constructor and Prefix

```lisp
(defstruct (door (:conc-name dr-))
  knob-color width material)
;; => DOOR

(setq my-door (make-door :knob-color 'red :width 5.0))
;; => #S(DOOR ...)

(dr-width my-door)
;; => 5.0

(dr-knob-color my-door)
;; => RED
```

### Structure Inheritance with :include

```lisp
(defstruct person name age)
;; => PERSON

(defstruct (employee (:include person))
  company salary)
;; => EMPLOYEE

(setq emp (make-employee :name "Alice" :age 30
                         :company "Acme" :salary 50000))
;; => #S(EMPLOYEE ...)

;; Person accessors work on employees:
(person-name emp)
;; => "Alice"

;; Type hierarchy:
(typep emp 'person)
;; => T

(typep emp 'employee)
;; => T
```

### BOA (By Order of Arguments) Constructor

```lisp
(defstruct (vec3
             (:constructor make-vec3 (x y z)))
  x y z)
;; => VEC3

(setq v (make-vec3 1.0 2.0 3.0))
;; => #S(VEC3 ...)

(vec3-x v)
;; => 1.0
```

### List-Based Structures with :type

```lisp
(defstruct (pair (:type list) :named)
  first second)
;; => PAIR

(make-pair :first 'a :second 'b)
;; => (PAIR A B)

(pair-p '(pair x y))
;; => T
```
