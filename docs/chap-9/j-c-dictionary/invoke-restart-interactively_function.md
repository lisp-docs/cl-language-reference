---
title: "invoke-restart-interactively"
---

# invoke-restart-interactively

import InvokeRestartInteractivelyFunction from './_invoke-restart-interactively_function.md';

<InvokeRestartInteractivelyFunction />

## Expanded Reference: invoke-restart-interactively

### Basic Interactive Restart Invocation

`invoke-restart-interactively` invokes a restart, using the `:interactive` option to gather arguments if the restart requires them. For restarts with no required arguments, it passes an empty argument list.

```lisp
(restart-case
    (invoke-restart-interactively 'my-restart)
  (my-restart ()
    :report "Do the thing."
    :done))

=> :DONE
```

### Restart with :interactive Option

The `:interactive` option in `restart-case` specifies a function of no arguments that returns a list of arguments for the restart. `invoke-restart-interactively` calls this function to gather arguments.

```lisp
(restart-case
    (invoke-restart-interactively 'use-value)
  (use-value (v)
    :report "Use a value."
    :interactive (lambda () (list 42))
    v))

=> 42
```

### Used Internally by Debuggers

`invoke-restart-interactively` is the mechanism debuggers use to invoke restarts chosen by the user. When writing custom debugger-like interfaces, it provides a standardized way to prompt for and supply restart arguments.

```lisp
;; A simplified restart chooser
(defun choose-first-restart ()
  (let ((restarts (compute-restarts)))
    (when restarts
      (invoke-restart-interactively (first restarts)))))
```

### Difference from invoke-restart

`invoke-restart` requires the caller to supply arguments explicitly. `invoke-restart-interactively` obtains them via the `:interactive` facility, making it suitable for interactive (user-driven) restart selection.

```lisp
;; invoke-restart: caller supplies arguments
(restart-case
    (invoke-restart 'use-value 100)
  (use-value (v) v))

=> 100
```

```lisp
;; invoke-restart-interactively: arguments come from :interactive
(restart-case
    (invoke-restart-interactively 'use-value)
  (use-value (v)
    :interactive (lambda () (list 200))
    v))

=> 200
```
