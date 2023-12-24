**copy-readtable** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"copy-readtable"}><b>copy-readtable</b></ClLinks> &amp;optional *from-readtable to-readtable → readtable* 



**Arguments and Values:** 



*from-readtable*—a *readtable designator* . The default is the *current readtable*. 



*to-readtable*—a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>—the *to-readtable* if it is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, or else a *fresh readtable*. 



**Description:** 



<ClLinks styled={true} term={"copy-readtable"}><b>copy-readtable</b></ClLinks> copies *from-readtable*. 



If *to-readtable* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, a new <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> is created and returned. Otherwise the <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> specified by *to-readtable* is modified and returned. 



<ClLinks styled={true} term={"copy-readtable"}><b>copy-readtable</b></ClLinks> copies the setting of <ClLinks styled={true} term={"readtable-case"}><b>readtable-case</b></ClLinks>. 



**Examples:**
```lisp

(setq zvar 123) → 123 
(set-syntax-from-char #\z #\’ (setq table2 (copy-readtable))) → T 
zvar → 123 
(copy-readtable table2 \*readtable\*) → #<READTABLE 614000277> 



zvar → VAR 
(setq \*readtable\* (copy-readtable)) → #<READTABLE 46210223> 
zvar → VAR 
(setq \*readtable\* (copy-readtable nil)) → #<READTABLE 46302670> 
zvar → 123 

```
**See Also:** 



<ClLinks styled={true} term={"readtable"}><b>readtable</b></ClLinks>, <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> 



**Notes:** 



(setq \*readtable\* (copy-readtable nil)) 



restores the input syntax to standard Common Lisp syntax, even if the *initial readtable* has been clobbered (assuming it is not so badly clobbered that you cannot type in the above expression). 



On the other hand, 



(setq \*readtable\* (copy-readtable)) 



replaces the current <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> with a copy of itself. This is useful if you want to save a copy of a readtable for later use, protected from alteration in the meantime. It is also useful if you want to locally bind the readtable to a copy of itself, as in: 



(let ((\*readtable\* (copy-readtable))) ...) 



