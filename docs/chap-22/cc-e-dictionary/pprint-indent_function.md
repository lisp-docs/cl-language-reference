---
title: "pprint-indent"
---

# pprint-indent

import PprintIndentFunction from './_pprint-indent_function.md';

<PprintIndentFunction />

## Expanded Reference: pprint-indent

### :block Indentation

With `:block`, the indentation is set relative to the start of the enclosing logical block.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 25))
  (with-output-to-string (s)
    (pprint-logical-block (s '(let ((a 1) (b 2)) body1 body2)
                           :prefix "(" :suffix ")")
      (write (pprint-pop) :stream s)       ; LET
      (write-char #\Space s)
      (write (pprint-pop) :stream s)       ; bindings
      (pprint-indent :block 2 s)           ; indent body by 2 from block start
      (pprint-newline :mandatory s)
      (write (pprint-pop) :stream s)       ; body1
      (pprint-newline :mandatory s)
      (write (pprint-pop) :stream s))))    ; body2
; => "(LET ((A 1) (B 2))
;   BODY1
;   BODY2)"
```

### :current Indentation

With `:current`, the indentation is set relative to the current output position.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 40))
  (with-output-to-string (s)
    (pprint-logical-block (s '(begin a b c d) :prefix "(" :suffix ")")
      (write (pprint-pop) :stream s)   ; BEGIN
      (write-char #\Space s)
      (pprint-indent :current 0 s)     ; align subsequent with current position
      (loop (pprint-exit-if-list-exhausted)
            (write (pprint-pop) :stream s)
            (pprint-exit-if-list-exhausted)
            (write-char #\Space s)
            (pprint-newline :linear s)))))
; => "(BEGIN A
;        B
;        C
;        D)"
```

### Indentation Takes Effect After Next Line Break

Changes from `pprint-indent` do not affect the current line; they take effect on subsequent lines after a line break.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 30))
  (with-output-to-string (s)
    (pprint-logical-block (s nil :prefix "[" :suffix "]")
      (write-string "HEADER" s)
      (pprint-indent :block 4 s)
      (pprint-newline :mandatory s)
      (write-string "indented body" s))))
; => "[HEADER
;     indented body]"
```
