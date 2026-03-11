---
title: "throw"
---

# throw

import ThrowSpecialOperator from './_throw_special-operator.md';

<ThrowSpecialOperator />

## Expanded Reference: throw

### Basic throw to a catch tag

`throw` causes a non-local transfer of control to the dynamically most recent `catch` whose tag is `eq` to the throw tag. The result form is evaluated and its values are returned from the `catch`.

```lisp
(catch 'done
  (throw 'done 99))
=> 99
```

### throw across function boundaries

`throw` works dynamically, not lexically, so it can exit from deeply nested function calls.

```lisp
(defun inner ()
  (throw 'abort :bailed-out))

(defun middle ()
  (inner)
  (print "not reached"))

(catch 'abort
  (middle))
=> :BAILED-OUT
```

### Throwing multiple values

The result form of `throw` can produce multiple values, which are all passed to `catch`.

```lisp
(catch 'result
  (let ((i 0) (j 0))
    (loop
      (incf j 3)
      (incf i)
      (when (= i 3)
        (throw 'result (values i j))))))
=> 3
=> 9
```

### Error when no matching catch exists

If there is no outstanding `catch` with a matching tag, a `control-error` is signaled.

```lisp
;; This would signal an error:
;; (throw 'nonexistent-tag 42)
;; => ERROR: There is no outstanding catch for the tag NONEXISTENT-TAG
```

### throw evaluates the tag

The tag argument to `throw` is evaluated, so it can be a variable or expression.

```lisp
(defun throw-to (tag value)
  (throw tag value))

(catch 'exit
  (throw-to 'exit :done))
=> :DONE
```

### Interaction with unwind-protect

When `throw` transfers control, any intervening `unwind-protect` cleanup forms are executed during the unwinding.

```lisp
(catch 'outer
  (unwind-protect
      (throw 'outer :result)
    (format t "cleanup~%")))
.. cleanup
..
=> :RESULT
```
