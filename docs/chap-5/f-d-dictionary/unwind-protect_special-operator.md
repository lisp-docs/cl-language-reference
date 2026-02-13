---
title: "unwind-protect"
---

# unwind-protect

import UnwindProtectSpecialOperator from './_unwind-protect_special-operator.md';

<UnwindProtectSpecialOperator />

## Expanded Reference: unwind-protect

### Basic guaranteed cleanup

`unwind-protect` guarantees that the cleanup forms are executed regardless of whether the protected form exits normally or via a non-local transfer of control. The return value is that of the protected form.

```lisp
(unwind-protect
    (progn
      (print "doing work")
      42)
  (print "cleanup"))
; >> "doing work"
; >> "cleanup"
; => 42
```

### Cleanup runs even when an exit occurs

The cleanup forms run even when `throw`, `return-from`, or other non-local exits interrupt the protected form.

```lisp
(catch 'bail
  (unwind-protect
      (throw 'bail :aborted)
    (print "cleanup still runs")))
; >> "cleanup still runs"
; => :ABORTED
```

### Resource management pattern

`unwind-protect` is commonly used to ensure resources are released, similar to try/finally in other languages. The built-in macro `with-open-file` is built on this pattern.

```lisp
(let ((stream (open "/tmp/test.txt" :direction :output :if-exists :supersede)))
  (unwind-protect
      (format stream "Hello, world!~%")
    (when stream
      (close stream))))
; => NIL
```

### Protecting state changes

Use `unwind-protect` to restore state even if an error or exit occurs.

```lisp
(defparameter *verbose* nil)

(defun with-verbose (thunk)
  (let ((old *verbose*))
    (unwind-protect
        (progn
          (setf *verbose* t)
          (funcall thunk))
      (setf *verbose* old))))

(with-verbose (lambda () *verbose*))
; => T

*verbose*
; => NIL
```

### Multiple cleanup forms

Multiple cleanup forms are evaluated in order, like an implicit `progn`, but their return values are discarded. The return value of `unwind-protect` comes only from the protected form.

```lisp
(unwind-protect
    :result
  (print "first cleanup")
  (print "second cleanup")
  (print "third cleanup"))
; >> "first cleanup"
; >> "second cleanup"
; >> "third cleanup"
; => :RESULT
```

### Cleanup forms are not protected from each other

The cleanup forms are not themselves protected by the same `unwind-protect`. If a non-local exit occurs during cleanup, remaining cleanup forms are skipped.

```lisp
(block nil
  (unwind-protect
      (return 1)
    (return 2)))
; => 2
```

In this example, the `return 2` in the cleanup form overrides the `return 1` from the protected form.
