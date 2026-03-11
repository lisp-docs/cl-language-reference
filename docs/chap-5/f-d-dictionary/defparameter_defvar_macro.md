---
title: "defparameter, defvar"
---

# defparameter, defvar

import DefparameterMacro from './_defparameter_defvar_macro.md';

<DefparameterMacro />

## Expanded Reference: defparameter, defvar

### Defining a special variable with defparameter

`defparameter` declares a dynamic (special) variable and always assigns the given value. By convention, special variable names are surrounded by asterisks (earmuffs).

```lisp
(defparameter *max-retries* 3)
=> *MAX-RETRIES*

*max-retries*
=> 3
```

### defparameter always reassigns on re-evaluation

Every time `defparameter` is evaluated, the variable is unconditionally set to the new value.

```lisp
(defparameter *color* :red)
=> *COLOR*

*color*
=> :RED

(setq *color* :blue)
=> :BLUE

;; Re-evaluating defparameter resets the value
(defparameter *color* :red)
=> *COLOR*

*color*
=> :RED
```

### defvar only assigns if unbound

`defvar` only assigns the initial value if the variable has not been previously bound. This makes it useful for variables that should retain user-modified values across file reloads.

```lisp
(defvar *counter* 0)
=> *COUNTER*

*counter*
=> 0

(setq *counter* 42)
=> 42

;; Re-evaluating defvar does NOT reset the value
(defvar *counter* 0)
=> *COUNTER*

*counter*
=> 42
```

### defvar without an initial value

`defvar` can be used without an initial value to declare a variable as special without binding it.

```lisp
(defvar *uninitialized*)
=> *UNINITIALIZED*

(boundp '*uninitialized*)
=> NIL
```

### Dynamic binding behavior

Both `defparameter` and `defvar` create dynamic (special) variables, which can be temporarily rebound with `let`.

```lisp
(defparameter *debug-level* 0)
=> *DEBUG-LEVEL*

(defun current-debug-level ()
  *debug-level*)
=> CURRENT-DEBUG-LEVEL

(current-debug-level)
=> 0

(let ((*debug-level* 3))
  (current-debug-level))
=> 3

;; Outside the let, the original value is restored
(current-debug-level)
=> 0
```
