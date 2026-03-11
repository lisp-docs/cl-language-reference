---
title: "find-method"
---

# find-method

import FindMethodStandardGenericFunction from './_find-method_standard-generic-function.md';

<FindMethodStandardGenericFunction />

## Expanded Reference: find-method

### Finding a Method by Qualifiers and Specializers

`find-method` returns the method object on a generic function that matches the given qualifiers and specializers. Specializers must be class objects.

```lisp
(defgeneric process (x))

(defmethod process ((x integer)) (* x 2))
(defmethod process ((x string)) (string-upcase x))

(find-method #'process '() (list (find-class 'integer)))
==> #<STANDARD-METHOD PROCESS (INTEGER) ...>
```

### Finding Qualified Methods

To find a `:before`, `:after`, or `:around` method, pass the qualifier in the qualifiers list.

```lisp
(defgeneric act (x))

(defmethod act ((x number)) x)
(defmethod act :before ((x number)) (format t "before~%"))

;; Find the primary method
(find-method #'act '() (list (find-class 'number)))
==> #<STANDARD-METHOD ACT (NUMBER) ...>

;; Find the :before method
(find-method #'act '(:before) (list (find-class 'number)))
==> #<STANDARD-METHOD ACT (:BEFORE) (NUMBER) ...>
```

### Handling Missing Methods

By default, `find-method` signals an error when no matching method is found. Pass `nil` as the fourth argument to return `nil` instead.

```lisp
(defgeneric typed-op (x))
(defmethod typed-op ((x string)) x)

;; No method for integers -- would signal error without nil
(find-method #'typed-op '() (list (find-class 'integer)) nil)
=> NIL
```

### Using find-method with remove-method

A common pattern is to find a method and then remove it.

```lisp
(defgeneric calc (x))
(defmethod calc ((x integer)) (* x 10))

(calc 5)
=> 50

(let ((m (find-method #'calc '() (list (find-class 'integer)))))
  (remove-method #'calc m))

;; Method has been removed
(find-method #'calc '() (list (find-class 'integer)) nil)
=> NIL
```
