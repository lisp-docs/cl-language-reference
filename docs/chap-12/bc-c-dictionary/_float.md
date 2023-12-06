**float** *Function* 



**Syntax:** 



**float** *number* &amp;optional *prototype ! float* 



**Arguments and Values:** 



*number*—a *real*. 



*prototype*—a *float*. 



*float*—a *float*. 



**Description:** 



**float** converts a *real* number to a *float*. 



If a *prototype* is supplied, a *float* is returned that is mathematically equal to *number* but has the same format as *prototype*. 



If *prototype* is not supplied, then if the *number* is already a *float*, it is returned; otherwise, a *float* is returned that is mathematically equal to *number* but is a *single float*. 



**Examples:**
```lisp
 



(float 0) *!* 0.0 



(float 1 .5) *!* 1.0 



(float 1.0) *!* 1.0 



(float 1/2) *!* 0.5 



<i>!</i> 1.0d0 <i><sub>or</sub></i> 



*!* 1.0 



(eql (float 1.0 1.0d0) 1.0d0) *! true* 







 



 




```
**See Also:** 



**coerce** 



