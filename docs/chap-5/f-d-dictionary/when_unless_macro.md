---
title: "when, unless"
---

# when, unless

import WhenMacro from './_when_unless_macro.md';

<WhenMacro />

## Expanded Reference: when, unless

### Basic usage of when

`when` evaluates its body forms only if the test is true, and returns the value of the last body form. If the test is false, it returns `NIL` without evaluating any body forms.

```lisp
(when t "hello")
=> "hello"

(when nil "hello")
=> NIL
```

### Basic usage of unless

`unless` is the opposite of `when`. It evaluates its body forms only if the test is false.

```lisp
(unless nil "hello")
=> "hello"

(unless t "hello")
=> NIL
```

### when and unless allow multiple body forms

Unlike `if`, both `when` and `unless` accept multiple body forms (an implicit `progn`). All forms are evaluated in order and the value of the last is returned.

```lisp
(when (> 5 3)
  (format t "first~%")
  (format t "second~%")
  "done")
.. first
.. second
..
=> "done"
```

### Using when for one-sided conditionals

`when` is preferred over `if` when there is no else branch. It makes the intent clearer.

```lisp
(defun maybe-print (x)
  (when (stringp x)
    (format t "Got a string: ~a~%" x)
    t))

(maybe-print "hello")
.. Got a string: hello
..
=> T

(maybe-print 42)
=> NIL
```

### Using unless for guard clauses

`unless` is commonly used for guard clauses and default-value patterns.

```lisp
(defun safe-divide (a b)
  (unless (zerop b)
    (/ a b)))

(safe-divide 10 3)
=> 10/3
(safe-divide 10 0)
=> NIL
```

### Side effects and return values

Both `when` and `unless` return `NIL` when they do not execute their body, which makes them useful in conditional side-effect code.

```lisp
(let ((warnings '()))
  (dolist (x '(1 -3 5 -2 0))
    (when (minusp x)
      (push x warnings)))
  warnings)
=> (-2 -3)
```
