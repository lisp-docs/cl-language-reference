*∗<ClLinks  term={"readtable"}><b><ClLinks  term={"readtable"}><i>readtable</i></ClLinks></b></ClLinks>∗ Variable* 



**Value Type:** 



a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



**Initial Value:** 



A <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> that conforms to the description of Common Lisp syntax in Chapter 2 (Syntax). 



**Description:** 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks> is called the *current readtable*. It controls the parsing behavior of the *Lisp reader* , and can also influence the *Lisp printer* (*e.g.*, see the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"readtable-case"}><b>readtable-case</b></ClLinks>). 



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



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks  term={"load"}><b>load</b></ClLinks> 



**See Also:** 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks  term={"load"}><b>load</b></ClLinks>, <ClLinks  term={"readtable"}><b>readtable</b></ClLinks>, Section 2.1.1.1 (The Current Readtable) 



