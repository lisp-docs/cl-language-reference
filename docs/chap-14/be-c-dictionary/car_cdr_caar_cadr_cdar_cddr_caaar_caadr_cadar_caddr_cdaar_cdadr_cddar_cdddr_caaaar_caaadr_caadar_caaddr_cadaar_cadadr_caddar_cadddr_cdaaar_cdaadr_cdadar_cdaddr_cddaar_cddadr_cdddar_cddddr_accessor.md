---
title: "car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar, caddr, cdaar, cdadr, cddar, cdddr, caaaar, caaadr, caadar, caaddr, cadaar, cadadr, caddar, cadddr, cdaaar, cdaadr, cdadar, cdaddr, cddaar, cddadr, cdddar, cddddr"
---

# car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar, caddr, cdaar, cdadr, cddar, cdddr, caaaar, caaadr, caadar, caaddr, cadaar, cadadr, caddar, cadddr, cdaaar, cdaadr, cdadar, cdaddr, cddaar, cddadr, cdddar, cddddr

import CarAccessor from './_car_cdr_caar_cadr_cdar_cddr_caaar_caadr_cadar_caddr_cdaar_cdadr_cddar_cdddr_caaaar_caaadr_caadar_caaddr_cadaar_cadadr_caddar_cadddr_cdaaar_cdaadr_cdadar_cdaddr_cddaar_cddadr_cdddar_cddddr_accessor.md';

<CarAccessor />

## Expanded Reference: car, cdr, and compositions

### Basic car and cdr

`car` returns the first element of a cons cell. `cdr` returns everything after the first element.

```lisp
(car '(a b c))
=> A

(cdr '(a b c))
=> (B C)

(car '(1 . 2))
=> 1

(cdr '(1 . 2))
=> 2
```

### car and cdr of NIL

Both `car` and `cdr` return NIL when applied to the empty list.

```lisp
(car nil)
=> NIL

(cdr nil)
=> NIL
```

### Two-level compositions: caar, cadr, cdar, cddr

The letter sequence between C and R describes a chain of car/cdr operations, read right-to-left. `cadr` means (car (cdr x)), i.e., the second element.

```lisp
(cadr '(a b c))
=> B

(cddr '(a b c))
=> (C)

(caar '((x y) (z w)))
=> X

(cdar '((x y) (z w)))
=> (Y)
```

### Three-level compositions for nested structures

`caddr` accesses the third element. `cadar` accesses the second element of the first sublist.

```lisp
(caddr '(a b c d))
=> C

(cadar '((1 2 3) (4 5 6)))
=> 2

(cdaar '(((a b c) d) e))
=> (B C)
```

### Using setf with car and cdr

`car` and `cdr` (and all their compositions) are setf-able places, allowing in-place modification of list structure.

```lisp
(let ((lst (list 1 2 3)))
  (setf (car lst) 10)
  lst)
=> (10 2 3)

(let ((lst (list 1 2 3)))
  (setf (cadr lst) 20)
  lst)
=> (1 20 3)
```

### Practical example: accessing structured data

When data is organized in nested lists, car/cdr compositions provide direct access.

```lisp
(defvar *record* '("Alice" (1990 3 15) ("Engineering" "Senior")))

;; Name
(car *record*)
=> "Alice"

;; Birth year
(caadr *record*)
=> 1990

;; Department
(caaddr *record*)
=> "Engineering"
```
