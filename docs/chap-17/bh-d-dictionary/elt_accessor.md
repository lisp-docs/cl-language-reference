---
title: "elt"
---

# elt

import EltAccessor from './_elt_accessor.md';

<EltAccessor />

## Expanded Reference: elt

### Basic element access

`elt` accesses an element of any sequence by its zero-based index. It works uniformly on lists, vectors, and strings.

```lisp
(elt '(a b c d) 2) ; → C
(elt "hello" 0) ; → #\h
(elt #(10 20 30) 1) ; → 20
```

### Using setf with elt

`elt` is an accessor, so you can use `setf` to modify elements in place.

```lisp
(let ((lst (list 1 2 3 4 5)))
  (setf (elt lst 2) 99)
  lst)
; → (1 2 99 4 5)
```

### Modifying string characters

Since strings are sequences, `elt` can read and write individual characters.

```lisp
(let ((str (copy-seq "hello")))
  (setf (elt str 0) #\H)
  str)
; → "Hello"
```

### elt vs. nth and aref

`elt` is the generic sequence accessor. For lists, `nth` may be more idiomatic; for vectors, `aref` or `svref` is often preferred. However, `elt` works on any sequence type, making it useful for polymorphic code.

```lisp
(defun second-element (seq)
  (elt seq 1))

(second-element '(a b c)) ; → B
(second-element "abc") ; → #\b
(second-element #(10 20 30)) ; → 20
```

### Out-of-bounds access signals an error

Accessing an index beyond the sequence length signals a `type-error`.

```lisp
;; (elt '(a b c) 5) ; would signal a TYPE-ERROR
;; (elt #() 0)      ; would signal a TYPE-ERROR
```
