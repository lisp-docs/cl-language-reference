---
title: "call-next-method"
---

# call-next-method

import CallNextMethodLocalFunction from './_call-next-method_local-function.md';

<CallNextMethodLocalFunction />

## Expanded Reference: call-next-method

### Basic Usage in Primary Methods

`call-next-method` invokes the next most specific method in the method chain. When called with no arguments, it passes the original arguments.

```lisp
(defclass animal ()
  ((name :initarg :name :accessor animal-name)))

(defclass dog (animal) ())

(defgeneric describe-it (thing))

(defmethod describe-it ((a animal))
  (format nil "Animal: ~A" (animal-name a)))

(defmethod describe-it ((d dog))
  (format nil "Dog! ~A" (call-next-method)))

(describe-it (make-instance 'dog :name "Rex"))
=> "Dog! Animal: Rex"
```

### Building Results Through the Chain

Each method in the chain can contribute to the final result by combining its own logic with the result of `call-next-method`.

```lisp
(defclass base () ())
(defclass middle (base) ())
(defclass top (middle) ())

(defgeneric get-layers (obj))

(defmethod get-layers ((obj base))
  (list :base))

(defmethod get-layers ((obj middle))
  (cons :middle (call-next-method)))

(defmethod get-layers ((obj top))
  (cons :top (call-next-method)))

(get-layers (make-instance 'top))
=> (:TOP :MIDDLE :BASE)
```

### Using call-next-method in :around Methods

In `:around` methods, `call-next-method` is used to invoke the rest of the method combination (including other `:around` methods, `:before` methods, the primary method, and `:after` methods).

```lisp
(defgeneric process (item))

(defmethod process ((item string))
  (string-upcase item))

(defmethod process :around ((item string))
  (format nil "[~A]" (call-next-method)))

(process "hello")
=> "[HELLO]"
```

### Passing Different Arguments

You can pass explicit arguments to `call-next-method`. The new arguments must produce the same set of applicable methods as the original arguments.

```lisp
(defgeneric transform (x))

(defmethod transform ((x integer))
  (* x 10))

(defmethod transform :around ((x integer))
  (if (< x 0)
      (call-next-method (- x))   ;; Pass the absolute value
      (call-next-method)))

(transform -5)
=> 50
(transform 3)
=> 30
```

### Conditional Delegation

A method can test conditions before deciding whether to delegate to the next method.

```lisp
(defclass cacheable ()
  ((cache :initform (make-hash-table) :accessor obj-cache)))

(defgeneric compute (obj key))

(defmethod compute ((obj cacheable) key)
  (* key key))

(defmethod compute :around ((obj cacheable) key)
  (let ((cached (gethash key (obj-cache obj))))
    (or cached
        (let ((result (call-next-method)))
          (setf (gethash key (obj-cache obj)) result)
          result))))

(let ((obj (make-instance 'cacheable)))
  (list (compute obj 5) (compute obj 5)))
=> (25 25)
```
