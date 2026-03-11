---
title: "make-condition"
---

# make-condition

import MakeConditionFunction from './_make-condition_function.md';

<MakeConditionFunction />

## Expanded Reference: make-condition

### Creating a Simple Condition

`make-condition` constructs a condition object of the given type, initialized with the provided keyword arguments.

```lisp
(make-condition 'simple-error
                :format-control "File ~A not found"
                :format-arguments '("data.txt"))
==> #<SIMPLE-ERROR {00000000}>
```

### Printing a Condition

The format of the printed representation is controlled by the condition's `:report` option. When printed with `~A` (aesthetic), the report string is shown.

```lisp
(let ((c (make-condition 'simple-warning
                         :format-control "Disk ~A% full"
                         :format-arguments '(90))))
  (format nil "~A" c))

=> "Disk 90% full"
```

### Creating a Custom Condition

You can create instances of user-defined condition types.

```lisp
(define-condition validation-error (error)
  ((field :initarg :field :reader validation-error-field)
   (value :initarg :value :reader validation-error-value))
  (:report (lambda (c stream)
             (format stream "Validation failed for ~A: ~S"
                     (validation-error-field c)
                     (validation-error-value c)))))

(let ((c (make-condition 'validation-error
                         :field "email"
                         :value "not-an-email")))
  (values (validation-error-field c)
          (validation-error-value c)))

=> "email"
```

### Passing a Condition to error

A pre-constructed condition can be passed directly to `error`, `signal`, or `warn`.

```lisp
(let ((c (make-condition 'simple-error
                         :format-control "Unexpected value: ~S"
                         :format-arguments '(:bad))))
  (handler-case (error c)
    (simple-error (caught)
      (format nil "~A" caught))))

=> "Unexpected value: :BAD"
```

### Default Initform Values

If the condition type defines `:initform` defaults, `make-condition` uses them when no explicit value is supplied.

```lisp
(define-condition server-error (error)
  ((code :initarg :code :reader server-error-code :initform 500)
   (message :initarg :message :reader server-error-message
            :initform "Internal Server Error"))
  (:report (lambda (c stream)
             (format stream "~D: ~A"
                     (server-error-code c)
                     (server-error-message c)))))

(format nil "~A" (make-condition 'server-error))

=> "500: Internal Server Error"
```

```lisp
(format nil "~A" (make-condition 'server-error :code 404 :message "Not Found"))

=> "404: Not Found"
```
