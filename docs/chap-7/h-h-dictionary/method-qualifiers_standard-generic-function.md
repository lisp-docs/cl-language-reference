---
title: "method-qualifiers"
---

# method-qualifiers

import MethodQualifiersStandardGenericFunction from './_method-qualifiers_standard-generic-function.md';

<MethodQualifiersStandardGenericFunction />

## Expanded Reference: method-qualifiers

### Inspecting Method Qualifiers

`method-qualifiers` returns the list of qualifiers of a method object. Unqualified (primary) methods return an empty list. Qualified methods return a list containing their qualifier keyword(s).

```lisp
(defgeneric process (x))
(defmethod process ((x integer)) x)
(defmethod process :before ((x integer)) (print "before"))
(defmethod process :after ((x integer)) (print "after"))
(defmethod process :around ((x integer)) (call-next-method))

;; Find all methods and check their qualifiers
(let ((methods (compute-applicable-methods #'process '(42))))
  (mapcar #'method-qualifiers methods))
;; The result will contain lists like: (:AROUND) (:BEFORE) NIL (:AFTER)
```

### Primary Methods Have Empty Qualifier Lists

An unqualified (primary) method has `()` as its qualifier list.

```lisp
(defgeneric foo (x))
(defmethod foo ((x t)) x)

(let ((method (first (compute-applicable-methods #'foo '(42)))))
  (method-qualifiers method))
=> NIL
;; (i.e., the empty list ())
```

### Distinguishing Method Types

You can use `method-qualifiers` to filter methods by their role.

```lisp
(defgeneric act (obj))
(defmethod act ((obj string)) obj)
(defmethod act :before ((obj string)) nil)
(defmethod act :after ((obj string)) nil)

(let* ((methods (compute-applicable-methods #'act '("test")))
       (primary (remove-if-not (lambda (m) (null (method-qualifiers m))) methods))
       (before  (remove-if-not (lambda (m) (equal (method-qualifiers m) '(:before))) methods)))
  (list (length primary) (length before)))
=> (1 1)
```
