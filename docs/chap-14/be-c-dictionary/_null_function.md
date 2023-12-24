**null** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"null"}><b>null</b></ClLinks> *object → boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>—a <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>. 







 



 



**Description:** 



Returns <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is the *empty list*; otherwise, returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp

(null ’()) → T 
(null nil) → T 
(null t) → NIL 
(null 1) → NIL 

```
**See Also:** 



<ClLinks styled={true} term={"not"}><b>not</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"null"}><b>null</b></ClLinks> is intended to be used to test for the *empty list* whereas <ClLinks styled={true} term={"not"}><b>not</b></ClLinks> is intended to be used to invert a <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks> (or *generalized boolean*). Operationally, <ClLinks styled={true} term={"null"}><b>null</b></ClLinks> and <ClLinks styled={true} term={"not"}><b>not</b></ClLinks> compute the same result; which to use is a matter of style. 



(null <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’null) *≡* (eq <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> ’()) 



