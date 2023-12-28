**find-all-symbols** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink> *string → symbols* 



**Arguments and Values:** 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



<GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink> searches every <GlossaryTerm styled={true} term={"registered package"}><i>registered package</i></GlossaryTerm> for <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that have a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that is the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> (under <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink>) as <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. A <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of all such <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> is returned. Whether or how the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is ordered is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



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



