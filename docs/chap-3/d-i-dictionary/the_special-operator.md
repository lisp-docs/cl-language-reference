---
title: "the"
---

# the

import TheSpecialOperator from './_the_special-operator.md';

<TheSpecialOperator />

## Expanded Reference: the

### Basic Type Assertion

`the` declares that a form produces a value of a specified type. It returns the value of the form, and the consequences are undefined if the value is not of the declared type.

```lisp
(the integer (+ 3 4))
=> 7

(the string "hello")
=> "hello"
```

### Using the with fixnum Arithmetic

A common use is to assert fixnum types for performance hints.

```lisp
(let ((i 100))
  (declare (fixnum i))
  (the fixnum (+ i 1)))
=> 101
```

### Multiple Values with the

The `values` type specifier can be used to declare types for multiple return values.

```lisp
(the (values integer float) (truncate 7.5))
=> 7
=> 0.5
```

### the as a Place for setf

`the` can be used as a place with `setf`, which transfers the type declaration to the new value.

```lisp
(let ((x (list 'a 'b 'c)))
  (setf (the symbol (car x)) 'z)
  x)
=> (Z B C)
```

### Declaring Broader Types

```lisp
(the number (* 2.5 3))
=> 7.5

(the (or string symbol) (if t 'foo "bar"))
=> FOO
```
