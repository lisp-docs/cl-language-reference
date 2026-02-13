---
title: "pprint-newline"
---

# pprint-newline

import PprintNewlineFunction from './_pprint-newline_function.md';

<PprintNewlineFunction />

## Expanded Reference: pprint-newline

### Newline Kinds

`pprint-newline` inserts a conditional newline into a pretty-printing stream. The `kind` argument controls when the newline is actually emitted.

There are four kinds:
- `:linear` -- newline if the enclosing section does not fit on one line (all-or-nothing)
- `:fill` -- newline if the next section does not fit on the current line
- `:miser` -- like `:linear`, but only when miser mode is active
- `:mandatory` -- always insert a newline

### :linear -- All or Nothing

If the section cannot fit on one line, line breaks are inserted at every `:linear` newline in the block.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 20))
  (with-output-to-string (s)
    (pprint-logical-block (s '(a b c d) :prefix "(" :suffix ")")
      (loop (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)
            (pprint-newline :linear s)))))
; => "(A
;  B
;  C
;  D)"
```

### :fill -- Pack as Many as Fit

A `:fill` newline inserts a line break only when the next item would not fit on the current line.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 20))
  (with-output-to-string (s)
    (pprint-logical-block (s '(aa bb cc dd ee) :prefix "(" :suffix ")")
      (loop (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)
            (pprint-newline :fill s)))))
; => "(AA BB CC DD
;  EE)"
```

### :mandatory -- Always Break

A `:mandatory` newline always inserts a line break.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-logical-block (s nil :prefix "(" :suffix ")")
      (write 'a :stream s)
      (pprint-newline :mandatory s)
      (write 'b :stream s)
      (pprint-newline :mandatory s)
      (write 'c :stream s))))
; => "(A
;  B
;  C)"
```

### No Effect Outside Pretty Printing

When `*print-pretty*` is false, `pprint-newline` has no effect.

```lisp
(let ((*print-pretty* nil))
  (with-output-to-string (s)
    (pprint-newline :mandatory s)))
; => ""
```
