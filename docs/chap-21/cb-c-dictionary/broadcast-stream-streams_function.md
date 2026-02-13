---
title: "broadcast-stream-streams"
---

# broadcast-stream-streams

import BroadcastStreamStreamsFunction from './_broadcast-stream-streams_function.md';

<BroadcastStreamStreamsFunction />

## Expanded Reference: broadcast-stream-streams

### Basic Usage

`broadcast-stream-streams` returns a list of the component output streams of a broadcast stream.

```lisp
(let ((a (make-string-output-stream))
      (b (make-string-output-stream)))
  (let ((bc (make-broadcast-stream a b)))
    (length (broadcast-stream-streams bc))))
→ 2
```

### Empty Broadcast Stream

A broadcast stream with no component streams returns an empty list.

```lisp
(broadcast-stream-streams (make-broadcast-stream))
→ NIL
```

### Verifying Component Streams

```lisp
(let ((a (make-string-output-stream))
      (b (make-string-output-stream)))
  (let* ((bc (make-broadcast-stream a b))
         (components (broadcast-stream-streams bc)))
    (list (eq (first components) a)
          (eq (second components) b))))
→ (T T)
```
