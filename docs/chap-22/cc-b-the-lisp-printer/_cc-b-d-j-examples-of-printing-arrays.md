 

(let ((a (make-array ’(3 3))) 

(\*print-pretty\* t) 

(\*print-array\* t)) 

(dotimes (i 3) (dotimes (j 3) (setf (aref a i j) (format nil "\<~D,~D\>" i j)))) (print a) 

(print (make-array 9 :displaced-to a))) 

&#9655; #2A(("\<0,0\>" "\<0,1\>" "\<0,2\>") 

&#9655; ("\<1,0\>" "\<1,1\>" "\<1,2\>") 



 

 

&#9655; ("\<2,0\>" "\<2,1\>" "\<2,2\>")) 

&#9655; #("\<0,0\>" "\<0,1\>" "\<0,2\>" "\<1,0\>" "\<1,1\>" "\<1,2\>" "\<2,0\>" "\<2,1\>" "\<2,2\>") 

*→* #\<ARRAY 9 indirect 36363476\> 

