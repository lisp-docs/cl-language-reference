---
title: "open-stream-p"
---

# open-stream-p

import OpenStreamPFunction from './_open-stream-p_function.md';

<OpenStreamPFunction />

## Expanded Reference: open-stream-p

### Basic Usage

`open-stream-p` returns true if the stream is open, false if closed.

```lisp
(open-stream-p *standard-input*)
=> T
```

### Newly Created Streams Are Open

```lisp
(let ((s (make-string-output-stream)))
  (open-stream-p s))
=> T
```

### After Closing

```lisp
(let ((s (make-string-output-stream)))
  (close s)
  (open-stream-p s))
=> NIL
```

### Streams Closed by with-open-stream

Streams are automatically closed on exit from `with-open-stream`.

```lisp
(let (saved)
  (with-open-stream (s (make-string-input-stream "test"))
    (setq saved s)
    (format nil "inside: ~A" (open-stream-p s)))
  ;; After exiting, saved stream is closed
  (list (open-stream-p saved)))
=> (NIL)
```
