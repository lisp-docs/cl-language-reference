**copy-seq** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"copy-seq"}><b>copy-seq</b></ClLinks> *sequence → copied-sequence* 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*copied-sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**Description:** 



Creates a copy of *sequence*. The <ClLinks  term={"element"}><i>elements</i></ClLinks> of the new *sequence* are the <ClLinks  term={"same"}><i>same</i></ClLinks> as the corresponding <ClLinks  term={"element"}><i>elements</i></ClLinks> of the given *sequence*. 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , the result is a *fresh simple array* of <ClLinks  term={"rank"}><i>rank</i></ClLinks> one that has the same <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> as *sequence*. If *sequence* is a <ClLinks  term={"list"}><i>list</i></ClLinks>, the result is a *fresh list*. 



**Examples:**
```lisp
(setq str "a string") → "a string" 
(equalp str (copy-seq str)) → true 
(eql str (copy-seq str)) → false 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"copy-list"}><b>copy-list</b></ClLinks> 







 



 



**Notes:** 



From a functional standpoint, (copy-seq x) *≡* (subseq x 0) 



However, the programmer intent is typically very different in these two cases. 



