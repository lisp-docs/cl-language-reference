**ldb-test** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"ldb-test"}><b>ldb-test</b></ClLinks> *bytespec integer ! generalized-boolean* 



**Arguments and Values:** 



*bytespec*—a *byte specifier* . 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if any of the bits of the byte in *integer* specified by *bytespec* is non-zero; otherwise returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(ldb-test (byte 4 1) 16) *! true* 
(ldb-test (byte 3 1) 16) *! false* 
(ldb-test (byte 3 2) 16) *! true* 
```
**See Also:** 



<ClLinks  term={"byte"}><b>byte</b></ClLinks>, <ClLinks  term={"ldb"}><b>ldb</b></ClLinks>, <ClLinks  term={"zerop"}><b>zerop</b></ClLinks> 



**Notes:** 



(ldb-test bytespec n) *⌘* 



(not (zerop (ldb bytespec n))) *⌘* 



(logtest (ldb bytespec -1) n) 







 



 



