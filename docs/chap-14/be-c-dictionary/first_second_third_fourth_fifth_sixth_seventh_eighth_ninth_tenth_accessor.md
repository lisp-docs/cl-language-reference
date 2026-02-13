---
title: "first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth"
---

# first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth

import FirstAccessor from './_first_second_third_fourth_fifth_sixth_seventh_eighth_ninth_tenth_accessor.md';

<FirstAccessor />

## Expanded Reference: first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth

### Accessing list elements by ordinal position

These accessors provide readable, English-named alternatives to car/cdr compositions. They use one-based indexing.

```lisp
(first '(a b c d e))
→ A

(second '(a b c d e))
→ B

(third '(a b c d e))
→ C

(fourth '(a b c d e))
→ D

(fifth '(a b c d e))
→ E
```

### Accessing positions beyond the list length

If the list is shorter than the requested position, NIL is returned.

```lisp
(sixth '(a b c))
→ NIL

(tenth '(1 2 3))
→ NIL
```

### All ten accessors

```lisp
(let ((lst '(1 2 3 4 5 6 7 8 9 10)))
  (list (first lst) (second lst) (third lst)
        (fourth lst) (fifth lst) (sixth lst)
        (seventh lst) (eighth lst) (ninth lst)
        (tenth lst)))
→ (1 2 3 4 5 6 7 8 9 10)
```

### Using setf with positional accessors

All of these accessors are setf-able, allowing modification of list elements by position.

```lisp
(let ((lst (list 'a 'b 'c 'd 'e)))
  (setf (third lst) 'C-PRIME)
  lst)
→ (A B C-PRIME D E)
```

### Equivalence with car/cdr and nth

`first` is equivalent to `car`, `second` to `cadr`, and so on. They also correspond to `nth` with a zero-based index.

```lisp
(let ((lst '(10 20 30 40 50)))
  (values (first lst)
          (car lst)
          (nth 0 lst)))
→ 10
→ 10
→ 10

(let ((lst '(10 20 30 40 50)))
  (values (third lst)
          (caddr lst)
          (nth 2 lst)))
→ 30
→ 30
→ 30
```

### Working with nested lists

These accessors can be combined with each other for structured data access.

```lisp
(defvar *students* '(("Alice" 95) ("Bob" 87) ("Carol" 92)))

(first (first *students*))
→ "Alice"

(second (second *students*))
→ 87

(first (third *students*))
→ "Carol"
```
