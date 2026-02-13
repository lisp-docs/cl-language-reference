---
title: "encode-universal-time"
---

# encode-universal-time

import EncodeUniversalTimefunction from './_encode-universal-time_function.md';

<EncodeUniversalTimefunction />

## Expanded Reference: encode-universal-time

### Encoding time components into universal time

`encode-universal-time` converts individual time components into a universal time integer.

```lisp
;; Encode midnight January 1, 2000 UTC
(encode-universal-time 0 0 0 1 1 2000 0)
→ 3155673600
```

### Round-trip with decode-universal-time

Encoding and then decoding yields the original components.

```lisp
(multiple-value-bind (sec min hour day month year)
    (decode-universal-time
      (encode-universal-time 30 45 14 25 12 2024 0) 0)
  (list year month day hour min sec))
→ (2024 12 25 14 45 30)
```

### Using the local time zone

When the time-zone argument is omitted, the local time zone is assumed.

```lisp
;; Encode in local time
(integerp (encode-universal-time 0 0 12 1 6 2025))
→ T
```

### Encoding the epoch

Universal time 0 corresponds to midnight January 1, 1900 GMT.

```lisp
(encode-universal-time 0 0 0 1 1 1900 0)
→ 0
```

### Computing time differences

Universal times are integers, so you can compute differences directly.

```lisp
(let ((t1 (encode-universal-time 0 0 0 1 1 2025 0))
      (t2 (encode-universal-time 0 0 0 2 1 2025 0)))
  (/ (- t2 t1) 3600))
→ 24  ; 24 hours difference
```
