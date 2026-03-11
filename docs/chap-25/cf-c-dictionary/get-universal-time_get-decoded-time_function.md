---
title: "get-universal-time, get-decoded-time"
---

# get-universal-time, get-decoded-time

import GetUniversalTimeFunction from './_get-universal-time_get-decoded-time_function.md';

<GetUniversalTimeFunction />

## Expanded Reference: get-universal-time, get-decoded-time

### Getting the current time as a universal time

`get-universal-time` returns the current time as a single non-negative integer (seconds since midnight January 1, 1900 GMT).

```lisp
(integerp (get-universal-time))
=> T

(> (get-universal-time) 0)
=> T
```

### Getting the current time as decoded values

`get-decoded-time` returns the current time as nine values: second, minute, hour, date, month, year, day-of-week, daylight-saving-time-p, and time-zone.

```lisp
(multiple-value-bind (sec min hour day month year dow dst tz)
    (get-decoded-time)
  (stringp (format nil "~4D-~2,'0D-~2,'0D ~2,'0D:~2,'0D:~2,'0D"
                   year month day hour min sec)))
;; => T
```

### Relationship between the two functions

`get-decoded-time` is equivalent to calling `decode-universal-time` on the result of `get-universal-time`.

```lisp
;; These are equivalent (modulo time passing between calls):
;; (get-decoded-time)
;; (decode-universal-time (get-universal-time))
```

### Using universal time for timestamps

Universal time is useful for recording timestamps in a compact format.

```lisp
(let ((start (get-universal-time)))
  (sleep 1)
  (let ((elapsed (- (get-universal-time) start)))
    (>= elapsed 1)))
=> T
```
