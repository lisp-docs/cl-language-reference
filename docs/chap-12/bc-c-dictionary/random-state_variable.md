---
title: "*random-state*"
---

# \*random-state\*

import RandomStateVariable from './_random-state_variable.md';

<RandomStateVariable />

## Expanded Reference: \*random-state\*

### Examining the Current State

The `*random-state*` variable holds the current default random state used by `random` when no explicit state argument is provided.

```lisp
*random-state*
; → #S(RANDOM-STATE ...)  (implementation-dependent printed form)

(random-state-p *random-state*) ; → T
```

### How random Uses the State

Calling `random` without a state argument uses and mutates `*random-state*`. Each call advances the state.

```lisp
;; These calls use *random-state* implicitly
(random 100) ; → 42  (some random value)
(random 100) ; → 87  (a different value, state has advanced)

;; Equivalent to explicitly passing *random-state*
(random 100 *random-state*) ; → 13  (some random value)
```

### Binding for Reproducibility

Binding `*random-state*` with `let` creates a local copy, allowing reproducible sequences without affecting the global state.

```lisp
(let ((*random-state* (make-random-state nil)))
  ;; This binding is local; the global *random-state* is unaffected
  (list (random 100) (random 100) (random 100)))
; → (23 71 5)  (some reproducible sequence within this binding)
```

### Resetting for Testing

For deterministic testing, save and restore the random state so that tests produce the same results each time.

```lisp
(defvar *test-random-state* (make-random-state t))

(defun deterministic-random-values (n max)
  "Generate N random values below MAX using a fixed seed."
  (let ((*random-state* (make-random-state *test-random-state*)))
    (loop repeat n collect (random max))))

;; Same result each call (since we copy the same saved state each time)
(equal (deterministic-random-values 5 100)
       (deterministic-random-values 5 100))
; → T
```
