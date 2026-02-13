---
title: "reverse, nreverse"
---

# reverse, nreverse

import ReverseFunction from './_reverse_nreverse_function.md';

<ReverseFunction />

## Expanded Reference: reverse, nreverse

### Basic reversal with reverse

`reverse` returns a new sequence with elements in the opposite order. The original sequence is not modified.

```lisp
(reverse '(1 2 3 4 5)) ; → (5 4 3 2 1)
(reverse "abcdef") ; → "fedcba"
(reverse #(a b c)) ; → #(C B A)
```

### reverse does not modify the original

```lisp
(let ((lst '(1 2 3)))
  (reverse lst)
  lst)
; → (1 2 3)
```

### nreverse is destructive

`nreverse` may modify and reuse the original sequence. Always use the return value, because the original variable binding may no longer point to the first element of the result.

```lisp
(let ((lst (list 1 2 3 4 5)))
  (nreverse lst))
; → (5 4 3 2 1)
```

### Safely using nreverse

The idiomatic pattern is to capture the return value and not rely on the original binding.

```lisp
(let ((lst (list 'a 'b 'c)))
  (setq lst (nreverse lst))
  lst)
; → (C B A)
```

### Reversing strings

Both `reverse` and `nreverse` work with strings, since strings are sequences.

```lisp
(reverse "Hello") ; → "olleH"
(nreverse (copy-seq "Common Lisp")) ; → "psiL nommoC"
```

### Practical example: building a list by pushing then reversing

A common pattern is to build a list by pushing elements onto the front, then reversing it at the end.

```lisp
(let ((result '()))
  (dotimes (i 5)
    (push i result))
  (nreverse result))
; → (0 1 2 3 4)
```
