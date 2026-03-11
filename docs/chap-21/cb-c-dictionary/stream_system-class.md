---
title: "stream"
---

# stream

import StreamSystemClass from './_stream_system-class.md';

<StreamSystemClass />

## Expanded Reference: stream

### Overview

`stream` is the base system class for all stream objects in Common Lisp. All streams -- whether input, output, bidirectional, file, string, broadcast, or otherwise -- are of type `stream`.

### Type Checking

```lisp
(typep *standard-input* 'stream)
=> T

(typep (make-string-output-stream) 'stream)
=> T

(typep 42 'stream)
=> NIL
```

### Class Hierarchy

All specific stream types are subtypes of `stream`.

```lisp
(subtypep 'string-stream 'stream)
=> T
=> T

(subtypep 'file-stream 'stream)
=> T
=> T

(subtypep 'broadcast-stream 'stream)
=> T
=> T
```

### Equivalent to streamp

Testing `(typep x 'stream)` is equivalent to `(streamp x)`.

```lisp
(let ((s (make-string-input-stream "test")))
  (eql (typep s 'stream) (streamp s)))
=> T
```
