---
title: "random-state"
---

# random-state

import RandomStateSystemClass from './_random-state_system-class.md';

<RandomStateSystemClass />

## Expanded Reference: random-state

### Type Checking

A `random-state` object encapsulates the state of a pseudo-random number generator. The global variable `*random-state*` holds the current default random state.

```lisp
(typep *random-state* 'random-state) ; → T
(random-state-p *random-state*)       ; → T
(random-state-p 42)                   ; → NIL
```

### Creating Random States

Use `make-random-state` to create new random state objects. It accepts `nil` (copy current state), `t` (new randomly initialized state), or an existing random state (copy it).

```lisp
;; Copy the current random state
(let ((rs (make-random-state nil)))
  (typep rs 'random-state))
; → T

;; Create a new randomly initialized state
(let ((rs (make-random-state t)))
  (random-state-p rs))
; → T

;; Copy an existing random state
(let* ((rs1 (make-random-state t))
       (rs2 (make-random-state rs1)))
  ;; rs1 and rs2 will produce the same sequence
  (list (random 100 rs1) (random 100 rs2)))
; → (N N)  where both N are the same number
```

### Reproducible Random Sequences

Copying a random state before generating numbers allows you to replay the same sequence.

```lisp
(let ((saved (make-random-state *random-state*)))
  (let ((first-run (list (random 100) (random 100) (random 100))))
    (setf *random-state* saved)
    (let ((second-run (list (random 100) (random 100) (random 100))))
      (equal first-run second-run))))
; → T
```

### Printing and Reading

Random state objects have a printed representation that can be read back, though the format is implementation-dependent.

```lisp
(let* ((rs (make-random-state t))
       (printed (format nil "~S" rs))
       (restored (read-from-string printed)))
  (random-state-p (first restored)))
; → T  (implementation-dependent; may not work on all implementations)
```
