---
title: "internal-time-units-per-second"
---

# internal-time-units-per-second

import InternalTimeUnitsPerSecondConstantVariable from './_internal-time-units-per-second_constant-variable.md';

<InternalTimeUnitsPerSecondConstantVariable />

## Expanded Reference: internal-time-units-per-second

### The resolution of internal time

`internal-time-units-per-second` is a positive integer indicating how many units of internal time correspond to one second. This determines the resolution of `get-internal-real-time` and `get-internal-run-time`.

```lisp
(integerp internal-time-units-per-second)
=> T

(> internal-time-units-per-second 0)
=> T

internal-time-units-per-second
;; => impl-dependent (e.g., 1000 or 1000000)
```

### Converting internal time to seconds

Divide an internal time value by this constant to get seconds as a ratio or float.

```lisp
(let ((start (get-internal-real-time)))
  (sleep 1)
  (let ((elapsed (- (get-internal-real-time) start)))
    (> (float (/ elapsed internal-time-units-per-second)) 0.9)))
;; => T
```

### Converting seconds to internal time units

Multiply seconds by this constant to get internal time units.

```lisp
;; 0.5 seconds in internal time units
(> (* 0.5 internal-time-units-per-second) 0)
;; => T
```

### This is a constant, not a function

Unlike most entries, `internal-time-units-per-second` is a constant variable, not a function. It does not take arguments.

```lisp
(constantp 'internal-time-units-per-second)
=> T
```
