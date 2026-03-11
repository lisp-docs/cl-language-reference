---
title: "go"
---

# go

import GoSpecialOperator from './_go_special-operator.md';

<GoSpecialOperator />

## Expanded Reference: go

### Basic control transfer within tagbody

`go` transfers control to a tag label within an enclosing `tagbody` form. Tags are symbols or integers that label positions in the body.

```lisp
(let ((result nil))
  (tagbody
     (push 'a result)
     (go skip)
     (push 'b result)   ; this is skipped
   skip
     (push 'c result))
  (nreverse result))
=> (A C)
```

### Building a simple loop with go

`go` and `tagbody` can be used to create loops. In practice, higher-level constructs like `do` and `loop` are preferred.

```lisp
(let ((i 0) (sum 0))
  (tagbody
   top
     (when (> i 5) (go end))
     (setq sum (+ sum i))
     (setq i (+ i 1))
     (go top)
   end)
  sum)
=> 15
```

### go within prog

`prog` establishes an implicit `tagbody`, so `go` can be used directly in a `prog` form.

```lisp
(prog ((x 0))
 start
   (if (>= x 5) (return x))
   (setq x (+ x 1))
   (go start))
=> 5
```

### Tags can be integers

Go tags can be integers as well as symbols.

```lisp
(let ((x 'initial))
  (tagbody
     (setq x 'before)
     (go 10)
     (setq x 'skipped)
   10
     (setq x (list x 'after)))
  x)
=> (BEFORE AFTER)
```

### The scope of go is lexical

`go` can only transfer to tags that are lexically visible. You cannot use `go` to jump into a `tagbody` from outside its lexical scope.

```lisp
;; go finds the innermost matching tag
(let ((result nil))
  (tagbody
     (tagbody
        (go done)         ; jumps to inner done
      done
        (push 'inner result))
     (push 'outer result)
   done)
  (nreverse result))
=> (INNER OUTER)
```
