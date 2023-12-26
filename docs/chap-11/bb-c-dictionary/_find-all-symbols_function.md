**find-all-symbols** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink> *string → symbols* 



**Arguments and Values:** 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink> searches every <GlossaryTerm styled={true} term={"registered package"}><i>registered package</i></GlossaryTerm> for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that have a <ClLinks  term={"name"}><i>name</i></ClLinks> that is the <ClLinks  term={"same"}><i>same</i></ClLinks> (under <ClLinks  term={"string"}><b>string=</b></ClLinks>) as <ClLinks  term={"string"}><i>string</i></ClLinks>. A <ClLinks  term={"list"}><i>list</i></ClLinks> of all such <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> is returned. Whether or how the <ClLinks  term={"list"}><i>list</i></ClLinks> is ordered is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



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



<DictionaryLink  term={"find-symbol"}><b>find-symbol</b></DictionaryLink> 



