**ldb-test** *Function* 



**Syntax:** 



**ldb-test** *bytespec integer ! generalized-boolean* 



**Arguments and Values:** 



*bytespec*—a *byte specifier* . 



*integer*—an *integer* . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if any of the bits of the byte in *integer* specified by *bytespec* is non-zero; otherwise returns *false*. 



**Examples:**
```lisp
 



(ldb-test (byte 4 1) 16) *! true* 



(ldb-test (byte 3 1) 16) *! false* 



(ldb-test (byte 3 2) 16) *! true* 




```
**See Also:** 



**byte**, **ldb**, **zerop** 



**Notes:** 



(ldb-test bytespec n) *⌘* 



(not (zerop (ldb bytespec n))) *⌘* 



(logtest (ldb bytespec -1) n) 







 



 



