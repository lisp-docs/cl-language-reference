---
title: "define-condition"
---

# define-condition

import DefineConditionMacro from './_define-condition_macro.md';

<DefineConditionMacro />

## Expanded Reference: define-condition

### Defining a Simple Condition

`define-condition` creates a new condition type. Every condition type must inherit from `condition` (or a subtype). With no parent specified, it defaults to `condition`.

```lisp
(define-condition my-condition (condition)
  ()
  (:report (lambda (c stream)
             (declare (ignore c))
             (write-string "My condition occurred" stream))))

(format nil "~A" (make-condition 'my-condition))
```

```lisp
→ "My condition occurred"
```

### Condition with Slots and Readers

Slots are defined similarly to `defclass` slots. Use `:initarg` to set values at creation time and `:reader` to access them.

```lisp
(define-condition file-not-found (error)
  ((path :initarg :path :reader file-not-found-path))
  (:report (lambda (c stream)
             (format stream "File not found: ~A"
                     (file-not-found-path c)))))

(handler-case
    (error 'file-not-found :path "/tmp/missing.txt")
  (file-not-found (c)
    (file-not-found-path c)))
```

```lisp
→ "/tmp/missing.txt"
```

### Inheriting from Another Condition

A condition type can inherit slots and report behavior from its parent types.

```lisp
(define-condition network-error (error)
  ((host :initarg :host :reader network-error-host))
  (:report (lambda (c stream)
             (format stream "Network error on host ~A"
                     (network-error-host c)))))

(define-condition timeout-error (network-error)
  ((seconds :initarg :seconds :reader timeout-error-seconds))
  (:report (lambda (c stream)
             (format stream "Timeout after ~D seconds on host ~A"
                     (timeout-error-seconds c)
                     (network-error-host c)))))

(handler-case
    (error 'timeout-error :host "example.com" :seconds 30)
  (network-error (c)
    (format nil "~A" c)))
```

```lisp
→ "Timeout after 30 seconds on host example.com"
```

### Using :report with a String

The `:report` option can be a simple string for conditions that always report the same message.

```lisp
(define-condition out-of-coffee (warning)
  ()
  (:report "The coffee supply has been exhausted."))

(handler-bind ((warning (lambda (c)
                          (declare (ignore c))
                          (muffle-warning))))
  (warn 'out-of-coffee)
  :warned)
```

```lisp
→ :WARNED
```

### Slots with Default Values

Use `:initform` to provide default values for slots.

```lisp
(define-condition retry-error (error)
  ((attempts :initarg :attempts
             :reader retry-error-attempts
             :initform 3)
   (reason :initarg :reason
           :reader retry-error-reason
           :initform "unknown"))
  (:report (lambda (c stream)
             (format stream "Failed after ~D attempts: ~A"
                     (retry-error-attempts c)
                     (retry-error-reason c)))))

(handler-case (error 'retry-error)
  (retry-error (c)
    (format nil "~A" c)))
```

```lisp
→ "Failed after 3 attempts: unknown"
```

```lisp
(handler-case (error 'retry-error :attempts 5 :reason "server down")
  (retry-error (c)
    (format nil "~A" c)))
```

```lisp
→ "Failed after 5 attempts: server down"
```

### Multiple Inheritance

A condition can inherit from multiple parent types.

```lisp
(define-condition bad-data-warning (warning)
  ((data :initarg :data :reader bad-data-warning-data))
  (:report (lambda (c stream)
             (format stream "Bad data encountered: ~S"
                     (bad-data-warning-data c)))))

(define-condition bad-data-error (error)
  ((data :initarg :data :reader bad-data-error-data))
  (:report (lambda (c stream)
             (format stream "Bad data error: ~S"
                     (bad-data-error-data c)))))

;; A condition that is both a style-warning and has custom data
(define-condition suspicious-data (style-warning)
  ((data :initarg :data :reader suspicious-data-data))
  (:report (lambda (c stream)
             (format stream "Suspicious data: ~S"
                     (suspicious-data-data c)))))

(handler-bind ((style-warning (lambda (c)
                                (declare (ignore c))
                                (muffle-warning))))
  (warn 'suspicious-data :data '(1 2 nil 4))
  :ok)
```

```lisp
→ :OK
```
