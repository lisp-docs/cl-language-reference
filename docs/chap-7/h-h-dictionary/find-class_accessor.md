---
title: "find-class"
---

# find-class

import FindClassAccessor from './_find-class_accessor.md';

<FindClassAccessor />

## Expanded Reference: find-class

### Looking Up a Class by Name

`find-class` returns the class object associated with a given symbol. By default, it signals an error if no class is found.

```lisp
(find-class 'standard-class)
;; => #<STANDARD-CLASS STANDARD-CLASS>

(find-class 'integer)
;; => #<BUILT-IN-CLASS INTEGER>
```

### Suppressing the Error

Pass `nil` as the second argument (errorp) to return `nil` instead of signaling an error when no class is found.

```lisp
(find-class 'nonexistent-class nil)
;; => NIL

(find-class 'nonexistent-class nil nil)
;; => NIL
```

### Using find-class with User-Defined Classes

After `defclass`, the class is registered and can be looked up by name.

```lisp
(defclass vehicle ()
  ((make :initarg :make :accessor vehicle-make)))

(class-name (find-class 'vehicle))
;; => VEHICLE

;; You can use the class object with make-instance
(let ((v (make-instance (find-class 'vehicle) :make "Toyota")))
  (vehicle-make v))
;; => "Toyota"
```

### Setting a Class Name Mapping with setf

You can associate a symbol with a class object using `(setf find-class)`, or remove an association by setting it to `nil`.

```lisp
(defclass my-class () ())

;; Create an alias
(setf (find-class 'my-alias) (find-class 'my-class))

(eq (find-class 'my-alias) (find-class 'my-class))
;; => T

;; Remove the alias
(setf (find-class 'my-alias) nil)
(find-class 'my-alias nil)
;; => NIL
```

### Checking Built-In Types

All standard Common Lisp types that are classes can be looked up with `find-class`.

```lisp
(mapcar (lambda (name) (class-name (find-class name)))
        '(cons symbol string hash-table))
;; => (CONS SYMBOL STRING HASH-TABLE)
```
