 



#*n*A 



#*n*A*object* constructs an *n*-dimensional *array*, using *object* as the value of the :initial-contents argument to **make-array**. 



For example, #2A((0 1 5) (foo 2 (hot dog))) represents a 2-by-3 matrix: 



0 1 5 



foo 2 (hot dog) 



In contrast, #1A((0 1 5) (foo 2 (hot dog))) represents a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> 2 whose <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>: 



(0 1 5) (foo 2 (hot dog)) 



#0A((0 1 5) (foo 2 (hot dog))) represents a zero-dimensional *array* whose sole element is a *list*: ((0 1 5) (foo 2 (hot dog))) 



#0A foo represents a zero-dimensional *array* whose sole element is the *symbol* foo. The notation #1A foo is not valid because foo is not a *sequence*. 



If some <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> whose representation is being parsed is found to be 0, all <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> to the right (*i.e.*, the higher numbered <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm>) are also considered to be 0. 



For information on how the *Lisp printer* prints <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm>, see Section 22.1.3.4 (Printing Strings), Section 22.1.3.6 (Printing Bit Vectors), Section 22.1.3.7 (Printing Other Vectors), or Section 22.1.3.8 (Printing Other Arrays).  







