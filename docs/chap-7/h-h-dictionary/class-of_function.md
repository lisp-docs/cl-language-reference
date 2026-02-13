---
title: "class-of"
---

# class-of

import ClassOfFunction from './_class-of_function.md';

<ClassOfFunction />

## Expanded Reference: class-of

### Querying the Class of Built-In Objects

`class-of` returns the class of which the given object is a direct instance.

```lisp
(class-of 42)         ;; => #<BUILT-IN-CLASS FIXNUM> (or INTEGER, implementation-dependent)
(class-of "hello")    ;; => #<BUILT-IN-CLASS SIMPLE-BASE-STRING> (implementation-dependent)
(class-of 'foo)       ;; => #<BUILT-IN-CLASS SYMBOL>
(class-of #\a)        ;; => #<BUILT-IN-CLASS CHARACTER>
(class-of '(1 2 3))   ;; => #<BUILT-IN-CLASS CONS>
```

### Querying the Class of CLOS Instances

For user-defined classes, `class-of` returns the class created by `defclass`.

```lisp
(defclass animal ()
  ((name :initarg :name)))

(defclass dog (animal) ())

(let ((d (make-instance 'dog :name "Rex")))
  (class-name (class-of d)))
;; => DOG
```

### Comparing class-of with typep

`class-of` returns the most specific (direct) class, while `typep` checks membership in a class and all its superclasses.

```lisp
(defclass shape () ())
(defclass circle (shape) ())

(let ((c (make-instance 'circle)))
  (list (class-name (class-of c))  ;; Direct class
        (typep c 'circle)           ;; Is a circle
        (typep c 'shape)            ;; Is also a shape
        (typep c 'standard-object)));; Is also a standard-object
;; => (CIRCLE T T T)
```

### Using class-of with Structures

Structure types defined with `defstruct` also have classes.

```lisp
(defstruct point x y)

(let ((p (make-point :x 1 :y 2)))
  (class-name (class-of p)))
;; => POINT
```
