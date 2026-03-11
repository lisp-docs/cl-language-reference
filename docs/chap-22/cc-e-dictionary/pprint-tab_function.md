---
title: "pprint-tab"
---

# pprint-tab

import PprintTabFunction from './_pprint-tab_function.md';

<PprintTabFunction />

## Expanded Reference: pprint-tab

### Tab Kinds

`pprint-tab` specifies tabbing within a pretty-printing stream. It takes a kind, column number, column increment, and optional stream. The kind determines how tabbing is computed:

- `:line` -- absolute tab (like `~T` in format)
- `:line-relative` -- relative tab (like `~@T`)
- `:section` -- absolute tab relative to the start of the enclosing section
- `:section-relative` -- relative tab from current position within a section

### :line -- Absolute Column Tab

Tabs to an absolute column position on the line.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-logical-block (s nil)
      (write-string "Name" s)
      (pprint-tab :line 20 1 s)
      (write-string "Value" s))))
=> "Name                Value"
```

### :section-relative -- Relative Within Section

Tabs relative to the current position, used with column increments for alignment in columnar output.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 35))
  (with-output-to-string (s)
    (pprint-logical-block (s '(alpha beta gamma delta) :prefix "(" :suffix ")")
      (loop (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)
            (pprint-tab :section-relative 0 12 s)
            (pprint-newline :fill s)))))
=> "(ALPHA       BETA        GAMMA
 DELTA)"
```

### No Effect Outside Pretty Printing

Like other pretty-printing functions, `pprint-tab` has no effect when `*print-pretty*` is false.

```lisp
(let ((*print-pretty* nil))
  (with-output-to-string (s)
    (pprint-tab :line 10 1 s)))
=> ""
```
