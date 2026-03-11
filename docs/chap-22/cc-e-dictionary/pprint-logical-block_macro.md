---
title: "pprint-logical-block"
---

# pprint-logical-block

import PprintLogicalBlockMacro from './_pprint-logical-block_macro.md';

<PprintLogicalBlockMacro />

## Expanded Reference: pprint-logical-block

### Basic Usage

`pprint-logical-block` groups printed output into a logical block. It is the fundamental building block of the pretty printer, establishing a context for conditional newlines and indentation.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 10))
  (with-output-to-string (s)
    (pprint-logical-block (s '(a b c d e) :prefix "(" :suffix ")")
      (loop (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)
            (pprint-newline :fill s)))))
=> "(A B C D
 E)"
```

### Using :prefix and :suffix

The `:prefix` and `:suffix` options specify strings printed before and after the logical block.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-logical-block (s '(1 2 3) :prefix "[" :suffix "]")
      (loop (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)))))
=> "[1 2 3]"
```

### Using :per-line-prefix

The `:per-line-prefix` option prints a string at the start of every line in the block, not just the first.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 10))
  (with-output-to-string (s)
    (pprint-logical-block (s '(a b c d e) :per-line-prefix ";; " :suffix "")
      (loop (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)
            (pprint-newline :fill s)))))
=> ";; A B C
;; D E"
```

### Automatic Handling of Non-Lists

If the object is not a list, it is printed with `write` and the body forms are skipped.

```lisp
(let ((*print-pretty* t))
  (with-output-to-string (s)
    (pprint-logical-block (s 42 :prefix "(" :suffix ")")
      (write (pprint-pop) :stream s))))
=> "42"
```

### Respects *print-level*

Logical blocks automatically handle `*print-level*` depth abbreviation.

```lisp
(let ((*print-pretty* t)
      (*print-level* 1))
  (with-output-to-string (s)
    (pprint-logical-block (s '(a (b (c))) :prefix "(" :suffix ")")
      (loop (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)))))
=> "(A #)"
```
