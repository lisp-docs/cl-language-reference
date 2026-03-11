---
title: "mismatch"
---

# mismatch

import MismatchFunction from './_mismatch_function.md';

<MismatchFunction />

## Expanded Reference: mismatch

### Finding where two sequences differ

`mismatch` compares two sequences element-by-element and returns the index in sequence-1 where they first differ. Returns `NIL` if the sequences match completely.

```lisp
(mismatch '(a b c d) '(a b x d))
=> 2
(mismatch "hello" "hello")
=> NIL
(mismatch "hello" "help")
=> 3
```

### Sequences of different lengths

If one sequence is a prefix of the other, `mismatch` returns the index just past the shorter sequence.

```lisp
(mismatch "abc" "abcdef")
=> 3
(mismatch '(1 2 3 4 5) '(1 2 3))
=> 3
```

### Case-insensitive comparison with :test

```lisp
(mismatch "abcd" "ABCDE" :test #'char-equal)
=> 4
(mismatch "HELLO" "hello" :test #'char-equal)
=> NIL
```

### Comparing from the end

With `:from-end t`, `mismatch` returns one plus the index of the rightmost position where the sequences differ.

```lisp
(mismatch '(3 2 1 1 2 3) '(1 2 3) :from-end t)
=> 3
```

### Using :key for derived comparisons

```lisp
(mismatch '(1 2 3) '(2 3 4) :key #'oddp)
=> 0
```

### Restricting comparison ranges

Use `:start1`, `:end1`, `:start2`, and `:end2` to compare only portions of each sequence.

```lisp
(mismatch '(1 2 3 4 5 6) '(3 4 5 6 7) :start1 2 :end2 4)
=> NIL
```
