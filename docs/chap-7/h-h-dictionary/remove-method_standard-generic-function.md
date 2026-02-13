---
title: "remove-method"
---

# remove-method

import RemoveMethodStandardGenericFunction from './_remove-method_standard-generic-function.md';

<RemoveMethodStandardGenericFunction />

## Expanded Reference: remove-method

### Removing a Method from a Generic Function

`remove-method` removes a method object from a generic function. It returns the generic function. If the method is not on the generic function, no error is signaled.

```lisp
(defgeneric transform (x))

(defmethod transform ((x integer)) (* x 2))
(defmethod transform ((x string)) (string-upcase x))

(transform 5)       ;; => 10
(transform "hello") ;; => "HELLO"

;; Remove the integer method
(let ((m (find-method #'transform '() (list (find-class 'integer)))))
  (remove-method #'transform m))

(transform "hello") ;; => "HELLO"

;; Integer method is gone
(find-method #'transform '() (list (find-class 'integer)) nil)
;; => NIL
```

### Removing Qualified Methods

You can also remove `:before`, `:after`, and `:around` methods.

```lisp
(defgeneric process (x))

(defmethod process ((x number)) x)
(defmethod process :before ((x number)) (format t "before~%"))

(process 42)
;; >> before
;; => 42

;; Remove the :before method
(let ((m (find-method #'process '(:before) (list (find-class 'number)))))
  (remove-method #'process m))

(process 42)
;; => 42  (no "before" printed)
```

### Safe Removal (No Error on Missing Method)

`remove-method` silently does nothing if the method is not present on the generic function.

```lisp
(defgeneric noop-gf (x))
(defmethod noop-gf ((x t)) x)

;; Removing the same method twice does not signal an error
(let ((m (find-method #'noop-gf '() (list (find-class 't)))))
  (remove-method #'noop-gf m)
  (remove-method #'noop-gf m))  ;; No error
```
