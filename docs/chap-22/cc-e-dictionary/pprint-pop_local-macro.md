---
title: "pprint-pop"
---

# pprint-pop

import PprintPopLocalMacro from './_pprint-pop_local-macro.md';

<PprintPopLocalMacro />

## Expanded Reference: pprint-pop

### Basic Usage

`pprint-pop` pops and returns the next element from the list being printed in the current logical block. It must be used lexically within `pprint-logical-block`.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-logical-block (s '(a b c) :prefix "(" :suffix ")")
      (write (pprint-pop) :stream s)    ; pops A
      (write-char #\Space s)
      (write (pprint-pop) :stream s)    ; pops B
      (write-char #\Space s)
      (write (pprint-pop) :stream s)))) ; pops C
=> "(A B C)"
```

### Respects *print-length*

`pprint-pop` automatically handles `*print-length*`. When the limit is reached, it prints `...` and terminates the block.

```lisp
(let ((*print-pretty* t)
      (*print-length* 3))
  (with-output-to-string (s)
    (pprint-logical-block (s '(a b c d e) :prefix "(" :suffix ")")
      (loop (pprint-exit-if-list-exhausted)
            (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)))))
=> "(A B C ...)"
```

### Handles Dotted Lists

If the remaining tail is not a list (i.e., a dotted pair), `pprint-pop` prints `. ` followed by the atom and terminates the block.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-logical-block (s '(a b . c) :prefix "(" :suffix ")")
      (loop (pprint-exit-if-list-exhausted)
            (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)))))
=> "(A B . C)"
```

### With nil Object for Non-List Printing

When `pprint-logical-block` is given nil as the object, `pprint-pop` always returns nil but still provides `*print-length*` support.

```lisp
(let ((*print-pretty* t)
      (*print-length* 3))
  (with-output-to-string (s)
    (pprint-logical-block (s nil :prefix "#(" :suffix ")")
      (dotimes (i 5)
        (unless (zerop i) (write-char #\Space s))
        (pprint-pop)  ; for *print-length* tracking
        (write i :stream s)))))
=> "#(0 1 2 ...)"
```
