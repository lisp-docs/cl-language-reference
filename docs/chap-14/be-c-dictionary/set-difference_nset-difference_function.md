---
title: "set-difference, nset-difference"
---

# set-difference, nset-difference

import SetDifferenceFunction from './_set-difference_nset-difference_function.md';

<SetDifferenceFunction />

## Expanded Reference: set-difference, nset-difference

### Basic set difference

`set-difference` returns elements that are in list-1 but not in list-2.

```lisp
(set-difference '(1 2 3 4 5) '(3 4 5 6 7))
; → (1 2)  ; order may vary

(set-difference '(a b c) '(a b c))
; → NIL
```

### Order matters

Set difference is not symmetric. The result only contains elements from the first list.

```lisp
(set-difference '(1 2 3) '(2 3 4 5))
; → (1)  ; order may vary

(set-difference '(2 3 4 5) '(1 2 3))
; → (4 5)  ; order may vary
```

### Using :test for value comparison

```lisp
(set-difference '("apple" "banana" "cherry")
                '("banana" "date")
                :test #'equal)
; → ("apple" "cherry")  ; order may vary

(set-difference '("Hello" "World")
                '("hello" "world")
                :test #'equalp)
; → NIL
```

### Using :key to compare by a component

```lisp
(set-difference '((a . 1) (b . 2) (c . 3))
                '((b . 9) (d . 4))
                :key #'car)
; → ((A . 1) (C . 3))  ; order may vary
```

### nset-difference is destructive

`nset-difference` may modify list-1 to produce the result. Always use the return value.

```lisp
(let ((a (list 1 2 3 4 5))
      (b (list 2 4)))
  (nset-difference a b))
; → (1 3 5)  ; order may vary
```

### Practical example: finding missing items

```lisp
(let ((required '(:name :email :password))
      (provided '(:name :password)))
  (set-difference required provided))
; → (:EMAIL)  ; order may vary
```
