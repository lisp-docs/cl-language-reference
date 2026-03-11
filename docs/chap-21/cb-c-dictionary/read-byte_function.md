---
title: "read-byte"
---

# read-byte

import ReadByteFunction from './_read-byte_function.md';

<ReadByteFunction />

## Expanded Reference: read-byte

### Basic Usage

`read-byte` reads one byte (an integer) from a binary input stream.

```lisp
(with-open-file (s "/tmp/cl-bytes.bin"
                   :direction :output
                   :element-type '(unsigned-byte 8)
                   :if-exists :supersede)
  (write-byte 65 s)
  (write-byte 66 s)
  (write-byte 67 s))
=> 67

(with-open-file (s "/tmp/cl-bytes.bin"
                   :element-type '(unsigned-byte 8))
  (list (read-byte s)
        (read-byte s)
        (read-byte s)))
=> (65 66 67)
```

### Handling End of File

When `eof-error-p` is `nil`, returns the `eof-value` at end of file instead of signaling an error.

```lisp
(with-open-file (s "/tmp/cl-bytes.bin"
                   :element-type '(unsigned-byte 8))
  (list (read-byte s nil :eof)
        (read-byte s nil :eof)
        (read-byte s nil :eof)
        (read-byte s nil :eof)))
=> (65 66 67 :EOF)
```

### Reading All Bytes

```lisp
(with-open-file (s "/tmp/cl-bytes.bin"
                   :element-type '(unsigned-byte 8))
  (loop for byte = (read-byte s nil nil)
        while byte
        collect byte))
=> (65 66 67)
```
