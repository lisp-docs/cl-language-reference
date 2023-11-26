 

#*n*A 

#*n*A*object* constructs an *n*-dimensional *array*, using *object* as the value of the :initial-contents argument to **make-array**. 

For example, #2A((0 1 5) (foo 2 (hot dog))) represents a 2-by-3 matrix: 

0 1 5 

foo 2 (hot dog) 

In contrast, #1A((0 1 5) (foo 2 (hot dog))) represents a *vector* of *length* 2 whose *elements* are *lists*: 

(0 1 5) (foo 2 (hot dog)) 

#0A((0 1 5) (foo 2 (hot dog))) represents a zero-dimensional *array* whose sole element is a *list*: ((0 1 5) (foo 2 (hot dog))) 

#0A foo represents a zero-dimensional *array* whose sole element is the *symbol* foo. The notation #1A foo is not valid because foo is not a *sequence*. 

If some *dimension* of the *array* whose representation is being parsed is found to be 0, all *dimensions* to the right (*i.e.*, the higher numbered *dimensions*) are also considered to be 0. 

For information on how the *Lisp printer* prints *arrays*, see Section 22.1.3.4 (Printing Strings), Section 22.1.3.6 (Printing Bit Vectors), Section 22.1.3.7 (Printing Other Vectors), or Section 22.1.3.8 (Printing Other Arrays).  



