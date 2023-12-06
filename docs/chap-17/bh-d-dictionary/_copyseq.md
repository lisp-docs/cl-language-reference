**copy-seq** *Function* 



**Syntax:** 



**copy-seq** *sequence → copied-sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*copied-sequence*—a *proper sequence*. 



**Description:** 



Creates a copy of *sequence*. The *elements* of the new *sequence* are the *same* as the corresponding *elements* of the given *sequence*. 



If *sequence* is a *vector* , the result is a *fresh simple array* of *rank* one that has the same *actual array element type* as *sequence*. If *sequence* is a *list*, the result is a *fresh list*. 



**Examples:**
```lisp
 

(setq str "a string") *→* "a string" 

(equalp str (copy-seq str)) *→ true* 

(eql str (copy-seq str)) *→ false* 


```
**Exceptional Situations:** 



Should be prepared to signal an error of *type* **type-error** if *sequence* is not a *proper sequence*. 



**See Also:** 



**copy-list** 







 



 



**Notes:** 



From a functional standpoint, (copy-seq x) *≡* (subseq x 0) 



However, the programmer intent is typically very different in these two cases. 



