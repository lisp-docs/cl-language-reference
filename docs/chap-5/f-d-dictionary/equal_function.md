---
title: "equal"
---

# equal

import EqualFunction from './_equal_function.md';

<EqualFunction />

## Expanded Reference: equal

### Structural comparison of lists

`equal` compares lists recursively by descending into cons cells. Two lists with the same structure and elements are `equal`.

```lisp
(equal '(1 2 3) '(1 2 3)) → T
(equal '(a (b c)) '(a (b c))) → T
(equal '(1 2 3) '(1 2 4)) → NIL
```

### String comparison is case-sensitive

`equal` compares strings element by element, but it is case-sensitive. Use `equalp` for case-insensitive comparison.

```lisp
(equal "Hello" "Hello") → T
(equal "Hello" (copy-seq "Hello")) → T
(equal "Hello" "hello") → NIL
(equal "FOO" "foo") → NIL
```

### Numbers use eql semantics

`equal` compares numbers with `eql`, so they must be the same type and value.

```lisp
(equal 3 3) → T
(equal 3 3.0) → NIL
(equal #c(1 2) #c(1 2)) → T
```

### Arrays (other than strings and bit vectors) use eq

`equal` does not descend into arrays. Two different arrays with the same contents are not `equal` unless they are the exact same object.

```lisp
(equal #(1 2 3) #(1 2 3)) → NIL

(let ((v #(1 2 3)))
  (equal v v)) → T
```

### Bit vectors are compared element by element

Like strings, bit vectors are compared by content.

```lisp
(equal #*1010 #*1010) → T
(equal #*1010 #*1011) → NIL
```

### A rule of thumb: same printed representation

A useful heuristic is that two objects are `equal` if and only if they have the same printed representation. This holds for the common cases of lists, strings, numbers, and symbols.

```lisp
(equal 'foo 'foo) → T
(equal '(a . b) '(a . b)) → T
(equal '() nil) → T
```
