---
title: "read-from-string"
---

# read-from-string

import ReadFromStringFunction from './_read-from-string_function.md';

<ReadFromStringFunction />

## Expanded Reference: read-from-string

### Basic usage

`read-from-string` parses a Lisp object from a string and returns two values: the object read and the position in the string where reading stopped.

```lisp
(read-from-string "(a b c)")
=> (A B C)
=> 7

(read-from-string "42 rest-of-string")
=> 42
=> 3
```

### Using :start and :end to read a substring

The `:start` and `:end` keyword arguments select a substring to read from.

```lisp
(read-from-string " 1 3 5" t nil :start 2)
=> 3
=> 5

(read-from-string "xxxHELLOxxx" t nil :start 3 :end 8)
=> HELLO
=> 8
```

### Handling end-of-string

When the string contains no readable object (or is empty), the `eof-error-p` and `eof-value` arguments control the behavior.

```lisp
(read-from-string "" nil :no-more)
=> :NO-MORE
=> 0

(read-from-string "   " nil :empty)
=> :EMPTY
=> 3
```

### Reading multiple objects from a string

Use the returned position as the `:start` for the next call to read successive objects.

```lisp
(let ((str "(a b) (c d) (e f)"))
  (multiple-value-bind (obj1 pos1) (read-from-string str)
    (multiple-value-bind (obj2 pos2) (read-from-string str t nil :start pos1)
      (multiple-value-bind (obj3 pos3) (read-from-string str t nil :start pos2)
        (list obj1 obj2 obj3)))))
=> ((A B) (C D) (E F))
```

### Using :preserve-whitespace

When `preserve-whitespace` is true, the behavior is like `read-preserving-whitespace` -- trailing whitespace that terminates a token is not consumed. This can affect the returned position.

```lisp
(read-from-string "foo bar")
=> FOO
=> 4

(read-from-string "foo bar" t nil :preserve-whitespace t)
=> FOO
=> 3
```
