---
title: "copy-alist"
---

# copy-alist

import CopyAlistFunction from './_copy-alist_function.md';

<CopyAlistFunction />

## Expanded Reference: copy-alist

### Basic usage

`copy-alist` creates a copy of an association list, making fresh copies of both the top-level spine and each cons pair (the key-value pairs).

```lisp
(let ((original '((a . 1) (b . 2) (c . 3))))
  (copy-alist original))
; → ((A . 1) (B . 2) (C . 3))
```

### Modifying the copy does not affect the original

Because `copy-alist` copies each cons pair, modifying a value in the copy does not change the original alist.

```lisp
(let* ((original '((a . 1) (b . 2)))
       (copied (copy-alist original)))
  (setf (cdr (assoc 'a copied)) 99)
  (values original copied))
; → ((A . 1) (B . 2)), ((A . 99) (B . 2))
```

### Difference from copy-list

`copy-list` only copies the spine (top-level conses) but shares the cons pairs. Modifying a pair through a `copy-list` result also modifies the original.

```lisp
(let* ((original (list (cons 'x 10) (cons 'y 20)))
       (list-copy (copy-list original))
       (alist-copy (copy-alist original)))
  ;; Modifying through list-copy affects original
  (setf (cdr (assoc 'x list-copy)) 999)
  ;; Modifying through alist-copy does NOT affect original
  (setf (cdr (assoc 'y alist-copy)) 888)
  (values original list-copy alist-copy))
; → ((X . 999) (Y . 20)), ((X . 999) (Y . 20)), ((X . 10) (Y . 888))
```

### Shared values are still shared

While the cons pairs are copied, the actual key and value objects are still shared (not deeply copied).

```lisp
(let* ((shared-value (list 1 2 3))
       (original (list (cons 'data shared-value)))
       (copied (copy-alist original)))
  (eq (cdr (first original))
      (cdr (first copied))))
; → T
```
