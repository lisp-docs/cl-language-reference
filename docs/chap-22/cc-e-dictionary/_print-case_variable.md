*∗<ClLinks styled={true} term={"print-case"}><b>*print-case*</b></ClLinks>∗ Variable* 



**Value Type:** 



One of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> :upcase, :downcase, or :capitalize. 



**Initial Value:** 



The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> :upcase. 



**Description:** 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks> controls the case (upper, lower, or mixed) in which to print any uppercase characters in the names of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> when vertical-bar syntax is not used. 



<ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks> has an effect at all times when the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks> also has an effect when the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> unless inside an escape context (*i.e.*, unless between <ClLinks styled={true} term={"vertical-bar"}><i>vertical-bars</i></ClLinks> or after a <ClLinks styled={true} term={"slash"}><i>slash</i></ClLinks>). 



**Examples:**
```lisp

(defun test-print-case () 
  (dolist (\*print-case\* ’(:upcase :downcase :capitalize)) 
    (format t "~&~S ~S~%" ’this-and-that ’|And-something-elSE|))) 
→ TEST-PC 
;; Although the choice of which characters to escape is specified by 
;; \*PRINT-CASE\*, the choice of how to escape those characters 
;; (i.e., whether single escapes or multiple escapes are used) 
;; is implementation-dependent. The examples here show two of the 
;; many valid ways in which escaping might appear. 



(test-print-case) ;Implementation A 
▷ THIS-AND-THAT |And-something-elSE| 
▷ this-and-that a\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 
▷ This-And-That A\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 
→ NIL 
(test-print-case) ;Implementation B 
▷ THIS-AND-THAT |And-something-elSE| 
▷ this-and-that a|nd-something-el|se 
▷ This-And-That A|nd-something-el|se 
→ NIL 

```
**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks> normally converts lowercase characters appearing in <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> to corresponding uppercase characters, so that internally print names normally contain only uppercase characters. 



If <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, lowercase characters in the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> are always printed in lowercase, and are preceded by a single escape character or enclosed by multiple escape characters; uppercase characters in the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> are printed in upper case, in lower case, or in mixed case so as to capitalize words, according to the value of <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>. The convention for what constitutes a “word” is the same as for **string-capitalize**. 



