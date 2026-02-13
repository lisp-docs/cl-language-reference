---
title: "concatenated-stream"
---

# concatenated-stream

import ConcatenatedStreamSystemClass from './_concatenated-stream_system-class.md';

<ConcatenatedStreamSystemClass />

## Expanded Reference: concatenated-stream

### Overview

A `concatenated-stream` is an input stream that reads from a sequence of other input streams in order. When one stream is exhausted, reading continues from the next.

### Type Check

```lisp
(typep (make-concatenated-stream) 'concatenated-stream)
→ T
```

### Sequential Reading

```lisp
(let ((s (make-concatenated-stream
           (make-string-input-stream "Hello ")
           (make-string-input-stream "World"))))
  (loop for c = (read-char s nil nil)
        while c collect c into chars
        finally (return (coerce chars 'string))))
→ "Hello World"
```

### Always an Input Stream

```lisp
(let ((s (make-concatenated-stream
           (make-string-input-stream "test"))))
  (list (input-stream-p s) (output-stream-p s)))
→ (T NIL)
```
