**evenp, oddp** *Function* 



**Syntax:** 



**evenp** *integer → generalized-boolean* 



**oddp** *integer → generalized-boolean* 



**Arguments and Values:** 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**evenp** returns *true* if *integer* is even (divisible by two); otherwise, returns *false*. 



**oddp** returns *true* if *integer* is odd (not divisible by two); otherwise, returns *false*. **Examples:**
```lisp
 

(evenp 0) *→ true* 

(oddp 10000000000000000000000) *→ false* 

(oddp -1) *→ true* 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *integer* is not an *integer* . 







 



 



**Notes:** 



(evenp *integer*) *≡* (not (oddp *integer*)) 



(oddp *integer*) *≡* (not (evenp *integer*)) 



