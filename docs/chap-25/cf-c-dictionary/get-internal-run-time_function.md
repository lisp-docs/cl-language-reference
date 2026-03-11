---
title: "get-internal-run-time"
---

# get-internal-run-time

import GetInternalRunTimeFunction from './_get-internal-run-time_function.md';

<GetInternalRunTimeFunction />

## Expanded Reference: get-internal-run-time

### Measuring CPU time

`get-internal-run-time` returns the CPU time used by the Lisp process, in internal time units. This excludes time spent waiting (sleeping, I/O, etc.).

```lisp
(let ((start (get-internal-run-time)))
  (loop for i from 1 to 1000000 sum i)
  (let ((elapsed (- (get-internal-run-time) start)))
    (>= elapsed 0)))
=> T
```

### Converting to seconds

Divide by `internal-time-units-per-second` to get seconds.

```lisp
(let ((start (get-internal-run-time)))
  (dotimes (i 1000000) (sqrt (float i)))
  (numberp (float (/ (- (get-internal-run-time) start)
                     internal-time-units-per-second))))
;; => T
```

### Difference from get-internal-real-time

`get-internal-real-time` measures wall-clock time, while `get-internal-run-time` measures CPU time. Sleep time increases real time but not run time.

```lisp
(let ((real-start (get-internal-real-time))
      (run-start (get-internal-run-time)))
  (sleep 0.5)
  (let ((real-elapsed (/ (- (get-internal-real-time) real-start)
                         (float internal-time-units-per-second)))
        (run-elapsed (/ (- (get-internal-run-time) run-start)
                        (float internal-time-units-per-second))))
    (> real-elapsed run-elapsed)))
=> T
```
