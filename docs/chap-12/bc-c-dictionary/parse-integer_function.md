---
title: "parse-integer"
---

# parse-integer

import ParseIntegerFunction from './_parse-integer_function.md';

<ParseIntegerFunction />

## Expanded Reference: parse-integer

### Basic integer parsing

`parse-integer` parses a string and returns two values: the integer and the position where parsing stopped.

```lisp
(parse-integer "123") ; → 123, 3
(parse-integer "456") ; → 456, 3
(parse-integer "-42") ; → -42, 3
(parse-integer "+99") ; → 99, 3
```

### Specifying start and end positions

The `:start` and `:end` keyword arguments select a substring to parse.

```lisp
(parse-integer "hello123world" :start 5 :end 8) ; → 123, 8
(parse-integer "123" :start 1) ; → 23, 3
(parse-integer "00042" :start 3) ; → 42, 5
```

### Parsing with a different radix

The `:radix` keyword specifies the base. The default is 10.

```lisp
(parse-integer "FF" :radix 16) ; → 255, 2
(parse-integer "111" :radix 2) ; → 7, 3
(parse-integer "77" :radix 8) ; → 63, 2
(parse-integer "123" :start 1 :radix 5) ; → 13, 3
```

### Allowing junk in the string

By default, non-numeric characters cause an error. Use `:junk-allowed t` to tolerate trailing junk.

```lisp
(parse-integer "123abc" :junk-allowed t) ; → 123, 3
(parse-integer "no-integer" :junk-allowed t) ; → NIL, 0
(parse-integer "  42  " :junk-allowed t) ; → 42, 4
```

### Whitespace handling

Leading and trailing whitespace is ignored (when no junk is present).

```lisp
(parse-integer "  123  ") ; → 123, 7
(parse-integer "   -7   ") ; → -7, 9
```

### Practical use: reading numbers from user input

`parse-integer` is commonly used to convert string input to integers.

```lisp
(defun read-number (prompt default)
  (format t "~A [~A]: " prompt default)
  (let ((input (read-line)))
    (if (string= input "")
        default
        (or (parse-integer input :junk-allowed t)
            default))))
```
