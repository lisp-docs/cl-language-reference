 



#*n*A 



#*n*A*object* constructs an *n*-dimensional *array*, using *object* as the value of the :initial-contents argument to **make-array**. 



For example, #2A((0 1 5) (foo 2 (hot dog))) represents a 2-by-3 matrix: 



0 1 5 



foo 2 (hot dog) 



In contrast, #1A((0 1 5) (foo 2 (hot dog))) represents a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> of <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> 2 whose <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>: 



(0 1 5) (foo 2 (hot dog)) 



#0A((0 1 5) (foo 2 (hot dog))) represents a zero-dimensional *array* whose sole element is a *list*: ((0 1 5) (foo 2 (hot dog))) 



#0A foo represents a zero-dimensional *array* whose sole element is the *symbol* foo. The notation #1A foo is not valid because foo is not a *sequence*. 



If some <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> whose representation is being parsed is found to be 0, all <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> to the right (*i.e.*, the higher numbered <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>) are also considered to be 0. 



For information on how the *Lisp printer* prints <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks>, see Section 22.1.3.4 (Printing Strings), Section 22.1.3.6 (Printing Bit Vectors), Section 22.1.3.7 (Printing Other Vectors), or Section 22.1.3.8 (Printing Other Arrays).  







