---
title: "interactive-stream-p"
---

# interactive-stream-p

import InteractiveStreamPFunction from './_interactive-stream-p_function.md';

<InteractiveStreamPFunction />

## Expanded Reference: interactive-stream-p

### Basic Usage

`interactive-stream-p` returns true if the stream is interactive (e.g., a terminal), false otherwise.

```lisp
;; String streams are not interactive
(interactive-stream-p (make-string-input-stream "test"))
=> NIL
```

### String Output Stream

```lisp
(interactive-stream-p (make-string-output-stream))
=> NIL
```

### Conditional Behavior Based on Interactivity

A common use is to vary behavior depending on whether the user is present at a terminal.

```lisp
;; Example pattern (not runnable as-is since it depends on the environment)
;; (if (interactive-stream-p *query-io*)
;;     (yes-or-no-p "Proceed?")
;;     t)  ; auto-accept in non-interactive mode
```

### Standard Streams

The result for `*standard-input*` or `*terminal-io*` depends on the implementation and the environment.

```lisp
;; In a REPL session, these would typically return T:
;; (interactive-stream-p *standard-input*) -> T
;; In a batch/script environment, they might return NIL.
```
