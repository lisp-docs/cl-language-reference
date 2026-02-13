---
title: "dotimes"
---

# dotimes

import DotimesMacro from './_dotimes_macro.md';

<DotimesMacro />

## Expanded Reference: dotimes

### Basic counting loop

`dotimes` iterates a variable from 0 up to (but not including) a count value.

```lisp
(dotimes (i 5)
  (print i))
0
1
2
3
4
NIL
```

### Returning a result

The optional third element in the variable spec is evaluated and returned when the loop completes. At that point, *var* is bound to the count value.

```lisp
(dotimes (i 10 i))
→ 10

(let ((sum 0))
  (dotimes (i 5 sum)
    (incf sum i)))
→ 10
```

### Building a list with dotimes

```lisp
(let ((squares '()))
  (dotimes (i 6 (nreverse squares))
    (push (* i i) squares)))
→ (0 1 4 9 16 25)
```

### Early exit with return

`dotimes` establishes an implicit block named `nil`, so `return` can exit early.

```lisp
(dotimes (i 100)
  (when (> (* i i) 50)
    (return i)))
→ 8
```

### Zero or negative count

If the count-form evaluates to zero or a negative number, the body is not executed at all.

```lisp
(dotimes (i 0)
  (print "this never prints"))
→ NIL

(dotimes (i -5)
  (print "neither does this"))
→ NIL
```

### Nested dotimes — multiplication table

```lisp
(dotimes (row 4)
  (dotimes (col 4)
    (format t "~3D" (* (1+ row) (1+ col))))
  (terpri))
  1  2  3  4
  2  4  6  8
  3  6  9 12
  4  8 12 16
NIL
```
