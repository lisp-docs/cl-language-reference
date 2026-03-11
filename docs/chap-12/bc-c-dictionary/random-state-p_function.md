---
title: "random-state-p"
---

# random-state-p

import RandomStatePFunction from './_random-state-p_function.md';

<RandomStatePFunction />

## Expanded Reference: random-state-p

### Testing random state objects

`random-state-p` returns true if its argument is of type `random-state`.

```lisp
(random-state-p *random-state*)
=> T
(random-state-p (make-random-state))
=> T
(random-state-p (make-random-state t))
=> T
```

### Non-random-state objects

All other objects return false.

```lisp
(random-state-p nil)
=> NIL
(random-state-p 42)
=> NIL
(random-state-p "random")
=> NIL
(random-state-p 'test-function)
=> NIL
(random-state-p t)
=> NIL
```

### Equivalence to typep

`random-state-p` is equivalent to `(typep object 'random-state)`.

```lisp
(eql (random-state-p *random-state*)
     (typep *random-state* 'random-state))
=> T

(eql (random-state-p 42)
     (typep 42 'random-state))
=> T
```

### Practical use: validating a random state argument

```lisp
(defun generate-numbers (n &optional (state *random-state*))
  (unless (random-state-p state)
    (error "Expected a random-state, got ~S" state))
  (loop repeat n collect (random 100 state)))

(generate-numbers 3)
;; => impl-dependent
(generate-numbers 3 (make-random-state))
;; => impl-dependent
```
