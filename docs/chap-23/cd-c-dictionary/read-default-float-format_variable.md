---
title: "read-default-float-format"
---

# \*read-default-float-format\*

import ReadDefaultFloatFormatVariable from './_read-default-float-format_variable.md';

<ReadDefaultFloatFormatVariable />

## Expanded Reference: \*read-default-float-format\*

### Default behavior

`*read-default-float-format*` controls the type of float produced when reading a floating-point number that has no exponent marker or uses `e`/`E`. Its initial value is `single-float`.

```lisp
*read-default-float-format*
; => SINGLE-FLOAT

(type-of (read-from-string "1.0"))
; => SINGLE-FLOAT
```

### Changing the default float format

By binding `*read-default-float-format*` to `double-float`, numbers without an explicit exponent marker are read as double floats.

```lisp
(let ((*read-default-float-format* 'double-float))
  (type-of (read-from-string "1.0")))
; => DOUBLE-FLOAT

(let ((*read-default-float-format* 'double-float))
  (type-of (read-from-string "3.14e0")))
; => DOUBLE-FLOAT
```

### Explicit exponent markers override the default

The exponent markers `s`, `f`, `d`, and `l` always specify their corresponding float types regardless of `*read-default-float-format*`.

```lisp
(let ((*read-default-float-format* 'double-float))
  (list (type-of (read-from-string "1.0"))     ; uses default
        (type-of (read-from-string "1.0s0"))   ; short-float
        (type-of (read-from-string "1.0f0"))   ; single-float
        (type-of (read-from-string "1.0d0"))   ; double-float
        (type-of (read-from-string "1.0l0")))) ; long-float
; => (DOUBLE-FLOAT SHORT-FLOAT SINGLE-FLOAT DOUBLE-FLOAT LONG-FLOAT)
;; Note: some implementations merge certain float types
```

### Effect on the printer

`*read-default-float-format*` also influences the printer: when printing a float whose type matches the default format, the printer may omit the exponent marker or use `E`.

```lisp
(let ((*read-default-float-format* 'single-float))
  (format nil "~S ~S" 1.0 1.0d0))
; => "1.0 1.0d0"

(let ((*read-default-float-format* 'double-float))
  (format nil "~S ~S" 1.0 1.0d0))
; => "1.0f0 1.0"
;; The double-float is now the default so it drops the marker;
;; the single-float must use f0 to distinguish itself
```
