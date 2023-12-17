*∗***readtable***∗ Variable* 



**Value Type:** 



a *readtable*. 



**Initial Value:** 



A *readtable* that conforms to the description of Common Lisp syntax in Chapter 2 (Syntax). 



**Description:** 



The *value* of **\*readtable\*** is called the *current readtable*. It controls the parsing behavior of the *Lisp reader* , and can also influence the *Lisp printer* (*e.g.*, see the *function* **readtable-case**). 



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



**compile-file**, **load** 



**See Also:** 



**compile-file**, **load**, **readtable**, Section 2.1.1.1 (The Current Readtable) 



