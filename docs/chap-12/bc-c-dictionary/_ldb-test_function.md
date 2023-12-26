**ldb-test** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"ldb-test"}><b>ldb-test</b></DictionaryLink> *bytespec integer ! generalized-boolean* 



**Arguments and Values:** 



*bytespec*—a <GlossaryTerm styled={true} term={"byte specifier"}><i>byte specifier</i></GlossaryTerm> . 



*integer*—an *integer* . 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if any of the bits of the byte in *integer* specified by *bytespec* is non-zero; otherwise returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



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







 



 



