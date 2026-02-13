---
title: "rplaca, rplacd"
---

# rplaca, rplacd

import RplacaFunction from './_rplaca_rplacd_function.md';

<RplacaFunction />

## Expanded Reference: rplaca, rplacd

### Basic rplaca usage

`rplaca` destructively replaces the car of a cons cell. It returns the modified cons.

```lisp
(let ((cell (cons 'a 'b)))
  (rplaca cell 'x)
  cell)
; → (X . B)
```

### Basic rplacd usage

`rplacd` destructively replaces the cdr of a cons cell. It returns the modified cons.

```lisp
(let ((cell (cons 'a 'b)))
  (rplacd cell 'y)
  cell)
; → (A . Y)
```

### Modifying a list element

`rplaca` can change an element in a list by operating on the appropriate cons cell.

```lisp
(let ((lst (list 1 2 3 4)))
  (rplaca (cdr lst) 99)  ; replace second element
  lst)
; → (1 99 3 4)
```

### Modifying list structure with rplacd

`rplacd` can truncate or extend a list by changing the cdr link.

```lisp
;; Truncate a list after the second element
(let ((lst (list 'a 'b 'c 'd)))
  (rplacd (cdr lst) nil)
  lst)
; → (A B)

;; Splice another list in
(let ((lst (list 1 2 5))
      (insert (list 3 4)))
  (rplacd insert (cddr lst))
  (rplacd (cdr lst) insert)
  lst)
; → (1 2 3 4 5)
```

### Relationship to setf of car/cdr

`rplaca` and `rplacd` are equivalent to `(setf (car cons) object)` and `(setf (cdr cons) object)`, except they return the cons rather than the new value.

```lisp
(let ((cell (cons 'a 'b)))
  (eq (rplaca cell 'x) cell))
; → T
```
