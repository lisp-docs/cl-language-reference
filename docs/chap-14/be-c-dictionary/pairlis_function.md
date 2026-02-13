---
title: "pairlis"
---

# pairlis

import PairlisFunction from './_pairlis_function.md';

<PairlisFunction />

## Expanded Reference: pairlis

### Basic usage

`pairlis` constructs an association list by pairing up corresponding elements from a keys list and a data list.

```lisp
(pairlis '(a b c) '(1 2 3))
; → ((A . 1) (B . 2) (C . 3))  ; order may vary
```

### Prepending to an existing alist

An optional third argument provides an existing alist to append the new pairs onto.

```lisp
(pairlis '(x y) '(10 20) '((z . 30)))
; → ((X . 10) (Y . 20) (Z . 30))  ; order of new pairs may vary
```

### Building a simple symbol table

```lisp
(let ((vars '(width height depth))
      (vals '(100 200 50)))
  (pairlis vars vals))
; → ((WIDTH . 100) (HEIGHT . 200) (DEPTH . 50))  ; order may vary
```

### The original alist is not modified

```lisp
(let ((existing '((old . value))))
  (pairlis '(new) '(data) existing)
  existing)
; → ((OLD . VALUE))
```

### Looking up values in the result

The resulting alist works with `assoc` as expected.

```lisp
(let ((env (pairlis '(name age) '("Alice" 30))))
  (values (cdr (assoc 'name env))
          (cdr (assoc 'age env))))
; → "Alice", 30
```
