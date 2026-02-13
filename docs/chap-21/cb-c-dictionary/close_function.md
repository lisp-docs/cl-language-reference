---
title: "close"
---

# close

import CloseFunction from './_close_function.md';

<CloseFunction />

## Expanded Reference: close

### Basic Usage

`close` closes a stream so it can no longer be used for I/O. It returns `T` if the stream was open.

```lisp
(let ((s (make-broadcast-stream)))
  (close s))
→ T
```

### Checking Open Status After Close

After closing, the stream still satisfies `streamp` but `open-stream-p` returns false.

```lisp
(let ((s (make-string-output-stream)))
  (close s)
  (list (streamp s) (open-stream-p s)))
→ (T NIL)
```

### Closing an Already Closed Stream

It is permissible to close an already closed stream.

```lisp
(let ((s (make-string-output-stream)))
  (close s)
  (close s))  ; No error; result is implementation-dependent
```

### The :abort Keyword

When `:abort` is true and the stream is an output file stream, the file may be deleted rather than kept.

```lisp
;; Normal close keeps the file
(with-open-file (s "/tmp/cl-close-test.txt"
                   :direction :output :if-exists :supersede)
  (write-string "data" s))
→ NIL

;; With :abort t, the implementation may delete the file
(let ((s (open "/tmp/cl-close-abort.txt"
               :direction :output :if-exists :supersede)))
  (write-string "tentative data" s)
  (close s :abort t))
```

### Query Operations on Closed Streams

Certain pathname-related queries remain valid on closed file streams.

```lisp
(let ((s (open "/tmp/cl-close-test.txt" :direction :probe)))
  (list (streamp s)
        (pathnamep (pathname s))))
→ (T T)
```
