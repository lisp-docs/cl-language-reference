---
title: "end-of-file"
---

# end-of-file

import EndOfFileConditionType from './_end-of-file_condition-type.md';

<EndOfFileConditionType />

## Expanded Reference: end-of-file

### Overview

`end-of-file` is a condition type signaled when a read operation is performed on a stream that has no more data. It is a subtype of `stream-error`.

### Catching end-of-file

```lisp
(handler-case
    (read-char (make-string-input-stream ""))
  (end-of-file () :got-eof))
→ :GOT-EOF
```

### Accessing the Stream from the Condition

Since `end-of-file` inherits from `stream-error`, you can use `stream-error-stream` to get the offending stream.

```lisp
(handler-case
    (read (make-string-input-stream ""))
  (end-of-file (c)
    (streamp (stream-error-stream c))))
→ T
```

### Avoiding end-of-file with eof-error-p

Most read functions accept an `eof-error-p` argument. When false, the function returns an `eof-value` instead of signaling the condition.

```lisp
(read-char (make-string-input-stream "") nil :eof)
→ :EOF
```

### Type Hierarchy

```lisp
(subtypep 'end-of-file 'stream-error)
→ T

(subtypep 'end-of-file 'error)
→ T
```
