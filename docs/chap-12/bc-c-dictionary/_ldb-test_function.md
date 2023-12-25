**ldb-test** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"ldb-test"}><b>ldb-test</b></DictionaryLink> *bytespec integer ! generalized-boolean* 



**Arguments and Values:** 



*bytespec*—a *byte specifier* . 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if any of the bits of the byte in *integer* specified by *bytespec* is non-zero; otherwise returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(ldb-test (byte 4 1) 16) *! true* 
(ldb-test (byte 3 1) 16) *! false* 
(ldb-test (byte 3 2) 16) *! true* 

```
**See Also:** 



<DictionaryLink styled={true} term={"byte"}><b>byte</b></DictionaryLink>, <DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink>, <DictionaryLink styled={true} term={"zerop"}><b>zerop</b></DictionaryLink> 



**Notes:** 



(ldb-test bytespec n) *⌘* 



(not (zerop (ldb bytespec n))) *⌘* 



(logtest (ldb bytespec -1) n) 







 



 



