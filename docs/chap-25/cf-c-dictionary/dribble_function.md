---
title: "dribble"
---

# dribble

import DribbleFunction from './_dribble_function.md';

<DribbleFunction />

## Expanded Reference: dribble

### Recording a session to a file

`dribble` with a pathname argument begins recording the interactive session (both input and output) to the specified file.

```lisp
;; Start recording the session
;; (dribble "/tmp/session-log.txt")
;; ... interact with the REPL ...
;; All input and output is recorded to the file.
```

### Stopping the recording

Calling `dribble` with no arguments stops the recording.

```lisp
;; Stop recording
;; (dribble)
;; The file /tmp/session-log.txt now contains the session transcript.
```

### Typical usage pattern

```lisp
;; (dribble "/tmp/debug-session.txt")
;; (defun test () (+ 1 2))
;; (test)
;; (dribble)
;; Now /tmp/debug-session.txt contains:
;;   > (defun test () (+ 1 2))
;;   TEST
;;   > (test)
;;   3
;; (exact format is implementation-dependent)
```

### Implementation-dependent behavior

The exact behavior of `dribble` is implementation-dependent. Some implementations may not support it, and the format of the recorded output varies.

```lisp
;; dribble returns implementation-dependent values
;; (dribble "/tmp/test.txt")
=> ; implementation-dependent
;; (dribble)
=> ; implementation-dependent
```
