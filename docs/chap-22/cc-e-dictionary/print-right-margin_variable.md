---
title: "print-right-margin"
---

# \*print-right-margin\*

import PrintRightMarginVariable from './_print-right-margin_variable.md';

<PrintRightMarginVariable />

## Expanded Reference: \*print-right-margin\*

### Default Behavior (nil)

When `*print-right-margin*` is nil, the pretty printer attempts to determine the right margin from the output stream, or uses an implementation-dependent default.

```lisp
*print-right-margin*
;; => NIL  ; initial value is implementation-dependent
```

### Setting a Specific Right Margin

Setting `*print-right-margin*` to an integer specifies the column at which the pretty printer should try to break lines.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 40))
  (write-to-string '(let ((alpha 1) (beta 2) (gamma 3)) (+ alpha beta gamma))))
=> "(LET ((ALPHA 1) (BETA 2) (GAMMA 3))
  (+ ALPHA BETA GAMMA))"
```

### Narrow Right Margin Forces More Line Breaks

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 25))
  (write-to-string '(let ((a 1) (b 2) (c 3)) (+ a b c))))
=> "(LET ((A 1) (B 2) (C 3))
  (+ A B C))"
```

### Wide Right Margin Keeps Things on One Line

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 80))
  (write-to-string '(let ((a 1) (b 2) (c 3)) (+ a b c))))
=> "(LET ((A 1) (B 2) (C 3))
  (+ A B C))"
```

### Only Affects Pretty Printing

`*print-right-margin*` has no effect when `*print-pretty*` is false.

```lisp
(let ((*print-pretty* nil)
      (*print-right-margin* 10))
  (write-to-string '(a b c d e f g h)))
=> "(A B C D E F G H)"
```
