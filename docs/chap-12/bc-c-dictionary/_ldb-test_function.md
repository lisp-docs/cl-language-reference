**ldb-test** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"ldb-test"}><b>ldb-test</b></DictionaryLink> *bytespec integer ! generalized-boolean* 



**Arguments and Values:** 



*bytespec*—a <GlossaryTerm styled={true} term={"byte specifier"}><i>byte specifier</i></GlossaryTerm> . 



*integer*—an *integer* . 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if any of the bits of the byte in *integer* specified by *bytespec* is non-zero; otherwise returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
(ldb-test (byte 4 1) 16) *! true* 
(ldb-test (byte 3 1) 16) *! false* 
(ldb-test (byte 3 2) 16) *! true* 
```
**See Also:** 



<DictionaryLink  term={"byte"}><b>byte</b></DictionaryLink>, <DictionaryLink  term={"ldb"}><b>ldb</b></DictionaryLink>, <DictionaryLink  term={"zerop"}><b>zerop</b></DictionaryLink> 



**Notes:** 



(ldb-test bytespec n) *⌘* 



(not (zerop (ldb bytespec n))) *⌘* 



(logtest (ldb bytespec -1) n) 







 



 



