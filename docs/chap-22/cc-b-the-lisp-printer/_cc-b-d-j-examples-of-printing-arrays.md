 



(let ((a (make-array ’(3 3))) 



(\*print-pretty\* t) 



(\*print-array\* t)) 



(dotimes (i 3) (dotimes (j 3) (setf (aref a i j) (format nil "&lt;~D,~D&gt;" i j)))) (print a) 



(print (make-array 9 :displaced-to a))) 



▷ #2A(("&lt;0,0&gt;" "&lt;0,1&gt;" "&lt;0,2&gt;") 



▷ ("&lt;1,0&gt;" "&lt;1,1&gt;" "&lt;1,2&gt;") 







 



 



▷ ("&lt;2,0&gt;" "&lt;2,1&gt;" "&lt;2,2&gt;")) 



▷ #("&lt;0,0&gt;" "&lt;0,1&gt;" "&lt;0,2&gt;" "&lt;1,0&gt;" "&lt;1,1&gt;" "&lt;1,2&gt;" "&lt;2,0&gt;" "&lt;2,1&gt;" "&lt;2,2&gt;") 



*→* #<ARRAY 9 indirect 36363476> 



