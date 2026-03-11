---
title: "copy-tree"
---

# copy-tree

import CopyTreeFunction from './_copy-tree_function.md';

<CopyTreeFunction />

## Expanded Reference: copy-tree

### Deep copy of a tree structure

`copy-tree` recursively copies all cons cells in a tree. Unlike `copy-list`, which only copies the top-level spine, `copy-tree` copies every level of nesting.

```lisp
(let* ((original '((1 2) (3 (4 5))))
       (copy (copy-tree original)))
  (values copy
          (equal original copy)
          (eq original copy)))
=> ((1 2) (3 (4 5)))
=> T
=> NIL
```

### Modifications to the deep copy do not affect the original

Because all cons cells are copied, even nested modifications are isolated.

```lisp
(let* ((original (list (list 1 2) (list 3 4)))
       (copy (copy-tree original)))
  (setf (caar copy) 99)
  (values original copy))
=> ((1 2) (3 4))
=> ((99 2) (3 4))
```

### Contrast with copy-list

`copy-list` shares nested structure, while `copy-tree` does not.

```lisp
(let* ((nested (list 'x 'y))
       (original (list nested 'z))
       (shallow (copy-list original))
       (deep (copy-tree original)))
  (values (eq (car original) (car shallow))
          (eq (car original) (car deep))))
=> T
=> NIL
```

### copy-tree with non-cons atoms

If the argument is not a cons, `copy-tree` returns it as-is (atoms are not copied).

```lisp
(copy-tree 42)
=> 42

(copy-tree "hello")
=> "hello"

(copy-tree nil)
=> NIL
```

### Practical use: safe tree manipulation

Use `copy-tree` when you need to modify a deeply nested structure without affecting the original.

```lisp
(let ((template '(:html (:head (:title "Default"))
                        (:body (:p "Content")))))
  (let ((page (copy-tree template)))
    (setf (cadr (cadadr page)) "My Page")
    (values template page)))
=> (:HTML (:HEAD (:TITLE "Default")) (:BODY (:P "Content")))
=> (:HTML (:HEAD (:TITLE "My Page")) (:BODY (:P "Content")))
```

### copy-tree with dotted pairs

Dotted pairs within the tree are also recursively copied.

```lisp
(let* ((original '((a . 1) (b . 2)))
       (copy (copy-tree original)))
  (setf (cdar copy) 99)
  (values original copy))
=> ((A . 1) (B . 2))
=> ((A . 99) (B . 2))
```
