---
title: "describe-object"
---

# describe-object

import DescribeObjectStandardGenericFunction from './_describe-object_standard-generic-function.md';

<DescribeObjectStandardGenericFunction />

## Expanded Reference: describe-object

### How describe-object works

`describe-object` is a generic function called by `describe`. Users can define methods on it to customize how their objects are described. It should print a description to the given stream and return no useful values.

```lisp
(defclass point ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)))

(defmethod describe-object ((p point) stream)
  (format stream "A point at (~A, ~A)" (point-x p) (point-y p)))

(describe (make-instance 'point :x 3 :y 4))
; Prints: A point at (3, 4)
=> ; no useful return value
```

### Default behavior

The default method provides a generic description based on the object's type and slots.

```lisp
(defclass person ()
  ((name :initarg :name)
   (age :initarg :age)))

(describe (make-instance 'person :name "Alice" :age 30))
; Implementation-dependent output showing class and slot values
=> ; no useful return value
```

### The stream argument

Methods must write to the provided stream rather than to `*standard-output*` directly. This allows `describe` to redirect output.

```lisp
(defclass point ()
  ((x :initarg :x :accessor point-x)
   (y :initarg :y :accessor point-y)))

(defmethod describe-object ((p point) stream)
  ;; Correct: write to the stream argument
  (format stream "Point(~A, ~A)" (point-x p) (point-y p)))

(with-output-to-string (s)
  (describe-object (make-instance 'point :x 1 :y 2) s))
=> "Point(1, 2)"
```
