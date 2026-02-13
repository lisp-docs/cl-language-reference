---
title: "append"
---

# append

import AppendFunction from './_append_function.md';

<AppendFunction />

## Expanded Reference: append

### Concatenating two lists

`append` returns a new list that is the concatenation of its arguments. All arguments except the last are copied.

```lisp
(append '(a b c) '(d e f))
→ (A B C D E F)
```

### Concatenating multiple lists

`append` accepts any number of arguments.

```lisp
(append '(1 2) '(3 4) '(5 6))
→ (1 2 3 4 5 6)

(append '(a) '(b) '(c) '(d))
→ (A B C D)
```

### append does not modify the original lists

All arguments except the last are copied. The original lists remain unchanged.

```lisp
(let ((x '(1 2 3))
      (y '(4 5 6)))
  (append x y)
  (values x y))
→ (1 2 3)
→ (4 5 6)
```

### The last argument is shared, not copied

The last argument becomes the tail of the result without being copied. This means mutations to the last argument's structure will be visible through the result.

```lisp
(let* ((tail (list 4 5))
       (result (append '(1 2 3) tail)))
  (setf (car tail) 40)
  result)
→ (1 2 3 40 5)
```

### append with NIL arguments

NIL arguments are effectively skipped.

```lisp
(append nil '(a b c))
→ (A B C)

(append '(a b c) nil)
→ (A B C)

(append nil nil nil)
→ NIL
```

### The last argument need not be a list

If the last argument is not a list, the result is a dotted list.

```lisp
(append '(a b c) 'd)
→ (A B C . D)

(append '(1 2) 3)
→ (1 2 . 3)
```

### append with no arguments

Calling `append` with no arguments returns NIL.

```lisp
(append)
→ NIL
```
