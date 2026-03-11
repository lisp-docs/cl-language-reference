---
title: "make-two-way-stream"
---

# make-two-way-stream

import MakeTwoWayStreamFunction from './_make-two-way-stream_function.md';

<MakeTwoWayStreamFunction />

## Expanded Reference: make-two-way-stream

### Basic Usage

`make-two-way-stream` creates a bidirectional stream that reads from one stream and writes to another.

```lisp
(with-output-to-string (out)
  (with-input-from-string (in "input...")
    (let ((two (make-two-way-stream in out)))
      (format two "output...")
      (read two))))
=> "output..."
;; The READ above returns INPUT...
```

### Separate Input and Output

Reading goes to the input stream; writing goes to the output stream.

```lisp
(let ((out (make-string-output-stream)))
  (with-input-from-string (in "42")
    (let ((two (make-two-way-stream in out)))
      (let ((val (read two)))
        (format two "Got: ~D" val)
        (list val (get-output-stream-string out))))))
=> (42 "Got: 42")
```

### Stream Direction Queries

A two-way stream is both an input and an output stream.

```lisp
(let ((two (make-two-way-stream
             (make-string-input-stream "x")
             (make-string-output-stream))))
  (list (input-stream-p two)
        (output-stream-p two)))
=> (T T)
```
