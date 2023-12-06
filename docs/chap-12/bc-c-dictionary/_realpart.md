**realpart, imagpart** *Function* 



**Syntax:** 



**realpart** *number → real* 



**imagpart** *number → real* 



**Arguments and Values:** 



*number*—a *number* . 



*real*—a *real*. 



**Description:** 



**realpart** and **imagpart** return the real and imaginary parts of *number* respectively. If *number* is *real*, then **realpart** returns *number* and **imagpart** returns (\* 0 *number*), which has the effect that the imaginary part of a *rational* is 0 and that of a *float* is a floating-point zero of the same format. 



**Examples:**
```lisp
 

(realpart #c(23 41)) *→* 23 

(imagpart #c(23 41.0)) *→* 41.0 

(realpart #c(23 41.0)) *→* 23.0 

(imagpart 23.0) *→* 0.0 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *number* is not a *number* . 



**See Also:** 



**complex** 







 



 



