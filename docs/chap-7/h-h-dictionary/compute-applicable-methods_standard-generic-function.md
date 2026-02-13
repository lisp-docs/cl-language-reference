---
title: "compute-applicable-methods"
---

# compute-applicable-methods

import ComputeApplicableMethodsStandardGenericFunction from './_compute-applicable-methods_standard-generic-function.md';

<ComputeApplicableMethodsStandardGenericFunction />

## Expanded Reference: compute-applicable-methods

### Finding Methods for Given Arguments

`compute-applicable-methods` takes a generic function and a list of arguments, and returns the list of methods that would be applicable for those arguments, sorted by precedence.

```lisp
(defgeneric speak (animal))

(defmethod speak ((a string))
  (format nil "~A speaks" a))

(defmethod speak ((a number))
  (format nil "Number ~A" a))

(let ((methods (compute-applicable-methods #'speak '("hello"))))
  (length methods))
;; => 1
```

### Inspecting Method Ordering

The returned list is in precedence order, most specific first. This shows the actual method dispatch order.

```lisp
(defclass a () ())
(defclass b (a) ())
(defclass c (b) ())

(defgeneric process-obj (obj))

(defmethod process-obj ((obj a)) :a)
(defmethod process-obj ((obj b)) :b)
(defmethod process-obj ((obj c)) :c)

(let* ((obj (make-instance 'c))
       (methods (compute-applicable-methods #'process-obj (list obj))))
  (length methods))
;; => 3
;; The methods are in order: C, B, A (most specific first)
```

### No Applicable Methods

When no methods match, an empty list is returned.

```lisp
(defgeneric typed-op (x))
(defmethod typed-op ((x string)) x)

(compute-applicable-methods #'typed-op '(42))
;; => NIL
```

### Checking Qualifiers on Applicable Methods

You can combine `compute-applicable-methods` with `method-qualifiers` to inspect which qualified methods would apply.

```lisp
(defgeneric do-work (x))
(defmethod do-work ((x number)) x)
(defmethod do-work :before ((x integer)) (format t "before~%"))
(defmethod do-work :after ((x integer)) (format t "after~%"))

(let ((methods (compute-applicable-methods #'do-work '(42))))
  (mapcar #'method-qualifiers methods))
;; => ((:BEFORE) NIL NIL (:AFTER))
;; (The exact order depends on the implementation's method list ordering)
```
