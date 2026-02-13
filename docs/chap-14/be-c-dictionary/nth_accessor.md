---
title: "nth"
---

# nth

import NthAccessor from './_nth_accessor.md';

<NthAccessor />

## Expanded Reference: nth

### Accessing a list element by zero-based index

`nth` returns the element at position n (zero-based) in a list.

```lisp
(nth 0 '(a b c d))
→ A

(nth 2 '(a b c d))
→ C

(nth 3 '(a b c d))
→ D
```

### Out-of-bounds access returns NIL

If n is greater than or equal to the length of the list, `nth` returns NIL.

```lisp
(nth 5 '(a b c))
→ NIL

(nth 0 nil)
→ NIL
```

### Using setf with nth

`nth` is a setf-able place, so you can modify the element at position n.

```lisp
(let ((lst (list 'x 'y 'z)))
  (setf (nth 1 lst) 'Y-REPLACED)
  lst)
→ (X Y-REPLACED Z)
```

### Relationship to car and nthcdr

`nth` is defined as `(car (nthcdr n list))`. It first walks n cdr links down the list, then takes the car.

```lisp
(let ((lst '(10 20 30 40 50)))
  (values (nth 3 lst)
          (car (nthcdr 3 lst))))
→ 40
→ 40
```

### Practical use: indexed access in a loop

`nth` provides random access to list elements, useful when you need a specific position.

```lisp
(let ((colors '("red" "green" "blue" "yellow" "purple")))
  (list (nth 0 colors)
        (nth 2 colors)
        (nth 4 colors)))
→ ("red" "blue" "purple")
```

### Note: nth takes the index first

Unlike `elt` (which takes the sequence first), `nth` takes the index as its first argument and the list as its second.

```lisp
;; nth: index first, list second
(nth 1 '(a b c))
→ B

;; elt: sequence first, index second
(elt '(a b c) 1)
→ B
```
