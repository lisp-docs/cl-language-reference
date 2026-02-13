---
title: "pprint-exit-if-list-exhausted"
---

# pprint-exit-if-list-exhausted

import PprintExitIfListExhaustedLocalMacro from './_pprint-exit-if-list-exhausted_local-macro.md';

<PprintExitIfListExhaustedLocalMacro />

## Expanded Reference: pprint-exit-if-list-exhausted

### Basic Usage Inside pprint-logical-block

`pprint-exit-if-list-exhausted` tests whether the list being printed in the current logical block has been fully consumed. If so, it terminates the block (printing the suffix). It must be used lexically within a `pprint-logical-block`.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-logical-block (s '(a b c) :prefix "(" :suffix ")")
      (loop
        (pprint-exit-if-list-exhausted)
        (write (pprint-pop) :stream s)
        (pprint-exit-if-list-exhausted)
        (write-char #\Space s)))))
; => "(A B C)"
```

### Controlling Loop Termination

It is commonly used as the loop termination condition when iterating over list elements with `pprint-pop`.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 20))
  (with-output-to-string (s)
    (pprint-logical-block (s '(1 2 3 4 5) :prefix "[" :suffix "]")
      (loop
        (pprint-exit-if-list-exhausted)
        (write (pprint-pop) :stream s)
        (pprint-exit-if-list-exhausted)
        (write-char #\Space s)
        (pprint-newline :fill s)))))
; => "[1 2 3 4 5]"
```

### Empty List Handling

When the list is empty, `pprint-exit-if-list-exhausted` immediately terminates the block. Only the prefix and suffix are printed.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-logical-block (s '() :prefix "(" :suffix ")")
      (pprint-exit-if-list-exhausted)
      (write (pprint-pop) :stream s))))
; => "()"
```
