---
title: "decode-universal-time"
---

# decode-universal-time

import DecodeUniversalTimeFunction from './_decode-universal-time_function.md';

<DecodeUniversalTimeFunction />

## Expanded Reference: decode-universal-time

### Decoding a universal time into components

`decode-universal-time` converts a universal time integer into nine values: second, minute, hour, date, month, year, day-of-week, daylight-saving-time-p, and time-zone.

```lisp
(multiple-value-bind (sec min hour date month year dow)
    (decode-universal-time 0 0)
  (list sec min hour date month year dow))
=> (0 0 0 1 1 1900 0)
```

### Decoding the current time

Combined with `get-universal-time`, you can decode the current time.

```lisp
(multiple-value-bind (sec min hour day month year)
    (decode-universal-time (get-universal-time))
  (stringp (format nil "~4D-~2,'0D-~2,'0D ~2,'0D:~2,'0D:~2,'0D"
                   year month day hour min sec)))
;; => T
```

### Specifying a time zone

The optional second argument specifies a time zone (hours west of Greenwich). Without it, the local time zone is used.

```lisp
;; Decode in UTC (time zone 0)
(multiple-value-bind (sec min hour day month year)
    (decode-universal-time (encode-universal-time 0 0 12 15 4 2025 0) 0)
  (list year month day hour min sec))
=> (2025 4 15 12 0 0)

;; Decode in US Eastern time (zone 5)
(multiple-value-bind (sec min hour day month year)
    (decode-universal-time (encode-universal-time 0 0 12 15 4 2025 0) 5)
  (list year month day hour min sec))
=> (2025 4 15 7 0 0)
```

### Day-of-week encoding

The day-of-week value is an integer: 0 for Monday through 6 for Sunday.

```lisp
(nth-value 6 (decode-universal-time
               (encode-universal-time 0 0 12 15 4 2025 0)))
=> 1
```
