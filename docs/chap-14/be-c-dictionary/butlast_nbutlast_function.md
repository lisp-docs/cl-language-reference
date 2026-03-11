---
title: "butlast, nbutlast"
---

# butlast, nbutlast

import ButlastFunction from './_butlast_nbutlast_function.md';

<ButlastFunction />

## Expanded Reference: butlast, nbutlast

### Basic usage of butlast

`butlast` returns a copy of the list with the last element removed. An optional second argument specifies how many elements to remove from the end.

```lisp
(butlast '(1 2 3 4 5))
=> (1 2 3 4)

(butlast '(1 2 3 4 5) 2)
=> (1 2 3)
```

### butlast does not modify the original list

`butlast` always returns a fresh copy, leaving the original list unchanged.

```lisp
(let ((lst '(a b c d)))
  (butlast lst)
  lst)
=> (A B C D)
```

### Removing more elements than exist

When n is greater than or equal to the length of the list, `butlast` returns NIL.

```lisp
(butlast '(a b c) 3)
=> NIL

(butlast '(a b c) 10)
=> NIL

(butlast '() 1)
=> NIL
```

### nbutlast is the destructive version

`nbutlast` may modify the original list structure. Always use the return value.

```lisp
(let ((lst (list 1 2 3 4 5)))
  (nbutlast lst 2))
=> (1 2 3)

(let ((lst (list 'a 'b 'c)))
  (nbutlast lst)
  lst)
=> (A B)
```

### Practical use: removing trailing elements

`butlast` is useful for processing all but the last n items of a list.

```lisp
;; Join all path components except the filename
(let ((path-parts '("home" "user" "docs" "file.txt")))
  (butlast path-parts))
=> ("home" "user" "docs")
```
