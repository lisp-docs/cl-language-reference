---
title: "clear-input"
---

# clear-input

import ClearInputFunction from './_clear-input_function.md';

<ClearInputFunction />

## Expanded Reference: clear-input

### Basic Usage

`clear-input` clears any available input from an input stream, discarding buffered characters. It always returns `NIL`.

```lisp
(clear-input)
→ NIL
```

### With a Specific Stream

You can pass a specific input stream. For non-interactive streams such as string streams, `clear-input` does nothing meaningful.

```lisp
(with-input-from-string (s "hello")
  (clear-input s))
→ NIL
```

### Typical Use Case

`clear-input` is most useful with interactive streams (such as `*standard-input*`) to discard any type-ahead input before prompting the user.

```lisp
;; Pattern for interactive input:
;; (clear-input *standard-input*)
;; (format t "Enter value: ")
;; (read *standard-input*)
```

### Always Returns NIL

Regardless of the stream or its state, the return value is always `NIL`.

```lisp
(let ((s (make-string-input-stream "data")))
  (read-char s)
  (clear-input s))
→ NIL
```
