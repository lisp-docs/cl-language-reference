 



The for and as constructs provide a termination test that is determined by the iteration control clause. 



The repeat construct causes termination after a specified number of iterations. (It uses an internal variable to keep track of the number of iterations.) 



The while construct takes one *form*, a *test*, and terminates the iteration if the *test* evaluates to *false*. A while clause is equivalent to the expression (if (not *test*) (loop-finish)). 



The until construct is the inverse of while; it terminates the iteration if the *test* evaluates to any *non-nil* value. An until clause is equivalent to the expression (if *test* (loop-finish)). 



The always construct takes one *form* and terminates the **loop** if the *form* ever evaluates to *false*; in this case, the **loop** *form* returns **nil**. Otherwise, it provides a default return value of **t**. 



The never construct takes one *form* and terminates the **loop** if the *form* ever evaluates to *true*; in this case, the **loop** *form* returns **nil**. Otherwise, it provides a default return value of **t**. 



The thereis construct takes one *form* and terminates the **loop** if the *form* ever evaluates to a *non-nil object*; in this case, the **loop** *form* returns that *object*. Otherwise, it provides a default return value of **nil**. 



If multiple termination test clauses are specified, the **loop** *form* terminates if any are satisfied. For more information, see Section 6.1.4 (Termination Test Clauses). 







 



 



