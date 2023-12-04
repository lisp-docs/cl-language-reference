**integer-length** *Function* 



**Syntax:** 



**integer-length** *integer → number-of-bits* 



**Arguments and Values:** 



*integer*—an *integer* . 



*number-of-bits*—a non-negative *integer* . 



**Description:** 



Returns the number of bits needed to represent *integer* in binary two’s-complement format. **Examples:**
```lisp
 



(integer-length 0) *→* 0 



(integer-length 1) *→* 1 



(integer-length 3) *→* 2 



(integer-length 4) *→* 3 



(integer-length 7) *→* 3 



(integer-length -1) *→* 0 



(integer-length -4) *→* 2 



(integer-length -7) *→* 3 



(integer-length -8) *→* 3 



(integer-length (expt 2 9)) *→* 10 



(integer-length (1- (expt 2 9))) *→* 9 



(integer-length (- (expt 2 9))) *→* 9 



(integer-length (- (1+ (expt 2 9)))) *→* 10 




```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *integer* is not an *integer* . 



**Notes:** 



This function could have been defined by: 



(defun integer-length (integer) 



(ceiling (log (if (minusp integer) 



(- integer) 



(1+ integer)) 



2))) 



If *integer* is non-negative, then its value can be represented in unsigned binary form in a field whose width in bits is no smaller than (integer-length *integer*). Regardless of the sign of *integer*, its value can be represented in signed binary two’s-complement form in a field whose width in bits is no smaller than (+ (integer-length *integer*) 1). 







 



 



