---
title: "sleep"
---

# sleep

import SleepFunction from './_sleep_function.md';

<SleepFunction />

## Expanded Reference: sleep

### Pausing execution

`sleep` causes the program to pause for approximately the specified number of seconds. It always returns nil.

```lisp
(sleep 1)
→ NIL
```

### Fractional seconds

The argument can be any non-negative real number, including fractions for sub-second pauses.

```lisp
(sleep 0.5)
→ NIL

(sleep 1/10)
→ NIL
```

### Measuring sleep duration

You can verify sleep duration using `get-internal-real-time`.

```lisp
(let ((start (get-internal-real-time)))
  (sleep 0.2)
  (let ((elapsed (/ (- (get-internal-real-time) start)
                    (float internal-time-units-per-second))))
    (>= elapsed 0.2)))
→ T
```

### Zero-second sleep

Sleeping for zero seconds is permitted and returns immediately.

```lisp
(sleep 0)
→ NIL
```
