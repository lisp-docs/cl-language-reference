---
title: "room"
---

# room

import RoomFunction from './_room_function.md';

<RoomFunction />

## Expanded Reference: room

### Displaying memory usage information

`room` prints information about the state of internal storage and its management. The format is implementation-dependent.

```lisp
(room)
; Dynamic space usage:   ...
; Read-only space usage: ...
; ...
=> ; no useful return value
```

### Verbosity levels

`room` accepts an optional argument controlling the amount of detail: `:default`, `t` (verbose), or `nil` (brief).

```lisp
;; Brief summary
(room nil)
;; prints brief memory statistics (implementation-dependent)
;; => ; no useful return value

;; Detailed breakdown
(room t)
;; prints detailed per-type memory statistics
;; => ; no useful return value

;; Default level of detail
(room :default)
;; => ; no useful return value
```

### Using room for memory profiling

`room` is useful during development to check how much memory is being consumed.

```lisp
;; Check memory before and after allocating a large structure
(room nil)
(defparameter *big-list* (make-list 1000000))
(room nil)
; Compare the output to see memory impact
=> ; no useful return value
```
