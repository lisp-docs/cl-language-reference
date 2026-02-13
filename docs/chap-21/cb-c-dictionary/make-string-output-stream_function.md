---
title: "make-string-output-stream"
---

# make-string-output-stream

import MakeStringOutputStreamFunction from './_make-string-output-stream_function.md';

<MakeStringOutputStreamFunction />

## Expanded Reference: make-string-output-stream

### Basic Usage

`make-string-output-stream` creates an output stream that collects characters into a string, which can later be retrieved with `get-output-stream-string`.

```lisp
(let ((s (make-string-output-stream)))
  (write-string "hello " s)
  (write-string "world" s)
  (get-output-stream-string s))
→ "hello world"
```

### Building Strings with Multiple Operations

Various output functions can write to a string output stream.

```lisp
(let ((s (make-string-output-stream)))
  (write-string "testing... " s)
  (prin1 1234 s)
  (get-output-stream-string s))
→ "testing... 1234"
```

### Clearing on Retrieval

Calling `get-output-stream-string` clears the stream, so subsequent calls return only newly written content.

```lisp
(let ((s (make-string-output-stream)))
  (write-string "first" s)
  (let ((r1 (get-output-stream-string s)))
    (write-string "second" s)
    (let ((r2 (get-output-stream-string s)))
      (list r1 r2))))
→ ("first" "second")
```

### Using with format

`format` can direct output to a string output stream.

```lisp
(let ((s (make-string-output-stream)))
  (format s "~D item~:P at ~,2F each" 3 9.5)
  (get-output-stream-string s))
→ "3 items at 9.50 each"
```

### Stream Properties

A string output stream is an output stream but not an input stream.

```lisp
(let ((s (make-string-output-stream)))
  (list (output-stream-p s)
        (input-stream-p s)
        (streamp s)))
→ (T NIL T)
```
