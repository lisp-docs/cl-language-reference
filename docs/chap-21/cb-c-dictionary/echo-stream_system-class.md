---
title: "echo-stream"
---

# echo-stream

import EchoStreamSystemClass from './_echo-stream_system-class.md';

<EchoStreamSystemClass />

## Expanded Reference: echo-stream

### Overview

An `echo-stream` is a bidirectional stream that gets input from an associated input stream and sends output to an associated output stream. All input read from the echo stream is automatically echoed (copied) to the output stream.

### Type Check

```lisp
(let ((echo (make-echo-stream
              (make-string-input-stream "x")
              (make-string-output-stream))))
  (typep echo 'echo-stream))
=> T
```

### Input Is Echoed

```lisp
(let ((out (make-string-output-stream)))
  (let ((echo (make-echo-stream
                (make-string-input-stream "abc")
                out)))
    (read-char echo)
    (read-char echo)
    (get-output-stream-string out)))
=> "ab"
```

### Bidirectional

An echo stream supports both input and output.

```lisp
(let ((echo (make-echo-stream
              (make-string-input-stream "test")
              (make-string-output-stream))))
  (list (input-stream-p echo)
        (output-stream-p echo)))
=> (T T)
```
