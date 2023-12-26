**copy-seq** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"copy-seq"}><b>copy-seq</b></DictionaryLink> *sequence → copied-sequence* 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*copied-sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**Description:** 



Creates a copy of *sequence*. The <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of the new *sequence* are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> as the corresponding <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of the given *sequence*. 



If *sequence* is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> , the result is a *fresh simple array* of <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> one that has the same <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> as *sequence*. If *sequence* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, the result is a *fresh list*. 



**Examples:**
```lisp
(setq str "a string") → "a string" 
(equalp str (copy-seq str)) → true 
(eql str (copy-seq str)) → false 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"copy-list"}><b>copy-list</b></DictionaryLink> 







 



 



**Notes:** 



From a functional standpoint, (copy-seq x) *≡* (subseq x 0) 



However, the programmer intent is typically very different in these two cases. 



