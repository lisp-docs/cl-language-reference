---
title: "loop-finish"
---

# loop-finish

import LoopFinishLocalMacro from './_loop-finish_local-macro.md';

<LoopFinishLocalMacro />

## Expanded Reference: loop-finish

### Basic usage — terminate and return accumulated value

`loop-finish` exits the loop "normally," executing any `finally` clause and returning any accumulated result. Compare this with `return`, which exits the loop immediately without running `finally`.

```lisp
;; loop-finish triggers the finally clause and returns the collected result
(loop for x in '(1 2 3 :stop 4 5)
      when (keywordp x) do (loop-finish)
      collect x)
=> (1 2 3)
```

### loop-finish vs return

```lisp
;; With loop-finish: the finally clause runs
(loop for x in '(1 2 3 :stop 4 5)
      when (keywordp x) do (loop-finish)
      collect x into result
      finally (return (cons :finished result)))
=> (:FINISHED 1 2 3)

;; With return: the finally clause does NOT run
(loop for x in '(1 2 3 :stop 4 5)
      when (keywordp x) do (return (cons :aborted result))
      collect x into result
      finally (return (cons :finished result)))
=> (:ABORTED 1 2 3)
```

### Using loop-finish in deeply nested code

`loop-finish` is most useful when the exit decision happens inside nested code within the loop body, where `until` or `while` clauses cannot reach.

```lisp
;; Process items from a queue, stopping when we hit an error
(loop for item in '((:ok 1) (:ok 2) (:err 3) (:ok 4))
      for (status value) = item
      when (eq status :err)
        do (format t "Error at value ~A, stopping.~%" value)
           (loop-finish)
      sum value)
.. Error at value 3, stopping.
..
=> 3
```

### loop-finish with a finally clause for cleanup

```lisp
(loop for line in '("data1" "data2" "" "data3")
      when (string= line "")
        do (loop-finish)
      count t into processed
      finally (format t "Processed ~D lines.~%" processed)
              (return processed))
.. Processed 2 lines.
..
=> 2
```
