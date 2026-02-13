---
title: "copy-list"
---

# copy-list

import CopyListFunction from './_copy-list_function.md';

<CopyListFunction />

## Expanded Reference: copy-list

### Creating a shallow copy of a list

`copy-list` creates a new list with the same elements but new cons cells at the top level. The elements themselves are not copied.

```lisp
(let* ((original '(a b c))
       (copy (copy-list original)))
  (values copy
          (equal original copy)
          (eq original copy)))
→ (A B C)
→ T
→ NIL
```

### Modifications to the copy do not affect the original

Since the top-level cons cells are new, structural changes to the copy leave the original unchanged.

```lisp
(let* ((original (list 1 2 3))
       (copy (copy-list original)))
  (setf (car copy) 10)
  (values original copy))
→ (1 2 3)
→ (10 2 3)
```

### Shared substructure: nested lists are not copied

`copy-list` only copies the spine (top-level conses). Nested lists within the elements are shared between the original and the copy.

```lisp
(let* ((original (list (list 1 2) (list 3 4)))
       (copy (copy-list original)))
  (setf (caar copy) 99)
  (values original copy))
→ ((99 2) (3 4))
→ ((99 2) (3 4))
```

### copy-list with dotted lists

`copy-list` preserves dotted list structure.

```lisp
(copy-list '(a b . c))
→ (A B . C)
```

### Practical use: safe destructive operations

Use `copy-list` to protect a list before performing destructive operations on it.

```lisp
(let ((data '(3 1 4 1 5 9)))
  (sort (copy-list data) #'<))
→ (1 1 3 4 5 9)

;; data is unchanged because we sorted a copy
```
