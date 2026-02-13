---
title: "mapc, mapcar, mapcan, mapl, maplist, mapcon"
---

# mapc, mapcar, mapcan, mapl, maplist, mapcon

import MapcFunction from './_mapc_mapcar_mapcan_mapl_maplist_mapcon_function.md';

<MapcFunction />

## Expanded Reference: mapc, mapcar, mapcan, mapl, maplist, mapcon

### mapcar: transform each element

`mapcar` applies a function to each element of one or more lists and collects the results into a new list.

```lisp
(mapcar #'1+ '(1 2 3 4))
→ (2 3 4 5)

(mapcar #'string-upcase '("hello" "world"))
→ ("HELLO" "WORLD")
```

### mapcar with multiple lists

When given multiple lists, `mapcar` applies the function to corresponding elements. It stops when the shortest list is exhausted.

```lisp
(mapcar #'+ '(1 2 3) '(10 20 30))
→ (11 22 33)

(mapcar #'list '(a b c) '(1 2 3))
→ ((A 1) (B 2) (C 3))

(mapcar #'cons '(a b c) '(1 2 3))
→ ((A . 1) (B . 2) (C . 3))
```

### mapc: apply for side effects only

`mapc` is like `mapcar` but discards the results and returns the first list argument. Use it when you only care about side effects.

```lisp
(mapc #'print '(1 2 3))
1
2
3
→ (1 2 3)
```

### mapcan: transform and splice results

`mapcan` applies the function to each element and concatenates the results (which must be lists) using `nconc`. This is useful as a filter-and-transform.

```lisp
(mapcan #'(lambda (x)
            (if (evenp x) (list x) nil))
        '(1 2 3 4 5 6))
→ (2 4 6)

(mapcan #'(lambda (x) (list x (* x x)))
        '(1 2 3))
→ (1 1 2 4 3 9)
```

### maplist: operate on successive tails

`maplist` applies the function to the list itself, then to its cdr, then its cddr, and so on.

```lisp
(maplist #'identity '(a b c))
→ ((A B C) (B C) (C))

(maplist #'length '(1 2 3 4))
→ (4 3 2 1)
```

### mapl: side effects on successive tails

`mapl` is like `maplist` but discards results and returns the first list. Use it for side effects on successive sublists.

```lisp
(let ((result nil))
  (mapl #'(lambda (tail) (push tail result)) '(a b c))
  (nreverse result))
→ ((A B C) (B C) (C))
```

### mapcon: splice results from tail processing

`mapcon` is to `maplist` what `mapcan` is to `mapcar`: it applies the function to successive tails and splices the results with `nconc`.

```lisp
(mapcon #'copy-list '(1 2 3))
→ (1 2 3 2 3 3)
```
