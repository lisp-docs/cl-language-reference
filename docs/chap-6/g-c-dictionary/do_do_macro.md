---
title: "do, do"
---

# do, do

import DoMacro from './_do_do_macro.md';

<DoMacro />

## Expanded Reference: do, do*

### Basic do loop

`do` is the most general iteration construct. Each variable has an init-form and an optional step-form. The end-test is checked at the beginning of each iteration.

```lisp
;; Count from 0 to 4
(do ((i 0 (1+ i)))
    ((= i 5) 'done)
  (print i))
0
1
2
3
4
DONE
```

### Multiple variables with parallel stepping

In `do`, all step-forms are evaluated before any variable is updated (parallel assignment).

```lisp
;; Swap-walk: x counts up while y counts down
(do ((x 0 (1+ x))
     (y 5 (1- y)))
    ((> x y) (list x y))
  (format t "x=~D y=~D~%" x y))
x=0 y=5
x=1 y=4
x=2 y=3
(3 2)
```

### do* with sequential stepping

`do*` updates variables sequentially — each step-form can see the new value of previously stepped variables.

```lisp
;; With do*, y sees the already-updated value of x
(do* ((x 0 (1+ x))
      (y 0 x))         ; y gets the NEW value of x
     ((= x 4) (list x y))
  (format t "x=~D y=~D~%" x y))
x=0 y=0
x=1 y=1
x=2 y=2
x=3 y=3
(4 4)
```

Compare with `do` where `y` sees the old value:

```lisp
;; With do, y sees the OLD value of x
(do ((x 0 (1+ x))
     (y 0 x))          ; y gets the OLD value of x
    ((= x 4) (list x y))
  (format t "x=~D y=~D~%" x y))
x=0 y=0
x=1 y=0
x=2 y=1
x=3 y=2
(4 3)
```

### Accumulating a result

```lisp
;; Reverse a list using do
(defun my-reverse (list)
  (do ((rest list (cdr rest))
       (result '() (cons (car rest) result)))
      ((null rest) result)))

(my-reverse '(a b c d))
→ (D C B A)
```

### Iterating with no body

The body of `do` is optional — all the work can happen in the variable step-forms.

```lisp
;; Compute the length of a list using only variable stepping
(do ((lst '(a b c d e) (cdr lst))
     (count 0 (1+ count)))
    ((null lst) count))
→ 5
```

### Infinite loop with early exit

Using `nil` as the end-test creates a loop that runs forever until explicitly terminated with `return`.

```lisp
(do ((i 1 (1+ i)))
    (nil)  ; never terminates naturally
  (when (> (* i i i) 1000)
    (return i)))
→ 11
```

### Variables without step-forms

A variable with no step-form keeps its initial value throughout the loop.

```lisp
(do ((i 0 (1+ i))
     (limit 10))           ; limit stays at 10
    ((= i limit) 'done)
  (format t "~D " i))
0 1 2 3 4 5 6 7 8 9
DONE
```
