---
title: "random"
---

# random

import RandomFunction from './_random_function.md';

<RandomFunction />

## Expanded Reference: random

### Generating random integers

When given a positive integer limit, `random` returns a non-negative integer less than the limit.

```lisp
;; Returns an integer from 0 to 9 (inclusive)
(<= 0 (random 10) 9) ; → T

;; Returns 0 or 1
(let ((r (random 2)))
  (or (= r 0) (= r 1)))
; → T
```

### Generating random floats

When given a positive float limit, `random` returns a non-negative float less than the limit.

```lisp
;; Returns a float from 0.0 (inclusive) to 1.0 (exclusive)
(<= 0.0 (random 1.0) 1.0) ; → T

;; Returns a double-float
(floatp (random 1.0d0)) ; → T
```

### Generating random numbers in a range

To generate a random number in an arbitrary range, combine `random` with addition.

```lisp
;; Random integer from 10 to 19
(defun random-range (low high)
  (+ low (random (- high low))))

(<= 10 (random-range 10 20) 19) ; → T
```

### Using a specific random state

Passing the same random state produces the same sequence, which is useful for reproducible testing.

```lisp
(let ((state1 (make-random-state))
      (state2 (make-random-state)))
  (= (random 1000 state1) (random 1000 state2)))
; → T
```

### Shuffling a list using random

`random` is useful for implementing algorithms like Fisher-Yates shuffle.

```lisp
(defun shuffle (list)
  (let ((vec (coerce list 'vector)))
    (loop for i from (1- (length vec)) downto 1
          do (rotatef (aref vec i)
                      (aref vec (random (1+ i)))))
    (coerce vec 'list)))

(length (shuffle '(1 2 3 4 5))) ; → 5
```
