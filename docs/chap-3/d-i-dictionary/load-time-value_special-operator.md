---
title: "load-time-value"
---

# load-time-value

import LoadTimeValueSpecialOperator from './_load-time-value_special-operator.md';

<LoadTimeValueSpecialOperator />

## Expanded Reference: load-time-value

### Basic Usage

`load-time-value` evaluates a form once at load time and embeds the result as a literal value in the code.

```lisp
(defun get-load-time ()
  (load-time-value (get-universal-time) t))
=> GET-LOAD-TIME

;; Every call returns the same value -- the time when the code was loaded:
(get-load-time)
;; => implementation-dependent
```

### Random Value Fixed at Load Time

```lisp
(defun lucky-number ()
  (load-time-value (random 100) t))
=> LUCKY-NUMBER

;; The random number is chosen once at load time, then remains constant:
(lucky-number)
;; => implementation-dependent
```

### Mutable vs. Read-Only

The second argument controls whether the resulting object may be treated as read-only. When `t`, the implementation may copy or coalesce the object.

```lisp
;; Read-only: the vector may be shared or placed in read-only memory
(defun get-constants ()
  (load-time-value #(a b c) t))

;; Mutable: the object must not be copied or coalesced
(defvar *data-source* (list (make-array 3 :initial-element 0)))

(defun get-mutable-array ()
  (load-time-value (first *data-source*) nil))
```
