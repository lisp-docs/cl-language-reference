---
title: "stream-element-type"
---

# stream-element-type

import StreamElementTypeFunction from './_stream-element-type_function.md';

<StreamElementTypeFunction />

## Expanded Reference: stream-element-type

### Character Stream

String streams have an element type that is a subtype of `character`.

```lisp
(let ((s (make-string-output-stream)))
  (subtypep (stream-element-type s) 'character))
→ T
```

### Binary File Stream

Binary file streams report the element type specified at creation.

```lisp
(with-open-file (s "/tmp/cl-set-test.bin"
                   :direction :output
                   :element-type '(unsigned-byte 8)
                   :if-exists :supersede)
  (stream-element-type s))
→ (UNSIGNED-BYTE 8)  ; or a supertype thereof
```

### Character File Stream

```lisp
(with-open-file (s "/tmp/cl-set-test.txt"
                   :direction :output
                   :if-exists :supersede)
  (subtypep (stream-element-type s) 'character))
→ T
```

### String Input Stream

```lisp
(subtypep (stream-element-type (make-string-input-stream "test")) 'character)
→ T
```
