---
title: "flet, labels, macrolet"
---

# flet, labels, macrolet

import FletSpecialOperator from './_flet_labels_macrolet_special-operator.md';

<FletSpecialOperator />

## Expanded Reference: flet, labels, macrolet

### Basic local function with flet

`flet` defines local functions that are visible only in the body. The local function definitions themselves cannot see each other.

```lisp
(flet ((double (x) (* x 2))
       (add1 (x) (+ x 1)))
  (double (add1 3)))
→ 8
```

### flet shadows global functions

`flet` can locally shadow a globally defined function.

```lisp
(defun add (a b) (+ a b))
→ ADD

(flet ((add (a b) (* a b)))
  (add 3 4))
→ 12

;; The global definition is unchanged
(add 3 4)
→ 7
```

### flet functions cannot call themselves

In `flet`, a function's name within its own body refers to the outer definition, not itself. This means `flet` cannot define recursive functions.

```lisp
(defun double (x) (* x 2))
→ DOUBLE

(flet ((double (x)
         ;; This calls the GLOBAL double, not the local one
         (+ 10 (double x))))
  (double 3))
→ 16
```

### Recursive local functions with labels

`labels` is like `flet`, but the local function names are visible within the function bodies themselves, allowing recursion and mutual recursion.

```lisp
(labels ((factorial (n)
           (if (zerop n)
               1
               (* n (factorial (1- n))))))
  (factorial 6))
→ 720
```

### Mutually recursive functions with labels

`labels` allows two or more functions to call each other.

```lisp
(labels ((even-p (n)
           (if (zerop n) t (odd-p (1- n))))
         (odd-p (n)
           (if (zerop n) nil (even-p (1- n)))))
  (list (even-p 4) (odd-p 7)))
→ (T T)
```

### Local macros with macrolet

`macrolet` defines macros whose scope is limited to the body.

```lisp
(macrolet ((square (x)
             `(let ((val ,x))
                (* val val))))
  (square 5))
→ 25
```
