 

;; Print some numbers. 

(loop for i from 1 to 3 

do (print i)) 

&#9655; 1 

&#9655; 2 



 

 

&#9655; 3 

*→* NIL 

;; Print every third number. 

(loop for i from 10 downto 1 by 3 

do (print i)) 

&#9655; 10 

&#9655; 7 

&#9655; 4 

&#9655; 1 

*→* NIL 

;; Step incrementally from the default starting value. 

(loop for i below 3 

do (print i)) 

&#9655; 0 

&#9655; 1 

&#9655; 2 

*→* NIL 

