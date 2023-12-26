**readtable-case** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"readtable-case"}><b>readtable-case</b></ClLinks> *readtable → mode* 



**(setf (readtable-case** <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>**)** *mode***)** 



**Arguments and Values:** 



<ClLinks  term={"readtable"}><i>readtable</i></ClLinks>—a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



*mode*—a <GlossaryTerm styled={true} term={"case sensitivity mode"}><i>case sensitivity mode</i></GlossaryTerm>. 







 



 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>, which affects the way in which the *Lisp Reader* reads <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> and the way in which the *Lisp Printer* writes <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



**Examples:**
```lisp
See Section 23.1.2.1 (Examples of Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2.1 (Examples of Effect of Readtable Case on the Lisp Printer). 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> is not a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *mode* is not a <GlossaryTerm styled={true} term={"case sensitivity mode"}><i>case sensitivity mode</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks>, <ClLinks  term={"print-escape"}><b>\*print-escape\*</b></ClLinks>, Section 2.2 (Reader Algorithm), Section 23.1.2 (Effect of Readtable Case on the Lisp Reader), Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp Printer) 



**Notes:** 



<ClLinks  term={"copy-readtable"}><b>copy-readtable</b></ClLinks> copies the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of the <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



