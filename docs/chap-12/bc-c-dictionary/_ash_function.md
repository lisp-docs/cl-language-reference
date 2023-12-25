**ash** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"ash"}><b>ash</b></ClLinks> *integer count → shifted-integer* 



**Arguments and Values:** 



*integer*—an *integer* . 



*count*—an *integer* . 



*shifted-integer*—an *integer* . 



**Description:** 



<ClLinks styled={true} term={"ash"}><b>ash</b></ClLinks> performs the arithmetic shift operation on the binary representation of *integer*, which is treated as if it were binary. 



<ClLinks styled={true} term={"ash"}><b>ash</b></ClLinks> shifts *integer* arithmetically left by *count* bit positions if *count* is positive, or right *count* bit positions if *count* is negative. The shifted value of the same sign as *integer* is returned. 



Mathematically speaking, <b>ash</b> performs the computation floor(<i>integer·</i>2<i><sup>count</sup></i>). Logically, <b>ash</b> moves all of the bits in <i>integer</i> to the left, adding zero-bits at the right, or moves them to the right, discarding bits. 



<ClLinks styled={true} term={"ash"}><b>ash</b></ClLinks> is defined to behave as if *integer* were represented in two’s complement form, regardless of how *integers* are represented internally. 



**Examples:**
```lisp
(ash 16 1) → 32 
(ash 16 0) → 16 
(ash 16 -1) → 8 
(ash -100000000000000000000000000000000 -100) → -79 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *integer* is not an *integer* . Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *count* is not an *integer* . Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>. 



**Notes:** 



(logbitp *j* (ash *n k*)) 



*≡* (and (&gt;= *j k*) (logbitp (- *j k*) *n*)) 







 



 



<ClLinks styled={true} term={"integer-length"}><b>integer-length</b></ClLinks> 



