**readtable-case** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"readtable-case"}><b>readtable-case</b></DictionaryLink> *readtable → mode* 



**(setf (readtable-case** <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>**)** *mode***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>—a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. 



*mode*—a <GlossaryTerm styled={true} term={"case sensitivity mode"}><i>case sensitivity mode</i></GlossaryTerm>. 







 



 



**Description:** 



*Accesses* the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>, which affects the way in which the *Lisp Reader* reads <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> and the way in which the *Lisp Printer* writes <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



**Examples:**
```lisp
See Section 23.1.2.1 (Examples of Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2.1 (Examples of Effect of Readtable Case on the Lisp Printer). 
```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> is not a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *mode* is not a <GlossaryTerm styled={true} term={"case sensitivity mode"}><i>case sensitivity mode</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, <DictionaryLink  term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>, Section 2.2 (Reader Algorithm), Section 23.1.2 (Effect of Readtable Case on the Lisp Reader), Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp Printer) 



**Notes:** 



<DictionaryLink  term={"copy-readtable"}><b>copy-readtable</b></DictionaryLink> copies the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of the <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. 



