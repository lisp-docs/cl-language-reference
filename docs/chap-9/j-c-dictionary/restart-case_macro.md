---
title: "restart-case"
---

# restart-case

import RestartCaseMacro from './_restart-case_macro.md';

<RestartCaseMacro />

## Expanded Reference: restart-case

### Basic Restart

`restart-case` evaluates a form in a dynamic environment where named restarts are available. If a restart is invoked, control transfers to the corresponding clause.

```lisp
(restart-case
    (error "Something went wrong")
  (use-default ()
    :report "Use a default value."
    42))
```

When a handler invokes the `use-default` restart:

```lisp
(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'use-default))))
  (restart-case
      (error "Something went wrong")
    (use-default ()
      :report "Use a default value."
      42)))
```

```lisp
→ 42
```

### Restart with Arguments

Restart clauses can accept arguments passed by `invoke-restart`.

```lisp
(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'use-value 99))))
  (restart-case
      (error "No valid input")
    (use-value (v)
      :report "Supply a value to use."
      v)))
```

```lisp
→ 99
```

### Multiple Restarts

You can define multiple restarts for a single signaling form, giving the handler choices.

```lisp
(defun parse-integer-or-restart (str)
  (restart-case
      (let ((result (parse-integer str :junk-allowed t)))
        (if result
            result
            (error "Cannot parse ~S as an integer." str)))
    (use-zero ()
      :report "Use zero instead."
      0)
    (use-value (v)
      :report "Supply an integer to use."
      v)))

(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'use-zero))))
  (parse-integer-or-restart "abc"))
```

```lisp
→ 0
```

### Normal Return When No Restart Is Invoked

If the restartable form completes normally, its return values are returned by `restart-case`.

```lisp
(restart-case
    (+ 1 2)
  (abort ()
    :report "Abort the computation."
    nil))
```

```lisp
→ 3
```

### Restart with :report and :test

The `:report` option describes the restart for the user. The `:test` option controls when the restart is visible.

```lisp
(define-condition recoverable-error (error)
  ()
  (:report "A recoverable error occurred."))

(handler-bind ((recoverable-error
                (lambda (c)
                  (declare (ignore c))
                  (invoke-restart 'retry))))
  (let ((attempts 0))
    (restart-case
        (progn
          (incf attempts)
          (if (< attempts 3)
              (error 'recoverable-error)
              attempts))
      (retry ()
        :report "Retry the operation."
        ;; After transfer, restart-case returns this:
        :retried))))
```

```lisp
→ :RETRIED
```

### Practical Pattern: Retry Loop with restart-case

A common idiom wraps `restart-case` in a loop so that the `retry` restart re-enters the operation.

```lisp
(defun fetch-data (source)
  (let ((attempt 0))
    (loop
      (restart-case
          (progn
            (incf attempt)
            (if (<= attempt 2)
                (error "Connection failed (attempt ~D)" attempt)
                (return (format nil "Data from ~A" source))))
        (retry ()
          :report "Retry the connection.")))))

(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (let ((r (find-restart 'retry)))
                          (when r (invoke-restart r))))))
  (fetch-data "server.example.com"))
```

```lisp
→ "Data from server.example.com"
```
