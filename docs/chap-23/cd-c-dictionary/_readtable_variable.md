*∗<ClLinks styled={true} term={"readtable"}><b><ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks></b></ClLinks>∗ Variable* 



**Value Type:** 



a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. 



**Initial Value:** 



A <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> that conforms to the description of Common Lisp syntax in Chapter 2 (Syntax). 



**Description:** 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> is called the *current readtable*. It controls the parsing behavior of the *Lisp reader* , and can also influence the *Lisp printer* (*e.g.*, see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"readtable-case"}><b>readtable-case</b></ClLinks>). 



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



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>, <ClLinks styled={true} term={"readtable"}><b>readtable</b></ClLinks>, Section 2.1.1.1 (The Current Readtable) 



