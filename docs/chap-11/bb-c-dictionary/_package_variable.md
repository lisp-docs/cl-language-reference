*∗<DictionaryLink styled={true} term={"package"}><b><GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm></b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *package object*. 



**Initial Value:** 



the COMMON-LISP-USER <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Description:** 



Whatever *package object* is currently the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink> is referred to as the *current package*. **Examples:**
```lisp

(in-package "COMMON-LISP-USER") *→* #<PACKAGE "COMMON-LISP-USER"> 
\*package\* *→* #<PACKAGE "COMMON-LISP-USER"> 
(make-package "SAMPLE-PACKAGE" :use ’("COMMON-LISP")) 
*→* #<PACKAGE "SAMPLE-PACKAGE"> 
(list 

 
 
 (symbol-package 
  (let ((\*package\* (find-package ’sample-package))) 
    (setq \*some-symbol\* (read-from-string "just-testing")))) 
 \*package\*) 
*→* (#<PACKAGE "SAMPLE-PACKAGE"> #<PACKAGE "COMMON-LISP-USER">) 
(list (symbol-package (read-from-string "just-testing")) 
      \*package\*) 
*→* (#<PACKAGE "COMMON-LISP-USER"> #<PACKAGE "COMMON-LISP-USER">) 
(eq ’foo (intern "FOO")) *→ true* 
(eq ’foo (let ((\*package\* (find-package ’sample-package))) 
	   (intern "FOO"))) 
*→ false* 

```
**Affected By:** 



<DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"in-package"}><b>in-package</b></DictionaryLink> 



**See Also:** 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"in-package"}><b>in-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>, <DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink> 



