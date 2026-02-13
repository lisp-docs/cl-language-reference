---
title: "remove, remove-if, remove-if-not, delete, delete-if, delete-if-not"
---

# remove, remove-if, remove-if-not, delete, delete-if, delete-if-not

import RemoveFunction from './_remove_remove-if_remove-if-not_delete_delete-if_delete-if-not_function.md';

<RemoveFunction />

## Expanded Reference: remove, remove-if, remove-if-not, delete, delete-if, delete-if-not

### Basic removal by value

`remove` returns a new sequence with all occurrences of the item removed. The original sequence is not modified.

```lisp
(remove 3 '(1 2 3 4 3 5)) ; → (1 2 4 5)
(remove #\l "hello") ; → "heo"
```

### Removing by predicate with remove-if

`remove-if` removes all elements that satisfy the predicate.

```lisp
(remove-if #'evenp '(1 2 3 4 5 6)) ; → (1 3 5)
(remove-if #'upper-case-p "Hello World") ; → "ello orld"
```

### Limiting removals with :count

The `:count` keyword limits how many matching elements are removed.

```lisp
(remove 4 '(1 4 2 4 3 4 5) :count 2) ; → (1 2 3 4 5)
(remove 4 '(1 4 2 4 3 4 5) :count 1 :from-end t) ; → (1 4 2 4 3 5)
```

### Using :key for structured data

```lisp
(remove-if #'minusp '((a 1) (b -2) (c 3) (d -4)) :key #'second)
; → ((A 1) (C 3))
```

### Destructive deletion with delete

`delete` is the destructive counterpart of `remove`. It may modify the input sequence. Always use the return value.

```lisp
(let ((lst (list 1 2 3 4 5)))
  (setq lst (delete-if #'oddp lst))
  lst)
; → (2 4)
```

### remove-if-not keeps matching elements

`remove-if-not` removes elements that do not satisfy the predicate, effectively filtering the sequence.

```lisp
(remove-if-not #'alpha-char-p "h3ll0 w0rld") ; → "hllwrld"
(remove-if-not #'evenp '(1 2 3 4 5 6)) ; → (2 4 6)
```

### Restricting the range with :start and :end

```lisp
(remove #\a "banana" :start 2 :end 5) ; → "bnnna"
```
