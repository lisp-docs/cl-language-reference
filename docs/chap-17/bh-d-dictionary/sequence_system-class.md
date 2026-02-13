---
title: "sequence"
---

# sequence

import SequenceSystemClass from './_sequence_system-class.md';

<SequenceSystemClass />

## Expanded Reference: sequence

### The sequence type

`sequence` is an abstract system class that represents ordered collections of elements. The two built-in subtypes are `list` and `vector` (which includes strings and bit-vectors).

```lisp
(typep '(a b c) 'sequence) ; → T
(typep #(1 2 3) 'sequence) ; → T
(typep "hello" 'sequence) ; → T
```

### Lists are sequences

Lists (including `NIL`, the empty list) are proper sequences.

```lisp
(typep '() 'sequence) ; → T
(typep '(1 2 3) 'sequence) ; → T
```

### Vectors are sequences

All vectors, including specialized arrays like strings and bit-vectors, are sequences.

```lisp
(typep "abc" 'sequence) ; → T
(typep #*1010 'sequence) ; → T
(typep (make-array 3) 'sequence) ; → T
```

### Using sequence as a type specifier

The `sequence` type is commonly used in function signatures and type declarations to accept any kind of sequence.

```lisp
(defun my-length (seq)
  (check-type seq sequence)
  (length seq))

(my-length '(a b c)) ; → 3
(my-length "hello") ; → 5
(my-length #(1 2)) ; → 2
```

### Fill pointers and active elements

When a vector has a fill pointer, sequence operations only consider the active elements (those before the fill pointer).

```lisp
(let ((v (make-array 10 :fill-pointer 3 :initial-element 0)))
  (length v))
; → 3
```
