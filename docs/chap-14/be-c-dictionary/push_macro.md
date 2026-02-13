---
title: "push"
---

# push

import PushMacro from './_push_macro.md';

<PushMacro />

## Expanded Reference: push

### Prepending an item to a list

`push` adds an item to the front of the list stored in a place, updates the place, and returns the new list.

```lisp
(let ((lst '(b c d)))
  (push 'a lst)
  lst)
→ (A B C D)
```

### Building a list with push

`push` is commonly used to build lists in reverse order.

```lisp
(let ((result nil))
  (push 3 result)
  (push 2 result)
  (push 1 result)
  result)
→ (1 2 3)
```

### push returns the new list

The return value of `push` is the new value of the place.

```lisp
(let ((lst '(2 3)))
  (push 1 lst))
→ (1 2 3)
```

### push with generalized places

`push` works with any setf-able place, not just variables.

```lisp
(let ((lst (list nil)))
  (push 'a (car lst))
  (push 'b (car lst))
  lst)
→ ((B A))
```

### Practical use: collecting results

`push` combined with `nreverse` is a common idiom for efficiently collecting results in order.

```lisp
(let ((squares nil))
  (dotimes (i 5)
    (push (* (1+ i) (1+ i)) squares))
  (nreverse squares))
→ (1 4 9 16 25)
```

### push is equivalent to cons plus setf

`(push item place)` is equivalent to `(setf place (cons item place))`, except that the subforms of place are evaluated only once.

```lisp
(let ((x '(2 3)))
  (setf x (cons 1 x))
  x)
→ (1 2 3)
```
