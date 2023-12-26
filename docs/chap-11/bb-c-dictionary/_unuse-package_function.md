**unuse-package** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> *packages-to-unuse* &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*packages-to-unuse*—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"package designator"}><i>package designators</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> causes <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> to cease inheriting all the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of *packages-to-unuse*; <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> undoes the effects of <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. The *packages-to-unuse* are removed from the <GlossaryTerm styled={true} term={"use list"}><i>use list</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



Any <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that have been *imported* into <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> continue to be <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 

**Examples:**
```lisp
(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(export (intern "SHOES" (make-package ’temp)) ’temp) → T 
(find-symbol "SHOES") → NIL, NIL 
(use-package ’temp) → T 
(find-symbol "SHOES") → SHOES, :INHERITED 
(find (find-package ’temp) (package-use-list ’common-lisp-user)) → #<PACKAGE "TEMP"> (unuse-package ’temp) → T 
(find-symbol "SHOES") → NIL, NIL 
```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"use list"}><i>use list</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is modified. 



**Affected By:** 



Current state of the package system. 



**See Also:** 



<DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink  term={"package-use-list"}><b>package-use-list</b></DictionaryLink> 







 



 



