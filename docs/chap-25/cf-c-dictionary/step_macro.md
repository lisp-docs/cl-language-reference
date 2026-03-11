---
title: "step"
---

# step

import StepMacro from './_step_macro.md';

<StepMacro />

## Expanded Reference: step

### Interactive stepping through evaluation

`step` evaluates a form in a stepping mode that allows the user to interactively control evaluation. The stepping interface is implementation-dependent.

```lisp
;; Step through the evaluation of a form:
;; (step (+ 1 2 3))
;; The implementation provides an interactive stepper UI.
;; Eventually returns:
=> 6
```

### Stepping through a function call

`step` is most useful for debugging complex expressions.

```lisp
;; (step (mapcar #'1+ '(1 2 3)))
;; The stepper lets you step into each sub-evaluation.
;; Eventually returns:
=> (2 3 4)
```

### Return value

`step` returns the values of the stepped form once stepping completes.

```lisp
;; In non-interactive mode or after stepping through:
(step (values 1 2 3))
=> 1
=> 2
=> 3
```

### Practical use at the REPL

`step` is primarily a development tool used at the REPL. It is not useful in non-interactive contexts. For non-interactive debugging, consider using `trace` instead.

```lisp
;; Instead of step in scripts, use trace:
(trace +)
(+ 1 2 3)
; 0: (+ 1 2 3)
; 0: + returned 6
=> 6
(untrace +)
```
