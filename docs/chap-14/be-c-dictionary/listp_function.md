---
title: "listp"
---

# listp

import ListpFunction from './_listp_function.md';

<ListpFunction />

## Expanded Reference: listp

### Testing if an object is a list

`listp` returns true if its argument is either a cons or NIL (the empty list).

```lisp
(listp '(1 2 3))
→ T

(listp nil)
→ T

(listp '())
→ T
```

### Non-list objects return NIL

Numbers, strings, symbols (other than NIL), arrays, and other non-list objects all fail the test.

```lisp
(listp 42)
→ NIL

(listp "hello")
→ NIL

(listp 'foo)
→ NIL

(listp (make-array 3))
→ NIL
```

### listp does not check for proper lists

`listp` returns true for dotted lists and even for the cons cells that form circular lists. It only checks whether the object is a cons or NIL.

```lisp
(listp '(a . b))
→ T

(listp '(1 2 . 3))
→ T
```

### Difference from consp

The only difference between `listp` and `consp` is their treatment of NIL. `listp` considers NIL a list; `consp` does not.

```lisp
(listp nil)
→ T

(consp nil)
→ NIL

(listp '(a))
→ T

(consp '(a))
→ T
```

### Using listp for input validation

`listp` can be used to validate that an argument is a list before processing it.

```lisp
(defun safe-length (x)
  "Return the length if x is a proper list, or :not-a-list otherwise."
  (if (listp x)
      (list-length x)
      :not-a-list))

(safe-length '(a b c))
→ 3

(safe-length 42)
→ :NOT-A-LIST
```
