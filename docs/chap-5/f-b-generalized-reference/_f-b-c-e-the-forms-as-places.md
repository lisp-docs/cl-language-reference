 



A <DictionaryLink styled={true} term={"the"}><b>the</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> can be used as a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, in which case the declaration is transferred to the *newvalue* form, and the resulting <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> is analyzed. For example, 



(setf (the integer (cadr x)) (+ y 3)) 



is processed as if it were 



(setf (cadr x) (the integer (+ y 3))) 



Data and Control 











