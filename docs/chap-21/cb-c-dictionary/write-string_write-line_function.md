---
title: "write-string, write-line"
---

# write-string, write-line

import WriteStringFunction from './_write-string_write-line_function.md';

<WriteStringFunction />

## Expanded Reference: write-string, write-line

### Basic write-string

`write-string` writes characters from a string to an output stream. It returns the original string (not the substring).

```lisp
(with-output-to-string (s)
  (write-string "hello world" s))
→ "hello world"
```

### write-string with :start and :end

The `:start` and `:end` keyword arguments select a substring to write.

```lisp
(with-output-to-string (s)
  (write-string "bookworms" s :end 4))
→ "book"
```

### Basic write-line

`write-line` works like `write-string` but appends a newline after the string.

```lisp
(with-output-to-string (s)
  (write-line "first" s)
  (write-line "second" s))
→ "first
second
"
```

### Combining write-string and write-line

```lisp
(with-output-to-string (s)
  (write-string "Name: " s)
  (write-line "Alice" s)
  (write-string "Age: " s)
  (write-string "30" s))
→ "Name: Alice
Age: 30"
```

### Return Value

Both functions return the full original string, not the written substring.

```lisp
(with-output-to-string (s)
  (let ((result (write-string "bookworms" s :end 4)))
    (write-char #\Space s)
    (write-string result s)))
→ "book bookworms"
```
