---
title: "read, read-preserving-whitespace"
---

# read, read-preserving-whitespace

import ReadFunction from './_read_read-preserving-whitespace_function.md';

<ReadFunction />

## Expanded Reference: read, read-preserving-whitespace

### Basic reading from a string stream

`read` parses a printed representation of a Lisp object from a stream and returns the corresponding object.

```lisp
(with-input-from-string (s "42")
  (read s))
; => 42

(with-input-from-string (s "(a b c)")
  (read s))
; => (A B C)

(with-input-from-string (s "#(1 2 3)")
  (read s))
; => #(1 2 3)
```

### Handling end-of-file

When `eof-error-p` is true (the default), reaching EOF signals an error. Set it to `nil` and provide an `eof-value` to handle EOF gracefully.

```lisp
(with-input-from-string (s "")
  (read s nil :eof))
; => :EOF

(with-input-from-string (s "hello")
  (list (read s nil :eof)
        (read s nil :eof)))
; => (HELLO :EOF)
```

### Reading multiple objects from a stream

You can call `read` repeatedly to consume successive objects from the same stream.

```lisp
(with-input-from-string (s "1 2 3")
  (list (read s) (read s) (read s)))
; => (1 2 3)

(with-input-from-string (s "'foo \"hello\" 3.14")
  (list (read s) (read s) (read s)))
; => ((QUOTE FOO) "hello" 3.14)
```

### read-preserving-whitespace

`read-preserving-whitespace` behaves like `read` except that it preserves any whitespace character that terminates a token. This is important inside reader macros that need to know exactly where a token ended.

```lisp
;; With read, the trailing space after the symbol is consumed
(with-input-from-string (s "abc def")
  (read s)
  (read-char s))
; => #\d

;; With read-preserving-whitespace, the space is preserved
(with-input-from-string (s "abc def")
  (read-preserving-whitespace s)
  (read-char s))
; => #\Space
```

### Reading with different readtable settings

`read` is affected by dynamic variables such as `*read-base*` and `*package*`.

```lisp
(let ((*read-base* 16))
  (with-input-from-string (s "FF")
    (read s)))
; => 255

(let ((*package* (find-package :keyword)))
  (with-input-from-string (s "foo")
    (read s)))
; => :FOO
```
