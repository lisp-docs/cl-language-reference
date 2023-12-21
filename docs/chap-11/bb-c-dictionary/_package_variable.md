*∗***package***∗ Variable* 



**Value Type:** 



a *package object*. 



**Initial Value:** 



the COMMON-LISP-USER *package*. 



**Description:** 



Whatever *package object* is currently the *value* of **\*package\*** is referred to as the *current package*. 

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



**load**, **compile-file**, **in-package** 



**See Also:** 



**compile-file**, **in-package**, **load**, **package** 



