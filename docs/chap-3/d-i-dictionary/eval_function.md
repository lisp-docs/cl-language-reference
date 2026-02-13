---
title: "eval"
---

# eval

import EvalFunction from './_eval_function.md';

<EvalFunction />

## Expanded Reference: eval

### Basic Usage: Evaluating a Form

`eval` evaluates a form in the current dynamic environment and the null lexical environment.

```lisp
(eval '(+ 1 2 3))
;; => 6

(eval '(list 'a 'b 'c))
;; => (A B C)
```

### Evaluating a Symbol: Dynamic Lookup

`eval` looks up variables in the dynamic (global) environment, not in any lexical scope.

```lisp
(setq my-var 42)
;; => 42

(eval 'my-var)
;; => 42

;; Lexical bindings are NOT visible to eval:
(let ((my-var 100))
  (eval 'my-var))
;; => 42
```

### Two Levels of Evaluation

When calling `eval`, the argument is first evaluated normally, then the result is evaluated by `eval`.

```lisp
(setq form '(+ 10 20))
;; => (+ 10 20)

(eval form)
;; => 30

(eval 'form)
;; => (+ 10 20)
```

### Constructing and Evaluating Forms Dynamically

```lisp
(eval (list '* 6 7))
;; => 42

(eval (list 'if t ''yes ''no))
;; => YES
```

### eval vs. symbol-value

For simply obtaining the dynamic value of a symbol, `symbol-value` is preferred over `eval`.

```lisp
(defvar *counter* 10)
;; => *COUNTER*

(symbol-value '*counter*)
;; => 10

(eval '*counter*)
;; => 10
```
