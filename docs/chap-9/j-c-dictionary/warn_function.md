---
title: "warn"
---

# warn

import WarnFunction from './_warn_function.md';

<WarnFunction />

## Expanded Reference: warn

### Basic Warning

`warn` signals a condition of type `warning`. If no handler handles it, the warning message is printed to `*error-output*` and `warn` returns `nil`.

```lisp
(warn "The configuration file is missing.")
```

```
WARNING: The configuration file is missing.

=> NIL
```

### Warning with Format Arguments

Like `error`, `warn` accepts format control strings with arguments.

```lisp
(warn "Variable ~S has suspicious value ~S" 'x -1)
```

```
WARNING: Variable X has suspicious value -1

=> NIL
```

### Muffling a Warning

A handler can invoke the `muffle-warning` restart to suppress the warning output entirely.

```lisp
(handler-bind ((warning (lambda (c)
                          (declare (ignore c))
                          (muffle-warning))))
  (warn "This warning will not be printed.")
  :done)

=> :DONE
```

### Collecting Warnings

You can capture warnings instead of printing them, using `handler-bind` and the `muffle-warning` restart.

```lisp
(let ((collected '()))
  (handler-bind ((warning (lambda (c)
                            (push (format nil "~A" c) collected)
                            (muffle-warning))))
    (warn "First issue")
    (warn "Second issue"))
  (nreverse collected))

=> ("First issue" "Second issue")
```

### Warning with a Condition Type

You can pass a warning condition type symbol instead of a string.

```lisp
(define-condition deprecation-warning (warning)
  ((name :initarg :name :reader deprecation-name))
  (:report (lambda (c stream)
             (format stream "~S is deprecated." (deprecation-name c)))))

(handler-bind ((deprecation-warning
                (lambda (c)
                  (declare (ignore c))
                  (muffle-warning))))
  (warn 'deprecation-warning :name 'old-function)
  :ok)

=> :OK
```
