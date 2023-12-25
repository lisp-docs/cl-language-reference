*∗<DictionaryLink styled={true} term={"print-case"}><b>*print-case*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



One of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> :upcase, :downcase, or :capitalize. 



**Initial Value:** 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> :upcase. 



**Description:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink> controls the case (upper, lower, or mixed) in which to print any uppercase characters in the names of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> when vertical-bar syntax is not used. 



<DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink> has an effect at all times when the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink> also has an effect when the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> unless inside an escape context (*i.e.*, unless between <GlossaryTerm styled={true} term={"vertical-bar"}><i>vertical-bars</i></GlossaryTerm> or after a <GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm>). 



**Examples:**
```lisp

(defun test-print-case () 
  (dolist (\*print-case\* ’(:upcase :downcase :capitalize)) 
    (format t "~&~S ~S~%" ’this-and-that ’|And-something-elSE|))) 
*→* TEST-PC 
;; Although the choice of which characters to escape is specified by 
;; \*PRINT-CASE\*, the choice of how to escape those characters 
;; (i.e., whether single escapes or multiple escapes are used) 
;; is implementation-dependent. The examples here show two of the 
;; many valid ways in which escaping might appear. 



(test-print-case) ;Implementation A 
▷ THIS-AND-THAT |And-something-elSE| 
▷ this-and-that a\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 
▷ This-And-That A\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 
*→* NIL 
(test-print-case) ;Implementation B 
▷ THIS-AND-THAT |And-something-elSE| 
▷ this-and-that a|nd-something-el|se 
▷ This-And-That A|nd-something-el|se 
*→* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> normally converts lowercase characters appearing in <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> to corresponding uppercase characters, so that internally print names normally contain only uppercase characters. 



If <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, lowercase characters in the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> are always printed in lowercase, and are preceded by a single escape character or enclosed by multiple escape characters; uppercase characters in the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> are printed in upper case, in lower case, or in mixed case so as to capitalize words, according to the value of <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink>. The convention for what constitutes a “word” is the same as for **string-capitalize**. 



