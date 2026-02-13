---
title: "read-char-no-hang"
---

# read-char-no-hang

import ReadCharNoHangFunction from './_read-char-no-hang_function.md';

<ReadCharNoHangFunction />

## Expanded Reference: read-char-no-hang

### Basic Usage

`read-char-no-hang` is like `read-char` except that it returns `NIL` immediately if no character is available (rather than waiting). On non-interactive streams like string streams, it behaves identically to `read-char`.

```lisp
(with-input-from-string (s "abc")
  (list (read-char-no-hang s)
        (read-char-no-hang s)
        (read-char-no-hang s)))
→ (#\a #\b #\c)
```

### End of File Handling

When the stream is exhausted and `eof-error-p` is false, returns the `eof-value`.

```lisp
(with-input-from-string (s "x")
  (list (read-char-no-hang s nil :eof)
        (read-char-no-hang s nil :eof)))
→ (#\x :EOF)
```

### Returns NIL When No Input Available

On interactive streams, `read-char-no-hang` returns `NIL` rather than blocking when no input has been typed. On string streams (non-interactive), it only returns `NIL` at end of file with `eof-error-p` false and `eof-value` being `NIL`.

```lisp
;; On a string stream this behaves the same as read-char:
(with-input-from-string (s "")
  (read-char-no-hang s nil nil))
→ NIL
```

### Difference from read-char

The difference is observable only on interactive streams. On non-interactive streams such as string streams or file streams, `read-char-no-hang` and `read-char` behave identically.
