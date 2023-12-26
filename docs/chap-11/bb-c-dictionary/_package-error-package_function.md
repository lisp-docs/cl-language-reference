**package-error-package** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"package-error-package"}><b>package-error-package</b></DictionaryLink> *condition → package* 



**Arguments and Values:** 



<GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



**Description:** 



Returns a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for the offending <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> in the <GlossaryTerm  term={"situation"}><i>situation</i></GlossaryTerm> represented by the <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm>. 

**Examples:**
```lisp
(package-error-package 
 (make-condition ’package-error 
		  :package (find-package "COMMON-LISP"))) 
→ #<Package "COMMON-LISP"> 
```
**See Also:** 



<DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> 





