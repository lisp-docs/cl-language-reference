**copy-readtable** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"copy-readtable"}><b>copy-readtable</b></DictionaryLink> &amp;optional *from-readtable to-readtable → readtable* 



**Arguments and Values:** 



*from-readtable*—a <GlossaryTerm styled={true} term={"readtable designator"}><i>readtable designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 



*to-readtable*—a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<ClLinks  term={"readtable"}><i>readtable</i></ClLinks>—the *to-readtable* if it is <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks>, or else a *fresh readtable*. 



**Description:** 



<DictionaryLink  term={"copy-readtable"}><b>copy-readtable</b></DictionaryLink> copies *from-readtable*. 



If *to-readtable* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, a new <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> is created and returned. Otherwise the <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> specified by *to-readtable* is modified and returned. 



<DictionaryLink  term={"copy-readtable"}><b>copy-readtable</b></DictionaryLink> copies the setting of <DictionaryLink  term={"readtable-case"}><b>readtable-case</b></DictionaryLink>. 



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



<DictionaryLink  term={"readtable"}><b>readtable</b></DictionaryLink>, <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> 



**Notes:** 



(setq \*readtable\* (copy-readtable nil)) 



restores the input syntax to standard Common Lisp syntax, even if the <GlossaryTerm styled={true} term={"initial readtable"}><i>initial readtable</i></GlossaryTerm> has been clobbered (assuming it is not so badly clobbered that you cannot type in the above expression). 



On the other hand, 



(setq \*readtable\* (copy-readtable)) 



replaces the current <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> with a copy of itself. This is useful if you want to save a copy of a readtable for later use, protected from alteration in the meantime. It is also useful if you want to locally bind the readtable to a copy of itself, as in: 



(let ((\*readtable\* (copy-readtable))) ...) 



