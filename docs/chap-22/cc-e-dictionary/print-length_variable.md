---
title: "print-length"
---

# \*print-length\*

import PrintLengthVariable from './_print-length_variable.md';

<PrintLengthVariable />

## Expanded Reference: \*print-length\*

### Default Behavior (nil)

When `*print-length*` is nil, there is no limit on the number of elements printed.

```lisp
(let ((*print-length* nil))
  (write-to-string '(a b c d e f g)))
; => "(A B C D E F G)"
```

### Truncating Lists

When `*print-length*` is an integer, only that many elements of each list level are printed. Remaining elements are replaced with `...`.

```lisp
(let ((*print-length* 3))
  (write-to-string '(a b c d e f)))
; => "(A B C ...)"

(let ((*print-length* 0))
  (write-to-string '(a b c)))
; => "(...)"

(let ((*print-length* 1))
  (write-to-string '(a b c)))
; => "(A ...)"
```

### Effect on Vectors

`*print-length*` also applies to vectors and other sequences with list-like syntax.

```lisp
(let ((*print-length* 3))
  (write-to-string #(1 2 3 4 5)))
; => "#(1 2 3 ...)"
```

### Combined with *print-level*

`*print-length*` and `*print-level*` can be used together to control both breadth and depth of printed output.

```lisp
(let ((*print-level* 2)
      (*print-length* 3))
  (write-to-string '(if (member x y) (+ (car x) 3) (foo a b c d))))
; => "(IF (MEMBER X ...) (+ # 3) ...)"
```

### Does Not Affect Strings or Bit Vectors

```lisp
(let ((*print-length* 3))
  (write-to-string "abcdefg"))
; => "\"abcdefg\""

(let ((*print-length* 3))
  (write-to-string #*11001100))
; => "#*11001100"
```
