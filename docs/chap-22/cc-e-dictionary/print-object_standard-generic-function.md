---
title: "print-object"
---

# print-object

import PrintObjectStandardGenericFunction from './_print-object_standard-generic-function.md';

<PrintObjectStandardGenericFunction />

## Expanded Reference: print-object

### Defining a print-object Method for a Class

User-defined classes can have custom print representations by defining a method on `print-object`. The method should always print to the supplied stream.

```lisp
(defclass person ()
  ((name :initarg :name :accessor person-name)
   (age  :initarg :age  :accessor person-age)))

(defmethod print-object ((p person) stream)
  (print-unreadable-object (p stream :type t :identity t)
    (format stream "~A age ~D" (person-name p) (person-age p))))

(make-instance 'person :name "Alice" :age 30)
==> #<PERSON Alice age 30 {10042A0003}>
```

### Respecting *print-escape*

A well-written `print-object` method should check `*print-escape*` to decide whether to print readably or aesthetically.

```lisp
(defclass color ()
  ((name :initarg :name :accessor color-name)))

(defmethod print-object ((c color) stream)
  (if *print-escape*
      (print-unreadable-object (c stream :type t)
        (prin1 (color-name c) stream))
      (princ (color-name c) stream)))

(let ((c (make-instance 'color :name "red")))
  (list (prin1-to-string c)
        (princ-to-string c)))
=> ("#<COLOR \"red\">" "red")
```

### Printing Structures

Structures use the default `#S(...)` notation unless a `:print-function` or `:print-object` option is given.

```lisp
(defstruct point x y)

(make-point :x 3 :y 4)
;; => #S(POINT :X 3 :Y 4)

;; Custom print-object for a structure
(defstruct (vec2 (:constructor make-vec2 (x y)))
  x y)

(defmethod print-object ((v vec2) stream)
  (print-unreadable-object (v stream :type t)
    (format stream "(~A, ~A)" (vec2-x v) (vec2-y v))))

(make-vec2 3.0 4.0)
==> #<VEC2 (3.0, 4.0)>
```
