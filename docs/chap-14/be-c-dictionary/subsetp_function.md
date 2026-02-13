---
title: "subsetp"
---

# subsetp

import SubsetpFunction from './_subsetp_function.md';

<SubsetpFunction />

## Expanded Reference: subsetp

### Basic subset testing

`subsetp` returns true if every element of list-1 matches some element of list-2.

```lisp
(subsetp '(1 2) '(1 2 3 4))
; → T

(subsetp '(1 5) '(1 2 3 4))
; → NIL
```

### Empty list is a subset of everything

The empty list is always a subset of any list.

```lisp
(subsetp '() '(a b c))
; → T

(subsetp '() '())
; → T
```

### Using :test for value comparison

```lisp
(subsetp '("a" "b") '("a" "b" "c") :test #'equal)
; → T

(subsetp '("Hello") '("hello" "world") :test #'equalp)
; → T

(subsetp '("Hello") '("hello" "world"))
; → NIL
```

### Using :key to compare by a component

```lisp
(subsetp '((a 1) (b 2))
         '((a 10) (b 20) (c 30))
         :key #'car)
; → T

(subsetp '((d 4))
         '((a 10) (b 20) (c 30))
         :key #'car)
; → NIL
```

### Practical example: permission checking

```lisp
(let ((required-permissions '(:read :write))
      (user-permissions '(:read :write :execute :admin)))
  (subsetp required-permissions user-permissions))
; → T

(let ((required-permissions '(:read :write :admin))
      (user-permissions '(:read :write)))
  (subsetp required-permissions user-permissions))
; → NIL
```
