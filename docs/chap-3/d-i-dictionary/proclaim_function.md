---
title: "proclaim"
---

# proclaim

import ProclaimFunction from './_proclaim_function.md';

<ProclaimFunction />

## Expanded Reference: proclaim

### Declaring a Special Variable

`proclaim` establishes global declarations. A common use is to declare a variable special (dynamically scoped).

```lisp
(proclaim '(special *my-global*))

(setq *my-global* 42)
=> 42

*my-global*
=> 42
```

### Declaring Type Information

```lisp
(proclaim '(type integer *count*))
;; Now *count* is proclaimed to always hold an integer.
```

### Declaring Optimization Settings

```lisp
(proclaim '(optimize (speed 3) (safety 1)))
;; Globally sets optimization preferences.
```

### proclaim vs. declaim

`proclaim` is a function, so its argument is evaluated. This means it takes effect at run time rather than compile time. For compile-time declarations, use `declaim` or wrap `proclaim` in `eval-when`.

```lisp
;; This proclamation does NOT take effect at compile time:
(proclaim '(special *late-var*))

;; To get compile-time effect, use eval-when:
(eval-when (:compile-toplevel :load-toplevel :execute)
  (proclaim '(special *early-var*)))
```
