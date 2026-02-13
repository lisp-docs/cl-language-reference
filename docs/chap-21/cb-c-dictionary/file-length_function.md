---
title: "file-length"
---

# file-length

import FileLengthFunction from './_file-length_function.md';

<FileLengthFunction />

## Expanded Reference: file-length

### Basic Usage

`file-length` returns the length of the file associated with a stream, or `NIL` if the length cannot be determined.

```lisp
(with-open-file (s "/tmp/cl-fl-test.txt"
                   :direction :output :if-exists :supersede)
  (write-string "0123456789" s))

(with-open-file (s "/tmp/cl-fl-test.txt")
  (file-length s))
→ 10
```

### Binary File Length

For binary files, the length is measured in units of the element type.

```lisp
(with-open-file (s "/tmp/cl-fl-test.bin"
                   :direction :output
                   :element-type '(unsigned-byte 8)
                   :if-exists :supersede)
  (dotimes (i 5) (write-byte i s)))

(with-open-file (s "/tmp/cl-fl-test.bin"
                   :element-type '(unsigned-byte 8))
  (file-length s))
→ 5
```

### Using with file-position

`file-length` and `file-position` together enable random access patterns.

```lisp
(with-open-file (s "/tmp/cl-fl-test.bin"
                   :element-type '(unsigned-byte 8))
  (let ((len (file-length s)))
    (file-position s (1- len))    ; seek to last byte
    (read-byte s)))
→ 4
```
