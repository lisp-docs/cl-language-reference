---
title: "with-open-stream"
---

# with-open-stream

import WithOpenStreamMacro from './_with-open-stream_macro.md';

<WithOpenStreamMacro />

## Expanded Reference: with-open-stream

### Basic Usage

`with-open-stream` binds a variable to a stream, executes the body, and closes the stream on exit (whether normal or abnormal).

```lisp
(with-open-stream (s (make-string-input-stream "1 2 3 4"))
  (+ (read s) (read s) (read s)))
=> 6
```

### Automatic Cleanup

The stream is closed even if the body exits abnormally.

```lisp
(let (saved)
  (ignore-errors
    (with-open-stream (s (make-string-input-stream "test"))
      (setq saved s)
      (error "bail out")))
  (open-stream-p saved))
=> NIL
```

### With Constructed Streams

`with-open-stream` is useful for composite streams that need cleanup.

```lisp
(let ((out (make-string-output-stream)))
  (with-open-stream (echo (make-echo-stream
                            (make-string-input-stream "echo-me")
                            out))
    (read echo))
  (get-output-stream-string out))
=> "echo-me"
```

### Return Value

Returns the values of the last form in the body.

```lisp
(with-open-stream (s (make-string-input-stream "hello"))
  (values (read-char s) (read-char s)))
=> #\h
=> #\e
```
