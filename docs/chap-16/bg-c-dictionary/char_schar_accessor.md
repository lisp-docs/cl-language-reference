---
title: "char, schar"
---

# char, schar

import CharAccessor from './_char_schar_accessor.md';

<CharAccessor />

## Expanded Reference: char, schar

### Basic character access with char

`char` accesses the character at a given zero-based index in a string.

```lisp
(char "Hello" 0)
→ #\H

(char "Hello" 4)
→ #\o
```

### Using schar for simple strings

`schar` works like `char` but is restricted to simple strings (no fill pointers, not displaced, not adjustable). It may be more efficient.

```lisp
(schar "Common Lisp" 0)
→ #\C

(schar "Common Lisp" 7)
→ #\L
```

### Modifying characters with setf

Both `char` and `schar` are setf-able, allowing in-place modification of string characters.

```lisp
(let ((s (copy-seq "hello")))
  (setf (char s 0) #\H)
  s)
→ "Hello"

(let ((s (make-string 5 :initial-element #\a)))
  (setf (schar s 2) #\X)
  s)
→ "aaXaa"
```

### char ignores fill pointers when accessing elements

`char` can access elements beyond the fill pointer, while functions like `elt` respect the fill pointer.

```lisp
(let ((s (make-array 6 :element-type 'character
                       :fill-pointer 3
                       :initial-contents "abcdef")))
  (list (char s 4)        ; accesses beyond fill pointer
        (length s)))       ; length respects fill pointer
→ (#\e 3)
```

### char is equivalent to aref on strings

`(char s i)` is equivalent to `(aref (the string s) i)`.

```lisp
(let ((s "abcdef"))
  (list (char s 2) (aref s 2) (eql (char s 2) (aref s 2))))
→ (#\c #\c T)
```
