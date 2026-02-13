---
title: "nconc"
---

# nconc

import NconcFunction from './_nconc_function.md';

<NconcFunction />

## Expanded Reference: nconc

### Destructive concatenation of lists

`nconc` concatenates lists by destructively modifying the cdr of the last cons of each list (except the last) to point to the next list.

```lisp
(let ((x (list 1 2 3))
      (y (list 4 5 6)))
  (nconc x y))
→ (1 2 3 4 5 6)
```

### nconc modifies the original lists

Unlike `append`, `nconc` does not copy. The original lists are modified in place.

```lisp
(let ((x (list 'a 'b))
      (y (list 'c 'd)))
  (nconc x y)
  x)
→ (A B C D)
```

### Concatenating multiple lists

`nconc` can take any number of arguments.

```lisp
(let ((a (list 1 2))
      (b (list 3 4))
      (c (list 5 6)))
  (nconc a b c))
→ (1 2 3 4 5 6)
```

### NIL arguments are skipped

NIL arguments are ignored, and the next non-nil list continues the chain.

```lisp
(let ((x (list 'a 'b))
      (y (list 'c 'd)))
  (nconc nil x nil y nil))
→ (A B C D)
```

### nconc with no arguments

Calling `nconc` with no arguments returns NIL.

```lisp
(nconc)
→ NIL
```

### Caution: do not nconc quoted lists

Because `nconc` is destructive, you should only use it on freshly consed lists (e.g., from `list` or `copy-list`), never on literal quoted lists.

```lisp
;; SAFE: using list to create fresh conses
(let ((x (list 1 2))
      (y (list 3 4)))
  (nconc x y))
→ (1 2 3 4)

;; UNSAFE: (nconc '(1 2) '(3 4)) -- modifying literal data
;; is undefined behavior and should be avoided
```
