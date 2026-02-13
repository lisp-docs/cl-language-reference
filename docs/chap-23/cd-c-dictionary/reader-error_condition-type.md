---
title: "reader-error"
---

# reader-error

import ReaderErrorConditionType from './_reader-error_condition-type.md';

<ReaderErrorConditionType />

## Expanded Reference: reader-error

### The reader-error condition type

`reader-error` is the condition type for errors related to tokenization and parsing by the Lisp reader. It inherits from both `parse-error` and `stream-error`.

```lisp
(subtypep 'reader-error 'parse-error)
; => T
; => T

(subtypep 'reader-error 'stream-error)
; => T
; => T
```

### Catching reader errors

You can use `handler-case` to catch `reader-error` conditions signaled by `read` or `read-from-string`.

```lisp
(handler-case
    (read-from-string ")")
  (reader-error (c)
    (format nil "Caught reader error: ~A" (type-of c))))
; => "Caught reader error: READER-ERROR"
;; The exact message is implementation-dependent
```

### Accessing the stream from a reader-error

Since `reader-error` is a subtype of `stream-error`, you can use `stream-error-stream` to retrieve the stream that was being read when the error occurred.

```lisp
(handler-case
    (with-input-from-string (s ")")
      (read s))
  (stream-error (c)
    (not (null (stream-error-stream c)))))
; => T
```

### Common causes of reader errors

Reader errors are signaled for unbalanced parentheses, invalid tokens, undefined dispatch macro sub-characters, and other malformed input.

```lisp
;; Unbalanced parentheses
(handler-case
    (read-from-string "(a b")
  (end-of-file () :got-eof))
; => :GOT-EOF

;; Invalid sharpsign notation
(handler-case
    (read-from-string "#Z")
  (reader-error () :got-reader-error))
; => :GOT-READER-ERROR
```
