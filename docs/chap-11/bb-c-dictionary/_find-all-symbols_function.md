**find-all-symbols** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink> *string → symbols* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a *string designator* . 



<GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink> searches every *registered package* for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that have a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> (under <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>) as <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of all such <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is returned. Whether or how the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is ordered is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Examples:**
```lisp

(find-all-symbols ’car) 
*→* (CAR) 
<i><sup>or</sup>→</i> (CAR VEHICLES:CAR) 
<i><sup>or</sup>→</i> (VEHICLES:CAR CAR) 
(intern "CAR" (make-package ’temp :use nil)) *→* TEMP::CAR, NIL 
(find-all-symbols ’car) 
*→* (TEMP::CAR CAR) 
<i><sup>or</sup>→</i> (CAR TEMP::CAR) 
<i><sup>or</sup>→</i> (TEMP::CAR CAR VEHICLES:CAR) 
<i><sup>or</sup>→</i> (CAR TEMP::CAR VEHICLES:CAR) 

```
**See Also:** 



<DictionaryLink styled={true} term={"find-symbol"}><b>find-symbol</b></DictionaryLink> 



