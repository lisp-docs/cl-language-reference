 



The for and as constructs provide a termination test that is determined by the iteration control clause. 



The repeat construct causes termination after a specified number of iterations. (It uses an internal variable to keep track of the number of iterations.) 



The while construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, a *test*, and terminates the iteration if the *test* evaluates to <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. A while clause is equivalent to the expression (if (not *test*) (loop-finish)). 



The until construct is the inverse of while; it terminates the iteration if the *test* evaluates to any <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> value. An until clause is equivalent to the expression (if *test* (loop-finish)). 



The always construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and terminates the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> if the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> ever evaluates to <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>; in this case, the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Otherwise, it provides a default return value of <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



The never construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and terminates the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> if the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> ever evaluates to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>; in this case, the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Otherwise, it provides a default return value of <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



The thereis construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and terminates the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> if the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> ever evaluates to a *non-nil object*; in this case, the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> returns that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. Otherwise, it provides a default return value of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If multiple termination test clauses are specified, the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> terminates if any are satisfied. For more information, see Section 6.1.4 (Termination Test Clauses). 







 



 



