 



A <ClLinks  term={"the"}><b>the</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> can be used as a <ClLinks  term={"place"}><i>place</i></ClLinks>, in which case the declaration is transferred to the *newvalue* form, and the resulting <ClLinks  term={"setf"}><b>setf</b></ClLinks> is analyzed. For example, 



(setf (the integer (cadr x)) (+ y 3)) 



is processed as if it were 



(setf (cadr x) (the integer (+ y 3))) 



Data and Control 











