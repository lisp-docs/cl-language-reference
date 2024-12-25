---
title: "loop"
---

# loop

import LoopMacro from './_loop_macro.md';

<LoopMacro />

## Expanded Reference: loop

:::tip
TODO: Please contribute to this page by adding explanations and examples
:::

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

Note the usage of the word `with` below.

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
