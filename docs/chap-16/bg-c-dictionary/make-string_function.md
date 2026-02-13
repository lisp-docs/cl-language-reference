---
title: "make-string"
---

# make-string

import MakeStringFunction from './_make-string_function.md';

<MakeStringFunction />

## Expanded Reference: make-string

### Creating a string of a given size

`make-string` creates a simple string of the specified length. You should provide `:initial-element` to ensure the contents are well-defined.

```lisp
(make-string 5 :initial-element #\a)
→ "aaaaa"

(make-string 0)
→ ""
```

### The result is always a simple string

The string returned by `make-string` is always a simple string -- it has no fill pointer and is not displaced or adjustable.

```lisp
(simple-string-p (make-string 10 :initial-element #\x))
→ T
```

### Checking the length of the result

The resulting string has exactly the requested length.

```lisp
(length (make-string 8 :initial-element #\*))
→ 8

(length (make-string 0))
→ 0
```

### Specifying element-type

The `:element-type` keyword controls the character subtype. Using `base-char` creates a base-string.

```lisp
(let ((s (make-string 3 :initial-element #\z :element-type 'base-char)))
  (list s (typep s 'base-string)))
→ ("zzz" T)

(let ((s (make-string 3 :initial-element #\z :element-type 'character)))
  (list s (typep s 'string)))
→ ("zzz" T)
```

### Practical use: building a separator line

```lisp
(let ((line (make-string 40 :initial-element #\-)))
  (concatenate 'string "+" line "+"))
→ "+----------------------------------------+"
```
