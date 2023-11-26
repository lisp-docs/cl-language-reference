 

;; Print every item in a list. 

(loop for item in ’(1 2 3) do (print item)) 

&#9655; 1 

&#9655; 2 

&#9655; 3 

*→* NIL 

;; Print every other item in a list. 

(loop for item in ’(1 2 3 4 5) by #’cddr 

do (print item)) 

&#9655; 1 

&#9655; 3 

&#9655; 5 

*→* NIL 

Iteration **6–11**

 

 

;; Destructure a list, and sum the x values using fixnum arithmetic. 

(loop for (item . x) of-type (t . fixnum) in ’((A . 1) (B . 2) (C . 3)) 

unless (eq item ’B) sum x) 

*→* 4 

