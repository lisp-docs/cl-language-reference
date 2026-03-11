---
title: "make-broadcast-stream"
---

# make-broadcast-stream

import MakeBroadcastStreamFunction from './_make-broadcast-stream_function.md';

<MakeBroadcastStreamFunction />

## Expanded Reference: make-broadcast-stream

### Basic Usage

`make-broadcast-stream` creates an output stream that sends output to all of its component streams simultaneously.

```lisp
(let ((a (make-string-output-stream))
      (b (make-string-output-stream)))
  (let ((broadcast (make-broadcast-stream a b)))
    (write-string "hello to both" broadcast))
  (list (get-output-stream-string a)
        (get-output-stream-string b)))
=> ("hello to both" "hello to both")
```

### Using with format

```lisp
(let ((s1 (make-string-output-stream))
      (s2 (make-string-output-stream)))
  (format (make-broadcast-stream s1 s2)
          "this will go to both streams")
  (list (get-output-stream-string s1)
        (get-output-stream-string s2)))
=> ("this will go to both streams" "this will go to both streams")
```

### Discarding Output (No Component Streams)

A broadcast stream with no components is a "bit bucket" -- all output is discarded.

```lisp
(let ((s (make-broadcast-stream)))
  (write-string "discarded" s)
  (format s "also discarded ~D" 42)
  (output-stream-p s))
=> T
```

### Three or More Streams

Any number of output streams can be combined.

```lisp
(let ((streams (loop repeat 3 collect (make-string-output-stream))))
  (let ((bc (apply #'make-broadcast-stream streams)))
    (write-string "triple" bc))
  (mapcar #'get-output-stream-string streams))
=> ("triple" "triple" "triple")
```
