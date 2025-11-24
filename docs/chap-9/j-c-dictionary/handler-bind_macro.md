---
title: "handler-bind"
---

# handler-bind

import HandlerBindMacro from './_handler-bind_macro.md';

<HandlerBindMacro />

## Expanded Reference: handler-bind

### Basic Condition Handling
Demonstrates how to establish a handler for a simple error condition. The handler is invoked, prints a message, and since it doesn't transfer control, the program terminates.

```lisp
(handler-bind ((error #'(lambda (c)
                          (format t "Caught an error: ~a~%" c)
                          ;; Without a transfer of control, the thread is terminated
                          )))
  (error "This is an error condition."))
```

### Handling Multiple Conditions
Shows how to define handlers for different types of conditions. The most specific, most recently bound handler is invoked first.

- In the first form, the `simple-error` handler is more specific and is called.
- In the second form, the `simple-error` handler is more recently bound and is called.

```lisp
(handler-bind ((simple-error #'(lambda (c) (format t "Caught a simple-error: ~a~%" c)))
               (error        #'(lambda (c) (format t "Caught a general error: ~a~%" c))))
  (error 'simple-error :format-control "This is a simple-error."))

(handler-bind ((error        #'(lambda (c) (format t "Caught a general error: ~a~%" c)))
               (simple-error #'(lambda (c) (format t "Caught a simple-error: ~a~%" c))))
  (error 'simple-error :format-control "Another simple-error."))
```

### Declining to Handle a Condition
If a handler returns normally, it is said to have declined to handle the condition. The system then searches for the next available handler. In this example, two handlers for `warning` are established. When a warning is signaled, both handlers are run because they both return normally. They are run in reverse order of establishment (inside-out).

```lisp
(handler-bind ((warning #'(lambda (c) (format t "Outer handler sees: ~a~%" c)))
               (warning #'(lambda (c) (format t "Inner handler sees: ~a~%" c))))
  (warn "A warning is signaled."))
```

### Transferring Control with a Restart
A handler can transfer control by invoking a restart. This bypasses other handlers and can allow the program to continue execution.

```lisp
(defun my-function (x)
  (restart-case
      (if (zerop x)
          (error "Cannot divide by zero.")
          (/ 10 x))
    (continue ()
      :report "Return a default value of 1 instead."
      1)))

(handler-bind ((error #'(lambda (c)
                          (declare (ignore c))
                          (invoke-restart 'continue))))
  (print (my-function 0))
  (print (my-function 2)))
```

### Capturing and Muffling Warnings
Demonstrates how to capture warnings and prevent them from being printed to `*error-output*`. The handler pushes the warning condition onto a list and then invokes the `muffle-warning` restart.

```lisp
(let ((warnings-caught '()))
  (handler-bind ((warning #'(lambda (c)
                              (push (princ-to-string c) warnings-caught)
                              (muffle-warning c))))
    (warn "First warning.")
    (warn "Second warning."))
  (format t "Collected warnings: ~a~%" (reverse warnings-caught)))
```
