 



A <DictionaryLink  term={"the"}><b>the</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> can be used as a <ClLinks  term={"place"}><i>place</i></ClLinks>, in which case the declaration is transferred to the *newvalue* form, and the resulting <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> is analyzed. For example, 



(setf (the integer (cadr x)) (+ y 3)) 



is processed as if it were 



(setf (cadr x) (the integer (+ y 3))) 



Data and Control 











