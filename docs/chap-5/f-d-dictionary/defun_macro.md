---
title: "defun"
---

# defun

import DefunMacro from './_defun_macro.md';

<DefunMacro />

## Expanded Reference: defun

### Defining a simple function

`defun` defines a named function in the global environment. It returns the function name.

```lisp
(defun square (x)
  (* x x))
=> SQUARE

(square 5)
=> 25
```

### Optional parameters with default values

Functions can have optional parameters using `&optional`. Each can specify a default value.

```lisp
(defun greet (name &optional (greeting "Hello"))
  (concatenate 'string greeting ", " name "!"))
=> GREET

(greet "Alice")
=> "Hello, Alice!"

(greet "Bob" "Goodbye")
=> "Goodbye, Bob!"
```

### Rest parameters to accept variable arguments

The `&rest` parameter collects all remaining arguments into a list.

```lisp
(defun sum-all (&rest numbers)
  (apply #'+ numbers))
=> SUM-ALL

(sum-all 1 2 3 4 5)
=> 15

(sum-all)
=> 0
```

### Keyword parameters

`&key` parameters allow calling a function with named arguments in any order.

```lisp
(defun make-person (&key name age (occupation "unknown"))
  (list name age occupation))
=> MAKE-PERSON

(make-person :name "Alice" :age 30)
=> ("Alice" 30 "unknown")

(make-person :age 25 :occupation "engineer" :name "Bob")
=> ("Bob" 25 "engineer")
```

### Documentation strings

A string before the body serves as a documentation string.

```lisp
(defun factorial (n)
  "Compute the factorial of a non-negative integer N."
  (if (zerop n)
      1
      (* n (factorial (1- n)))))
=> FACTORIAL

(factorial 10)
=> 3628800

(documentation 'factorial 'function)
=> "Compute the factorial of a non-negative integer N."
```

### Early return with return-from

`defun` wraps its body in a `block` named after the function, allowing early return.

```lisp
(defun find-first-negative (list)
  (dolist (item list)
    (when (minusp item)
      (return-from find-first-negative item)))
  nil)
=> FIND-FIRST-NEGATIVE

(find-first-negative '(3 7 -2 5))
=> -2

(find-first-negative '(1 2 3))
=> NIL
```
