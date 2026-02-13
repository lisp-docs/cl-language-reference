---
title: "last"
---

# last

import LastFunction from './_last_function.md';

<LastFunction />

## Expanded Reference: last

### Getting the last cons of a list

`last` returns the last cons cell of a list (not the last element). By default it returns a list of the last 1 cons.

```lisp
(last '(a b c))
→ (C)

(last '(1 2 3 4 5))
→ (5)
```

### Getting the last element itself

Since `last` returns the last cons, use `car` to extract the actual last element.

```lisp
(car (last '(a b c)))
→ C

(car (last '(1)))
→ 1
```

### last with the optional n argument

The optional second argument specifies how many trailing conses to return.

```lisp
(last '(a b c d) 0)
→ NIL

(last '(a b c d) 1)
→ (D)

(last '(a b c d) 2)
→ (C D)

(last '(a b c d) 3)
→ (B C D)

(last '(a b c d) 10)
→ (A B C D)
```

### last on the empty list

When applied to NIL, `last` returns NIL.

```lisp
(last nil)
→ NIL
```

### last with dotted lists

For dotted lists, `last` returns the last cons cell, which includes the non-nil terminator.

```lisp
(last '(a b . c))
→ (B . C)

(last '(a . b))
→ (A . B)

(last '(a . b) 0)
→ B
```

### Practical use: appending to the end of a list

`last` is commonly used with `rplacd` to destructively append to the end of a list.

```lisp
(let ((lst (list 1 2 3)))
  (rplacd (last lst) (list 4 5))
  lst)
→ (1 2 3 4 5)
```
