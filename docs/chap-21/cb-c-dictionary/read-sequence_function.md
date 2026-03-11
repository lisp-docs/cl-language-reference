---
title: "read-sequence"
---

# read-sequence

import ReadSequenceFunction from './_read-sequence_function.md';

<ReadSequenceFunction />

## Expanded Reference: read-sequence

### Basic Usage

`read-sequence` destructively fills a sequence with elements read from a stream. It returns the index of the first element that was not updated (i.e., the position after the last element read).

```lisp
(let ((buf (make-array 15 :initial-element nil)))
  (values (read-sequence buf (make-string-input-stream "test string"))
          buf))
=> 11
=> #(#\t #\e #\s #\t #\Space #\s #\t #\r #\i #\n #\g NIL NIL NIL NIL)
```

### Partial Reads

If the stream has fewer elements than the sequence can hold, only the available elements are read. The return value indicates how far the read progressed.

```lisp
(let ((buf (make-array 10 :initial-element #\.)))
  (let ((pos (read-sequence buf (make-string-input-stream "Hi"))))
    (values pos (coerce buf 'string))))
=> 2
=> "Hi........"
```

### Using :start and :end

The `:start` and `:end` keywords control which portion of the sequence is filled.

```lisp
(let ((buf (make-string 10 :initial-element #\-)))
  (read-sequence buf (make-string-input-stream "Hello World")
                 :start 2 :end 7)
  buf)
=> "--Hello---"
```

### Reading into a Vector of Bytes

`read-sequence` also works with binary streams and byte vectors.

```lisp
(with-open-file (out "/tmp/cl-rs-test.bin"
                     :direction :output
                     :element-type '(unsigned-byte 8)
                     :if-exists :supersede)
  (write-byte 10 out)
  (write-byte 20 out)
  (write-byte 30 out))

(with-open-file (in "/tmp/cl-rs-test.bin"
                    :element-type '(unsigned-byte 8))
  (let ((buf (make-array 5 :element-type '(unsigned-byte 8) :initial-element 0)))
    (values (read-sequence buf in) buf)))
=> 3
=> #(10 20 30 0 0)
```
