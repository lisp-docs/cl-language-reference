---
title: "print-miser-width"
---

# \*print-miser-width\*

import PrintMiserWidthVariable from './_print-miser-width_variable.md';

<PrintMiserWidthVariable />

## Expanded Reference: \*print-miser-width\*

### What Is Miser Mode

Miser mode is a compact pretty-printing style that is activated when the available width for printing a substructure is less than or equal to `*print-miser-width*` ems. In miser mode, fill-style conditional newlines act like linear-style newlines, resulting in more line breaks.

```lisp
;; With a narrow right margin and miser-width, miser mode kicks in
(let ((*print-pretty* t)
      (*print-right-margin* 30)
      (*print-miser-width* 20))
  (write-to-string '(let ((a 1) (b 2)) (+ a b))))
; => "(LET ((A 1) (B 2))
;   (+ A B))"
```

### Disabling Miser Mode

When `*print-miser-width*` is nil, miser mode is never activated.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 40)
      (*print-miser-width* nil))
  (write-to-string '(let ((a 1) (b 2) (c 3)) (+ a b c))))
; => "(LET ((A 1) (B 2) (C 3))
;   (+ A B C))"
```

### Miser Mode Ignores pprint-indent

In miser mode, all calls to `pprint-indent` are ignored, and lines within a logical block are aligned under the first character of the block.

```lisp
;; When miser mode is active, indentation changes are suppressed
;; and output is as compact as possible
```
