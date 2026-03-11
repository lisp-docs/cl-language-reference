---
title: "multiple-value-list"
---

# multiple-value-list

import MultipleValueListMacro from './_multiple-value-list_macro.md';

<MultipleValueListMacro />

## Expanded Reference: multiple-value-list

### Capturing multiple values as a list

`multiple-value-list` evaluates a form and collects all of its return values into a list.

```lisp
(multiple-value-list (values 1 2 3))
=> (1 2 3)

(multiple-value-list (values))
=> NIL
```

### Capturing values from floor and truncate

This is especially useful with functions that return multiple values, like `floor`, `truncate`, and `gethash`.

```lisp
(multiple-value-list (floor 7 3))
=> (2 1)

(multiple-value-list (truncate 3.7))
=> (3 0.70000005)
```

### Inspecting what a function returns

`multiple-value-list` is a handy debugging tool to see all the values a form produces.

```lisp
(multiple-value-list (gethash 'missing (make-hash-table)))
=> (NIL NIL)

(multiple-value-list (parse-integer "123abc" :junk-allowed t))
=> (123 3)
```

### Single-value forms produce a one-element list

When the form returns only one value, the result is a single-element list.

```lisp
(multiple-value-list (+ 1 2))
=> (3)

(multiple-value-list 'hello)
=> (HELLO)
```

### Inverse of values-list

`multiple-value-list` and `values-list` are inverses of each other.

```lisp
(values-list (multiple-value-list (floor 10 3)))
=> 3
=> 1

(multiple-value-list (values-list '(a b c)))
=> (A B C)
```
