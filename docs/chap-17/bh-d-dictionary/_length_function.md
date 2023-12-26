**length** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"length"}><b>length</b></ClLinks> *sequence → n* 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



*n*—a non-negative *integer* . 



**Description:** 



Returns the number of <ClLinks  term={"element"}><i>elements</i></ClLinks> in *sequence*. 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , the active length as specified by the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is returned. 



**Examples:**
```lisp
(length "abc") → 3 
(setq str (make-array ’(3) :element-type ’character 
		       :initial-contents "abc" 
		       :fill-pointer t)) → "abc" 
(length str) → 3 
(setf (fill-pointer str) 2) → 2 
(length str) → 2 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"list-length"}><b>list-length</b></ClLinks>, <ClLinks  term={"sequence"}><b>sequence</b></ClLinks> 







 



 



<DictionaryLink styled={true} term={"reverse, nreverse"}><b>reverse, nreverse</b></DictionaryLink> 



