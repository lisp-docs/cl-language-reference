*∗<ClLinks  term={"readtable"}><b><ClLinks  term={"readtable"}><i>readtable</i></ClLinks></b></ClLinks>∗ Variable* 



**Value Type:** 



a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



**Initial Value:** 



A <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> that conforms to the description of Common Lisp syntax in Chapter 2 (Syntax). 



**Description:** 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> is called the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. It controls the parsing behavior of the *Lisp reader* , and can also influence the *Lisp printer* (*e.g.*, see the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"readtable-case"}><b>readtable-case</b></DictionaryLink>). 



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



