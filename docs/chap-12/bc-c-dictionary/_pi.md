**pi** *Constant Variable* 



**Value:** 



an *implementation-dependent long float*. 



**Description:** 



The best *long float* approximation to the mathematical constant *π*. 



**Examples:**
```lisp
 



;; In each of the following computations, the precision depends 



;; on the implementation. Also, if ‘long float’ is treated by 



;; the implementation as equivalent to some other float format 



;; (e.g., ‘double float’) the exponent marker might be the marker 



;; for that equivalent (e.g., ‘D’ instead of ‘L’). 



pi *→* 3.141592653589793L0 



(cos pi) *→* -1.0L0 



(defun sin-of-degrees (degrees) 



(let ((x (if (floatp degrees) degrees (float degrees pi)))) 



(sin (\* x (/ (float pi x) 180))))) 




```
**Notes:** 



An approximation to *π* in some other precision can be obtained by writing (float pi x), where x is a *float* of the desired precision, or by writing (coerce pi *type*), where *type* is the desired type, such as **short-float**. 







 



 



**sinh, cosh, tanh, asinh, acosh, atanh** 



