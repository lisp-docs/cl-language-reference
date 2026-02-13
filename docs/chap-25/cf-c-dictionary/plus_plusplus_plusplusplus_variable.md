---
title: "+, ++, +++"
---

# +, ++, +++

import PlusVariable from './_plus_plusplus_plusplusplus_variable.md';

<PlusVariable />

## Expanded Reference: +, ++, +++

### Basic Usage

The variables `+`, `++`, and `+++` hold the last three forms evaluated by the REPL's read-eval-print loop. `+` contains the most recently evaluated form, `++` the one before that, and `+++` the one before `++`.

```lisp
(+ 1 2)
; → 3

+
; → (+ 1 2)

(* 3 4)
; → 12

+
; → (* 3 4)

++
; → +        ; the form that evaluated + itself was the previous one
```

### How the History Shifts

Each time the REPL reads and evaluates a form, the history shifts: the old `+` becomes `++`, the old `++` becomes `+++`, and `+` is set to the newly read form.

```lisp
(list 'a)
; → (A)

(list 'b)
; → (B)

(list 'c)
; → (C)

+
; → (LIST 'C)

++
; → (LIST 'C)   ; ++ is the form from when we evaluated +

+++
; → (LIST 'B)
```

### Re-evaluating Previous Forms

Since `+`, `++`, and `+++` hold the actual forms, you can re-evaluate a previous expression using `eval`.

```lisp
(defvar *counter* 0)
; → *COUNTER*

(incf *counter*)
; → 1

(eval +)
; → 2

(eval +)
; → 3
```

### Distinction from /, //, ///

The `+` family tracks the **forms** (unevaluated expressions) that were read, while the `/` family tracks the **values** that were produced. They are complementary.

```lisp
(values 1 2 3)
; → 1
; → 2
; → 3

+
; → (VALUES 1 2 3)    ; the form

/
; → (1 2 3)           ; the list of result values
```

### Important Notes

These variables are maintained by the top-level REPL loop. They are not updated inside calls to `eval` or within code loaded from files -- only by the interactive read-eval-print loop itself.
