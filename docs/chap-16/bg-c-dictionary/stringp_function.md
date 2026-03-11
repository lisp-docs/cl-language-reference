---
title: "stringp"
---

# stringp

import StringpFunction from './_stringp_function.md';

<StringpFunction />

## Expanded Reference: stringp

### Testing string objects

`stringp` returns true if its argument is a string, and false otherwise.

```lisp
(stringp "hello")
=> T

(stringp "")
=> T

(stringp (make-string 5 :initial-element #\x))
=> T
```

### Non-string objects return NIL

Characters, symbols, numbers, and lists are not strings.

```lisp
(stringp #\a)
=> NIL

(stringp 'hello)
=> NIL

(stringp 42)
=> NIL

(stringp '(#\h #\i))
=> NIL
```

### Vectors of characters that are strings

Arrays with character element types are strings. A general vector containing characters is not.

```lisp
(stringp (make-array 3 :element-type 'character :initial-element #\a))
=> T

(stringp #(#\h #\e #\l #\l #\o))
=> NIL
```

### Strings with fill pointers are still strings

Even non-simple strings (with fill pointers or adjustable) satisfy `stringp`.

```lisp
(stringp (make-array 10 :element-type 'character
                        :fill-pointer 5
                        :initial-element #\z))
=> T
```

### Equivalence with typep

`(stringp x)` is equivalent to `(typep x 'string)`.

```lisp
(let ((s "test"))
  (eql (stringp s) (typep s 'string)))
=> T
```
