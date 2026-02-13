---
title: "make-synonym-stream"
---

# make-synonym-stream

import MakeSynonymStreamFunction from './_make-synonym-stream_function.md';

<MakeSynonymStreamFunction />

## Expanded Reference: make-synonym-stream

### Basic Usage

`make-synonym-stream` creates a stream that delegates all operations to whatever stream is currently the value of a given dynamic variable.

```lisp
(defvar *my-stream* (make-string-input-stream "first"))

(let ((syn (make-synonym-stream '*my-stream*)))
  (read syn))
→ FIRST
```

### Dynamic Rebinding

Changing the value of the symbol redirects the synonym stream to a different target.

```lisp
(defvar *target* nil)

(let ((syn (make-synonym-stream '*target*)))
  (setq *target* (make-string-input-stream "a-stream"))
  (let ((r1 (read syn)))
    (setq *target* (make-string-input-stream "b-stream"))
    (let ((r2 (read syn)))
      (list r1 r2))))
→ (A-STREAM B-STREAM)
```

### Output Through a Synonym Stream

Synonym streams work for output as well.

```lisp
(defvar *out-target* nil)

(let ((syn (make-synonym-stream '*out-target*))
      (actual (make-string-output-stream)))
  (setq *out-target* actual)
  (write-string "routed output" syn)
  (get-output-stream-string actual))
→ "routed output"
```

### Retrieving the Symbol

Use `synonym-stream-symbol` to find out which symbol the stream is bound to.

```lisp
(let ((syn (make-synonym-stream '*standard-input*)))
  (synonym-stream-symbol syn))
→ *STANDARD-INPUT*
```
