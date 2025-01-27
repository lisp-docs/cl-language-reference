---
title: "loop"
---

# loop

import LoopMacro from './_loop_macro.md';

<LoopMacro />

## Expanded Reference: loop

### Looping over a list

```lisp
(let ((lst (list 5 4 3 "b" "a")))
  (loop for el in lst
      do (print el)))
5 
4 
3 
"b" 
"a" 
NIL
```

### Looping and declaring lexical variables

Note the usage of the word `with` below. `with` will be executed once at the beginning of the loop. See below the usage of `for` which updates the binding on each run of the loop.

**Note:** the `with` form will not have the value of any preceeding variable bound at the beginning of the loop. For that use `for`.

```lisp
(loop for x below 50
      with i = 0
      when (and (< i 10)
                (not (evenp x)))
        do (print x)
        and do (setf i (1+ i)))
1 
3 
5 
7 
9 
11 
13 
15 
17 
19 
NIL
```

This is similar to the alternative of wrapping the `loop` form in a `let` form.

```lisp
(let ((i 0))
  (loop for x below 50
        when (and (< i 10)
                  (not (evenp x)))
          do (print x)
          and do (setf i (1+ i))))
```

### Loop with lexical variables and updates

Notice the usage of the `for` keyword which indicates the binding should be updated on each run of the loop.

```lisp
(loop for x in (list 1 2 3 4)
      for y = (* x 2)
      do (print y))

2 
4 
6 
8 
NIL
```

The `y` variable will be updated on each run based on the given form `(* x 2)`

### Looping over a Hash Table

```lisp
(let ((given-ht (serapeum:dict "a" 1 "b" 2)))
  (loop for key being each hash-key of given-ht
          using (hash-value value)
        do (format t "~A: ~A ~%" key value)))

a: 1 
b: 2 
NIL

(let ((given-ht (serapeum:dict "a" 1 "b" 2)))
  (loop for value being each hash-value of given-ht
        do (format t "~A~%" value)))

1
2
NIL

(let ((given-ht (serapeum:dict "a" 1 "b" 2)))
  (loop for key being each hash-key of given-ht
        do (format t "~A~%" key)))

a
b
NIL
```
