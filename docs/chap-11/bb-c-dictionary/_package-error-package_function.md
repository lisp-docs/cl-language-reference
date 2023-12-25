**package-error-package** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"package-error-package"}><b>package-error-package</b></DictionaryLink> *condition → package* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for the offending <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> represented by the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. **Examples:**
```lisp

(package-error-package 
 (make-condition ’package-error 
		  :package (find-package "COMMON-LISP"))) 
*→* #<Package "COMMON-LISP"> 

```
**See Also:** 



<DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> 





