---
title: "debugger-hook"
---

# \*debugger-hook\*

import DebuggerHookVariable from './_debugger-hook_variable.md';

<DebuggerHookVariable />

## Expanded Reference: \*debugger-hook\*

### Default Value

`*debugger-hook*` is `nil` by default, meaning the standard debugger is used.

```lisp
*debugger-hook*

=> NIL
```

### Installing a Custom Debugger Hook

When `*debugger-hook*` is non-nil, it should be a function of two arguments: the condition and the previous value of `*debugger-hook*`. It is called by `invoke-debugger` before entering the standard debugger.

```lisp
;; A hook that prints the condition and aborts instead of entering the debugger
(let ((*debugger-hook*
       (lambda (condition old-hook)
         (declare (ignore old-hook))
         (format t "Hook caught: ~A~%" condition)
         (abort))))
  ;; In a real session, (error "test") would invoke this hook.
  ;; The hook must either handle the condition (transfer control)
  ;; or return normally to enter the standard debugger.
  *debugger-hook*)
```

### Automatic NIL Binding

When `invoke-debugger` calls the hook function, it binds `*debugger-hook*` to `nil` first. This prevents infinite recursion if the hook itself signals an error.

```lisp
;; Inside the hook, *debugger-hook* is nil:
;; (let ((*debugger-hook*
;;        (lambda (condition old-hook)
;;          (declare (ignore condition old-hook))
;;          ;; Here, *debugger-hook* is NIL
;;          (format t "hook is nil: ~A~%" *debugger-hook*)
;;          (abort))))
;;   (error "test"))
```

### Re-binding the Hook for Recursive Errors

The hook's second argument is the previous value. You can rebind `*debugger-hook*` to it if you want recursive errors to use the same hook.

```lisp
;; (let ((*debugger-hook*
;;        (lambda (condition old-hook)
;;          (format t "Handling: ~A~%" condition)
;;          (let ((*debugger-hook* old-hook))
;;            ;; Now recursive errors also go through the hook
;;            (abort)))))
;;   (error "test"))
```
