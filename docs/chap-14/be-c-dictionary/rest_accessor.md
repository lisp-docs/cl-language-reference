---
title: "rest"
---

# rest

import RestAccessor from './_rest_accessor.md';

<RestAccessor />

## Expanded Reference: rest

### Getting the tail of a list

`rest` returns everything after the first element. It is functionally identical to `cdr` but is preferred when you are thinking of the argument as a list.

```lisp
(rest '(a b c))
=> (B C)

(rest '(1))
=> NIL

(rest nil)
=> NIL
```

### rest with dotted lists

When applied to a dotted pair, `rest` returns the cdr, which may be a non-list atom.

```lisp
(rest '(a . b))
=> B

(rest '(1 2 . 3))
=> (2 . 3)
```

### Using setf with rest

`rest` is a setf-able place, so you can modify the tail of a list.

```lisp
(let ((lst (list 1 2 3)))
  (setf (rest lst) '(20 30))
  lst)
=> (1 20 30)
```

### Idiomatic use: first and rest for head/tail decomposition

The pair `first`/`rest` is the idiomatic way to decompose a list into its head element and remaining elements.

```lisp
(defun my-reverse (lst)
  (if (null lst)
      nil
      (append (my-reverse (rest lst))
              (list (first lst)))))

(my-reverse '(1 2 3 4 5))
=> (5 4 3 2 1)
```

### Successive applications of rest

Calling `rest` repeatedly walks down the list, peeling off one element at a time.

```lisp
(rest '(a b c d))
=> (B C D)

(rest (rest '(a b c d)))
=> (C D)

(rest (rest (rest '(a b c d))))
=> (D)

(rest (rest (rest (rest '(a b c d)))))
=> NIL
```
