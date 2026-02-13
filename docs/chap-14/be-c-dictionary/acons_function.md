---
title: "acons"
---

# acons

import AconsFunction from './_acons_function.md';

<AconsFunction />

## Expanded Reference: acons

### Basic usage

`acons` adds a new key-value pair to the front of an association list. It is equivalent to `(cons (cons key datum) alist)`.

```lisp
(acons 'name "Alice" '())
; → ((NAME . "Alice"))

(acons 'age 30 '((name . "Alice")))
; → ((AGE . 30) (NAME . "Alice"))
```

### Building an alist incrementally

Since `acons` does not modify the original alist, you must capture the return value to build up the list.

```lisp
(defvar *settings* '())

(setq *settings* (acons 'color 'red *settings*))
; → ((COLOR . RED))

(setq *settings* (acons 'size 'large *settings*))
; → ((SIZE . LARGE) (COLOR . RED))

(setq *settings* (acons 'weight 10 *settings*))
; → ((WEIGHT . 10) (SIZE . LARGE) (COLOR . RED))
```

### Shadowing previous entries

Adding a duplicate key shadows the earlier entry. `assoc` finds the first match, so the new value takes precedence.

```lisp
(let ((alist (acons 'x 1 '())))
  (setq alist (acons 'x 2 alist))
  (assoc 'x alist))
; → (X . 2)
```

### Non-destructive behavior

The original alist is not modified by `acons`.

```lisp
(let ((original '((a . 1) (b . 2))))
  (acons 'c 3 original)
  original)
; → ((A . 1) (B . 2))
```

### Equivalence to cons of cons

`acons` is defined as a convenience shorthand.

```lisp
(equal (acons 'k 'v '((a . 1)))
       (cons (cons 'k 'v) '((a . 1))))
; → T
```
