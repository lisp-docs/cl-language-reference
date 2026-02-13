---
title: "method-combination"
---

# method-combination

import MethodCombinationSystemClass from './_method-combination_system-class.md';

<MethodCombinationSystemClass />

## Expanded Reference: method-combination

### The method-combination System Class

`method-combination` objects determine how the effective method is computed from the applicable methods of a generic function. The standard method combination uses primary, `:before`, `:after`, and `:around` methods.

```lisp
(defgeneric process (obj)
  (:method-combination standard))

(defmethod process :before ((obj string))
  (format t "Before: ~A~%" obj))

(defmethod process ((obj string))
  (format t "Primary: ~A~%" obj))

(defmethod process :after ((obj string))
  (format t "After: ~A~%" obj))

(process "test")
;; prints:
;; Before: test
;; Primary: test
;; After: test
;; => NIL
```

### Built-in Method Combinations

Common Lisp provides several built-in method combinations including `+`, `list`, `progn`, `and`, `or`, `max`, `min`, and `append`.

```lisp
(defgeneric total-weight (obj)
  (:method-combination +))

(defclass container () ())
(defclass heavy-container (container) ())

(defmethod total-weight + ((obj container)) 10)
(defmethod total-weight + ((obj heavy-container)) 50)

(total-weight (make-instance 'heavy-container))
;; => 60  (10 + 50)
```
