---
title: "vector-pop"
---

# vector-pop

import VectorPopFunction from './_vector-pop_function.md';

<VectorPopFunction />

## Expanded Reference: vector-pop

### Basic Usage

`vector-pop` decreases the fill pointer by one and returns the element that was at that position. It is the inverse of `vector-push`.

```lisp
(let ((v (make-array 5 :fill-pointer 3
                     :initial-contents '(a b c nil nil))))
  (list (vector-pop v)      ; removes and returns C
        (vector-pop v)      ; removes and returns B
        (fill-pointer v)
        v))
=> (C B 1 #(A))
```

### Stack-Like Behavior

`vector-push` and `vector-pop` together implement a stack (LIFO) on a vector.

```lisp
(let ((stack (make-array 10 :fill-pointer 0)))
  (vector-push 'first stack)
  (vector-push 'second stack)
  (vector-push 'third stack)
  (list (vector-pop stack)    ; LIFO: third comes out first
        (vector-pop stack)
        (vector-pop stack)))
=> (THIRD SECOND FIRST)
```

### Error on Empty Vector

`vector-pop` signals an error if the fill pointer is zero (the vector is logically empty).

```lisp
;; This would signal an error:
;; (vector-pop (make-array 5 :fill-pointer 0))
;; --> ERROR: fill pointer is zero

;; Safe usage -- check before popping
(let ((v (make-array 5 :fill-pointer 0)))
  (if (> (fill-pointer v) 0)
      (vector-pop v)
      :empty))
=> :EMPTY
```

### Push/Pop Cycle with vector-push-extend

Combining `vector-push-extend` and `vector-pop` for a dynamically-sized stack.

```lisp
(let ((stack (make-array 2 :fill-pointer 0 :adjustable t)))
  (dotimes (i 5)
    (vector-push-extend (* i 10) stack))
  (let ((results '()))
    (dotimes (i 3)
      (push (vector-pop stack) results))
    (list :popped (nreverse results)
          :remaining (copy-seq stack))))
=> (:POPPED (40 30 20) :REMAINING #(0 10))
```
