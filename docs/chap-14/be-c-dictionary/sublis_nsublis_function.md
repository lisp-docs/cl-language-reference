---
title: "sublis, nsublis"
---

# sublis, nsublis

import SublisFunction from './_sublis_nsublis_function.md';

<SublisFunction />

## Expanded Reference: sublis, nsublis

### Basic substitution

`sublis` performs multiple simultaneous substitutions on a tree using an association list. Each key in the alist that matches a leaf or subtree is replaced by its associated value.

```lisp
(sublis '((a . 1) (b . 2) (c . 3))
        '(a b c d))
; → (1 2 3 D)
```

### Multiple substitutions happen simultaneously

Unlike calling `subst` multiple times, `sublis` applies all substitutions at once. A value substituted in one position is not subject to further substitution.

```lisp
(sublis '((a . b) (b . a))
        '(a b c))
; → (B A C)
```

### Working with nested trees

`sublis` descends into both car and cdr positions of the tree.

```lisp
(sublis '((x . 10) (y . 20))
        '(+ (* x x) (* y y)))
; → (+ (* 10 10) (* 20 20))
```

### Using :test for custom comparison

By default, `sublis` uses `eql`. Use `:test #'equal` to match structured keys.

```lisp
(sublis '(((+ x y) . sum) ((* x y) . product))
        '(list (+ x y) (* x y))
        :test #'equal)
; → (LIST SUM PRODUCT)
```

### nsublis is destructive

`nsublis` modifies the tree in place. Always use the return value.

```lisp
(let ((tree (list 'a (list 'b 'c) 'd)))
  (nsublis '((b . x) (d . z)) tree))
; → (A (X C) Z)
```

### Dotted pair substitution

`sublis` also substitutes in the cdr position, affecting dotted pairs.

```lisp
(sublis '((old . new))
        '(a old b . old))
; → (A NEW B . NEW)
```
