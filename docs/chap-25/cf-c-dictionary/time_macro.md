---
title: "time"
---

# time

import TimeMacro from './_time_macro.md';

<TimeMacro />

## Expanded Reference: time

### Measuring execution time

`time` evaluates a form, prints timing and resource usage information, and returns the form's values.

```lisp
(time (loop for i from 1 to 1000000 sum i))
; Evaluation took:
;   0.003 seconds of real time
;   0.003 seconds of total run time
;   ...
=> 500000500000  ; the actual return value
```

### Timing a function call

```lisp
(time (sleep 0.1))
; Evaluation took:
;   0.100 seconds of real time
;   ...
=> NIL
```

### The return value passes through

`time` returns exactly the same values as the form being timed.

```lisp
(multiple-value-bind (q r) (time (floor 17 5))
  (list q r))
; Prints timing information
=> (3 2)
```

### Timing a computation

The printed information is implementation-dependent but typically includes real time, run time, and memory allocation.

```lisp
(listp (time (make-list 100000)))
;; prints timing information (implementation-dependent)
;; => T
```
