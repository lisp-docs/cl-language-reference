---
title: "ignore-errors"
---

# ignore-errors

import IgnoreErrorsMacro from './_ignore-errors_macro.md';

<IgnoreErrorsMacro />

## Expanded Reference: ignore-errors

### Basic Error Suppression

`ignore-errors` evaluates its body forms. If an error is signaled, instead of entering the debugger, it returns two values: `nil` and the condition object.

```lisp
(ignore-errors (/ 1 0))
=> NIL
==> #<DIVISION-BY-ZERO {00000000}>
```

### Normal Return

When no error is signaled, `ignore-errors` returns the values of the last form.

```lisp
(ignore-errors (+ 1 2))

=> 3
```

### Distinguishing Success from Error

By convention, the second return value is the condition object when an error occurs. You can use `multiple-value-bind` to distinguish the two cases.

```lisp
(multiple-value-bind (result condition)
    (ignore-errors (parse-integer "abc"))
  (if condition
      (format nil "Error: ~A" condition)
      (format nil "Result: ~A" result)))

=> "Error: ..."
```

### Only Catches error Conditions

`ignore-errors` only catches conditions of type `error`. Warnings and other conditions pass through.

```lisp
(ignore-errors (+ 3 4))

=> 7
```

```lisp
;; Warnings are not caught by ignore-errors
(ignore-errors
  (warn "just a warning")
  :done)
```

```
WARNING: just a warning

=> :DONE
```

### Practical Example: Safe File Operation

```lisp
(defun file-size-or-nil (pathname)
  "Return the file size, or nil if the file cannot be accessed."
  (ignore-errors
    (with-open-file (s pathname :direction :input)
      (file-length s))))

;; When the file does not exist:
(file-size-or-nil "/nonexistent/file.txt")
=> NIL
==> #<FILE-ERROR {00000000}>
```

### Equivalent to handler-case

`ignore-errors` is a convenience macro. It is equivalent to:

```lisp
(handler-case (progn (/ 10 2))
  (error (c) (values nil c)))

=> 5
```
