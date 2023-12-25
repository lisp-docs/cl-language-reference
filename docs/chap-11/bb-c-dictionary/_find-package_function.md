**find-package** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> *name → package* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *string designator* or a *package object*. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package object* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



If <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a *string designator* , <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> locates and returns the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> whose name or nickname is <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. This search is case sensitive. If there is no such <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a *package object*, that *package object* is returned. 



**Examples:**
```lisp

(find-package ’common-lisp) *→* #<PACKAGE "COMMON-LISP"> 
(find-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
(find-package ’not-there) *→* NIL 

```
**Affected By:** 



The set of <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> created by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink>, <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"rename-package"}><b>rename-package</b></DictionaryLink> 



**See Also:** 



<DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink> 







 



 



