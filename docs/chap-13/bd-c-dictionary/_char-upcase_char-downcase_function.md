**char-upcase, char-downcase** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"char-upcase"}><b>char-upcase</b></DictionaryLink> *character → corresponding-character* 



<DictionaryLink styled={true} term={"char-downcase"}><b>char-downcase</b></DictionaryLink> *character → corresponding-character* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>, *corresponding-character*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**Description:** 



If <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is a *lowercase character* , <DictionaryLink styled={true} term={"char-upcase"}><b>char-upcase</b></DictionaryLink> returns the corresponding *uppercase character* . Otherwise, <DictionaryLink styled={true} term={"char-upcase"}><b>char-upcase</b></DictionaryLink> just returns the given <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>. 



If <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is an *uppercase character* , <DictionaryLink styled={true} term={"char-downcase"}><b>char-downcase</b></DictionaryLink> returns the corresponding *lowercase character* . Otherwise, <DictionaryLink styled={true} term={"char-downcase"}><b>char-downcase</b></DictionaryLink> just returns the given <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>. 



The result only ever differs from <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> in its *code attribute*; all *implementation-defined attributes* are preserved. 



**Examples:**
```lisp

(char-upcase #\a) *→* #\A 
(char-upcase #\A) *→* #\A 
(char-downcase #\a) *→* #\a 
(char-downcase #\A) *→* #\a 
(char-upcase #\9) *→* #\9 
(char-downcase #\9) *→* #\9 
(char-upcase #\@) *→* #\@ 
(char-downcase #\@) *→* #\@ 
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
*→* NIL 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"upper-case-p"}><b>upper-case-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"alpha-char-p"}><b>alpha-char-p</b></DictionaryLink>, Section 13.1.4.3 (Characters With Case), Section 13.1.10 (Documen tation of Implementation-Defined Scripts) 



**Notes:** 



If the *corresponding-char* is <GlossaryTerm styled={true} term={"different"}><i>different</i></GlossaryTerm> than <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>, then both the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> and the *corresponding char* have <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>. 



Since <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink> ignores the <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> it compares, the *corresponding-character* is always the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> under <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink>. 



