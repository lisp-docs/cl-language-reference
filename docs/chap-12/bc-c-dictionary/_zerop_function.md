**zerop** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"zerop"}><b>zerop</b></ClLinks> *number → generalized-boolean* 



**Pronunciation:** 



[ **z—e( )r—o( )p—e** ] 



**Arguments and Values:** 



<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"number"}><i>number</i></ClLinks> is zero (*integer* , <ClLinks  term={"float"}><i>float</i></ClLinks>, or <ClLinks  term={"complex"}><i>complex</i></ClLinks> ); otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



Regardless of whether an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> provides distinct representations for positive and negative floating-point zeros, (zerop -0.0) always returns <ClLinks  term={"true"}><i>true</i></ClLinks>. 



**Examples:**
```lisp
(zerop 0) → true 
(zerop 1) → false 
(zerop -0.0) → true 
(zerop 0/100) → true 
(zerop #c(0 0.0)) → true 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"number"}><i>number</i></ClLinks> is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . 



**Notes:** 



(zerop <ClLinks  term={"number"}><i>number</i></ClLinks>) *≡* (= <ClLinks  term={"number"}><i>number</i></ClLinks> 0) 



