---
title: "call-method, make-method"
---

# call-method, make-method

import CallMethodLocalMacro from './_call-method_make-method_local-macro.md';

<CallMethodLocalMacro />

## Expanded Reference: call-method, make-method

### Overview

`call-method` and `make-method` are local macros available only within the body of `define-method-combination`. They are used to invoke methods and to create anonymous method objects in effective method forms.

### Usage in define-method-combination (Short Form)

The short form of `define-method-combination` uses `call-method` implicitly. You do not write `call-method` yourself in the short form.

```lisp
;; The short form creates an effective method that calls
;; each primary method with the named operator:
(define-method-combination my-and :operator and
  :identity-with-one-argument t)

(defgeneric all-valid-p (obj)
  (:method-combination my-and))

(defmethod all-valid-p my-and ((obj number))
  (plusp obj))

(all-valid-p 5) ;; => T
```

### Usage in define-method-combination (Long Form)

In the long form, `call-method` invokes a method object, and `make-method` creates an anonymous method from a form.

```lisp
;; A simple "list" method combination using the long form
(define-method-combination list-combo ()
  ((methods () :required t))
  `(list ,@(mapcar (lambda (m) `(call-method ,m)) methods)))

(defgeneric get-tags (obj)
  (:method-combination list-combo))

(defclass tagged () ())
(defclass special-tagged (tagged) ())

(defmethod get-tags list-combo ((obj tagged)) :tagged)
(defmethod get-tags list-combo ((obj special-tagged)) :special)

(get-tags (make-instance 'special-tagged))
;; => (:SPECIAL :TAGGED)
```
