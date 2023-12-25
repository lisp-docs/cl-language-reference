**find-all-symbols** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></ClLinks> *string → symbols* 



**Arguments and Values:** 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a *string designator* . 



<ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></ClLinks> searches every *registered package* for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that have a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> (under <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks>) as <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. A <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of all such <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is returned. Whether or how the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is ordered is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Examples:**
```lisp
(find-all-symbols ’car) 
→ (CAR) 
<i><sup>or</sup>→</i> (CAR VEHICLES:CAR) 
<i><sup>or</sup>→</i> (VEHICLES:CAR CAR) 
(intern "CAR" (make-package ’temp :use nil)) → TEMP::CAR, NIL 
(find-all-symbols ’car) 
→ (TEMP::CAR CAR) 
<i><sup>or</sup>→</i> (CAR TEMP::CAR) 
<i><sup>or</sup>→</i> (TEMP::CAR CAR VEHICLES:CAR) 
<i><sup>or</sup>→</i> (CAR TEMP::CAR VEHICLES:CAR) 
```
**See Also:** 



<ClLinks styled={true} term={"find-symbol"}><b>find-symbol</b></ClLinks> 



