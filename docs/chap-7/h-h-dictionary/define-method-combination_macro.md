---
title: "define-method-combination"
---

# define-method-combination

import DefineMethodCombinationMacro from './_define-method-combination_macro.md';

<DefineMethodCombinationMacro />

## Expanded Reference: define-method-combination

### Short Form: Simple Operator-Based Combination

The short form of `define-method-combination` creates a combination that applies an operator to the results of all primary methods.

```lisp
;; Define a method combination that multiplies results
(define-method-combination * :identity-with-one-argument t)

(defgeneric scaling-factor (obj)
  (:method-combination *))

(defclass base-widget () ())
(defclass scaled-widget (base-widget) ())
(defclass double-scaled (scaled-widget) ())

(defmethod scaling-factor * ((obj base-widget)) 2)
(defmethod scaling-factor * ((obj scaled-widget)) 3)
(defmethod scaling-factor * ((obj double-scaled)) 5)

;; All applicable methods are combined with *
(scaling-factor (make-instance 'double-scaled))
;; => 30  (= 5 * 3 * 2)
```

### Short Form with :around Methods

Short-form method combinations automatically support `:around` methods.

```lisp
(define-method-combination max :identity-with-one-argument t)

(defgeneric priority (item)
  (:method-combination max))

(defclass task () ())
(defclass urgent-task (task) ())

(defmethod priority max ((item task)) 1)
(defmethod priority max ((item urgent-task)) 10)

(defmethod priority :around ((item task))
  (let ((p (call-next-method)))
    (format t "Priority computed: ~A~%" p)
    p))

(priority (make-instance 'urgent-task))
;; >> Priority computed: 10
;; => 10
```

### Built-In Method Combination Types

Common Lisp provides several built-in method combination types: `+`, `and`, `or`, `list`, `append`, `nconc`, `min`, `max`, `progn`.

```lisp
(defgeneric all-names (obj)
  (:method-combination list))

(defclass named ()
  ((name :initarg :name :reader obj-name)))
(defclass titled (named)
  ((title :initarg :title :reader obj-title)))

(defmethod all-names list ((obj named))
  (obj-name obj))

(defmethod all-names list ((obj titled))
  (format nil "~A ~A" (obj-title obj) (obj-name obj)))

(all-names (make-instance 'titled :name "Smith" :title "Dr."))
;; => ("Dr. Smith" "Smith")
```

### Short Form with Ordering

Short-form method combinations accept an optional ordering argument (`:most-specific-first` or `:most-specific-last`).

```lisp
(defgeneric stages (pipeline)
  (:method-combination progn :most-specific-last))

(defclass base-pipeline () ())
(defclass logging-pipeline (base-pipeline) ())

(defmethod stages progn ((p base-pipeline))
  (format t "base stage~%"))

(defmethod stages progn ((p logging-pipeline))
  (format t "logging stage~%"))

(stages (make-instance 'logging-pipeline))
;; >> base stage
;; >> logging stage
;; (base runs first due to :most-specific-last)
```
