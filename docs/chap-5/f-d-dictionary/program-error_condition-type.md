---
title: "program-error"
---

# program-error

import ProgramErrorConditionType from './_program-error_condition-type.md';

<ProgramErrorConditionType />

## Expanded Reference: program-error

### Type Hierarchy

`program-error` is a subtype of `error` that represents errors resulting from incorrect program syntax or semantics detected at runtime (e.g., wrong number of arguments, invalid keyword arguments).

```lisp
(subtypep 'program-error 'error) ; → T, T
(subtypep 'program-error 'condition) ; → T, T
```

### Handling program-error with handler-case

A `program-error` may be signaled when calling a function with the wrong number of arguments or with invalid keyword arguments.

```lisp
;; Calling a function with wrong number of arguments
(handler-case
    (funcall (lambda (x) x) 1 2 3)
  (program-error (c)
    (format nil "Caught program-error: ~A" c)))
; → "Caught program-error: ..."  (message is implementation-dependent)
```

### Checking with typep

You can inspect a captured condition to confirm it is a `program-error`.

```lisp
;; Capture and inspect the condition
(let ((condition
        (handler-case
            (funcall (lambda (x) x))  ; too few arguments
          (error (c) c))))
  (values (typep condition 'program-error)
          (typep condition 'error)))
; → T, T  (implementation-dependent; some may signal a different error subtype)
```

### Signaling program-error Manually

You can signal a `program-error` in your own code to indicate a static programming mistake.

```lisp
(defun validate-mode (mode)
  (unless (member mode '(:read :write :append))
    (error 'program-error
           :format-control "Invalid mode: ~S. Expected :READ, :WRITE, or :APPEND."
           :format-arguments (list mode))))

(handler-case (validate-mode :delete)
  (program-error (c)
    (format nil "Caught: ~A" c)))
; → "Caught: ..."  (implementation-dependent)
```
