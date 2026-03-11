---
title: "print-circle"
---

# \*print-circle\*

import PrintCircleVariable from './_print-circle_variable.md';

<PrintCircleVariable />

## Expanded Reference: \*print-circle\*

### Default Behavior (false)

When `*print-circle*` is false, the printer does not attempt to detect circular or shared structure. Printing a circular structure may loop forever.

```lisp
;; With *print-circle* nil, printing circular lists is dangerous
;; (would loop forever -- do not try without *print-circle* t)
```

### Detecting Circular Lists

When `*print-circle*` is true, the printer detects circular references and uses `#n=` and `#n#` notation.

```lisp
(let ((a (list 1 2 3)))
  (setf (cdddr a) a)
  (let ((*print-circle* t))
    (write-to-string a)))
=> "#1=(1 2 3 . #1#)"
```

### Detecting Shared Structure

Shared substructures are also detected and represented using the `#n=`/`#n#` notation.

```lisp
(let* ((shared (list 'x 'y))
       (data (list shared shared)))
  (let ((*print-circle* t))
    (write-to-string data)))
=> "(#1=(X Y) #1#)"
```

### Circular Structures in Trees

```lisp
(let ((a (list 1 2)))
  (setf (second a) a)
  (let ((*print-circle* t))
    (write-to-string a)))
=> "#1=(1 #1#)"
```

### Interned Symbols Are Not Marked

The printer does not use `#n#` notation for interned symbols, since the reader already preserves their identity through interning.

```lisp
(let ((x (list 'foo 'foo)))
  (let ((*print-circle* t))
    (write-to-string x)))
=> "(FOO FOO)"
```
