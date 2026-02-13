---
title: "two-way-stream"
---

# two-way-stream

import TwoWayStreamSystemClass from './_two-way-stream_system-class.md';

<TwoWayStreamSystemClass />

## Expanded Reference: two-way-stream

### Overview

A `two-way-stream` is a bidirectional composite stream that receives input from an associated input stream and sends output to an associated output stream.

### Type Check

```lisp
(let ((two (make-two-way-stream
             (make-string-input-stream "x")
             (make-string-output-stream))))
  (typep two 'two-way-stream))
→ T
```

### Bidirectional Nature

```lisp
(let ((two (make-two-way-stream
             (make-string-input-stream "x")
             (make-string-output-stream))))
  (list (input-stream-p two)
        (output-stream-p two)))
→ (T T)
```

### Class Hierarchy

```lisp
(subtypep 'two-way-stream 'stream)
→ T
```
