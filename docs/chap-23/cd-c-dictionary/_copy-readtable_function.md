**copy-readtable** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"copy-readtable"}><b>copy-readtable</b></DictionaryLink> &amp;optional *from-readtable to-readtable → readtable* 



**Arguments and Values:** 



*from-readtable*—a *readtable designator* . The default is the *current readtable*. 



*to-readtable*—a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>—the *to-readtable* if it is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, or else a *fresh readtable*. 



**Description:** 



<DictionaryLink styled={true} term={"copy-readtable"}><b>copy-readtable</b></DictionaryLink> copies *from-readtable*. 



If *to-readtable* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, a new <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> is created and returned. Otherwise the <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> specified by *to-readtable* is modified and returned. 



<DictionaryLink styled={true} term={"copy-readtable"}><b>copy-readtable</b></DictionaryLink> copies the setting of <DictionaryLink styled={true} term={"readtable-case"}><b>readtable-case</b></DictionaryLink>. 



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



<DictionaryLink styled={true} term={"readtable"}><b>readtable</b></DictionaryLink>, <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> 



**Notes:** 



(setq \*readtable\* (copy-readtable nil)) 



restores the input syntax to standard Common Lisp syntax, even if the *initial readtable* has been clobbered (assuming it is not so badly clobbered that you cannot type in the above expression). 



On the other hand, 



(setq \*readtable\* (copy-readtable)) 



replaces the current <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> with a copy of itself. This is useful if you want to save a copy of a readtable for later use, protected from alteration in the meantime. It is also useful if you want to locally bind the readtable to a copy of itself, as in: 



(let ((\*readtable\* (copy-readtable))) ...) 



