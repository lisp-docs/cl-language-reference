---
title: "string-stream"
---

# string-stream

import StringStreamSystemClass from './_string-stream_system-class.md';

<StringStreamSystemClass />

## Expanded Reference: string-stream

### Overview

`string-stream` is the system class for streams that read from or write to strings. Both string input streams and string output streams are of this type.

### Type Check for Input String Streams

```lisp
(typep (make-string-input-stream "test") 'string-stream)
→ T
```

### Type Check for Output String Streams

```lisp
(typep (make-string-output-stream) 'string-stream)
→ T
```

### Element Type is Always a Subtype of Character

```lisp
(subtypep (stream-element-type (make-string-input-stream "x")) 'character)
→ T
```

### Class Hierarchy

```lisp
(subtypep 'string-stream 'stream)
→ T
```

### Not a File Stream

String streams are distinct from file streams.

```lisp
(typep (make-string-output-stream) 'file-stream)
→ NIL
```
