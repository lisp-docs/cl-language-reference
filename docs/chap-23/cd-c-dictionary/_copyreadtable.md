**copy-readtable** *Function* 



**Syntax:** 



**copy-readtable** &amp;optional *from-readtable to-readtable → readtable* 



**Arguments and Values:** 



*from-readtable*—a *readtable designator* . The default is the *current readtable*. 



*to-readtable*—a *readtable* or **nil**. The default is **nil**. 



*readtable*—the *to-readtable* if it is *non-nil*, or else a *fresh readtable*. 



**Description:** 



**copy-readtable** copies *from-readtable*. 



If *to-readtable* is **nil**, a new *readtable* is created and returned. Otherwise the *readtable* specified by *to-readtable* is modified and returned. 



**copy-readtable** copies the setting of **readtable-case**. 



**Examples:**
```lisp
 



(setq zvar 123) *→* 123 



(set-syntax-from-char #\z #\’ (setq table2 (copy-readtable))) *→* T 



zvar *→* 123 



(copy-readtable table2 \*readtable\*) *→* #<READTABLE 614000277> 







 



 



zvar *→* VAR 



(setq \*readtable\* (copy-readtable)) *→* #<READTABLE 46210223> 



zvar *→* VAR 



(setq \*readtable\* (copy-readtable nil)) *→* #<READTABLE 46302670> 



zvar *→* 123 




```
**See Also:** 



**readtable**, **\*readtable\*** 



**Notes:** 



(setq \*readtable\* (copy-readtable nil)) 



restores the input syntax to standard Common Lisp syntax, even if the *initial readtable* has been clobbered (assuming it is not so badly clobbered that you cannot type in the above expression). 



On the other hand, 



(setq \*readtable\* (copy-readtable)) 



replaces the current *readtable* with a copy of itself. This is useful if you want to save a copy of a readtable for later use, protected from alteration in the meantime. It is also useful if you want to locally bind the readtable to a copy of itself, as in: 



(let ((\*readtable\* (copy-readtable))) ...) 



