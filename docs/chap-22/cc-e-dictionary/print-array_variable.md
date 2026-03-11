---
title: "print-array"
---

# \*print-array\*

import PrintArrayVariable from './_print-array_variable.md';

<PrintArrayVariable />

## Expanded Reference: \*print-array\*

### When True -- Print Array Contents

When `*print-array*` is true, arrays (other than strings) are printed using readable syntax such as `#(...)` for vectors and `#nA(...)` for multidimensional arrays.

```lisp
(let ((*print-array* t))
  (write-to-string #(1 2 3)))
=> "#(1 2 3)"

(let ((*print-array* t))
  (write-to-string (make-array '(2 3) :initial-contents '((1 2 3) (4 5 6)))))
=> "#2A((1 2 3) (4 5 6))"
```

### When False -- Concise Representation

When `*print-array*` is false, arrays are printed in a concise, unreadable `#<...>` form that does not include the contents.

```lisp
(let ((*print-array* nil))
  (write-to-string #(1 2 3)))
;; => "#<(SIMPLE-VECTOR 3) ...>"  ; implementation-dependent
```

### Strings Are Not Affected

Strings are always printed as strings regardless of `*print-array*`.

```lisp
(let ((*print-array* nil))
  (write-to-string "hello"))
=> "\"hello\""
```

### Bit Vectors

Bit vectors use `#*` syntax when `*print-array*` is true.

```lisp
(let ((*print-array* t))
  (write-to-string #*1010))
=> "#*1010"
```
