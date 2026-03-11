---
title: "stream-error-stream"
---

# stream-error-stream

import StreamErrorStreamFunction from './_stream-error-stream_function.md';

<StreamErrorStreamFunction />

## Expanded Reference: stream-error-stream

### Basic Usage

`stream-error-stream` returns the offending stream from a condition of type `stream-error`.

```lisp
(with-input-from-string (s "(FOO")
  (handler-case (read s)
    (end-of-file (c)
      (streamp (stream-error-stream c)))))
=> T
```

### Identifying the Problematic Stream

The returned stream can help diagnose which stream caused the error.

```lisp
(with-input-from-string (s "")
  (handler-case (read-char s)
    (end-of-file (c)
      (let ((bad-stream (stream-error-stream c)))
        (list (streamp bad-stream)
              (eq bad-stream s))))))
=> (T NIL)
```

### With end-of-file Conditions

`end-of-file` is a subtype of `stream-error`, so `stream-error-stream` works on it.

```lisp
(handler-case
    (read-char (make-string-input-stream ""))
  (end-of-file (c)
    (format nil "End of file on stream: ~A"
            (type-of (stream-error-stream c)))))
; Returns a string describing the stream type (implementation-dependent)
```
