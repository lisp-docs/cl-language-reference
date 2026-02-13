---
title: "make-concatenated-stream"
---

# make-concatenated-stream

import MakeConcatenatedStreamFunction from './_make-concatenated-stream_function.md';

<MakeConcatenatedStreamFunction />

## Expanded Reference: make-concatenated-stream

### Basic Usage

`make-concatenated-stream` creates an input stream that reads from multiple input streams in sequence. When one stream reaches end of file, reading continues from the next.

```lisp
(let ((s (make-concatenated-stream
           (make-string-input-stream "Hello ")
           (make-string-input-stream "World"))))
  (loop for c = (read-char s nil nil)
        while c
        collect c into chars
        finally (return (coerce chars 'string))))
→ "Hello World"
```

### Reading Lisp Objects Across Boundaries

The concatenated stream seamlessly joins data from its component streams.

```lisp
(read (make-concatenated-stream
        (make-string-input-stream "1")
        (make-string-input-stream "2")))
→ 12
```

### Multiple Streams

```lisp
(let ((s (make-concatenated-stream
           (make-string-input-stream "aaa")
           (make-string-input-stream "bbb")
           (make-string-input-stream "ccc"))))
  (loop for c = (read-char s nil nil)
        while c
        collect c into chars
        finally (return (coerce chars 'string))))
→ "aaabbbccc"
```

### Empty Concatenation

A concatenated stream with no component streams is immediately at end of file.

```lisp
(read-char (make-concatenated-stream) nil :eof)
→ :EOF
```
