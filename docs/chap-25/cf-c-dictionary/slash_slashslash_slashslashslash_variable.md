---
title: "/, //, ///"
---

# /, //, ///

import SlashVariable from './_slash_slashslash_slashslashslash_variable.md';

<SlashVariable />

## Expanded Reference: /, //, ///

### Basic Usage

The variables `/`, `//`, and `///` hold the lists of values returned by the last three forms evaluated at the REPL. `/` contains a list of all values from the most recent evaluation, `//` the one before that, and `///` the one before `//`.

```lisp
(+ 10 20)
=> 30

;; In an interactive REPL after the above:
;; /         => (30)     ; list of values from last evaluation
;; (first /) => 30
```

### Multiple Return Values

The primary usefulness of `/` is that it captures **all** values from a multiple-value-returning form, not just the primary value.

```lisp
(floor 17 5)
=> 3
=> 2

;; In an interactive REPL after the above:
;; /           => (3 2)   ; both values captured
;; (first /)   => 3
;; (second //) => 2
```

### History Shifting

Like the `+` family, the `/` variables shift with each REPL evaluation: old `/` becomes `//`, old `//` becomes `///`.

```lisp
(values :a :b)
=> :A
=> :B

(values :c :d :e)
=> :C
=> :D
=> :E

;; In an interactive REPL after the above:
;; /   => (:C :D :E)   ; values from most recent evaluation
;; //  => the values from the evaluation of /
;; /// => (:A :B)       ; values from two evaluations ago
```

### Retrieving Results for Further Computation

A common use is to capture a result you forgot to bind to a variable.

```lisp
(* 123456 789012)
=> 97408265472

(defvar *saved-result* (first /))
=> *SAVED-RESULT*

*saved-result*
=> 97408265472
```

### Distinction from +, ++, +++

The `/` family tracks **result values** (as lists), while the `+` family tracks the **forms** that were read. Together they provide a complete history of recent REPL interaction.

```lisp
(list 1 2 3)
=> (1 2 3)

;; In an interactive REPL after the above:
;; +   => (LIST 1 2 3)   ; the form that was read
;; /   => ((1 2 3))      ; the list of result values
```
