**not** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"not"}><b>not</b></ClLinks> *x → boolean* 



**Arguments and Values:** 



*x*—a *generalized boolean* (*i.e.*, any <ClLinks  term={"object"}><i>object</i></ClLinks>). 



<ClLinks  term={"boolean"}><i>boolean</i></ClLinks>—a <ClLinks  term={"boolean"}><i>boolean</i></ClLinks>. 



**Description:** 



Returns <ClLinks  term={"t"}><b>t</b></ClLinks> if *x* is <ClLinks  term={"false"}><i>false</i></ClLinks>; otherwise, returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp
(not nil) → T 
(not ’()) → T 
(not (integerp ’sss)) → T 
(not (integerp 1)) → NIL 
(not 3.7) → NIL 
(not ’apple) → NIL 
```
**See Also:** 



<ClLinks  term={"null"}><b>null</b></ClLinks> 



**Notes:** 



<ClLinks  term={"not"}><b>not</b></ClLinks> is intended to be used to invert the ‘truth value’ of a <ClLinks  term={"boolean"}><i>boolean</i></ClLinks> (or *generalized boolean*) whereas <ClLinks  term={"null"}><b>null</b></ClLinks> is intended to be used to test for the *empty list*. Operationally, <ClLinks  term={"not"}><b>not</b></ClLinks> and <ClLinks  term={"null"}><b>null</b></ClLinks> compute the same result; which to use is a matter of style. 



