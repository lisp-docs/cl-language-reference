**list-all-packages** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"list-all-packages"}><b>list-all-packages</b></DictionaryLink> *hno argumentsi → packages* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *package objects*. 



**Description:** 



<DictionaryLink styled={true} term={"list-all-packages"}><b>list-all-packages</b></DictionaryLink> returns a *fresh list* of all *registered packages*. 



**Examples:**
```lisp

(let ((before (list-all-packages))) 
  (make-package ’temp) 
  (set-difference (list-all-packages) before)) *→* (#<PACKAGE "TEMP">) 

```
**Affected By:** 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink>, <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink> 



