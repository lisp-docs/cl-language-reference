---
title: "write-byte"
---

# write-byte

import WriteByteFunction from './_write-byte_function.md';

<WriteByteFunction />

## Expanded Reference: write-byte

### Basic Usage

`write-byte` writes one byte (an integer) to a binary output stream and returns the byte written.

```lisp
(with-open-file (s "/tmp/cl-wb-test.bin"
                   :direction :output
                   :element-type '(unsigned-byte 8)
                   :if-exists :supersede)
  (write-byte 101 s))
→ 101
```

### Writing Multiple Bytes

```lisp
(with-open-file (s "/tmp/cl-wb-test.bin"
                   :direction :output
                   :element-type '(unsigned-byte 8)
                   :if-exists :supersede)
  (dolist (b '(72 101 108 108 111))
    (write-byte b s)))
→ NIL
```

### Round-Trip with read-byte

Data written with `write-byte` can be read back with `read-byte`.

```lisp
(with-open-file (out "/tmp/cl-wb-rt.bin"
                     :direction :output
                     :element-type '(unsigned-byte 8)
                     :if-exists :supersede)
  (write-byte 255 out)
  (write-byte 0 out)
  (write-byte 128 out))

(with-open-file (in "/tmp/cl-wb-rt.bin"
                    :element-type '(unsigned-byte 8))
  (list (read-byte in) (read-byte in) (read-byte in)))
→ (255 0 128)
```
