---
title: "get-output-stream-string"
---

# get-output-stream-string

import GetOutputStreamStringFunction from './_get-output-stream-string_function.md';

<GetOutputStreamStringFunction />

## Expanded Reference: get-output-stream-string

### Basic Usage

`get-output-stream-string` returns a string containing all characters written to a string output stream created by `make-string-output-stream`.

```lisp
(let ((s (make-string-output-stream)))
  (write-string "abcdefghijklm" s)
  (get-output-stream-string s))
→ "abcdefghijklm"
```

### Clearing Behavior

Each call to `get-output-stream-string` clears the accumulated characters, so subsequent calls only return what was written after the previous retrieval.

```lisp
(let ((s (make-string-output-stream)))
  (write-string "first" s)
  (let ((r1 (get-output-stream-string s)))
    (write-string "second" s)
    (let ((r2 (get-output-stream-string s)))
      (let ((r3 (get-output-stream-string s)))
        (list r1 r2 r3)))))
→ ("first" "second" "")
```

### Collecting Formatted Output

Useful for building strings incrementally with various output operations.

```lisp
(let ((s (make-string-output-stream)))
  (princ 42 s)
  (write-char #\Space s)
  (princ "is the answer" s)
  (get-output-stream-string s))
→ "42 is the answer"
```

### Accumulating Output in a Loop

A common pattern is writing to a string stream in a loop, then extracting the result.

```lisp
(let ((s (make-string-output-stream)))
  (dolist (word '("Common" "Lisp" "is" "great"))
    (write-string word s)
    (write-char #\Space s))
  (string-trim " " (get-output-stream-string s)))
→ "Common Lisp is great"
```
