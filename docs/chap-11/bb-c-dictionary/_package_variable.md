*∗<ClLinks styled={true} term={"package"}><b><ClLinks styled={true} term={"package"}><i>package</i></ClLinks></b></ClLinks>∗ Variable* 



**Value Type:** 



a *package object*. 



**Initial Value:** 



the COMMON-LISP-USER <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Description:** 



Whatever *package object* is currently the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks> is referred to as the *current package*. 

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



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks>, <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks styled={true} term={"in-package"}><b>in-package</b></ClLinks> 



**See Also:** 



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks styled={true} term={"in-package"}><b>in-package</b></ClLinks>, <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>, <ClLinks styled={true} term={"package"}><b>package</b></ClLinks> 



