---
title: "assert"
---

# assert

import AssertMacro from './_assert_macro.md';

<AssertMacro />

## Expanded Reference: assert

### Basic Assertion

`assert` evaluates a test form. If it returns true, `assert` returns `nil`. If false, it signals a correctable error.

```lisp
(assert (= 2 (+ 1 1)))

=> NIL
```

### Assertion Failure with a Custom Error Message

When the assertion fails, you can supply an error message using datum and argument forms after the places list.

```lisp
(let ((x 5))
  (handler-case
      (assert (evenp x) ()
        "Expected an even number, got ~D." x)
    (error (c)
      (format nil "~A" c))))

=> "Expected an even number, got 5."
```

### Specifying Places for Interactive Correction

The second argument to `assert` is a list of places whose values the user can change when continuing from the error. When the `continue` restart is invoked, `assert` re-evaluates the test form.

```lisp
(let ((x 0))
  (handler-bind
      ((error (lambda (c)
                (declare (ignore c))
                (setf x 10)
                (continue c))))
    (assert (plusp x) (x) "X must be positive, but got ~D." x)
    x))
;; => 10  (requires interactive input for places)
```

### Simple Assertion Without Places or Message

When called with just a test form, `assert` generates a default error message.

```lisp
(handler-case
    (assert nil)
  (error (c)
    (format nil "~A" c)))
```

This signals an error with an implementation-dependent message about the failed assertion.

### Practical Example: Validating Function Arguments

```lisp
(defun make-rectangle (width height)
  (assert (and (numberp width) (plusp width)) (width)
    "Width must be a positive number, got ~S." width)
  (assert (and (numberp height) (plusp height)) (height)
    "Height must be a positive number, got ~S." height)
  (list :rectangle :width width :height height))

(make-rectangle 10 20)

=> (:RECTANGLE :WIDTH 10 :HEIGHT 20)
```
