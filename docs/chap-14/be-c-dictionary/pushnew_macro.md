---
title: "pushnew"
---

# pushnew

import PushnewMacro from './_pushnew_macro.md';

<PushnewMacro />

## Expanded Reference: pushnew

### Adding an item only if it is not already present

`pushnew` pushes an item onto a list only if the item is not already a member. By default, comparison uses `eql`.

```lisp
(let ((lst '(a b c)))
  (pushnew 'd lst)
  lst)
→ (D A B C)

(let ((lst '(a b c)))
  (pushnew 'b lst)
  lst)
→ (A B C)
```

### Building a set of unique elements

`pushnew` is useful for collecting unique items.

```lisp
(let ((seen nil))
  (dolist (x '(a b a c b d c))
    (pushnew x seen))
  seen)
→ (D C B A)
```

### Using the :test keyword

You can specify a different comparison function with `:test`.

```lisp
(let ((lst '("apple" "banana")))
  (pushnew "apple" lst :test #'string=)
  lst)
→ ("apple" "banana")

(let ((lst '("apple" "banana")))
  (pushnew "cherry" lst :test #'string=)
  lst)
→ ("cherry" "apple" "banana")
```

### Using the :key keyword

The `:key` function extracts the part of each element to compare.

```lisp
(let ((lst '((a 1) (b 2) (c 3))))
  (pushnew '(b 99) lst :key #'car)
  lst)
→ ((A 1) (B 2) (C 3))

(let ((lst '((a 1) (b 2) (c 3))))
  (pushnew '(d 4) lst :key #'car)
  lst)
→ ((D 4) (A 1) (B 2) (C 3))
```

### pushnew returns the new list value

The return value is the new value of the place, whether or not the item was added.

```lisp
(let ((lst '(1 2 3)))
  (values (pushnew 4 lst)
          (pushnew 2 lst)))
→ (4 1 2 3)
→ (4 1 2 3)
```
