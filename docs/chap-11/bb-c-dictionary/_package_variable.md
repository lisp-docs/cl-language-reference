*∗<ClLinks  term={"package"}><b><ClLinks  term={"package"}><i>package</i></ClLinks></b></ClLinks>∗ Variable* 



**Value Type:** 



a *package object*. 



**Initial Value:** 



the COMMON-LISP-USER <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Description:** 



Whatever *package object* is currently the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"package"}><b>\*package\*</b></ClLinks> is referred to as the *current package*. 

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



<ClLinks  term={"load"}><b>load</b></ClLinks>, <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks  term={"in-package"}><b>in-package</b></ClLinks> 



**See Also:** 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks  term={"in-package"}><b>in-package</b></ClLinks>, <ClLinks  term={"load"}><b>load</b></ClLinks>, <ClLinks  term={"package"}><b>package</b></ClLinks> 



