---
title: "streamp"
---

# streamp

import StreampFunction from './_streamp_function.md';

<StreampFunction />

## Expanded Reference: streamp

### Basic Usage

`streamp` returns true if its argument is a stream; otherwise returns false.

```lisp
(streamp *standard-input*)
=> T
```

### Non-Stream Objects

Non-stream objects return false.

```lisp
(streamp 42)
=> NIL

(streamp "hello")
=> NIL

(streamp nil)
=> NIL
```

### Various Stream Types

All kinds of streams satisfy `streamp`.

```lisp
(streamp (make-string-input-stream "test"))
=> T

(streamp (make-string-output-stream))
=> T

(streamp (make-broadcast-stream))
=> T
```

### Closed Streams

`streamp` returns true even for closed streams.

```lisp
(let ((s (make-string-output-stream)))
  (close s)
  (streamp s))
=> T
```
