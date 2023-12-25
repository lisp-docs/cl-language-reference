**unuse-package** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> *packages-to-unuse* &amp;optional *package →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*packages-to-unuse*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *package designators*. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 



**Description:** 



<DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> causes <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> to cease inheriting all the *external symbols* of *packages-to-unuse*; <DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> undoes the effects of <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. The *packages-to-unuse* are removed from the *use list* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



Any <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that have been *imported* into <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> continue to be <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. **Examples:**
```lisp

(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
(export (intern "SHOES" (make-package ’temp)) ’temp) *→* T 
(find-symbol "SHOES") *→* NIL, NIL 
(use-package ’temp) *→* T 
(find-symbol "SHOES") *→* SHOES, :INHERITED 
(find (find-package ’temp) (package-use-list ’common-lisp-user)) *→* #<PACKAGE "TEMP"> (unuse-package ’temp) *→* T 
(find-symbol "SHOES") *→* NIL, NIL 

```
**Side Effects:** 



The *use list* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is modified. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"package-use-list"}><b>package-use-list</b></DictionaryLink> 







 



 



