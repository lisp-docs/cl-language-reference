---
title: "consp"
---

# consp

import ConspFunction from './_consp_function.md';

<ConspFunction />

## Expanded Reference: consp

### Testing if an object is a cons cell

`consp` returns true if its argument is a cons cell, and false otherwise.

```lisp
(consp '(1 2 3))
→ T

(consp '(a . b))
→ T

(consp nil)
→ NIL
```

### Distinguishing consp from listp

`consp` returns false for NIL, while `listp` returns true. This is the key difference: NIL is a list but not a cons.

```lisp
(consp nil)
→ NIL

(listp nil)
→ T

(consp '(1))
→ T

(listp '(1))
→ T
```

### Using consp for type checking in recursive functions

`consp` is commonly used to check whether you have a cons to recurse into or an atom to process.

```lisp
(defun count-conses (tree)
  "Count the number of cons cells in a tree."
  (if (consp tree)
      (+ 1
         (count-conses (car tree))
         (count-conses (cdr tree)))
      0))

(count-conses '(a (b c) d))
→ 5
```

### Non-list objects are not conses

Numbers, strings, symbols, and other atoms all return NIL for `consp`.

```lisp
(consp 42)
→ NIL

(consp "hello")
→ NIL

(consp 'foo)
→ NIL

(consp #\A)
→ NIL
```
