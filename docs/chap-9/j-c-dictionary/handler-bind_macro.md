---
title: "handler-bind"
---

# handler-bind

import HandlerBindMacro from './_handler-bind_macro.md';

<HandlerBindMacro />

## Expanded Reference: handler-bind

:::tip
TODO: Please contribute to this page by adding explanations and examples
:::

```lisp
(handler-bind )
```

### Basic Condition Handling

Demonstrates how to establish a handler for a simple error condition.

```lisp
(handler-bind ((error #'(lambda (c) (format t "Caught an error: ~a~%" c))))
  (error "This is an error condition."))
```

### Handling Multiple Conditions

Shows how to define handlers for different types of conditions, with more specific handlers taking precedence.

```lisp
(handler-bind ((simple-error #'(lambda (c) (format t "Caught a simple-error: ~a~%" c)))
               (error        #'(lambda (c) (format t "Caught a general error: ~a~%" c))))
  (error "This is a simple-error."))

(handler-bind ((error        #'(lambda (c) (format t "Caught a general error: ~a~%" c)))
               (simple-error #'(lambda (c) (format t "Caught a simple-error: ~a~%" c))))
  (signal 'simple-error :format-control "Another simple-error."))
```

### Handler-bind and `CONTINUE` Restart

This example illustrates how `handler-bind` can be used to provide a handler that invokes a restart, allowing the computation to proceed.

```lisp
(defun my-function (x)
  (restart-case
      (when (zerop x)
        (error "Cannot divide by zero."))
    (continue ()
      :report "Proceed with a default value of 1."
      1)))

(handler-bind ((error #'(lambda (c)
                          (declare (ignore c))
                          (invoke-restart 'continue))))
  (print (my-function 0)))
```

### Using `handler-bind` with `WARN`

Demonstrates how to capture and process warnings instead of letting them print to `*error-output*` directly.

```lisp
(let ((warnings-caught '()))
  (handler-bind ((warning #'(lambda (c) (push c warnings-caught))))
    (warn "First warning.")
    (warn "Second warning."))
  (format t "Collected warnings: ~a~%" (mapcar #'princ-to-string warnings-caught)))
```
