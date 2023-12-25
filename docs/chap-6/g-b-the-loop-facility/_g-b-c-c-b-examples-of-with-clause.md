```lisp

;; These bindings occur in sequence. 



(loop with a = 1 
      with b = (+ a 2) 
      with c = (+ b 3) 
      return (list a b c)) 
*→* (1 3 6) 
;; These bindings occur in parallel. 
(setq a 5 b 10) 
*→* 10 
(loop with a = 1 
      and b = (+ a 2) 
      and c = (+ b 3) 
      return (list a b c)) 
*→* (1 7 13) 
;; This example shows a shorthand way to declare local variables 
;; that are of different types. 
(loop with (a b c) of-type (float integer float) 
      return (format nil "~A ~A ~A" a b c)) 
*→* "0.0 0 0.0" 
;; This example shows a shorthand way to declare local variables 
;; that are the same type. 
(loop with (a b c) of-type float 
      return (format nil "~A ~A ~A" a b c)) 
*→* "0.0 0.0 0.0" 

```