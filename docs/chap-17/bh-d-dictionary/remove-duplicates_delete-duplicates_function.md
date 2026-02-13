---
title: "remove-duplicates, delete-duplicates"
---

# remove-duplicates, delete-duplicates

import RemoveDuplicatesFunction from './_remove-duplicates_delete-duplicates_function.md';

<RemoveDuplicatesFunction />

## Expanded Reference: remove-duplicates, delete-duplicates

### Removing duplicate elements

`remove-duplicates` returns a new sequence with duplicate elements removed. By default, when duplicates exist, the last occurrence is kept.

```lisp
(remove-duplicates '(a b c b d a e)) ; → (C B D A E)
(remove-duplicates "abracadabra") ; → "cdrba"
```

### Keeping the first occurrence with :from-end

With `:from-end t`, the first occurrence of each duplicate is preserved instead of the last.

```lisp
(remove-duplicates '(a b c b d a e) :from-end t) ; → (A B C D E)
(remove-duplicates "abracadabra" :from-end t) ; → "abrcd"
```

### Case-insensitive duplicate removal with :test

```lisp
(remove-duplicates "aAbBcC" :test #'char-equal) ; → "bBcC"
(remove-duplicates "aAbBcC" :test #'char-equal :from-end t) ; → "aAbBcC"
```

### Using :key for structured data

The `:key` function extracts the value used for comparison.

```lisp
(remove-duplicates '((a 1) (b 2) (a 3)) :key #'first)
; → ((B 2) (A 3))

(remove-duplicates '((a 1) (b 2) (a 3)) :key #'first :from-end t)
; → ((A 1) (B 2))
```

### Destructive version: delete-duplicates

`delete-duplicates` may modify the original sequence. Always use the return value.

```lisp
(let ((lst (list 1 2 3 2 1 4)))
  (setq lst (delete-duplicates lst))
  lst)
; → (3 2 1 4)
```

### Practical example: unique elements from a list

```lisp
(remove-duplicates '(red green blue red yellow green))
; → (BLUE RED YELLOW GREEN)
```
