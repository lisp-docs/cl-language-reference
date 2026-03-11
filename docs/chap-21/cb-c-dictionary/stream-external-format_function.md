---
title: "stream-external-format"
---

# stream-external-format

import StreamExternalFormatFunction from './_stream-external-format_function.md';

<StreamExternalFormatFunction />

## Expanded Reference: stream-external-format

### Basic Usage

`stream-external-format` returns an external file format designator for a file stream. The only standardized value is `:DEFAULT`.

```lisp
(with-open-file (s "/tmp/cl-sef-test.txt"
                   :direction :output :if-exists :supersede)
  (stream-external-format s))
=> :UTF-8
```

### Implementation-Dependent Values

The returned value is implementation-dependent and may vary. It could be a keyword, list, or other object.

```lisp
;; The following shows what a particular implementation might return.
;; Actual results vary:
;; :DEFAULT
;; :UTF-8
;; :ISO-8859-1
;; (:ASCII :SAIL)
```

### With Explicit External Format

When opening a file with an explicit external format, `stream-external-format` reflects that choice.

```lisp
(with-open-file (s "/tmp/cl-sef-test.txt"
                   :direction :output
                   :if-exists :supersede
                   :external-format :default)
  (stream-external-format s))
=> :UTF-8
```

### Not Meaningful for Binary Streams

The external format is meaningful for character streams. For binary streams, the result is implementation-dependent.
