---
title: "cond"
---

# cond

import CondMacro from './_cond_macro.md';

<CondMacro />

## Expanded Reference: cond

### Basic multi-way conditional

`cond` evaluates test forms in order. When a test returns true, the corresponding body forms are evaluated and their result is returned. No further clauses are tested.

```lisp
(defun describe-number (n)
  (cond
    ((< n 0) "negative")
    ((= n 0) "zero")
    (t "positive")))

(describe-number -5) ; => "negative"
(describe-number 0)  ; => "zero"
(describe-number 42) ; => "positive"
```

### The t clause as a default

A clause with `t` as the test form always matches. It is conventionally placed last to act as a default case.

```lisp
(defun classify-char (ch)
  (cond
    ((alpha-char-p ch) :letter)
    ((digit-char-p ch) :digit)
    (t :other)))

(classify-char #\a)  ; => :LETTER
(classify-char #\5)  ; => :DIGIT
(classify-char #\!)  ; => :OTHER
```

### Returning NIL when no clause matches

If no test form evaluates to true and there is no default clause, `cond` returns `NIL`.

```lisp
(cond
  ((> 1 2) "impossible")
  ((< 5 3) "also impossible"))
; => NIL
```

### Clauses with no body forms

When a clause has no body forms, the primary value of the test form itself is returned.

```lisp
(cond
  (nil)
  (42)
  (t "not reached"))
; => 42
```

### Multiple body forms in a clause

Each clause supports multiple body forms (an implicit `progn`). All forms are evaluated and the last value is returned.

```lisp
(let ((x 10))
  (cond
    ((> x 100)
     (format t "Very large~%")
     :very-large)
    ((> x 5)
     (format t "Moderate~%")
     :moderate)
    (t
     (format t "Small~%")
     :small)))
; >> Moderate
; => :MODERATE
```

### Using cond to implement FizzBuzz

A practical example showing `cond` with compound test expressions.

```lisp
(defun fizzbuzz (n)
  (cond
    ((zerop (mod n 15)) "FizzBuzz")
    ((zerop (mod n 3))  "Fizz")
    ((zerop (mod n 5))  "Buzz")
    (t                   n)))

(fizzbuzz 3)  ; => "Fizz"
(fizzbuzz 5)  ; => "Buzz"
(fizzbuzz 15) ; => "FizzBuzz"
(fizzbuzz 7)  ; => 7
```
