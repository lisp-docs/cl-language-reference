---
title: "print-pretty"
---

# \*print-pretty\*

import PrintPrettyVariable from './_print-pretty_variable.md';

<PrintPrettyVariable />

## Expanded Reference: \*print-pretty\*

### Without Pretty Printing

When `*print-pretty*` is false, output uses minimal whitespace.

```lisp
(let ((*print-pretty* nil))
  (write-to-string '(let ((a 1) (b 2) (c 3)) (+ a b c))))
; => "(LET ((A 1) (B 2) (C 3)) (+ A B C))"
```

### With Pretty Printing

When `*print-pretty*` is true, the pretty printer adds line breaks and indentation to improve readability.

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 40))
  (write-to-string '(let ((a 1) (b 2) (c 3)) (+ a b c))))
; => "(LET ((A 1) (B 2) (C 3))
;   (+ A B C))"
```

### Effect on Nested Structures

```lisp
(let ((*print-pretty* t)
      (*print-right-margin* 50))
  (write-to-string '(defun factorial (n)
                      (if (<= n 1) 1 (* n (factorial (1- n)))))))
; => "(DEFUN FACTORIAL (N)
;   (IF (<= N 1) 1 (* N (FACTORIAL (1- N)))))"
```

### pprint Enables Pretty Printing

The `pprint` function always prints with `*print-pretty*` bound to true.

```lisp
(with-output-to-string (s)
  (let ((*print-pretty* nil))  ; even though nil here...
    (pprint '(let ((x 1) (y 2)) (+ x y)) s)))  ; pprint forces pretty
; => "
; (LET ((X 1) (Y 2))
;   (+ X Y))"
```
