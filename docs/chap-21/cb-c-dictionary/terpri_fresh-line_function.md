---
title: "terpri, fresh-line"
---

# terpri, fresh-line

import TerpriFunction from './_terpri_fresh-line_function.md';

<TerpriFunction />

## Expanded Reference: terpri, fresh-line

### terpri: Unconditional Newline

`terpri` always outputs a newline to the stream, regardless of the current position. It returns `NIL`.

```lisp
(with-output-to-string (s)
  (write-string "line1" s)
  (terpri s)
  (write-string "line2" s))
→ "line1
line2"
```

### terpri Outputs Extra Blank Lines

Since `terpri` always writes a newline, consecutive calls produce blank lines.

```lisp
(with-output-to-string (s)
  (write-string "above" s)
  (terpri s)
  (terpri s)
  (write-string "below" s))
→ "above

below"
```

### fresh-line: Conditional Newline

`fresh-line` outputs a newline only if the stream is not already at the start of a line. It returns `T` if a newline was output, `NIL` otherwise.

```lisp
(with-output-to-string (s)
  (write-string "text" s)
  (fresh-line s)      ; outputs newline (returns T)
  (fresh-line s)      ; already at start of line (returns NIL)
  (write-string "more" s))
→ "text
more"
```

### Comparing terpri and fresh-line

```lisp
;; terpri always adds a newline
(with-output-to-string (s)
  (write-string "some text" s)
  (terpri s)
  (terpri s)
  (write-string "more text" s))
→ "some text

more text"

;; fresh-line avoids double newlines
(with-output-to-string (s)
  (write-string "some text" s)
  (fresh-line s)
  (fresh-line s)
  (write-string "more text" s))
→ "some text
more text"
```
