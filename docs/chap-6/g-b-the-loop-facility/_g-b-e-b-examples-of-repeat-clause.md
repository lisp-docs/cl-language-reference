**6.1.4.1 Examples of REPEAT clause** 

(loop repeat 3 

do (format t "~&What I say three times is true.~%")) 

&#9655; What I say three times is true. 

&#9655; What I say three times is true. 

&#9655; What I say three times is true. 

*→* NIL 

(loop repeat -15 

do (format t "What you see is what you expect~%")) 

*→* NIL 



 

 

