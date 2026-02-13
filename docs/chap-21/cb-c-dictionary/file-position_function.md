---
title: "file-position"
---

# file-position

import FilePositionFunction from './_file-position_function.md';

<FilePositionFunction />

## Expanded Reference: file-position

### Querying Current Position

With one argument, `file-position` returns the current position in the stream.

```lisp
(with-open-file (s "/tmp/cl-fp-test.txt"
                   :direction :output :if-exists :supersede)
  (let ((p0 (file-position s)))
    (write-string "hello" s)
    (let ((p1 (file-position s)))
      (list p0 p1))))
→ (0 5)
```

### Setting the Position

With two arguments, `file-position` moves the stream position. Returns true on success.

```lisp
(with-open-file (s "/tmp/cl-fp-test.bin"
                   :direction :output
                   :element-type '(unsigned-byte 8)
                   :if-exists :supersede)
  (write-byte 10 s)
  (write-byte 20 s)
  (write-byte 30 s))

(with-open-file (s "/tmp/cl-fp-test.bin"
                   :element-type '(unsigned-byte 8))
  (file-position s 2)      ; skip to third byte
  (read-byte s))
→ 30
```

### Using :start and :end Designators

The position-spec can be `:start` to move to the beginning or `:end` to move to the end.

```lisp
(with-open-file (s "/tmp/cl-fp-test.bin"
                   :element-type '(unsigned-byte 8))
  (read-byte s)                    ; read first byte
  (file-position s :start)         ; go back to start
  (read-byte s))                   ; read first byte again
→ 10
```

### Position in Binary vs Character Streams

In binary streams, position advances by 1 per byte. In character streams, the increment may vary due to encoding.

```lisp
(with-open-file (s "/tmp/cl-fp-test.bin"
                   :element-type '(unsigned-byte 8))
  (let ((p0 (file-position s)))
    (read-byte s)
    (let ((p1 (file-position s)))
      (- p1 p0))))
→ 1
```
