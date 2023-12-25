**mod, rem** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"mod"}><b>mod</b></ClLinks> *number divisor → modulus* 



<ClLinks styled={true} term={"rem"}><b>rem</b></ClLinks> *number divisor → remainder* 



**Arguments and Values:** 



<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a *real*. 



*divisor*—a *real*. 



*modulus*, *remainder*—a *real*. 



**Description:** 



<ClLinks styled={true} term={"mod"}><b>mod</b></ClLinks> and <ClLinks styled={true} term={"rem"}><b>rem</b></ClLinks> are generalizations of the modulus and remainder functions respectively. 



<ClLinks styled={true} term={"mod"}><b>mod</b></ClLinks> performs the operation <ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks> on <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> and *divisor* and returns the remainder of the <ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks> operation. 



<ClLinks styled={true} term={"rem"}><b>rem</b></ClLinks> performs the operation <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> on <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> and *divisor* and returns the remainder of the <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> operation. 



<ClLinks styled={true} term={"mod"}><b>mod</b></ClLinks> and <ClLinks styled={true} term={"rem"}><b>rem</b></ClLinks> are the modulus and remainder functions when <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> and *divisor* are *integers*. 

**Examples:**
```lisp
(rem -1 5) → -1 
(mod -1 5) → 4 
(mod 13 4) → 1 
(rem 13 4) → 1 
(mod -13 4) → 3 
(rem -13 4) → -1 
(mod 13 -4) → -3 
(rem 13 -4) → 1 
(mod -13 -4) → -1 
(rem -13 -4) → -1 
(mod 13.4 1) → 0.4 
(rem 13.4 1) → 0.4 
(mod -13.4 1) → 0.6 
(rem -13.4 1) → -0.4 


```
**See Also:** 



<ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks>, <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> 



**Notes:** 



The result of <ClLinks styled={true} term={"mod"}><b>mod</b></ClLinks> is either zero or a *real* with the same sign as *divisor*. 



