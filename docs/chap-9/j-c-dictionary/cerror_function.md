---
title: "cerror"
---

# cerror

import CerrorFunction from './_cerror_function.md';

<CerrorFunction />

## Expanded Reference: cerror

### Basic Continuable Error

`cerror` signals a continuable error. The first argument is a format string describing what happens if the user continues; the second is the error message. If the `continue` restart is invoked, `cerror` returns `nil`.

```lisp
(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'continue))))
  (cerror "Skip the operation." "Cannot perform operation X."))

=> NIL
```

### Continuing Past a Correctable Error

`cerror` establishes a `continue` restart. When handled programmatically, you can invoke it to proceed.

```lisp
(defun safe-sqrt (n)
  (when (minusp n)
    (cerror "Use the absolute value instead."
            "Cannot take square root of ~D." n)
    (setq n (- n)))
  (sqrt n))

(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'continue))))
  (safe-sqrt -9))

=> 3.0
```

### Cerror with a Condition Type

You can pass a condition type name instead of a string for the error datum. The `continue-format-control` (first argument) is still a string describing the continue option.

```lisp
(define-condition invalid-input (error)
  ((value :initarg :value :reader invalid-input-value))
  (:report (lambda (c stream)
             (format stream "Invalid input: ~S" (invalid-input-value c)))))

(handler-bind ((invalid-input (lambda (c)
                                (declare (ignore c))
                                (invoke-restart 'continue))))
  (cerror "Use a default value." 'invalid-input :value "abc"))

=> NIL
```

### Looping Until a Valid Value is Provided

A classic pattern: keep signaling a continuable error until a valid value is supplied.

```lisp
(defun require-positive (n)
  (loop
    (when (and (numberp n) (plusp n))
      (return n))
    (cerror "Provide a new value."
            "~S is not a positive number." n)
    ;; In a real interactive session, the user would supply a new value.
    ;; Here we simulate it programmatically:
    (setq n 42)))

(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'continue))))
  (require-positive -5))

=> 42
```
