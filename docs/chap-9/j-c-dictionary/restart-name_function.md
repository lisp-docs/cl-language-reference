---
title: "restart-name"
---

# restart-name

import RestartNameFunction from './_restart-name_function.md';

<RestartNameFunction />

## Expanded Reference: restart-name

### Getting the Name of a Restart

`restart-name` returns the name (a symbol) of a restart object, or `nil` if the restart is anonymous.

```lisp
(restart-case
    (restart-name (find-restart 'my-restart))
  (my-restart () nil))

=> MY-RESTART
```

### Listing Names of All Active Restarts

```lisp
(restart-case
    (mapcar #'restart-name (compute-restarts))
  (alpha () :report "Alpha." nil)
  (beta () :report "Beta." nil))
```

The result will be a list including `ALPHA`, `BETA`, plus any system-provided restarts such as `ABORT`.

### Anonymous Restarts Have NIL Names

```lisp
(restart-case
    (loop for r in (compute-restarts)
          when (null (restart-name r))
            collect :anonymous)
  (nil () :report "Anonymous restart." nil))
```

The result will include at least one `:ANONYMOUS` entry for the unnamed restart.
