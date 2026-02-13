---
title: "invoke-debugger"
---

# invoke-debugger

import InvokeDebuggerFunction from './_invoke-debugger_function.md';

<InvokeDebuggerFunction />

## Expanded Reference: invoke-debugger

### Purpose of invoke-debugger

`invoke-debugger` enters the debugger with a given condition. Unlike `error`, it does not signal the condition through the handler chain first. It goes directly to the debugger (or to the `*debugger-hook*` function).

### Using invoke-debugger to Force Debugger Entry

Even when handlers would normally intercept a condition, `invoke-debugger` bypasses them.

```lisp
;; Normally ignore-errors would prevent debugger entry, but
;; invoke-debugger overrides that:
;;
;; (ignore-errors
;;   (handler-bind ((error #'invoke-debugger))
;;     (error "Foo.")))
;; => enters the debugger despite ignore-errors
```

### The *debugger-hook* Protocol

Before entering the standard debugger, `invoke-debugger` checks `*debugger-hook*`. If non-nil, the hook function is called with the condition and the previous value of `*debugger-hook*` (which is bound to `nil` during the call to prevent recursion).

```lisp
(let ((*debugger-hook*
       (lambda (condition hook)
         (declare (ignore hook))
         (format t "Custom debugger: ~A~%" condition)
         (abort))))
  (handler-case
      (invoke-debugger (make-condition 'simple-error
                                       :format-control "test error"))
    (control-error () :aborted)))
```

```
Custom debugger: test error
```

### invoke-debugger Never Returns Normally

`invoke-debugger` does not return. The only way to leave it is through a non-local transfer of control, such as invoking a restart.

```lisp
;; (invoke-debugger (make-condition 'simple-condition
;;                                   :format-control "Debug me"))
;; => enters debugger; does not return unless a restart transfers control
```
