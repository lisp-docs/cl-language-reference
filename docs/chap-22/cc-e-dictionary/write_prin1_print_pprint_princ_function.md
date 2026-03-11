---
title: "write, prin1, print, pprint, princ"
---

# write, prin1, print, pprint, princ

import WriteFunction from './_write_prin1_print_pprint_princ_function.md';

<WriteFunction />

## Expanded Reference: write, prin1, print, pprint, princ

### Basic Usage of write

`write` is the most general output function. It accepts keyword arguments that correspond to printer control variables.

```lisp
;; write returns the object and prints to *standard-output*
(write 42)
.. 42
=> 42

;; Using keyword arguments to control printing
(write 255 :base 16 :radix t)
.. #xFF
=> 255
```

### prin1 -- Readable Output

`prin1` prints an object so it can be read back by `read`. It binds `*print-escape*` to true.

```lisp
(prin1 "hello")
.. "hello"
=> "hello"

(prin1 'foo)
.. FOO
=> FOO

;; Strings include quotes, characters include #\ prefix
(prin1-to-string #\Space)
=> "#\\ "
```

### princ -- Human-Readable Output

`princ` prints without escape characters. It binds `*print-escape*` to false and `*print-readably*` to false.

```lisp
(princ "hello")
.. hello
=> "hello"

(princ 'foo)
.. FOO
=> FOO

;; Compare prin1 vs princ for strings
(prin1-to-string "hello")
=> "\"hello\""

(princ-to-string "hello")
=> "hello"
```

### print -- Readable Output with Newline and Space

`print` outputs a newline before and a space after the object. Like `prin1`, it uses escape characters.

```lisp
;; print outputs: newline, then object, then space
(progn (print 42) (print 43) nil)
;; ..
;; .. 42
;; .. 43
;; => NIL
```

### pprint -- Pretty-Printed Output

`pprint` is like `print` but uses the pretty printer and does not add a trailing space. Returns no values.

```lisp
(pprint '(defun factorial (n)
           (if (<= n 1)
               1
               (* n (factorial (1- n))))))
..
.. (DEFUN FACTORIAL (N)
..   (IF (<= N 1)
..       1
..       (* N (FACTORIAL (1- N)))))
=> ; No value
```

```lisp
;; write with :pretty t is equivalent to pprint
(write '(let ((a 1) (b 2) (c 3)) (+ a b c)) :pretty t)
.. (LET ((A 1) (B 2) (C 3))
..   (+ A B C))
=> (LET ((A 1) (B 2) (C 3)) (+ A B C))
```

### write with Multiple Keyword Arguments

```lisp
;; Combine multiple print-control settings
(write '(a b c) :pretty nil :case :downcase)
.. (a b c)
=> (A B C)

(write 42 :base 2 :radix t)
.. #b101010
=> 42
```
