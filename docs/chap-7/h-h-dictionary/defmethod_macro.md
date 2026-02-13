---
title: "defmethod"
---

# defmethod

import DefmethodMacro from './_defmethod_macro.md';

<DefmethodMacro />

## Expanded Reference: defmethod

### Basic Method Definition

`defmethod` defines a method on a generic function, specialized on the types of its required arguments. If the generic function does not yet exist, it is automatically created.

```lisp
(defgeneric speak (animal))

(defmethod speak ((a string))
  (format nil "~A says something" a))

(speak "The parrot")
;; => "The parrot says something"
```

### Class-Based Specialization

Methods are most commonly specialized on classes defined with `defclass`.

```lisp
(defclass dog ()
  ((name :initarg :name :accessor dog-name)))

(defclass cat ()
  ((name :initarg :name :accessor cat-name)))

(defgeneric describe-animal (animal))

(defmethod describe-animal ((a dog))
  (format nil "~A is a good dog" (dog-name a)))

(defmethod describe-animal ((a cat))
  (format nil "~A is an independent cat" (cat-name a)))

(describe-animal (make-instance 'dog :name "Rex"))
;; => "Rex is a good dog"
(describe-animal (make-instance 'cat :name "Whiskers"))
;; => "Whiskers is an independent cat"
```

### EQL Specializers

Methods can be specialized on specific values using `(eql value)`. This is useful for dispatching on particular constants.

```lisp
(defgeneric factorial (n))

(defmethod factorial ((n (eql 0)))
  1)

(defmethod factorial ((n integer))
  (* n (factorial (1- n))))

(factorial 0)  ;; => 1
(factorial 5)  ;; => 120
```

### Qualified Methods -- :before, :after, :around

The standard method combination supports `:before`, `:after`, and `:around` qualifiers in addition to primary methods.

```lisp
(defclass account ()
  ((balance :initarg :balance :accessor account-balance :initform 0)))

(defgeneric withdraw (account amount))

(defmethod withdraw :before ((acc account) amount)
  (format t "Attempting to withdraw ~A~%" amount))

(defmethod withdraw ((acc account) amount)
  (decf (account-balance acc) amount)
  (account-balance acc))

(defmethod withdraw :after ((acc account) amount)
  (format t "Balance is now ~A~%" (account-balance acc)))

(let ((acc (make-instance 'account :balance 100)))
  (withdraw acc 30))
;; >> Attempting to withdraw 30
;; >> Balance is now 70
;; => 70
```

### :around Methods

An `:around` method wraps the entire method call. It can choose whether to call the next method via `call-next-method`.

```lisp
(defclass logged-account (account) ())

(defmethod withdraw :around ((acc logged-account) amount)
  (if (>= (account-balance acc) amount)
      (call-next-method)
      (format nil "Insufficient funds: balance is ~A" (account-balance acc))))

(let ((acc (make-instance 'logged-account :balance 50)))
  (withdraw acc 100))
;; => "Insufficient funds: balance is 50"
```

### Multiple Dispatch

Methods can specialize on more than one argument simultaneously.

```lisp
(defgeneric collide (a b))

(defmethod collide ((a string) (b string))
  (concatenate 'string a b))

(defmethod collide ((a number) (b number))
  (+ a b))

(defmethod collide ((a string) (b number))
  (format nil "~A~D" a b))

(collide "foo" "bar") ;; => "foobar"
(collide 3 4)         ;; => 7
(collide "x" 42)      ;; => "x42"
```
