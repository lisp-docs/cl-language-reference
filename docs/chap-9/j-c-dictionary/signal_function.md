---
title: "signal"
---

# signal

import SignalFunction from './_signal_function.md';

<SignalFunction />

## Expanded Reference: signal

### Basic Signaling

`signal` signals a condition. If no handler handles it, `signal` returns `nil` rather than entering the debugger (unlike `error`).

```lisp
(signal "Something happened")

=> NIL
```

### Signaling a Custom Condition

You can signal custom condition types. Handlers established via `handler-bind` or `handler-case` can intercept them.

```lisp
(define-condition note (condition)
  ((text :initarg :text :reader note-text))
  (:report (lambda (c stream)
             (format stream "Note: ~A" (note-text c)))))

(handler-case
    (progn
      (signal 'note :text "Just an FYI")
      :normal-return)
  (note (c)
    (format nil "Handled: ~A" (note-text c))))

=> "Handled: Just an FYI"
```

### Unhandled Signals Return NIL

Unlike `error`, if no handler matches, execution continues normally.

```lisp
(define-condition my-condition (condition) ())

(progn
  (signal 'my-condition)
  :continued)

=> :CONTINUED
```

### Collecting Signaled Conditions with handler-bind

Since `handler-bind` does not unwind the stack, you can observe a signal and let it pass through.

```lisp
(let ((log '()))
  (handler-bind ((condition (lambda (c)
                              (push (format nil "~A" c) log))))
    (signal "event one")
    (signal "event two"))
  (nreverse log))

=> ("event one" "event two")
```

### Difference Between signal and error

`signal` is for conditions that may or may not be handled. `error` is for conditions that must be handled -- if not, it enters the debugger. This makes `signal` suitable for advisory or protocol-level conditions.

```lisp
;; signal returns NIL when unhandled
(signal "advisory notice")

=> NIL
```

```lisp
;; error would enter the debugger if unhandled
(handler-case (error "real problem")
  (error () :caught))

=> :CAUGHT
```
