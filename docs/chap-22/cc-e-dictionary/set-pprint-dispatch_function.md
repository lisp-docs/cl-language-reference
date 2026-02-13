---
title: "set-pprint-dispatch"
---

# set-pprint-dispatch

import SetPprintDispatchFunction from './_set-pprint-dispatch_function.md';

<SetPprintDispatchFunction />

## Expanded Reference: set-pprint-dispatch

### Basic Custom Pretty Printer

`set-pprint-dispatch` installs a function to pretty-print objects matching a given type specifier. The function receives the stream and the object.

```lisp
(let ((*print-pprint-dispatch* (copy-pprint-dispatch))
      (*print-pretty* t))
  (set-pprint-dispatch 'integer
    (lambda (stream obj)
      (format stream "<<~D>>" obj)))
  (write-to-string 42))
; => "<<42>>"
```

### Dispatching on Cons Cells

A common use is dispatching on the car of a list. The type specifier `(cons (eql SYMBOL))` matches lists starting with that symbol.

```lisp
(let ((*print-pprint-dispatch* (copy-pprint-dispatch))
      (*print-pretty* t))
  (set-pprint-dispatch '(cons (eql my-let))
    (lambda (stream list)
      (pprint-logical-block (stream list :prefix "(" :suffix ")")
        (write (pprint-pop) :stream stream)   ; MY-LET
        (write-char #\Space stream)
        (pprint-newline :miser stream)
        (write (pprint-pop) :stream stream)   ; bindings
        (pprint-indent :block 1 stream)
        (loop (pprint-exit-if-list-exhausted)
              (pprint-newline :mandatory stream)
              (write (pprint-pop) :stream stream)))))
  (write-to-string '(my-let ((a 1) (b 2)) (+ a b) (print a))))
; => "(MY-LET ((A 1) (B 2))
;  (+ A B)
;  (PRINT A))"
```

### Using Priority to Override

Higher priority entries take precedence when multiple type specifiers match.

```lisp
(let ((*print-pprint-dispatch* (copy-pprint-dispatch))
      (*print-pretty* t))
  (set-pprint-dispatch 'real
    (lambda (s obj) (format s "Real:~A" obj))
    0)
  (set-pprint-dispatch 'integer
    (lambda (s obj) (format s "Int:~A" obj))
    1)  ; higher priority
  (list (write-to-string 42)      ; matches both, integer wins
        (write-to-string 3.14)))  ; matches only real
; => ("Int:42" "Real:3.14")
```

### Removing an Entry

Pass nil as the function to remove a dispatch entry.

```lisp
(let ((*print-pprint-dispatch* (copy-pprint-dispatch))
      (*print-pretty* t))
  (set-pprint-dispatch 'integer
    (lambda (s obj) (format s "[~D]" obj)))
  (set-pprint-dispatch 'integer nil)  ; remove the entry
  (write-to-string 42))
; => "42"
```
