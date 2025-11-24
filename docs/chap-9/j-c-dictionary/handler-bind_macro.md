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

```lisp
Caught an error: This is an error condition.
; Debugger entered on #<SIMPLE-ERROR "This is an error condition." {7007D435D3}>
```

### Handling Multiple Conditions
Shows how to define handlers for different types of conditions. The first bound handler is invoked first. Even if it's **less specific**

> If more than one handler binding is supplied, the handler bindings are searched sequentially from top to bottom in search of a match

```lisp
(handler-bind ((error        #'(lambda (c) (format t "Caught a general error: ~a~%" c)))
               (simple-error #'(lambda (c) (format t "Caught a simple-error: ~a~%" c))))
  (error 'simple-error :format-control "Another simple-error."))
```

Results in this:

```lisp
Caught a general error: Another simple-error.
Caught a simple-error: Another simple-error.
; Debugger entered on #<SIMPLE-ERROR "Another simple-error." {7008596B73}>
```

Notice the order of the printouts is not based on what's more specific, rather on what was defined first top to bottom.


### Declining to Handle a Condition
If a handler returns normally, it is said to have declined to handle the condition. The system then searches for the next available handler. In this example, two handlers for `warning` are established. When a warning is signaled, both handlers are run because they both return normally. They are run in top to bottom

```lisp
(handler-bind ((warning #'(lambda (c) (format t "Top handler sees: ~a~%" c)))
               (warning #'(lambda (c) (format t "Bottom handler sees: ~a~%" c))))
  (warn "A warning is signaled."))
```

```lisp
Top handler sees: A warning is signaled.
Bottom handler sees: A warning is signaled.
WARNING: A warning is signaled.
NIL
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

```lisp
1 
5 
5 (3 bits, #x5, #o5, #b101)
```

Notice that there was no printout in the REPL about an error or even a warning.

Note (since we don't have a way to color code these code blocks like in slime/sly): The first two lines are print outs, the third line is a value returned.

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

```lisp
Collected warnings: (First warning. Second warning.)
NIL
```