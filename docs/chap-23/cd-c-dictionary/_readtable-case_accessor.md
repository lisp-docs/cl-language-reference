**readtable-case** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"readtable-case"}><b>readtable-case</b></DictionaryLink> *readtable → mode* 



**(setf (readtable-case** <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>**)** *mode***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. 



*mode*—a *case sensitivity mode*. 







 



 



**Description:** 



*Accesses* the *readtable case* of <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>, which affects the way in which the *Lisp Reader* reads <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> and the way in which the *Lisp Printer* writes <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



**Examples:**
```lisp

See Section 23.1.2.1 (Examples of Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2.1 (Examples of Effect of Readtable Case on the Lisp Printer). 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *mode* is not a *case sensitivity mode*. 



**See Also:** 



<DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>, Section 2.2 (Reader Algorithm), Section 23.1.2 (Effect of Readtable Case on the Lisp Reader), Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp Printer) 



**Notes:** 



<DictionaryLink styled={true} term={"copy-readtable"}><b>copy-readtable</b></DictionaryLink> copies the *readtable case* of the <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. 



