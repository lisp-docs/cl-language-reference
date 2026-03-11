---
title: "readtable"
---

# \*readtable\*

import ReadtableVariable from './_readtable_variable.md';

<ReadtableVariable />

## Expanded Reference: \*readtable\*

### Inspecting the current readtable

`*readtable*` holds the current readtable, which controls how the Lisp reader parses input.

```lisp
(readtablep *readtable*)
=> T

(readtable-case *readtable*)
=> :UPCASE
```

### Binding a modified readtable locally

The standard idiom for making temporary readtable modifications is to bind `*readtable*` to a copy.

```lisp
(let ((*readtable* (copy-readtable)))
  (setf (readtable-case *readtable*) :preserve)
  (symbol-name (read-from-string "Hello")))
=> "Hello"

;; Outside the LET, the original readtable is still in effect
(readtable-case *readtable*)
=> :UPCASE
```

### Resetting to the standard readtable

Assigning a copy of the standard readtable (via `nil`) restores standard syntax.

```lisp
(let ((*readtable* (copy-readtable)))
  ;; Make a modification
  (set-syntax-from-char #\z #\' *readtable*)
  ;; Reset to standard
  (setf *readtable* (copy-readtable nil))
  ;; Now z is a normal constituent again
  (with-input-from-string (s "zebra")
    (read s)))
=> ZEBRA
```

### Custom reader syntax via *readtable*

All reader macros and syntax changes operate through the current readtable.

```lisp
(let ((*readtable* (copy-readtable)))
  (set-macro-character #\@
    (lambda (stream char)
      (declare (ignore char))
      (list 'at-sign (read stream t nil t))))
  (with-input-from-string (s "@foo")
    (read s)))
=> (AT-SIGN FOO)
```
