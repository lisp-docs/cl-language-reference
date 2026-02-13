---
title: "broadcast-stream"
---

# broadcast-stream

import BroadcastStreamSystemClass from './_broadcast-stream_system-class.md';

<BroadcastStreamSystemClass />

## Expanded Reference: broadcast-stream

### Overview

A `broadcast-stream` is an output stream that sends all output to zero or more component output streams simultaneously. It is created with `make-broadcast-stream`.

### Type Check

```lisp
(typep (make-broadcast-stream) 'broadcast-stream)
→ T
```

### Output Goes to All Components

```lisp
(let ((a (make-string-output-stream))
      (b (make-string-output-stream)))
  (let ((bc (make-broadcast-stream a b)))
    (write-string "sent to both" bc))
  (list (get-output-stream-string a)
        (get-output-stream-string b)))
→ ("sent to both" "sent to both")
```

### Empty Broadcast Stream (Bit Bucket)

A broadcast stream with no components silently discards all output.

```lisp
(let ((s (make-broadcast-stream)))
  (write-string "discarded" s)
  (output-stream-p s))
→ T
```

### Always an Output Stream

```lisp
(output-stream-p (make-broadcast-stream))
→ T
```
