---
title: "format"
---

# format

import FormatFunction from './_format_function.md';

<FormatFunction />

## Expanded Reference: format

### Basic String Output

`format` with `nil` as the destination returns a string. With `t`, it prints to `*standard-output*`.

```lisp
;; Return a formatted string
(format nil "Hello, ~A!" "world")
; => "Hello, world!"

;; Print to standard output (returns NIL)
(format t "Hello, ~A!~%" "world")
; >> Hello, world!
; => NIL
```

### Common Directives: ~A, ~S, ~D, ~F

`~A` prints aesthetically (like `princ`), `~S` prints readably (like `prin1`), `~D` prints integers in decimal, and `~F` prints floating-point numbers.

```lisp
(format nil "Name: ~A, Symbol: ~S, Count: ~D" "Alice" :hello 42)
; => "Name: Alice, Symbol: :HELLO, Count: 42"

(format nil "Pi is approximately ~F" 3.14159)
; => "Pi is approximately 3.14159"

(format nil "~5D" 42)
; => "   42"

(format nil "~5,'0D" 42)
; => "00042"
```

### Padding and Alignment with ~A and ~S

Use column width and padding parameters to align output.

```lisp
(format nil "|~10A|" "hello")
; => "|hello     |"

(format nil "|~10@A|" "hello")
; => "|     hello|"

(format nil "|~10,,,'*A|" "hi")
; => "|hi********|"
```

### Radix and Number Formatting

`~B` for binary, `~O` for octal, `~X` for hexadecimal, and `~R` for general radix or English words.

```lisp
(format nil "Binary: ~B, Octal: ~O, Hex: ~X" 255 255 255)
; => "Binary: 11111111, Octal: 377, Hex: FF"

(format nil "~R" 42)
; => "forty-two"

(format nil "~:R" 3)
; => "third"
```

### Iteration with ~\{ and ~\}

`~{...~}` iterates over a list, applying the enclosed directives to each element.

```lisp
(format nil "Items: ~{~A~^, ~}" '("apple" "banana" "cherry"))
; => "Items: apple, banana, cherry"

(format nil "~{(~A ~A)~^ ~}" '("a" 1 "b" 2 "c" 3))
; => "(a 1) (b 2) (c 3)"
```

### Conditional Expressions with ~\[, ~;, ~\]

`~[...~;...~]` selects output based on an integer argument. `~:[...~;...~]` provides boolean if-else.

```lisp
;; Boolean conditional: ~:[ picks false-branch ~; true-branch ~]
(format nil "~:[no~;yes~]" t)
; => "yes"

(format nil "~:[no~;yes~]" nil)
; => "no"

;; Numeric selection (0-indexed)
(format nil "~[zero~;one~;two~;other~]" 1)
; => "one"
```

### Freshline, Newline, and Tilde

`~%` outputs a newline, `~&` outputs a freshline (newline only if not at start of line), and `~~` outputs a literal tilde.

```lisp
(format nil "Line 1~%Line 2~%Line 3")
; => "Line 1
; Line 2
; Line 3"

(format nil "100~~ complete")
; => "100~ complete"
```
