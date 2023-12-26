*∗<ClLinks  term={"readtable"}><b><GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm></b></ClLinks>∗ Variable* 



**Value Type:** 



a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. 



**Initial Value:** 



A <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> that conforms to the description of Common Lisp syntax in Chapter 2 (Syntax). 



**Description:** 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> is called the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. It controls the parsing behavior of the *Lisp reader* , and can also influence the *Lisp printer* (*e.g.*, see the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"readtable-case"}><b>readtable-case</b></DictionaryLink>). 



**Examples:**
```lisp
(readtablep \*readtable\*) → true 

(setq zvar 123) → 123 
(set-syntax-from-char #\z #\’ (setq table2 (copy-readtable))) → T 
zvar → 123 
(setq \*readtable\* table2) → #<READTABLE> 
zvar → VAR 
(setq \*readtable\* (copy-readtable nil)) → #<READTABLE> 
zvar → 123 
```
**Affected By:** 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> 



**See Also:** 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, <DictionaryLink  term={"readtable"}><b>readtable</b></DictionaryLink>, Section 2.1.1.1 (The Current Readtable) 



