---
title: "restart"
---

# restart

import RestartSystemClass from './_restart_system-class.md';

<RestartSystemClass />

## Expanded Reference: restart

### The restart System Class

`restart` is the system class for restart objects. Restarts represent points to which control can be transferred, typically established by `restart-case`, `restart-bind`, or `with-simple-restart`.

### Inspecting Restart Objects

Restart objects are returned by `find-restart` and `compute-restarts`. You can query them with `restart-name`.

```lisp
(restart-case
    (let ((r (find-restart 'my-restart)))
      (format nil "Restart: ~A, name: ~S"
              r (restart-name r)))
  (my-restart ()
    :report "Do something."
    nil))

=> "Restart: Do something., name: MY-RESTART"
```

### Restarts Are Not Conditions

Restarts and conditions are separate concepts. Conditions describe what went wrong; restarts describe what can be done about it.

```lisp
(restart-case
    (let ((restarts (compute-restarts)))
      (every (lambda (r) (typep r 'restart)) restarts))
  (my-restart () nil))

=> T
```

### Anonymous Restarts

Restarts can be anonymous (having a name of `nil`). They cannot be found by `find-restart` with a symbol argument, but they appear in `compute-restarts`.

```lisp
(restart-case
    (mapcar #'restart-name (compute-restarts))
  (nil ()
    :report "An anonymous restart."
    nil))
```

The result will include `NIL` for the anonymous restart, along with any system-supplied restarts.
