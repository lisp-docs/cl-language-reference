---
title: "class-name"
---

# class-name

import ClassNameStandardGenericFunction from './_class-name_standard-generic-function.md';

<ClassNameStandardGenericFunction />

## Expanded Reference: class-name

### Getting the Name of a Class

`class-name` returns the symbol that names a class object. It is the inverse of `find-class`.

```lisp
(class-name (find-class 'integer))
;; => INTEGER

(class-name (find-class 'string))
;; => STRING
```

### With User-Defined Classes

```lisp
(defclass vehicle ()
  ((make :initarg :make)))

(class-name (find-class 'vehicle))
;; => VEHICLE
```

### Using class-name with class-of

A common pattern is to get the class name of an object by combining `class-of` and `class-name`.

```lisp
(defclass dog () ())

(let ((d (make-instance 'dog)))
  (class-name (class-of d)))
;; => DOG
```

### Setting the Class Name

`(setf class-name)` can change the name stored in a class object. Note that this does not update `find-class`.

```lisp
(defclass temp-class () ())
(let ((cls (find-class 'temp-class)))
  (setf (class-name cls) 'renamed-class)
  (class-name cls))
;; => RENAMED-CLASS
```
