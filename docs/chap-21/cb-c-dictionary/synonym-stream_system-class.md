---
title: "synonym-stream"
---

# synonym-stream

import SynonymStreamSystemClass from './_synonym-stream_system-class.md';

<SynonymStreamSystemClass />

## Expanded Reference: synonym-stream

### Overview

A `synonym-stream` is a stream that acts as an alias for whatever stream is the current value of a named dynamic variable. Operations on the synonym stream are forwarded to the target stream.

### Type Check

```lisp
(typep (make-synonym-stream '*standard-input*) 'synonym-stream)
→ T
```

### Dynamic Redirection

If the dynamic variable is rebound, the synonym stream follows the new binding.

```lisp
(defvar *my-syn-target* (make-string-input-stream "first"))

(let ((syn (make-synonym-stream '*my-syn-target*)))
  (let ((r1 (read syn)))
    (setq *my-syn-target* (make-string-input-stream "second"))
    (list r1 (read syn))))
→ (FIRST SECOND)
```

### Class Hierarchy

```lisp
(subtypep 'synonym-stream 'stream)
→ T
```
