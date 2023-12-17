**/, //, ///** *Variable* 



**Value Type:** 



a *proper list*. 



**Initial Value:** 



*implementation-dependent*. 



**Description:** 



The *variables* **/**, **//**, and **///** are maintained by the *Lisp read-eval-print loop* to save the values of results that were printed at the end of the loop. 



The *value* of **/** is a *list* of the most recent *values* that were printed, the *value* of **//** is the previous value of **/**, and the *value* of **///** is the previous value of **//**. 



The *values* of **/**, **//**, and **///** are updated immediately prior to printing the *return value* of a top-level *form* by the *Lisp read-eval-print loop*. If the *evaluation* of such a *form* is aborted prior to its normal return, the values of **/**, **//**, and **///** are not updated. 



**Examples:**
```lisp
 
(floor 22 7) → 3, 1 
(+ (\* (car /) 7) (cadr /)) → 22 

```
**Affected By:** 



*Lisp read-eval-print loop*. 



**See Also:** 



**-** (*variable*), **+** (*variable*), **\*** (*variable*), Section 25.1.1 (Top level loop) 







 



 



