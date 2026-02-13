---
title: "copy-readtable"
---

# copy-readtable

import CopyReadtableFunction from './_copy-readtable_function.md';

<CopyReadtableFunction />

## Expanded Reference: copy-readtable

### Creating a fresh copy of the current readtable

With no arguments, `copy-readtable` copies the current readtable (`*readtable*`) into a new readtable object.

```lisp
(let ((rt (copy-readtable)))
  (readtablep rt))
; => T

;; The copy is a distinct object
(let ((rt (copy-readtable)))
  (eq rt *readtable*))
; => NIL
```

### Getting a fresh standard readtable

Passing `nil` as the first argument copies the standard readtable. This is the standard way to reset to default Common Lisp read syntax.

```lisp
(let ((*readtable* (copy-readtable nil)))
  (readtable-case *readtable*))
; => :UPCASE
```

### Restoring the standard readtable after modifications

If you have modified the current readtable and want to revert to standard syntax, use `(copy-readtable nil)`.

```lisp
(let ((*readtable* (copy-readtable)))
  ;; Modify the readtable
  (set-macro-character #\! (lambda (s c) (declare (ignore s c)) 'bang))
  ;; Now restore standard syntax
  (setf *readtable* (copy-readtable nil))
  ;; The ! modification is gone; ! is a normal constituent again
  (with-input-from-string (s "hello")
    (read s)))
; => HELLO
```

### Copying into an existing readtable

When a second argument is provided, `copy-readtable` modifies and returns that readtable instead of creating a new one.

```lisp
(let ((rt1 (copy-readtable))
      (rt2 (copy-readtable)))
  (set-macro-character #\! (lambda (s c) (declare (ignore s c)) 'bang) nil rt1)
  ;; Copy rt1 into rt2
  (copy-readtable rt1 rt2)
  ;; rt2 now has the same macro character definitions as rt1
  (eq (get-macro-character #\! rt2)
      (get-macro-character #\! rt1)))
; => T
```

### Isolating readtable modifications with LET

A common pattern is to locally bind `*readtable*` to a copy so that modifications do not affect the caller.

```lisp
(defun read-with-custom-syntax (string)
  (let ((*readtable* (copy-readtable)))
    (set-macro-character #\! (lambda (s c)
                               (declare (ignore c))
                               (list 'not (read s t nil t))))
    (read-from-string string)))

(read-with-custom-syntax "!foo")
; => (NOT FOO)
; => 4

;; The original readtable is unaffected
(with-input-from-string (s "!test")
  (read s))
; => !TEST   ; ! is still a normal constituent
```
