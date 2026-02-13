---
title: "with-simple-restart"
---

# with-simple-restart

import WithSimpleRestartMacro from './_with-simple-restart_macro.md';

<WithSimpleRestartMacro />

## Expanded Reference: with-simple-restart

### Basic Usage

`with-simple-restart` establishes a restart. If the body completes normally, its values are returned. If the named restart is invoked, `with-simple-restart` returns `nil` and `t` (two values).

```lisp
(with-simple-restart (abort "Abort the computation.")
  (+ 1 2))
```

```lisp
→ 3
```

### Invoking the Restart

When the restart is invoked, the macro returns two values: `nil` and `t`. This distinguishes the restart path from a normal return.

```lisp
(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'skip))))
  (with-simple-restart (skip "Skip this step.")
    (error "Step failed")))
```

```lisp
→ NIL, T
```

### Distinguishing Normal vs. Restart Return

Use `multiple-value-bind` to detect whether the restart was taken.

```lisp
(defun try-operation ()
  (multiple-value-bind (result restarted-p)
      (with-simple-restart (skip "Skip the operation.")
        (error "Operation failed"))
    (if restarted-p
        :skipped
        result)))

(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'skip))))
  (try-operation))
```

```lisp
→ :SKIPPED
```

### Using with-simple-restart in a Loop

A practical pattern: wrapping each iteration in `with-simple-restart` so individual failures can be skipped.

```lisp
(defun process-items (items)
  (mapcar (lambda (item)
            (with-simple-restart (skip "Skip item ~A." item)
              (if (numberp item)
                  (* item 2)
                  (error "~S is not a number" item))))
          items))

(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'skip))))
  (process-items '(1 2 "bad" 4)))
```

```lisp
→ (2 4 NIL 8)
```

### Equivalent to restart-case

`with-simple-restart` is shorthand for a common `restart-case` pattern:

```lisp
;; These are equivalent:
;; (with-simple-restart (name "message") body)
;; is the same as:
;; (restart-case (progn body)
;;   (name () :report "message" (values nil t)))

(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'bail))))
  (restart-case (progn (error "fail"))
    (bail ()
      :report "Bail out."
      (values nil t))))
```

```lisp
→ NIL, T
```
