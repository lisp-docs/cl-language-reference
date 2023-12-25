**readtable-case** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"readtable-case"}><b>readtable-case</b></ClLinks> *readtable → mode* 



**(setf (readtable-case** <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>**)** *mode***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>—a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. 



*mode*—a *case sensitivity mode*. 







 



 



**Description:** 



*Accesses* the *readtable case* of <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>, which affects the way in which the *Lisp Reader* reads <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> and the way in which the *Lisp Printer* writes <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



**Examples:**
```lisp
See Section 23.1.2.1 (Examples of Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2.1 (Examples of Effect of Readtable Case on the Lisp Printer). 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> is not a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *mode* is not a *case sensitivity mode*. 



**See Also:** 



<ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks>, <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks>, Section 2.2 (Reader Algorithm), Section 23.1.2 (Effect of Readtable Case on the Lisp Reader), Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp Printer) 



**Notes:** 



<ClLinks styled={true} term={"copy-readtable"}><b>copy-readtable</b></ClLinks> copies the *readtable case* of the <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. 



