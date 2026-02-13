---
title: "list-length"
---

# list-length

import ListLengthFunction from './_list-length_function.md';

<ListLengthFunction />

## Expanded Reference: list-length

### Basic usage

`list-length` returns the length of a proper list, similar to `length`.

```lisp
(list-length '(a b c d))
; → 4

(list-length '(1 (2 3) 4))
; → 3

(list-length '())
; → 0
```

### Detecting circular lists

Unlike `length`, `list-length` returns NIL for circular lists instead of looping forever.

```lisp
(let ((lst (list 1 2 3)))
  (setf (cdr (last lst)) lst)  ; make it circular
  (list-length lst))
; → NIL
```

### Circular list of one element

```lisp
(let ((lst (list 'a)))
  (setf (cdr lst) lst)  ; circular: (a a a ...)
  (list-length lst))
; → NIL
```

### Comparison with length

`list-length` is safe for circular lists, while `length` would loop indefinitely. For proper lists, they return the same value.

```lisp
(let ((lst '(x y z)))
  (values (list-length lst)
          (length lst)))
; → 3, 3
```

### Practical use: safe list length check

```lisp
(defun safe-list-p (x)
  "Returns T if x is a proper list (not circular)."
  (and (listp x)
       (not (null (list-length x)))))

(safe-list-p '(1 2 3))
; → T

(safe-list-p nil)
; → T
```
