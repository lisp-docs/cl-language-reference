**copy-seq** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"copy-seq"}><b>copy-seq</b></DictionaryLink> *sequence → copied-sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*copied-sequence*—a *proper sequence*. 



**Description:** 



Creates a copy of *sequence*. The <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the new *sequence* are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the corresponding <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the given *sequence*. 



If *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result is a *fresh simple array* of <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> one that has the same *actual array element type* as *sequence*. If *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the result is a *fresh list*. 



**Examples:**
```lisp

(setq str "a string") *→* "a string" 
(equalp str (copy-seq str)) *→ true* 
(eql str (copy-seq str)) *→ false* 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



**See Also:** 



<DictionaryLink styled={true} term={"copy-list"}><b>copy-list</b></DictionaryLink> 







 



 



**Notes:** 



From a functional standpoint, (copy-seq x) *≡* (subseq x 0) 



However, the programmer intent is typically very different in these two cases. 



