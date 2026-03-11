---
title: "length"
---

# length

import LengthFunction from './_length_function.md';

<LengthFunction />

## Expanded Reference: length

### Basic usage with lists and strings

`length` returns the number of elements in any proper sequence -- lists, vectors, and strings.

```lisp
(length '(a b c d))
=> 4
(length "hello")
=> 5
(length #(1 2 3))
=> 3
(length nil)
=> 0
```

### Empty sequences

An empty sequence always has length zero, regardless of type.

```lisp
(length '())
=> 0
(length "")
=> 0
(length #())
=> 0
```

### Length with a fill pointer

When a vector has a fill pointer, `length` returns the active length (the fill pointer value), not the total allocated size.

```lisp
(let ((v (make-array 10 :fill-pointer 3)))
  (length v))
=> 3
```

### Strings are vectors of characters

Since strings are vectors, `length` works naturally on them. This includes strings with special characters.

```lisp
(length "Common Lisp")
=> 11
(length (make-string 5 :initial-element #\x))
=> 5
```

### Practical example: checking for empty sequences

`length` is commonly used to test whether a sequence has elements, though for lists `null` is more idiomatic.

```lisp
(defun sequence-empty-p (seq)
  (zerop (length seq)))

(sequence-empty-p '())
=> T
(sequence-empty-p "abc")
=> NIL
(sequence-empty-p #())
=> T
```
