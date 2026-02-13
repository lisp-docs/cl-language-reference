---
title: "file-stream"
---

# file-stream

import FileStreamSystemClass from './_file-stream_system-class.md';

<FileStreamSystemClass />

## Expanded Reference: file-stream

### Overview

`file-stream` is a system class for streams whose direct source or sink is a file. Such streams are created by `open` and `with-open-file`.

### Type Check

```lisp
(with-open-file (s "/tmp/cl-fs-test.txt"
                   :direction :output :if-exists :supersede)
  (typep s 'file-stream))
→ T
```

### Distinguishing from String Streams

String streams are not file streams.

```lisp
(typep (make-string-output-stream) 'file-stream)
→ NIL
```

### Class Hierarchy

```lisp
(subtypep 'file-stream 'stream)
→ T
```

### Created by open and with-open-file

Both `open` and `with-open-file` produce file streams.

```lisp
(let ((s (open "/tmp/cl-fs-test.txt" :direction :probe)))
  (prog1 (typep s 'file-stream)
    (close s)))
→ T
```
