---
title: "file-write-date"
---

# file-write-date

import FileWriteDateFunction from './_file-write-date_function.md';

<FileWriteDateFunction />

## Expanded Reference: file-write-date

### Getting the modification time of a file

`file-write-date` returns the time a file was last written as a universal time, or nil if it cannot be determined.

```lisp
(with-open-file (s "/tmp/cl-fwd-test.txt" :direction :output
                   :if-exists :supersede)
  (write-string "test data" s))

(file-write-date "/tmp/cl-fwd-test.txt")
→ 3952684800  ; a universal time; implementation-dependent
```

### Decoding the write date

The returned universal time can be decoded with `decode-universal-time` to get human-readable date components.

```lisp
(let ((date (file-write-date "/tmp/cl-fwd-test.txt")))
  (when date
    (multiple-value-bind (sec min hour day month year)
        (decode-universal-time date)
      (format nil "~4D-~2,'0D-~2,'0D ~2,'0D:~2,'0D:~2,'0D"
              year month day hour min sec))))
→ "2025-04-15 10:30:00"  ; example; actual value depends on when file was written
```

### Comparing file dates

`file-write-date` is useful for determining which of two files is newer.

```lisp
(let ((date1 (file-write-date "/tmp/cl-fwd-test.txt"))
      (date2 (file-write-date "/tmp/cl-fwd-test.txt")))
  (when (and date1 date2)
    (= date1 date2)))
→ T  ; same file, same date
```

### Accepts streams and pathnames

Like other file functions, it accepts strings, pathnames, and streams.

```lisp
(with-open-file (s "/tmp/cl-fwd-test.txt")
  (integerp (file-write-date s)))
→ T
```
