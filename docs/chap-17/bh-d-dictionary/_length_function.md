**length** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"length"}><b>length</b></DictionaryLink> *sequence → n* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*n*—a non-negative *integer* . 



**Description:** 



Returns the number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in *sequence*. 



If *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , the active length as specified by the *fill pointer* is returned. 



**Examples:**
```lisp

(length "abc") *→* 3 
(setq str (make-array ’(3) :element-type ’character 
		       :initial-contents "abc" 
		       :fill-pointer t)) *→* "abc" 
(length str) *→* 3 
(setf (fill-pointer str) 2) *→* 2 
(length str) *→* 2 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



**See Also:** 



<DictionaryLink styled={true} term={"list-length"}><b>list-length</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink> 







 



 



**reverse, nreverse** 



