---
title: "nthcdr"
---

# nthcdr

import NthcdrFunction from './_nthcdr_function.md';

<NthcdrFunction />

## Expanded Reference: nthcdr

### Getting the tail after n cdr operations

`nthcdr` returns the result of applying `cdr` n times to a list. It effectively skips the first n elements.

```lisp
(nthcdr 0 '(a b c d))
→ (A B C D)

(nthcdr 1 '(a b c d))
→ (B C D)

(nthcdr 2 '(a b c d))
→ (C D)

(nthcdr 4 '(a b c d))
→ NIL
```

### nthcdr beyond the end of the list

If n is greater than the length of the list, `nthcdr` returns NIL.

```lisp
(nthcdr 10 '(a b c))
→ NIL

(nthcdr 0 nil)
→ NIL

(nthcdr 3 nil)
→ NIL
```

### nthcdr with dotted lists

When applied to a dotted list, `nthcdr` can return the non-nil terminating atom.

```lisp
(nthcdr 1 '(a . b))
→ B

(nthcdr 2 '(a b . c))
→ C
```

### Relationship to nth

`nth` is equivalent to `(car (nthcdr n list))`.

```lisp
(let ((lst '(10 20 30 40)))
  (values (nth 2 lst)
          (car (nthcdr 2 lst))))
→ 30
→ 30
```

### Practical use: dropping elements from a list

`nthcdr` provides a simple way to skip a fixed number of elements from the front of a list.

```lisp
(defun drop (n lst)
  "Return the list with the first n elements removed."
  (nthcdr n lst))

(drop 2 '(a b c d e))
→ (C D E)

(drop 0 '(a b c))
→ (A B C)

(drop 5 '(a b c))
→ NIL
```
