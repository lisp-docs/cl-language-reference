---
title: "declaim"
---

# declaim

import DeclaimMacro from './_declaim_macro.md';

<DeclaimMacro />

## Expanded Reference: declaim

### Declaring Special Variables

`declaim` establishes global declarations at both compile time and load time when it appears as a top level form.

```lisp
(declaim (special *verbose*))

(setq *verbose* t)
;; => T
```

### Declaring Optimization Settings

```lisp
(declaim (optimize (speed 3) (safety 0) (debug 0)))
;; Globally sets optimization preferences for subsequent compilations.
```

### Multiple Declarations in One Form

`declaim` accepts multiple declaration specifiers.

```lisp
(declaim (special *x* *y*)
         (type integer *x*)
         (optimize (speed 2)))
```

### declaim vs. proclaim

`declaim` is a macro and is recognized at compile time. `proclaim` is a function and only takes effect at run time. Prefer `declaim` for top-level proclamations.

```lisp
;; declaim works at compile time:
(declaim (inline my-fast-fn))

;; proclaim would need eval-when for the same effect:
(eval-when (:compile-toplevel :load-toplevel :execute)
  (proclaim '(inline my-fast-fn)))
```

### Declaring Function Inlining

```lisp
(declaim (inline square))

(defun square (x) (* x x))
;; => SQUARE
;; The compiler is advised to inline calls to square.
```
