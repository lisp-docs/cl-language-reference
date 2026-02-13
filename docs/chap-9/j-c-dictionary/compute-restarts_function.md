---
title: "compute-restarts"
---

# compute-restarts

import ComputeRestartsFunction from './_compute-restarts_function.md';

<ComputeRestartsFunction />

## Expanded Reference: compute-restarts

### Listing All Active Restarts

`compute-restarts` returns a list of all currently active restarts, ordered from innermost (most recently established) to outermost. This includes both user-defined and system-supplied restarts.

```lisp
(restart-case
    (mapcar #'restart-name (compute-restarts))
  (alpha () nil)
  (beta () nil))
```

The result will include `ALPHA`, `BETA`, and any system restarts (e.g., `ABORT`).

### Including Anonymous Restarts

Unlike `find-restart`, `compute-restarts` returns all restarts, including anonymous ones.

```lisp
(restart-case
    (length (compute-restarts))
  (nil () :report "Anonymous restart." nil)
  (named () :report "Named restart." nil))
```

This returns the total number of active restarts (at least 2 plus any system restarts).

### Filtering by Condition

When an optional condition argument is provided, only restarts associated with that condition (or not associated with any condition) are returned.

```lisp
(restart-case
    (handler-bind ((error (lambda (c)
                            (length (compute-restarts c)))))
      (error "test"))
  (fix () :report "Fix it." nil))
```

This returns the count of restarts applicable to the signaled error condition.

### Practical Example: Displaying Available Restarts

```lisp
(restart-case
    (dolist (r (compute-restarts))
      (format t "~S: ~A~%" (restart-name r) r))
  (try-again () :report "Try the operation again." nil)
  (give-up () :report "Give up entirely." nil))
```

```
TRY-AGAIN: Try the operation again.
GIVE-UP: Give up entirely.
; ...plus any system restarts
```
