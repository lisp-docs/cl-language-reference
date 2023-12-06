**ash** *Function* 



**Syntax:** 



**ash** *integer count → shifted-integer* 



**Arguments and Values:** 



*integer*—an *integer* . 



*count*—an *integer* . 



*shifted-integer*—an *integer* . 



**Description:** 



**ash** performs the arithmetic shift operation on the binary representation of *integer*, which is treated as if it were binary. 



**ash** shifts *integer* arithmetically left by *count* bit positions if *count* is positive, or right *count* bit positions if *count* is negative. The shifted value of the same sign as *integer* is returned. 



Mathematically speaking, <b>ash</b> performs the computation floor(<i>integer·</i>2<i><sup>count</sup></i>). Logically, <b>ash</b> moves all of the bits in <i>integer</i> to the left, adding zero-bits at the right, or moves them to the right, discarding bits. 



**ash** is defined to behave as if *integer* were represented in two’s complement form, regardless of how *integers* are represented internally. 



**Examples:**
```lisp
 

(ash 16 1) *→* 32 

(ash 16 0) *→* 16 

(ash 16 -1) *→* 8 

(ash -100000000000000000000000000000000 -100) *→* -79 


```
**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *integer* is not an *integer* . Should signal an error of *type* **type-error** if *count* is not an *integer* . Might signal **arithmetic-error**. 



**Notes:** 



(logbitp *j* (ash *n k*)) 



*≡* (and (&gt;= *j k*) (logbitp (- *j k*) *n*)) 







 



 



**integer-length** 



