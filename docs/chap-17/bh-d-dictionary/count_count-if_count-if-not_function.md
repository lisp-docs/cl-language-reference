---
title: "count, count-if, count-if-not"
---

# count, count-if, count-if-not

import CountFunction from './_count_count-if_count-if-not_function.md';

<CountFunction />

## Expanded Reference: count, count-if, count-if-not

### Counting occurrences of an item

`count` returns the number of elements in the sequence that match the given item (using `eql` by default).

```lisp
(count 'a '(a b a c a d)) ; → 3
(count #\l "hello world") ; → 3
(count 1 #(1 2 1 3 1)) ; → 3
```

### Counting with a predicate using count-if

`count-if` counts elements that satisfy a predicate function.

```lisp
(count-if #'evenp '(1 2 3 4 5 6)) ; → 3
(count-if #'upper-case-p "Hello World") ; → 2
(count-if #'stringp '(1 "two" 3 "four")) ; → 2
```

### Using a custom :test function

The `:test` keyword lets you specify a different comparison function.

```lisp
(count "hello" '("Hello" "HELLO" "hello" "hi") :test #'string-equal)
; → 3
```

### Using :key to extract a comparison value

The `:key` function is applied to each element before testing.

```lisp
(count 'a '((a 1) (b 2) (a 3)) :key #'first)
; → 2

(count-if #'oddp '((1 a) (2 b) (3 c) (4 d)) :key #'car)
; → 2
```

### Restricting the search range with :start and :end

```lisp
(count #\a "banana" :start 1 :end 5) ; → 2
```

### count-if-not (deprecated but functional)

`count-if-not` counts elements that do not satisfy the predicate. It is deprecated in favor of using `complement`.

```lisp
(count-if-not #'oddp '(1 2 3 4 5)) ; → 2
;; Preferred modern alternative:
(count-if (complement #'oddp) '(1 2 3 4 5)) ; → 2
```
