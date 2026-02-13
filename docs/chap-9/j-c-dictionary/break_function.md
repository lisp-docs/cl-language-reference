---
title: "break"
---

# break

import BreakFunction from './_break_function.md';

<BreakFunction />

## Expanded Reference: break

### Basic Break

`break` enters the debugger unconditionally. It bypasses all condition handlers -- it cannot be intercepted programmatically. When the `continue` restart is used, `break` returns `nil`.

```lisp
;; In a real REPL session:
;; (break "Stopping here to inspect state.")
;; would enter the debugger with the message and return NIL on continue.
```

### Break with a Format String

`break` accepts a format control string and arguments, like `format`.

```lisp
;; (break "Value of x is ~D, y is ~D" 10 20)
;; Enters the debugger showing: "Value of x is 10, y is 20"
;; Returns NIL when continued.
```

### Break Cannot Be Intercepted

Unlike `error` or `signal`, `break` is not affected by `handler-case` or `handler-bind`. This makes it suitable for debugging breakpoints that must always reach the debugger.

```lisp
;; handler-case does NOT intercept break:
;; (handler-case (break "debug")
;;   (condition () :caught))
;; This still enters the debugger. The handler-case clause is not invoked.
```

### Break Binds *debugger-hook* to NIL

`break` sets `*debugger-hook*` to `nil` before entering the debugger. This ensures the standard debugger is used, even if a custom debugger hook is installed.

```lisp
;; Even with a custom hook, break still uses the standard debugger:
;; (let ((*debugger-hook* #'my-custom-hook))
;;   (break "This uses the standard debugger"))
```

### Practical Use: Conditional Breakpoint

A common debugging pattern is to call `break` inside a conditional.

```lisp
(defun process-item (item)
  ;; Uncomment the next line to debug when item is negative:
  ;; (when (minusp item) (break "Negative item: ~S" item))
  (* item item))

(mapcar #'process-item '(1 2 3))
```

```lisp
→ (1 4 9)
```

### Equivalent Definition

`break` can be understood as being approximately equivalent to:

```lisp
;; (defun break (&optional (format-control "Break")
;;                         &rest format-arguments)
;;   (with-simple-restart (continue "Return from BREAK.")
;;     (let ((*debugger-hook* nil))
;;       (invoke-debugger
;;         (make-condition 'simple-condition
;;                         :format-control format-control
;;                         :format-arguments format-arguments))))
;;   nil)
```
