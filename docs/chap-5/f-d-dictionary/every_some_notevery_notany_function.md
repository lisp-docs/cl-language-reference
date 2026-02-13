---
title: "every, some, notevery, notany"
---

# every, some, notevery, notany

import EveryFunction from './_every_some_notevery_notany_function.md';

<EveryFunction />

## Expanded Reference: every, some, notevery, notany

### every: check that all elements satisfy a predicate

`every` returns true if and only if the predicate returns true for every element.

```lisp
(every #'numberp '(1 2 3 4 5)) → T
(every #'numberp '(1 2 :three 4 5)) → NIL
(every #'characterp "abc") → T
```

### some: find the first truthy predicate result

`some` returns the first non-NIL value returned by the predicate, or NIL if none match. Note that it returns the predicate's return value, not the element itself.

```lisp
(some #'evenp '(1 3 5 6 7)) → T
(some #'evenp '(1 3 5 7)) → NIL

;; some returns the actual value from the predicate
(some #'digit-char-p "abc3def") → 3
```

### notany: check that no elements satisfy a predicate

`notany` returns true if no element satisfies the predicate. It is equivalent to `(not (some ...))`.

```lisp
(notany #'zerop '(1 2 3 4 5)) → T
(notany #'zerop '(1 2 0 4 5)) → NIL
(notany #'alpha-char-p "12345") → T
```

### notevery: check that at least one element fails the predicate

`notevery` returns true if at least one element does not satisfy the predicate. It is equivalent to `(not (every ...))`.

```lisp
(notevery #'oddp '(1 3 5 7)) → NIL
(notevery #'oddp '(1 2 3 4)) → T
```

### Working with multiple sequences

All four functions accept multiple sequences. The predicate receives one element from each sequence at corresponding positions. Iteration stops at the shortest sequence.

```lisp
(every #'< '(1 2 3) '(4 5 6)) → T
(every #'< '(1 2 3) '(4 5 2)) → NIL

(some #'= '(1 2 3 4 5) '(5 4 3 2 1)) → T

(notevery #'< '(1 2 3 4) '(5 6 7 8) '(9 10 11 12)) → NIL
(notany #'> '(1 2 3 4) '(5 6 7 8) '(9 10 11 12)) → T
```

### Short-circuit evaluation

`every` stops as soon as it finds a false result. `some` stops as soon as it finds a true result. This can be useful for efficiency.

```lisp
;; Safely check before accessing: every stops early
(every #'listp '((1 2) :not-a-list (3 4))) → NIL

;; some stops at the first match
(some #'keywordp '(a b :found d e)) → T
```
