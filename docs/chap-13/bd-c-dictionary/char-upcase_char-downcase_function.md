---
title: "char-upcase, char-downcase"
---

# char-upcase, char-downcase

import CharUpcaseFunction from './_char-upcase_char-downcase_function.md';

<CharUpcaseFunction />

## Expanded Reference: char-upcase, char-downcase

### Converting letter case

`char-upcase` converts a lowercase letter to uppercase. `char-downcase` converts an uppercase letter to lowercase.

```lisp
(char-upcase #\a)
=> #\A
(char-upcase #\z)
=> #\Z
(char-downcase #\A)
=> #\a
(char-downcase #\Z)
=> #\z
```

### Characters without case are returned unchanged

Non-alphabetic characters and characters that are already the target case are returned as-is.

```lisp
(char-upcase #\A)
=> #\A
(char-downcase #\a)
=> #\a
(char-upcase #\5)
=> #\5
(char-downcase #\5)
=> #\5
(char-upcase #\@)
=> #\@
(char-downcase #\Space)
=> #\Space
```

### Case conversion round-trip

Converting up then down (or down then up) always returns to the original character for characters with case.

```lisp
(char-downcase (char-upcase #\a))
=> #\a
(char-upcase (char-downcase #\Z))
=> #\Z
(char-downcase (char-upcase #\5))
=> #\5
```

### Building a simple string case converter

`char-upcase` and `char-downcase` operate on individual characters. You can use them with `map` to convert entire strings.

```lisp
(map 'string #'char-upcase "Hello, World!")
=> "HELLO, WORLD!"

(map 'string #'char-downcase "Hello, World!")
=> "hello, world!"
```

### Swapping case of each character

```lisp
(defun swap-case (char)
  (cond ((upper-case-p char) (char-downcase char))
        ((lower-case-p char) (char-upcase char))
        (t char)))

(map 'string #'swap-case "Hello, World!")
=> "hELLO, wORLD!"
```
