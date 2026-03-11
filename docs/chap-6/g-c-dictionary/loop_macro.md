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
      do (format t "~S~%" el)))
.. 5
.. 4
.. 3
.. "b"
.. "a"
..
=> NIL
```

### Looping and declaring lexical variables `with`

Note the usage of the word `with` below. `with` will be executed once at the beginning of the loop. See below the usage of `for` which updates the binding on each run of the loop.

```lisp
(loop for x below 50
      with i = 0
      when (and (< i 10)
                (not (evenp x)))
        do (format t "~D~%" x)
           (incf i))
.. 1
.. 3
.. 5
.. 7
.. 9
.. 11
.. 13
.. 15
.. 17
.. 19
..
=> NIL
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
      do (format t "~D~%" b))
.. 8
.. 8
.. 8
..
=> NIL
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
      do (format t "~D~%" y))
.. 2
.. 4
.. 6
.. 8
..
=> NIL
```

The `y` variable will be updated on each run based on the given form `(* x 2)`

### Looping over a Hash Table

```lisp
(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "a" ht) 1
        (gethash "b" ht) 2)
  (loop for key being each hash-key of ht
          using (hash-value value)
        do (format t "~A: ~A~%" key value)))

(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "a" ht) 1
        (gethash "b" ht) 2)
  (loop for value being each hash-value of ht
        do (format t "~A~%" value)))

(let ((ht (make-hash-table :test #'equal)))
  (setf (gethash "a" ht) 1
        (gethash "b" ht) 2)
  (loop for key being each hash-key of ht
        do (format t "~A~%" key)))
```

### Collecting values

The `collect` clause accumulates results into a list and returns it.

```lisp
(loop for i from 1 to 5
      collect (* i i))
=> (1 4 9 16 25)
```

### Collecting with a filter

```lisp
(loop for x in '(1 "a" 2 "b" 3 "c")
      when (stringp x)
        collect x)
=> ("a" "b" "c")
```

### Counting, summing, maximizing, minimizing

```lisp
(loop for x in '(3 1 4 1 5 9 2 6)
      count (evenp x))
=> 3

(loop for x in '(1 2 3 4 5)
      sum x)
=> 15

(loop for x in '(3 1 4 1 5 9 2 6)
      maximize x)
=> 9

(loop for x in '(3 1 4 1 5 9 2 6)
      minimize x)
=> 1
```

### Multiple accumulations with named variables

Using `into` to accumulate into named variables allows multiple accumulations in a single loop.

```lisp
(loop for x in '(1 -2 3 -4 5)
      when (plusp x) collect x into positives
      when (minusp x) collect x into negatives
      finally (return (list positives negatives)))
=> ((1 3 5) (-2 -4))
```

### Iterating over a range of numbers

```lisp
;; from/to is inclusive
(loop for i from 0 to 4 collect i)
=> (0 1 2 3 4)

;; below is exclusive (same as "from 0 to n-1")
(loop for i below 4 collect i)
=> (0 1 2 3)

;; counting downward
(loop for i from 10 downto 1 collect i)
=> (10 9 8 7 6 5 4 3 2 1)

;; with a step
(loop for i from 0 to 20 by 5 collect i)
=> (0 5 10 15 20)
```

### Iterating over a string

```lisp
(loop for c across "hello"
      collect (char-upcase c))
=> (#\H #\E #\L #\L #\O)
```

### Destructuring in for clauses

```lisp
(loop for (name . age) in '(("Alice" . 30) ("Bob" . 25) ("Carol" . 35))
      when (> age 28)
        collect name)
=> ("Alice" "Carol")
```

### Iterating with multiple for clauses (parallel termination)

When multiple `for` clauses are used, the loop terminates when *any* of them is exhausted.

```lisp
(loop for x in '(a b c d e)
      for i from 1
      collect (list i x))
=> ((1 A) (2 B) (3 C) (4 D) (5 E))

;; Terminates when the shorter list runs out
(loop for x in '(a b c)
      for y in '(1 2 3 4 5)
      collect (list x y))
=> ((A 1) (B 2) (C 3))
```

### Using finally for cleanup or post-processing

```lisp
(loop for x in '(1 2 3 4 5)
      sum x into total
      count t into n
      finally (return (/ total n)))
=> 3
```

### Conditional execution with if/else

```lisp
(loop for x in '(1 2 3 4 5 6)
      if (evenp x)
        collect x into evens
      else
        collect x into odds
      end
      finally (return (values evens odds)))
=> (2 4 6)
=> (1 3 5)
```

### Simple (non-extended) loop

Without any loop keywords, `loop` creates an infinite loop. Use `return` to exit.

```lisp
(let ((i 0))
  (loop
    (when (> i 4) (return i))
    (incf i)))
=> 5
```

### Looping across multiple lists simultaneously

```lisp
(loop for x in '(1 2 3)
      for y in '(10 20 30)
      collect (+ x y))
=> (11 22 33)
```

### Repeat a fixed number of times

```lisp
(loop repeat 3
      do (format t "hello~%"))
.. hello
.. hello
.. hello
..
=> NIL

(loop repeat 4 collect (random 100))
;; result varies, e.g. (42 17 83 5)
```

### Using thereis, always, and never

```lisp
;; thereis returns the first non-nil value
(loop for x in '(nil nil 42 nil)
      thereis x)
=> 42

;; always returns T if every test passes, NIL otherwise
(loop for x in '(2 4 6 8)
      always (evenp x))
=> T

;; never returns T if no element satisfies the test
(loop for x in '(1 3 5 7)
      never (evenp x))
=> T
```
