---
title: "make-echo-stream"
---

# make-echo-stream

import MakeEchoStreamFunction from './_make-echo-stream_function.md';

<MakeEchoStreamFunction />

## Expanded Reference: make-echo-stream

### Basic Usage

`make-echo-stream` creates a bidirectional stream where all input read from the input stream is echoed (written) to the output stream.

```lisp
(let ((out (make-string-output-stream)))
  (with-open-stream
      (s (make-echo-stream
           (make-string-input-stream "this-is-read-and-echoed")
           out))
    (read s)
    (format s " * this-is-direct-output")
    (get-output-stream-string out)))
=> "this-is-read-and-echoed * this-is-direct-output"
```

### Echoed Characters Appear in Output

Characters read from the input side are automatically copied to the output side.

```lisp
(let ((out (make-string-output-stream)))
  (let ((echo (make-echo-stream
                (make-string-input-stream "abc")
                out)))
    (read-char echo)
    (read-char echo)
    (read-char echo)
    (get-output-stream-string out)))
=> "abc"
```

### Direct Output Mixed with Echoed Input

You can also write directly to an echo stream, which goes to the output stream.

```lisp
(let ((out (make-string-output-stream)))
  (let ((echo (make-echo-stream
                (make-string-input-stream "in")
                out)))
    (write-string "pre-" echo)
    (read-char echo)
    (read-char echo)
    (write-string "-post" echo)
    (get-output-stream-string out)))
=> "pre-in-post"
```
