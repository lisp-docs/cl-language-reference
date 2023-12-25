**copy-seq** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"copy-seq"}><b>copy-seq</b></ClLinks> *sequence → copied-sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*copied-sequence*—a *proper sequence*. 



**Description:** 



Creates a copy of *sequence*. The <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the new *sequence* are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as the corresponding <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the given *sequence*. 



If *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , the result is a *fresh simple array* of <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> one that has the same *actual array element type* as *sequence*. If *sequence* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, the result is a *fresh list*. 



**Examples:**
```lisp
(setq str "a string") → "a string" 
(equalp str (copy-seq str)) → true 
(eql str (copy-seq str)) → false 
```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. 



**See Also:** 



<ClLinks styled={true} term={"copy-list"}><b>copy-list</b></ClLinks> 







 



 



**Notes:** 



From a functional standpoint, (copy-seq x) *≡* (subseq x 0) 



However, the programmer intent is typically very different in these two cases. 



