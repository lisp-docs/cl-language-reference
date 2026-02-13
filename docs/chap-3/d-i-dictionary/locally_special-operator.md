---
title: "locally"
---

# locally

import LocallySpecialOperator from './_locally_special-operator.md';

<LocallySpecialOperator />

## Expanded Reference: locally

### Introducing Local Declarations

`locally` evaluates forms in a lexical environment augmented with the given declarations, without introducing any new variable bindings.

```lisp
(locally (declare (optimize (speed 3) (safety 0)))
  (+ 1 2 3))
;; => 6
```

### Accessing a Special Variable Locally

A common use of `locally` is to declare a free reference to a variable as special, accessing the dynamic binding without creating a new one.

```lisp
(defun sample (y)
  (declare (special y))              ; y parameter is special
  (let ((y t))                       ; this y is lexical
    (list y
          (locally (declare (special y))
            y))))                     ; accesses the special binding
;; => SAMPLE

(sample nil)
;; => (T NIL)
```

### Local Optimization Declarations

```lisp
(locally (declare (optimize (safety 3) (speed 0)))
  (defun safe-divide (a b)
    (if (zerop b)
        (error "Division by zero")
        (/ a b))))
;; => SAFE-DIVIDE
```

### Multiple Declarations

```lisp
(locally (declare (inline floor)
                  (notinline car cdr))
  (declare (optimize space))
  (floor 7 2))
;; => 3, 1
```
