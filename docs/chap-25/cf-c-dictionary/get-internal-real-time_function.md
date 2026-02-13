---
title: "get-internal-real-time"
---

# get-internal-real-time

import GetInternalRealTimeFunction from './_get-internal-real-time_function.md';

<GetInternalRealTimeFunction />

## Expanded Reference: get-internal-real-time

### Measuring elapsed wall-clock time

`get-internal-real-time` returns the current time in internal time units. The difference between two calls measures elapsed wall-clock time.

```lisp
(let ((start (get-internal-real-time)))
  (sleep 0.1)
  (let ((elapsed (- (get-internal-real-time) start)))
    (> elapsed 0)))
→ T
```

### Converting to seconds

Divide by `internal-time-units-per-second` to convert to seconds.

```lisp
(let ((start (get-internal-real-time)))
  (sleep 0.5)
  (let ((elapsed (- (get-internal-real-time) start)))
    (float (/ elapsed internal-time-units-per-second))))
→ 0.5  ; approximately, depending on system precision
```

### Higher resolution than universal time

Unlike `get-universal-time` which has one-second resolution, `get-internal-real-time` typically has sub-second resolution.

```lisp
(> internal-time-units-per-second 1)
→ T  ; typically 1000 or 1000000

;; Can measure sub-second intervals
(let ((start (get-internal-real-time)))
  (loop for i from 1 to 10000 sum i)
  (let ((elapsed (- (get-internal-real-time) start)))
    (>= elapsed 0)))
→ T
```

### Benchmarking with get-internal-real-time

A common pattern for benchmarking code.

```lisp
(defun benchmark (fn &optional (iterations 1000))
  (let ((start (get-internal-real-time)))
    (dotimes (i iterations) (funcall fn))
    (float (/ (- (get-internal-real-time) start)
              internal-time-units-per-second))))

(benchmark (lambda () (make-list 100)) 10000)
→ 0.05  ; approximate seconds; implementation-dependent
```
