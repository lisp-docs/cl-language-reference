---
title: "print-lines"
---

# \*print-lines\*

import PrintLinesVariable from './_print-lines_variable.md';

<PrintLinesVariable />

## Expanded Reference: \*print-lines\*

### Default Behavior (nil)

When `*print-lines*` is nil, there is no limit on the number of lines of pretty-printed output.

```lisp
(let ((*print-lines* nil)
      (*print-pretty* t)
      (*print-right-margin* 30))
  (write-to-string '(progn (setq a 1 b 2 c 3 d 4 e 5))))
; => "(PROGN
;   (SETQ A 1
;         B 2
;         C 3
;         D 4
;         E 5))"
```

### Limiting Output Lines

When `*print-lines*` is a positive integer, pretty-printed output is truncated after that many lines. The last line ends with `..` followed by pending suffixes.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 25)
      (*print-lines* 3))
  (write-to-string '(progn (setq a 1 b 2 c 3 d 4))))
; => "(PROGN (SETQ A 1
;              B 2
;              C 3 ..))"
```

### Single Line Limit

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 25)
      (*print-lines* 1))
  (write-to-string '(let ((a 1) (b 2) (c 3)) (+ a b c))))
; => "(LET ((A 1) ..)"
```

### Only Affects Pretty Printing

`*print-lines*` has no effect when `*print-pretty*` is false.

```lisp
(let ((*print-pretty* nil)
      (*print-lines* 1))
  (write-to-string '(a b c d e f)))
; => "(A B C D E F)"
```
