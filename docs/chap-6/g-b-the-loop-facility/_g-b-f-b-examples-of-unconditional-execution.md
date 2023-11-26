**6.1.5.1 Examples of unconditional execution** 

;; Print numbers and their squares. 

;; The DO construct applies to multiple forms. 

(loop for i from 1 to 3 

do (print i) 

(print (\* i i))) 

&#9655; 1 

&#9655; 1 

&#9655; 2 

&#9655; 4 

&#9655; 3 

&#9655; 9 

*→* NIL 

