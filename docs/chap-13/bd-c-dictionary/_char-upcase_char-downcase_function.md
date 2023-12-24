**char-upcase, char-downcase** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"char-upcase"}><b>char-upcase</b></ClLinks> *character → corresponding-character* 



<ClLinks styled={true} term={"char-downcase"}><b>char-downcase</b></ClLinks> *character → corresponding-character* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>, *corresponding-character*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**Description:** 



If <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is a *lowercase character* , <ClLinks styled={true} term={"char-upcase"}><b>char-upcase</b></ClLinks> returns the corresponding *uppercase character* . Otherwise, <ClLinks styled={true} term={"char-upcase"}><b>char-upcase</b></ClLinks> just returns the given <ClLinks styled={true} term={"character"}><i>character</i></ClLinks>. 



If <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is an *uppercase character* , <ClLinks styled={true} term={"char-downcase"}><b>char-downcase</b></ClLinks> returns the corresponding *lowercase character* . Otherwise, <ClLinks styled={true} term={"char-downcase"}><b>char-downcase</b></ClLinks> just returns the given <ClLinks styled={true} term={"character"}><i>character</i></ClLinks>. 



The result only ever differs from <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> in its *code attribute*; all *implementation-defined attributes* are preserved. 



**Examples:**
```lisp

(char-upcase #\a) → #\A 
(char-upcase #\A) → #\A 
(char-downcase #\a) → #\a 
(char-downcase #\A) → #\a 
(char-upcase #\9) → #\9 
(char-downcase #\9) → #\9 
(char-upcase #\@) → #\@ 
(char-downcase #\@) → #\@ 
;; Note that this next example might run for a very long time in 
;; some implementations if CHAR-CODE-LIMIT happens to be very large 
;; for that implementation. 
(dotimes (code char-code-limit) 
  (let ((char (code-char code))) 
    (when char 
      (unless (cond ((upper-case-p char) (char= (char-upcase (char-downcase char)) char)) ((lower-case-p char) (char= (char-downcase (char-upcase char)) char)) 
		    (t (and (char= (char-upcase (char-downcase char)) char) 
			    (char= (char-downcase (char-upcase char)) char)))) 
	(return char))))) 
→ NIL 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is not a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 







 



 



**See Also:** 



<ClLinks styled={true} term={"upper-case-p"}><b>upper-case-p</b></ClLinks>, <ClLinks styled={true} term={"alpha-char-p"}><b>alpha-char-p</b></ClLinks>, Section 13.1.4.3 (Characters With Case), Section 13.1.10 (Documen tation of Implementation-Defined Scripts) 



**Notes:** 



If the *corresponding-char* is <ClLinks styled={true} term={"different"}><i>different</i></ClLinks> than <ClLinks styled={true} term={"character"}><i>character</i></ClLinks>, then both the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> and the *corresponding char* have <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>. 



Since <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks> ignores the <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> of the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> it compares, the *corresponding-character* is always the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> under <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks>. 



