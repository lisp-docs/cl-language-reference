---
title: "file-string-length"
---

# file-string-length

import FileStringLengthFunction from './_file-string-length_function.md';

<FileStringLengthFunction />

## Expanded Reference: file-string-length

### Basic Usage

`file-string-length` returns the number of file-position units that would be consumed by writing a character or string to a character output file stream. Returns `NIL` if this cannot be determined.

```lisp
(with-open-file (s "/tmp/cl-fsl-test.txt"
                   :direction :output :if-exists :supersede)
  (file-string-length s #\A))
; Returns a non-negative integer or NIL (implementation-dependent)
```

### With a String Argument

When given a string, returns the total length for writing the entire string.

```lisp
(with-open-file (s "/tmp/cl-fsl-test.txt"
                   :direction :output :if-exists :supersede)
  (file-string-length s "hello"))
; Returns a non-negative integer or NIL (implementation-dependent)
```

### Relationship to file-position

The value represents the difference `file-position` would show after writing the object compared to before.

```lisp
(with-open-file (s "/tmp/cl-fsl-test.txt"
                   :direction :output :if-exists :supersede)
  (let ((before (file-position s)))
    (write-string "test" s)
    (let ((after (file-position s)))
      (when (and before after)
        (- after before)))))
→ 4  ; typically, but depends on external format
```
