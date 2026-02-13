---
title: "subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not"
---

# subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not

import SubstFunction from './_subst_subst-if_subst-if-not_nsubst_nsubst-if_nsubst-if-not_function.md';

<SubstFunction />

## Expanded Reference: subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not

### Basic subst usage

`subst` replaces all occurrences of `old` with `new` in a tree, returning a new tree.

```lisp
(subst 'x 'b '(a b (c b d)))
; → (A X (C X D))

(subst "new" 'old '(old is (not old)))
; → ("new" IS (NOT "new"))
```

### subst replaces in both car and cdr positions

Since `subst` operates on a tree (not just a flat list), it replaces leaves in both car and cdr positions, including the terminating atom of dotted lists.

```lisp
(subst 'z nil '(a b c))
; → (A B C . Z)

(subst 'end 'x '(a . x))
; → (A . END)
```

### Using :test for custom comparison

```lisp
(subst 'new '(old item)
       '(a (old item) b (old item))
       :test #'equal)
; → (A NEW B NEW)
```

### subst-if replaces based on a predicate

`subst-if` replaces every subtree or leaf that satisfies the predicate.

```lisp
(subst-if 0 #'oddp '(1 2 (3 4) 5))
; → (0 2 (0 4) 0)

(subst-if :empty #'null '(a nil (b nil) nil))
; → (A :EMPTY (B :EMPTY) :EMPTY)
```

### nsubst is destructive

`nsubst` modifies the tree in place rather than creating a copy.

```lisp
(let ((tree (list 1 (list 2 3) (list 4 5))))
  (nsubst 99 3 tree)
  tree)
; → (1 (2 99) (4 5))
```

### Practical example: template substitution

```lisp
(let ((template '(format t "Hello, ~A! You are ~A years old."
                  :name :age)))
  (subst "Alice" :name
    (subst 30 :age template)))
; → (FORMAT T "Hello, ~A! You are ~A years old." "Alice" 30)
```
