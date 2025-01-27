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

### Looping and declaring lexical variables `with`

Note the usage of the word `with` below. `with` will be executed once at the beginning of the loop. See below the usage of `for` which updates the binding on each run of the loop.

```lisp
(loop for x below 50
      with i = 0
      when (and (< i 10)
                (not (evenp x)))
        do (print x)
           (incf i))
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
             (incf i)))
```

#### Loop using `with` keyword to declare variables that depend on each other

The `with` form will not have the value of any preceeding variable bound with `for` at the beginning of the loop. However variables bound with another `with` will be available.

```lisp
(loop for x in (list 1 2 3)
      with a = 1
      with b = (* 8 a)
      do (print b))

8 
8 
8 
NIL
```

However using the `x` variable would not work:

```lisp
(loop for x in (list 1 2 3)
      with a = 1
      with b = (* 8 x)
      do (print b))

Value of X in (* 8 X) is NIL, not a NUMBER.
   [Condition of type SIMPLE-TYPE-ERROR]
```

**Note**: The preferred style when using both the `with` and `for` keywords is to write the `with` clauses first:

```lisp
(loop with a = 2
      for y in (list 1 2 3)
      do (print y))
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
