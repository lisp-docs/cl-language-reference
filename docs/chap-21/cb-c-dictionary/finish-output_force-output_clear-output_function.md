---
title: "finish-output, force-output, clear-output"
---

# finish-output, force-output, clear-output

import FinishOutputFunction from './_finish-output_force-output_clear-output_function.md';

<FinishOutputFunction />

## Expanded Reference: finish-output, force-output, clear-output

### finish-output

`finish-output` ensures that all buffered output has reached its destination and waits for completion. Returns `NIL`.

```lisp
(let ((s (make-string-output-stream)))
  (write-string "data" s)
  (finish-output s))
→ NIL
```

### force-output

`force-output` initiates flushing of internal buffers but does not wait for completion. Returns `NIL`.

```lisp
(let ((s (make-string-output-stream)))
  (write-string "data" s)
  (force-output s))
→ NIL
```

### clear-output

`clear-output` attempts to abort any outstanding buffered output that has not yet reached the destination. Returns `NIL`.

```lisp
(let ((s (make-string-output-stream)))
  (write-string "data" s)
  (clear-output s))
→ NIL
```

### Default Stream

All three functions default to `*standard-output*` when no stream argument is provided.

```lisp
(with-output-to-string (*standard-output*)
  (write-string "test")
  (finish-output)
  (force-output)
  (clear-output))
→ "test"
```

### Practical Difference

The key differences are: `finish-output` blocks until output is delivered, `force-output` initiates delivery without blocking, and `clear-output` attempts to discard pending output. The exact behavior is implementation-dependent.
