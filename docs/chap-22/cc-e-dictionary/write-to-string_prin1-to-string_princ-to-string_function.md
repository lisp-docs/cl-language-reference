---
title: "write-to-string, prin1-to-string, princ-to-string"
---

# write-to-string, prin1-to-string, princ-to-string

import WriteToStringFunction from './_write-to-string_prin1-to-string_princ-to-string_function.md';

<WriteToStringFunction />

## Expanded Reference: write-to-string, prin1-to-string, princ-to-string

### Basic write-to-string

`write-to-string` returns a string containing the printed representation of an object. It accepts the same keyword arguments as `write`.

```lisp
(write-to-string 42)
; => "42"

(write-to-string '(a b c))
; => "(A B C)"

;; With keyword arguments
(write-to-string 255 :base 16 :radix t)
; => "#xFF"

(write-to-string 'hello :case :downcase)
; => "hello"
```

### prin1-to-string -- Readable String Representation

`prin1-to-string` produces output suitable for `read`, with escape characters where appropriate.

```lisp
(prin1-to-string "abc")
; => "\"abc\""

(prin1-to-string 'hello)
; => "HELLO"

(prin1-to-string #\Space)
; => "#\\Space"

(prin1-to-string '(1 "two" three))
; => "(1 \"two\" THREE)"
```

### princ-to-string -- Human-Readable String Representation

`princ-to-string` produces output intended for human consumption, without escape characters.

```lisp
(princ-to-string "abc")
; => "abc"

(princ-to-string 'hello)
; => "HELLO"

(princ-to-string #\Space)
; => " "

(princ-to-string '(1 "two" three))
; => "(1 two THREE)"
```

### Comparing All Three

```lisp
;; A string containing a quote character
(let ((obj "He said \"hi\""))
  (list (write-to-string obj :escape t)
        (prin1-to-string obj)
        (princ-to-string obj)))
; => ("\"He said \\\"hi\\\"\"" "\"He said \\\"hi\\\"\"" "He said \"hi\"")

;; write-to-string with custom settings
(write-to-string '(a b c d e f) :pretty nil :length 3)
; => "(A B C ...)"
```
