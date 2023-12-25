```lisp

;; Print some numbers. 
(loop for i from 1 to 3 
      do (print i)) 
▷ 1 
▷ 2 



▷ 3 
*→* NIL 
;; Print every third number. 
(loop for i from 10 downto 1 by 3 
      do (print i)) 
▷ 10 
▷ 7 
▷ 4 
▷ 1 
*→* NIL 
;; Step incrementally from the default starting value. 
(loop for i below 3 
      do (print i)) 
▷ 0 
▷ 1 
▷ 2 
*→* NIL 

```