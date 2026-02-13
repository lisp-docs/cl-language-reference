---
title: "restart-bind"
---

# restart-bind

import RestartBindMacro from './_restart-bind_macro.md';

<RestartBindMacro />

## Expanded Reference: restart-bind

### Basic Restart Binding

`restart-bind` establishes restarts in a dynamic environment. Unlike `restart-case`, the restart function is called in the dynamic environment of the `invoke-restart`, not after unwinding the stack.

```lisp
(restart-bind ((my-restart (lambda ()
                             :restarted)
                :report-function (lambda (stream)
                                  (write-string "Invoke my-restart" stream))))
  (invoke-restart 'my-restart))
```

```lisp
→ :RESTARTED
```

### Restart with Arguments

The restart function receives whatever arguments are passed to `invoke-restart`.

```lisp
(restart-bind ((use-value (lambda (v) v)
                :report-function (lambda (stream)
                                  (write-string "Use a provided value" stream))))
  (invoke-restart 'use-value 42))
```

```lisp
→ 42
```

### Restart Without Unwinding

A key difference from `restart-case`: the restart function in `restart-bind` executes without unwinding the stack. This means the restart can inspect the dynamic environment at the point of the error.

```lisp
(let ((log '()))
  (restart-bind ((log-and-continue
                  (lambda ()
                    (push :restart-invoked log))
                  :report-function (lambda (s)
                                    (write-string "Log and continue" s))))
    (push :before log)
    (invoke-restart 'log-and-continue)
    (push :after log))
  (nreverse log))
```

```lisp
→ (:BEFORE :RESTART-INVOKED :AFTER)
```

### Using restart-bind with handler-bind

`restart-bind` and `handler-bind` work well together for advanced condition handling without stack unwinding.

```lisp
(block done
  (handler-bind ((error (lambda (c)
                          (declare (ignore c))
                          (invoke-restart 'recover))))
    (restart-bind ((recover (lambda ()
                              (return-from done :recovered))
                    :report-function (lambda (s)
                                      (write-string "Recover from the error" s))))
      (error "Something failed"))))
```

```lisp
→ :RECOVERED
```

### Comparing restart-bind and restart-case

Most programs should prefer `restart-case` for its simpler syntax. Use `restart-bind` when you need the restart function to execute without unwinding, or when you need full control over the restart function as a closure.

```lisp
;; restart-case unwinds before executing the clause body
(handler-bind ((error (lambda (c)
                        (declare (ignore c))
                        (invoke-restart 'fix-it))))
  (restart-case (error "problem")
    (fix-it () :fixed)))
```

```lisp
→ :FIXED
```
