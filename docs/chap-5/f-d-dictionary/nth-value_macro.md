---
title: "nth-value"
---

# nth-value

import NthValueMacro from './_nth-value_macro.md';

<NthValueMacro />

## Expanded Reference: nth-value

### Selecting a specific return value by index

`nth-value` evaluates a form and returns only the nth value (zero-indexed). It returns NIL if the form produces fewer values than requested.

```lisp
(nth-value 0 (values 'a 'b 'c)) → A
(nth-value 1 (values 'a 'b 'c)) → B
(nth-value 2 (values 'a 'b 'c)) → C
(nth-value 3 (values 'a 'b 'c)) → NIL
```

### Extracting the remainder from floor

A common use is to extract just the remainder (second value) from division functions.

```lisp
;; Get the quotient (value 0)
(nth-value 0 (floor 17 5)) → 3

;; Get the remainder (value 1)
(nth-value 1 (floor 17 5)) → 2
```

### Checking whether a key was found in a hash table

`gethash` returns the value and a boolean indicating whether the key was found. `nth-value` can extract just the found-p flag.

```lisp
(let ((ht (make-hash-table)))
  (setf (gethash 'x ht) nil)
  ;; Value is NIL, but the key does exist
  (nth-value 1 (gethash 'x ht)))
=> T
```

### The index is evaluated

The first argument to `nth-value` is evaluated, so it can be computed at runtime.

```lisp
(let ((n 1))
  (nth-value n (values 'zero 'one 'two)))
=> ONE
```

### Equivalence with multiple-value-list and nth

`nth-value` is operationally equivalent to extracting from a `multiple-value-list`, but may be more efficient because it avoids consing a list.

```lisp
;; These are equivalent:
(nth-value 1 (floor 10 3)) → 1
(nth 1 (multiple-value-list (floor 10 3))) → 1
```
