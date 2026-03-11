---
title: "make-string-input-stream"
---

# make-string-input-stream

import MakeStringInputStreamFunction from './_make-string-input-stream_function.md';

<MakeStringInputStreamFunction />

## Expanded Reference: make-string-input-stream

### Basic Usage

`make-string-input-stream` creates an input stream that reads characters from a given string.

```lisp
(let ((s (make-string-input-stream "hello")))
  (list (read-char s)
        (read-char s)
        (read-char s)))
=> (#\h #\e #\l)
```

### Reading Lisp Objects from a String

The stream can be used with `read` to parse Lisp objects from a string.

```lisp
(let ((s (make-string-input-stream "1 one ")))
  (list (read s nil nil)
        (read s nil nil)
        (read s nil nil)))
=> (1 ONE NIL)
```

### Using Start and End Parameters

The optional `start` and `end` arguments restrict which portion of the string is read.

```lisp
(read (make-string-input-stream "prefixtargetsuffix" 6 12))
=> TARGET
```

### Detecting End of File

When all characters have been consumed, the stream reaches end of file.

```lisp
(let ((s (make-string-input-stream "ab")))
  (list (read-char s nil :eof)
        (read-char s nil :eof)
        (read-char s nil :eof)))
=> (#\a #\b :EOF)
```

### Reading Lines from a String Stream

`read-line` works with string input streams to read line-delimited text.

```lisp
(let ((s (make-string-input-stream (format nil "line1~%line2~%line3"))))
  (list (read-line s)
        (read-line s)
        (read-line s nil :done)))
=> ("line1" "line2" "line3")
```
