---
title: "with-input-from-string"
---

# with-input-from-string

import WithInputFromStringMacro from './_with-input-from-string_macro.md';

<WithInputFromStringMacro />

## Expanded Reference: with-input-from-string

### Basic Usage

`with-input-from-string` binds a variable to a string input stream and automatically closes it on exit.

```lisp
(with-input-from-string (s "hello world")
  (read s))
=> HELLO
```

### Reading Multiple Values

Multiple read operations can consume the entire string.

```lisp
(with-input-from-string (s "1 2 3 4 5")
  (list (read s) (read s) (read s)))
=> (1 2 3)
```

### Using :start and :end

The `:start` and `:end` keyword arguments restrict which portion of the string is available.

```lisp
(with-input-from-string (s "XXX1 2 3 4xxx"
                           :start 3 :end 10)
  (+ (read s) (read s) (read s)))
=> 6
```

### Tracking Position with :index

The `:index` keyword stores the position in the string where reading stopped.

```lisp
(let (ind)
  (with-input-from-string (s "Animal Crackers" :index ind :start 7)
    (read s))
  ind)
=> 15
```

### Character-Level Reading

Character-level operations work just as they do with any input stream.

```lisp
(with-input-from-string (s "abcdef")
  (list (read-char s)
        (read-char s)
        (peek-char nil s)
        (read-char s)))
=> (#\a #\b #\c #\c)
```

### Reading Lines

`read-line` can read line-delimited text from the string.

```lisp
(with-input-from-string (s (format nil "first~%second~%third"))
  (list (read-line s)
        (read-line s)
        (read-line s)))
=> ("first" "second" "third")
```
