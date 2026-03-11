---
title: "write-char"
---

# write-char

import WriteCharFunction from './_write-char_function.md';

<WriteCharFunction />

## Expanded Reference: write-char

### Basic Usage

`write-char` writes a single character to an output stream and returns that character.

```lisp
(with-output-to-string (s)
  (write-char #\H s)
  (write-char #\i s))
=> "Hi"
```

### Return Value

`write-char` returns the character that was written.

```lisp
(with-output-to-string (s)
  (let ((result (write-char #\x s)))
    (write-char #\Space s)
    (prin1 result s)))
=> "x #\\x"
```

### Writing Special Characters

Any character can be written, including newlines and other whitespace.

```lisp
(with-output-to-string (s)
  (write-char #\A s)
  (write-char #\Newline s)
  (write-char #\B s))
=> "A
B"
```

### Building Strings Character by Character

```lisp
(with-output-to-string (s)
  (dolist (c '(#\C #\o #\m #\m #\o #\n #\Space #\L #\i #\s #\p))
    (write-char c s)))
=> "Common Lisp"
```
