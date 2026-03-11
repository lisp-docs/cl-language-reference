---
title: "sort, stable-sort"
---

# sort, stable-sort

import SortFunction from './_sort_stable-sort_function.md';

<SortFunction />

## Expanded Reference: sort, stable-sort

### Basic sorting

`sort` destructively sorts a sequence according to a predicate. Always use the return value, as the original variable binding may no longer point to the sorted sequence (especially for lists).

```lisp
(sort (list 3 1 4 1 5 9 2 6) #'<)
=> (1 1 2 3 4 5 6 9)
(sort (copy-seq "zyxwvu") #'char<)
=> "uvwxyz"
```

### Sorting with a :key function

The `:key` argument extracts a comparison value from each element.

```lisp
(sort (list '(3 a) '(1 b) '(2 c)) #'< :key #'first)
=> ((1 B) (2 C) (3 A))
```

### sort is destructive -- copy first

`sort` may destroy the original sequence. Always copy if you need to preserve the original.

```lisp
(let ((data (list 5 3 1 4 2)))
  (sort (copy-seq data) #'<))
=> (1 2 3 4 5)
```

### stable-sort preserves relative order of equal elements

`stable-sort` guarantees that elements considered equal by the predicate retain their original relative order.

```lisp
(stable-sort (list '(1 :a) '(2 :b) '(1 :c) '(2 :d))
             #'< :key #'first)
=> ((1 :A) (1 :C) (2 :B) (2 :D))
```

### Sorting strings

Since strings are vectors, `sort` and `stable-sort` work on them too. The result is a modified vector.

```lisp
(sort (copy-seq "edcba") #'char<)
=> "abcde"
(sort (copy-seq "Common Lisp") #'char-lessp)
=> " CiLmmnoops"
```

### Practical example: sorting records

A common use case is sorting structured data by a specific field.

```lisp
(let ((people (list '("Alice" 30) '("Bob" 25) '("Carol" 35))))
  (stable-sort (copy-seq people) #'< :key #'second))
=> (("Bob" 25) ("Alice" 30) ("Carol" 35))
```
