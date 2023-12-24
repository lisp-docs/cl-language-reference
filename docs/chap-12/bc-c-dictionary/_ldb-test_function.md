**ldb-test** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"ldb-test"}><b>ldb-test</b></ClLinks> *bytespec integer ! generalized-boolean* 



**Arguments and Values:** 



*bytespec*—a *byte specifier* . 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if any of the bits of the byte in *integer* specified by *bytespec* is non-zero; otherwise returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(ldb-test (byte 4 1) 16) *! true* 
(ldb-test (byte 3 1) 16) *! false* 
(ldb-test (byte 3 2) 16) *! true* 

```
**See Also:** 



<ClLinks styled={true} term={"byte"}><b>byte</b></ClLinks>, <ClLinks styled={true} term={"ldb"}><b>ldb</b></ClLinks>, <ClLinks styled={true} term={"zerop"}><b>zerop</b></ClLinks> 



**Notes:** 



(ldb-test bytespec n) *⌘* 



(not (zerop (ldb bytespec n))) *⌘* 



(logtest (ldb bytespec -1) n) 







 



 



