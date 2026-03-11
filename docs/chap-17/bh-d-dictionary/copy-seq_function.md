---
title: "copy-seq"
---

# copy-seq

import CopySeqFunction from './_copy-seq_function.md';

<CopySeqFunction />

## Expanded Reference: copy-seq

### Creating an independent copy

`copy-seq` creates a new sequence with the same elements as the original. Modifications to the copy do not affect the original.

```lisp
(let* ((original '(1 2 3))
       (copy (copy-seq original)))
  (setf (first copy) 99)
  (values original copy))
=> (1 2 3)
=> (99 2 3)
```

### Copying strings

Strings in Common Lisp are often literal and thus not modifiable. `copy-seq` produces a fresh, modifiable copy.

```lisp
(let ((str (copy-seq "hello")))
  (setf (char str 0) #\H)
  str)
=> "Hello"
```

### The copy is equalp but not eql

The copy has equal content but is a distinct object.

```lisp
(let* ((s "test")
       (c (copy-seq s)))
  (values (equalp s c) (eql s c)))
=> T
=> NIL
```

### Copying vectors

When given a vector, `copy-seq` returns a fresh simple array of the same element type.

```lisp
(copy-seq #(a b c))
=> #(A B C)
(copy-seq #())
=> #()
```

### Practical use: safe destructive operations

`copy-seq` is commonly used before destructive operations like `sort` or `nreverse` to preserve the original sequence.

```lisp
(let ((data '(3 1 4 1 5 9)))
  (sort (copy-seq data) #'<))
=> (1 1 3 4 5 9)
```
