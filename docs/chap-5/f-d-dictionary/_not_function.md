**not** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"not"}><b>not</b></DictionaryLink> *x → boolean* 



**Arguments and Values:** 



*x*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> (*i.e.*, any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>). 



<GlossaryTerm  term={"boolean"}><i>boolean</i></GlossaryTerm>—a <GlossaryTerm  term={"boolean"}><i>boolean</i></GlossaryTerm>. 



**Description:** 



Returns <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> if *x* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>; otherwise, returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



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



<DictionaryLink  term={"null"}><b>null</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"not"}><b>not</b></DictionaryLink> is intended to be used to invert the ‘truth value’ of a <GlossaryTerm  term={"boolean"}><i>boolean</i></GlossaryTerm> (or <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>) whereas <DictionaryLink  term={"null"}><b>null</b></DictionaryLink> is intended to be used to test for the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. Operationally, <DictionaryLink  term={"not"}><b>not</b></DictionaryLink> and <DictionaryLink  term={"null"}><b>null</b></DictionaryLink> compute the same result; which to use is a matter of style. 



