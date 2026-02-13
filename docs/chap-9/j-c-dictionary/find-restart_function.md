---
title: "find-restart"
---

# find-restart

import FindRestartFunction from './_find-restart_function.md';

<FindRestartFunction />

## Expanded Reference: find-restart

### Finding an Active Restart

`find-restart` searches for the most recently established restart with the given name. It returns the restart object if found, or `nil` otherwise.

```lisp
(restart-case
    (let ((r (find-restart 'my-restart)))
      (if r :found :not-found))
  (my-restart () nil))
```

```lisp
→ :FOUND
```

### No Matching Restart

When no restart with the given name is active, `find-restart` returns `nil`.

```lisp
(find-restart 'nonexistent)
```

```lisp
→ NIL
```

### Checking Before Invoking

A common pattern is to check whether a restart exists before invoking it. This avoids a `control-error`.

```lisp
(handler-bind ((warning (lambda (c)
                          (let ((r (find-restart 'muffle-warning c)))
                            (when r (invoke-restart r))))))
  (warn "This will be muffled.")
  :done)
```

```lisp
→ :DONE
```

### Getting the Restart Name

`find-restart` returns a restart object. You can query its name with `restart-name`.

```lisp
(restart-case
    (let ((r (find-restart 'do-something)))
      (restart-name r))
  (do-something () nil))
```

```lisp
→ DO-SOMETHING
```

### Filtering by Condition

The optional second argument restricts the search to restarts associated with a particular condition (or not associated with any condition).

```lisp
(restart-case
    (handler-bind ((error (lambda (c)
                            (let ((r (find-restart 'fix c)))
                              (if r
                                  (invoke-restart r)
                                  (error "No fix restart for ~A" c))))))
      (error "something broke"))
  (fix ()
    :report "Fix the problem."
    :fixed))
```

```lisp
→ :FIXED
```
