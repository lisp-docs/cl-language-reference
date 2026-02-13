---
title: "open"
---

# open

import OpenFunction from './_open_function.md';

<OpenFunction />

## Expanded Reference: open

### Opening a File for Input

By default, `open` creates an input stream. Remember to close it when done. Prefer `with-open-file` for automatic cleanup.

```lisp
(let ((s (open "/tmp/cl-test.txt" :direction :output :if-exists :supersede)))
  (write-string "Hello, file!" s)
  (close s))
→ T

(let ((s (open "/tmp/cl-test.txt" :direction :input)))
  (prog1 (read-line s)
    (close s)))
→ "Hello, file!"
```

### Direction Options

The `:direction` keyword controls whether the stream is for input, output, both, or probing.

```lisp
;; :probe checks file existence and returns a closed stream
(let ((s (open "/tmp/cl-test.txt" :direction :probe)))
  (list (streamp s)
        (open-stream-p s)))
→ (T NIL)
```

### Handling Nonexistent Files

The `:if-does-not-exist` keyword controls behavior when a file does not exist.

```lisp
;; Return NIL instead of signaling an error
(open "/tmp/no-such-file-xyz.txt"
      :direction :input
      :if-does-not-exist nil)
→ NIL
```

### Writing with :if-exists Options

The `:if-exists` keyword controls behavior when writing to a file that already exists.

```lisp
;; :supersede replaces the file entirely
(let ((s (open "/tmp/cl-test.txt" :direction :output :if-exists :supersede)))
  (write-string "New content" s)
  (close s))
→ T

;; :append adds to the end of the existing file
(let ((s (open "/tmp/cl-test.txt" :direction :output :if-exists :append)))
  (write-string " appended" s)
  (close s))
→ T
```

### Binary File I/O

Use `:element-type` to open binary streams.

```lisp
(let ((s (open "/tmp/cl-bytes.bin" :direction :output
               :element-type '(unsigned-byte 8)
               :if-exists :supersede)))
  (write-byte 72 s)
  (write-byte 101 s)
  (close s))
→ T

(let ((s (open "/tmp/cl-bytes.bin" :direction :input
               :element-type '(unsigned-byte 8))))
  (prog1 (list (read-byte s) (read-byte s))
    (close s)))
→ (72 101)
```
