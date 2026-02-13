---
title: "tagbody"
---

# tagbody

import TagbodySpecialOperator from './_tagbody_special-operator.md';

<TagbodySpecialOperator />

## Expanded Reference: tagbody

### Basic control flow with tags and go

`tagbody` establishes a body of code containing tags (symbols or integers) and statements. The `go` special form transfers control to a tag. `tagbody` always returns `NIL`.

```lisp
(let ((x 0))
  (tagbody
   start
     (incf x)
     (when (< x 5)
       (go start)))
  x)
; => 5
```

### Implementing a simple loop with tagbody

`tagbody` and `go` are the primitive building blocks for iteration in Common Lisp. Higher-level constructs like `do` and `loop` are built on top of them.

```lisp
(let ((sum 0)
      (i 1))
  (tagbody
   loop
     (incf sum i)
     (incf i)
     (when (<= i 10)
       (go loop)))
  sum)
; => 55
```

### Jumping between multiple tags

Control can jump forward and backward to any tag in the same `tagbody`.

```lisp
(let (val)
  (tagbody
     (setq val 1)
     (go point-a)
     (incf val 16)
   point-c
     (incf val 4)
     (go point-b)
     (incf val 32)
   point-a
     (incf val 2)
     (go point-c)
     (incf val 64)
   point-b
     (incf val 8))
  val)
; => 15
```

### Tags can be symbols or integers

Both symbols and integers are valid as tags.

```lisp
(let ((x 0))
  (tagbody
   0
     (incf x)
     (when (< x 3)
       (go 0)))
  x)
; => 3
```

### tagbody always returns NIL

The return value of `tagbody` is always `NIL`, regardless of the forms evaluated within it. Use a surrounding `let` or `block` to capture values.

```lisp
(tagbody
  (print "hello")
  (print "world"))
; >> "hello"
; >> "world"
; => NIL
```

### Using go with a closure

A `go` tag has lexical scope, so a closure created within the `tagbody` can transfer control to one of its tags.

```lisp
(defun f1 (flag)
  (let ((n 1))
    (tagbody
       (setq n (f2 flag #'(lambda () (go out))))
     out
       (prin1 n))))

(defun f2 (flag escape)
  (if flag (funcall escape) 2))

(f1 nil)
; >> 2
; => NIL

(f1 t)
; >> 1
; => NIL
```
