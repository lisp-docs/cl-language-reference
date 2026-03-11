---
title: "function-keywords"
---

# function-keywords

import FunctionKeywordsStandardGenericFunction from './_function-keywords_standard-generic-function.md';

<FunctionKeywordsStandardGenericFunction />

## Expanded Reference: function-keywords

### Inspecting Keyword Parameters of a Method

`function-keywords` returns two values: a list of keyword parameter names accepted by a method, and a boolean indicating whether `&allow-other-keys` was specified.

```lisp
(defgeneric make-thing (type &key))

(defmethod make-thing ((type (eql :box)) &key width height depth)
  (list :box width height depth))

(let ((m (find-method #'make-thing '() (list (intern-eql-specializer :box)))))
  ;; Note: intern-eql-specializer is not standard; use find-method differently
  )

;; A more portable approach using compute-applicable-methods:
(defgeneric create-item (kind &key))

(defmethod create-item ((kind (eql :circle)) &key radius color)
  (list kind radius color))

;; Inspect keywords via a method found through the generic function
(let* ((methods (compute-applicable-methods #'create-item '(:circle)))
       (m (first methods)))
  (multiple-value-list (function-keywords m)))
=> ((:RADIUS :COLOR) NIL)
```

### Detecting &allow-other-keys

The second return value indicates whether the method accepts arbitrary keyword arguments.

```lisp
(defgeneric flexible-op (x &key))

(defmethod flexible-op ((x integer) &key start end &allow-other-keys)
  (list x start end))

(let* ((methods (compute-applicable-methods #'flexible-op '(42)))
       (m (first methods)))
  (multiple-value-list (function-keywords m)))
=> ((:START :END) T)
```

### Methods with No Keywords

A method without `&key` returns empty keyword information.

```lisp
(defgeneric simple-op (x))

(defmethod simple-op ((x number)) x)

(let* ((methods (compute-applicable-methods #'simple-op '(42)))
       (m (first methods)))
  (multiple-value-list (function-keywords m)))
=> (NIL NIL)
```
