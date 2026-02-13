---
title: "find, find-if, find-if-not"
---

# find, find-if, find-if-not

import FindFunction from './_find_find-if_find-if-not_function.md';

<FindFunction />

## Expanded Reference: find, find-if, find-if-not

### Finding an element by value

`find` searches for the first element in the sequence that matches the given item. Returns the element or `NIL` if not found.

```lisp
(find 3 '(1 2 3 4 5)) ; → 3
(find #\o "hello world") ; → #\o
(find 99 '(1 2 3)) ; → NIL
```

### Finding with a predicate using find-if

`find-if` returns the first element satisfying the predicate.

```lisp
(find-if #'evenp '(1 3 5 4 7)) ; → 4
(find-if #'alpha-char-p "123abc") ; → #\a
```

### Searching from the end with :from-end

When `:from-end` is true, the rightmost matching element is returned.

```lisp
(find-if #'evenp '(2 4 6 3 5) :from-end t) ; → 6
(find #\a "banana" :from-end t) ; → #\a
```

### Using :key to search by a derived value

The `:key` function extracts the value to test from each element. The original element (not the key) is returned.

```lisp
(find 'c '((a 1) (b 2) (c 3)) :key #'first)
; → (C 3)

(find-if #'plusp '((a -1) (b 0) (c 3)) :key #'second)
; → (C 3)
```

### Restricting the search with :start and :end

```lisp
(find-if #'oddp '(1 2 3 4 5) :start 2 :end 4) ; → 3
```

### Using a custom :test function

```lisp
(find "hello" '("Hello" "World") :test #'string-equal)
; → "Hello"
```
