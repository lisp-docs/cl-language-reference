*∗<ClLinks styled={true} term={"print-escape"}><b>*print-escape*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



**Description:** 



If <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, escape characters and *package prefixes* are not output when an expression is printed. 



If <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, an attempt is made to print an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> in such a way that it can be read again to produce an <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>. (This is only a guideline; not a requirement. See <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks>.) 



For more specific details of how the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> affects the printing of certain <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>, see Section 22.1.3 (Default Print-Object Methods). 



**Examples:**
```lisp

(let ((\*print-escape\* t)) (write #\a)) 



▷ #\a 
→ #\a 
(let ((\*print-escape\* nil)) (write #\a)) 
▷ a 
→ #\a 

```
**Affected By:** 



<ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks>, <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks>, <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"readtable-case"}><b>readtable-case</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks> effectively binds <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> to <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks> effectively binds <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 