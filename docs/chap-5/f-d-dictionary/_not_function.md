**not** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"not"}><b>not</b></ClLinks> *x → boolean* 



**Arguments and Values:** 



*x*—a *generalized boolean* (*i.e.*, any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>). 



<ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>—a <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>. 



**Description:** 



Returns <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> if *x* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>; otherwise, returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



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



<ClLinks styled={true} term={"null"}><b>null</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"not"}><b>not</b></ClLinks> is intended to be used to invert the ‘truth value’ of a <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks> (or *generalized boolean*) whereas <ClLinks styled={true} term={"null"}><b>null</b></ClLinks> is intended to be used to test for the *empty list*. Operationally, <ClLinks styled={true} term={"not"}><b>not</b></ClLinks> and <ClLinks styled={true} term={"null"}><b>null</b></ClLinks> compute the same result; which to use is a matter of style. 



