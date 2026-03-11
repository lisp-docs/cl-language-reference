---
title: "with-output-to-string"
---

# with-output-to-string

import WithOutputToStringMacro from './_with-output-to-string_macro.md';

<WithOutputToStringMacro />

## Expanded Reference: with-output-to-string

### Basic Usage

`with-output-to-string` creates an output string stream, executes the body, then returns the accumulated string.

```lisp
(with-output-to-string (s)
  (write-string "hello" s)
  (write-char #\Space s)
  (write-string "world" s))
=> "hello world"
```

### Using with format

The stream variable can be used as a destination for `format`.

```lisp
(with-output-to-string (s)
  (format s "~D item~:P cost ~,2F total" 5 29.95))
=> "5 items cost 29.95 total"
```

### Capturing Output from Print Functions

All standard output functions work with the string stream.

```lisp
(with-output-to-string (s)
  (prin1 'hello s)
  (princ " " s)
  (prin1 42 s))
=> "HELLO 42"
```

### Writing to an Existing Adjustable String

When a string with a fill pointer is provided, output is appended to that string, and the return value is the values of the body forms.

```lisp
(let ((str (make-array 0 :element-type 'character
                         :fill-pointer 0
                         :adjustable t)))
  (with-output-to-string (s str)
    (format s "here's some output"))
  str)
=> "here's some output"
```

### Redirecting *standard-output*

A common idiom is to capture output that would normally go to `*standard-output*`.

```lisp
(with-output-to-string (*standard-output*)
  (princ "captured"))
=> "captured"
```
