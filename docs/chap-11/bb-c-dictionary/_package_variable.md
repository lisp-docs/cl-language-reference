*∗<DictionaryLink  term={"package"}><b><GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm></b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *package object*. 



**Initial Value:** 



the COMMON-LISP-USER <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**Description:** 



Whatever *package object* is currently the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> is referred to as the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 

**Examples:**
```lisp
(in-package "COMMON-LISP-USER") → #<PACKAGE "COMMON-LISP-USER"> 
\*package\* → #<PACKAGE "COMMON-LISP-USER"> 
(make-package "SAMPLE-PACKAGE" :use ’("COMMON-LISP")) 
→ #<PACKAGE "SAMPLE-PACKAGE"> 
(list 
 
 
 (symbol-package 
  (let ((\*package\* (find-package ’sample-package))) 
    (setq \*some-symbol\* (read-from-string "just-testing")))) 
 \*package\*) 
→ (#<PACKAGE "SAMPLE-PACKAGE"> #<PACKAGE "COMMON-LISP-USER">) 
(list (symbol-package (read-from-string "just-testing")) 
      \*package\*) 
→ (#<PACKAGE "COMMON-LISP-USER"> #<PACKAGE "COMMON-LISP-USER">) 
(eq ’foo (intern "FOO")) → true 
(eq ’foo (let ((\*package\* (find-package ’sample-package))) 
	   (intern "FOO"))) 
→ false 
```
**Affected By:** 



<DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink> 



**See Also:** 



<DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink  term={"in-package"}><b>in-package</b></DictionaryLink>, <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, <DictionaryLink  term={"package"}><b>package</b></DictionaryLink> 



