---
title: "write-sequence"
---

# write-sequence

import WriteSequenceFunction from './_write-sequence_function.md';

<WriteSequenceFunction />

## Expanded Reference: write-sequence

### Basic Usage

`write-sequence` writes the elements of a sequence to an output stream and returns the sequence.

```lisp
(with-output-to-string (s)
  (write-sequence "hello world" s))
=> "hello world"
```

### Using :start and :end

The `:start` and `:end` keywords write only a portion of the sequence.

```lisp
(with-output-to-string (s)
  (write-sequence "bookworms" s :end 4))
=> "book"
```

```lisp
(with-output-to-string (s)
  (write-sequence "abcdefgh" s :start 2 :end 6))
=> "cdef"
```

### Writing Byte Sequences

`write-sequence` works with binary streams and byte vectors.

```lisp
(with-open-file (out "/tmp/cl-ws-test.bin"
                     :direction :output
                     :element-type '(unsigned-byte 8)
                     :if-exists :supersede)
  (write-sequence #(10 20 30 40 50) out))

(with-open-file (in "/tmp/cl-ws-test.bin"
                    :element-type '(unsigned-byte 8))
  (let ((buf (make-array 5 :element-type '(unsigned-byte 8))))
    (read-sequence buf in)
    buf))
=> #(10 20 30 40 50)
```

### Return Value

`write-sequence` returns the original sequence.

```lisp
(with-output-to-string (s)
  (let ((result (write-sequence "test" s)))
    (write-char #\Space s)
    (write-string (string-upcase result) s)))
=> "test TEST"
```
