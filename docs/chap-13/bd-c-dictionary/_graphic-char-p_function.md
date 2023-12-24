**graphic-char-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></ClLinks> *char → generalized-boolean* 



**Arguments and Values:** 



*char*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 







 



 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is a *graphic character* ; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(graphic-char-p #\G) → true 
(graphic-char-p #\#) → true 
(graphic-char-p #\Space) → true 
(graphic-char-p #\Newline) → false 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is not a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**See Also:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, Section 2.1 (Character Syntax), Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



