---
title: "setq"
---

# setq

import SetqSpecialForm from './_setq_special-form.md';

<SetqSpecialForm />

## Expanded Reference: setq

### Simple variable assignment

`setq` assigns a value to a variable and returns the assigned value.

```lisp
(defvar *x*)
→ *X*

(setq *x* 42)
→ 42

*x*
→ 42
```

### Multiple sequential assignments

`setq` can assign to multiple variables in sequence. Each assignment completes before the next form is evaluated.

```lisp
(let (a b c)
  (setq a 1 b 2 c 3)
  (list a b c))
→ (1 2 3)
```

### Sequential evaluation means later assignments see earlier ones

Because pairs are processed left to right, later values can depend on earlier assignments.

```lisp
(let ((a 0) (b 0))
  (setq a 10 b (+ a 5))
  (list a b))
→ (10 15)
```

### Assigning to lexical variables inside let

`setq` works with lexical variables created by `let`, not just special variables.

```lisp
(let ((count 0))
  (dotimes (i 5)
    (setq count (+ count i)))
  count)
→ 10
```

### Returns the value of the last assignment

When given multiple pairs, `setq` returns the value of the last form.

```lisp
(let (x y)
  (setq x 'first y 'second))
→ SECOND
```

### setq with no pairs returns NIL

```lisp
(setq)
→ NIL
```
