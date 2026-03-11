---
title: "unbound-variable"
---

# unbound-variable

import UnboundVariableConditionType from './_unbound-variable_condition-type.md';

<UnboundVariableConditionType />

## Expanded Reference: unbound-variable

### Basic error handling

The `unbound-variable` condition is signaled when code attempts to read the value of a symbol that has no value binding.

```lisp
(handler-case (symbol-value (gensym))
  (unbound-variable () :caught-it))
=> :CAUGHT-IT
```

### Retrieving the variable name from the condition

`unbound-variable` is a subtype of `cell-error`, so you can use `cell-error-name` to find out which variable was unbound.

```lisp
(let ((sym (make-symbol "MY-VAR")))
  (handler-case (symbol-value sym)
    (unbound-variable (c)
      (cell-error-name c))))
;; => #:MY-VAR
```

### Condition hierarchy

`unbound-variable` is part of the condition hierarchy: it inherits from `cell-error`, `error`, `serious-condition`, and `condition`.

```lisp
(let ((sym (gensym)))
  (handler-case (symbol-value sym)
    (cell-error () :caught-as-cell-error)))
=> :CAUGHT-AS-CELL-ERROR

(let ((sym (gensym)))
  (handler-case (symbol-value sym)
    (error () :caught-as-error)))
=> :CAUGHT-AS-ERROR
```

### Using handler-bind for restarts

You can use `handler-bind` to inspect the condition and potentially invoke restarts.

```lisp
(defvar *fallback-value* :default)

(handler-case
    (let ((sym (gensym)))
      (handler-bind ((unbound-variable
                       (lambda (c)
                         (declare (ignore c))
                         (invoke-restart 'use-value *fallback-value*))))
        (symbol-value sym)))
  ;; If use-value restart is not available, catch the error
  (unbound-variable () *fallback-value*))
=> :DEFAULT
```

### After makunbound

`makunbound` makes a previously bound symbol unbound, causing subsequent reads to signal `unbound-variable`.

```lisp
(setf (symbol-value 'test-unbound) 10)
(makunbound 'test-unbound)

(handler-case (symbol-value 'test-unbound)
  (unbound-variable (c)
    (format nil "~A is unbound" (cell-error-name c))))
=> "TEST-UNBOUND is unbound"
```
