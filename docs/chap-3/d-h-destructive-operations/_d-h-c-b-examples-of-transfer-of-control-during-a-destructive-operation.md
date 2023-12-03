 

The following examples illustrate some of the many ways in which the *implementation-dependent* nature of the modification can manifest itself. 

(let ((a (list 2 1 4 3 7 6 ’five))) 

(ignore-errors (sort a #’&#60;)) 

a) 

*→* (1 2 3 4 6 7 FIVE) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (2 1 4 3 7 6 FIVE) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (2) 

(prog foo ((a (list 1 2 3 4 5 6 7 8 9 10))) 

(sort a #’(lambda (x y) (if (zerop (random 5)) (return-from foo a) (&#62; x y))))) *→* (1 2 3 4 5 6 7 8 9 10) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (3 4 5 6 2 7 8 9 10 1) 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; (1 2 4 3)  



