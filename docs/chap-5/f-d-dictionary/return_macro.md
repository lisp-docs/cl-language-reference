---
title: "return"
---

# return

import ReturnMacro from './_return_macro.md';

<ReturnMacro />

## Expanded Reference: return

### Basic usage

`return` is shorthand for `(return-from nil ...)`. It exits the innermost block named `NIL`.

```lisp
(block nil
  (return 42)
  (print "not reached"))
=> 42
```

### Returning from iteration macros

Most iteration macros such as `dolist`, `dotimes`, `do`, and `loop` establish an implicit block named `NIL`, so `return` can be used to exit them early.

```lisp
(dolist (x '(1 2 3 4 5))
  (when (> x 3)
    (return x)))
=> 4
```

```lisp
(dotimes (i 100)
  (when (= (* i i) 49)
    (return i)))
=> 7
```

### Default return value is NIL

When called with no argument, `return` returns `NIL`.

```lisp
(block nil
  (return)
  99)
=> NIL
```

### Returning multiple values

`return` can pass multiple values from the block.

```lisp
(block nil
  (return (values :a :b :c)))
=> :A
=> :B
=> :C
```

### return targets the innermost NIL block

When blocks named `NIL` are nested, `return` exits only the innermost one.

```lisp
(block nil
  (block nil
    (return 1))
  2)
=> 2
```

### Using return inside a do loop

A practical example showing early termination of a `do` loop to find the first triangular number above 50.

```lisp
(do ((i 0 (1+ i))
     (sum 0 (+ sum i)))
    ((> i 100) sum)
  (when (> sum 50)
    (return (values i sum))))
=> 11
=> 55
```
