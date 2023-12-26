**list-all-packages** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"list-all-packages"}><b>list-all-packages</b></DictionaryLink> *⟨no arguments⟩ → packages* 



**Arguments and Values:** 



<ClLinks  term={"package"}><i>packages</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of *package objects*. 



**Description:** 



<DictionaryLink  term={"list-all-packages"}><b>list-all-packages</b></DictionaryLink> returns a *fresh list* of all <GlossaryTerm styled={true} term={"registered package"}><i>registered packages</i></GlossaryTerm>. 



**Examples:**
```lisp
(let ((before (list-all-packages))) 
  (make-package ’temp) 
  (set-difference (list-all-packages) before)) → (#<PACKAGE "TEMP">) 
```
**Affected By:** 



<DictionaryLink  term={"defpackage"}><b>defpackage</b></DictionaryLink>, <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink>, <DictionaryLink  term={"make-package"}><b>make-package</b></DictionaryLink> 



