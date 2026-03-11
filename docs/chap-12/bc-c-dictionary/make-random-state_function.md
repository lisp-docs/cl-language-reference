---
title: "make-random-state"
---

# make-random-state

import MakeRandomStateFunction from './_make-random-state_function.md';

<MakeRandomStateFunction />

## Expanded Reference: make-random-state

### Copying the current random state

Calling `make-random-state` with nil (or no argument) creates a copy of the current `*random-state*`. Both will then produce the same sequence.

```lisp
(let ((copy (make-random-state nil)))
  (list (loop repeat 5 collect (random 100))
        (loop repeat 5 collect (random 100 copy))))
;; Both lists will be identical since they started from the same state.
```

### Creating a randomly initialized state

Passing `t` creates a new random state that has been randomly seeded by the implementation.

```lisp
(let ((rs (make-random-state t)))
  (loop repeat 5 collect (random 100 rs)))
;; Returns 5 random numbers; different each time this form is evaluated.
```

### Copying a specific random state

Passing an existing random state creates an independent copy of it.

```lisp
(let* ((rs1 (make-random-state t))
       (rs2 (make-random-state rs1)))
  (list (loop repeat 5 collect (random 100 rs1))
        (loop repeat 5 collect (random 100 rs2))))
;; Both lists will be identical since rs2 is a copy of rs1.
```

### Practical use: reproducible random sequences

Save a random state before generating random numbers so you can reproduce the same sequence later.

```lisp
(let ((saved-state (make-random-state *random-state*)))
  ;; Generate some random numbers
  (let ((first-run (loop repeat 5 collect (random 100))))
    ;; Restore the saved state
    (setf *random-state* saved-state)
    ;; Generate the same sequence again
    (let ((second-run (loop repeat 5 collect (random 100))))
      (equal first-run second-run))))
=> T
```

### Snapshot and resume mid-sequence

You can capture the state at any point and replay from there.

```lisp
(let (snapshot)
  (loop repeat 5 do (random 100))  ; skip 5 numbers
  (setq snapshot (make-random-state))  ; capture state after 5
  (let ((after-5 (loop repeat 3 collect (random 100))))
    (setf *random-state* snapshot)
    (equal after-5 (loop repeat 3 collect (random 100)))))
=> T
```
