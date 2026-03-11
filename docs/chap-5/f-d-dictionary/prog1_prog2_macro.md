---
title: "prog1, prog2"
---

# prog1, prog2

import Prog1Macro from './_prog1_prog2_macro.md';

<Prog1Macro />

## Expanded Reference: prog1, prog2

### prog1: evaluate forms, return the first value

`prog1` evaluates all its forms in order but returns only the primary value of the first form.

```lisp
(prog1 'a 'b 'c) → A
(prog1 (+ 1 2) (+ 3 4) (+ 5 6)) → 3
```

### prog1 for saving a value before mutation

The classic use of `prog1` is to capture a value before a side effect modifies it.

```lisp
(let ((x 10))
  (prog1 x (setq x 20)))
=> 10

(let ((lst (list 'a 'b 'c)))
  (prog1 (car lst) (setf (car lst) 'z)))
=> A
```

### prog1 with printed side effects

All forms are evaluated for their side effects; only the first form's primary value is returned.

```lisp
(let ((temp 1))
  (prog1 temp (format t "~S~%" temp) (incf temp) (format t "~S~%" temp)))
.. 1
.. 2
..
=> 1
```

### prog2: evaluate forms, return the second value

`prog2` evaluates all its forms but returns the primary value of the second form.

```lisp
(prog2 'first 'second 'third) → SECOND

(let ((x 1))
  (prog2 (incf x) (incf x) (incf x)))
=> 3
```

### prog1 only returns the primary value

Note that `prog1` returns only the primary value, not multiple values. Use `multiple-value-prog1` if you need all values preserved.

```lisp
(prog1 (values 1 2 3) (format t "done~%"))
.. done
..
=> 1

;; Compare with multiple-value-prog1:
;; (multiple-value-prog1 (values 1 2 3) (print "done"))
;; would return 1, 2, 3
```

### Implementing pop-like behavior

`prog1` can be used to implement operations that return the old value before updating.

```lisp
(let ((stack (list 1 2 3)))
  (let ((top (prog1 (car stack) (setq stack (cdr stack)))))
    (list top stack)))
=> (1 (2 3))
```
