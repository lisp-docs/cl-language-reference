*∗<DictionaryLink styled={true} term={"print-escape"}><b>*print-escape*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



**Description:** 



If <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, escape characters and *package prefixes* are not output when an expression is printed. 



If <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, an attempt is made to print an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> in such a way that it can be read again to produce an <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>. (This is only a guideline; not a requirement. See <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink>.) 



For more specific details of how the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> affects the printing of certain <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>, see Section 22.1.3 (Default Print-Object Methods). 



**Examples:**
```lisp

(let ((\*print-escape\* t)) (write #\a)) 



▷ #\a 
*→* #\a 
(let ((\*print-escape\* nil)) (write #\a)) 
▷ a 
*→* #\a 

```
**Affected By:** 



<DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink>, <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink>, <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> 



**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"readtable-case"}><b>readtable-case</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink> effectively binds <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink> effectively binds <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 