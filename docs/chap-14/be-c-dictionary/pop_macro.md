---
title: "pop"
---

# pop

import PopMacro from './_pop_macro.md';

<PopMacro />

## Expanded Reference: pop

### Removing and returning the first element

`pop` reads the first element from the list stored in a place, updates the place to the rest of the list, and returns the removed element.

```lisp
(let ((stack '(a b c)))
  (values (pop stack) stack))
→ A
→ (B C)
```

### Using push and pop as a stack

`push` and `pop` together implement a LIFO (last-in, first-out) stack.

```lisp
(let ((stack nil))
  (push 1 stack)
  (push 2 stack)
  (push 3 stack)
  (list (pop stack)
        (pop stack)
        (pop stack)))
→ (3 2 1)
```

### pop on the empty list

Popping from an empty list (NIL) returns NIL and leaves the place as NIL.

```lisp
(let ((lst nil))
  (values (pop lst) lst))
→ NIL
→ NIL
```

### pop with generalized places

`pop` works with any setf-able place, not just simple variables.

```lisp
(let ((data (list '(1 2 3))))
  (values (pop (car data)) data))
→ 1
→ ((2 3))
```

### Processing a list element by element with pop

`pop` provides a concise way to consume a list in a loop.

```lisp
(let ((lst '(10 20 30))
      (sum 0))
  (loop while lst do (incf sum (pop lst)))
  sum)
→ 60
```
