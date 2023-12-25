**length** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"length"}><b>length</b></ClLinks> *sequence → n* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



*n*—a non-negative *integer* . 



**Description:** 



Returns the number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in *sequence*. 



If *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* , the active length as specified by the *fill pointer* is returned. 



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



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*. 



**See Also:** 



<ClLinks styled={true} term={"list-length"}><b>list-length</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks> 







 



 



**reverse, nreverse** 



