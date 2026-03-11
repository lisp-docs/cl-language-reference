---
title: "add-method"
---

# add-method

import AddMethodStandardGenericFunction from './_add-method_standard-generic-function.md';

<AddMethodStandardGenericFunction />

## Expanded Reference: add-method

### Adding a Method Programmatically

`add-method` adds a method object to a generic function. This is the low-level operation that `defmethod` uses internally. It is mainly useful for metaprogramming.

```lisp
(defgeneric greet (who))

;; find-method after defmethod
(defmethod greet ((who string))
  (format nil "Hello, ~A!" who))

;; The method is now on the generic function
(greet "World")
=> "Hello, World!"
```

### Replacing an Existing Method

If a method with the same specializers and qualifiers already exists, `add-method` replaces it.

```lisp
(defgeneric describe-number (n))

(defmethod describe-number ((n integer))
  "an integer")

(describe-number 42)
=> "an integer"

;; Redefining with defmethod replaces via add-method internally
(defmethod describe-number ((n integer))
  "a whole number")

(describe-number 42)
=> "a whole number"
```

### Using add-method with find-method and remove-method

You can combine `add-method` with `find-method` and `remove-method` for dynamic method manipulation.

```lisp
(defgeneric op (x))

(defmethod op ((x number)) (* x 2))

(op 5)
=> 10

;; Find and remove the method
(let ((m (find-method #'op '() (list (find-class 'number)))))
  (remove-method #'op m))

;; Now no method is applicable for numbers
(handler-case (op 5)
  (error () "no method"))
=> "no method"
```
