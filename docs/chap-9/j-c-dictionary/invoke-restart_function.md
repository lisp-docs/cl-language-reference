---
title: "invoke-restart"
---

# invoke-restart

import InvokeRestartFunction from './_invoke-restart_function.md';

<InvokeRestartFunction />

## Expanded Reference: invoke-restart

### Invoking a Named Restart

`invoke-restart` calls the function associated with a restart. The restart can be specified by name (a symbol) or by a restart object.

```lisp
(restart-case
    (invoke-restart 'my-restart)
  (my-restart ()
    :invoked))

=> :INVOKED
```

### Passing Arguments to a Restart

Any additional arguments to `invoke-restart` are passed to the restart function.

```lisp
(restart-case
    (invoke-restart 'use-value 42)
  (use-value (v)
    (format nil "Got value: ~A" v)))

=> "Got value: 42"
```

### Invoking a Restart from a Handler

The most common use of `invoke-restart` is from within a condition handler.

```lisp
(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'skip-item))))
  (restart-case
      (error "Bad item encountered")
    (skip-item ()
      :report "Skip the bad item."
      :skipped)))

=> :SKIPPED
```

### Invoking the store-value Restart

`invoke-restart` can invoke system-defined restarts like `store-value`, which is established by `check-type`.

```lisp
(let ((x "not a number"))
  (handler-bind ((type-error (lambda (c)
                               (invoke-restart 'store-value 0))))
    (check-type x number)
    x))

=> 0
```

### Invoking the continue Restart

The `continue` restart is established by `cerror` and allows execution to proceed.

```lisp
(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'continue))))
  (cerror "Proceed anyway." "Something is wrong.")
  :continued)

=> :CONTINUED
```

### Error When Restart Does Not Exist

If the named restart is not active in the current dynamic environment, `invoke-restart` signals a `control-error`.

```lisp
(handler-case
    (invoke-restart 'nonexistent-restart)
  (control-error ()
    :no-such-restart))

=> :NO-SUCH-RESTART
```
