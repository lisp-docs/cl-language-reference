---
title: "read-line"
---

# read-line

import ReadLineFunction from './_read-line_function.md';

<ReadLineFunction />

## Expanded Reference: read-line

### Basic Usage

`read-line` reads a line of text from an input stream, returning the line as a string (without the trailing newline) and a secondary boolean value indicating whether the line was terminated by end of file rather than a newline.

```lisp
(with-input-from-string (s (format nil "hello~%world"))
  (multiple-value-list (read-line s)))
→ ("hello" NIL)
```

### Second Return Value

The secondary value is `NIL` when the line ends with a newline, and `T` when terminated by end of file.

```lisp
(with-input-from-string (s (format nil "line1~%line2"))
  (list (multiple-value-list (read-line s))
        (multiple-value-list (read-line s))))
→ (("line1" NIL) ("line2" T))
```

### Handling End of File

With `eof-error-p` set to `nil`, returns the `eof-value` instead of signaling an error.

```lisp
(with-input-from-string (s "only line")
  (list (read-line s)
        (read-line s nil :done)))
→ ("only line" :DONE)
```

### Reading All Lines from a String

```lisp
(with-input-from-string (s (format nil "alpha~%beta~%gamma"))
  (loop for line = (read-line s nil nil)
        while line
        collect line))
→ ("alpha" "beta" "gamma")
```

### Empty Lines

Empty lines produce empty strings.

```lisp
(with-input-from-string (s (format nil "~%~%data~%"))
  (list (read-line s)
        (read-line s)
        (read-line s)
        (read-line s nil :eof)))
→ ("" "" "data" "")
```
