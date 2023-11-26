**6.1.3.4 Examples of MAXIMIZE and MINIMIZE clauses** 

(loop for i in ’(2 1 5 3 4) 

maximize i) 

*→* 5 

(loop for i in ’(2 1 5 3 4) 

minimize i) 

*→* 1 

;; In this example, FIXNUM applies to the internal variable that holds ;; the maximum value. 

(setq series ’(1.2 4.3 5.7)) 

*→* (1.2 4.3 5.7) 

(loop for v in series 

maximize (round v) of-type fixnum) 

*→* 6 

;; In this example, FIXNUM applies to the variable RESULT. 

(loop for v of-type float in series 

minimize (round v) into result of-type fixnum 

finally (return result)) 

*→* 1 



 

 

