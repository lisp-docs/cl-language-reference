---
title: "ldiff, tailp"
---

# ldiff, tailp

import LdiffFunction from './_ldiff_tailp_function.md';

<LdiffFunction />

## Expanded Reference: ldiff, tailp

### Basic tailp usage

`tailp` returns true if the object is `eq` to some tail (including the list itself and the terminating atom) of the list.

```lisp
(let* ((lst '(a b c d))
       (tail (cddr lst)))  ; tail is (c d)
  (tailp tail lst))
=> T

(tailp '(c d) '(a b c d))
=> NIL
```

### NIL is a tail of every proper list

```lisp
(tailp nil '(a b c))
=> T

(tailp nil '())
=> T
```

### Basic ldiff usage

`ldiff` returns a fresh list of elements that precede the given tail in the list. If the object is not a tail, it returns a copy of the entire list.

```lisp
(let* ((lst '(1 2 3 4 5))
       (tail (cdddr lst)))  ; tail is (4 5)
  (ldiff lst tail))
=> (1 2 3)
```

### ldiff with a non-tail object

When the object is not a tail, `ldiff` returns a copy of the whole list.

```lisp
(ldiff '(a b c) '(not a tail))
=> (A B C)

(ldiff '(a b c) 'x)
=> (A B C)
```

### Splitting a list at a known position

`ldiff` and `tailp` work together for splitting a list at a cons cell.

```lisp
(let* ((lst '(a b c d e))
       (split-point (member 'c lst)))
  (values (ldiff lst split-point) split-point))
=> (A B)
=> (C D E)
```

### Dotted lists

`tailp` can also check tails of dotted lists, including the terminating atom.

```lisp
(let ((lst '(a b . c)))
  (values (tailp 'c lst)
          (tailp nil lst)))
=> T
=> NIL
```
