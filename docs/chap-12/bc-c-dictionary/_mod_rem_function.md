**mod, rem** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"mod"}><b>mod</b></DictionaryLink> *number divisor → modulus* 



<DictionaryLink  term={"rem"}><b>rem</b></DictionaryLink> *number divisor → remainder* 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a *real*. 



*divisor*—a *real*. 



*modulus*, *remainder*—a *real*. 



**Description:** 



<DictionaryLink  term={"mod"}><b>mod</b></DictionaryLink> and <DictionaryLink  term={"rem"}><b>rem</b></DictionaryLink> are generalizations of the modulus and remainder functions respectively. 



<DictionaryLink  term={"mod"}><b>mod</b></DictionaryLink> performs the operation <DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink> on <ClLinks  term={"number"}><i>number</i></ClLinks> and *divisor* and returns the remainder of the <DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink> operation. 



<DictionaryLink  term={"rem"}><b>rem</b></DictionaryLink> performs the operation <DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink> on <ClLinks  term={"number"}><i>number</i></ClLinks> and *divisor* and returns the remainder of the <DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink> operation. 



<DictionaryLink  term={"mod"}><b>mod</b></DictionaryLink> and <DictionaryLink  term={"rem"}><b>rem</b></DictionaryLink> are the modulus and remainder functions when <ClLinks  term={"number"}><i>number</i></ClLinks> and *divisor* are *integers*. 

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



<DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink> 



**Notes:** 



The result of <DictionaryLink  term={"mod"}><b>mod</b></DictionaryLink> is either zero or a *real* with the same sign as *divisor*. 



