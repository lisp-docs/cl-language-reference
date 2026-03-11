---
title: "dolist"
---

# dolist

import DolistMacro from './_dolist_macro.md';

<DolistMacro />

## Expanded Reference: dolist

### Basic iteration over a list

`dolist` is the simplest way to iterate over the elements of a list. The loop variable is bound to each element in turn.

```lisp
(dolist (x '(a b c))
  (format t "~S~%" x))
.. A
.. B
.. C
..
=> NIL
```

### Collecting results with a result-form

The optional third element in the variable spec is a *result-form*, evaluated and returned when the loop finishes. A common pattern is to accumulate into a variable and return it.

```lisp
(let ((result '()))
  (dolist (x '(1 2 3 4 5) (nreverse result))
    (when (oddp x)
      (push x result))))
=> (1 3 5)
```

### Early exit with return

Since `dolist` establishes an implicit block named `nil`, you can use `return` to exit the loop early with a value.

```lisp
(dolist (x '(1 2 3 4 5))
  (when (> x 3)
    (return x)))
=> 4
```

### Finding an element in a list

```lisp
(defun find-first-string (lst)
  (dolist (item lst)
    (when (stringp item)
      (return item))))

(find-first-string '(1 2 "hello" 4 "world"))
=> "hello"

(find-first-string '(1 2 3))
=> NIL
```

### Nested dolist

```lisp
(dolist (x '(1 2 3))
  (dolist (y '(a b))
    (format t "~A-~A~%" x y)))
.. 1-A
.. 1-B
.. 2-A
.. 2-B
.. 3-A
.. 3-B
..
=> NIL
```

### Note: var is bound to NIL when result-form runs

When the iteration completes normally, *var* is bound to `nil` at the time the result-form is evaluated. This means you cannot use *var* in the result-form to access the last element.

```lisp
(dolist (x '(1 2 3) x)
  (format t "~S~%" x))
.. 1
.. 2
.. 3
..
=> NIL
```

The return value is `NIL` (the value of `x` when the result-form runs), not `3`.
