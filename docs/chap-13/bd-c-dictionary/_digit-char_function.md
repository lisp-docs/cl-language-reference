**digit-char** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"digit-char"}><b>digit-char</b></ClLinks> *weight* &amp;optional *radix → char* 



**Arguments and Values:** 



*weight*—a non-negative *integer* . 



<ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>—a <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> . The default is 10. 



*char*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Description:** 



If *weight* is less than <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>, <ClLinks styled={true} term={"digit-char"}><b>digit-char</b></ClLinks> returns a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> which has that *weight* when considered as a digit in the specified radix. If the resulting <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is to be an <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>1</sub> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> , it will be an uppercase <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



If *weight* is greater than or equal to <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>, <ClLinks styled={true} term={"digit-char"}><b>digit-char</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(digit-char 0) → #\0 
(digit-char 10 11) → #\A 
(digit-char 10 10) → false 
(digit-char 7) → #\7 
(digit-char 12) → false 
(digit-char 12 16) → #\C ;not #\c 
(digit-char 6 2) → false 
(digit-char 1 2) → #\1 

```
**See Also:** 



<ClLinks styled={true} term={"digit-char-p"}><b>digit-char-p</b></ClLinks>, <ClLinks styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></ClLinks>, Section 2.1 (Character Syntax) 



**Notes:** 



