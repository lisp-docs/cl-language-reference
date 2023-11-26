 

Here is an example illustrating the *scope* of *bound declarations*. 

(let ((x 1)) ;[1] 1st occurrence of x 

(declare (special x)) ;[2] 2nd occurrence of x 

(let ((x 2)) ;[3] 3rd occurrence of x 

(let ((old-x x) ;[4] 4th occurrence of x 

(x 3)) ;[5] 5th occurrence of x 

(declare (special x)) ;[6] 6th occurrence of x 

(list old-x x)))) ;[7] 7th occurrence of x 

*→* (2 3) 

The first occurrence of x *establishes* a *dynamic binding* of x because of the **special** *declaration* for x in the second line. The third occurrence of x *establishes* a *lexical binding* of x (because there is no **special** *declaration* in the corresponding **let** *form*). The fourth occurrence of x *x* is a reference to the *lexical binding* of x established in the third line. The fifth occurrence of x *establishes* a *dynamic binding* of *x* for the body of the **let** *form* that begins on that line because of the **special** *declaration* for x in the sixth line. The reference to x in the fourth line is not affected by the **special** *declaration* in the sixth line because that reference is not within the “would-be *lexical scope*” of the *variable* x in the fifth line. The reference to x in the seventh line is a reference to the *dynamic binding* of *x established* in the fifth line. 

Here is another example, to illustrate the *scope* of a *free declaration*. In the following: 

(lambda (&optional (x (foo 1))) ;[1] 

(declare (notinline foo)) ;[2] 

(foo x)) ;[3] 

the *call* to foo in the first line might be compiled inline even though the *call* to foo in the third line must not be. This is because the **notinline** *declaration* for foo in the second line applies only to the body on the third line. In order to suppress inlining for both *calls*, one might write: 

(locally (declare (notinline foo)) ;[1] 

(lambda (&optional (x (foo 1))) ;[2] 

(foo x))) ;[3] 

or, alternatively: 

(lambda (&optional ;[1] 

(x (locally (declare (notinline foo)) ;[2] 

(foo 1)))) ;[3] 

(declare (notinline foo)) ;[4] 

(foo x)) ;[5] 

Finally, here is an example that shows the *scope* of *declarations* in an *iteration form*. 

(let ((x 1)) ;[1] 

(declare (special x)) ;[2]  



(let ((x 2)) ;[3] 

(dotimes (i x x) ;[4] 

(declare (special x))))) ;[5] 

*→* 1 

In this example, the first reference to x on the fourth line is to the *lexical binding* of x established on the third line. However, the second occurrence of x on the fourth line lies within the *scope* of the *free declaration* on the fifth line (because this is the *result-form* of the **dotimes**) and therefore refers to the *dynamic binding* of x.  



