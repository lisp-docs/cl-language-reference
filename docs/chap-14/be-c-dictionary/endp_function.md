---
title: "endp"
---

# endp

import EndpFunction from './_endp_function.md';

<EndpFunction />

## Expanded Reference: endp

### Testing for end of a proper list

`endp` returns true when given NIL (the empty list) and false when given a cons. It is designed for testing termination when iterating over a proper list.

```lisp
(endp nil)
→ T

(endp '(a b c))
→ NIL
```

### Traversing a list with endp

`endp` is the preferred predicate for testing list termination in loops and recursive functions, because it signals an error if it encounters a non-list atom (unlike `null`).

```lisp
(let ((lst '(10 20 30))
      (sum 0))
  (do ((tail lst (cdr tail)))
      ((endp tail) sum)
    (incf sum (car tail))))
→ 60
```

### endp checks that the argument is a list

Unlike `null`, `endp` should signal a type-error if given something that is neither NIL nor a cons. This makes it a safer choice for iterating proper lists.

```lisp
(endp '())
→ T

(endp '(x))
→ NIL

;; (endp 42) would signal a TYPE-ERROR
```

### Using endp in recursive list processing

`endp` works well as the base case check in recursive functions that consume proper lists.

```lisp
(defun sum-list (lst)
  (if (endp lst)
      0
      (+ (car lst) (sum-list (cdr lst)))))

(sum-list '(1 2 3 4 5))
→ 15

(sum-list '())
→ 0
```

### endp with cddr for pairwise processing

When processing list elements in pairs, `endp` can test the remaining tail at each step.

```lisp
(defun pairwise-max (lst)
  "Return a list of the max of each consecutive pair."
  (if (endp (cdr lst))
      nil
      (cons (max (first lst) (second lst))
            (pairwise-max (cddr lst)))))

(pairwise-max '(3 7 2 9 5 1))
→ (7 9 5)
```
