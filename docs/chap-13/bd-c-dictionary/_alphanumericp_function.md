**alphanumericp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"alphanumericp"}><b>alphanumericp</b></ClLinks> *character → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is an <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>1</sub> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or a *numeric character* ; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(alphanumericp #\Z) → true 
(alphanumericp #\9) → true 
(alphanumericp #\Newline) → false 
(alphanumericp #\#) → false 
```
**Affected By:** 



None. (In particular, the results of this predicate are independent of any special syntax which might have been enabled in the *current readtable*.) 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is not a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**See Also:** 



<ClLinks styled={true} term={"alpha-char-p"}><b>alpha-char-p</b></ClLinks>, <ClLinks styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></ClLinks>, <ClLinks styled={true} term={"digit-char-p"}><b>digit-char-p</b></ClLinks> 



**Notes:** 



Alphanumeric characters are graphic as defined by <ClLinks styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></ClLinks>. The alphanumeric characters are a subset of the graphic characters. The standard characters A through Z, a through z, and 0 through 9 are alphanumeric characters. 



(alphanumericp x) 



*≡* (or (alpha-char-p x) (not (null (digit-char-p x)))) 







 



 



