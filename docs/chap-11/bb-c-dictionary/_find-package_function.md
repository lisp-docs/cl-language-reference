**find-package** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> *name → package* 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> or a *package object*. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a *package object* or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



If <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> , <DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> locates and returns the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> whose name or nickname is <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. This search is case sensitive. If there is no such <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, <DictionaryLink  term={"find-package"}><b>find-package</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



If <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is a *package object*, that *package object* is returned. 



**Examples:**
```lisp
(find-package ’common-lisp) → #<PACKAGE "COMMON-LISP"> 
(find-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
(find-package ’not-there) → NIL 
```
**Affected By:** 



The set of <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> created by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 



<DictionaryLink  term={"defpackage"}><b>defpackage</b></DictionaryLink>, <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink>, <DictionaryLink  term={"make-package"}><b>make-package</b></DictionaryLink>, <DictionaryLink  term={"rename-package"}><b>rename-package</b></DictionaryLink> 



**See Also:** 



<DictionaryLink  term={"make-package"}><b>make-package</b></DictionaryLink> 







 



 



