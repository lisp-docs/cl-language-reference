---
title: "if"
---

# if

import IfSpecialOperator from './_if_special-operator.md';

<IfSpecialOperator />

## Expanded Reference: if

### Basic conditional branching

`if` is the most fundamental conditional form in Common Lisp. It evaluates a test form, then evaluates either the then-form or the else-form depending on the result.

```lisp
(if t "yes" "no")
=> "yes"

(if nil "yes" "no")
=> "no"
```

### The else-form is optional

When the else-form is omitted and the test is false, `if` returns `NIL`.

```lisp
(if t "true")
=> "true"

(if nil "true")
=> NIL
```

### Any non-NIL value is true

In Common Lisp, every value except `NIL` is considered true. Numbers, strings, lists, and even the number zero are all true.

```lisp
(if 0 "zero is true" "zero is false")
=> "zero is true"

(if "" "empty string is true" "empty string is false")
=> "empty string is true"

(if '() "empty list is true" "empty list is false")
=> "empty list is false"
```

### Using if with computed test expressions

The test form can be any expression that returns a value.

```lisp
(defun check-sign (n)
  (if (> n 0)
      "positive"
      "not positive"))

(check-sign 5)
=> "positive"

(check-sign -3)
=> "not positive"
```

### if only takes a single form per branch

Unlike `when` or `cond`, each branch of `if` is a single form. Use `progn` to execute multiple forms in a branch.

```lisp
(let ((x 10))
  (if (> x 5)
      (progn
        (format t "big number~%")
        (* x 2))
      (progn
        (format t "small number~%")
        (* x 3))))
.. big number
..
=> 20
```

### Nested if forms

`if` forms can be nested, though `cond` is often preferred for readability when there are many branches.

```lisp
(defun classify (x)
  (if (not (numberp x))
      "not a number"
      (if (< x 0)
          "negative"
          (if (= x 0)
              "zero"
              "positive"))))

(classify 42)
=> "positive"
(classify -7)
=> "negative"
(classify 0)
=> "zero"
(classify "hi")
=> "not a number"
```
