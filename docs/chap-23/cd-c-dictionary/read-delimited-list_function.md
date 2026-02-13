---
title: "read-delimited-list"
---

# read-delimited-list

import ReadDelimitedListFunction from './_read-delimited-list_function.md';

<ReadDelimitedListFunction />

## Expanded Reference: read-delimited-list

### Basic usage in a reader macro

`read-delimited-list` reads objects from a stream until a specified delimiter character is encountered, returning them as a list. It is primarily intended for use inside reader macro functions.

```lisp
;; Define a reader macro for curly braces: {a b c} => (a b c)
(let ((*readtable* (copy-readtable)))
  (set-macro-character #\} (get-macro-character #\)))  ; make } a terminating macro
  (set-macro-character #\{
    (lambda (stream char)
      (declare (ignore char))
      (read-delimited-list #\} stream t)))
  (with-input-from-string (s "{1 2 3}")
    (read s)))
; => (1 2 3)
```

### Implementing a set literal reader macro

`read-delimited-list` handles whitespace and nested objects automatically, making it useful for custom syntax.

```lisp
;; Define #{...} to read a list and remove duplicates
(let ((*readtable* (copy-readtable)))
  (set-macro-character #\} (get-macro-character #\)))
  (set-dispatch-macro-character #\# #\{
    (lambda (stream sub-char arg)
      (declare (ignore sub-char arg))
      (remove-duplicates (read-delimited-list #\} stream t))))
  (with-input-from-string (s "#{1 2 3 2 1}")
    (read s)))
; => (3 2 1)  ; order may vary based on remove-duplicates behavior
```

### Nested structures are handled

`read-delimited-list` calls `read` for each element, so nested parenthesized forms and other reader syntax work normally.

```lisp
(let ((*readtable* (copy-readtable)))
  (set-macro-character #\} (get-macro-character #\)))
  (set-macro-character #\{
    (lambda (stream char)
      (declare (ignore char))
      (read-delimited-list #\} stream t)))
  (with-input-from-string (s "{(a b) \"hello\" 42}")
    (read s)))
; => ((A B) "hello" 42)
```

### Important: the delimiter must be a terminating macro character

The delimiter character must be set up as a terminating macro character, otherwise it will be treated as a constituent and parsed as part of a symbol. Giving it the same definition as `)` is a common approach.

```lisp
;; Without making ] a macro character, it would be parsed as part of symbols.
;; This setup works correctly:
(let ((*readtable* (copy-readtable)))
  (set-macro-character #\] (get-macro-character #\)))
  (set-macro-character #\[
    (lambda (stream char)
      (declare (ignore char))
      (coerce (read-delimited-list #\] stream t) 'vector)))
  (with-input-from-string (s "[10 20 30]")
    (read s)))
; => #(10 20 30)
```
