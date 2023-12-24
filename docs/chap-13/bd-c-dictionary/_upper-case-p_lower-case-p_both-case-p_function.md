**upper-case-p, lower-case-p, both-case-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"upper-case-p"}><b>upper-case-p</b></ClLinks> *character → generalized-boolean* 



<ClLinks styled={true} term={"lower-case-p"}><b>lower-case-p</b></ClLinks> *character → generalized-boolean* 



<ClLinks styled={true} term={"both-case-p"}><b>both-case-p</b></ClLinks> *character → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



These functions test the case of a given <ClLinks styled={true} term={"character"}><i>character</i></ClLinks>. 



<ClLinks styled={true} term={"upper-case-p"}><b>upper-case-p</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is an *uppercase character* ; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. <ClLinks styled={true} term={"lower-case-p"}><b>lower-case-p</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is a *lowercase character* ; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. <ClLinks styled={true} term={"both-case-p"}><b>both-case-p</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> with <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 

**Examples:**
```lisp

(upper-case-p #\A) → true 
(upper-case-p #\a) → false 
(both-case-p #\a) → true 
(both-case-p #\5) → false 
(lower-case-p #\5) → false 
(upper-case-p #\5) → false 
;; This next example presupposes an implementation 
;; in which #\Bell is an implementation-defined character. 
(lower-case-p #\Bell) → false 




```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is not a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**See Also:** 



<ClLinks styled={true} term={"char-upcase"}><b>char-upcase</b></ClLinks>, <ClLinks styled={true} term={"char-downcase"}><b>char-downcase</b></ClLinks>, Section 13.1.4.3 (Characters With Case), Section 13.1.10 (Documentation of Implementation-Defined Scripts) 



